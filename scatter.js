const memberAges = [
    { x: 65, y: 150 },
    { x: 30, y: 180 },
    { x: 65, y: 100 },
    { x: 40, y: 120 },
    { x: 45, y: 140 },
    { x: 47, y: 130 },
    { x: 45, y: 140 },
    { x: 75, y: 150 },
    { x: 50, y: 180 },
    { x: 35, y: 200 },
    { x: 40, y: 120 },
    { x: 45, y: 110 },
    { x: 28, y: 260 },
    { x: 52, y: 190 },
    { x: 27, y: 100 },
    { x: 42, y: 130 },
    { x: 50, y: 260 },
    { x: 27, y: 155 },
    { x: 71, y: 185 },
    { x: 69, y: 115 },
    { x: 71, y: 225 },
    { x: 55, y: 280 },
    { x: 79, y: 265 },
    { x: 43, y: 195 },
    { x: 38, y: 215 },
    { x: 43, y: 235 },
    { x: 60, y: 300 },

    // Add an outlier data point
    { x: 54, y: 200 } // Age: 70, Membership Duration: 50 months (outlier)
];

// Create and configure the scatter plot
const ctxscatter = document.getElementById('ageScatterPlot').getContext('2d');
const ageScatterPlot = new Chart(ctxscatter, {
    type: 'scatter', // Scatter plot
    data: {
        datasets: [{
            label: 'Member Ages',
            data: memberAges,
            backgroundColor: 'rgba(75, 192, 192, 0.6)', // Marker color
            borderColor: 'rgba(75, 192, 192, 1)', // Border color
            borderWidth: 1, // Border width
            pointRadius: 5, // Marker size
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                type: 'linear', // X-axis is linear (for numerical data)
                position: 'bottom', // X-axis at the bottom
                title: {
                    display: true,
                    text: 'Age'
                }
            },
            y: {
                type: 'linear', // Y-axis is linear (for numerical data)
                title: {
                    display: true,
                    text: 'Membership Duration (months)'
                }
            }
        }
    }
});
