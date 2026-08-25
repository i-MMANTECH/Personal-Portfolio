const puppeteer = require("puppeteer");
const path = require("path");
const fs = require("fs");

(async () => {
  const htmlPath = path.resolve(
    __dirname,
    "../Emmanuel_Aro_Professional_CV.html"
  );
  const outputPath = path.resolve(
    __dirname,
    "../public/Emmanuel_Aro_CV.pdf"
  );

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();

  const fileUrl = "file:///" + htmlPath.replace(/\\/g, "/");
  await page.goto(fileUrl, { waitUntil: "networkidle0" });

  // Wait for fonts to load
  await new Promise((r) => setTimeout(r, 1500));

  await page.pdf({
    path: outputPath,
    format: "A4",
    printBackground: true,
    margin: { top: "0mm", bottom: "0mm", left: "0mm", right: "0mm" },
  });

  await browser.close();
  console.log("✅ PDF generated at:", outputPath);
})();
