// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);
chart.paddingRight = 25;

// Add data
chart.data = [{
  "x": 0,
  "y": 400,
  "color": chart.colors.getIndex(0)
}, {
  "x": 14,
  "y": 500,
  "color": chart.colors.getIndex(1)
}, {
  "x": 22,
  "y": 550,
  "color": chart.colors.getIndex(0)
}, {
  "x": 26,
  "y": 750,
  "color": chart.colors.getIndex(0)
}, {
  "x": 29,
  "y": 930,
  "color": chart.colors.getIndex(1)
}, {
  "x": 43,
  "y": 1020,
  "color": chart.colors.getIndex(0)
}, {
  "x": 50,
  "y": 1200,
  "color": chart.colors.getIndex(1)
}];


// Create axes
var xAxis = chart.xAxes.push(new am4charts.ValueAxis());
xAxis.renderer.grid.template.disabled = true;
xAxis.renderer.labels.template.disabled = true;
xAxis.numberFormatter = new am4core.NumberFormatter();
xAxis.numberFormatter.numberFormat = "#,###'km'";
xAxis.min = 0;
xAxis.max = 50;
xAxis.strictMinMax = true;

var yAxis = chart.yAxes.push(new am4charts.ValueAxis());
yAxis.numberFormatter = new am4core.NumberFormatter();
yAxis.numberFormatter.numberFormat = "#,###'m'";
yAxis.min = 400;
yAxis.max = 1400;
yAxis.strictMinMax = true;

// Create series
var series = chart.series.push(new am4charts.LineSeries());
series.dataFields.valueX = "x";
series.dataFields.valueY = "y";
series.name = name;
series.tooltipText = "{valueX}km: [bold]{valueY}m[/]";
series.strokeWidth = 0;
series.fillOpacity = 0.8;
series.propertyFields.fill = "color";

// Create grid/ranges for X axis
for(var i = 0; i < chart.data.length; i++) {
  var value = chart.data[i].x;
  var range = xAxis.axisRanges.create();
  range.value = value;
  range.label.text = value + "km";
}

// Cursor
chart.cursor = new am4charts.XYCursor();
chart.cursor.snapToSeries = series;