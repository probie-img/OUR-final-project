// Get the contact form and message
let contactForm = document.getElementById("contactForm");
let formMessage = document.getElementById("formMessage");

// Show a message when the form is submitted
contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    formMessage.textContent =
        "Thank you! Your message has been sent.";

    contactForm.reset();
});

// Add a simple action to all property buttons
let detailButtons = document.querySelectorAll(".details-button");

detailButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        alert("Thank you for your interest in this property!");
    });
});
