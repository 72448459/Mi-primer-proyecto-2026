alert("Bienvenido ala clase de sistemas");
//crrearun programa quegestione una lista de tareas
//debe permitir!
// 1. Agregar una tarea
// 2. Eliminar tarea
// 3. Mostrar todos los tareas
// 4.Mostrar una tarea como completado
// 5.Mostrar tareas incopletos
// 6. Lista de tareas
let tareas=[];
function agregarTarea(tarea="",estado="Incompleto"){
    if (tarea === "" ){
        tarea=document.getElementById("tarea").value;
  estado= document.getElementById("tareaSelect").value;
    }
  tareas.push({descripcion: tarea, completada: estado});
}
function eliminarTarea(indice){
    if(indice >=0 && indice < tareas.length){
        tareas.splice(indice,1);
    }else{
        console.log("Indice invalido");
    }
}
function mostrarTareas(){
    console.log("Mostrar lista de tareas:");
    tareas.forEach((tarea, indice) =>{
        // console.log(´${indice+1}.[${tarea.completada ? 'completada' : 'Incompleto'}] ${tarea.descripcion}´)
        console.log(indice+1,tarea.descripcion); 
        respuestaHtml = ˋ<ul>ˋ ;
         respuestaHtml += ˋ<ul>ˋ${indice + 1}; [${tarea.descripcion}]$ˋ


                });
            }

//Adicionar los tareas
agregarTarea("Compra leche","completado");
agregarTarea("Hacer ejercico","completado");
agregarTarea("Estudiar JavaScript","Incompleto");
agregarTarea("Subir a Github","Incompleto");
mostrarTareas();   