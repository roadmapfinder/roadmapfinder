"use client"
import React, { useState } from 'react';
import { CheckCircle, AlertCircle, Mail, MessageSquare } from 'lucide-react';

const emojis = ['😞', '😕', '😐', '😊', '😍'];

export default function ContactUs() {
  const [contactForm, setContactForm] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [feedbackForm, setFeedbackForm] = useState({
    username: '',
    rating: 3,
    message: '',
  });

  const [loadingContact, setLoadingContact] = useState(false);
  const [loadingFeedback, setLoadingFeedback] = useState(false);
  const [contactStatus, setContactStatus] = useState(null);
  const [feedbackStatus, setFeedbackStatus] = useState(null);

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFeedbackChange = (e) => {
    const { name, value } = e.target;
    setFeedbackForm((prev) => ({
      ...prev,
      [name]: name === 'rating' ? parseInt(value) : value,
    }));
  };

  const validateContactForm = () => {
    if (!contactForm.fullName.trim()) {
      setContactStatus({ type: 'error', message: 'Please enter your full name' });
      return false;
    }
    if (!contactForm.email.trim()) {
      setContactStatus({ type: 'error', message: 'Please enter your email' });
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactForm.email)) {
      setContactStatus({ type: 'error', message: 'Please enter a valid email' });
      return false;
    }
    if (!contactForm.subject.trim()) {
      setContactStatus({ type: 'error', message: 'Please enter a subject' });
      return false;
    }
    if (!contactForm.message.trim()) {
      setContactStatus({ type: 'error', message: 'Please enter your message' });
      return false;
    }
    return true;
  };

  const validateFeedbackForm = () => {
    if (!feedbackForm.username.trim()) {
      setFeedbackStatus({ type: 'error', message: 'Please enter your username' });
      return false;
    }
    return true;
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();

    if (!validateContactForm()) return;

    setLoadingContact(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));

      setContactStatus({
        type: 'success',
        message: 'Message sent successfully! We\'ll get back to you soon.',
      });

      setContactForm({
        fullName: '',
        email: '',
        subject: '',
        message: '',
      });

      setTimeout(() => setContactStatus(null), 5000);
    } catch (error) {
      setContactStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.',
      });
    } finally {
      setLoadingContact(false);
    }
  };

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();

    if (!validateFeedbackForm()) return;

    setLoadingFeedback(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));

      setFeedbackStatus({
        type: 'success',
        message: 'Thank you for your feedback! We appreciate it.',
      });

      setFeedbackForm({
        username: '',
        rating: 3,
        message: '',
      });

      setTimeout(() => setFeedbackStatus(null), 5000);
    } catch (error) {
      setFeedbackStatus({
        type: 'error',
        message: 'Failed to send feedback. Please try again.',
      });
    } finally {
      setLoadingFeedback(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
          Get in Touch
        </h1>
        <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
          Have questions or want to share your experience? We'd love to hear from you.
        </p>
      </div>

      {/* Forms Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Contact Form Card */}
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 sm:p-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Mail className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Contact Us</h2>
              <p className="text-slate-600 text-sm mt-1">
                Got a question? Drop us a line.
              </p>
            </div>
          </div>

          {contactStatus && (
            <div
              className={`mb-6 p-4 rounded-lg flex items-start gap-3 ${
                contactStatus.type === 'success'
                  ? 'bg-green-50 border border-green-200'
                  : 'bg-red-50 border border-red-200'
              }`}
            >
              {contactStatus.type === 'success' ? (
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              )}
              <p
                className={
                  contactStatus.type === 'success'
                    ? 'text-green-700'
                    : 'text-red-700'
                }
              >
                {contactStatus.message}
              </p>
            </div>
          )}

          <div className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={contactForm.fullName}
                onChange={handleContactChange}
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={contactForm.email}
                onChange={handleContactChange}
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="subject"
                value={contactForm.subject}
                onChange={handleContactChange}
                placeholder="How can we help?"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                value={contactForm.message}
                onChange={handleContactChange}
                placeholder="Your message here..."
                rows="5"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              onClick={handleContactSubmit}
              disabled={loadingContact}
              className="w-full py-3 px-6 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
            >
              {loadingContact ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </div>

        {/* Feedback Form Card */}
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 sm:p-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-purple-100 rounded-lg">
              <MessageSquare className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Share Feedback</h2>
              <p className="text-slate-600 text-sm mt-1">
                Help us improve your experience.
              </p>
            </div>
          </div>

          {feedbackStatus && (
            <div
              className={`mb-6 p-4 rounded-lg flex items-start gap-3 ${
                feedbackStatus.type === 'success'
                  ? 'bg-green-50 border border-green-200'
                  : 'bg-red-50 border border-red-200'
              }`}
            >
              {feedbackStatus.type === 'success' ? (
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              )}
              <p
                className={
                  feedbackStatus.type === 'success'
                    ? 'text-green-700'
                    : 'text-red-700'
                }
              >
                {feedbackStatus.message}
              </p>
            </div>
          )}

          <div className="space-y-6">
            {/* Username */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Username <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="username"
                value={feedbackForm.username}
                onChange={handleFeedbackChange}
                placeholder="Your username"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Rating */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-4">
                How would you rate your experience?
              </label>
              <div className="space-y-4">
                <input
                  type="range"
                  name="rating"
                  min="1"
                  max="5"
                  value={feedbackForm.rating}
                  onChange={handleFeedbackChange}
                  className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer accent-purple-600"
                />
                <div className="flex justify-between items-center">
                  <div className="flex gap-3">
                    {emojis.map((emoji, idx) => (
                      <button
                        key={idx}
                        onClick={() =>
                          setFeedbackForm((prev) => ({
                            ...prev,
                            rating: idx + 1,
                          }))
                        }
                        className={`text-3xl transition-all duration-200 transform ${
                          feedbackForm.rating === idx + 1
                            ? 'scale-125'
                            : 'opacity-40 hover:opacity-70'
                        }`}
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                  <span className="text-slate-900 font-semibold">
                    {feedbackForm.rating}/5
                  </span>
                </div>
              </div>
            </div>

            {/* Optional Message */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Additional Feedback (Optional)
              </label>
              <textarea
                name="message"
                value={feedbackForm.message}
                onChange={handleFeedbackChange}
                placeholder="Tell us what we can improve..."
                rows="4"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              onClick={handleFeedbackSubmit}
              disabled={loadingFeedback}
              className="w-full py-3 px-6 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
            >
              {loadingFeedback ? 'Sending...' : 'Submit Feedback'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}