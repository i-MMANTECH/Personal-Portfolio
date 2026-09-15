const fs = require('fs');
const HTMLToDOCX = require('html-to-docx');

(async () => {
  const htmlContent = fs.readFileSync('Emmanuel_Aro_Professional_CV.html', 'utf-8');
  
  // The html-to-docx library can take raw HTML string
  const docxBuffer = await HTMLToDOCX(htmlContent, null, {
    table: { row: { cantSplit: true } },
    footer: true,
    pageNumber: true,
    margins: { top: 1000, bottom: 1000, left: 1000, right: 1000 }
  });

  fs.writeFileSync('public/Emmanuel_Aro_CV.docx', docxBuffer);
  console.log('✅ DOCX generated successfully at public/Emmanuel_Aro_CV.docx');
})();
