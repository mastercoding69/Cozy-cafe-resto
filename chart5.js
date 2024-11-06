var ctx = document.getElementById('piechart4').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Strawberry Smoothie','Red Berry Smoothie','Avocado Smoothie','Mango Smoothie'],
        datasets: [{
            label: 'Pria',
            data: [220, 190, 160, 100],
            backgroundColor: [
                'rgb(255, 128, 0)'
            ],
            borderColor: [
                'rgb(85, 85, 85)'
        
            ],
        },
        {
            label: 'Wanita',
            data: [200, 290, 320, 230],
            backgroundColor: [
                'rgb(255, 0, 0)'
            ],
            borderColor: [
                'rgb(85, 85, 85)'
        
            ],
        },
        {
            label: 'Anak-anak',
            data: [160, 140, 152, 119],
            backgroundColor: [
                'rgb(0, 255, 0)'
            ],
            borderColor: [
                'rgb(85, 85, 85)'
        
            ],
        },
        {
            label: 'Lansia',
            data: [104, 115, 65, 86],
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