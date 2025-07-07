// PDF download utility functions
let html2canvas;
let jsPDF;

// Dynamically import libraries only on client side
if (typeof window !== "undefined") {
  import("html2canvas").then((module) => {
    html2canvas = module.default;
  });
  import("jspdf").then((module) => {
    jsPDF = module.default;
  });
}

// Create styled content for PDF generation
const createDownloadContent = (roadmapData, darkMode) => {
  const downloadDiv = document.createElement("div");
  downloadDiv.className = "roadmap-download-content";

  // IMPROVED STYLES for better PDF output and readability
  downloadDiv.style.padding = "40px";
  downloadDiv.style.color = "#2c3e50";
  downloadDiv.style.backgroundColor = "white";
  downloadDiv.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
  downloadDiv.style.fontSize = "14px";
  downloadDiv.style.lineHeight = "1.6";
  downloadDiv.style.maxWidth = "800px";
  downloadDiv.style.margin = "0 auto";

  // Add title with better styling
  const title = document.createElement("h1");
  title.style.textAlign = "center";
  title.style.marginBottom = "30px";
  title.style.fontSize = "32px";
  title.style.fontWeight = "700";
  title.style.color = "#2c3e50";
  title.style.borderBottom = "3px solid #3498db";
  title.style.paddingBottom = "15px";
  title.textContent = "Typescript developer Roadmap";
  downloadDiv.appendChild(title);

  // Add roadmap content with improved styling
  roadmapData.forEach((section) => {
    const sectionDiv = document.createElement("div");
    sectionDiv.style.marginBottom = "40px";
    sectionDiv.style.pageBreakInside = "avoid"; // Prevent breaking inside sections

    // Section header with better design
    const header = document.createElement("h2");
    header.style.backgroundColor = "#ecf0f1";
    header.style.padding = "15px 20px";
    header.style.borderRadius = "8px";
    header.style.borderLeft = "5px solid #3498db";
    header.style.fontSize = "20px";
    header.style.fontWeight = "600";
    header.style.color = "#2c3e50";
    header.style.marginBottom = "20px";
    header.textContent = `${section.id}. ${section.title}`;
    sectionDiv.appendChild(header);

    // Section description with better typography
    const desc = document.createElement("p");
    desc.style.marginBottom = "25px";
    desc.style.fontStyle = "italic";
    desc.style.fontSize = "15px";
    desc.style.color = "#7f8c8d";
    desc.style.lineHeight = "1.7";
    desc.style.padding = "0 10px";
    desc.textContent = section.description;
    sectionDiv.appendChild(desc);

    // What to Learn with improved styling
    const whatToLearn = document.createElement("div");
    whatToLearn.style.marginBottom = "25px";

    const whatToLearnTitle = document.createElement("h3");
    whatToLearnTitle.style.fontSize = "18px";
    whatToLearnTitle.style.fontWeight = "600";
    whatToLearnTitle.style.color = "#27ae60";
    whatToLearnTitle.style.marginBottom = "12px";
    whatToLearnTitle.style.borderBottom = "2px solid #27ae60";
    whatToLearnTitle.style.paddingBottom = "5px";
    whatToLearnTitle.textContent = "✅ What to Learn";
    whatToLearn.appendChild(whatToLearnTitle);

    const whatToLearnList = document.createElement("ul");
    whatToLearnList.style.paddingLeft = "25px";
    whatToLearnList.style.margin = "15px 0";
    section.content.whatToLearn.forEach((item) => {
      const li = document.createElement("li");
      li.style.marginBottom = "8px";
      li.style.fontSize = "14px";
      li.style.lineHeight = "1.6";
      li.style.color = "#34495e";
      li.textContent = item;
      whatToLearnList.appendChild(li);
    });
    whatToLearn.appendChild(whatToLearnList);
    sectionDiv.appendChild(whatToLearn);

    // Best Courses with better organization
    const bestCourses = document.createElement("div");
    bestCourses.style.marginBottom = "25px";

    const bestCoursesTitle = document.createElement("h3");
    bestCoursesTitle.style.fontSize = "18px";
    bestCoursesTitle.style.fontWeight = "600";
    bestCoursesTitle.style.color = "#3498db";
    bestCoursesTitle.style.marginBottom = "12px";
    bestCoursesTitle.style.borderBottom = "2px solid #3498db";
    bestCoursesTitle.style.paddingBottom = "5px";
    bestCoursesTitle.textContent = "📚 Best Courses";
    bestCourses.appendChild(bestCoursesTitle);

    // English courses
    const englishTitle = document.createElement("h4");
    englishTitle.style.fontSize = "16px";
    englishTitle.style.fontWeight = "500";
    englishTitle.style.color = "#2c3e50";
    englishTitle.style.marginTop = "15px";
    englishTitle.style.marginBottom = "10px";
    englishTitle.textContent = "In English:";
    bestCourses.appendChild(englishTitle);

    const englishList = document.createElement("ul");
    englishList.style.paddingLeft = "25px";
    englishList.style.margin = "10px 0";
    section.content.bestCourses.english.forEach((course) => {
      const li = document.createElement("li");
      li.style.marginBottom = "6px";
      li.style.fontSize = "13px";
      li.style.lineHeight = "1.5";
      li.style.color = "#34495e";
      li.textContent = course;
      englishList.appendChild(li);
    });
    bestCourses.appendChild(englishList);

    // Hindi courses
    const hindiTitle = document.createElement("h4");
    hindiTitle.style.fontSize = "16px";
    hindiTitle.style.fontWeight = "500";
    hindiTitle.style.color = "#2c3e50";
    hindiTitle.style.marginTop = "15px";
    hindiTitle.style.marginBottom = "10px";
    hindiTitle.textContent = "In Hindi:";
    bestCourses.appendChild(hindiTitle);

    const hindiList = document.createElement("ul");
    hindiList.style.paddingLeft = "25px";
    hindiList.style.margin = "10px 0";
    section.content.bestCourses.hindi.forEach((course) => {
      const li = document.createElement("li");
      li.style.marginBottom = "6px";
      li.style.fontSize = "13px";
      li.style.lineHeight = "1.5";
      li.style.color = "#34495e";
      li.textContent = course;
      hindiList.appendChild(li);
    });
    bestCourses.appendChild(hindiList);
    sectionDiv.appendChild(bestCourses);

    // Tools to Use with better styling
    const tools = document.createElement("div");
    tools.style.marginBottom = "25px";

    const toolsTitle = document.createElement("h3");
    toolsTitle.style.fontSize = "18px";
    toolsTitle.style.fontWeight = "600";
    toolsTitle.style.color = "#f39c12";
    toolsTitle.style.marginBottom = "12px";
    toolsTitle.style.borderBottom = "2px solid #f39c12";
    toolsTitle.style.paddingBottom = "5px";
    toolsTitle.textContent = "🧰 Tools to Use";
    tools.appendChild(toolsTitle);

    const toolsList = document.createElement("ul");
    toolsList.style.paddingLeft = "25px";
    toolsList.style.margin = "15px 0";
    section.content.toolsToUse.forEach((tool) => {
      const li = document.createElement("li");
      li.style.marginBottom = "8px";
      li.style.fontSize = "14px";
      li.style.lineHeight = "1.6";
      li.style.color = "#34495e";
      li.textContent = tool;
      toolsList.appendChild(li);
    });
    tools.appendChild(toolsList);
    sectionDiv.appendChild(tools);

    // Docs & Websites with better styling
    const docs = document.createElement("div");
    docs.style.marginBottom = "25px";

    const docsTitle = document.createElement("h3");
    docsTitle.style.fontSize = "18px";
    docsTitle.style.fontWeight = "600";
    docsTitle.style.color = "#e74c3c";
    docsTitle.style.marginBottom = "12px";
    docsTitle.style.borderBottom = "2px solid #e74c3c";
    docsTitle.style.paddingBottom = "5px";
    docsTitle.textContent = "📘 Docs & Websites";
    docs.appendChild(docsTitle);

    const docsList = document.createElement("ul");
    docsList.style.paddingLeft = "25px";
    docsList.style.margin = "15px 0";
    section.content.docsAndWebsites.forEach((doc) => {
      const li = document.createElement("li");
      li.style.marginBottom = "8px";
      li.style.fontSize = "14px";
      li.style.lineHeight = "1.6";
      li.style.color = "#34495e";
      li.textContent = doc;
      docsList.appendChild(li);
    });
    docs.appendChild(docsList);
    sectionDiv.appendChild(docs);

    // Project Ideas with better styling
    const projects = document.createElement("div");
    projects.style.marginBottom = "25px";

    const projectsTitle = document.createElement("h3");
    projectsTitle.style.fontSize = "18px";
    projectsTitle.style.fontWeight = "600";
    projectsTitle.style.color = "#9b59b6";
    projectsTitle.style.marginBottom = "12px";
    projectsTitle.style.borderBottom = "2px solid #9b59b6";
    projectsTitle.style.paddingBottom = "5px";
    projectsTitle.textContent = "💡 Project Ideas";
    projects.appendChild(projectsTitle);

    const projectsList = document.createElement("ul");
    projectsList.style.paddingLeft = "25px";
    projectsList.style.margin = "15px 0";
    section.content.projectIdeas.forEach((project) => {
      const li = document.createElement("li");
      li.style.marginBottom = "8px";
      li.style.fontSize = "14px";
      li.style.lineHeight = "1.6";
      li.style.color = "#34495e";
      li.textContent = project;
      projectsList.appendChild(li);
    });
    projects.appendChild(projectsList);
    sectionDiv.appendChild(projects);

    downloadDiv.appendChild(sectionDiv);
  });

  return downloadDiv;
};

// Main PDF download function
export const handleDownloadPDF = async (roadmapData, setDownloading) => {
  if (!html2canvas || !jsPDF) {
    alert("PDF generation libraries are still loading. Please try again in a moment.");
    return;
  }

  setDownloading(true);

  try {
    // Create temporary div with roadmap content
    const downloadDiv = createDownloadContent(roadmapData);

    // Temporarily add the div to the document to render it
    document.body.appendChild(downloadDiv);

    // IMPROVED html2canvas settings for better quality
    const canvas = await html2canvas(downloadDiv, {
      scale: 2, // Higher scale for better quality
      useCORS: true,
      logging: false,
      letterRendering: true, // Better text rendering
      allowTaint: true,
      backgroundColor: "#ffffff",
      width: downloadDiv.scrollWidth,
      height: downloadDiv.scrollHeight,
      scrollX: 0,
      scrollY: 0
    });

    // Remove the temporary div
    document.body.removeChild(downloadDiv);

    // Create PDF with better settings
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
      compress: true, // Compress for smaller file size
      precision: 2
    });

    // Calculate dimensions for better fitting
    const imgWidth = 210; // A4 width in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    const pageHeight = 297; // A4 height in mm

    let heightLeft = imgHeight;
    let position = 0;

    // Add first page
    pdf.addImage(
      canvas.toDataURL("image/jpeg", 0.95), // Use JPEG with high quality
      "JPEG",
      0,
      0,
      imgWidth,
      imgHeight,
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
        imgHeight,
      );
      heightLeft -= pageHeight;
    }

    // Save the PDF
    pdf.save("typescript_Roadmap.pdf");

  } catch (error) {
    console.error("Error generating PDF:", error);
    alert("There was an error generating the PDF. Please try again.");
  } finally {
    setDownloading(false);
  }
};