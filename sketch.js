let musicFile;
let musicFile2;
let button;
let button2;
let button3;
let button4
var jmp;
var t=0;
let amp;
var rB;
let music;
let vol = 0.5;

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
}

function togglePlaying1(){
    if(music === 1){
        if(!musicFile.isPlaying()){
            // rB=musicFile.reverseBuffer();
            musicFile.setVolume(0.5);
            musicFile.rate(1);
            musicFile.play();
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
console.log(amp.getLevel(), musicFile.duration());

stroke(153, 51, 255);
ellipse(320,240,musicFile.currentTime()*20,480-amp.getLevel()*1000 );

musicFile.setVolume(volume.value());
musicFile2.setVolume(volume.value());

}

function jumpAudio(){
    var len = musicFile.duration();
    var t = random(len);
    console.log(t);
    musicFile.jump(t);

    var len2 = musicFile2x.duration();
    var t = random(len);
    console.log(t);
    musicFile2.jump(t);
}