let opearandoA;
let operandoB;
let operacion;

function init() {
// Variables
    let operador = document.getElementById('op');
    let screen = document.getElementById('screen');
    let resultado = document.getElementById('igual');
    let sumar = document.getElementById('suma');
    let restar = document.getElementById('resta');
    let producto = document.getElementById('multiplicacion');
    let dividir = document.getElementById('divide');
    let num1 = document.getElementById('uno');
    let num2 = document.getElementById('dos');
    let num3 = document.getElementById('tres');
    let num4 = document.getElementById('cuatro');
    let num5 = document.getElementById('cinco');
    let num6 = document.getElementById('seis');
    let num7 = document.getElementById('siete');
    let num8 = document.getElementById('ocho');
    let num9 = document.getElementById('nueve');
    let num0 = document.getElementById('cero');

// Eventos
    num1.onclick = function(e) {
        screen.textContent = screen.textContent + '1';
    }

    num2.onclick = function(e) {
        screen.textContent = screen.textContent + '2';
    }

    num3.onclick = function(e) {
        screen.textContent = screen.textContent + '3';
    }

    num4.onclick = function(e) {
        screen.textContent = screen.textContent + '4';
    }

    num5.onclick = function(e) {
        screen.textContent = screen.textContent + '5';
    }

    num6.onclick = function(e) {
        screen.textContent = screen.textContent + '6';
    }

    num7.onclick = function(e) {
        screen.textContent = screen.textContent + '7';
    }

    num8.onclick = function(e) {
        screen.textContent = screen.textContent + '8';
    }

    num9.onclick = function(e) {
        screen.textContent = screen.textContent + '9';
    }

    num0.onclick = function(e) {
        screen.textContent = screen.textContent + '0';
    }

// Operaciones  
    sumar.onclick = function(e) {
        opearandoA = screen.textContent;
        operacion = '+';
        operador.textContent = '+';
        limpiar();
    }

    restar.onclick = function(e) {
        opearandoA = screen.textContent;
        operacion = '-';
        operador.textContent = '-';
        limpiar();
    }

    producto.onclick = function(e) {
        opearandoA = screen.textContent;
        operacion = '*';
        operador.textContent = 'x';
        limpiar();
    }

    dividir.onclick = function(e) {
        opearandoA = screen.textContent;
        operacion = '/';
        operador.textContent = '/';
        limpiar();
    }

    resultado.onclick = function(e) {
        operandoB = screen.textContent;
        screen.textContent = resolver();
    }

}

function limpiar() {
    document.getElementById('screen').textContent = '';
}

function resetear() {
    document.getElementById('screen').textContent = '';
    document.getElementById('op').textContent = '';
    opearandoA = 0;
    operandoB = 0;
    operacion = '';
}

function resolver() {
    let res = 0;
    switch (operacion) {
        case '+':
            res = parseFloat(opearandoA) + parseFloat(operandoB);
            break;

        case '-':
                res = parseFloat(opearandoA) - parseFloat(operandoB);
                break;

         case '*':
            res = parseFloat(opearandoA) * parseFloat(operandoB);
            break;

         case '/':
            res = parseFloat(opearandoA) / parseFloat(operandoB);
            break;
    }
    resetear();
    return res;
}
