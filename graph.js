const incomeData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
        label: 'Monthly Income (PHP)',
        data: [2000, 1800, 2500, 2600, 3200, 3100],
        backgroundColor: 'rgba(75, 192, 192, 0.6)', 
        borderColor: 'rgba(75, 192, 192, 1)', 
        borderWidth: 1 
    }]
};
const ctxgraph = document.getElementById('incomechart').getContext('2d');
const incomeChart = new Chart(ctxgraph, {
    type: 'bar', 
    data: incomeData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                beginAtZero: true
            },
            y: {
                beginAtZero: true
            }
        }
    }
});

