/*
import MediaPlayer from './MediaPlayer';
const video = document.querySelector("video");//Esto selecciona lo que va a manipular en este caso
      //es el video
const button = document.querySelector("button");
var reproduciendo = true;

button.onclick = () => controlVideo();
*/
import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector('video');
const player = new MediaPlayer({ el: video, plugins: [new AutoPlay()], });
/**Aqui se observa */

const buttonMute = document.getElementById('muteunmute');

const buttonPlay = document.getElementById('pauseplay');

buttonPlay.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.toggleMute();
