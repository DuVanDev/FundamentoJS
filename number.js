//  trabajar con numeros decimales
var valor = 30.33
var count = 4

var double = Math.round(valor * 100 * count)/ 100

double = double.toFixed(2) // dice los decimales que se quieren mostrar

double = parseFloat(double) //  pasar un string a un numero
console.log("double", double)


