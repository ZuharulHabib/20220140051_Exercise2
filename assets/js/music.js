let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let songImage = document.querySelector(".song-img");
let songTitle = document.querySelector("h1");
let songDescription = document.querySelector("p");

// Daftar lagu
let songs = [
    { title: "Tak akan ada cinta yang lain",description:"dewa 19", image: "./assets/images/dewa.jpg", src: "./assets/Dewa 19 - Tak Kan Ada Cinta yang Lain _ Official Lyric Video.mp3" },
    { title: "Munajat cinta",description:"dewa 19", image: "./assets/images/dewa.jpg", src: "./assets/The Rock - Munajat Cinta (Official Music Video).mp3" },
    { title: "saat itu",description:"last child", image: "./assets/images/last.jpg", src: "./assets/Last Child - Saat-Saat Itu (Official Lyric Video) _ OST. Aku Dan Mesin Waktu.mp3" },
    { title: "nemen",description:"NDX AKA", image: "./assets/images/ndx.jpeg", src: "./assets/NDX AKA - Nemen HipHop Dangdut Version ( Official Lyric Video ).mp3" },
    { title: "janji suci",description:"Yovie &nuno", image: "./assets/images/yovie.jpg", src: "./assets/Yovie & Nuno - Janji Suci (Video Clip).mp3" },
    { title: "seandainya",description:"viera", image: "./assets/images/viera.jpg", src: "./assets/Seandainya - Vierra (Lirik Lagu - Lyrics).mp3" },
];

let currentSongIndex = 0;

// Fungsi untuk memutar lagu
function playSong() {
    let currentSong = songs[currentSongIndex];
    song.src = currentSong.src;
    songTitle.textContent = currentSong.title;
    songDescription.textContent = currentSong.description;
    songImage.src = currentSong.image;
    song.play();
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
}

// Fungsi untuk berikutnya
function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playSong();
}

// Fungsi untuk sebelumnya
function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    playSong();
}

// Memperbarui nilai progress saat lagu dimuat
song.onloadedmetadata = function() {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

// Memperbarui nilai progress saat lagu berubah waktu
song.ontimeupdate = function() {
    progress.value = song.currentTime;
}

// Memainkan atau menjeda lagu saat ikon kontrol diklik
function playPause() {
    if (song.paused) {
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    } else {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
}

// Memainkan lagu dari posisi progress yang dipilih
progress.oninput = function() {
    song.currentTime = progress.value;
}

// Memutar lagu berikutnya saat lagu saat ini selesai
song.onended = function() {
    nextSong();
}
