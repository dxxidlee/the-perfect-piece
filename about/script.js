document.getElementById('enter-button').addEventListener('click', () => {
    const landingTitle = document.querySelector('.landing-title');
    const landingContent = document.querySelector('.landing-content');
    const landingText = document.querySelector('.landing-text');
    const enterButton = document.getElementById('enter-button');
    
    // First, fade out text and buttons
    landingText.classList.add('fade-out');
    enterButton.classList.add('fade-out');
    
    // After text fades out, start the container and title animations
    setTimeout(() => {
        landingTitle.classList.add('fade-out');
        landingContent.classList.add('fade-out');
        
        // After animations complete, redirect to main page
        setTimeout(() => {
            window.location.href = 'https://dxxidlee.github.io/the-perfect-piece/home/';
        }, 2500); // Wait for container and title animations
    }, 600); // Wait for text fade out
}); 