// script.js

function validateForm() {
    // Get the values from the input fields
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const destination = document.getElementById('destination').value.trim();

    // Regular expression for validating email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate Name
    if (name === "") {
        alert("Please enter your name.");
        return false; // Prevent form submission
    }

    // Validate Email
    if (email === "") {
        alert("Please enter your email.");
        return false; // Prevent form submission
    } else if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false; // Prevent form submission
    }

    // Validate Travel Destination
    if (destination === "") {
        alert("Please enter your travel destination.");
        return false; // Prevent form submission
    }

    // If all validations pass
    alert("Thank you for your inquiry!");
    return true; // Allow form submission
}

// Banner auto-slide functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.banner-slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Auto slide every 5 seconds
setInterval(nextSlide, 5000);