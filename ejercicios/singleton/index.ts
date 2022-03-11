import Singleton from './Singleton'

/**Aqui como podemos observar no interesa cuantos objetos cree 
 * siempre me va a mandar la misma instancia
 */
const a = Singleton.getInstance();
const b = Singleton.getInstance();

console.log('A es igual a b?', a===b);