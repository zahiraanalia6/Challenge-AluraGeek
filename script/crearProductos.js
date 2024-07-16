import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]");

async function crearProducto(evento) {
    evento.preventDefault();

    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;

    try {
        await conectaApi.crearProducto(nombre, precio, imagen);
        alert("Producto registrado correctamente!");
    } catch (error) {
        console.error("Error al crear producto:", error);
    }

    // Recargar la página
    window.location.reload(true);
}

formulario.addEventListener("submit", evento => crearProducto(evento));
