/* Prototipo */

function hereda ( prototipoHijo, prototipoPadre ) {
    var fn = function () { }
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
}

function Persona ( nombre, apellido ) {
    this.nombre = nombre
    this.apellido = apellido

    return this
}

Persona.prototype.saludar = function () {
    console.log( `Hola me llamo  ${this.nombre} ${this.apellido}` );
}

function Desarrollador ( nombre, apellido ) {
    this.nombre = nombre
    this.apellido = apellido
}

/*
    La funcion de herencia debe ejecutarse despues de la declaración de
    del prototipo
*/
hereda( Desarrollador, Persona )

Desarrollador.prototype.saludar = function () {
    console.log( `El el desarrollador ${this.nombre} ${this.apellido}` );
}



let duvan = new Persona( 'Duvan', 'Moreno' )
let dev = new Desarrollador( 'Alguien', 'Desarrolla' )

duvan.saludar()
dev.saludar()
