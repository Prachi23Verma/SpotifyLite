console.log("Welcome to the spotify");

// Initialize the variable
let songIndex = 0;
let audioElement = new Audio('songs/letMeLoveYou.mp3')
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let giff = document.getElementById('giff');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Let Me Love you",filePath:"songs/letMeLoveYou.mp3", coverPath: "images/img1.jpg"},
    {songName: "Closer",filePath:"songs/closer.mp3", coverPath: "images/img2.jpg"},
    {songName: "Let Me Down Slowly",filePath:"songs/letMeDown.mp3", coverPath: "images/img3.jpg"},
    {songName: "Love Me Like you Do",filePath:"songs/loveMeLikeYouDo.mp3", coverPath: "images/img4.jpg"},
    {songName: "Calm Down",filePath:"songs/calmDown.mp3", coverPath: "images/img5.jpg"},
    {songName: "Strengers",filePath:"songs/strengers.mp3", coverPath: "images/img6.jpg"},
    {songName: "Mic Dorp",filePath:"songs/micDrop.mp3", coverPath: "images/img7.jpg"},
    {songName: "Dynamite",filePath:"songs/Dynamite.mp3", coverPath: "images/img8.jpg"},
    {songName: "Black Swan",filePath:"songs/BlackSwan.mp3", coverPath: "images/img9.jpg"},
    {songName: "Love Me Again",filePath:"songs/loveMeAgain.mp3", coverPath: "images/img10.jpg"},
    {songName: "No More Dream",filePath:"songs/NoMoreDream.mp3", coverPath: "images/img11.jpg"},
    {songName: "Rainy Days",filePath:"songs/rainyDays.mp3", coverPath: "images/img12.jpg"},
    {songName: "cupid",filePath:"songs/cupid.mp3", coverPath: "images/img13.jpg"},
]
songItem.forEach((element,i)=>{
  element.getElementsByTagName("img")[0].src = songs[i].coverPath
  element.getElementsByClassName("songName")[0].src = songs[i].songName
})

// audioElement.play()

// Handle play/pause click
masterPlay.addEventListener('click',()=>{
  if(audioElement.paused ||  audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    giff.style.opacity = 1;
  }
  else{
    audioElement.pause();
    masterPlay.classList.remove('fa-pause');
    masterPlay.classList.add('fa-play');
    giff.style.opacity =0;
  }
})


       // Listen to event
audioElement.addEventListener('timeupdate', () =>{
      //  update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100) ;
   myProgressBar.value = progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays= ()=>{
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
  element.classList.remove('fa-pause')
  element.classList.add('fa-play')
 })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
  element.addEventListener('click',(e)=>{
    makeAllPlays();
    songIndex = parseInt(e.target.id);
    e.target.classList.remove('fa-play')
    e.target.classList.add('fa-pause')
    audioElement.src =`songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName
    audioElement.currentTime = 0;
    audioElement.play();
    giff.style.opacity =1;
    masterPlay.classList.remove('fa-play')
    masterPlay.classList.add('fa-pause')
  })
  
})

document.getElementById('next').addEventListener('click',()=>{
  if(songIndex >=12){
    songIndex = 0;
  }
  else{
  songIndex += 1;
  }
  masterSongName.innerText = songs[songIndex].songName
  audioElement.src =`songs/${songIndex+1}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  giff.style.opacity =1;
  masterPlay.classList.remove('fa-play')
  masterPlay.classList.add('fa-pause')
})
document.getElementById('previous').addEventListener('click',()=>{
  if(songIndex <= 0){
    songIndex = 0;
  }
  else{
  songIndex -= 1;
  }
  masterSongName.innerText = songs[songIndex].songName
  audioElement.src =`songs/${songIndex+1}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  giff.style.opacity =1;
  masterPlay.classList.remove('fa-play')
  masterPlay.classList.add('fa-pause')
})