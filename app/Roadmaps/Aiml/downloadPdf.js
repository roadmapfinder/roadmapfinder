import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

/**
 * Creates a styled div element for PDF generation
 * @param {Array} roadmapData - The roadmap data to render
 * @returns {HTMLElement} - The styled div element
 */
const createDownloadDiv = (roadmapData) => {
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
  title.textContent = "AI/ML Engineer Roadmap";
  downloadDiv.appendChild(title);

  return downloadDiv;
};

/**
 * Creates a section element with all content
 * @param {Object} section - Section data
 * @returns {HTMLElement} - The section element
 */
const createSectionDiv = (section) => {
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

  // Section description
  const desc = document.createElement("p");
  desc.style.marginBottom = "25px";
  desc.style.fontStyle = "italic";
  desc.style.fontSize = "15px";
  desc.style.color = "#7f8c8d";
  desc.style.lineHeight = "1.7";
  desc.style.padding = "0 10px";
  desc.textContent = section.description;
  sectionDiv.appendChild(desc);

  // Add all content sections
  sectionDiv.appendChild(createWhatToLearnSection(section.content.whatToLearn));
  sectionDiv.appendChild(createBestCoursesSection(section.content.bestCourses));
  sectionDiv.appendChild(createToolsSection(section.content.toolsToUse));
  sectionDiv.appendChild(createDocsSection(section.content.docsAndWebsites));
  sectionDiv.appendChild(createProjectsSection(section.content.projectIdeas));

  return sectionDiv;
};

/**
 * Creates the "What to Learn" section
 * @param {Array} whatToLearn - Array of learning topics
 * @returns {HTMLElement} - The what to learn section
 */
const createWhatToLearnSection = (whatToLearn) => {
  const whatToLearnDiv = document.createElement("div");
  whatToLearnDiv.style.marginBottom = "25px";

  const title = document.createElement("h3");
  title.style.fontSize = "18px";
  title.style.fontWeight = "600";
  title.style.color = "#27ae60";
  title.style.marginBottom = "12px";
  title.style.borderBottom = "2px solid #27ae60";
  title.style.paddingBottom = "5px";
  title.textContent = "✅ What to Learn";
  whatToLearnDiv.appendChild(title);

  const list = document.createElement("ul");
  list.style.paddingLeft = "25px";
  list.style.margin = "15px 0";
  whatToLearn.forEach((item) => {
    const li = document.createElement("li");
    li.style.marginBottom = "8px";
    li.style.fontSize = "14px";
    li.style.lineHeight = "1.6";
    li.style.color = "#34495e";
    li.textContent = item;
    list.appendChild(li);
  });
  whatToLearnDiv.appendChild(list);

  return whatToLearnDiv;
};

/**
 * Creates the "Best Courses" section
 * @param {Object} bestCourses - Object containing english and hindi courses
 * @returns {HTMLElement} - The best courses section
 */
const createBestCoursesSection = (bestCourses) => {
  const bestCoursesDiv = document.createElement("div");
  bestCoursesDiv.style.marginBottom = "25px";

  const title = document.createElement("h3");
  title.style.fontSize = "18px";
  title.style.fontWeight = "600";
  title.style.color = "#3498db";
  title.style.marginBottom = "12px";
  title.style.borderBottom = "2px solid #3498db";
  title.style.paddingBottom = "5px";
  title.textContent = "📚 Best Courses";
  bestCoursesDiv.appendChild(title);

  // English courses
  const englishTitle = document.createElement("h4");
  englishTitle.style.fontSize = "16px";
  englishTitle.style.fontWeight = "500";
  englishTitle.style.color = "#2c3e50";
  englishTitle.style.marginTop = "15px";
  englishTitle.style.marginBottom = "10px";
  englishTitle.textContent = "In English:";
  bestCoursesDiv.appendChild(englishTitle);

  const englishList = document.createElement("ul");
  englishList.style.paddingLeft = "25px";
  englishList.style.margin = "10px 0";
  bestCourses.english.forEach((course) => {
    const li = document.createElement("li");
    li.style.marginBottom = "6px";
    li.style.fontSize = "13px";
    li.style.lineHeight = "1.5";
    li.style.color = "#34495e";
    li.textContent = course;
    englishList.appendChild(li);
  });
  bestCoursesDiv.appendChild(englishList);

  // Hindi courses
  const hindiTitle = document.createElement("h4");
  hindiTitle.style.fontSize = "16px";
  hindiTitle.style.fontWeight = "500";
  hindiTitle.style.color = "#2c3e50";
  hindiTitle.style.marginTop = "15px";
  hindiTitle.style.marginBottom = "10px";
  hindiTitle.textContent = "In Hindi:";
  bestCoursesDiv.appendChild(hindiTitle);

  const hindiList = document.createElement("ul");
  hindiList.style.paddingLeft = "25px";
  hindiList.style.margin = "10px 0";
  bestCourses.hindi.forEach((course) => {
    const li = document.createElement("li");
    li.style.marginBottom = "6px";
    li.style.fontSize = "13px";
    li.style.lineHeight = "1.5";
    li.style.color = "#34495e";
    li.textContent = course;
    hindiList.appendChild(li);
  });
  bestCoursesDiv.appendChild(hindiList);

  return bestCoursesDiv;
};

/**
 * Creates the "Tools to Use" section
 * @param {Array} toolsToUse - Array of tools
 * @returns {HTMLElement} - The tools section
 */
const createToolsSection = (toolsToUse) => {
  const toolsDiv = document.createElement("div");
  toolsDiv.style.marginBottom = "25px";

  const title = document.createElement("h3");
  title.style.fontSize = "18px";
  title.style.fontWeight = "600";
  title.style.color = "#f39c12";
  title.style.marginBottom = "12px";
  title.style.borderBottom = "2px solid #f39c12";
  title.style.paddingBottom = "5px";
  title.textContent = "🧰 Tools to Use";
  toolsDiv.appendChild(title);

  const list = document.createElement("ul");
  list.style.paddingLeft = "25px";
  list.style.margin = "15px 0";
  toolsToUse.forEach((tool) => {
    const li = document.createElement("li");
    li.style.marginBottom = "8px";
    li.style.fontSize = "14px";
    li.style.lineHeight = "1.6";
    li.style.color = "#34495e";
    li.textContent = tool;
    list.appendChild(li);
  });
  toolsDiv.appendChild(list);

  return toolsDiv;
};

/**
 * Creates the "Docs & Websites" section
 * @param {Array} docsAndWebsites - Array of documentation and websites
 * @returns {HTMLElement} - The docs section
 */
const createDocsSection = (docsAndWebsites) => {
  const docsDiv = document.createElement("div");
  docsDiv.style.marginBottom = "25px";

  const title = document.createElement("h3");
  title.style.fontSize = "18px";
  title.style.fontWeight = "600";
  title.style.color = "#e74c3c";
  title.style.marginBottom = "12px";
  title.style.borderBottom = "2px solid #e74c3c";
  title.style.paddingBottom = "5px";
  title.textContent = "📘 Docs & Websites";
  docsDiv.appendChild(title);

  const list = document.createElement("ul");
  list.style.paddingLeft = "25px";
  list.style.margin = "15px 0";
  docsAndWebsites.forEach((doc) => {
    const li = document.createElement("li");
    li.style.marginBottom = "8px";
    li.style.fontSize = "14px";
    li.style.lineHeight = "1.6";
    li.style.color = "#34495e";
    li.textContent = doc;
    list.appendChild(li);
  });
  docsDiv.appendChild(list);

  return docsDiv;
};

/**
 * Creates the "Project Ideas" section
 * @param {Array} projectIdeas - Array of project ideas
 * @returns {HTMLElement} - The projects section
 */
const createProjectsSection = (projectIdeas) => {
  const projectsDiv = document.createElement("div");
  projectsDiv.style.marginBottom = "25px";

  const title = document.createElement("h3");
  title.style.fontSize = "18px";
  title.style.fontWeight = "600";
  title.style.color = "#9b59b6";
  title.style.marginBottom = "12px";
  title.style.borderBottom = "2px solid #9b59b6";
  title.style.paddingBottom = "5px";
  title.textContent = "💡 Project Ideas";
  projectsDiv.appendChild(title);

  const list = document.createElement("ul");
  list.style.paddingLeft = "25px";
  list.style.margin = "15px 0";
  projectIdeas.forEach((project) => {
    const li = document.createElement("li");
    li.style.marginBottom = "8px";
    li.style.fontSize = "14px";
    li.style.lineHeight = "1.6";
    li.style.color = "#34495e";
    li.textContent = project;
    list.appendChild(li);
  });
  projectsDiv.appendChild(list);

  return projectsDiv;
};

/**
 * Generates and downloads PDF from roadmap data
 * @param {Array} roadmapData - The complete roadmap data
 * @param {Function} setDownloading - State setter for download status
 */
export const downloadRoadmapPDF = async (roadmapData, setDownloading) => {
  setDownloading(true);

  try {
    // Use setTimeout to prevent UI blocking
    setTimeout(async () => {
      try {
        // Create the download div
        const downloadDiv = createDownloadDiv(roadmapData);

        // Add roadmap content with improved styling
        roadmapData.forEach((section) => {
          const sectionDiv = createSectionDiv(section);
          downloadDiv.appendChild(sectionDiv);
        });

        // Temporarily add the div to the document to render it
        document.body.appendChild(downloadDiv);

        // Small delay to ensure DOM is updated
        setTimeout(async () => {
          try {
            // IMPROVED html2canvas settings for better quality and faster rendering
            const canvas = await html2canvas(downloadDiv, {
              scale: 1.5, // Reduced scale for faster rendering while maintaining quality
              useCORS: true,
              logging: false,
              letterRendering: true,
              allowTaint: true,
              backgroundColor: "#ffffff",
              width: downloadDiv.scrollWidth,
              height: downloadDiv.scrollHeight,
              scrollX: 0,
              scrollY: 0,
              removeContainer: true // Clean up automatically
            });

            // Remove the temporary div immediately after canvas creation
            if (document.body.contains(downloadDiv)) {
              document.body.removeChild(downloadDiv);
            }

            // Create PDF with optimized settings for faster generation
            const pdf = new jsPDF({
              orientation: "portrait",
              unit: "mm",
              format: "a4",
              compress: true,
              precision: 2
            });

            // Calculate dimensions for better fitting
            const imgWidth = 210; // A4 width in mm
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            const pageHeight = 297; // A4 height in mm

            let heightLeft = imgHeight;
            let position = 0;

            // Add first page with optimized image quality
            pdf.addImage(
              canvas.toDataURL("image/jpeg", 0.8), // Reduced quality for faster processing
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
                canvas.toDataURL("image/jpeg", 0.8),
                "JPEG",
                0,
                position,
                imgWidth,
                imgHeight,
              );
              heightLeft -= pageHeight;
            }

            // Save the PDF
            pdf.save("AI_ML_Engineer_Roadmap.pdf");

          } catch (error) {
            console.error("Error in canvas/PDF generation:", error);
            alert("There was an error generating the PDF. Please try again.");
          } finally {
            setDownloading(false);
          }
        }, 10); // Small delay for DOM update

      } catch (error) {
        console.error("Error in download process:", error);
        alert("There was an error generating the PDF. Please try again.");
        setDownloading(false);
      }
    }, 10); // Initial delay to prevent UI blocking

  } catch (error) {
    console.error("Error generating PDF:", error);
    alert("There was an error generating the PDF. Please try again.");
    setDownloading(false);
  }
};