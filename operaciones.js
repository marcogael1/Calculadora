export const sumar = (v1, v2) => v1 + v2;
export const restar = (v1, v2) => v1 - v2;
export const multiplicar = (v1, v2) => v1 * v2;
export const dividir = (v1, v2) => {
    if (v2 === 0) {
        return "Operación no permitida";
    } else {
        return v1 / v2;
    }
};
