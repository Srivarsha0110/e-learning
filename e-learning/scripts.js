// scripts.js

// Add your JavaScript here (e.g., for carousel, form validations, etc.)

document.addEventListener('DOMContentLoaded', function() {
    // Example: Initialize a simple testimonial slider
    let testimonials = document.querySelectorAll('.testimonial-item');
    let index = 0;

    function showTestimonial() {
        testimonials.forEach((item, i) => {
            item.style.display = i === index ? 'block' : 'none';
        });
        index = (index + 1) % testimonials.length;
    }

    showTestimonial();
    setInterval(showTestimonial, 3000); // Change testimonial every 3 seconds
});
