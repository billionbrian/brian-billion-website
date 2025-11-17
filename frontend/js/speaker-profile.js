function generateSpeakerProfile() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.setFont("helvetica", "bold");
  doc.setFontSize(24);
  doc.text("Brian Billion", 20, 30);

  doc.setFontSize(14);
  doc.text("Empowering Minds. Shaping Financial Futures.", 20, 40);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  doc.text("Driven by discipline, precision, and passion — Brian Billion is a visionary in financial literacy, mindset transformation, and innovation.", 20, 55, { maxWidth: 170 });

  doc.setFont("helvetica", "bold");
  doc.text("Speaking Topics:", 20, 85);
  doc.setFont("helvetica", "normal");
  const topics = [
    "• Financial Literacy for the Next Generation",
    "• Mindset Transformation for Growth",
    "• Personal Branding in the Modern World",
    "• Innovation and Leadership in Business"
  ];
  doc.text(topics, 25, 95);

  doc.setFont("helvetica", "italic");
  doc.text("Connect:", 20, 140);
  doc.text("Email: billionbrian200@gmail.com", 20, 148);
  doc.text("LinkedIn: linkedin.com/in/brian-billion-a0a712340", 20, 156);

  doc.save("BrianBillion_SpeakerProfile.pdf");
}
