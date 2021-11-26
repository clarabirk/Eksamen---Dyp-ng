// Menu items and checkbox
const menuItems = document.querySelectorAll('.menuitem');
const checkbox = document.querySelector('#mobileicon');

// Add event listeners to menu items
for (const menuItem of menuItems) {
    menuItem.addEventListener('click', () => {
        // If checkbox is checked, uncheck it
        if (checkbox.checked) {
            checkbox.checked = false;
        }
    })
}