/* Funcion labda aqui se lo nombra con "CONS"*/

const sumar =(idNum1, idNum2) => {
    console.log("SUMAR")
    console.log(idNum1)

    var num1 =parseInt(document.getElementById(idNum1).value);
    var num2 =parseInt(document.getElementById(idNum2).value);

    var total =num1+num2;
    console.log(total);
    document.getElementById("idResultado").innerText= total
}
/* ********************************** */
const restar =(idNum1, idNum2) => {
    console.log("RESTAR")
    

    var num1 =parseInt(document.getElementById(idNum1).value);
    var num2 =parseInt(document.getElementById(idNum2).value);

    var total =num1-num2;
    console.log(total);
    document.getElementById("idResultado").innerText= total
}

/* ********************************** */
const multiplicar =(idNum1, idNum2) => {console.log("MULTIPLICAR")
console.log(idNum1)

var num1 =parseInt(document.getElementById(idNum1).value);
var num2 =parseInt(document.getElementById(idNum2).value);

var total =num1*num2;
console.log(total);
document.getElementById("idResultado").innerText= total}

/* ********************************** */
const dividir =(idNum1, idNum2) => {console.log("DIVIDIR")
console.log(idNum1)

var num1 =parseInt(document.getElementById(idNum1).value);
var num2 =parseInt(document.getElementById(idNum2).value);

var total =num1/num2;
console.log(total);
document.getElementById("idResultado").innerText= total}

/* ********************************** */
function agregarElemento(){
    document.getElementById('idDivision').innerHTML="<button>NUEVO</button>";

}
function quitarElemento(){
    document.getElementById('idDivision').innerHTML="";

}

/* ********************************* */
function conceptosJS(){
    /* TIPOS DE DATOS EN JAVASCRIPT
    let, var, cons  ----> Todos son para almacenar tipos de datos
    cons : Para valores los cuales NO van a ser modificados*/

    const IVA=12;
    console.log(IVA);
    /*
    IVA=15
    console.log(IVA)
    Nose puede sobre escribir su valor
    */

    /* var esta quedando en desuso porque let esta mejor optimizado en memoria */
    var nombre = "Diego";
    console.log(nombre);

    nombre = "Alexander";
    console.log(nombre);

    /*let esta mejor en rendimiento que var */
    let apellido = "Rivas";
    console.log(apellido);

    nombre = "Haro";
    console.log(apellido);





}