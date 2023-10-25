(async function UpdateGraphs() {
    // var jsonUrl = '/static/backupexampledata.json';
    var jsonUrl = '/static/data.json';
    let ddata = []

    try {
        let response = await fetch(jsonUrl);
        ddata = await response.json();
        console.log(ddata);

        new Chart(
            document.getElementById('DistanceGraphCanvas'), {
            type: 'line',
            data: {
                labels: ddata.map(row => row.xlabel),
                datasets: [{
                    label: 'Distance',
                    data: ddata.map(row => row.distance_data),
                    borderColor: '#4dc9f6',
                    fill: false,
                    cubicInterpolationMode: 'monotone',
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
            }
        });

        new Chart(
            document.getElementById('SignalGraphCanvas'), {
            type: 'line',
            data: {
                labels: ddata.map(row => row.xlabel),
                datasets: [{
                    label: 'Signal',
                    data: ddata.map(row => row.signal_data),
                    borderColor: '#acc236',
                    fill: false,
                    cubicInterpolationMode: 'monotone',
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
            }
        });

        new Chart(
            document.getElementById('Q1Canvas'), {
            type: 'line',
            data: {
                labels: ddata.map(row => row.xlabel),
                datasets: [{
                    label: 'Q1',
                    data: ddata.map(row => row.q1data),
                    borderColor: '#f67019',
                    fill: false,
                    stepped: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
            }
        });

        new Chart(
            document.getElementById('Q2Canvas'), {
            type: 'line',
            data: {
                labels: ddata.map(row => row.xlabel),
                datasets: [{
                    label: 'Q2',
                    data: ddata.map(row => row.q2data),
                    borderColor: '#f53794',
                    fill: false,
                    stepped: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
            }
        });

        new Chart(
            document.getElementById('TempCanvas'), {
            type: 'line',
            data: {
                labels: ddata.map(row => row.xlabel),
                datasets: [{
                    label: 'Temp.',
                    data: ddata.map(row => row.temp),
                    borderColor: '#537bc4',
                    fill: false,
                    cubicInterpolationMode: 'monotone',
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
            }
        });
        setTimeout(UpdateGraphs, 2000);
    } catch (error) {
        console.error('Error fetching JSON data:', error);
    }
}());

function repeat(){
    UpdateGraphs().then(result => alert(result));
}

window.onload = function () {
    UpdateGraphs().catch(error => console.error(`Error at initial UpdateGraphs call: ${error}`));
}

// TODO: find way to update graphs with new data from json