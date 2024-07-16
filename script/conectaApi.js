// http://localhost:3000/productos

async function listaProductos() {
    try {
        const conexion = await fetch("http://localhost:3000/productos");
        if (!conexion.ok) {
            throw new Error("Error al obtener la lista de productos");
        }
        const conexionConvertida = await conexion.json();
        return conexionConvertida;
    } catch (error) {
        console.error("Error al obtener la lista de productos:", error);
        throw error;
    }
}

async function crearProducto(nombre, precio, imagen, id) {
    try {
        const conexion = await fetch("http://localhost:3000/productos", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                nombre: nombre,
                precio: precio,
                imagen: imagen,
                id: id
            })
        });

        if (!conexion.ok) {
            throw new Error("Error al crear el producto");
        }

        const conexionConvertida = await conexion.json();
        return conexionConvertida;
    } catch (error) {
        console.error("Error al crear el producto:", error);
        throw error;
    }
}

async function excluirProductos(ProductoId) {
    try {
        const conexion = await fetch(`http://localhost:3000/productos/${ProductoId}`, {
            method: "DELETE",
        });

        if (!conexion.ok) {
            throw new Error("Error al eliminar el producto");
        }

        const data = await conexion.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error al eliminar producto:", error);
        throw error;
    }
}

async function buscarProducto(termoDeBusca) {
    try {
        const conexion = await fetch(`http://localhost:3000/productos?buscar=${termoDeBusca}`);
        if (!conexion.ok) {
            throw new Error("Error al buscar productos");
        }
        const conexionConvertida = await conexion.json();
        return conexionConvertida;
    } catch (error) {
        console.error("Error al buscar productos:", error);
        throw error;
    }
}

export const conectaApi = {
    listaProductos,
    crearProducto,
    buscarProducto,
    excluirProductos,
};
