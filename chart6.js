var ctx = document.getElementById('piechart5').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['lychee tea','lemon tea','thai tea','green tea'],
        datasets: [{
            label: 'Pria',
            data: [250, 220, 190, 130],
            backgroundColor: [
                'rgb(255, 128, 0)'
            ],
            borderColor: [
                'rgb(85, 85, 85)'
        
            ],
        },
        {
            label: 'Wanita',
            data: [190, 280, 310, 220],
            backgroundColor: [
                'rgb(255, 0, 0)'
            ],
            borderColor: [
                'rgb(85, 85, 85)'
        
            ],
        },
        {
            label: 'Anak-anak',
            data: [90, 70, 82, 49],
            backgroundColor: [
                'rgb(0, 255, 0)'
            ],
            borderColor: [
                'rgb(85, 85, 85)'
        
            ],
        },
        {
            label: 'Lansia',
            data: [132, 142, 92, 113],
            backgroundColor: [
                'rgb(0, 128, 255)'
            ],
            borderColor: [
                'rgb(85, 85, 85)'
        
            ],
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});