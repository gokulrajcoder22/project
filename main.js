x = 0;
y = 0;
draw_cricle = "";
draw_react = "";

var speechRecognition = window.webkitspeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("status").innerHTML =  "system is listening please speak";
    recognition.start();
}

recognition.onresult = function(event) {
     console.log(event);


     var content = event.results[0][0].transcript;

     document.getElementById("status").innerHTML = "the speech has been re thank youcognized as: " +content;
     if(content == "cricle")
     {
        x = math.floor(math.random( * 900));
        y = math.floor(math.random( * 600));
        document.getElementById("status").innerHTML = "started drawing circle ";
        draw_cricle = "set";
     }
     if(content =="ractangle")
     {
        x = math.floor(math.random( * 900));
        y = math.floor(math.random( * 600));
        document.getElementById("status").innerHTML = "started drawing rectangle ";
        draw_rect = "set";
     }
}      
function setup() {
    canvas = createCanvas(900, 600);
}

function draw() {
    if(draw_cricle == "set")
    {
        raidus =  math.floor(math.random() * 100);
        circle(x,y,raidus);
        document.getElementById("status").innerHTML = "circle is drawn. ";
        draw_circle = "";
    }

    if(draw_rect == "set")
    {
        raidus =  math.floor(math.random() * 100);
        rect(x,y,70,50);
        document.getElementById("status").innerHTML = "rectangle is drawn is drawn. ";
        draw_rect = "";
    }
}

