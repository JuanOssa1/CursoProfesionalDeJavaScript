/*
import MediaPlayer from './MediaPlayer';
const video = document.querySelector("video");//Esto selecciona lo que va a manipular en este caso
      //es el video
const button = document.querySelector("button");
var reproduciendo = true;

button.onclick = () => controlVideo();
*/
import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';
import Ads from './plugins/Ads';

const video = document.querySelector('video');
const player = new MediaPlayer({ el: video, plugins: [new AutoPlay(), new AutoPause(), new Ads()] });
/**Aqui se observa */

const buttonMute: HTMLElement = document.getElementById('muteunmute');

const buttonPlay: HTMLElement = document.getElementById('pauseplay');

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
