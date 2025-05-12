export function StartStatUpdate()
{
    async function GetStats()
    {
        const TETRIO_API: string = 'https://ch.tetr.io/api/users/groober/summaries/league';
        const response = await fetch(TETRIO_API);
        const data = await response.json();

        const rating = document.getElementById('tetris-rating');
        const stats = document.getElementById('tetris-stats');
        if(!(rating && stats))
        {
            return;
        }
        console.log(data);
        if (data) {
            

            rating.innerText = 
                `Current Tetris Rating: ${data.tr.toFixed(2)} | Top ${data.standing} Global`;
            stats.innerText = 
                `Stats: ${data.apm} APM | ${data.pps} PPS | ${data.vs} VS`;
        } else {
            rating.innerText = "Failed to load Tetris data.";
            stats.innerText = "";
        }
    }

    // Update the time every second
    setInterval(GetStats, 60000);
    GetStats(); // Initial call to set the stats immediately
}