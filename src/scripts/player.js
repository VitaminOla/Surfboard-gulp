
 const init = () => {
	videoContainer = document.querySelector(".player");
	videoArea = document.querySelector(".player__wrapper");
	centerPlayBtn = document.querySelector(".player__playCenter");
	video = document.getElementById("videoId");
	controls = document.querySelector(".player__controls");
	playBtn = document.querySelector(".player__play");
	pauseBtn = document.querySelector(".player__pause");
	playRange = document.querySelector(".player__play-range");
	soundOffBtn = document.querySelector(".player__sound-off");
	soundOnBtn = document.querySelector(".player__sound-on");
	volumeRange = document.querySelector(".player__sound-range");
	changeVolume();
	let preVolume = 0;
  };

  window.onload = () => {
	init();
	video.addEventListener("timeupdate", updateProgress);
	document.onkeypress = handleKey;
  };

  const hide = (element) => {
	element.style.display = "none";
  };

  const show = (element) => {
	element.style.display = "block";
  };

  const play = () => {
	video.play();
	show(pauseBtn);
	hide(playBtn);
	hide(centerPlayBtn);
  };

  const pause = () => {
	video.pause();
	show(playBtn);
	show(centerPlayBtn);
	hide(pauseBtn);
  };

  const soundBtnOff = () => {
	hide(soundOnBtn);
	show(soundOffBtn);
  };

  const soundBtnOn = () => {
	hide(soundOffBtn);
	show(soundOnBtn);
  };

  const soundOff = () => {
	video.muted = true;
	soundBtnOff();
	preVolume = volumeRange.value;
	volumeRange.value = 0;
	volumeChange.style.background = "#626262";
  };

  const soundOn = () => {
	video.muted = false;
	volumeRange.value = preVolume;
	soundBtnOn();
	volumeChange.style.background = `linear-gradient(to right, #ffd517 0%, #ffd517 ${preVolume}%, #626262 ${preVolume}%)`;
  };

  const changeVolume = () => {
	if(video.muted) {
	  video.muted = false;
	}
	const volume = volumeRange.value / 100;
	video.volume = volume;
	if (!volume) {
	  soundBtnOff();
	} else {
	  soundBtnOn();
	}
  };

  const volumeChange = document.querySelector('.player__sound-range');

  volumeChange.addEventListener('input', function() {
	const value = this.value;
	this.style.background = `linear-gradient(to right, #ffd517 0%, #ffd517 ${value}%, #626262 ${value}%)`
  })  

  const setCurrentTime = () => {
	video.currentTime = (video.duration / 100) * playRange.value;
  };

  const changePlayRange = () => {
	setCurrentTime();
  };

  const updateProgress = () => {
	playRange.value = (video.currentTime / video.duration) * 100;
	progressVideo.style.background = `linear-gradient(to right, #ffd517 0%, #ffd517 ${playRange.value}%, #626262 ${playRange.value}%)`
	if (video.currentTime === video.duration) {
	  pause();
	}
  };

const handleClick = () => {
	if (video.paused) {
	  play();
	} else {
	  pause();
	}
  };

const progressVideo = document.querySelector('.player__play-range');

progressVideo.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #ffd517 0%, #ffd517 ${value}%, #626262 ${value}%)`
}) 

