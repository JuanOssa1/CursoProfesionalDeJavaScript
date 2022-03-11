"use strict";
exports.__esModule = true;
var Singleton_1 = require("./Singleton");
/**Aqui como podemos observar no interesa cuantos objetos cree
 * siempre me va a mandar la misma instancia
 */
var a = Singleton_1["default"].getInstance();
var b = Singleton_1["default"].getInstance();
console.log('A es igual a b?', a === b);
