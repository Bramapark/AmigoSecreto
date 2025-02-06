let listaAmigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    console.log(nombre);
    console.log(listaAmigos);
        // Validar que el campo no esté vacío y solo contenga letras (incluyendo espacios y tildes)
    let regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

    if (nombre === "" || !regex.test(nombre)) {
        alert("Debe ingresar un nombre válido (solo letras, sin números ni caracteres especiales).");
        return;
    }

    listaAmigos.push(nombre);
    input.value = ""; // Limpiar el input
    actualizarLista();
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("La lista de amigos está vacía. Agregue nombres primero.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSeleccionado = listaAmigos[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${amigoSeleccionado}</li>`;
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    listaAmigos.forEach(amigo => {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}