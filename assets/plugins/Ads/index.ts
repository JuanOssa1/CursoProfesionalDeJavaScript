/**Aqui se implementa el plugin como tal */
import MediaPlayer from '../../MediaPlayer'
/**Asi es como hago que el ad este representado en la interfaz en la 
 * otra clase
 */
import Ads, {Ad} from './Ads'
class AdsPlugin {
    private ads: Ads;
    private player: MediaPlayer;
    private media: HTMLMediaElement;
    private currentAd: Ad
    constructor(){
        this.ads = Ads.getInstance();
        /**Recordar que esto se hace por el scope y para que el event listener pueda
         * acceder al this que queremos
         */
        this.handleTimeUpdate = this.handleTimeUpdate.bind(this)
    }
    run(player: MediaPlayer){
        this.player = player;
        this.media = this.player.media;

        this.media.addEventListener('timeupdate', this.handleTimeUpdate);
    }
    private handleTimeUpdate(){
    /**Este tiene un elemento para actializat el tiempo de la media por ejemplo en
     * un video
    */
        const currentTime = Math.floor(this.media.currentTime);
        if(currentTime % 30 === 0){
            this.renderAd();
        }
    }
    private renderAd(){
        if(this.currentAd){
            return;
        }
        const ad = this.ads.getAd();
        this.currentAd = ad;
        console.log(ad);
    }
}
export default AdsPlugin;