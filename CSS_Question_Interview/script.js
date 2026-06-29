// Toggle functionality for topic sections
document.addEventListener('DOMContentLoaded', function() {
    const topicHeaders = document.querySelectorAll('.topic-header');
    
    topicHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const section = this.parentElement;
            const isActive = section.classList.contains('active');
            
            // Close all sections
            document.querySelectorAll('.topic-section').forEach(s => {
                s.classList.remove('active');
            });
            
            // Open clicked section if it wasn't active
            if (!isActive) {
                section.classList.add('active');
                
                // Smooth scroll to section
                setTimeout(() => {
                    section.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'nearest' 
                    });
                }, 100);
            }
        });
    });
    
    // Optional: Open first section by default
    const firstSection = document.querySelector('.topic-section');
    if (firstSection) {
        firstSection.classList.add('active');
    }
});