console.log("Welcome to Spotify(clone)");

// variables
let songIndex = 0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

// songs (song name, song path, cover path)
let songs = [
    {songName:"Bando prod.ta2cutexyugen - Playboi carti ", filePath:"song/1.mp3", coverPath:"assets/img/covers/cover1.jpg"},
    {songName:"Fell in Luv - Playboi Carti ", filePath:"song/2.mp3", coverPath:"assets/img/covers/cover2.jpg"},
    {songName:"Get Dripped - Lil Yachty, Playboi Carti ", filePath:"song/3.mp3", coverPath:"assets/img/covers/cover3.jpg"},
    {songName:"Long time - Playboi Carti ", filePath:"song/4.mp3", coverPath:"assets/img/covers/cover4.jpg"},
    {songName:"7am - Playboi Carti", filePath:"song/5.mp3", coverPath:"assets/img/covers/cover5.jpg"},
    {songName:"ILOVEUIHATEU - Playboi Carti ", filePath:"song/6.mp3", coverPath:"assets/img/covers/cover6.jpg"},
    {songName:"Location - Playboi Carti", filePath:"song/7.mp3", coverPath:"assets/img/covers/cover7.png"},
    {songName:"Love Hurts - Playboi Carti, Travis Scott ", filePath:"song/8.mp3", coverPath:"assets/img/covers/cover8.jpg"},
    {songName:"Magnolia - Playboi Carti ", filePath:"song/9.mp3", coverPath:"assets/img/covers/cover9.jpg"},
    {songName:"Half and Half - Playboi Carti", filePath:"song/10.mp3", coverPath:"assets/img/covers/cover10.jpg"},
]

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// audioElement.play();

// play or pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})
// Listen to Evenets
audioElement.addEventListener('timeupdate', ()=>{
    // Update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;
})
// select time(duration) of music
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

// play song through the play/pause button on songList
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `song/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

// next button function
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})

// previous button function
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})