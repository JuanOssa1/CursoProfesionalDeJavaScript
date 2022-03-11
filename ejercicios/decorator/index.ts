class Field {
  errors: string[];
  input: HTMLInputElement;

  constructor(input: HTMLInputElement) {
    this.input = input;
    this.errors = [];

    let errorMessage = document.createElement('p');
    errorMessage.className = 'text-danger';
    this.input.parentNode.insertBefore(errorMessage, this.input.nextSibling);

    /**Valida cada que se cambia el input y si se produce un error
     * lo a;ande al arreglo y lo pone en error message
    */
   /**En general aqui lo que estamos haciendo es lo de los campos requeridos
    * cuando no ponga un campo requerido deberia avisarle que es obligatorio
    * escribirlo supongo que aqui usamos decorator
    * porque puede que no unicamente vaya a decir requerido tambien puede decir
    * otras cosas adicionales a eso y si no usaramos decorator tocaria
    * que estar modificando la clase 
    */
    this.input.addEventListener('input', () => {
      this.errors = [];
      this.validate();
      errorMessage.innerText = this.errors[0] || '';
    });
  }

  validate() {}
}

function RequiredFieldDecorator(field: Field): Field {
  let validate = field.validate;

  field.validate = function() {
    validate();
    let value = field.input.value;
    if (!value) {
      field.errors.push('Requerido');
    }
  };

  return field;
}

function EmailFieldDecorator(field: Field): Field {
  let validate = field.validate;

  field.validate = function() {
    validate();
    let value = field.input.value;

    if (value.indexOf('@') === -1) {
      field.errors.push('Debe ser un email');
    }
  };

  return field;
}

let field = new Field(document.querySelector('#email'));
/**Es importante mantener este orden porque si valido primero que es email
 * y luego borro lo que escribi no me va a decir que email es un campo
 * requerido si no que me va a decir que debe ser un email
 * como si ahi ya hubiera escriton algo y vomo decia arriba es sostenible estar
 * modificando la clase, con estos decorators estamos haciendo como un 
 * todo en uno y vamos agregando cosas
 */
field = RequiredFieldDecorator(field);
field = EmailFieldDecorator(field);
/**Una forma como me lo imagino es que los decorators es
 * como si fueran una especie de dlcs que se van agregando a la 
 * clase principal pero sin modificarla 
 */