var init = function(){

    // setup canvas
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    // generate 10 random points
    var length = 10;
    var points = [];
    for(var i=0; i<length; i++){
        var x = random();
        var y = random();   
        circle(context,x,y,'blue');
        points.push({x:x,y:y});
    }

    // calculate centroid 
    var centroid = calculateCentroid(points);
    circle(context, centroid.x, centroid.y, 'red');
    var coordinates = 'x:' + centroid.x + ', y:' + centroid.y;
    document.getElementById('centroid').innerHTML = coordinates;
};


var calculateCentroid = function(points){
    //----------------------------------
    //  YOUR CODE
    //---------------------------------- 
    length = points.length ;  
    x_sum = 0;
    y_sum = 0;
    points.forEach(point => {
        x_sum += point.x;
        y_sum += point.y; 
    });
     return {x:Math.floor(x_sum/length),y:Math.floor(y_sum/length)}   
};


function circle(context,x,y,fillStyle) {
    context.fillStyle = fillStyle;
    context.beginPath();
    context.arc(x, y, 10, 0, Math.PI*2, true);
    context.closePath();
    context.fill();
}

function random(){
    var value = Math.random()*650;
    return Math.floor(value);
}

var exercise = {};
exercise.calculateCentroid = calculateCentroid;