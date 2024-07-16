import { conectaApi } from "./conectaApi.js";

async function excluirProductos(ProductoId) {
    try {
        await conectaApi.excluirProductos(ProductoId);
        alert("Producto eliminado correctamente!");
    } catch (error) {
        console.error("Error al eliminar el producto:", error);
    }

    // Recargar la página
    window.location.reload(true);
}

export { excluirProductos };
