// downloadPdf.jsx - Pixel-Perfect Python Web Developer Roadmap PDF Generator
import React from 'react';
import { Document, Page, Text, View, StyleSheet, pdf, Font } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';


const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 20,
    fontFamily: 'Helvetica',
    fontSize: 10,
  },

  // Cover Page Styles
  coverHeader: {
    backgroundColor: '#4299E1', // Blue header
    width: '100%',
    marginLeft: -20,
    marginRight: -20,
    marginTop: -20,
    paddingVertical: 30,
    paddingHorizontal: 20,
    marginBottom: 25,
  },
  coverTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 8,
  },
  coverSubtitle: {
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 8,
  },
  coverEdition: {
    fontSize: 11,
    color: '#FFFFFF',
    textAlign: 'center',
  },

  // Introduction Section
  introSection: {
    marginBottom: 20,
  },
  introTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#1A202C',
    marginBottom: 8,
  },
  introText: {
    fontSize: 9.5,
    color: '#4A5568',
    lineHeight: 1.6,
    marginBottom: 10,
  },
  instructionsList: {
    marginTop: 8,
    marginLeft: 5,
  },
  instructionItem: {
    fontSize: 9.5,
    color: '#4A5568',
    lineHeight: 1.6,
    marginBottom: 5,
  },

  // Phase Header Styles
  phaseContainer: {
    marginBottom: 20,
  },
  phaseHeader: {
    borderRadius: 3,
    paddingVertical: 12,
    paddingHorizontal: 8,
    marginBottom: 8,
  },
  phaseNumber: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  phaseTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  phaseSubtitle: {
    fontSize: 9.5,
    fontStyle: 'italic',
    color: '#4A5568',
    marginTop: 6,
  },
  phaseDescription: {
    fontSize: 9.5,
    color: '#4A5568',
    lineHeight: 1.5,
    marginTop: 4,
    marginBottom: 10,
  },

  // Section Box Styles
  sectionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 12,
  },
  sectionBox: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    border: '0.5pt solid #CBD5E0',
    borderRadius: 2,
    marginBottom: 8,
  },
  sectionHeader: {
    paddingVertical: 6,
    paddingHorizontal: 6,
  },
  sectionTitle: {
    fontSize: 10.5,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  sectionContent: {
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  sectionItem: {
    flexDirection: 'row',
    marginBottom: 4,
    alignItems: 'flex-start',
  },
  itemBullet: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#1A202C',
    width: 15,
    marginRight: 3,
  },
  itemText: {
    fontSize: 9,
    color: '#1A202C',
    lineHeight: 1.5,
    flex: 1,
  },

  // Final Tips Section
  finalTipsContainer: {
    marginTop: 15,
  },
  finalTipsHeader: {
    backgroundColor: '#4299E1',
    borderRadius: 3,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  finalTipsTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  finalTipsMessage: {
    fontSize: 10,
    color: '#1A202C',
    lineHeight: 1.6,
    marginBottom: 12,
  },
  skillsTitle: {
    fontSize: 10.5,
    fontWeight: 'bold',
    color: '#1A202C',
    marginBottom: 8,
  },
  skillItem: {
    fontSize: 9.5,
    color: '#1A202C',
    lineHeight: 1.6,
    marginBottom: 3,
  },
  reminderBox: {
    backgroundColor: '#F0FFF4',
    border: '0.5pt solid #48BB78',
    borderRadius: 2,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 12,
  },
  reminderTitle: {
    fontSize: 9.5,
    fontWeight: 'bold',
    color: '#1A202C',
    marginBottom: 5,
  },
  reminderText: {
    fontSize: 9,
    color: '#1A202C',
    lineHeight: 1.5,
  },

  // Footer Styles
  footer: {
    position: 'absolute',
    bottom: 15,
    left: 20,
    right: 20,
    textAlign: 'center',
    fontSize: 8,
    color: '#718096',
    fontStyle: 'italic',
  },
  pageNumber: {
    position: 'absolute',
    bottom: 10,
    right: 20,
    fontSize: 8,
    color: '#718096',
  },

  // Icon/Emoji styles
  emoji: {
    fontSize: 11,
    marginRight: 3,
  },
});

// Phase color mapping - exact colors from the OS PDF
const getPhaseColor = (phaseId) => {
  const colors = {
    1: '#48BB78',   // Green - Phase 1
    2: '#4299E1',   // Blue - Phase 2
    3: '#9F7AEA',   // Purple - Phase 3
    4: '#F56565',   // Red - Phase 4
    5: '#ED8936',   // Orange - Phase 5
    6: '#667EEA',   // Indigo - Phase 6
    7: '#ED64A6',   // Pink - Phase 7
    8: '#38B2AC',   // Teal - Phase 8
    9: '#ECC94B',   // Yellow - Phase 9
    10: '#4A5568',  // Gray - Phase 10
  };
  return colors[phaseId] || '#4299E1';
};

// Icon mapping based on section content
const getIconForSection = (title) => {
  const icons = {
    'Python Core': '🔷',
    'Object-Oriented': '🧩',
    'How the Web Works': '🌐',
    'Frontend Basics': '🎨',
    'Flask': '🔥',
    'Django': '🎯',
    'FastAPI': '⚡',
    'SQL': '🗄️',
    'ORM': '🔗',
    'NoSQL': '📦',
    'Auth': '🔐',
    'Security': '🛡️',
    'API': '🔌',
    'Async': '⚙️',
    'Caching': '💾',
    'Performance': '🚀',
    'Testing': '✅',
    'Linux': '🐧',
    'Docker': '🐳',
    'Web Servers': '⚙️',
    'Cloud': '☁️',
    'System Design': '🏗️',
    'Design Patterns': '📐',
    'Logging': '📊',
    'Portfolio': '💼',
    'Git': '🌿',
    'Interview': '💡',
    'Resume': '📄',
  };

  for (const [key, icon] of Object.entries(icons)) {
    if (title.includes(key)) return icon;
  }
  return '📌';
};

// PDF Document Component
const RoadmapDocument = ({ phases }) => (
  <Document>
    {/* Cover Page */}
    <Page size="A4" style={styles.page}>
      <View style={styles.coverHeader}>
        <Text style={styles.coverTitle}>Python Web Development</Text>
        <Text style={styles.coverSubtitle}>A Comprehensive Learning Roadmap</Text>
        <Text style={styles.coverEdition}>2025 Edition</Text>
      </View>

      <View style={styles.introSection}>
        <Text style={styles.introTitle}>
          Welcome to Your Python Web Development Journey
        </Text>
        <Text style={styles.introText}>
          This comprehensive roadmap will guide you from absolute beginner to industry-ready 
          Python web developer. Each phase builds upon the previous one, ensuring you develop 
          a solid foundation and practical skills that companies value.
        </Text>

        <Text style={styles.introTitle}>How to Use This Roadmap:</Text>
        <View style={styles.instructionsList}>
          <Text style={styles.instructionItem}>
            • Follow each phase sequentially - they build upon each other
          </Text>
          <Text style={styles.instructionItem}>
            • Complete the practice projects - they solidify your understanding
          </Text>
          <Text style={styles.instructionItem}>
            • Take your time - depth matters more than speed
          </Text>
          <Text style={styles.instructionItem}>
            • Build a portfolio as you learn - document your projects on GitHub
          </Text>
          <Text style={styles.instructionItem}>
            • Join communities and engage with other learners
          </Text>
        </View>
      </View>

      <Text style={styles.footer}>
        Generated with Python Web Development Roadmap • 2025 Edition
      </Text>
    </Page>

    {/* Phase Pages */}
    {phases.map((phase, phaseIndex) => (
      <Page key={phase.id} size="A4" style={styles.page}>
        {/* Phase Header */}
        <View style={styles.phaseContainer}>
          <View style={[styles.phaseHeader, { backgroundColor: getPhaseColor(phase.id) }]}>
            <Text style={styles.phaseNumber}>PHASE {phase.id}</Text>
            <Text style={styles.phaseTitle}>{phase.title}</Text>
          </View>

          <Text style={styles.phaseSubtitle}>{phase.subtitle}</Text>
          <Text style={styles.phaseDescription}>{phase.description}</Text>

          {/* Sections */}
          <View style={styles.sectionsContainer}>
            {phase.sections.map((section, sectionIndex) => (
              <View key={sectionIndex} style={styles.sectionBox}>
                {/* Section Header */}
                <View style={[
                  styles.sectionHeader,
                  { backgroundColor: getPhaseColor(phase.id) }
                ]}>
                  <Text style={styles.sectionTitle}>
                    {getIconForSection(section.title)} {section.title}
                  </Text>
                </View>

                {/* Section Items */}
                <View style={styles.sectionContent}>
                  {section.items.map((item, itemIndex) => (
                    <View key={itemIndex} style={styles.sectionItem}>
                      <Text style={styles.itemBullet}>{itemIndex + 1}.</Text>
                      <Text style={styles.itemText}>{item}</Text>
                    </View>
                  ))}
                </View>
              </View>
            ))}
          </View>
        </View>

        <Text 
          style={styles.pageNumber} 
          render={({ pageNumber, totalPages }) => `Page ${pageNumber} of ${totalPages}`}
          fixed
        />
      </Page>
    ))}

    {/* Final Tips Page */}
    <Page size="A4" style={styles.page}>
      <View style={styles.finalTipsContainer}>
        <View style={styles.finalTipsHeader}>
          <Text style={styles.finalTipsTitle}>
            🏆 Final Tips to Become Industry-Ready
          </Text>
        </View>

        <Text style={styles.finalTipsMessage}>
          Congratulations! You've completed the Python Web Development Mastery Roadmap and 
          are ready to design scalable, robust web applications.
        </Text>

        <Text style={styles.skillsTitle}>What Makes You Industry-Ready:</Text>

        <View style={{ marginBottom: 12 }}>
          <Text style={styles.skillItem}>
            ✅ Build secure, production-grade APIs with authentication and authorization
          </Text>
          <Text style={styles.skillItem}>
            ✅ Design efficient databases with proper indexing and query optimization
          </Text>
          <Text style={styles.skillItem}>
            ✅ Write comprehensive tests to ensure code quality and reliability
          </Text>
          <Text style={styles.skillItem}>
            ✅ Deploy applications to cloud platforms with CI/CD pipelines
          </Text>
          <Text style={styles.skillItem}>
            ✅ Scale applications to handle increasing user loads
          </Text>
          <Text style={styles.skillItem}>
            ✅ Debug and resolve production issues effectively
          </Text>
          <Text style={styles.skillItem}>
            ✅ Collaborate in teams using Git and code review processes
          </Text>
          <Text style={styles.skillItem}>
            ✅ Understand system architecture and design patterns
          </Text>
        </View>

        <View style={styles.reminderBox}>
          <Text style={styles.reminderTitle}>💡 Remember:</Text>
          <Text style={styles.reminderText}>
            This is what companies pay for. Focus on building real projects, contribute to 
            open source, and continuously learn. The journey never truly ends in tech!
          </Text>
        </View>
      </View>

      <View style={[styles.footer, { textAlign: 'center' }]}>
        <Text>Generated with Python Web Development Roadmap • 2025 Edition</Text>
        <Text style={{ marginTop: 3 }}>Keep Learning, Keep Building! 🚀</Text>
      </View>

      <Text 
        style={styles.pageNumber} 
        render={({ pageNumber, totalPages }) => `Page ${pageNumber} of ${totalPages}`}
        fixed
      />
    </Page>
  </Document>
);

/**
 * Generate and download the Python Web Developer roadmap as a PDF
 * @param {Array} phases - Array of phase objects from roadmapData
 * @returns {Object} - Success status and filename or error
 */
export const downloadRoadmapPDF = async (phases) => {
  try {
    // Generate PDF blob
    const blob = await pdf(<RoadmapDocument phases={phases} />).toBlob();

    // Create filename with timestamp
    const timestamp = new Date().toISOString().split('T')[0];
    const filename = `Python-WebDev-Roadmap-${timestamp}.pdf`;

    // Save the PDF
    saveAs(blob, filename);

    return {
      success: true,
      filename: filename
    };

  } catch (error) {
    console.error('Error generating PDF:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

export default downloadRoadmapPDF;