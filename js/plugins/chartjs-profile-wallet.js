const profileWallet = document.getElementById("profileWallet")
if (profileWallet !== null) {
    const profileWalletData = [
        {
            first: [0, 65, 52, 115, 98, 165, 125],
            second: [40, 105, 92, 155, 138, 205, 165]
        },
        {
            first: [0, 65, 77, 33, 49, 100, 100],
            second: [20, 85, 97, 53, 69, 120, 120]
        },
        {
            first: [0, 40, 77, 55, 33, 116, 50],
            second: [30, 70, 107, 85, 73, 146, 80,]
        },
        {
            first: [0, 44, 22, 77, 33, 151, 99],
            second: [60, 32, 120, 55, 19, 134, 88]
        }
    ]
    // profileWallet.height = 100

    var config = {
        type: "line",
        data: {
            labels: [
                "4 Jan",
                "5 Jan",
                "6 Jan",
                "7 Jan",
                "8 Jan",
                "9 Jan",
                "10 Jan"
            ],
            datasets: [
                {
                    label: "Active",
                    backgroundColor: "rgba(93, 120, 255, 0.9)",
                    borderColor: "transparent",
                    data: profileWalletData[0].first,
                    lineTension: 0,
                    pointRadius: 0,
                    borderWidth: 2,
                },
                {
                    label: "Inactive",
                    backgroundColor: 'rgba(240, 243, 255, 1)',
                    borderColor: "transparent",
                    data: profileWalletData[0].second,
                    lineTension: 0,
                    // borderDash: [10, 5],
                    borderWidth: 1,
                    pointRadius: 0,
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false,
                        drawBorder: true,
                        // fontFamily: "Rubik, sans-serif",
                    },
                    ticks: {
                        fontColor: "#8a909d",
                        fontFamily: "Rubik, sans-serif",
                    },
                }
                ],
                yAxes: [
                    {
                        gridLines: {
                            fontColor: "#8a909d",
                            // fontFamily: "Rubik, sans-serif",
                            display: false,
                            color: "rgba(0,0,0,0.071)",
                            zeroLineColor: "rgba(0,0,0,0.071)"
                        },
                        ticks: {
                            stepSize: 50,
                            fontColor: "#8a909d",
                            fontFamily: "Rubik, sans-serif"
                        }
                    }
                ]
            },
            tooltips: {
                mode: "index",
                intersect: false,
                titleFontColor: "#888",
                bodyFontColor: "#555",
                titleFontSize: 12,
                bodyFontSize: 15,
                backgroundColor: "rgba(256,256,256,0.95)",
                displayColors: true,
                xPadding: 10,
                yPadding: 7,
                borderColor: "rgba(220, 220, 220, 0.9)",
                borderWidth: 2,
                caretSize: 6,
                caretPadding: 5
            }
        }
    }

    const ctx = document.getElementById("profileWallet").getContext("2d")
    const myLine = new Chart(ctx, config)

    const items = document.querySelectorAll("#area-chart-action span")
    items.forEach(function (item, index) {
        item.addEventListener("click", function () {
            config.data.datasets[0].data = profileWalletData[index].first
            config.data.datasets[1].data = profileWalletData[index].second
            myLine.update()
        })
    })
}





// profileWallet