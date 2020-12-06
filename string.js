var name = 'Duvan', lastName = 'Moreno'

//  Convertir nombre en mayusculas y minusculas 

var nameCapitalLetter = name.toUpperCase()
var lastNameLowerCase = lastName.toLowerCase()

// console.log("nameCapitalLetter", nameCapitalLetter)
// console.log("lastNameLowerCase", lastNameLowerCase)

//  Traer primer letra de un string
var firstLetter = name.charAt( 0 );
// console.log("firstLetter", firstLetter)

// Conocer la cantidad de letras
var lengthLetterName = name.length
console.log( "lengthLetterName", lengthLetterName )

// concatenar String con Interpolación de Texto

var fullName = `${name} ${lastName}`
console.log( "fullName", fullName )

//  Obtener los caracteres que quiera de un string

var str = name.substr( 1, 3 )
console.log( "str", str )


