// Helper function to create a delay using setTimeout
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Main function that loops 10 times with 0.5s delays
async function triggerLoopingEvent() {
    console.log('🚀 Event triggered! Starting loop...');

    for (let i = 1; i <= 10; i++) {
        console.log(`⏳ Loop iteration ${i} of 10 - Doing something...`);

        // Wait 0.5 seconds before the next iteration
        if (i < 10) {
            await delay(500);
        }
    }

    console.log('✅ Loop completed!');
}

// Set up the button click event listener
document.addEventListener('DOMContentLoaded', () => {
    const triggerBtn = document.getElementById('triggerBtn');

    triggerBtn.addEventListener('click', () => {
        console.log('-----------------------------------');
        triggerLoopingEvent();
    });

    console.log('👋 Page loaded! Click the "Trigger Event" button to start the debugging demo.');

    // Initialize broken navigation
    initNavigation();
});

// Navigation functionality
function initNavigation() {
    const dropdowns = document.querySelectorAll('.nav-item.dropdown');

    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('.nav-link');

        link.addEventListener('click', (e) => {
            e.preventDefault();

            const isActive = dropdown.classList.contains('active');

            // Close all dropdowns first
            closeAllDropdowns();

            // Toggle this dropdown (open if it was closed)
            if (!isActive) {
                dropdown.classList.add('active');
            }
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', (event) => {
        const isDropdownClick = event.target.closest('.nav-item.dropdown');
        if (!isDropdownClick) {
            closeAllDropdowns();
        }
    });

    // Handle dropdown item clicks
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            console.log(`Selected: ${item.textContent}`);
            closeAllDropdowns();
        });
    });
}

function closeAllDropdowns() {
    const dropdowns = document.querySelectorAll('.nav-item.dropdown');
    dropdowns.forEach(dropdown => {
        dropdown.classList.remove('active');
    });
}
