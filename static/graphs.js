(async function () {
    const ddata = [
        { xlabel: 0, distance_data: 10, signal_data: 3.5, q1data: 0, q2data: 1, temp: 25 },
        { xlabel: 1, distance_data: 20, signal_data: 3.0, q1data: 0, q2data: 1, temp: 24 },
        { xlabel: 2, distance_data: 18, signal_data: 2.8, q1data: 1, q2data: 1, temp: 30 },
        { xlabel: 3, distance_data: 24, signal_data: 4.0, q1data: 1, q2data: 0, temp: 28 },
        { xlabel: 4, distance_data: 22, signal_data: 2.9, q1data: 0, q2data: 1, temp: 29 },
        { xlabel: 5, distance_data: 30, signal_data: 3.5, q1data: 1, q2data: 1, temp: 31 },
        { xlabel: 6, distance_data: 31, signal_data: 3.3, q1data: 1, q2data: 0, temp: 27 },
    ];

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
})();