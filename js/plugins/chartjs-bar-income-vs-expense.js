//Transaction Graph 
var ctx = document.getElementById("chartjsIncomeVsExpense")
ctx.height = 100
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
        datasets: [{
            label: 'a',
            data: [5, 6, 4.5, 5.5, 3, 6, 4.5, 6, 8, 3],
            backgroundColor: 'rgba(47, 44, 216,1)',
        },
        {
            label: 'b',
            data: [4, 5, 3.5, 4.5, 2, 5, 3.5, 5, 7, 2],
            backgroundColor: 'rgba(47, 44, 216,0.2)',
        }]
    },
    options: {
        responsive: !0,
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                gridLines: {
                    drawBorder: false,
                    display: false
                },
                ticks: {
                    display: true, // hide main x-axis line
                    beginAtZero: true
                },
                barPercentage: 1,
                categoryPercentage: 0.5
            }],
            yAxes: [{
                gridLines: {
                    drawBorder: false, // hide main y-axis line
                    display: false
                },
                ticks: {
                    display: true,
                    beginAtZero: true
                },
            }]
        },
        tooltips: {
            enabled: true
        }
    }
})