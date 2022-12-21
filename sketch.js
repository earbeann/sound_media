let musicFile;
let musicFile2;
let button;
let button2;
let button3;
let button4
var jmp;
var t1=0;
var t2=0;
let amp;
var rB;
let music;
let vol = 0.5;
var seconds;
var count=0;
var img1, img2;

function preload(){
    img1 = loadImage('img1.jpg');
    img2 = loadImage('img2.png');
  }

function setup()
{
    createCanvas(640, 480);
    soundFormats('mp3', 'ogg');
    musicFile = loadSound('music', loadMusic);
    musicFile2 = loadSound('music2', loadMusic);

    button = createButton("play");
    button.mousePressed(togglePlaying1);

    button2 = createButton("Music1");
    button2.mousePressed(togglePlaying2);
    music = 1;

    amp = new p5.Amplitude();

    volume = createSlider(0, 1, vol, 0.01);
    volume.size(300);

    background(229,204,255);

    jmp = createButton("Jump");
    jmp.mousePressed(jumpAudio);

    // img = loadImage('img1.jpg');
    // image(img1, 0, 0);

    // img = loadImage('img2.png');
    // image(img2, 0, 0);

}

function togglePlaying1(){
    if(music === 1){
        if(!musicFile.isPlaying()){
            // rB=musicFile.reverseBuffer();
            musicFile.setVolume(0.5);
            musicFile.rate(1);
            musicFile.play();
            img = loadImage('img1.jpg');
            image(img1, 0, 0, width, height);
            button.html('pause');
        }else{
            musicFile.stop();
            button.html('play');
        }
    }
    if(music === 2){
        if(!musicFile2.isPlaying()){
            // rB=musicFile.reverseBuffer();
            musicFile2.jump(200);
            musicFile2.setVolume(0.5);
            musicFile.rate(1);
            musicFile2.play();
            img = loadImage('img2.png');
             image(img2, 0, 0, width, height);
            button.html('pause');
        }else{
            musicFile2.stop();
            button.html('play');
        }
    }
 }

 function togglePlaying2(){
    if(music === 1){
        music = 2;
        button2.html('Music2');
    }else{
        music = 1;
        button2.html('Music1');
    }
    console.log(music);
 }

function loadMusic()
{
    console.log("It's Working");
}

function draw(){
// console.log(amp.getLevel(), musicFile.duration());
// count++;
stroke(255,193,158);
strokeWeight(5);
line(340,350,340,240);
line(340,240,380,300); 
fill(255,94,0);
ellipse(320,350,(musicFile.currentTime()*10)/4,(480-amp.getLevel()*1000)/6 );

musicFile.setVolume(volume.value());
musicFile2.setVolume(volume.value());
}

function jumpAudio(){
    var len = musicFile.duration();
    var t = random(len);
    console.log(t);
    musicFile.jump(t);

    var len2 = musicFile2.duration();
    var t = random(len);
    console.log(t);
    musicFile2.jump(t);
}