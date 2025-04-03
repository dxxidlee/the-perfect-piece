// Add at the start of the file
const isMobile = window.matchMedia('(max-width: 750px)').matches;

// Emotion Slider
const emotionSlider = document.querySelector('.emotion-slider input[type="range"]');
const emotionValue = document.querySelector('.emotion-value');
const grayBox = document.querySelector('.gray-box');

const emotionLabels = [
    'NOT EMOTIONAL',
    'SLIGHTLY EMOTIONAL',
    'EMOTIONAL',
    'NOTABLY EMOTIONAL',
    'HIGHLY EMOTIONAL'
];

// Define all possible values
const styleOptions = ['ABSTRACT', 'FIGURAL', 'SURREAL', 'MINIMAL'];
const mediumOptions = ['PAINTING', 'SCULPTURE', 'POSTER', 'PHOTO'];

// Create mapping for all combinations
const imageMapping = {
    // ABSTRACT combinations (20)
    'ABSTRACT_NOT EMOTIONAL_PAINTING': 1,
    'ABSTRACT_NOT EMOTIONAL_SCULPTURE': 2,
    'ABSTRACT_NOT EMOTIONAL_POSTER': 3,
    'ABSTRACT_NOT EMOTIONAL_PHOTO': 4,
    'ABSTRACT_SLIGHTLY EMOTIONAL_PAINTING': 5,
    'ABSTRACT_SLIGHTLY EMOTIONAL_SCULPTURE': 6,
    'ABSTRACT_SLIGHTLY EMOTIONAL_POSTER': 7,
    'ABSTRACT_SLIGHTLY EMOTIONAL_PHOTO': 8,
    'ABSTRACT_EMOTIONAL_PAINTING': 9,
    'ABSTRACT_EMOTIONAL_SCULPTURE': 10,
    'ABSTRACT_EMOTIONAL_POSTER': 11,
    'ABSTRACT_EMOTIONAL_PHOTO': 12,
    'ABSTRACT_NOTABLY EMOTIONAL_PAINTING': 13,
    'ABSTRACT_NOTABLY EMOTIONAL_SCULPTURE': 14,
    'ABSTRACT_NOTABLY EMOTIONAL_POSTER': 15,
    'ABSTRACT_NOTABLY EMOTIONAL_PHOTO': 16,
    'ABSTRACT_HIGHLY EMOTIONAL_PAINTING': 17,
    'ABSTRACT_HIGHLY EMOTIONAL_SCULPTURE': 18,
    'ABSTRACT_HIGHLY EMOTIONAL_POSTER': 19,
    'ABSTRACT_HIGHLY EMOTIONAL_PHOTO': 20,

    // FIGURAL combinations (20)
    'FIGURAL_NOT EMOTIONAL_PAINTING': 21,
    'FIGURAL_NOT EMOTIONAL_SCULPTURE': 22,
    'FIGURAL_NOT EMOTIONAL_POSTER': 23,
    'FIGURAL_NOT EMOTIONAL_PHOTO': 24,
    'FIGURAL_SLIGHTLY EMOTIONAL_PAINTING': 25,
    'FIGURAL_SLIGHTLY EMOTIONAL_SCULPTURE': 26,
    'FIGURAL_SLIGHTLY EMOTIONAL_POSTER': 27,
    'FIGURAL_SLIGHTLY EMOTIONAL_PHOTO': 28,
    'FIGURAL_EMOTIONAL_PAINTING': 29,
    'FIGURAL_EMOTIONAL_SCULPTURE': 30,
    'FIGURAL_EMOTIONAL_POSTER': 31,
    'FIGURAL_EMOTIONAL_PHOTO': 32,
    'FIGURAL_NOTABLY EMOTIONAL_PAINTING': 33,
    'FIGURAL_NOTABLY EMOTIONAL_SCULPTURE': 34,
    'FIGURAL_NOTABLY EMOTIONAL_POSTER': 35,
    'FIGURAL_NOTABLY EMOTIONAL_PHOTO': 36,
    'FIGURAL_HIGHLY EMOTIONAL_PAINTING': 37,
    'FIGURAL_HIGHLY EMOTIONAL_SCULPTURE': 38,
    'FIGURAL_HIGHLY EMOTIONAL_POSTER': 39,
    'FIGURAL_HIGHLY EMOTIONAL_PHOTO': 40,

    // SURREAL combinations (20)
    'SURREAL_NOT EMOTIONAL_PAINTING': 41,
    'SURREAL_NOT EMOTIONAL_SCULPTURE': 42,
    'SURREAL_NOT EMOTIONAL_POSTER': 43,
    'SURREAL_NOT EMOTIONAL_PHOTO': 44,
    'SURREAL_SLIGHTLY EMOTIONAL_PAINTING': 45,
    'SURREAL_SLIGHTLY EMOTIONAL_SCULPTURE': 46,
    'SURREAL_SLIGHTLY EMOTIONAL_POSTER': 47,
    'SURREAL_SLIGHTLY EMOTIONAL_PHOTO': 48,
    'SURREAL_EMOTIONAL_PAINTING': 49,
    'SURREAL_EMOTIONAL_SCULPTURE': 50,
    'SURREAL_EMOTIONAL_POSTER': 51,
    'SURREAL_EMOTIONAL_PHOTO': 52,
    'SURREAL_NOTABLY EMOTIONAL_PAINTING': 53,
    'SURREAL_NOTABLY EMOTIONAL_SCULPTURE': 54,
    'SURREAL_NOTABLY EMOTIONAL_POSTER': 55,
    'SURREAL_NOTABLY EMOTIONAL_PHOTO': 56,
    'SURREAL_HIGHLY EMOTIONAL_PAINTING': 57,
    'SURREAL_HIGHLY EMOTIONAL_SCULPTURE': 58,
    'SURREAL_HIGHLY EMOTIONAL_POSTER': 59,
    'SURREAL_HIGHLY EMOTIONAL_PHOTO': 60,

    // MINIMAL combinations (20)
    'MINIMAL_NOT EMOTIONAL_PAINTING': 61,
    'MINIMAL_NOT EMOTIONAL_SCULPTURE': 62,
    'MINIMAL_NOT EMOTIONAL_POSTER': 63,
    'MINIMAL_NOT EMOTIONAL_PHOTO': 64,
    'MINIMAL_SLIGHTLY EMOTIONAL_PAINTING': 65,
    'MINIMAL_SLIGHTLY EMOTIONAL_SCULPTURE': 66,
    'MINIMAL_SLIGHTLY EMOTIONAL_POSTER': 67,
    'MINIMAL_SLIGHTLY EMOTIONAL_PHOTO': 68,
    'MINIMAL_EMOTIONAL_PAINTING': 69,
    'MINIMAL_EMOTIONAL_SCULPTURE': 70,
    'MINIMAL_EMOTIONAL_POSTER': 71,
    'MINIMAL_EMOTIONAL_PHOTO': 72,
    'MINIMAL_NOTABLY EMOTIONAL_PAINTING': 73,
    'MINIMAL_NOTABLY EMOTIONAL_SCULPTURE': 74,
    'MINIMAL_NOTABLY EMOTIONAL_POSTER': 75,
    'MINIMAL_NOTABLY EMOTIONAL_PHOTO': 76,
    'MINIMAL_HIGHLY EMOTIONAL_PAINTING': 77,
    'MINIMAL_HIGHLY EMOTIONAL_SCULPTURE': 78,
    'MINIMAL_HIGHLY EMOTIONAL_POSTER': 79,
    'MINIMAL_HIGHLY EMOTIONAL_PHOTO': 80
};

// Track all selections
let selections = {
    style: null,
    emotion: null,
    medium: null
};

// Function to check if all selections are made and show appropriate image
function checkAndShowImage() {
    if (selections.style && selections.emotion && selections.medium) {
        const combination = `${selections.style}_${selections.emotion}_${selections.medium}`;
        const imageNumber = imageMapping[combination];
        
        if (imageNumber) {
            grayBox.style.backgroundImage = `url("img/img_${imageNumber}.png")`;
            grayBox.style.backgroundSize = 'cover';
            grayBox.style.backgroundPosition = 'center';
        } else {
            grayBox.style.backgroundImage = 'none';
            grayBox.style.backgroundColor = '#808080';
        }
    } else {
        grayBox.style.backgroundImage = 'none';
        grayBox.style.backgroundColor = '#808080';
    }
}

emotionSlider.addEventListener('input', (e) => {
    const value = parseInt(e.target.value);
    emotionValue.textContent = emotionLabels[value];
    
    // Update the button text with the selected emotion
    const emotionButton = document.querySelector('.hover-button:nth-child(2)');
    const buttonText = emotionButton.querySelector('span');
    buttonText.textContent = `(02)${emotionLabels[value]}`;
    
    // Update selections
    selections.emotion = emotionLabels[value];
    checkAndShowImage();
});

// Hover and click behavior for dropdowns and emotion slider
const hoverButtons = document.querySelectorAll('.hover-button');
let activeButton = null;

hoverButtons.forEach(button => {
    const dropdown = button.querySelector('.dropdown');
    const emotionSlider = button.querySelector('.emotion-slider');
    let timeout;

    if (isMobile) {
        // Click handling for mobile
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            
            // Close any other open dropdowns/sliders
            if (activeButton && activeButton !== button) {
                activeButton.classList.remove('active');
            }
            
            // Toggle current dropdown/slider
            button.classList.toggle('active');
            activeButton = button.classList.contains('active') ? button : null;
        });
    } else {
        // Mouse enter on button (desktop only)
        button.addEventListener('mouseenter', () => {
            if (dropdown) dropdown.style.display = 'block';
            if (emotionSlider) emotionSlider.style.display = 'block';
            button.querySelector('span').style.color = '#808080';
        });

        // Mouse leave from button (desktop only)
        button.addEventListener('mouseleave', () => {
            timeout = setTimeout(() => {
                if (dropdown) dropdown.style.display = 'none';
                if (emotionSlider) emotionSlider.style.display = 'none';
                button.querySelector('span').style.color = '#000';
            }, 100);
        });
    }

    // Handle dropdown/slider interactions
    if (dropdown) {
        if (!isMobile) {
            dropdown.addEventListener('mouseenter', () => {
                clearTimeout(timeout);
                dropdown.style.display = 'block';
                button.querySelector('span').style.color = '#808080';
            });

            dropdown.addEventListener('mouseleave', () => {
                dropdown.style.display = 'none';
                button.querySelector('span').style.color = '#000';
            });
        }

        // Handle option click events
        const options = dropdown.querySelectorAll('.option');
        options.forEach(option => {
            if (!isMobile) {
                option.addEventListener('mouseenter', () => {
                    option.style.color = '#808080';
                });

                option.addEventListener('mouseleave', () => {
                    option.style.color = '#000';
                });
            }

            option.addEventListener('click', (e) => {
                e.stopPropagation();
                // Store the selected value
                const selectedValue = option.textContent;
                const buttonText = button.querySelector('span');
                const number = buttonText.textContent.match(/\(\d+\)/)[0];
                buttonText.textContent = `${number}${selectedValue}`;
                
                // Update selections based on which dropdown was clicked
                if (number === '(01)') {
                    selections.style = selectedValue;
                } else if (number === '(03)') {
                    selections.medium = selectedValue;
                }
                
                // Hide the dropdown and reset styles
                if (isMobile) {
                    button.classList.remove('active');
                    activeButton = null;
                } else {
                    dropdown.style.display = 'none';
                    button.querySelector('span').style.color = '#000';
                }

                // Check if we should show an image
                checkAndShowImage();
            });
        });
    }

    if (emotionSlider) {
        if (!isMobile) {
            emotionSlider.addEventListener('mouseenter', () => {
                clearTimeout(timeout);
                emotionSlider.style.display = 'block';
                button.querySelector('span').style.color = '#808080';
            });

            emotionSlider.addEventListener('mouseleave', () => {
                emotionSlider.style.display = 'none';
                button.querySelector('span').style.color = '#000';
            });
        }
    }
});

// Close dropdowns when clicking outside
document.addEventListener('click', () => {
    if (isMobile && activeButton) {
        activeButton.classList.remove('active');
        activeButton = null;
    }
}); 