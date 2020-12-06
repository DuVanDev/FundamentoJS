var duvan = { fullName: { name: 'Duvan', lastName: 'Moreno' } }

function age ( { age = 5 } ) {
    console.log( age )
}

// Destructurin
age(duvan)
var { fullName: { name: nombre, lastName: apellido } } = duvan;
console.log( "fullName", `${nombre} ${apellido}` )
