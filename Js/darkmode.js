// Function to toggle between light and dark themes
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    let newTheme = 'dark';

    if (currentTheme === 'dark' || !currentTheme) {
        newTheme = 'light';
    }

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('scp-theme', newTheme); // Save preference locally
    updateButtonText(newTheme);
}

// Function to update the text inside the button dynamically
function updateButtonText(theme) {
    const btn = document.getElementById('themeToggleBtn');
    if (btn) {
        btn.innerText = theme === 'light' ? 'UI_MODE: INVERT_TO_DARK' : 'UI_MODE: INVERT_TO_LIGHT';
    }
}

// Run immediately when the script loads to prevent "flashing" white/dark screens
(function() {
    const savedTheme = localStorage.getItem('scp-theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
})();

// Attach event listener once the elements are fully generated on the page
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('scp-theme') || 'dark';
    updateButtonText(savedTheme);

    const btn = document.getElementById('themeToggleBtn');
    if (btn) {
        btn.addEventListener('click', toggleTheme);
    }
});