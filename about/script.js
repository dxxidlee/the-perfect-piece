document.getElementById('enter-button').addEventListener('click', () => {
    const landingTitle = document.querySelector('.landing-title');
    const landingContent = document.querySelector('.landing-content');
    const landingText = document.querySelector('.landing-text');
    const enterButton = document.getElementById('enter-button');
    
    // Add fade-out classes to trigger animations
    landingTitle.classList.add('fade-out');
    landingContent.classList.add('fade-out');
    landingText.classList.add('fade-out');
    enterButton.classList.add('fade-out');
    
    // After animations complete, redirect to main page
    setTimeout(() => {
        window.location.href = '../main-page/index.html';
    }, 2000); // Wait for animations to complete
}); 