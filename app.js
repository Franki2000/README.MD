console.log("Ejecutando el sistema") 

// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema. 

// Desafío: Amigo Secreto

// 1. Crear un array para almacenar los nombres
let amigos = ["Castulo","Leonel","Alfonso","Guillermo","José Luis"];

// 2. Función para agregar amigos
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    // Validar la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return; // Detener ejecución si está vacío
    }

    // Actualizar el array de amigos
    amigos.push(nombre);

    // Actualizar la lista en pantalla
    actualizarLista();

    // Limpiar el campo de entrada
    input.value = "";
}

// 3. Función para actualizar la lista de amigos
function actualizarLista() {
    // Obtener el elemento de la lista
    let lista = document.getElementById("listaAmigos");

    // Limpiar la lista existente
    lista.innerHTML = "";

    // Iterar sobre el arreglo
    for (let i = 0; i < amigos.length; i++) {
        // Crear un nuevo <li> por cada amigo
        let li = document.createElement("li");
        li.textContent = amigos[i];

        // Agregar el <li> a la lista
        lista.appendChild(li);
    }
}

// 4. Función para sortear los amigos
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    let amigoSecreto = amigos[indiceAleatorio];

    // Mostrar el resultado en pantalla
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}

