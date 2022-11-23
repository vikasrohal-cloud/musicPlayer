let Index = 0
let musicBar  = document.getElementById("musicBar");
let audioElement = new Audio('/music/0.mp3')
let masterPlay  = document.getElementById("masterPlay");
let gif1 = document.getElementById("gif1");
let songItems = Array.from(document.getElementsByClassName('songItem'))
let masterSongName = document.getElementById('masterSongName')


// let songItemPlay = document.querySelector('songItemPlay')
let songs =[
    {songName : "Let me Love you -  my friends",  filePath:"music/0.mp3" ,coverPath:"/image/letmelove.jpg"},
    {songName : "In the ENd - loveall ",  filePath:"/music/1.mp3" ,coverPath:"/image/intheEnd.jpg"},
    {songName : "At my Worst  - music",  filePath:"/music/2.mp3" ,coverPath:"/image/AtmyWorst.jpg"},
    {songName : "Bad Boy - here",  filePath:"/music/3.mp3" ,coverPath:"/image/BadBoy.jpg"},
    {songName : "Panda - english song",  filePath:"/music/4.mp3" ,coverPath:"/image/panda.jpg"}
    
]
// let i = 0;





songItems.forEach((element,i)=>{
    // console.log(element,i);
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerHTML = songs[i].songName 
})


masterPlay.addEventListener("click", ()=>{
    if (audioElement.paused || audioElement.curretTime<=0) {
        audioElement.play();
        masterSongName.innerText = songs[Index].songName
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
        gif1.style.opacity=1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add('fa-circle-play')
        gif1.style.opacity=0;
    }
})
audioElement.addEventListener("timeupdate", ()=>{
// console.log("timeUpdate");
myMusic = parseInt((audioElement.currentTime/audioElement.duration)*100)
musicBar.value = myMusic;
})

musicBar.addEventListener('change',()=>{
    audioElement.currentTime = musicBar.value*audioElement.duration/100

})

const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play')
    })
}

// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//     element.addEventListener('click',(e)=>{
//         makeAllPlays();
//         Index = (e.target.id);
//         console.log(e.target);
//         e.target.classList.remove('fa-circle-play');
//         e.target.classList.add('fa-circle-pause');
//         gif1.style.opacity=1;
//         audioElement.src = `/music/${Index}.mp3`;
//         masterSongName.innerText = songs[Index].songName
//         audioElement.currentTime = 0;
//         audioElement.play();
//         masterPlay.classList.remove('fa-circle-play');
//         masterPlay.classList.add('fa-circle-pause');

//     })

// })


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        if (audioElement.paused || audioElement.curretTime<=0){
        makeAllPlays();
        Index = (e.target.id);
        console.log(e.target);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        gif1.style.opacity=1;
        audioElement.src = `/music/${Index}.mp3`;
        masterSongName.innerText = songs[Index].songName
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        }
        else{
            audioElement.pause();
            e.target.classList.remove('fa-circle-pause')
            e.target.classList.add('fa-circle-play')
            masterPlay.classList.remove('fa-circle-pause');
            masterPlay.classList.add('fa-circle-play');
            gif1.style.opacity=0;
        }

    })

})




document.getElementById('next').addEventListener('click',(e)=>{
    if(Index>=4){
        Index = 0;
    }
    else{
        Index +=1
    }
    audioElement.src = `/music/${Index}.mp3`
    masterSongName.innerText = songs[Index].songName
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('prev').addEventListener('click',(e)=>{
    if(Index<=0){
        Index=4;
    }
    else{
        Index -=1
    }
    masterSongName.innerText = songs[Index].songName;
    audioElement.src = `/music/${Index}.mp3`
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

// document.getElementById('next').addEventListener('click',()=>{
//     if(i >= songs.length-1 ) i=-1;
//     i++;
//     return setSong();
// })
 
// document.getElementById('prev').addEventListener('click',()=>{
//     if(i <= 0)i = songs.length;
//     i--;
// })
// function setSong() {
//     return songItemPlay.setAttribute('src' , '/music/'+songs.filePath[i]);
    
// }
