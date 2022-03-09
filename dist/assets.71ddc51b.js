// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"assets/MediaPlayer.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
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

var MediaPlayer =
/** @class */
function () {
  function MediaPlayer(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];

    this._initPlugins();
  }

  MediaPlayer.prototype._initPlugins = function () {
    var _this = this;

    var player = {
      play: function () {
        return _this.play();
      },
      pause: function () {
        return _this.pause();
      },

      /*Esto lo colocamos porque este es el que nos va a dar acceso a la clase
      principal que es media player ya que dentro del metodo muted quiero acceder
      a esta*/
      media: this.media,

      /*se pone get seguido de muted que es la propiedad virtual*/
      get muted() {
        return this.media.muted;
      },

      set muted(value) {
        /*
        if(value===true){
          this.media.muted=true;
        } else {
          this.media.muted=false;
        }
        O la otra forma simple
        */
        this.media.muted = value;
      }

    };
    /*Si yo ahora mando player en vez del this que estoda la clase
    no todas las funciones van a tener acceso lo cual en parte es bueno porque
    asi puedo controlar que metodos pueden acceder a que */

    this.plugins.forEach(function (plugin) {
      plugin.run(player);
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
}();

exports.default = MediaPlayer;
},{}],"assets/plugins/AutoPlay.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var AutoPlay =
/** @class */
function () {
  function AutoPlay() {}

  AutoPlay.prototype.run = function (player) {
    if (!player.media.muted) {
      /*Aqui lo que estoy haciendo es un setter y le estoy diciendo
      que si no esta muteado setee la propiedad a mute*/

      /*player.muted(true); uno se veria tentado a hacerlo asi pero
      no esta bien porque aunque parezcan una funcion en realidad son
      un atributo*/
      player.media.muted = true;
    }

    player.play();
  };

  return AutoPlay;
}();

exports.default = AutoPlay;
},{}],"assets/plugins/AutoPause.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var AutoPause =
/** @class */
function () {
  function AutoPause() {
    /**Como vimos en clases anteriores ahora el bind va a hacer esta vaina
     * general porque si la meto dentro del intersection observer no puedo acceder
     * a ella en otros metodos porque seria undefined
     */
    this.threshold = 0.25;
    this.handleIntersection = this.handleIntersection.bind(this);
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
  }

  AutoPause.prototype.run = function (player) {
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
  };
  /**Se pone IntersectionObserverEntru porque ese es el tipo de objeto que le esta entrnado por parametro */


  AutoPause.prototype.handleIntersection = function (entries) {
    var entry = entries[0];
    /**intersection ratio es un  atributo que ya tiene entry aqui
     * ademas estoy diciendo que esta visible es decir si esta intesrcetion es mayor
     * al limite que he puesto es porque se puede ver todavia lo suficiente
     */

    var isVisible = entry.intersectionRatio >= this.threshold;
    isVisible ? this.player.play() : this.player.pause();
    console.log(entry);
  };

  AutoPause.prototype.handleVisibilityChange = function () {
    var isVisible = document.visibilityState === "visible";
    isVisible ? this.player.play() : this.player.pause();
  };

  return AutoPause;
}();

exports.default = AutoPause;
},{}],"assets/index.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
import MediaPlayer from './MediaPlayer';
const video = document.querySelector("video");//Esto selecciona lo que va a manipular en este caso
      //es el video
const button = document.querySelector("button");
var reproduciendo = true;

button.onclick = () => controlVideo();
*/

var MediaPlayer_1 = __importDefault(require("./MediaPlayer"));

var AutoPlay_1 = __importDefault(require("./plugins/AutoPlay"));

var AutoPause_1 = __importDefault(require("./plugins/AutoPause"));

var video = document.querySelector('video');
var player = new MediaPlayer_1.default({
  el: video,
  plugins: [new AutoPlay_1.default(), new AutoPause_1.default()]
});
/**Aqui se observa */

var buttonMute = document.getElementById('muteunmute');
var buttonPlay = document.getElementById('pauseplay');

buttonPlay.onclick = function () {
  return player.togglePlay();
};

buttonMute.onclick = function () {
  return player.toggleMute();
};
/**Esto sirve para verificar si el navegador tiene esta utilidad ya que no
 * todos los bnavegadores la tienen debido a que todavia es muy nueva
 */


if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register("/sw.js").catch(function (error) {
    console.log(error.message);
  });
}
},{"./MediaPlayer":"assets/MediaPlayer.ts","./plugins/AutoPlay":"assets/plugins/AutoPlay.ts","./plugins/AutoPause":"assets/plugins/AutoPause.ts","/home/juano/CursoProfesionalDeJavaScript/sw.js":[["sw.js","sw.js"],"sw.js.map","sw.js"]}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "42787" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","assets/index.ts"], null)
//# sourceMappingURL=/assets.71ddc51b.js.map