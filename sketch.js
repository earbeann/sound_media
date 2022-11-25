let musicFile;

function setup()
{
    soundFormats('mp3', 'ogg');
    musicFile = loadSound('music.mp3', loadMusic);
    musicFile.play();

}

function loadMusic()
{
    musicFile.play();
}

function draw()
{
    fill(255,0,0);
    ellipse(50,50,100,100);
}