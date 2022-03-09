"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AutoPause =
/*#__PURE__*/
function () {
  function AutoPause() {
    _classCallCheck(this, AutoPause);

    this.threshold = 0.25;
    /**Como vimos en clases anteriores ahora el bind va a hacer esta vaina
     * general porque si la meto dentro del intersection observer no puedo acceder 
     * a ella en otros metodos porque seria undefined
     */

    this.handleIntersection = this.handleIntersection.bind(this);
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
  }

  _createClass(AutoPause, [{
    key: "run",
    value: function run(player) {
      this.player = player;
      /*Recordar que esto se hace para ya pueda acceder a ella desde adentro mas abajo*/

      var observer = new IntersectionObserver(this.handleIntersection, {
        threshold: this.threshold
      });
      /**Recibe dos argumentos
      el handler que recibe el anuncio de lo sucedido y el objeto de configuracion
      es como el parametro que definimos como alerta en este caso como es lo que se ve del contenedor
      queremos que este mirando la pantalla y cugit ando esta llegue a solo un 25% nos avise 
      threshold significa limite en ingles ocurre cada cada que pase por ese limite*/

      observer.observe(this.player.media);
      /**Aqui defino que quiero que se observe que es rttda la pantalla*/

      document.addEventListener("visibilitychange", this.handleVisibilityChange);
    }
  }, {
    key: "handleIntersection",
    value: function handleIntersection(entries) {
      /**Le pasa una lista de todos los objetos que estamos observando y como 
      en este caso solo hay uno pues... */
      var entry = entries[0];
      /**intersection ratio es un  atributo que ya tiene entry aqui
       * ademas estoy diciendo que esta visible es decir si esta intesrcetion es mayor
       * al limite que he puesto es porque se puede ver todavia lo suficiente
       */

      var isVisible = entry.intersectionRatio >= this.threshold;
      isVisible ? this.player.play() : this.player.pause();
      console.log(entry);
    }
  }, {
    key: "handleVisibilityChange",
    value: function handleVisibilityChange() {
      var isVisible = document.visibilityState === "visible";
      isVisible ? this.player.play() : this.player.pause();
    }
  }]);

  return AutoPause;
}();

var _default = AutoPause;
exports["default"] = _default;