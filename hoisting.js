var x = 5;

( function () {
    console.log( 'x es ', x ); // undefined
    var x = 10
    console.log( 'segund x es ', x ) // 10
}() )


var x = 5;

( function () {
    console.log( 'x es ', x ); // undefined
    let x = 10
    console.log( 'segund x es ', x ) // 10
}() )


var x = 5
print()
function print() {
    console.log("Esto imprime" , x);
}

const print = () => {
    console.log("Esto imprime" , x);
}
print()
var x = 5

