// ##############################
// // // javascript library for creating charts
// #############################
var Chartist = require("chartist");

// ##############################
// // // variables used to create animation on charts
// #############################
const delays = 80,
durations = 500;

const monthlyVisits = function (data) {
  const months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun",
   "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
  let fetchedLabels = [], fetchedSeries = [];
  Object.keys(data.EstimatedMonthlyVisits).forEach(function(key, index) {
    let currentMonth = key.split("-");
    fetchedLabels.push(months[parseInt(currentMonth[currentMonth.length - 2]) - 1]);
  });
  Object.values(data.EstimatedMonthlyVisits).forEach(function(value) {
    fetchedSeries.push(value);
  });
  console.log(fetchedSeries);
  const min = Math.min( ...fetchedSeries ),
    max = Math.max( ...fetchedSeries );
  return {
    data: {
      labels: fetchedLabels,
      series: [fetchedSeries]
    },
    options: {
      lineSmooth: Chartist.Interpolation.cardinal({
        tension: 0
      }),
      low: min,
      high: max + (max - min) * 0.1,
      chartPadding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: String(max).length * 5
      }
    },
    // for animation
    animation: {
      draw: function(data) {
        if (data.type === "line" || data.type === "area") {
          data.element.animate({
            d: {
              begin: 600,
              dur: 700,
              from: data.path
                .clone()
                .scale(1, 0)
                .translate(0, data.chartRect.height())
                .stringify(),
              to: data.path.clone().stringify(),
              easing: Chartist.Svg.Easing.easeOutQuint
            }
          });
        } else if (data.type === "point") {
          data.element.animate({
            opacity: {
              begin: (data.index + 1) * delays,
              dur: durations,
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

export default monthlyVisits;
