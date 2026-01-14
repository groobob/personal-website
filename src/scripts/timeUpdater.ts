// scripts/timeUpdater.ts
export function StartTimeUpdate() {
    function UpdateTime() {
        const now = new Date();
        const timeString = now.toLocaleString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
            timeZone: 'America/New_York'
        });

        const currentTimeElement = document.getElementById('current-time');
        if (currentTimeElement) {
            currentTimeElement.innerText = `${timeString} (UTC-5)`;
        }
    }

    // Update the time every second
    setInterval(UpdateTime, 1000);
    UpdateTime(); // Initial call to set the time immediately
}
