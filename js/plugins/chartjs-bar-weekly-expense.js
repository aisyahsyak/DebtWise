//Transaction Graph 
var ctx = document.getElementById("chartjsWeeklyExpenses")
ctx.height = 100
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
            label: 'a',
            data: [2, 12, 17, 14, 9, 5, 11, 18, 10, 13, 16, 20, 6, 7, 3, 15, 8, 19],
            backgroundColor: 'rgba(217, 70, 239, 1)'
        },
        {
            label: 'b',
            data: [7, 12, 19, 13, 17, 8, 5, 11, 6, 10, 18, 15, 14, 16, 3, 2, 20, 4],
            backgroundColor: 'rgba(168, 85, 247, 1)'
        },
        {
            label: 'c',
            data: [11, 18, 5, 17, 19, 7, 9, 14, 20, 15, 12, 6, 16, 13, 4, 8, 3, 10],
            backgroundColor: 'rgba(139, 92, 246, 1)'
        },
        {
            label: 'c',
            data: [8, 4, 20, 10, 12, 7, 18, 3, 17, 2, 19, 13, 15, 5, 14, 6, 11, 9],
            backgroundColor: 'rgba(99, 102, 241, 1)'
        },
        {
            label: 'c',
            data: [20, 5, 14, 10, 16, 12, 2, 17, 8, 7, 4, 11, 15, 9, 18, 19, 13, 6],
            backgroundColor: 'rgba(59, 130, 246, 1)'
        },
            // {
            //     label: 'c',
            //     data: [11, 14, 12, 6, 8, 7, 2, 15, 10, 5, 20, 9, 19, 17, 13, 16, 4, 3],
            //     backgroundColor: 'rgba(14, 165, 233, 1)'
            // }
        ]
    },
    options: {
        responsive: !0,
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                stacked: true,
                gridLines: {
                    drawBorder: false,
                    display: false
                },
                ticks: {
                    display: true, // hide main x-axis line
                    beginAtZero: true
                },
                barPercentage: 2,
                categoryPercentage: 0.2
            }],
            yAxes: [{
                stacked: true,
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