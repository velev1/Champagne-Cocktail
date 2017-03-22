var getCharts = (function () {
    return function (drawObj) {
        var ctx = document.getElementById("myChart"); // line 3 and 4 can work alone in another file
        var myChart = new Chart(ctx, drawObj);
    };
})();

var getChartsObj = (function () {
    return {
        type: 'bar',
        data: {
            labels: [],
            datasets: [{
                label: '% for a successful shot',
                data: [],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(242, 50, 245, 0.2)',
                    'rgba(50, 235, 245, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(242, 50, 245, 1)',
                    'rgba(50, 235, 245, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            legend: {
                display: false //added by me
            },
            scales: {
                yAxes: [{
                    ticks: {
                        max: 100, //added by men
                        min: 0, //added by me
                        beginAtZero: true
                    }
                }]
            }
        }
    };
})();




// var ctx = document.getElementById("myChart");
// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 15, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255,99,132,1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });


// var getCharts = (function () {
//     return function (drawObj) {
//         var ctx = document.getElementById("myChart");
//         var myChart = new Chart(ctx, drawObj);
//     };
// })();

// var getChartsObj = (function () {
//     return {
//         type: 'bar',
//         data: {
//             labels: [],
//             datasets: [{
//                 label: '# of Votes',
//                 data: [],
//                 backgroundColor: [
//                     'rgba(255, 99, 132, 0.2)',
//                     'rgba(54, 162, 235, 0.2)',
//                     'rgba(255, 206, 86, 0.2)',
//                     'rgba(75, 192, 192, 0.2)',
//                     'rgba(153, 102, 255, 0.2)',
//                     'rgba(255, 159, 64, 0.2)',
//                     'rgba(242, 50, 245, 0.2)',
//                     'rgba(50, 235, 245, 0.2)'
//                 ],
//                 borderColor: [
//                     'rgba(255,99,132,1)',
//                     'rgba(54, 162, 235, 1)',
//                     'rgba(255, 206, 86, 1)',
//                     'rgba(75, 192, 192, 1)',
//                     'rgba(153, 102, 255, 1)',
//                     'rgba(255, 159, 64, 1)',
//                     'rgba(242, 50, 245, 1)',
//                     'rgba(50, 235, 245, 1)'
//                 ],
//                 borderWidth: 1
//             }]
//         },
//         options: {
//             scales: {
//                 yAxes: [{
//                     ticks: {
//                         max: 100,
//                         min: 0,
//                         beginAtZero: true
//                     }
//                 }]
//             },
//             animation: false // added by me
//         }
//     };
// })();
