import { conectaApi } from "./conectaApi.js";
import { excluirProductos } from "./excluirProductos.js";

const lista = document.querySelector("[data-lista]");

export default function constroiCard(nombre, precio, imagen, id) {
    const producto = document.createElement("li");
    producto.className = "sesion__itens__itens";
    producto.innerHTML = `
        <div>
            <img class="sesion__itens__imagem" src="${imagen}" alt="">
            <h3 class="sesion__itens__titulo">${nombre}</h3>
            <div class="sesion__itens__valor__delete">
                <h2 class="sesion__itens__valor"><strong>R$ ${precio}</strong></h2>
                <button id="${id}" data-excluir>
                    <img src="./assets/eliminar-icon.png" alt="botao eliminar">
                </button>
            </div>
        </div>
    `;

    return producto;
}

async function listaProductos() {
    try {
        const listaApi = await conectaApi.listaProductos();
        
        if (listaApi.length > 0) {
            listaApi.forEach(elemento => {
                lista.appendChild(constroiCard(elemento.nombre, elemento.precio, elemento.imagen, elemento.id));
            });
        
            const botonesExcluir = document.querySelectorAll("[data-excluir]");
            botonesExcluir.forEach(btn => {
                btn.addEventListener("click", () => excluirProductos(btn.id));
            });
        } else {
            lista.innerHTML = `<h2 class="mensaje__titulo">No hay productos disponibles.</h2>`;
        }
        
    } catch (error) {
        lista.innerHTML = `<h2 class="mensaje__titulo">Error al listar productos. Inténtalo de nuevo más tarde.</h2>`;
        console.error("Error al listar productos", error);
    }
}

listaProductos();
