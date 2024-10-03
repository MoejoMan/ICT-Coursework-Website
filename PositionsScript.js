document.addEventListener("DOMContentLoaded", function() {
    // Get all 'Apply Now' buttons
    var applyButtons = document.querySelectorAll('.apply-now');
    
    // Add click event listener to each button
    applyButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior

            // Hide the Apply Now button
            button.style.display = 'none';

            // Show the job application form with smooth animation
            var jobApplicationForm = document.getElementById('job-application-form-container');
            jobApplicationForm.style.opacity = '0'; // Set initial opacity to 0
            jobApplicationForm.style.display = 'block';
            setTimeout(function() {
                jobApplicationForm.style.opacity = '1'; // Fade in the form
            }, 50); // Delay to allow the form to be fully displayed before fading in
        });
    });

    // Get the close button
    var closeButton = document.getElementById('close-form-button');
    
    closeButton.addEventListener('click', function(event) {
        event.preventDefault(); 
        
       
        var jobApplicationForm = document.getElementById('job-application-form-container');
        jobApplicationForm.style.opacity = '0'; 
        setTimeout(function() {
            jobApplicationForm.style.display = 'none'; 
        }, 300); 
        
        applyButtons.forEach(function(button) {
            button.style.display = 'inline'; 
        });

        console.log('Close button clicked');
    });
});
