// Get the toggle switch element
const toggle = document.getElementById('toggle');

// Check for saved user preference in local storage
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

// Apply the saved theme if it exists
if (currentTheme) {
  document.body.classList.add(currentTheme);
  if (currentTheme === 'dark-mode') {
    toggle.checked = true; // Set the toggle to checked if dark mode is active
  }
}

// Add event listener to the toggle switch
toggle.addEventListener('change', () => {
  if (toggle.checked) {
    // If toggle is checked, apply dark mode
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
    localStorage.setItem('theme', 'dark-mode'); // Save preference in local storage
  } else {
    // If toggle is unchecked, apply light mode
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light-mode'); // Save preference in local storage
  }
});
