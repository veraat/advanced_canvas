var x = 0;
var y = 0;
var x2 = 0;
var y2 = 0;
var x3 = 0;
var y3 = 0;

var draw_circle = false;
var draw_rectangle = false;
var draw_triangle = false;
var draw_haxagan = false;

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function preload() {
    img = loadImage('hexagon.png');
}
function start() {
    document.getElementById("status").innerHTML = "Listening ...";
    recognition.start();
}


recognition.onresult = function(event) {
    console.log(event)
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML ="Object identified is : " + content;
    
    if (content == "circle"){
        x = Math.floor(Math.random() * 850);
        y = Math.floor(Math.random() * 850);
        document.getElementById("status").innerHTML ="Object identified is : CIRCLE";
        draw_circle= true;
        
        // draw_rectangle = false;
        console.log("circle")
    }
    else if (content == "Triangle"){
        
        document.getElementById("status").innerHTML ="Object identified is : triangle";
        draw_triangle= true;
        // draw_circle = false;
        console.log("triangle")
    }
    
    else if (content == "rectangle"){
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML ="Object identified is : RECTANGLE";
        draw_rectangle= true;
        // draw_circle = false;
        console.log("rectangle")
    }
    else if (content == "hexagon"){
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML ="Object identified is : Hexagon";
        draw_haxagan= true;
        // draw_circle = false;
        console.log("haxagon")
    }
    
}

function setup() {
    canvas = createCanvas(900,600);
}

function draw() {
    if(draw_circle == true) {
        radius = Math.floor(Math.random() * 100);
        circle(x,y,radius);
        
        draw_rectangle= false;
        draw_circle= false;
        draw_triangle= false;
    }
    else if(draw_rectangle == true) {
        // radius = Math.floor(Math.random() * 100);
        w = Math.floor(Math.random() * 100)+ 10;
        h = Math.floor(Math.random() * 100) + 10;
        // h = Math.floor(Math.random(10, 100) )
        rect(x, y, w, h,);
        draw_rectangle= false;
        draw_circle= false;
        draw_triangle= false;
    }
    else if(draw_haxagan == true) {
        image(img, x, y, 100 , 100);
        
        draw_rectangle= false;
        draw_circle= false;
        draw_triangle= false;
    }
    else if(draw_triangle == true) {
        // radius = Math.floor(Math.random() * 100);
        // fill(204, 101, 192, 127);
        // stroke(127, 63, 120);
      
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        x2 = Math.floor(Math.random() * 900);
        y2 = Math.floor(Math.random() * 600);
        x3 = Math.floor(Math.random() * 900);
        y3 = Math.floor(Math.random() * 600);
        w = Math.floor(Math.random() * 100)+ 10;
        h = Math.floor(Math.random() * 100) + 10;
        triangle(x,y,x2,y2,x3,y3)
        draw_triangle= false;
    }
}