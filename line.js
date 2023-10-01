const repairData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
        label: 'Equipment Repairs',
        data: [5, 8, 10, 7, 12, 9], // Number of repairs per month
        fill: false, // Do not fill area under the line
        borderColor: 'rgba(75, 192, 192, 1)', // Line color
        borderWidth: 2 // Line width
    }]
};

// Create and configure the line graph
const ctxline = document.getElementById('repairLineGraph').getContext('2d');
const repairLineGraph = new Chart(ctxline, {
    type: 'line', // Line graph
    data: repairData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                type: 'category', // X-axis is categorical (months)
                title: {
                    display: true,
                    text: 'Month'
                }
            },
            y: {
                type: 'linear', // Y-axis is linear (number of repairs)
                title: {
                    display: true,
                    text: 'Number of Repairs'
                }
            }
        }
    }
});