const listaEstudiantes = [
    { nro: 1, nombre: "Abril", apellido: "Chambi", fecNac: "12/09/2000", edad: 26, genero: "Femenino" },
    { nro: 2, nombre: "Carlos", apellido: "Mendoza", fecNac: "25/04/1998", edad: 28, genero: "Masculino" },
    { nro: 3, nombre: "Sofía", apellido: "Rodríguez", fecNac: "08/11/2001", edad: 25, genero: "Femenino" },
    { nro: 4, nombre: "Mateo", apellido: "Mamani", fecNac: "30/01/1999", edad: 27, genero: "Masculino" },
    { nro: 5, nombre: "Valentina", apellido: "Flores", fecNac: "14/06/2002", edad: 24, genero: "Femenino" },
    { nro: 6, nombre: "Lucas", apellido: "Quispe", fecNac: "19/07/2000", edad: 26, genero: "Masculino" },
    { nro: 7, nombre: "Camila", apellido: "Vargas", fecNac: "03/03/1997", edad: 29, genero: "Femenino" },
    { nro: 8, nombre: "Alejandro", apellido: "Torres", fecNac: "22/10/2003", edad: 23, genero: "Masculino" },
    { nro: 9, nombre: "Valeria", apellido: "Gutiérrez", fecNac: "17/05/2001", edad: 25, genero: "Femenino" },
    { nro: 10, nombre: "Diego", apellido: "Suárez", fecNac: "11/12/1998", edad: 27, genero: "Masculino" }
];

function mostrarEstudiantes(estudiantes) {
    const datos = document.getElementById("datos");
    const resultado = document.getElementById("resultado");

    if (estudiantes.length === 0) {
        datos.innerHTML = '<tr><td colspan="6">No se encontraron estudiantes.</td></tr>';
    } else {
        datos.innerHTML = estudiantes.map(est => `
            <tr>
                <td>${est.nro}</td>
                <td>${est.nombre}</td>
                <td>${est.apellido}</td>
                <td>${est.fecNac}</td>
                <td>${est.edad}</td>
                <td>${est.genero}</td>
            </tr>
        `).join("");
    }

    resultado.textContent = `${estudiantes.length} estudiante(s) encontrado(s).`;
}

document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formulario-persona");
    const campoBuscar = document.getElementById("buscar");
    const mensaje = document.getElementById("mensaje");
    mostrarEstudiantes(listaEstudiantes);

    formulario.addEventListener("submit", evento => {
        evento.preventDefault();

        const nuevaPersona = {
            nro: listaEstudiantes.length + 1,
            nombre: document.getElementById("nombre").value.trim(),
            apellido: document.getElementById("apellido").value.trim(),
            fecNac: document.getElementById("fecNac").value.split("-").reverse().join("/"),
            edad: document.getElementById("edad").value,
            genero: document.getElementById("genero").value
        };

        listaEstudiantes.push(nuevaPersona);
        formulario.reset();
        campoBuscar.value = "";
        mensaje.textContent = `${nuevaPersona.nombre} fue registrado(a) correctamente.`;
        mostrarEstudiantes(listaEstudiantes);
    });

    campoBuscar.addEventListener("input", () => {
        const texto = campoBuscar.value.trim().toLowerCase();
        const filtrados = listaEstudiantes.filter(est =>
            `${est.nombre} ${est.apellido}`.toLowerCase().includes(texto)
        );
        mostrarEstudiantes(filtrados);
    });
});
