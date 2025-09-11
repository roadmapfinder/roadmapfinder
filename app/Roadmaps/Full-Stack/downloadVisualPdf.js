// downloadVisualPdf.js
// Utility to download the visual roadmap as a PDF, preserving layout and style

// Main PDF download function

// Build a styled DOM for the visual roadmap (safe for html2canvas)

export function createVisualDownloadContent(roadmapData, activeTab) {
  // Use a large width for high-res export, and relative units for responsiveness
  const container = document.createElement("div");
  container.style.background = "#f6f7fb";
  container.style.padding = "2.5em";
  container.style.fontFamily =
    "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
  container.style.width = "1600px"; // Large width for high-res
  container.style.maxWidth = "100%";
  container.style.margin = "0 auto";
  container.style.borderRadius = "1.2em";
  container.style.boxShadow = "0 2px 16px #e0e0e0";

  // Title
  const title = document.createElement("h1");
  title.textContent =
    activeTab === "frontend"
      ? "Frontend Visual Roadmap"
      : "Fullstack Visual Roadmap";
  title.style.textAlign = "center";
  title.style.fontSize = "2.8em";
  title.style.fontWeight = "bold";
  title.style.marginBottom = "1.5em";
  title.style.color = "#2c3e50";
  container.appendChild(title);

  // Each section
  roadmapData.forEach((section, sectionIdx) => {
    const sectionDiv = document.createElement("div");
    sectionDiv.style.display = "flex";
    sectionDiv.style.alignItems = "flex-start";
    sectionDiv.style.marginBottom = "2.2em";
    sectionDiv.style.flexWrap = "wrap";

    // Section title box
    const sectionBox = document.createElement("div");
    sectionBox.style.background = [
      "#3B82F6",
      "#22C55E",
      "#F59E42",
      "#A855F7",
      "#EC4899",
    ][sectionIdx % 5];
    sectionBox.style.color = "#fff";
    sectionBox.style.padding = "1.2em 2em";
    sectionBox.style.borderRadius = "0.8em";
    sectionBox.style.fontWeight = "bold";
    sectionBox.style.fontSize = "1.3em";
    sectionBox.style.minWidth = "200px";
    sectionBox.style.textAlign = "center";
    sectionBox.style.marginRight = "2em";
    sectionBox.innerHTML = `<div>${section.title}</div><div style='font-size:1em;font-weight:normal;opacity:0.9;margin-top:0.4em;'>${section.subtitle}</div>`;
    sectionDiv.appendChild(sectionBox);

    // Steps
    const stepsCol = document.createElement("div");
    stepsCol.style.display = "flex";
    stepsCol.style.flexDirection = "column";
    stepsCol.style.gap = "1.2em";
    stepsCol.style.flex = "1";
    section.steps.forEach((step) => {
      const stepRow = document.createElement("div");
      stepRow.style.display = "flex";
      stepRow.style.alignItems = "center";
      stepRow.style.gap = "1.2em";
      stepRow.style.flexWrap = "wrap";

      // Step number
      const stepNum = document.createElement("div");
      stepNum.textContent = step.step;
      stepNum.style.width = "90px";
      stepNum.style.textAlign = "right";
      stepNum.style.fontWeight = "bold";
      stepNum.style.color = "#64748b";
      stepNum.style.fontSize = "1.1em";
      stepRow.appendChild(stepNum);

      // Arrow (SVG)
      const arrow = document.createElement("div");
      arrow.innerHTML = `<svg width='70' height='22' viewBox='0 0 70 22' fill='none' xmlns='http://www.w3.org/2000/svg'><line x1='0' y1='11' x2='55' y2='11' stroke='#6366f1' stroke-width='3'/><polyline points='48,5 55,11 48,17' stroke='#6366f1' stroke-width='3' fill='none'/></svg>`;
      stepRow.appendChild(arrow);

      // Step box
      const stepBox = document.createElement("div");
      stepBox.style.background = "#fff";
      stepBox.style.border = "1.5px solid #e5e7eb";
      stepBox.style.borderRadius = "0.7em";
      stepBox.style.padding = "1.1em 1.7em";
      stepBox.style.boxShadow = "0 2px 8px #f3f4f6";
      stepBox.style.maxWidth = "520px";
      stepBox.style.flex = "1";
      stepBox.innerHTML = `<div style='font-weight:bold;font-size:1.15em;color:#1e293b;margin-bottom:0.3em;'>${step.topic}</div><div style='font-size:1em;color:#64748b;margin-bottom:0.4em;'>${step.category}</div><div style='font-size:1.05em;color:#334155;'>${step.details}</div>`;
      stepRow.appendChild(stepBox);

      stepsCol.appendChild(stepRow);
    });
    sectionDiv.appendChild(stepsCol);
    container.appendChild(sectionDiv);
  });

  return container;
}

export const handleDownloadVisualPDF = async (
  roadmapData,
  activeTab,
  setDownloading
) => {
  setDownloading(true);
  try {
    const html2canvasModule = await import("html2canvas");
    const jsPDFModule = await import("jspdf");
    const html2canvas = html2canvasModule.default;
    const jsPDF = jsPDFModule.default;

    // Build a safe DOM for the visual roadmap
    const visualDiv = createVisualDownloadContent(roadmapData, activeTab);
    document.body.appendChild(visualDiv);
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Use a high scale for better quality
    const canvas = await html2canvas(visualDiv, {
      scale: 3,
      useCORS: true,
      backgroundColor: "#fff",
      logging: false,
      letterRendering: true,
      allowTaint: true,
      width: visualDiv.offsetWidth,
      height: visualDiv.scrollHeight,
    });

    document.body.removeChild(visualDiv);

    // Calculate image size for A4
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
      compress: false,
      precision: 4,
    });
    const imgWidth = 210; // A4 width in mm
    const pageHeight = 297; // A4 height in mm
    const pxPerMm = canvas.width / imgWidth;
    const imgHeight = canvas.height / pxPerMm;

    let heightLeft = imgHeight;
    let position = 0;
    let pageNum = 0;
    const imgData = canvas.toDataURL("image/png", 1.0);

    // Add first page
    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    heightLeft -= pageHeight;
    position = -pageHeight;

    // Add more pages if needed
    while (heightLeft > 0) {
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      position -= pageHeight;
      pageNum++;
    }
    pdf.save("fullstack.pdf");
  } catch (error) {
    console.error("Error generating PDF:", error);
    alert("There was an error generating the PDF. Please try again.");
  } finally {
    setDownloading(false);
  }
};
