import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink, pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';

// Define styles for the PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#f8fafc',
    padding: 30,
    fontFamily: 'Helvetica',
  },
  header: {
    marginBottom: 30,
    textAlign: 'center',
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#3b82f6',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    fontWeight: 'normal',
  },
  phaseContainer: {
    marginBottom: 25,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 20,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  phaseHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  phaseNumber: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#3b82f6',
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 40,
    marginRight: 15,
  },
  phaseTitleContainer: {
    flex: 1,
  },
  phaseTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 2,
  },
  phaseSubtitle: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 2,
  },
  phaseDescription: {
    fontSize: 14,
    color: '#374151',
    fontWeight: 'normal',
  },
  sectionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
  },
  section: {
    flex: '1 1 45%',
    backgroundColor: '#f8fafc',
    borderRadius: 6,
    padding: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#3b82f6',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3b82f6',
    marginBottom: 10,
  },
  itemsList: {
    gap: 6,
  },
  item: {
    fontSize: 11,
    color: '#374151',
    lineHeight: 1.4,
    paddingLeft: 12,
    marginBottom: 4,
  },
  itemNumber: {
    fontWeight: 'bold',
    color: '#1f2937',
  },
  phaseConnector: {
    alignSelf: 'center',
    marginVertical: 15,
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: '#f3f4f6',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#d1d5db',
  },
  connectorText: {
    fontSize: 12,
    color: '#6b7280',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 30,
    padding: 20,
    backgroundColor: '#ecfdf5',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#10b981',
    textAlign: 'center',
  },
  footerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#065f46',
    marginBottom: 8,
  },
  footerText: {
    fontSize: 14,
    color: '#047857',
    lineHeight: 1.5,
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 10,
    bottom: 20,
    right: 30,
    color: '#6b7280',
  },
  watermark: {
    position: 'absolute',
    top: 50,
    right: 30,
    fontSize: 8,
    color: '#d1d5db',
    opacity: 0.5,
  }
});

// PDF Document Component
const RoadmapPDFDocument = ({ phases }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>SQL Engineer Roadmap</Text>
        <Text style={styles.subtitle}>Your Complete Journey from Beginner to Professional</Text>
      </View>



      {/* Phases */}
      {phases.map((phase, index) => (
        <View key={phase.id} wrap={false}>
          <View style={styles.phaseContainer}>
            {/* Phase Header */}
            <View style={styles.phaseHeader}>
              <Text style={[styles.phaseNumber, { backgroundColor: getPhaseColor(phase.color) }]}>
                {phase.id}
              </Text>
              <View style={styles.phaseTitleContainer}>
                <Text style={styles.phaseTitle}>{phase.title}</Text>
                <Text style={styles.phaseSubtitle}>{phase.subtitle}</Text>
                <Text style={styles.phaseDescription}>{phase.description}</Text>
              </View>
            </View>

            {/* Sections */}
            <View style={styles.sectionsContainer}>
              {phase.sections.map((section, sectionIndex) => (
                <View key={sectionIndex} style={styles.section}>
                  <Text style={styles.sectionTitle}>{section.title}</Text>
                  <View style={styles.itemsList}>
                    {section.items.map((item, itemIndex) => (
                      <Text key={itemIndex} style={styles.item}>
                        <Text style={styles.itemNumber}>{itemIndex + 1}.</Text> {item}
                      </Text>
                    ))}
                  </View>
                </View>
              ))}
            </View>
          </View>

          {/* Phase Connector */}
          {index < phases.length - 1 && (
            <View style={styles.phaseConnector}>
              <Text style={styles.connectorText}>
                ↓ Next: Phase {phase.id + 1}
              </Text>
            </View>
          )}
        </View>
      ))}



      {/* Page Number */}
      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
    </Page>
  </Document>
);

// Helper function to convert Tailwind colors to hex
const getPhaseColor = (tailwindColor) => {
  const colorMap = {
    'bg-blue-500': '#3b82f6',
    'bg-purple-500': '#8b5cf6',
    'bg-green-500': '#10b981',
    'bg-orange-500': '#f59e0b',
    'bg-red-500': '#ef4444',
  };
  return colorMap[tailwindColor] || '#3b82f6';
};

// Main download function
export const downloadRoadmapPDF = async (phases) => {
  try {
    // Create the PDF blob
    const blob = await pdf(<RoadmapPDFDocument phases={phases} />).toBlob();

    // Generate filename with current date
    const currentDate = new Date().toISOString().split('T')[0];
    const filename = `SQL-Engineer-roadmap-${currentDate}.pdf`;

    // Save the file
    saveAs(blob, filename);

    return { success: true, filename };
  } catch (error) {
    console.error('Error generating PDF:', error);
    return { success: false, error: error.message };
  }
};

// React Component for PDF Download Link (alternative approach)
export const PDFDownloadButton = ({ phases, className = "", children = "Download PDF" }) => (
  <PDFDownloadLink
    document={<RoadmapPDFDocument phases={phases} />}
    fileName={`SQL-Engineer-roadmap-${new Date().toISOString().split('T')[0]}.pdf`}
    className={className}
  >
    {({ blob, url, loading, error }) => {
      if (loading) return 'Generating PDF...';
      if (error) return 'Error generating PDF';
      return children;
    }}
  </PDFDownloadLink>
  );

// Advanced PDF generation with custom options
export const downloadAdvancedRoadmapPDF = async (phases, options = {}) => {
  const {
    includeWatermark = true,
    customTitle = "SQL Developer Roadmap",
    customSubtitle = "Your Complete Journey from Beginner to Professional",
    pageSize = "A4",
    orientation = "portrait"
  } = options;

  try {
    const AdvancedPDFDocument = () => (
      <Document>
        <Page size={pageSize} orientation={orientation} style={styles.page}>
          {/* Custom Header */}
          <View style={styles.header}>
            <Text style={styles.title}>{customTitle}</Text>
            <Text style={styles.subtitle}>{customSubtitle}</Text>
          </View>


          {/* Content remains the same */}
          {phases.map((phase, index) => (
            <View key={phase.id} wrap={false}>
              <View style={styles.phaseContainer}>
                <View style={styles.phaseHeader}>
                  <Text style={[styles.phaseNumber, { backgroundColor: getPhaseColor(phase.color) }]}>
                    {phase.id}
                  </Text>
                  <View style={styles.phaseTitleContainer}>
                    <Text style={styles.phaseTitle}>{phase.title}</Text>
                    <Text style={styles.phaseSubtitle}>{phase.subtitle}</Text>
                    <Text style={styles.phaseDescription}>{phase.description}</Text>
                  </View>
                </View>

                <View style={styles.sectionsContainer}>
                  {phase.sections.map((section, sectionIndex) => (
                    <View key={sectionIndex} style={styles.section}>
                      <Text style={styles.sectionTitle}>{section.title}</Text>
                      <View style={styles.itemsList}>
                        {section.items.map((item, itemIndex) => (
                          <Text key={itemIndex} style={styles.item}>
                            <Text style={styles.itemNumber}>{itemIndex + 1}.</Text> {item}
                          </Text>
                        ))}
                      </View>
                    </View>
                  ))}
                </View>
              </View>

              {index < phases.length - 1 && (
                <View style={styles.phaseConnector}>
                  <Text style={styles.connectorText}>
                    ↓ Next: Phase {phase.id + 1}
                  </Text>
                </View>
              )}
            </View>
          ))}

          <View style={styles.footer}>
            <Text style={styles.footerTitle}>🎉 Congratulations!</Text>
            <Text style={styles.footerText}>
              You've completed the SQL Developer Roadmap and are now ready to take on professional  challenges.
            </Text>
          </View>

          <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
            `${pageNumber} / ${totalPages}`
          )} fixed />
        </Page>
      </Document>
    );

    const blob = await pdf(<AdvancedPDFDocument />).toBlob();
    const currentDate = new Date().toISOString().split('T')[0];
    const filename = `${customTitle.toLowerCase().replace(/\s+/g, '-')}-${currentDate}.pdf`;

    saveAs(blob, filename);

    return { success: true, filename };
  } catch (error) {
    console.error('Error generating advanced PDF:', error);
    return { success: false, error: error.message };
  }
};