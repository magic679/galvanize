window.addEventListener("load", function(){
  console.log("I'm Up")

// Circle move with direction keys
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
var nodes = d3.range(200).map(function() {return {radius: Math.random() * 12+4};}),
    color = d3.scale.category10();

// Attaching to jared's code.
window.managers.mapWorkspace(svg, width, height);
window.managers.doorBuilder();
  
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
// end of circle move around with direction keys

// collision objects
var force = d3.layout.force()
    .gravity(0.05)
    .charge(function(d, i){return i ? 0 : -2000;})
    .nodes(nodes)
    .size([width,height]);

var root = nodes[0];
root.radius = 0;
root.fixed = true;

force.start();

var svg = d3.select("#body").append("svg:svg")
    .attr("width", width)
    .attr("height", height);

svg.selectAll("circle")
      .data(nodes.slice(1))
      .enter().append("svg:circle")
      .attr("r", function(d) {return d.radius -2;})
      .style("fill", function(d, i){ return color(1 %3); });

// collision detection

force.on("tick", function(e){
  var q = d3.geom.quadtree(nodes),
  i = 0;
  n = nodes.length;

while (++i < n) {

}

svg.selectAll("circle")
  .attr("cx", function(d){return d.x;})
  .attr("cy", function(d){return d.y;})
})

})
