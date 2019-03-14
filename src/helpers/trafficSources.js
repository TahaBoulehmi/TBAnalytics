// ##############################
// // // variables used to create animation on charts
// #############################
const delays2 = 80,
durations2 = 500;

const trafficSources = function (data) {
  let fetchedLabels = [], fetchedSeries = [];
  Object.keys(data.TrafficSources).forEach(function(key) {
    fetchedLabels.push(key);
  });
  Object.values(data.TrafficSources).forEach(function(value) {
    fetchedSeries.push(value * 100);
  });

  return {
    data: {
      labels: fetchedLabels,
      series: [fetchedSeries]
    },
    options: {
      axisX: {
        showGrid: false
      },
      low: 0,
      high: 100,
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
