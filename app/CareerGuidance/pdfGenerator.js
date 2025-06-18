import jsPDF from 'jspdf';

/**
 * Professional PDF generator with clean design and high readability
 * @param {Object} sections - Parsed sections from the response
 * @param {string} fileName - Name for the downloaded file (optional)
 */
export const downloadRoadmapPDF = (sections, fileName = 'Career_Roadmap.pdf') => {
  try {
    // Create new PDF document
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 20;
    const maxWidth = pageWidth - (margin * 2);
    let yPosition = margin;

    // Professional color palette (using RGB values that work well in PDF)
    const colors = {
      primary: [41, 98, 255],      // Professional blue
      secondary: [52, 152, 219],   // Light blue
      accent: [46, 204, 113],      // Professional green
      warning: [243, 156, 18],     // Orange
      dark: [44, 62, 80],          // Dark blue-gray
      lightGray: [236, 240, 241],  // Very light gray
      mediumGray: [149, 165, 166], // Medium gray
      text: [44, 62, 80],          // Dark text
      white: [255, 255, 255]
    };

    // Text wrapping function with consistent spacing
    const addTextWithWrap = (text, x, y, maxWidth, fontSize = 10, fontStyle = 'normal', color = colors.text) => {
      doc.setFontSize(fontSize);
      doc.setFont('helvetica', fontStyle);
      doc.setTextColor(color[0], color[1], color[2]);

      const lines = doc.splitTextToSize(text, maxWidth);
      const lineHeight = fontSize * 1.4; // Professional line spacing

      lines.forEach((line, index) => {
        const currentY = y + (index * lineHeight);
        if (currentY > pageHeight - margin - 30) {
          doc.addPage();
          return margin + 20;
        }
        doc.text(line, x, currentY);
      });

      return y + (lines.length * lineHeight) + 5;
    };

    // Clean section header
    const addSectionHeader = (title, color = colors.primary) => {
      // Check if we need a new page
      if (yPosition > pageHeight - 80) {
        doc.addPage();
        yPosition = margin + 20;
      }

      // Simple colored line above title
      doc.setDrawColor(color[0], color[1], color[2]);
      doc.setLineWidth(3);
      doc.line(margin, yPosition, margin + 60, yPosition);

      yPosition += 8;

      // Clean title text
      doc.setTextColor(color[0], color[1], color[2]);
      doc.setFontSize(16);
      doc.setFont('helvetica', 'bold');
      doc.text(title, margin, yPosition);

      yPosition += 15;

      // Subtle separator line
      doc.setDrawColor(colors.lightGray[0], colors.lightGray[1], colors.lightGray[2]);
      doc.setLineWidth(0.5);
      doc.line(margin, yPosition, pageWidth - margin, yPosition);

      yPosition += 10;
    };

    // Professional document header
    const createHeader = () => {
      // Simple header background
      doc.setFillColor(colors.primary[0], colors.primary[1], colors.primary[2]);
      doc.rect(0, 0, pageWidth, 50, 'F');

      // Title
      doc.setTextColor(colors.white[0], colors.white[1], colors.white[2]);
      doc.setFontSize(24);
      doc.setFont('helvetica', 'bold');
      doc.text('CAREER ROADMAP', margin, 25);

      // Subtitle
      doc.setFontSize(12);
      doc.setFont('helvetica', 'normal');
      doc.text('Your Professional Development Guide', margin, 35);

      // Date
      doc.setFontSize(10);
      const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      doc.text(`Generated: ${currentDate}`, margin, 44);

      yPosition = 65;
    };

    // Clean content formatting
    const formatSectionContent = (content, sectionColor = colors.primary) => {
      if (!content || !content.trim()) return;

      const lines = content.split('\n').filter(line => line.trim());

      lines.forEach(line => {
        const trimmedLine = line.trim();
        if (!trimmedLine) return;

        // Check if we need a new page
        if (yPosition > pageHeight - 50) {
          doc.addPage();
          yPosition = margin + 20;
        }

        // Handle bullet points
        if (trimmedLine.match(/^[-•*→▪]\s/)) {
          const bulletText = trimmedLine.replace(/^[-•*→▪]\s*/, '');

          // Simple bullet point with consistent indentation
          doc.setTextColor(sectionColor[0], sectionColor[1], sectionColor[2]);
          doc.setFontSize(10);
          doc.setFont('helvetica', 'normal');
          doc.text('•', margin + 5, yPosition);

          yPosition = addTextWithWrap(bulletText, margin + 15, yPosition, maxWidth - 15, 10, 'normal');
          yPosition += 3;

        } else if (trimmedLine.endsWith(':') || trimmedLine.match(/^\*\*.*\*\*$/)) {
          // Sub-headers
          const headerText = trimmedLine.replace(/\*\*/g, '').replace(/:$/, '');

          yPosition = addTextWithWrap(headerText, margin, yPosition, maxWidth, 12, 'bold', sectionColor);
          yPosition += 5;

        } else if (trimmedLine.match(/\d+\s*(month|Month|weeks?|days?)/i)) {
          // Timeline items with clean formatting
          yPosition = addTextWithWrap(`⏱ ${trimmedLine}`, margin, yPosition, maxWidth, 10, 'bold', colors.accent);
          yPosition += 5;

        } else {
          // Regular paragraphs
          yPosition = addTextWithWrap(trimmedLine, margin, yPosition, maxWidth, 10, 'normal');
          yPosition += 8;
        }
      });

      yPosition += 10; // Section spacing
    };

    // Section configuration
    const sectionConfigs = [
      { key: 'skillGap', title: 'Skills Gap Analysis', color: colors.primary },
      { key: 'roadmap', title: 'Learning Roadmap', color: colors.secondary },
      { key: 'techStack', title: 'Technology Stack', color: colors.accent },
      { key: 'resources', title: 'Learning Resources', color: colors.warning },
      { key: 'projects', title: 'Recommended Projects', color: [155, 89, 182] },
      { key: 'insights', title: 'Industry Insights', color: [231, 76, 60] },
      { key: 'progression', title: 'Career progression', color: colors.accent },
      { key: 'networking', title: 'Networking Strategy', color: [230, 126, 34] }
    ];

    // Create header
    createHeader();

    // Process each section
    sectionConfigs.forEach(({ key, title, color }) => {
      const content = sections[key];
      if (content && content.trim()) {
        addSectionHeader(title, color);
        formatSectionContent(content, color);
      }
    });

    // Clean footer
    const addFooter = () => {
      const totalPages = doc.internal.getNumberOfPages();

      for (let i = 1; i <= totalPages; i++) {
        doc.setPage(i);

        // Simple footer line
        doc.setDrawColor(colors.lightGray[0], colors.lightGray[1], colors.lightGray[2]);
        doc.setLineWidth(0.5);
        doc.line(margin, pageHeight - 25, pageWidth - margin, pageHeight - 25);

        // Footer text
        doc.setFontSize(9);
        doc.setTextColor(colors.mediumGray[0], colors.mediumGray[1], colors.mediumGray[2]);
        doc.setFont('helvetica', 'normal');

        doc.text('AI Career Advisor', margin, pageHeight - 15);
        doc.text(`Page ${i} of ${totalPages}`, pageWidth - margin - 20, pageHeight - 15);

        doc.setFontSize(8);
        doc.text(`Generated on ${new Date().toLocaleDateString()}`, margin, pageHeight - 8);
      }
    };

    // Add footer
    addFooter();

    // Save the PDF
    doc.save(fileName);
    return true;

  } catch (error) {
    console.error('Error generating PDF:', error);
    throw new Error('Failed to generate PDF. Please try again.');
  }
};

/**
 * Clean summary PDF with professional design
 * @param {Object} sections - Parsed sections from the response
 * @param {string} fileName - Name for the downloaded file
 */
export const downloadQuickSummaryPDF = (sections, fileName = 'Career_Roadmap_Summary.pdf') => {
  try {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 20;
    const maxWidth = pageWidth - (margin * 2);
    let yPosition = margin;

    // Colors
    const colors = {
      primary: [41, 98, 255],
      secondary: [52, 152, 219],
      accent: [46, 204, 113],
      warning: [243, 156, 18],
      white: [255, 255, 255],
      light: [248, 249, 250],
      text: [44, 62, 80],
      mediumGray: [149, 165, 166]
    };

    // Clean summary header
    const createSummaryHeader = () => {
      // Simple header background
      doc.setFillColor(colors.primary[0], colors.primary[1], colors.primary[2]);
      doc.rect(0, 0, pageWidth, 45, 'F');

      // Title
      doc.setTextColor(colors.white[0], colors.white[1], colors.white[2]);
      doc.setFontSize(20);
      doc.setFont('helvetica', 'bold');
      doc.text('CAREER ROADMAP SUMMARY', margin, 20);

      // Subtitle
      doc.setFontSize(11);
      doc.text('Key Highlights of Your Professional Journey', margin, 30);

      // Date
      doc.setFontSize(9);
      doc.text(`Generated: ${new Date().toLocaleDateString()}`, margin, 38);

      yPosition = 55;
    };

    createSummaryHeader();

    // Clean summary section
    const addSummarySection = (title, content, color) => {
      if (!content || !content.trim()) return;

      // Section title
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(color[0], color[1], color[2]);
      doc.text(title, margin, yPosition);

      yPosition += 8;

      // Simple underline
      doc.setDrawColor(color[0], color[1], color[2]);
      doc.setLineWidth(1);
      doc.line(margin, yPosition, margin + 40, yPosition);

      yPosition += 8;

      // Content - first 3 key points only
      doc.setTextColor(colors.text[0], colors.text[1], colors.text[2]);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);

      const lines = content.split('\n').slice(0, 3);
      lines.forEach(line => {
        const trimmedLine = line.trim().replace(/^[-•*→▪]\s*/, '');
        if (trimmedLine) {
          const bulletPoint = `• ${trimmedLine}`;
          const splitLines = doc.splitTextToSize(bulletPoint, maxWidth - 10);
          splitLines.slice(0, 1).forEach(splitLine => {
            doc.text(splitLine, margin, yPosition);
            yPosition += 6;
          });
        }
      });

      yPosition += 10;
    };

    // Add summary sections
    const summaryConfigs = [
      { key: 'skillGap', title: 'Key Skills to Develop', color: colors.primary },
      { key: 'roadmap', title: 'Learning Path', color: colors.secondary },
      { key: 'techStack', title: 'Technology Focus', color: colors.accent },
      { key: 'progression', title: 'Next Steps', color: colors.warning }
    ];

    summaryConfigs.forEach(({ key, title, color }) => {
      const content = sections[key];
      if (content && content.trim()) {
        addSummarySection(title, content, color);
      }
    });

    // Call to action
    doc.setDrawColor(colors.warning[0], colors.warning[1], colors.warning[2]);
    doc.setLineWidth(2);
    doc.line(margin, yPosition, pageWidth - margin, yPosition);

    yPosition += 10;

    doc.setTextColor(colors.warning[0], colors.warning[1], colors.warning[2]);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Ready to Start Your Journey?', margin, yPosition);

    yPosition += 8;

    doc.setTextColor(colors.text[0], colors.text[1], colors.text[2]);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text('Download the full roadmap PDF for detailed guidance and resources.', margin, yPosition);

    yPosition += 6;
    doc.text('Begin with your first priority skill and track your progress consistently.', margin, yPosition);

    // Simple footer
    doc.setDrawColor(colors.mediumGray[0], colors.mediumGray[1], colors.mediumGray[2]);
    doc.setLineWidth(0.5);
    doc.line(margin, pageHeight - 25, pageWidth - margin, pageHeight - 25);

    doc.setFontSize(8);
    doc.setTextColor(colors.mediumGray[0], colors.mediumGray[1], colors.mediumGray[2]);
    doc.text('AI Career Advisor | Professional Development Platform', margin, pageHeight - 15);

    doc.save(fileName);
    return true;

  } catch (error) {
    console.error('Error generating summary PDF:', error);
    throw new Error('Failed to generate summary PDF. Please try again.');
  }
};