let timerInterval;
let totalSeconds = 0;

document.getElementById('start-button').addEventListener('click', function () {
    // Get input values
    const hours = parseInt(document.getElementById('hours-input').value) || 0;
    const minutes = parseInt(document.getElementById('minutes-input').value) || 0;
    const seconds = parseInt(document.getElementById('seconds-input').value) || 0;

    // Calculate total seconds
    totalSeconds = hours * 3600 + minutes * 60 + seconds;

    if (totalSeconds > 0) {
        // Disable start button and enable stop and reset buttons
        document.getElementById('start-button').disabled = true;
        document.getElementById('stop-button').disabled = false;
        document.getElementById('reset-button').disabled = false;

        // Start the timer
        timerInterval = setInterval(updateTimer, 1000);
    }
});

document.getElementById('stop-button').addEventListener('click', function () {
    // Stop the timer
    clearInterval(timerInterval);

    // Disable stop button and enable start button
    document.getElementById('stop-button').disabled = true;
    document.getElementById('start-button').disabled = false;
});

document.getElementById('reset-button').addEventListener('click', function () {
    // Reset the timer
    clearInterval(timerInterval);
    totalSeconds = 0; // Reset total seconds to zero

    // Clear input fields
    document.getElementById('hours-input').value = '';
    document.getElementById('minutes-input').value = '';
    document.getElementById('seconds-input').value = '';

    // Update timer display
    document.getElementById('timer-display').textContent = '00:00:00';

    // Disable stop and reset buttons and enable start button
    document.getElementById('stop-button').disabled = true;
    document.getElementById('reset-button').disabled = true;
    document.getElementById('start-button').disabled = false;
});

function updateTimer() {
    if (totalSeconds > 0) {
        totalSeconds--; // Decrease total seconds by one

        // Calculate hours, minutes, and seconds
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        // Update the display
        document.getElementById('timer-display').textContent =
            `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    } else {
        clearInterval(timerInterval);
        document.getElementById('timer-display').textContent = '00:00:00';
        // Enable the start button for new timer setup
        document.getElementById('start-button').disabled = false;
        document.getElementById('stop-button').disabled = true;
        document.getElementById('reset-button').disabled = true;
    }
}
