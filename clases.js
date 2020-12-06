class Persona {
    constructor( nombre, apellido ) {
        this.nombre = nombre
        this.apellido = apellido
    }

    saludar () {
        console.log( `Hola soy ${this.nombre} ${this.apellido}` );
    }
}

class Desarrollador extends Persona {
    constructor( nombre, apellido ) {
        /*
            Se coloca super porque debe traer el constructor
            de la clase padre
        */
        super( nombre, apellido )
    }

    saludar () {
        console.log( `Soy le Dev ${this.nombre} ${this.apellido}` );
    }
}

var duvan = new Persona( 'Duvan', 'Moreno' )
const dev = new Desarrollador( 'Dev', 'Web' );

duvan.saludar()
dev.saludar()