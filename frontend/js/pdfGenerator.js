// pdfGenerator.js
document.getElementById("downloadPdf").addEventListener("click", async (e) => {
  e.preventDefault();

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF("p", "pt", "a4");

  // ---- BRAND COLORS ----
  const gold = "#FFCC00";
  const dark = "#000000";

  // ---- HERO IMAGE ----
  const heroImg = new Image();
  heroImg.src = "images/hero.jpg"; // same image you used in hero section
  await new Promise((r) => (heroImg.onload = r));

  // background
  doc.addImage(heroImg, "JPEG", 0, 0, 600, 350);

  // overlay
  doc.setFillColor(0, 0, 0, 0.5);
  doc.rect(0, 0, 600, 350, "F");

  // ---- HEADER ----
  doc.setFont("helvetica", "bold");
  doc.setFontSize(26);
  doc.setTextColor(gold);
  doc.text("BRIAN BILLION", 40, 80);

  doc.setFontSize(14);
  doc.setTextColor("#FFFFFF");
  doc.text("Financial Literacy | Mindset Transformation | Innovation", 40, 105);

  // ---- ABOUT ----
  const about = `Driven by precision, passion, and purpose, Brian Billion is a rising voice in business transformation, financial literacy, and personal development. A choleric–melancholic by nature, he blends assertive leadership with analytical depth — a rare balance that fuels both vision and execution.`;

  doc.setFont("helvetica", "normal");
  doc.setTextColor("#EAEAEA");
  doc.setFontSize(11);
  doc.text(about, 40, 150, { maxWidth: 520, align: "left" });

  // ---- TOPICS ----
  const topics = [
    "• Business & Financial Literacy",
    "• Mindset Transformation",
    "• Innovation & Leadership",
    "• Personal Branding",
  ];
  doc.setTextColor(gold);
  doc.setFontSize(12);
  doc.text("Signature Speaking Topics:", 40, 250);
  doc.setTextColor("#FFFFFF");
  doc.text(topics, 60, 270);

  // ---- CONTACT INFO ----
  doc.setDrawColor(gold);
  doc.setLineWidth(1);
  doc.line(40, 380, 550, 380);

  doc.setFontSize(10);
  doc.setTextColor("#FFFFFF");
  doc.text("📧  billionbrian200@gmail.com", 40, 400);
  doc.text("🔗  LinkedIn: linkedin.com/in/brian-billion-a0a712340", 40, 420);
  doc.text("📸  Instagram: @_g._athogo_", 40, 440);
  doc.text("🎵  TikTok: @billion_brian", 40, 460);
  doc.text("▶️  YouTube: @Brianbillion25", 40, 480);

  // ---- SIGNATURE ----
  doc.setFont("courier", "italic");
  doc.setTextColor(gold);
  doc.setFontSize(20);
  doc.text("Brian Billion", 400, 530);

  // ---- FOOTER ----
  doc.setFontSize(9);
  doc.setTextColor("#888");
  doc.text("© 2025 Brian Billion. All Rights Reserved.", 40, 560);

  // ---- SAVE FILE ----
  doc.save("Brian-Billion-Speaker-OnePager.pdf");
});
