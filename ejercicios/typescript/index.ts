
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
let muted: boolean = true;
muted = false;

//Numeros
let numerador: number = 42;
let denominador: number = 6;
let resultado = numerador / denominador;

//String 
let nombre: string = 'Juan';
let saludo = `Me llamo ${nombre}`;

//Arreglos
let people: string[] = [];
people = ["carla", "nicole","raul"]
//people.push(9000) no se puede porque solo es de strings

let peopleAndNumbers: Array<string | number> = []
peopleAndNumbers.push('Carlos');
peopleAndNumbers.push(5);

//Enum variabnle que esta denotada a solo unos colres definidos
enum Color {
    Rojo = "Rojo",
    verde = "Verde",
    Azul = "Azul",
}
let colorFavorito: Color = Color.verde;
//Aqui no me imprime el color si no la posicion porque el enum asgina son las posiciones por eso
//es que en el enum a cada opcion le debo asdignar un valor
console.log(`Mi color favorito es ${colorFavorito}`)
//Any
let comodin: any = "Joker"
comodin = {type: "Wildcard"};

//Object
let someObject: object = {type: "Wildcard"};
/**Typescript deja especifico para los objetos y eso facilita muchas cosas*/


//Funciones antes de abrir las llaves le podemos especificar el retorno como hicimos aqui
function add(a:number, b:number): number{
    return a + b;
}

const sum = add(5,4);


/**Esto es como una funcion en cadena
 * es una pendejada hacerlo asi pero bueno
 * embeces la vida no es como queremos
 */
function createAdder(a: number): (numerito)=> number{
    return function(b: number){
        return b + a;
    };
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);

/**Con el signo de interrogacion le digo que ese parametro sera
 * opcional lo que significa que puede ser undefined o string
 */
//function fullName(firstName: string, lastName: string = 'smith') asi lo que haria es que
/**si no ingresa un valor entonces pone ese por default */
function fullName(firstName: string, lastName?: string): string{
    return `${firstName} ${lastName}`
}
const miNombre = fullName('Juan');
console.log(miNombre);