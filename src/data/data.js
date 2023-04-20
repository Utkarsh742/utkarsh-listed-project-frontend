export const data = {
   labels: ["","Week 1", "Week 2", "Week 3", "Week 4",""],
   datasets: [
   {
   label: 'Users',
   data: [100, 410, 140, 440, 190,250],
   backgroundColor: 'transparent',
   borderColor: '#8bc86f',
   pointBorderColor: 'transparent',
   pointBorderwidth: 4,
   tension: 0.5

   },
    {
      label: 'Guest',
      data: [200, 390, 200, 300, 220,440],
      backgroundColor: 'transparent',
      borderColor: '#E9A0A0',
      pointBorderColor: 'transparent',
      pointBorderwidth: 4,
      tension: 0.5
    }]
   };
export const options = {
   responsive: true,
   interaction: {
    mode: 'nearest'
},
tooltips: {
  enabled: true,
},
plugins: {
  zoom: {
    zoom: {
      wheel: {
        enabled: true,
      },
      pinch: {
        enabled: true,
      },
      mode: 'xy',
    },
  },
},
   maintainAspectRatio: false,
      scales: {
      x: {
      grid: {
       display: false
      }
      }
      },
      y: {
      min: 0  ,
      max: 500,
      ticks: {
      font: {
         family: "Montserrat"
      },
      stepSize: 100,
      },
      grid: {
      borderDash: [10]
      }
      }
      }
      export const piedata = {
        labels: ['One', 'Two', 'Three'],
        datasets: [
        {
        data: [3, 6, 10],
        backgroundColor: ['#EE8484', '#F6DC7D', '#98D89E'],
        borderWidth: 0
        }
        ]
        };