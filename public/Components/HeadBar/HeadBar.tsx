"use client";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useCardStore } from "@/public/Store/useCardStore";
import { BsFiletypePdf, BsFiletypePng } from "react-icons/bs";

export default function HeadBar() {
  const { name, template } = useCardStore();

  const downloadPDF = async () => {
    const cardElement = document.querySelector(`.${template}`) as HTMLElement;

    if (!cardElement) {
      console.error("Card not found");
      alert("Please create a card first!");
      return;
    }

    try {
      // Hide all placeholder elements before capturing
      const placeholders = cardElement.querySelectorAll(".placeholder-text");
      placeholders.forEach((el) => {
        (el as HTMLElement).style.display = "none";
      });

      // Capture the card as image with transparent background and high quality
      const canvas = await html2canvas(cardElement, {
        backgroundColor: null,
        scale: 2, // 2x resolution for high quality
        useCORS: true, // Allow cross-origin images (like logos)
        allowTaint: true,
        logging: false,
      });

      const imgData = canvas.toDataURL("image/png");

      // Convert canvas dimensions to mm for PDF (96 DPI to mm conversion)
      const imgWidthMM = (canvas.width * 25.4) / (96 * 3); // Divide by scale factor
      const imgHeightMM = (canvas.height * 25.4) / (96 * 3);

      // Create PDF with exact card dimensions
      const pdf = new jsPDF({
        orientation: imgWidthMM > imgHeightMM ? "landscape" : "portrait",
        unit: "mm",
        format: [imgWidthMM, imgHeightMM],
      });

      // Add image at 0,0 with exact dimensions (no margins)
      pdf.addImage(imgData, "PNG", 0, 0, imgWidthMM, imgHeightMM);

      pdf.save(`${name}-card.pdf`);

      // Show placeholders again after PDF is generated
      placeholders.forEach((el) => {
        (el as HTMLElement).style.display = "";
      });
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Failed to generate PDF");

      // Make sure to restore placeholders even if error occurs
      const placeholders = cardElement.querySelectorAll(".placeholder-text");
      placeholders.forEach((el) => {
        (el as HTMLElement).style.display = "";
      });
    }
  };

  const downloadPNG = async () => {
    const cardElement = document.querySelector(`.${template}`) as HTMLElement;

    if (!cardElement) {
      console.error("card not found");
      alert("please create a card first");
      return;
    }

    try {
      const placeholders = cardElement.querySelectorAll(".placeholder-text");
      placeholders.forEach((el) => {
        (el as HTMLElement).style.display = "none";
      });

      const canvas = await html2canvas(cardElement, {
        backgroundColor: null,
        scale: 3,
        useCORS: true,
        allowTaint: true,
        logging: false,
      });
      const imageData = canvas.toDataURL("image/png");

      const link = document.createElement("a");
      link.download = `${name}-card.png`;
      link.href = imageData;
      link.click();

      placeholders.forEach((el) => {
        (el as HTMLElement).style.display = "";
      });
    } catch (error) {
      console.error("Error generating PNG:", error);
      alert("Failed to generate PNG");

      const placeholders = cardElement.querySelectorAll(".placeholder-text");
      placeholders.forEach((el) => {
        (el as HTMLElement).style.display = "";
      });
    }
  };

  return (
    <>
      <div className="headBar col-12 text-end m-0 mb-3 px-1 py-2">
        <button className="me-2" onClick={downloadPDF}>
          Download .Pdf <BsFiletypePdf />
        </button>

        <button onClick={downloadPNG}>
          Download .Png <BsFiletypePng />
        </button>
      </div>
    </>
  );
}
