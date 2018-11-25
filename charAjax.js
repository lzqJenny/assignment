// drawChart 
var myChart;

function drawChart(value1, value2) {

    var ctx = document.getElementById("teamBallot").getContext('2d');

    myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ["Avengers", "Justice League"],
            datasets: [{
                data: [value1, value2],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            title: {
                display: true,
                text: "Avengers vs. Justice League",
                fontSize: 24
            },
            legend: {
                display: false
            }
        }
    });

}

drawChart(0, 0);