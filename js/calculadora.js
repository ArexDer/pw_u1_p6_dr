function dividir(idNum1, idNum2){

    var num1 =parseInt(document.getElementById(idNum1).value);
    var num2 =parseInt(document.getElementById(idNum2).value);

    var total =num1/num2;
    console.log(total);
    document.getElementById("idResultado").innerText= total

}

function multiplicar(idNum1, idNum2){

    var num1 =parseInt(document.getElementById(idNum1).value);
    var num2 =parseInt(document.getElementById(idNum2).value);

    var total =num1*num2;
    console.log(total);
    document.getElementById("idResultado").innerText= total

}

function restar(idNum1, idNum2){

    var num1 =parseInt(document.getElementById(idNum1).value);
    var num2 =parseInt(document.getElementById(idNum2).value);

    var total =num1-num2;
    console.log(total);
    document.getElementById("idResultado").innerText= total

}


function sumar(idNum1, idNum2){
    console.log("SUMAR")
    console.log(idNum1)

    var num1 =parseInt(document.getElementById(idNum1).value);
    var num2 =parseInt(document.getElementById(idNum2).value);

    var total =num1+num2;
    console.log(total);
    document.getElementById("idResultado").innerText= total

}

/*
Es mas especifica y la otra es mas GENERICA :3
function sumar(){

    var num1 =document.getElementById("idnumero1").ariaValueMax;
    var num2 =document.getElementById("idnumero2").ariaValueMax;

}
*/