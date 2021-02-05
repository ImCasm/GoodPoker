// HTML Canvas Element
const chartCanvas = document.getElementById("chartCanvas");

// Style
Chart.defaults.global.defaultFontFamily = "Montserrat";
Chart.defaults.global.defaultFontSize = 18;

// Data
let data = {
  labels: ["01/07", "05/07", "10/07", "15/07", "20/07", "25/07"],
  datasets: [
    {
      label: "",
      data: [0, 28, 45, 62, 43, 72],
      lineTension: 0,
      fill: false,
      borderColor: "#56915D",
      backgroundColor: "transparent",
      pointBorderColor: "#56915D",
      pointBackgroundColor: "#56915D",
      pointRadius: 4,
      pointHoverRadius: 10,
      pointHitRadius: 30,
      pointBorderWidth: 2,
      pointStyle: "circle",
    },
  ],
};

// Chart Integration
let stackedLine = new Chart(chartCanvas, {
  type: "line",
  data: data,
  options: {
    scales: {
      yAxes: [
        {
          stacked: true,
        },
      ],
    },
  },
});
