document.getElementById('downloadDiv').addEventListener('click', function() {
  const fileName = 'Andrew-Napier-Resume.pdf';
  const pdfUrl = `./assets/${fileName}`;
  window.open(pdfUrl, '_blank')
});

// document.getElementById('downloadDiv').addEventListener('click', function() {
//   const fileName = 'Andrew-Napier-Resume.pdf';
//   const pdfUrl = `./assets/${fileName}`;
//
//   // Create a temporary anchor element
//   const link = document.createElement('a');
//   link.href = pdfUrl;
//   link.download = fileName; // Name for the downloaded file
//
//   // Programmatically trigger the download
//   document.body.appendChild(link); // Required for Firefox
//   link.click();
//   document.body.removeChild(link); // Clean up
// });
