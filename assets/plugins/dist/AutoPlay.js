"use strict";
exports.__esModule = true;
var AutoPlay = /** @class */ (function () {
    function AutoPlay() {
    }
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
}());
exports["default"] = AutoPlay;
