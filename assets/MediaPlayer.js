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
class MediaPlayer {
  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];

    this._initPlugins();
  }
  _initPlugins() {
    this.plugins.forEach((plugin) => {
      plugin.run(this);
    });
  }
  play() {
    this.media.play();
  }
  pause() {
    this.media.pause();
  }
  togglePlay() {
    this.media.paused ? this.play() : this.pause();
  }
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
  toggleMute() {
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
  }
  
}
export default MediaPlayer;
