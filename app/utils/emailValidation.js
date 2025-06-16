// utils/emailValidation.js

/**
 * Email validation utility functions with existence checking
 */

// Basic email regex pattern (RFC 5322 compliant)
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

// Common disposable email domains to block
const DISPOSABLE_DOMAINS = [
  '10minutemail.com',
  'tempmail.org',
  'guerrillamail.com',
  'mailinator.com',
  'yopmail.com',
  'temp-mail.org',
  'throwaway.email',
  'maildrop.cc',
  'sharklasers.com',
  'guerrillamailblock.com'
];

// Common typos in popular email domains
const DOMAIN_SUGGESTIONS = {
  'gmail.co': 'gmail.com',
  'gmail.cm': 'gmail.com',
  'gmai.com': 'gmail.com',
  'gmial.com': 'gmail.com',
  'yahoo.co': 'yahoo.com',
  'yahoo.cm': 'yahoo.com',
  'yaho.com': 'yahoo.com',
  'hotmail.co': 'hotmail.com',
  'hotmail.cm': 'hotmail.com',
  'outlook.co': 'outlook.com',
  'outlook.cm': 'outlook.com'
};

/**
 * Validates email format using regex
 */
export function isValidEmailFormat(email) {
  if (!email || typeof email !== 'string') return false;
  return EMAIL_REGEX.test(email.trim().toLowerCase());
}

/**
 * Checks if email domain is disposable/temporary
 */
export function isDisposableEmail(email) {
  if (!email) return false;
  const domain = email.split('@')[1]?.toLowerCase();
  return DISPOSABLE_DOMAINS.includes(domain);
}

/**
 * Suggests correction for common email typos
 */
export function suggestEmailCorrection(email) {
  if (!email) return null;
  const [localPart, domain] = email.split('@');
  if (!domain) return null;

  const suggestion = DOMAIN_SUGGESTIONS[domain.toLowerCase()];
  return suggestion ? `${localPart}@${suggestion}` : null;
}

/**
 * Check if email already exists in Firebase
 */
export async function checkEmailExists(email) {
  try {
    // Import Firebase auth methods
    const { fetchSignInMethodsForEmail } = await import('firebase/auth');
    const { auth } = await import('../lib/firebase');

    const signInMethods = await fetchSignInMethodsForEmail(auth, email);
    return signInMethods.length > 0;
  } catch (error) {
    // If user doesn't exist, Firebase throws an error
    if (error.code === 'auth/user-not-found') {
      return false;
    }
    // For other errors, we'll assume email doesn't exist to avoid blocking legitimate users
    console.warn('Email existence check failed:', error);
    return false;
  }
}

/**
 * Alternative email existence check using a custom API endpoint
 * Use this if you want to check against your own database
 */
export async function checkEmailExistsAPI(email) {
  try {
    const response = await fetch('/api/check-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      throw new Error('API request failed');
    }

    const data = await response.json();
    return data.exists;
  } catch (error) {
    console.warn('Email existence API check failed:', error);
    return false;
  }
}

/**
 * Comprehensive email validation
 */
export function validateEmail(email) {
  const errors = [];
  const warnings = [];

  if (!email || email.trim() === '') {
    errors.push('Email is required');
    return { isValid: false, errors, warnings };
  }

  const trimmedEmail = email.trim();

  // Check basic format
  if (!isValidEmailFormat(trimmedEmail)) {
    errors.push('Please enter a valid email address');
  }

  // Check for disposable email
  if (isDisposableEmail(trimmedEmail)) {
    errors.push('Temporary email addresses are not allowed');
  }

  // Check for potential typos
  const suggestion = suggestEmailCorrection(trimmedEmail);
  if (suggestion) {
    warnings.push(`Did you mean ${suggestion}?`);
  }

  // Check length constraints
  if (trimmedEmail.length > 254) {
    errors.push('Email address is too long');
  }

  // Check for consecutive dots
  if (trimmedEmail.includes('..')) {
    errors.push('Email address cannot contain consecutive dots');
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
    suggestion
  };
}

/**
 * Advanced email validation with DNS check simulation and existence check
 */
export async function validateEmailAdvanced(email, checkExistence = false) {
  const basicValidation = validateEmail(email);

  if (!basicValidation.isValid) {
    return basicValidation;
  }

  const trimmedEmail = email.trim();
  let dnsValid = false;
  let emailExists = false;

  try {
    // DNS/MX record check
    const domain = trimmedEmail.split('@')[1];
    dnsValid = await mockDNSCheck(domain);

    if (!dnsValid) {
      return {
        ...basicValidation,
        isValid: false,
        errors: [...basicValidation.errors, 'Email domain does not exist'],
        dnsValid: false
      };
    }

    // Email existence check (optional)
    if (checkExistence) {
      emailExists = await checkEmailExists(trimmedEmail);

      if (emailExists) {
        return {
          ...basicValidation,
          isValid: false,
          errors: [...basicValidation.errors, 'An account with this email already exists'],
          dnsValid: true,
          emailExists: true
        };
      }
    }

    return {
      ...basicValidation,
      dnsValid: true,
      emailExists: false
    };

  } catch (error) {
    console.warn('Advanced email validation failed:', error);

    // If checks fail, we'll allow the email but add warnings
    const warnings = [...basicValidation.warnings];

    if (!dnsValid) {
      warnings.push('Could not verify email domain');
    }

    if (checkExistence) {
      warnings.push('Could not verify if email is already registered');
    }

    return {
      ...basicValidation,
      dnsValid: false,
      emailExists: false,
      warnings
    };
  }
}

/**
 * Real-time email validation with existence check
 */
export async function validateEmailRealtime(email) {
  // First do basic validation
  const basicValidation = validateEmail(email);

  if (!basicValidation.isValid || !email.trim()) {
    return basicValidation;
  }

  try {
    // Check if email exists
    const emailExists = await checkEmailExists(email.trim());

    if (emailExists) {
      return {
        ...basicValidation,
        isValid: false,
        errors: [...basicValidation.errors, 'An account with this email already exists'],
        emailExists: true
      };
    }

    return {
      ...basicValidation,
      emailExists: false
    };

  } catch (error) {
    console.warn('Real-time email validation failed:', error);
    return {
      ...basicValidation,
      emailExists: false,
      warnings: [...basicValidation.warnings, 'Could not verify email availability']
    };
  }
}

/**
 * Mock DNS check function
 * Replace with actual DNS/MX record lookup in production
 */
async function mockDNSCheck(domain) {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 300));

  // Mock some invalid domains
  const invalidDomains = [
    'nonexistentdomain.com',
    'fakedomain.xyz',
    'invaliddomain.test'
  ];

  return !invalidDomains.includes(domain.toLowerCase());
}

/**
 * Debounced email validation for real-time feedback
 */
export function createDebouncedValidator(callback, delay = 800) {
  let timeoutId;

  return function(email) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback(email);
    }, delay);
  };
}

/**
 * Cache for email existence checks to avoid redundant API calls
 */
const emailExistenceCache = new Map();

/**
 * Cached email existence check
 */
export async function checkEmailExistsCached(email) {
  const normalizedEmail = email.trim().toLowerCase();

  // Check cache first
  if (emailExistenceCache.has(normalizedEmail)) {
    return emailExistenceCache.get(normalizedEmail);
  }

  // Perform actual check
  const exists = await checkEmailExists(normalizedEmail);

  // Cache result for 5 minutes
  emailExistenceCache.set(normalizedEmail, exists);
  setTimeout(() => {
    emailExistenceCache.delete(normalizedEmail);
  }, 5 * 60 * 1000);

  return exists;
}