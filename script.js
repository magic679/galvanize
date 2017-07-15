window.addEventListener("load", function(){
  console.log("I'm Up")

var width = 950, height = 1000;
var svg = d3.select("body").append("svg")
  .attr("width", width)
  .attr("height", height)
  .append("g")
var circle = svg.append("circle")
  .datum(point)
  .attr("r", 40)

var point = [width/2, height/2]
var momentum = [0, 0]
function move(x, y) {
    return function(event) {
        event.preventDefault();
        momentum = [momentum[0] + x, momentum[1] + y];
    };
}


d3.select('body').call(d3.keybinding()
    .on('←', move(-2, 0))
    .on('↑', move(0, -2))
    .on('→', move(2, 0))
    .on('↓', move(0, 2)));


d3.timer(function() {
    point[0] = Math.min(width,  Math.max(0, momentum[0] + point[0]));
    point[1] = Math.min(height, Math.max(0, momentum[1] + point[1]));
    circle
        .datum(point)
        .attr('transform', function(d) { return 'translate(' + d + ')'; });
    momentum[0] *= 0.9;
    momentum[1] *= 0.9;
});

})
