export function StartStatUpdate() {
    async function GetStats() {
        const TETRIO_API = 'https://personal-proxy-djou.onrender.com/users/';
        
        try {
            const response = await fetch(TETRIO_API);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();

            const rating = document.getElementById('tetris-rating');
            const stats = document.getElementById('tetris-stats');
            if (!(rating && stats)) {
                return;
            }
            console.log(data);
            if (data) {
                rating.innerText = 
                    `Current Tetris Rating: ${data.data.tr.toFixed(2)} | Top ${data.data.standing} Global`;
                stats.innerText = 
                    `Stats: ${data.data.apm} APM | ${data.data.pps} PPS | ${data.data.vs} VS`;
            } else {
                rating.innerText = "Failed to load Tetris data.";
                stats.innerText = "";
            }
            
        } catch (error) {
            const rating = document.getElementById('tetris-rating');
            const stats = document.getElementById('tetris-stats');
            if (rating && stats) {
                rating.innerText = "Failed to load Tetris data.";
                stats.innerText = "";
            }
        }
    }

    // Update the stats every minute
    setInterval(GetStats, 60000);
    GetStats(); // Initial call to set the stats immediately
}
