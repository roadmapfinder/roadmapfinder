// downloadPdf.jsx - Professional PDF Generator for SQL Mastery Roadmap

export const downloadRoadmapPDF = async (phases) => {
  try {
    // Dynamic import to avoid SSR issues
    const { jsPDF } = await import('jspdf');

    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    // Page dimensions
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 15;
    const contentWidth = pageWidth - (margin * 2);

    // Color palette
    const colors = {
      primary: '#2563eb',      // Blue
      secondary: '#64748b',    // Gray
      accent: '#f59e0b',       // Orange
      success: '#10b981',      // Green
      dark: '#1e293b',         // Dark gray
      light: '#f1f5f9',        // Light gray
      white: '#ffffff',
      phaseColors: {
        1: [34, 197, 94],      // Green
        2: [59, 130, 246],     // Blue
        3: [168, 85, 247],     // Purple
        4: [239, 68, 68],      // Red
        5: [249, 115, 22],     // Orange
        6: [71, 85, 105]       // Gray
      }
    };

    let currentY = margin;
    let pageNumber = 1;

    // Helper function to add a new page
    const addNewPage = () => {
      doc.addPage();
      currentY = margin;
      pageNumber++;
      addFooter();
    };

    // Helper function to check if we need a new page
    const checkPageBreak = (requiredSpace) => {
      if (currentY + requiredSpace > pageHeight - margin - 15) {
        addNewPage();
        return true;
      }
      return false;
    };

    // Helper function to add footer
    const addFooter = () => {
      doc.setFontSize(8);
      doc.setTextColor(150, 150, 150);
      doc.text(
        `SQL Mastery Roadmap 2025 | Page ${pageNumber}`,
        pageWidth / 2,
        pageHeight - 10,
        { align: 'center' }
      );
    };

    // Helper function to wrap text
    const wrapText = (text, maxWidth) => {
      return doc.splitTextToSize(text, maxWidth);
    };

    // ========================================
    // COVER PAGE
    // ========================================

    // Background gradient effect (simulated with rectangles)
    for (let i = 0; i < 50; i++) {
      const opacity = 0.02 + (i * 0.005);
      doc.setFillColor(37, 99, 235);
      doc.setGState(new doc.GState({ opacity: opacity }));
      doc.rect(0, i * 4, pageWidth, 4, 'F');
    }
    doc.setGState(new doc.GState({ opacity: 1 }));

    // Main title
    doc.setFontSize(36);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(30, 41, 59);
    const titleLines = wrapText('SQL MASTERY ROADMAP', contentWidth);
    doc.text(titleLines, pageWidth / 2, 60, { align: 'center' });

    // Subtitle
    doc.setFontSize(18);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(100, 116, 139);
    doc.text('Your Complete Learning Path', pageWidth / 2, 75, { align: 'center' });

    // Edition badge
    doc.setFillColor(249, 115, 22);
    doc.roundedRect(pageWidth / 2 - 25, 85, 50, 12, 3, 3, 'F');
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(255, 255, 255);
    doc.text('2025 Edition', pageWidth / 2, 92, { align: 'center' });

    // Icon/Visual element (Database symbol using shapes)
    doc.setDrawColor(37, 99, 235);
    doc.setFillColor(37, 99, 235);
    doc.setLineWidth(0.5);

    const centerX = pageWidth / 2;
    const iconY = 115;

    // Database cylinder top
    doc.ellipse(centerX, iconY, 20, 6, 'F');
    // Database cylinder body
    doc.rect(centerX - 20, iconY, 40, 25, 'F');
    // Database cylinder bottom
    doc.ellipse(centerX, iconY + 25, 20, 6, 'F');

    // Divider line
    doc.setDrawColor(203, 213, 225);
    doc.setLineWidth(0.5);
    doc.line(margin, iconY + 45, pageWidth - margin, iconY + 45);

    // Key features boxes
    currentY = iconY + 60;
    const features = [
      { icon: '📚', title: '6 Comprehensive Phases', desc: 'From Beginner to Expert' },
      { icon: '🎯', title: 'Structured Learning', desc: 'Step-by-step progression' },
      { icon: '🚀', title: 'Industry Ready', desc: 'Real-world applications' }
    ];

    const boxWidth = (contentWidth - 20) / 3;
    let startX = margin;

    features.forEach((feature, index) => {
      // Feature box background
      doc.setFillColor(241, 245, 249);
      doc.roundedRect(startX, currentY, boxWidth, 30, 2, 2, 'F');

      // Icon
      doc.setFontSize(20);
      doc.text(feature.icon, startX + boxWidth / 2, currentY + 10, { align: 'center' });

      // Title
      doc.setFontSize(9);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(30, 41, 59);
      doc.text(feature.title, startX + boxWidth / 2, currentY + 18, { align: 'center' });

      // Description
      doc.setFontSize(7);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(100, 116, 139);
      doc.text(feature.desc, startX + boxWidth / 2, currentY + 24, { align: 'center' });

      startX += boxWidth + 10;
    });

    // Learning path overview
    currentY += 45;
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(30, 41, 59);
    doc.text('Your Learning Journey:', margin, currentY);

    currentY += 8;
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(71, 85, 105);
    const journeyText = [
      '• Master SQL fundamentals and advanced concepts',
      '• Learn database design and optimization techniques',
      '• Build production-ready skills for industry',
      '• Work on real-world projects and case studies'
    ];

    journeyText.forEach(text => {
      doc.text(text, margin + 5, currentY);
      currentY += 6;
    });

    // Bottom decoration
    doc.setFillColor(37, 99, 235);
    doc.setGState(new doc.GState({ opacity: 0.1 }));
    doc.circle(margin - 10, pageHeight - 30, 40, 'F');
    doc.circle(pageWidth - margin + 10, pageHeight - 50, 35, 'F');
    doc.setGState(new doc.GState({ opacity: 1 }));

    // Copyright and credits
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text('© 2025 SQL Mastery Roadmap | All Rights Reserved', pageWidth / 2, pageHeight - 15, { align: 'center' });

    addFooter();

    // ========================================
    // TABLE OF CONTENTS
    // ========================================

    addNewPage();
    currentY = margin + 5;

    // TOC Title
    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(30, 41, 59);
    doc.text('Table of Contents', margin, currentY);

    currentY += 10;
    doc.setDrawColor(37, 99, 235);
    doc.setLineWidth(1);
    doc.line(margin, currentY, pageWidth - margin, currentY);
    currentY += 10;

    // TOC entries
    phases.forEach((phase, index) => {
      checkPageBreak(15);

      // Phase number and title
      doc.setFontSize(11);
      doc.setFont('helvetica', 'bold');

      const phaseColor = colors.phaseColors[phase.id];
      doc.setTextColor(...phaseColor);

      doc.text(`Phase ${phase.id}`, margin + 5, currentY);

      doc.setTextColor(30, 41, 59);
      doc.text(phase.title, margin + 25, currentY);

      // Subtitle
      doc.setFontSize(8);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(100, 116, 139);
      doc.text(phase.subtitle, margin + 25, currentY + 4);

      // Dotted line to page number (visual only)
      doc.setDrawColor(203, 213, 225);
      doc.setLineDash([0.5, 1], 0);
      doc.line(margin + 100, currentY, pageWidth - margin - 15, currentY);
      doc.setLineDash([]);

      // Page indicator
      doc.setFontSize(9);
      doc.setTextColor(100, 116, 139);
      doc.text(`${index + 3}`, pageWidth - margin - 10, currentY);

      currentY += 12;
    });

    currentY += 5;
    checkPageBreak(20);

    // How to use this roadmap
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(30, 41, 59);
    doc.text('How to Use This Roadmap', margin, currentY);
    currentY += 8;

    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(71, 85, 105);

    const instructions = [
      {
        title: '1. Start from Your Level',
        text: 'Begin with the phase that matches your current skill level. Don\'t skip fundamentals!'
      },
      {
        title: '2. Follow Sequential Order',
        text: 'Each phase builds upon previous knowledge. Complete phases in order for best results.'
      },
      {
        title: '3. Practice Regularly',
        text: 'Apply concepts through exercises and projects. Hands-on practice is essential.'
      },
      {
        title: '4. Track Your Progress',
        text: 'Check off completed topics and revisit challenging concepts as needed.'
      }
    ];

    instructions.forEach(item => {
      checkPageBreak(15);

      doc.setFont('helvetica', 'bold');
      doc.setTextColor(37, 99, 235);
      doc.text(item.title, margin + 5, currentY);
      currentY += 5;

      doc.setFont('helvetica', 'normal');
      doc.setTextColor(71, 85, 105);
      const wrappedText = wrapText(item.text, contentWidth - 10);
      wrappedText.forEach(line => {
        doc.text(line, margin + 5, currentY);
        currentY += 4;
      });
      currentY += 3;
    });

    // ========================================
    // PHASE DETAILS
    // ========================================

    phases.forEach((phase, phaseIndex) => {
      addNewPage();
      currentY = margin;

      // Phase header background
      const phaseColor = colors.phaseColors[phase.id];
      doc.setFillColor(...phaseColor);
      doc.roundedRect(margin, currentY, contentWidth, 25, 3, 3, 'F');

      // Phase number badge
      doc.setFillColor(255, 255, 255);
      doc.circle(margin + 12, currentY + 12.5, 8, 'F');
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(...phaseColor);
      doc.text(`${phase.id}`, margin + 12, currentY + 15, { align: 'center' });

      // Phase title
      doc.setFontSize(16);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(255, 255, 255);
      doc.text(phase.title, margin + 25, currentY + 10);

      // Phase subtitle
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      doc.text(phase.subtitle, margin + 25, currentY + 17);

      currentY += 30;

      // Phase description box
      doc.setFillColor(241, 245, 249);
      doc.roundedRect(margin, currentY, contentWidth, 12, 2, 2, 'F');

      doc.setFontSize(9);
      doc.setFont('helvetica', 'italic');
      doc.setTextColor(71, 85, 105);
      doc.text(`📋 ${phase.description}`, margin + 5, currentY + 7);

      currentY += 17;

      // Progress tracker
      doc.setFontSize(8);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(100, 116, 139);
      doc.text('☐ Track your progress by checking off completed sections', margin, currentY);
      currentY += 8;

      // Sections
      phase.sections.forEach((section, sectionIndex) => {
        checkPageBreak(25 + (section.items.length * 5));

        // Section header
        doc.setFillColor(...phaseColor);
        doc.setGState(new doc.GState({ opacity: 0.1 }));
        doc.roundedRect(margin, currentY, contentWidth, 8, 2, 2, 'F');
        doc.setGState(new doc.GState({ opacity: 1 }));

        doc.setFontSize(11);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(...phaseColor);
        doc.text(`${sectionIndex + 1}. ${section.title}`, margin + 3, currentY + 5.5);

        currentY += 11;

        // Section items
        section.items.forEach((item, itemIndex) => {
          checkPageBreak(7);

          // Checkbox
          doc.setDrawColor(203, 213, 225);
          doc.setLineWidth(0.3);
          doc.rect(margin + 5, currentY - 2.5, 3, 3);

          // Parse item (title → description)
          const parts = item.split('→');
          const itemTitle = parts[0].trim();
          const itemDesc = parts.length > 1 ? parts[1].trim() : '';

          // Item number and title
          doc.setFontSize(9);
          doc.setFont('helvetica', 'bold');
          doc.setTextColor(30, 41, 59);
          doc.text(`${itemIndex + 1}.`, margin + 10, currentY);

          doc.setFont('helvetica', 'normal');
          doc.text(itemTitle, margin + 15, currentY);

          currentY += 4;

          // Item description (if exists)
          if (itemDesc) {
            doc.setFontSize(8);
            doc.setTextColor(100, 116, 139);
            const wrappedDesc = wrapText(itemDesc, contentWidth - 20);
            wrappedDesc.forEach(line => {
              checkPageBreak(5);
              doc.text(line, margin + 15, currentY);
              currentY += 3.5;
            });
            currentY += 1;
          } else {
            currentY += 2;
          }
        });

        currentY += 3;
      });

      // Phase completion tip
      checkPageBreak(20);
      currentY += 5;

      doc.setFillColor(16, 185, 129);
      doc.setGState(new doc.GState({ opacity: 0.1 }));
      doc.roundedRect(margin, currentY, contentWidth, 15, 2, 2, 'F');
      doc.setGState(new doc.GState({ opacity: 1 }));

      doc.setFontSize(8);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(5, 150, 105);
      doc.text('💡 Completion Tip:', margin + 5, currentY + 5);

      doc.setFont('helvetica', 'normal');
      doc.setTextColor(71, 85, 105);
      const tips = {
        1: 'Practice basic queries on sample databases. Write at least 50 queries.',
        2: 'Build a small project using CRUD operations and window functions.',
        3: 'Design a normalized database schema for a real-world scenario.',
        4: 'Optimize slow queries and understand execution plans thoroughly.',
        5: 'Integrate SQL with your preferred programming language.',
        6: 'Complete a capstone project involving all learned concepts.'
      };
      doc.text(tips[phase.id], margin + 5, currentY + 10);
    });

    // ========================================
    // LEARNING RESOURCES PAGE
    // ========================================

    addNewPage();
    currentY = margin + 5;

    // Resources title
    doc.setFontSize(22);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(30, 41, 59);
    doc.text('Recommended Learning Resources', margin, currentY);

    currentY += 10;
    doc.setDrawColor(37, 99, 235);
    doc.setLineWidth(1);
    doc.line(margin, currentY, pageWidth - margin, currentY);
    currentY += 12;

    const resources = [
      {
        category: '📚 Online Platforms',
        items: [
          'SQLZoo - Interactive SQL tutorials',
          'LeetCode SQL - Practice SQL problems',
          'Mode Analytics SQL Tutorial - Real datasets',
          'HackerRank SQL - Structured challenges'
        ]
      },
      {
        category: '📖 Books',
        items: [
          'SQL Queries for Mere Mortals - Allen Beaulieu',
          'SQL Performance Explained - Markus Winand',
          'Learning SQL - Alan Beaulieu',
          'Database Design for Mere Mortals - Michael Hernandez'
        ]
      },
      {
        category: '🎥 Video Courses',
items: [
          'FreeCodeCamp - SQL Full Course',
          'Udemy - Complete SQL Bootcamp',
          'Coursera - Databases and SQL for Data Science',
          'YouTube - SQL Tutorial channels'
        ]
      },
      {
        category: '🛠️ Practice Databases',
        items: [
          'PostgreSQL Sample Databases (Pagila, DVD Rental)',
          'MySQL Sakila Database',
          'Microsoft AdventureWorks',
          'SQLite Chinook Database'
        ]
      }
    ];

    resources.forEach(resource => {
      checkPageBreak(30);

      // Category header
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(37, 99, 235);
      doc.text(resource.category, margin, currentY);
      currentY += 7;

      // Items
      doc.setFontSize(9);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(71, 85, 105);

      resource.items.forEach(item => {
        doc.text(`• ${item}`, margin + 5, currentY);
        currentY += 5;
      });

      currentY += 5;
    });

    // ========================================
    // STUDY SCHEDULE PAGE
    // ========================================

    addNewPage();
    currentY = margin + 5;

    // Schedule title
    doc.setFontSize(22);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(30, 41, 59);
    doc.text('Suggested Study Schedule', margin, currentY);

    currentY += 10;
    doc.setDrawColor(37, 99, 235);
    doc.setLineWidth(1);
    doc.line(margin, currentY, pageWidth - margin, currentY);
    currentY += 12;

    const schedules = [
      {
        pace: 'Fast Track',
        duration: '3-4 Months',
        time: '15-20 hours/week',
        phases: {
          1: '2-3 weeks',
          2: '3-4 weeks',
          3: '2-3 weeks',
          4: '3-4 weeks',
          5: '2-3 weeks',
          6: '2-3 weeks'
        },
        color: [239, 68, 68]
      },
      {
        pace: 'Standard Track',
        duration: '6-8 Months',
        time: '8-12 hours/week',
        phases: {
          1: '3-4 weeks',
          2: '5-6 weeks',
          3: '4-5 weeks',
          4: '6-7 weeks',
          5: '4-5 weeks',
          6: '4-5 weeks'
        },
        color: [59, 130, 246]
      },
      {
        pace: 'Relaxed Track',
        duration: '10-12 Months',
        time: '4-6 hours/week',
        phases: {
          1: '6-8 weeks',
          2: '8-10 weeks',
          3: '6-8 weeks',
          4: '10-12 weeks',
          5: '6-8 weeks',
          6: '6-8 weeks'
        },
        color: [16, 185, 129]
      }
    ];

    schedules.forEach((schedule, idx) => {
      checkPageBreak(45);

      // Schedule card
      doc.setDrawColor(...schedule.color);
      doc.setLineWidth(0.5);
      doc.roundedRect(margin, currentY, contentWidth, 35, 2, 2);

      // Header
      doc.setFillColor(...schedule.color);
      doc.roundedRect(margin, currentY, contentWidth, 8, 2, 2, 'F');

      doc.setFontSize(11);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(255, 255, 255);
      doc.text(schedule.pace, margin + 3, currentY + 5.5);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.text(`${schedule.duration} | ${schedule.time}`, pageWidth - margin - 3, currentY + 5.5, { align: 'right' });

      // Phase breakdown
      let phaseY = currentY + 12;
      doc.setFontSize(8);
      doc.setTextColor(71, 85, 105);

      Object.entries(schedule.phases).forEach(([phase, time]) => {
        doc.setFont('helvetica', 'bold');
        doc.text(`Phase ${phase}:`, margin + 5, phaseY);
        doc.setFont('helvetica', 'normal');
        doc.text(time, margin + 25, phaseY);
        phaseY += 4;
      });

      currentY += 40;
    });

    // Study tips
    currentY += 5;
    checkPageBreak(40);

    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(30, 41, 59);
    doc.text('Study Tips for Success', margin, currentY);
    currentY += 8;

    const tips = [
      { icon: '⏰', text: 'Set consistent study times and stick to your schedule' },
      { icon: '✍️', text: 'Practice writing queries daily - consistency beats intensity' },
      { icon: '🤝', text: 'Join SQL communities and participate in discussions' },
      { icon: '🎯', text: 'Focus on understanding concepts, not memorizing syntax' },
      { icon: '📊', text: 'Work on real datasets to build practical experience' },
      { icon: '🔄', text: 'Review and refactor your old queries regularly' }
    ];

    tips.forEach(tip => {
      checkPageBreak(8);
      doc.setFontSize(9);
      doc.text(`${tip.icon}  ${tip.text}`, margin + 5, currentY);
      currentY += 6;
    });

    // ========================================
    // FINAL PAGE - MOTIVATIONAL
    // ========================================

    addNewPage();
    currentY = pageHeight / 2 - 40;

    // Center content
    doc.setFontSize(26);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(37, 99, 235);
    doc.text('Your SQL Journey Starts Now!', pageWidth / 2, currentY, { align: 'center' });

    currentY += 15;
    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(71, 85, 105);

    const motivationalText = [
      'Remember: Every expert was once a beginner.',
      'Take it one phase at a time, practice consistently,',
      'and you\'ll master SQL before you know it.',
      '',
      'Good luck on your learning journey! 🚀'
    ];

    motivationalText.forEach(line => {
      doc.text(line, pageWidth / 2, currentY, { align: 'center' });
      currentY += 6;
    });

    // Contact/feedback section
    currentY += 15;
    doc.setFillColor(241, 245, 249);
    doc.roundedRect(margin + 20, currentY, contentWidth - 40, 25, 3, 3, 'F');

    currentY += 8;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(30, 41, 59);
    doc.text('Need Help or Have Feedback?', pageWidth / 2, currentY, { align: 'center' });

    currentY += 6;
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(100, 116, 139);
    doc.text('This roadmap is constantly evolving.', pageWidth / 2, currentY, { align: 'center' });
    currentY += 4;
    doc.text('Share your suggestions to help us improve!', pageWidth / 2, currentY, { align: 'center' });

    // Save the PDF
    const filename = 'SQL_Mastery_Roadmap_2025.pdf';
    doc.save(filename);

    return {
      success: true,
      filename: filename,
      message: 'PDF generated successfully!'
    };

  } catch (error) {
    console.error('Error generating PDF:', error);
    return {
      success: false,
      error: error.message,
      message: 'Failed to generate PDF. Please try again.'
    };
  }
};