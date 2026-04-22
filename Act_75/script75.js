function calcularDescuento() {
    let items = document.getElementById("items").value, precio = document.getElementById("precio").value;

    if (items <= 0 || precio <= 0 || isNaN(items) || isNaN(precio)) {
        document.getElementById("resultado").innerHTML = `Compruebe los datos introducidos.`;
    } else if (items <= 5) {
        document.getElementById("resultado").innerHTML = `Con un descuento aplicado del <b>10%</b>, el precio final es <b>${(precio * 0.9).toFixed(2)}</b>€`.replace(".",",");
    } else if (items <= 10) {
        document.getElementById("resultado").innerHTML = `Con un descuento aplicado del <b>15%</b>, el precio final es <b>${(precio * 0.85).toFixed(2)}</b>€`.replace(".",",");
    } else {
        document.getElementById("resultado").innerHTML = `Con un descuento aplicado del <b>20%</b>, el precio final es <b>${(precio * 0.8).toFixed(2)}</b>€`.replace(".",",");
    }
}