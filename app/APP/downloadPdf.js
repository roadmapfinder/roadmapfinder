import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

/**
 * Enhanced PDF download utility for roadmap content
 * @param {Array} roadmapData - The roadmap data to generate PDF from
 * @param {boolean} darkMode - Whether dark mode is enabled
 * @returns {Promise<void>}
 */
export const downloadRoadmapPDF = async (roadmapData, darkMode = false) => {
  if (!roadmapData || !Array.isArray(roadmapData)) {
    throw new Error("Invalid roadmap data provided");
  }

  try {
    const downloadDiv = createDownloadElement(roadmapData, darkMode);
    document.body.appendChild(downloadDiv);

    const canvas = await generateCanvas(downloadDiv);
    document.body.removeChild(downloadDiv);

    const pdf = await createPDF(canvas);

    // Save PDF and store metadata
    pdf.save("App_Developer_Roadmap.pdf");
    saveRoadmapMetadata(roadmapData);

  } catch (error) {
    console.error("Error generating PDF:", error);
    throw new Error("Failed to generate PDF. Please try again.");
  }
};

/**
 * Creates a styled DOM element for PDF generation
 * @param {Array} roadmapData - The roadmap data
 * @param {boolean} darkMode - Dark mode flag
 * @returns {HTMLElement} The created element
 */
const createDownloadElement = (roadmapData, darkMode) => {
  const downloadDiv = document.createElement("div");
  downloadDiv.className = "roadmap-download-content";

  // Apply enhanced styling
  applyContainerStyles(downloadDiv);

  // Add title
  const title = createTitle();
  downloadDiv.appendChild(title);

  // Add roadmap sections
  roadmapData.forEach(section => {
    const sectionElement = createSectionElement(section);
    downloadDiv.appendChild(sectionElement);
  });

  return downloadDiv;
};

/**
 * Applies container styles for better PDF output
 * @param {HTMLElement} element - The container element
 */
const applyContainerStyles = (element) => {
  const styles = {
    padding: "40px",
    color: "#2c3e50",
    backgroundColor: "white",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    fontSize: "14px",
    lineHeight: "1.6",
    maxWidth: "800px",
    margin: "0 auto"
  };

  Object.assign(element.style, styles);
};

/**
 * Creates the main title element
 * @returns {HTMLElement} The title element
 */
const createTitle = () => {
  const title = document.createElement("h1");
  const titleStyles = {
    textAlign: "center",
    marginBottom: "30px",
    fontSize: "32px",
    fontWeight: "700",
    color: "#2c3e50",
    borderBottom: "3px solid #3498db",
    paddingBottom: "15px"
  };

  Object.assign(title.style, titleStyles);
  title.textContent = "App Development Roadmap";
  return title;
};

/**
 * Creates a section element with all subsections
 * @param {Object} section - The section data
 * @returns {HTMLElement} The section element
 */
const createSectionElement = (section) => {
  const sectionDiv = document.createElement("div");
  sectionDiv.style.marginBottom = "40px";
  sectionDiv.style.pageBreakInside = "avoid";

  // Add section header
  const header = createSectionHeader(section);
  sectionDiv.appendChild(header);

  // Add description
  const description = createDescription(section.description);
  sectionDiv.appendChild(description);

  // Add all content subsections
  const subsections = [
    { title: "✅ What to Learn", items: section.content.whatToLearn, color: "#27ae60", type: "list" },
    { title: "📚 Best Courses", items: section.content.bestCourses, color: "#3498db", type: "courses" },
    { title: "🧰 Tools to Use", items: section.content.toolsToUse, color: "#f39c12", type: "list" },
    { title: "📘 Docs & Websites", items: section.content.docsAndWebsites, color: "#e74c3c", type: "list" },
    { title: "💡 Project Ideas", items: section.content.projectIdeas, color: "#9b59b6", type: "list" }
  ];

  subsections.forEach(subsection => {
    const element = createSubsection(subsection);
    sectionDiv.appendChild(element);
  });

  return sectionDiv;
};

/**
 * Creates a section header
 * @param {Object} section - The section data
 * @returns {HTMLElement} The header element
 */
const createSectionHeader = (section) => {
  const header = document.createElement("h2");
  const headerStyles = {
    backgroundColor: "#ecf0f1",
    padding: "15px 20px",
    borderRadius: "8px",
    borderLeft: "5px solid #3498db",
    fontSize: "20px",
    fontWeight: "600",
    color: "#2c3e50",
    marginBottom: "20px"
  };

  Object.assign(header.style, headerStyles);
  header.textContent = `${section.id}. ${section.title}`;
  return header;
};

/**
 * Creates a description element
 * @param {string} description - The description text
 * @returns {HTMLElement} The description element
 */
const createDescription = (description) => {
  const desc = document.createElement("p");
  const descStyles = {
    marginBottom: "25px",
    fontStyle: "italic",
    fontSize: "15px",
    color: "#7f8c8d",
    lineHeight: "1.7",
    padding: "0 10px"
  };

  Object.assign(desc.style, descStyles);
  desc.textContent = description;
  return desc;
};

/**
 * Creates a subsection element
 * @param {Object} subsection - The subsection configuration
 * @returns {HTMLElement} The subsection element
 */
const createSubsection = (subsection) => {
  const container = document.createElement("div");
  container.style.marginBottom = "25px";

  const title = createSubsectionTitle(subsection.title, subsection.color);
  container.appendChild(title);

  if (subsection.type === "courses") {
    const courseContent = createCoursesContent(subsection.items);
    container.appendChild(courseContent);
  } else {
    const list = createItemList(subsection.items);
    container.appendChild(list);
  }

  return container;
};

/**
 * Creates a subsection title
 * @param {string} title - The title text
 * @param {string} color - The title color
 * @returns {HTMLElement} The title element
 */
const createSubsectionTitle = (title, color) => {
  const titleElement = document.createElement("h3");
  const titleStyles = {
    fontSize: "18px",
    fontWeight: "600",
    color: color,
    marginBottom: "12px",
    borderBottom: `2px solid ${color}`,
    paddingBottom: "5px"
  };

  Object.assign(titleElement.style, titleStyles);
  titleElement.textContent = title;
  return titleElement;
};

/**
 * Creates content for courses subsection
 * @param {Object} courses - The courses object with english and hindi arrays
 * @returns {HTMLElement} The courses content element
 */
const createCoursesContent = (courses) => {
  const container = document.createElement("div");

  // English courses
  const englishSection = createCourseLanguageSection("In English:", courses.english);
  container.appendChild(englishSection);

  // Hindi courses
  const hindiSection = createCourseLanguageSection("In Hindi:", courses.hindi);
  container.appendChild(hindiSection);

  return container;
};

/**
 * Creates a course language section
 * @param {string} languageTitle - The language title
 * @param {Array} courses - The courses array
 * @returns {HTMLElement} The language section element
 */
const createCourseLanguageSection = (languageTitle, courses) => {
  const section = document.createElement("div");

  const title = document.createElement("h4");
  const titleStyles = {
    fontSize: "16px",
    fontWeight: "500",
    color: "#2c3e50",
    marginTop: "15px",
    marginBottom: "10px"
  };
  Object.assign(title.style, titleStyles);
  title.textContent = languageTitle;
  section.appendChild(title);

  const list = createItemList(courses, "13px");
  section.appendChild(list);

  return section;
};

/**
 * Creates a list of items
 * @param {Array} items - The items array
 * @param {string} fontSize - Optional font size
 * @returns {HTMLElement} The list element
 */
const createItemList = (items, fontSize = "14px") => {
  const list = document.createElement("ul");
  list.style.paddingLeft = "25px";
  list.style.margin = "15px 0";

  items.forEach(item => {
    const listItem = document.createElement("li");
    const itemStyles = {
      marginBottom: fontSize === "13px" ? "6px" : "8px",
      fontSize: fontSize,
      lineHeight: fontSize === "13px" ? "1.5" : "1.6",
      color: "#34495e"
    };
    Object.assign(listItem.style, itemStyles);
    listItem.textContent = item;
    list.appendChild(listItem);
  });

  return list;
};

/**
 * Generates canvas from DOM element
 * @param {HTMLElement} element - The element to convert
 * @returns {Promise<HTMLCanvasElement>} The generated canvas
 */
const generateCanvas = async (element) => {
  const canvasOptions = {
    scale: 2,
    useCORS: true,
    logging: false,
    letterRendering: true,
    allowTaint: true,
    backgroundColor: "#ffffff",
    width: element.scrollWidth,
    height: element.scrollHeight,
    scrollX: 0,
    scrollY: 0
  };

  return await html2canvas(element, canvasOptions);
};

/**
 * Creates PDF from canvas
 * @param {HTMLCanvasElement} canvas - The canvas element
 * @returns {jsPDF} The PDF object
 */
const createPDF = async (canvas) => {
  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
    compress: true,
    precision: 2
  });

  const imgWidth = 210; // A4 width in mm
  const imgHeight = (canvas.height * imgWidth) / canvas.width;
  const pageHeight = 297; // A4 height in mm

  let heightLeft = imgHeight;
  let position = 0;

  // Add first page
  pdf.addImage(
    canvas.toDataURL("image/jpeg", 0.95),
    "JPEG",
    0,
    0,
    imgWidth,
    imgHeight
  );
  heightLeft -= pageHeight;

  // Add additional pages if needed
  while (heightLeft > 0) {
    position = heightLeft - imgHeight;
    pdf.addPage();
    pdf.addImage(
      canvas.toDataURL("image/jpeg", 0.95),
      "JPEG",
      0,
      position,
      imgWidth,
      imgHeight
    );
    heightLeft -= pageHeight;
  }

  return pdf;
};

/**
 * Saves roadmap metadata (Note: This won't work in Claude artifacts)
 * @param {Array} roadmapData - The roadmap data
 */
const saveRoadmapMetadata = (roadmapData) => {
  try {
    // Note: localStorage is not available in Claude artifacts
    // This is kept for when code is used in actual environments
    const timestamp = Date.now();
    const roadmapKey = `roadmap-${timestamp}`;
    const metadata = {
      id: timestamp,
      title: "App Developer Roadmap",
      date: new Date().toLocaleDateString(),
      category: "App Development",
      contentLength: roadmapData.length
    };

    // In actual implementation, you would use:
    // localStorage.setItem(roadmapKey, JSON.stringify(metadata));
    console.log("Roadmap metadata prepared:", metadata);
  } catch (error) {
    console.warn("Could not save metadata:", error.message);
  }
};