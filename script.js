// Initialize AOS
AOS.init({ offset: 0 });

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".navigation");
const navigationItems = document.querySelectorAll(".navigation a");

// Sticky Navigation Effect
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Menu toggle button
menuBtn.addEventListener("click", function () {
    nav.classList.toggle("active"); // Show/hide navbar on click
});


/*Experimenting with jquery*/
$(document).ready(function() {
    if (!localStorage.getItem('menu-shown')) {
        // Show the popup menu when the page loads
        $('#popup').fadeIn();
        // Set a flag in localStorage so the menu doesn't show again during the session
        localStorage.setItem('menu-shown', 'true');
        // Disable scrolling
        $('body').css('overflow', 'hidden');

    }

    // Close the menu when the close button is clicked
    $('#close-popup').click(function() {
        $('#popup').fadeOut();
        // Enable scrolling again after the popup is closed
        $('body').css('overflow', 'auto');
    });

    // Close the menu if clicked outside of the menu
    $(document).click(function(event) {
        if (!$(event.target).closest('#popup').length) {
            $('#popup').fadeOut();
            // Enable scrolling again after the popup is closed
            $('body').css('overflow', 'auto');
        }
    });
});
