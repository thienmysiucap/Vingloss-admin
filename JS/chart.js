
// Số lượng bán ra Chart
const ctx = document.getElementById('myChart1');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Collection Red Wines', 'Vinegloss Red Wine', 'Vinegloss Dry Red Wine', 'Garden Of Tomorrow', 'Collection Blue Wines', 'Vinegloss Blue Sky'],
    datasets: [{
      label: 'Số chai',
      data: [12, 40, 3, 5, 2, 10],
      borderWidth: 1,
      backgroundColor: [
        'rgba(255, 99, 132,1)',
        'rgba(255, 159, 64,1)',
        'rgba(255, 205, 86,1)',
        'rgba(75, 192, 192,1)',
        'rgba(54, 162, 235,1)',
        'rgba(153, 102, 255,1)',
        'rgba(201, 203, 207,1)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
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

//Doanh thu Chart

const ctx2 = document.getElementById('myChart2');

new Chart(ctx2, {
  type: 'line',
  data: {
    labels: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5","Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10","Tháng 11", "Tháng 12", ],
    datasets: [{
      label: 'USD',
      data: [12000, 40000, 30000, 5000, 20000, 10000,12000, 40000, 30000, 5000, 20000, 10000],
      borderWidth: 1,
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 205, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(201, 203, 207, 1)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
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

//Xuất Xứ Chart

const ctx3 = document.getElementById('myChart3');
new Chart(ctx3, {
  type: 'pie',
  data: {
    labels: ['Pháp', 'Mỹ', 'Úc', 'Chile',],
    datasets: [{
      label: 'Số chai',
      data: [12, 40, 3, 5],
      borderWidth: 1,
     
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    },
  }
});

//Khách hàng Chart

const ctx4 = document.getElementById('myChart4');

new Chart(ctx4, {
  type: 'doughnut',
  data: {
    labels: ['Trong nước', 'Ngoài nước'],
    datasets: [{
      label: 'Người',
      data: [12, 40,],
      borderWidth: 1,
     
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    },
  }
});