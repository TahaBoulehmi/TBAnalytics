// ##############################
// // // variables used to create animation on charts
// #############################
const delays2 = 80,
durations2 = 500;

const trafficSources = function (data) {
  return {
    data: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "Mai",
        "Jun",
      ],
      series: [[542, 443, 320, 780, 553, 453000]]
    },
    options: {
      axisX: {
        showGrid: false
      },
      low: 0,
      high: 1000,
      chartPadding: {
        top: 0,
        right: 5,
        bottom: 0,
        left: 0
      }
    },
    responsiveOptions: [
      [
        "screen and (max-width: 640px)",
        {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function(value) {
              return value[0];
            }
          }
        }
      ]
    ],
    animation: {
      draw: function(data) {
        if (data.type === "bar") {
          data.element.animate({
            opacity: {
              begin: (data.index + 1) * delays2,
              dur: durations2,
              from: 0,
              to: 1,
              easing: "ease"
            }
          });
        }
      }
    }
  };
}

export default trafficSources;
