const saudiColor = '#062E4A';
const nonSaudiColor = '#005491';
const maleColor = '#005491';
const femaleColor = '#C6822A';

const saudiData = [
    { year: '2023', saudi: 66.5, nonSaudi: 33.5 },
    { year: '2022', saudi: 63, nonSaudi: 37 },
    { year: '2021', saudi: 55, nonSaudi: 45 },
    { year: '2020', saudi: 48, nonSaudi: 52 }
];

const genderData = [
    { year: '2023', male: 71.5, female: 28.5 },
    { year: '2022', male: 71, female: 29 },
    { year: '2021', male: 78, female: 22 },
    { year: '2020', male: 81, female: 19 }
];

function createPieChart(ctx, data, labels, colors) {
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: colors
            }]
        },
        options: {
            responsive: true,
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function (tooltipItem) {
                            let label = tooltipItem.label || '';
                            let value = tooltipItem.raw || 0;
                            return `${label}: ${value}%`;
                        }
                    }
                },
                legend: {
                    display: false 
                },
                datalabels: {
                    color: '#fff',
                    font: {
                        weight: 'bold',
                        size: 25
                    },
                    formatter: (value, ctx) => {
                        return `${value}%`; 
                    },
                    anchor: 'start',
                    align: 'end',
                    offset: 1 
                }
            }
        },
        plugins: [ChartDataLabels] 
    });
}

saudiData.forEach((item, index) => {
    createPieChart(
        document.getElementById(`chart${item.year}`),
        [item.saudi, item.nonSaudi],
        ['سعوديون', 'غير سعوديون'],
        [saudiColor, nonSaudiColor]
    );
});

genderData.forEach((item, index) => {
    createPieChart(
        document.getElementById(`genderChart${item.year}`),
        [item.male, item.female],
        ['الذكور', 'الإناث'],
        [maleColor, femaleColor]
    );
});


// environment-charts
const ctx1 = document.getElementById('chart1').getContext('2d');
const ctx2 = document.getElementById('chart2').getContext('2d');

const chart1 = new Chart(ctx1, {
    type: 'pie',
    data: {
        labels: ['الجزء 1', 'الجزء 2', 'الجزء 3', 'الجزء 4'],
        datasets: [{
            data: [30, 25, 20, 25], 
            backgroundColor: ['#1C639C', '#B3BEC9', '#D7A868', '#B3BEC9'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

const chart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['الجزء 1', 'الجزء 2', 'الجزء 3', 'الجزء 4'],
        datasets: [{
            data: [30, 25, 20, 25],  
            backgroundColor: ['#1C639C', '#B3BEC9', '#D7A868', '#B3BEC9'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        }
    }
});
