"use strict";
exports.__esModule = true;
/*Mi version
const video = document.querySelector("video")//Esto selecciona lo que va a manipular en este caso
      //es el video
const button = document.querySelector("button")
var reproduciendo = true;
button.onclick = () => controlVideo();




function controlVideo(){
    reproduciendo ? video.play() : video.pause();
}
video.onpause = () =>{/*Mira si el video esta pausado
    reproduciendo = true;
}
video.onplaying = () =>{
    reproduciendo = false;
}
export default MediaPlayer;
*/
var MediaPlayer = /** @class */ (function () {
    function MediaPlayer(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];
        this.initPlugins();
    }
    MediaPlayer.prototype.initPlugins = function () {
        var _this = this;
        /*Si yo ahora mando player en vez del this que estoda la clase
        no todas las funciones van a tener acceso lo cual en parte es bueno porque
        asi puedo controlar que metodos pueden acceder a que */
        this.plugins.forEach(function (plugin) {
            plugin.run(_this);
        });
    };
    MediaPlayer.prototype.play = function () {
        this.media.play();
    };
    MediaPlayer.prototype.pause = function () {
        this.media.pause();
    };
    MediaPlayer.prototype.togglePlay = function () {
        this.media.paused ? this.play() : this.pause();
    };
    /*
    mute() {
      console.log("CALLAME PUES");
      this.media.muted = true;
    }
    unmute() {
      this.media.muted = false;
      console.log("ABRIME LA BOCA");
    }
    */
    MediaPlayer.prototype.toggleMute = function () {
        this.media.muted = !this.media.muted;
        /**
         * Ahi lo que hace es asignar el valor distinto
         * al presente y ya
         */
        /*
        if ((this.media.muted === false)) {
            mute();
        } else{
            unmute();
        }
        */
        //this.media.muted ? this.mute() : this.unmute();
    };
    return MediaPlayer;
}());
exports["default"] = MediaPlayer;
