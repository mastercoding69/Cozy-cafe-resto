var ctx = document.getElementById('piechart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Nasi Goreng Special','Ayam Bakar','Ramen','Chicken Steak'],
        datasets: [{
            label: 'Pria',
            data: [270, 240, 210, 150],
            backgroundColor: [
                'rgb(255, 128, 0)'
            ],
            borderColor: [
                'rgb(85, 85, 85)'
        
            ],
        },
        {
            label: 'Wanita',
            data: [180, 270, 300, 210],
            backgroundColor: [
                'rgb(255, 0, 0)'
            ],
            borderColor: [
                'rgb(85, 85, 85)'
        
            ],
        },
        {
            label: 'Anak-anak',
            data: [110, 90, 102, 69],
            backgroundColor: [
                'rgb(0, 255, 0)'
            ],
            borderColor: [
                'rgb(85, 85, 85)'
        
            ],
        },
        {
            label: 'Lansia',
            data: [97, 107, 57, 78],
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