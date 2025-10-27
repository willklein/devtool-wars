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
});
