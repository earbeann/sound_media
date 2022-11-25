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