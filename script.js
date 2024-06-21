document.addEventListener("DOMContentLoaded", function() {
    // Get all elements with class 'elementor-widget-listing-description'
    const descriptions = document.querySelectorAll('.elementor-widget-listing-description');

    descriptions.forEach(description => {
        // Create div with class 'description' and move all childrens of 'description' element into 
        const content = document.createElement('div');
        content.classList.add('description');
        while (description.firstChild) {
            content.appendChild(description.firstChild);
        }
        description.appendChild(content);

        // Save original 'description' size
        const originalHeight = content.scrollHeight;

        // Check if description has more than 300px
        if (originalHeight > 300) {
            // Create button
            const button = document.createElement('button');
            button.classList.add('toggle-button');
            button.textContent = 'Load More';

            // Add button func
            button.addEventListener('click', function() {
                if (button.textContent === 'Load More') {
                    content.style.maxHeight = originalHeight + 'px';
                    button.textContent = 'Show Less';
                } else {
                    content.style.maxHeight = '300px';
                    button.textContent = 'Load More';
                }
            });

            // Add button in the description
            description.appendChild(button);
            button.style.display = 'block';
        }
    });
});

