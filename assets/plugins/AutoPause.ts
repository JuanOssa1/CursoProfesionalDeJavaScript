/**NO OLVIDAR QUE ESTO HAY QUE CORRERLO ES COMO npm start porque 
 * live server no soporta typescript
 */
import MediaPlayer from "../MediaPlayer";
class AutoPause {
    private threshold: number;
    player: MediaPlayer;
    constructor(){
        
        /**Como vimos en clases anteriores ahora el bind va a hacer esta vaina
         * general porque si la meto dentro del intersection observer no puedo acceder 
         * a ella en otros metodos porque seria undefined
         */
        this.threshold = 0.25;
        this.handleIntersection = this.handleIntersection.bind(this);
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    }
    run(player){
        this.player = player;/*Recordar que esto se hace para ya pueda acceder a ella desde adentro mas abajo*/
        const observer = new IntersectionObserver(this.handleIntersection, {threshold: this.threshold })/**Recibe dos argumentos
        el handler que recibe el anuncio de lo sucedido y el objeto de configuracion
        es como el parametro que definimos como alerta en este caso como es lo que se ve del contenedor
        queremos que este mirando la pantalla y cugit ando esta llegue a solo un 25% nos avise 
        threshold significa limite en ingles ocurre cada cada que pase por ese limite*/
        observer.observe(this.player.media); /**Aqui defino que quiero que se observe que es rttda la pantalla*/

        document.addEventListener("visibilitychange", this.handleVisibilityChange)
    }
    /**Se pone IntersectionObserverEntru porque ese es el tipo de objeto que le esta entrnado por parametro */
    private handleIntersection(entries : IntersectionObserverEntry[]){ /**Le pasa una lista de todos los objetos que estamos observando y como 
    en este caso solo hay uno pues... */
        const entry = entries[0];
        /**intersection ratio es un  atributo que ya tiene entry aqui
         * ademas estoy diciendo que esta visible es decir si esta intesrcetion es mayor
         * al limite que he puesto es porque se puede ver todavia lo suficiente
         */
        const isVisible = entry.intersectionRatio >= this.threshold;
        isVisible ? this.player.play():this.player.pause();
        console.log(entry);
    }
    private handleVisibilityChange(){
        const isVisible = document.visibilityState === "visible"
        isVisible ? this.player.play():this.player.pause();
    }
}
export default AutoPause;