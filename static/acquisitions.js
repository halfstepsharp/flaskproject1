// import Chart from 'chart.js/auto';

(async function () {
    var data = [10,20,18,24,22,30,31
        // { year: 2010, count: 10 },
        // { year: 2011, count: 20 },
        // { year: 2012, count: 15 },
        // { year: 2013, count: 25 },
        // { year: 2014, count: 22 },
        // { year: 2015, count: 30 },
        // { year: 2016, count: 28 },
    ];

    new Chart(
        document.getElementById('DistanceGraphCanvas'), {
        type: 'line',
        data: {
            labels: data,
            // labels: data.map(row => row.year),
            datasets: [{
                label: 'Random distance',
                data: data,
                // data: data.map(row => row.count),
                borderColor: "#3e95cd"
            }]
        }
    });
})();
