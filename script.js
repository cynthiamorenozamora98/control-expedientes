let expedientes = JSON.parse(localStorage.getItem("expedientes")) || [];

const tabla = document.getElementById("tablaExpedientes");
const form = document.getElementById("formExpediente");

function mostrarExpedientes(){

tabla.innerHTML="";

expedientes.forEach(e => {

let fila = `
<tr>
<td>${e.expediente}</td>
<td>${e.fechaEnvio}</td>
<td>${e.tipo}</td>
<td>${e.documentos}</td>
<td>${e.fechaReingreso || ""}</td>
</tr>
`;

tabla.innerHTML += fila;

});

}

form.addEventListener("submit", function(e){

e.preventDefault();

let nuevo = {

expediente: document.getElementById("expediente").value,
fechaEnvio: document.getElementById("fechaEnvio").value,
tipo: document.getElementById("tipo").value,
documentos: document.getElementById("documentos").value,
fechaReingreso: document.getElementById("fechaReingreso").value

};

expedientes.push(nuevo);

localStorage.setItem("expedientes", JSON.stringify(expedientes));

form.reset();

mostrarExpedientes();

});

mostrarExpedientes();