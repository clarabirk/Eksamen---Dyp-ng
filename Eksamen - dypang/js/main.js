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


var root = document.querySelector('.SimpleSlider');
var slides = root.querySelectorAll(':not(:first-child)');
for (i = 0; i < slides.length; i++) {
    slides[i].classList.add('is-hidden');
}
root.addEventListener('transitionend', function() {
    root.insertBefore(root.querySelector(':first-child.is-hidden'),null);
});
setInterval(function() {
    root.querySelector(':first-child').classList.add('is-hidden');
    root.querySelector(':nth-child(2)').classList.remove('is-hidden');
}, 4000)
