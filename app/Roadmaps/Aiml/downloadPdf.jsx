// components/RoadmapPdf.jsx
import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
  pdf,
} from "@react-pdf/renderer";
import { saveAs } from "file-saver";

/**
 * Responsive PDF generator for AIML Engineer Roadmap
 *
 * Key ideas:
 * - Map page size/orientation to a width in points and compute a scale factor.
 * - If width is wide enough -> two-column layout. Otherwise -> single column.
 * - Expose options: pageSize, orientation, includeWatermark, compact (mobile-friendly)
 *
 * Usage:
 * - <PDFDownloadButton phases={phases} />
 * - await downloadRoadmapPDF(phases);
 */

// Map known page sizes (points). These values match react-pdf default sizes.
const PAGE_DIMENSIONS = {
  A4: { portrait: { w: 595.28, h: 841.89 }, landscape: { w: 841.89, h: 595.28 } },
  LETTER: { portrait: { w: 612, h: 792 }, landscape: { w: 792, h: 612 } },
  A5: { portrait: { w: 419.53, h: 595.28 }, landscape: { w: 595.28, h: 419.53 } },
};

// Default colors (easy to reuse)
const COLOR = {
  bg: "#f8fafc",
  paper: "#ffffff",
  primary: "#0ea5e9", // cyan-500 feel
  muted: "#6b7280",
  text: "#111827",
  accent: "#10b981",
  border: "#e6eef2",
  soft: "#f1f5f9",
};

// Utility: get page width (points)
const getPageWidth = (pageSize = "A4", orientation = "portrait") => {
  const key = pageSize?.toUpperCase() in PAGE_DIMENSIONS ? pageSize.toUpperCase() : "A4";
  const dir = orientation === "landscape" ? "landscape" : "portrait";
  return PAGE_DIMENSIONS[key][dir].w;
};

// Create styles dynamically based on page width and compact flag
const createStyles = (pageWidth, compact = false) => {
  // scale relative to A4 width (595pt)
  const baseScale = pageWidth / 595.28;
  const twoColumn = pageWidth >= 540 && !compact; // threshold: ~540pt
  const gutter = 12 * baseScale;
  const cardPadding = compact ? 10 * baseScale : 16 * baseScale;

  return StyleSheet.create({
    page: {
      flexDirection: "column",
      backgroundColor: COLOR.bg,
      padding: 28 * baseScale,
      fontFamily: "Helvetica",
      fontSize: 11 * baseScale,
      color: COLOR.text,
    },

    header: {
      marginBottom: 18 * baseScale,
      paddingBottom: 10 * baseScale,
      borderBottomWidth: 1,
      borderBottomColor: COLOR.soft,
      flexDirection: "row",
      alignItems: "center",
      gap: 12 * baseScale,
    },
    logoCircle: {
      width: 56 * baseScale,
      height: 56 * baseScale,
      borderRadius: 28 * baseScale,
      backgroundColor: COLOR.primary,
      color: "white",
      textAlign: "center",
      lineHeight: `${56 * baseScale}pt`,
      fontWeight: "bold",
      fontSize: 18 * baseScale,
      marginRight: 8 * baseScale,
    },
    headerText: {
      flex: 1,
    },
    title: {
      fontSize: 20 * baseScale,
      fontWeight: "bold",
      color: COLOR.text,
      marginBottom: 2 * baseScale,
    },
    subtitle: {
      fontSize: 10.5 * baseScale,
      color: COLOR.muted,
    },

    watermark: {
      position: "absolute",
      top: 40 * baseScale,
      right: 30 * baseScale,
      fontSize: 8 * baseScale,
      color: "#cbd5e1",
      opacity: 0.35,
    },

    phaseContainer: {
      marginBottom: 18 * baseScale,
      backgroundColor: COLOR.paper,
      borderRadius: 8 * baseScale,
      padding: cardPadding,
      borderWidth: 1,
      borderColor: COLOR.border,
    },
    phaseHeader: {
      flexDirection: "row",
      alignItems: "flex-start",
      marginBottom: 10 * baseScale,
      gap: 10 * baseScale,
    },
    phaseBadge: {
      width: 40 * baseScale,
      height: 40 * baseScale,
      borderRadius: 8 * baseScale,
      backgroundColor: COLOR.primary,
      color: "#fff",
      textAlign: "center",
      lineHeight: `${40 * baseScale}pt`,
      fontWeight: "700",
      fontSize: 14 * baseScale,
      flexShrink: 0,
    },
    phaseTitleContainer: {
      flex: 1,
    },
    phaseTitle: {
      fontSize: 14 * baseScale,
      fontWeight: "700",
      color: COLOR.text,
      marginBottom: 2 * baseScale,
    },
    phaseSubtitle: {
      fontSize: 9.5 * baseScale,
      color: COLOR.muted,
      marginBottom: 6 * baseScale,
    },
    phaseDescription: {
      fontSize: 10.5 * baseScale,
      color: COLOR.text,
      lineHeight: 1.3 * baseScale,
    },

    sectionsContainer: {
      flexDirection: twoColumn ? "row" : "column",
      flexWrap: "wrap",
      gap: gutter,
      marginTop: 8 * baseScale,
    },
    section: {
      // two-column: ~48% each, single-col: full width
      width: twoColumn ? `48%` : "100%",
      backgroundColor: "#fbfdff",
      borderRadius: 6 * baseScale,
      padding: 12 * baseScale,
      borderLeftWidth: 3 * baseScale,
      borderLeftColor: COLOR.primary,
      marginBottom: 8 * baseScale,
    },
    sectionTitle: {
      fontSize: 11 * baseScale,
      fontWeight: "700",
      color: COLOR.primary,
      marginBottom: 6 * baseScale,
    },
    itemsList: {
      marginTop: 4 * baseScale,
    },
    itemRow: {
      flexDirection: "row",
      alignItems: "flex-start",
      marginBottom: 6 * baseScale,
    },
    itemNumber: {
      width: 18 * baseScale,
      fontSize: 9.5 * baseScale,
      fontWeight: "700",
      color: COLOR.text,
      marginRight: 6 * baseScale,
    },
    itemText: {
      fontSize: 10 * baseScale,
      color: COLOR.text,
      lineHeight: 1.25 * baseScale,
      flex: 1,
    },

    connector: {
      alignSelf: "center",
      marginVertical: 12 * baseScale,
      paddingVertical: 6 * baseScale,
      paddingHorizontal: 14 * baseScale,
      backgroundColor: COLOR.soft,
      borderRadius: 18 * baseScale,
      borderWidth: 1,
      borderColor: "#e6eef2",
    },
    connectorText: {
      fontSize: 9 * baseScale,
      color: COLOR.muted,
      textAlign: "center",
      fontWeight: "700",
    },

    footer: {
      marginTop: 14 * baseScale,
      padding: 12 * baseScale,
      backgroundColor: "#f0fdf4",
      borderRadius: 8 * baseScale,
      borderWidth: 1,
      borderColor: "#bbf7d0",
    },
    footerTitle: {
      fontSize: 12 * baseScale,
      fontWeight: "700",
      color: COLOR.accent,
      marginBottom: 6 * baseScale,
    },
    footerText: {
      fontSize: 10 * baseScale,
      color: COLOR.accent,
      lineHeight: 1.3 * baseScale,
    },

    pageNumber: {
      position: "absolute",
      fontSize: 9 * baseScale,
      bottom: 18 * baseScale,
      right: 28 * baseScale,
      color: COLOR.muted,
    },
  });
};

// Convert tailwind-like key to color
const getPhaseColor = (tailwindColor) => {
  const colorMap = {
    "bg-blue-500": "#3b82f6",
    "bg-purple-500": "#8b5cf6",
    "bg-green-500": "#10b981",
    "bg-orange-500": "#f59e0b",
    "bg-red-500": "#ef4444",
  };
  return colorMap[tailwindColor] || "#3b82f6";
};

// Main Document component
export const RoadmapPDFDocument = ({
  phases = [],
  options = {
    pageSize: "A4",
    orientation: "portrait",
    includeWatermark: true,
    compact: false,
    customTitle: "AIML Engineer Roadmap",
    customSubtitle: "Your Complete Journey from Beginner to Professional",
  },
}) => {
  const { pageSize, orientation, includeWatermark, compact, customTitle, customSubtitle } = options;
  const pageWidth = getPageWidth(pageSize, orientation);
  const styles = createStyles(pageWidth, compact);

  return (
    <Document>
      <Page size={pageSize} orientation={orientation} style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logoCircle}>AI</Text>
          <View style={styles.headerText}>
            <Text style={styles.title}>{customTitle}</Text>
            <Text style={styles.subtitle}>{customSubtitle}</Text>
          </View>
        </View>

        {/* Phases */}
        {phases.map((phase, idx) => (
          <View key={phase.id || idx} wrap={false}>
            <View style={styles.phaseContainer}>
              <View style={styles.phaseHeader}>
                <Text
                  style={[
                    styles.phaseBadge,
                    { backgroundColor: getPhaseColor(phase.color) },
                  ]}
                >
                  {phase.id}
                </Text>

                <View style={styles.phaseTitleContainer}>
                  <Text style={styles.phaseTitle}>{phase.title}</Text>
                  {phase.subtitle && (
                    <Text style={styles.phaseSubtitle}>{phase.subtitle}</Text>
                  )}
                  {phase.description && (
                    <Text style={styles.phaseDescription}>
                      {phase.description}
                    </Text>
                  )}
                </View>
              </View>

              {/* Sections adapt to two-column or single-column */}
              <View style={styles.sectionsContainer}>
                {phase.sections?.map((section, sidx) => (
                  <View key={sidx} style={styles.section}>
                    <Text style={styles.sectionTitle}>{section.title}</Text>
                    <View style={styles.itemsList}>
                      {section.items?.map((item, itemIndex) => (
                        <View key={itemIndex} style={styles.itemRow}>
                          <Text style={styles.itemNumber}>
                            {itemIndex + 1}.
                          </Text>
                          <Text style={styles.itemText}>
                            {item}
                          </Text>
                        </View>
                      ))}
                    </View>
                  </View>
                ))}
              </View>
            </View>

            {/* Connector between phases */}
            {idx < phases.length - 1 && (
              <View style={styles.connector}>
                <Text style={styles.connectorText}>
                  ↓ Next: Phase {phases[idx + 1].id || idx + 2}
                </Text>
              </View>
            )}
          </View>
        ))}

        {/* Footer */}
        <View style={{ marginTop: 8 }}>
          <View style={styles.footer}>
            <Text style={styles.footerTitle}>🎉 Congratulations!</Text>
            <Text style={styles.footerText}>
              You've completed the roadmap — use this as your living plan. Update,
              iterate, and build projects to level up.
            </Text>
          </View>
        </View>

        {/* Page numbering */}
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
          fixed
        />
      </Page>
    </Document>
  );
};

// Main download function
export const downloadRoadmapPDF = async (phases, options = {}, userId = null) => {
  try {
    // Create the PDF blob
    const blob = await pdf(<RoadmapPDFDocument phases={phases} options={options} />).toBlob();

    // Generate filename with current date
    const currentDate = new Date().toISOString().split('T')[0];
    const filename = `${options.customTitle?.toLowerCase().replace(/\s+/g, "-") || "roadmap"}-${currentDate}.pdf`;

    // Save the file
    saveAs(blob, filename);

    // Save to profile if user is logged in
    if (userId) {
      // This is a placeholder for the actual API call or function to save metadata
      // You would typically send the filename, roadmap title, and userId to a backend endpoint
      // For example: await fetch('/api/save-roadmap', { method: 'POST', body: JSON.stringify({ userId, filename, title: options.customTitle }) });
      console.log(`Saving roadmap metadata for user ${userId}: ${filename}`);
      // savePdfToProfile('AIML Engineer Roadmap', 'Aiml', filename, userId); // Assuming savePdfToProfile is defined elsewhere
    }

    return { success: true, filename };
  } catch (error) {
    console.error('Error generating PDF:', error);
    return { success: false, error: error.message };
  }
};

// Advanced PDF generation with explicit options (keeps API parity)
export const downloadAdvancedRoadmapPDF = async (phases, options = {}) => {
  return await downloadRoadmapPDF(phases, options);
};

// React button component for UI (server-safe; renders link client-side)
export const PDFDownloadButton = ({
  phases,
  options = {},
  className = "",
  children = "Download PDF",
  userId = null, // Added userId prop to pass down
}) => {
  const merged = {
    pageSize: "A4",
    orientation: "portrait",
    includeWatermark: true,
    compact: false,
    customTitle: "AIML Engineer Roadmap",
    customSubtitle: "Your Complete Journey from Beginner to Professional",
    ...options,
  };

  return (
    <PDFDownloadLink
      document={<RoadmapPDFDocument phases={phases} options={merged} />}
      fileName={`${merged.customTitle.toLowerCase().replace(/\s+/g, "-")}-${new Date()
        .toISOString()
        .split("T")[0]}.pdf`}
      className={className}
      onClick={() => {
        // Trigger the save to profile logic when the download link is clicked
        if (userId) {
          // Assuming downloadRoadmapPDF can be called here with userId
          // Note: This might require adjustments depending on how PDFDownloadLink handles clicks and async operations
          // A more robust solution might involve a separate button click handler
          console.log("Initiating download and profile save...");
          // downloadRoadmapPDF(phases, merged, userId); // This might not be the ideal place, consider a dedicated handler
        }
      }}
    >
      {({ loading, error }) => {
        if (loading) return "Generating PDF…";
        if (error) return "Error generating PDF";
        return children;
      }}
    </PDFDownloadLink>
  );
};



// Example export default (if you want a single default export)
export default RoadmapPDFDocument;