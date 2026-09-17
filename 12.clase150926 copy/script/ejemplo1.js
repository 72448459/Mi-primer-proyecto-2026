const listaEstudiantes = [
    { nro: 1, nombre: "Abril", apellido: "Chambi", fecNac: "12/09/2000", edad: "26", genero: "femenino" },
    { nro: 2, nombre: "Carlos", apellido: "Mendoza", fecNac: "25/04/1998", edad: "28", genero: "masculino" },
    { nro: 3, nombre: "Sofía", apellido: "Rodríguez", fecNac: "08/11/2001", edad: "25", genero: "femenino" },
    { nro: 4, nombre: "Mateo", apellido: "Mamani", fecNac: "30/01/1999", edad: "27", genero: "masculino" },
    { nro: 5, nombre: "Valentina", apellido: "Flores", fecNac: "14/06/2002", edad: "24", genero: "femenino" },
    { nro: 6, nombre: "Lucas", apellido: "Quispe", fecNac: "19/07/2000", edad: "26", genero: "masculino" },
    { nro: 7, nombre: "Camila", apellido: "Vargas", fecNac: "03/03/1997", edad: "29", genero: "femenino" },
    { nro: 8, nombre: "Alejandro", apellido: "Torres", fecNac: "22/10/2003", edad: "23", genero: "masculino" },
    { nro: 9, nombre: "Valeria", apellido: "Gutiérrez", fecNac: "17/05/2001", edad: "25", genero: "femenino" },
    { nro: 10, nombre: "Diego", apellido: "Suárez", fecNac: "11/12/1998", edad: "27", genero: "masculino" }
];
function mostrarEstudiantes() {
    const datos = document.getElementById("datos");
    datos.innerHTML = "";
    let fila = "";
    listaEstudiantes.forEach(
        est => {
            fila = ˋ <tr>
       <td>${est.nro}</td>
       <td>${est.nombre}</td>
       <td>${est.apellido}</td>
       <td>${est.fecNac}</td>
       <td>${est.edad}</td>
       <td>${est.genero}</td>
        </tr> 
        ˋ;
            datos.innerHTML +=fila;
        }
    );

}
mostrarEstudiantes();
alert("Hola");