const puppeteer = require('puppeteer');
const httpServer = require('http-server');
const path = require('path');

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function generatePdfFromHtml(htmlPath, outputPath) {
  const server = httpServer.createServer({ root: path.dirname(htmlPath) });
  server.listen(8089); // Start server on port 8089

  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 740, height: 1056 })
    await page.emulateMediaType('print');
    await page.goto('http://localhost:8089/' + path.basename(htmlPath));

    await delay(3000)
    await page.pdf({
      printBackground: true,
      path: outputPath,
      width: 750,
      height: 2850,
    });

    await browser.close();
  } finally {
    server.close(); // Close the server when done
  }
}

generatePdfFromHtml('/Users/andrew/focus/hustle/websites/coffee/index.html', 'output.pdf');
