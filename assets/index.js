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
import AutoPause from './plugins/AutoPause.js';

const video = document.querySelector('video');
const player = new MediaPlayer({ el: video, plugins: [new AutoPlay(), new AutoPause()] });
/**Aqui se observa */

const buttonMute = document.getElementById('muteunmute');

const buttonPlay = document.getElementById('pauseplay');

buttonPlay.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.toggleMute();

/**Esto sirve para verificar si el navegador tiene esta utilidad ya que no
 * todos los bnavegadores la tienen debido a que todavia es muy nueva
 */
if('serviceWorker' in navigator){
      navigator.serviceWorker.register('/sw.js').catch(error => {
            console.log(error.message);
      });

}
