var ctx = document.getElementById("zec");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["ZEC + C'S", "ZEC + CHA", "ZEC + PSOE", "ZEC + PP", "ZEC + CHA + PSOE", "ZEC + CHA + PP", "ZEC + CHA + C'S", "ZEC + C'S + PP", "ZEC + C'S + PSOE", "ZEC + PP + PSOE", "ZEC + PP + PSOE", "ZEC + PP + PSOE + CHA", "ZEC + PP + PSOE + C'S", "ZEC + PP + CHA + C'S", "ZEC + PSOE + CHA + C'S", ],
        datasets: [{
            label: '# of Votes',
            data: [100, 19, 3, 5, 2, 3, 100, 19, 3, 5, 2, 3, 13, 14],
            backgroundColor: [
                '#d7b7a7',
                '#c7d7a7',
                '#bda193',
                '#afbd93',
                '#afd7a7',
                '#a7d7b7',
                '#9abd93',
                '#93bda1',
                '#b7a7d7',
                '#a7c7d7',
                '#a192bd',
                '#93afbd',
                '#99a19f',
                '#597261'
            ],
            borderColor: [
                '#121',
                '#121',
                '#121',
                '#121',
                '#121',
                '#121',
                '#121',
                '#121',
                '#121',
                '#121',
                '#121',
                '#121',
                '#121',
                '#121'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
