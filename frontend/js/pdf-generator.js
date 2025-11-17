// pdf-generator.js - uses jsPDF (loaded in index.html) to build a one-page speaker profile
(async function(){
  const { jsPDF } = window.jspdf || {};
  async function loadImage(src){
    return new Promise((res, rej) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => res(img);
      img.onerror = rej;
      img.src = src;
    });
  }

  async function generate() {
    if (!jsPDF) { alert('PDF library not loaded'); return; }
    const doc = new jsPDF({ unit: 'pt', format: 'a4' });
    const pageW = doc.internal.pageSize.getWidth();

    // hero image at top if available
    let heroImg;
    try { heroImg = await loadImage('images/hero.jpg'); } catch(e){ heroImg = null; }

    if (heroImg) {
      const imgW = pageW;
      const imgH = (heroImg.height / heroImg.width) * imgW;
      doc.addImage(heroImg, 'JPEG', 0, 0, imgW, Math.min(imgH, 230));
      doc.setFillColor(0,0,0,0.45);
      doc.rect(0,0,imgW, Math.min(imgH, 230), 'F');
    }

    // Header text
    doc.setFontSize(26);
    doc.setTextColor('#ffffff');
    doc.setFont('helvetica','bold');
    doc.text('Brian Billion', 40, 100);

    doc.setFontSize(12);
    doc.setFont('helvetica','normal');
    doc.text('Financial Literacy · Mindset Transformation · Innovation', 40, 120);

    // About
    const about = "Driven by precision and purpose, Brian blends choleric leadership with melancholic strategy — turning vision into disciplined action. He equips young leaders with practical financial systems and mindset frameworks to build sustainable impact.";
    doc.setFontSize(11);
    doc.setTextColor('#eaeaea');
    doc.text(doc.splitTextToSize(about, pageW - 80), 40, 160);

    // Topics
    const topics = ['Financial Literacy for Youth','Mindset Architecture','Personal Branding & Innovation'];
    doc.setFontSize(12);
    doc.setTextColor('#ffffff');
    doc.text('Signature Talks:', 40, 270);
    doc.setFontSize(11);
    topics.forEach((t,i)=> doc.text('- ' + t, 60, 290 + i*16));

    // Contact
    doc.setDrawColor(180,180,180);
    doc.line(40, 370, pageW - 40, 370);
    doc.setFontSize(10);
    doc.setTextColor('#f1f1f1');
    doc.text('Email: billionbrian200@gmail.com', 40, 390);
    doc.text('LinkedIn: linkedin.com/in/brian-billion-a0a712340', 40, 406);
    doc.text('TikTok: @billion_brian  •  YouTube: @Brianbillion25', 40, 422);

    doc.setFontSize(12);
    doc.setFont('helvetica','italic');
    doc.text('— Brian Billion', pageW - 180, 480);

    doc.save('Brian-Billion-Speaker-Profile.pdf');
  }

  document.getElementById('downloadPdf')?.addEventListener('click', (e) => { e.preventDefault(); generate(); });
  document.getElementById('downloadPdf2')?.addEventListener('click', (e) => { e.preventDefault(); generate(); });
})();
