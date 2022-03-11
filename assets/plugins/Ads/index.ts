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
    private currentAd: Ad;
    private adsContainer: HTMLElement;
    constructor(){
        this.ads = Ads.getInstance();
        this.adsContainer = document.createElement('div');
        /**Recordar que esto se hace por el scope y para que el event listener pueda
         * acceder al this que queremos
         */
        this.handleTimeUpdate = this.handleTimeUpdate.bind(this)
    }
    run(player: MediaPlayer){
        this.player = player;
        this.player.container.appendChild(this.adsContainer);
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
        this.adsContainer.innerHTML = `
        <div class="ads">
          <a class="ads__link" href="${this.currentAd.url}" target="_blank">
            <img class="ads__img" src="${this.currentAd.imageUrl}" />
            <div class="ads__info">
              <h5 class="ads__title">${this.currentAd.title}</h5>
              <p class="ads__body">${this.currentAd.body}</p>
            </div>
          </a>
        </div>
      `;

        console.log(ad);

        setTimeout(()=>{
            this.currentAd = null;
            this.adsContainer.innerHTML = '';
        },10000)
    }
}
export default AdsPlugin;