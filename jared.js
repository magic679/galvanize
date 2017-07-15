(function (window) {
  managers = {
    // Ties this object to the workspace by passing in the D3 svg canvas
    mapWorkspace: function(target, width, height){
      this.container = target;
      this.doorAlignment(width);
    },
    // Puts the door together
    doorBuilder: function () {
        
      /**
      TODO - Call the arraySelector to get 3 values for doors. 
      Tie doors to 3 dollar values.
      Print the dollar values in front of the doors. (Use labels?)
      Collision detection
      */
      for(var i = 0; i < 3; i++){
        var door = this.container.append("rect").attr("x", this.doorCoordinates[i]).attr("y", 0).attr("width", 200).attr("height", 50); 
        
        this.doors.push(door);
      }
    },
    // Figures out the door alignment
    doorAlignment: function(width){
      var spacer = Math.ceil(width/3);
      
      this.doorCoordinates = [0, spacer, spacer+spacer];
    },
    // Randomly selects a value from an array
    arraySelector: function (arr) {
      min = Math.ceil(0);
      max = Math.floor(99);
      i = Math.floor(Math.random() * (max - min)) + min;
      return arr[i];
    },
    // Resets the doors, removing them from the DOM as well as this object before rebuilding them
    rebootDoors: function(){
      for(var i = 0; i < this.doors.length; i++){
        if(this.doors[i]){
          this.doors[i].remove(); 
        }        
      }
      this.doorBuilder();
      console.log("rebuilt");
    },
    container: null,
    doors: [],
    doorsCoordinates: [],
    spaceWidth: null,
    spaceHeight: null
  };


  return window.managers;
})(window);