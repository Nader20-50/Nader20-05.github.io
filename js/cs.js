// Get all elements with the class "color"
const colorElements = document.querySelectorAll('.color');

// Loop through each color element
colorElements.forEach(colorElement => {
    // Add click event listener
    colorElement.addEventListener('click', function() {
        // Toggle the class "active" to show/hide content
        this.classList.toggle('active');

        // Get the next sibling element (which is the content) and toggle its display
        const content = this.nextElementSibling;
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block'; // Show content if it's hidden
        } else {
            content.style.display = 'none'; // Hide content if it's visible
        }
    });
});
