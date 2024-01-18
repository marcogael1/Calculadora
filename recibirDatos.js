import { sumar, restar, multiplicar, dividir } from './operaciones.js';

const agregarPantalla = (value) => {
    if (value === '=') {
        mostrarResultado();
    } else {
        document.getElementById('display').value += value;
    }
};

document.getElementById("limpiar").addEventListener("click", limpiarPantalla);
document.getElementById("borrar").addEventListener("click", borrarUltimoCaracter);
document.getElementById("porcen").addEventListener("click", function() {
    agregarPantalla('%');
});

document.getElementById("divicion").addEventListener("click", function() {
    agregarPantalla('/');
});
document.getElementById("multiplicacion").addEventListener("click", function() {
    agregarPantalla('*');
});
document.getElementById("restar").addEventListener("click", function() {
    agregarPantalla('-');
});
document.getElementById("sumar").addEventListener("click", function() {
    agregarPantalla('+');
});

document.getElementById("0").addEventListener("click", () => agregarPantalla('0'));
document.getElementById("1").addEventListener("click", () => agregarPantalla('1'));
document.getElementById("2").addEventListener("click", () => agregarPantalla('2'));
document.getElementById("3").addEventListener("click", () => agregarPantalla('3'));
document.getElementById("4").addEventListener("click", () => agregarPantalla('4'));
document.getElementById("5").addEventListener("click", () => agregarPantalla('5'));
document.getElementById("6").addEventListener("click", () => agregarPantalla('6'));
document.getElementById("7").addEventListener("click", () => agregarPantalla('7'));
document.getElementById("8").addEventListener("click", () => agregarPantalla('8'));
document.getElementById("9").addEventListener("click", () => agregarPantalla('9'));
document.getElementById("punto").addEventListener("click", () => agregarPantalla('.'));

document.getElementById("enter").addEventListener("click", mostrarResultado);

function limpiarPantalla() {
    document.getElementById('display').value = "";
}

function borrarUltimoCaracter() {
    const displayValue = document.getElementById('display').value;
    document.getElementById('display').value = displayValue.slice(0, -1);
}

function mostrarResultado() {
    const expresion = document.getElementById('display').value;

    try {
        const resultado = evaluarExpresion(expresion);
        document.getElementById('display').value = resultado;
    } catch (error) {
        document.getElementById('display').value = "Error";
    }
}

function evaluarExpresion(expresion) {
    const regex = /(\d+)([+\-*/])(\d+)/;
    const matches = expresion.match(regex);

    if (matches) {
        const operando1 = parseFloat(matches[1]);
        const operando2 = parseFloat(matches[3]);
        const operador = matches[2];

        switch (operador) {
            case '+':
                return sumar(operando1, operando2);
            case '-':
                return restar(operando1, operando2);
            case '*':
                return multiplicar(operando1, operando2);
            case '/':
                return dividir(operando1, operando2);
            default:
                throw new Error("Operador no válido");
        }
    } else {
        throw new Error("Expresión no válida");
    }
}
