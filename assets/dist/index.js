"use strict";
exports.__esModule = true;
/*
import MediaPlayer from './MediaPlayer';
const video = document.querySelector("video");//Esto selecciona lo que va a manipular en este caso
      //es el video
const button = document.querySelector("button");
var reproduciendo = true;

button.onclick = () => controlVideo();
*/
var MediaPlayer_1 = require("./MediaPlayer");
var AutoPlay_1 = require("./plugins/AutoPlay");
var AutoPause_1 = require("./plugins/AutoPause");
var video = document.querySelector('video');
var player = new MediaPlayer_1["default"]({ el: video, plugins: [new AutoPlay_1["default"](), new AutoPause_1["default"]()] });
/**Aqui se observa */
var buttonMute = document.getElementById('muteunmute');
var buttonPlay = document.getElementById('pauseplay');
buttonPlay.onclick = function () { return player.togglePlay(); };
buttonMute.onclick = function () { return player.toggleMute(); };
/**Esto sirve para verificar si el navegador tiene esta utilidad ya que no
 * todos los bnavegadores la tienen debido a que todavia es muy nueva
 */
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')["catch"](function (error) {
        console.log(error.message);
    });
}
