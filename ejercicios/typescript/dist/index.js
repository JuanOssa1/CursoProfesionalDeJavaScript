/*
var message: string = 'Hello World';
console.log(message);
console.log("Hello, TypeScript");

function add(a: number, b: number){
    return a + b;

}
const sum = add(2,3)
console.log(sum)
*/
//Boolean en Typescript
var muted = true;
muted = false;
//Numeros
var numerador = 42;
var denominador = 6;
var resultado = numerador / denominador;
//String 
var nombre = 'Juan';
var saludo = "Me llamo " + nombre;
//Arreglos
var people = [];
people = ["carla", "nicole", "raul"];
//people.push(9000) no se puede porque solo es de strings
var peopleAndNumbers = [];
peopleAndNumbers.push('Carlos');
peopleAndNumbers.push(5);
//Enum variabnle que esta denotada a solo unos colres definidos
var Color;
(function (Color) {
    Color["Rojo"] = "Rojo";
    Color["verde"] = "Verde";
    Color["Azul"] = "Azul";
})(Color || (Color = {}));
var colorFavorito = Color.verde;
//Aqui no me imprime el color si no la posicion porque el enum asgina son las posiciones por eso
//es que en el enum a cada opcion le debo asdignar un valor
console.log("Mi color favorito es " + colorFavorito);
//Any
var comodin = "Joker";
comodin = { type: "Wildcard" };
//Object
var someObject = { type: "Wildcard" };
/**Typescript deja especifico para los objetos y eso facilita muchas cosas*/
//Funciones antes de abrir las llaves le podemos especificar el retorno como hicimos aqui
function add(a, b) {
    return a + b;
}
var sum = add(5, 4);
/**Esto es como una funcion en cadena
 * es una pendejada hacerlo asi pero bueno
 * embeces la vida no es como queremos
 */
function createAdder(a) {
    return function (b) {
        return b + a;
    };
}
var addFour = createAdder(4);
var fourPlus6 = addFour(6);
/**Con el signo de interrogacion le digo que ese parametro sera
 * opcional lo que significa que puede ser undefined o string
 */
//function fullName(firstName: string, lastName: string = 'smith') asi lo que haria es que
/**si no ingresa un valor entonces pone ese por default */
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}
var miNombre = fullName('Juan');
console.log(miNombre);
