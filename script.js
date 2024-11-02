function performSearch() {
    const query = document.getElementById('search').value.toLowerCase();
    const elements = document.body.querySelectorAll('h1, h2, p, .project-title'); // Add any other selectors you want to search in

    elements.forEach(el => {
        if (el.textContent.toLowerCase().includes(query)) {
            el.style.backgroundColor = '#d2b48c'; // Highlight the element
        } else {
            el.style.backgroundColor = ''; // Reset the background color
        }
    });
}



    function showDetails(id) {
        // Hide all large boxes
        document.querySelectorAll('.large-box').forEach(box => {
            box.style.display = 'none';
        });
        // Show the selected large box
        document.getElementById(id).style.display = 'flex';
    }

    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": ["circle", "triangle", "polygon"], // Adding more shape types
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 20,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

    let lastScrollTop = 0; // Initialize the last scroll position
    const header = document.querySelector('.header-content'); // Select the header
    const mainContent = document.querySelector('main'); // Select the main content area

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop; // Get current scroll position

        // Check if the user scrolled down or up
        if (scrollTop > lastScrollTop) {
            // Scrolling down
            header.style.top = '-110px'; // Hide the header
            mainContent.classList.add('blur'); // Add blur effect to main content
        } else {
            // Scrolling up
            header.style.top = '0'; // Show the header
            mainContent.classList.remove('blur'); // Remove blur effect from main content
        }
        lastScrollTop = scrollTop; // Update last scroll position
    });

    const skillCards = document.querySelectorAll('.skill-card');

let isDragging = false;
let initialX, initialY;
let currentX, currentY;
let offsetX, offsetY;
let targetCard;

skillCards.forEach(card => {
    card.addEventListener('mousedown', startDrag);
    card.addEventListener('mouseup', endDrag);
    card.addEventListener('mousemove', drag);
    card.addEventListener('mouseleave', endDrag);

    // Add touch events for mobile users
    card.addEventListener('touchstart', startDrag);
    card.addEventListener('touchend', endDrag);
    card.addEventListener('touchmove', drag);
});

function startDrag(e) {
    isDragging = true;
    targetCard = e.target.closest('.skill-card'); // Get the closest skill card

    // Get mouse/touch positions
    if (e.type === 'touchstart') {
        initialX = e.touches[0].clientX - targetCard.getBoundingClientRect().left;
        initialY = e.touches[0].clientY - targetCard.getBoundingClientRect().top;
    } else {
        initialX = e.clientX - targetCard.getBoundingClientRect().left;
        initialY = e.clientY - targetCard.getBoundingClientRect().top;
    }

    document.body.style.cursor = 'grabbing'; // Change cursor to grabbing
}

function endDrag() {
    isDragging = false;
    targetCard = null; // Reset the target card
    document.body.style.cursor = 'default'; // Reset cursor
}

function drag(e) {
    if (!isDragging) return;

    e.preventDefault(); // Prevent text selection

    // Get mouse/touch positions
    if (e.type === 'touchmove') {
        currentX = e.touches[0].clientX;
        currentY = e.touches[0].clientY;
    } else {
        currentX = e.clientX;
        currentY = e.clientY;
    }

    offsetX = currentX - initialX;
    offsetY = currentY - initialY;

    targetCard.style.transform = `translate(${offsetX}px, ${offsetY}px)`; // Move the card
}

// Reset positions on scroll
window.addEventListener('scroll', resetPositions);

function resetPositions() {
    skillCards.forEach(card => {
        card.style.transform = 'translate(0, 0)'; // Reset to original position
    });
}
// JavaScript to toggle description on click for mobile
document.querySelectorAll('.project-card img').forEach((img) => {
    img.addEventListener('click', () => {
        const description = img.parentElement.querySelector('.project-description');
        description.style.opacity = (description.style.opacity == 1) ? 0 : 1; // Toggle opacity
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const titleText = "Hi, I'm Lethabo Mohaladi";
    const subtitleText = "Web Developer & Graphic Designer";

    function typeEffect(element, text, delay) {
        let index = 0;
        const interval = setInterval(() => {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
            } else {
                clearInterval(interval);
            }
        }, delay);
    }

    const titleElement = document.getElementById("typing-title");
    const subtitleElement = document.getElementById("typing-subtitle");

    typeEffect(titleElement, titleText, 50); // Typing effect for the title
    setTimeout(() => {
        typeEffect(subtitleElement, subtitleText, 100); // Typing effect for the subtitle
    }, titleText.length * 50 + 50); // Delay subtitle until title finishes
});
function toggleSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    // Toggle visibility of the search input and button
    if (searchInput.style.display === "none" || searchInput.style.display === "") {
        searchInput.style.display = "block"; // Show input
        searchButton.style.display = "block"; // Show button
        searchInput.focus(); // Focus on input for user convenience
    } else {
        searchInput.style.display = "none"; // Hide input
        searchButton.style.display = "none"; // Hide button
    }
}
