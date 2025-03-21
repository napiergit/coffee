const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check for stored preference
const darkMode = localStorage.getItem('darkMode');
if (darkMode === 'enabled') {
  body.classList.add('dark-mode');
  body.classList.remove('light-mode');
}

darkModeToggle.addEventListener('click', () => {
  console.log('click')
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.setItem('darkMode', 'disabled');
  }
});

// const isNightMode = () => {
// }
//
// const toggleNightMode = () => {
//   console.log('toggle')
// }
//
// const html += `
//   <div
//     style="position:fixed;top:20px;right:20px;"
//     onclick="toggleNightMode()
//   >
//   </div>
// `;
//
//
//
// const targetDiv = document.getElementById('night-mode');
// targetDiv.innerHTML = html;

