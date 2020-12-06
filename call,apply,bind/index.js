/*
 Estos metodos hacen parte de function
 permiten establecer cual es el this
*/

function saludar() {
    console.log(`Hola soy ${this.name} ${this.lastname}`);
}

function programo(leguage) {
    console.log(`Soy ${this.name} Y YO programo en ${leguage}`);
}

const duvan = {
    name : "Duvan",
    lastname : "Moreno Cardinal"
}

/* CALL  */

saludar.call(duvan)
programo.call(duvan,'JavaScript')

/* APPLY */

saludar.apply(duvan)
programo.apply(duvan,['JavaScript 1'])

/* BIND */

const duviduvi = { name: 'DUvi' , lastname: 'Duva' }
const duviduviSaluda = saludar.bind(duviduvi)

duviduviSaluda()
