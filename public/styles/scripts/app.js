const baseUrl = 'http://localhost:8085'; // Reemplaza con la URL de tu servidor

// Función para cargar todas las categorías al cargar la página
async function loadCategorias() {
    try {
        const response = await fetch(`${baseUrl}/categorias`);
        const data = await response.json();

        const categoriasList = document.getElementById('categoriasList');
        categoriasList.innerHTML = '';
        data.forEach(categoria => {
            const li = document.createElement('li');
            li.textContent = `${categoria.id_categoria} - ${categoria.nombre} - ${categoria.descripcion}`;
            categoriasList.appendChild(li);
        });
    } catch (error) {
        console.error('Error al cargar las categorías:', error);
    }
}

// Función para cargar productos por categoría
async function loadProductosByCategoria(idCategoria) {
    try {
        const response = await fetch(`${baseUrl}/categorias/${idCategoria}`);
        const categoria = await response.json();

        const productosList = document.getElementById('productosList');
        productosList.innerHTML = '';
        if (categoria) {
            const li = document.createElement('li');
            li.textContent = `${categoria.nombre}`;
            productosList.appendChild(li);
        } else {
            const li = document.createElement('li');
            li.textContent = 'No hay productos disponibles para esta categoría';
            productosList.appendChild(li);
        }
    } catch (error) {
        console.error('Error al cargar los productos de la categoría:', error);
    }
}

// Evento para enviar el formulario de nueva categoría
const categoriaForm = document.getElementById('categoriaForm');
categoriaForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const descripcion = document.getElementById('descripcion').value;

    try {
        const response = await fetch(`${baseUrl}/categorias`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nombre, descripcion })
        });
        const nuevaCategoria = await response.json();
        console.log('Nueva categoría creada:', nuevaCategoria);

        // Recargar la lista de categorías
        loadCategorias();
    } catch (error) {
        console.error('Error al crear la categoría:', error);
    }
});

// Cargar las categorías al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    loadCategorias();
});
