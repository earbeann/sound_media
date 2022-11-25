let musicFile;
let button;

function setup()
{
    createCanvas(200,200);
    soundFormats('mp3', 'ogg');
    musicFile = loadSound('music.mp3', loadMusic);
    
    button = createButton('play');
    button.mousePressed(togglePlaying);
    // background(51);
    
    // musicFile.play();

}

function togglePlaying(){
    if(!musicFile.isPlaying()){
        musicFile.play();
        button.html('pause');
    }
    else{
        musicFile.stop();
        button.html('play');
    }
}

// function loaded(){
//     console.log('loaded');
// }

function loadMusic()
{
    console.log("It's working!");
    // musicFile.play();
}

function draw()
{
    fill(255,0,0);
    ellipse(50,50,100,100);
}