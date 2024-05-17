let operandoA = '';
let operandoB = '';
let operacionActual = '';
let resultado = '';
let nuevaEntrada = false;
let displayContent = ''; // Para mostrar la cadena completa de operaciones

function limpiar() {
    operandoA = '';
    operandoB = '';
    operacionActual = '';
    resultado = '';
    nuevaEntrada = false;
    displayContent = '';
    actualizarDisplay('0');
}

function borrar() {
    if (resultado !== '') {
        resultado = '';
        displayContent = '';
        actualizarDisplay('0');
    } else if (operacionActual !== '') {
        operacionActual = '';
        displayContent = displayContent.slice(0, -1);
        actualizarDisplay(displayContent);
    } else if (operandoB !== '') {
        operandoB = operandoB.slice(0, -1);
        displayContent = displayContent.slice(0, -1);
        actualizarDisplay(displayContent);
    } else if (operandoA !== '') {
        operandoA = operandoA.slice(0, -1);
        displayContent = displayContent.slice(0, -1);
        actualizarDisplay(displayContent);
    }
}

function porcentaje() {
    if (operacionActual === '') {
        operandoA = (parseFloat(operandoA) / 100).toString();
        displayContent = operandoA;
    } else {
        operandoB = (parseFloat(operandoB) / 100).toString();
        displayContent = operandoA + operacionActual + operandoB;
    }
    actualizarDisplay(displayContent);
}

function agregarNumero(numero) {
    if (nuevaEntrada) {
        operandoA = numero;
        displayContent = numero;
        nuevaEntrada = false;
    } else {
        if (operacionActual === '') {
            operandoA += numero;
        } else {
            operandoB += numero;
        }
        displayContent += numero;
    }
    actualizarDisplay(displayContent);
}

function agregarPunto() {
    if (nuevaEntrada) {
        operandoA = '0.';
        displayContent = '0.';
        nuevaEntrada = false;
    } else {
        if (operacionActual === '') {
            if (!operandoA.includes('.')) {
                operandoA += '.';
                displayContent += '.';
            }
        } else {
            if (!operandoB.includes('.')) {
                operandoB += '.';
                displayContent += '.';
            }
        }
    }
    actualizarDisplay(displayContent);
}

function operacion(operador) {
    if (operandoA !== '' && operandoB === '') {
        operacionActual = operador;
        displayContent += operador;
        nuevaEntrada = false;
    } else if (operandoA !== '' && operandoB !== '') {
        calcular(false);
        operacionActual = operador;
        displayContent = operandoA + operacionActual;
    } else if (resultado !== '') {
        operandoA = resultado;
        operacionActual = operador;
        displayContent = resultado + operador;
        nuevaEntrada = false;
    }
    actualizarDisplay(displayContent);
}

function calcular(final = true) {
    let a = parseFloat(operandoA);
    let b = parseFloat(operandoB);
    switch (operacionActual) {
        case '+':
            resultado = (a + b).toString();
            break;
        case '-':
            resultado = (a - b).toString();
            break;
        case '*':
            resultado = (a * b).toString();
            break;
        case '/':
            if (b !== 0) {
                resultado = (a / b).toString();
            } else {
                resultado = 'Error';
            }
            break;
        default:
            resultado = operandoA;
            break;
    }
    if (final) {
        displayContent = resultado;
    } else {
        displayContent = resultado + operacionActual;
    }
    actualizarDisplay(displayContent);
    operandoA = resultado;
    operandoB = '';
    if (final) {
        operacionActual = '';
        nuevaEntrada = true;
    } else {
        operacionActual = operacionActual;
        nuevaEntrada = false;
    }
}

function actualizarDisplay(valor) {
    document.getElementById('display').innerText = valor;
}