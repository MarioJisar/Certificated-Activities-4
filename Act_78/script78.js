function Persona(DNI, nombre, apellidos, direccion, codigoPostal, ciudad, telefono, email, fechaNacimiento) {
    this.DNI = DNI;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.direccion = direccion;
    this.codigoPostal = codigoPostal;
    this.ciudad = ciudad;
    this.telefono = telefono;
    this.email = email;
    this.fechaNacimiento = fechaNacimiento;
    this.detalle = function () {
        return `DNI: ${this.DNI}<br>
        Nombre: ${this.nombre}<br>
        Apellidos: ${this.apellidos}<br>
        Dirección: ${this.direccion}<br>
        Código Postal: ${this.codigoPostal}<br>
        Ciudad: ${this.ciudad}<br>
        Teléfono: ${this.telefono}<br>
        Email: ${this.email}<br>
        Fecha de nacimiento: ${this.fechaNacimiento}<hr>`;
    };
}

let personas = [];

document.getElementById("crearPersona").addEventListener("click", function () {
    let persona = new Persona(
        document.getElementById('DNI').value,
        document.getElementById('nombre').value,
        document.getElementById('apellidos').value,
        document.getElementById('direccion').value,
        document.getElementById('codigoPostal').value,
        document.getElementById('ciudad').value,
        document.getElementById('telefono').value,
        document.getElementById('email').value,
        document.getElementById('fechaNacimiento').value
    );

    personas.push();

    document.getElementById('resultado').innerHTML += persona.detalle();
});