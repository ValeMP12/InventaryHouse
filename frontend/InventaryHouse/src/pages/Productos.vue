<template>
  <q-page class="productos-page">
    <q-card class="productos-card">
      <q-card-section>
        <div class="header">
          <div class="title">
            <img src="../assets/la-ganancia-high-resolution-logo-transparent.png" alt="La Ganancia" class="logo" />
            <h1>PRODUCTOS</h1>
          </div>
        </div>
      </q-card-section>
      <q-card-section>
        <div class="actions">
          <q-input v-model="search" placeholder="Buscar producto..." outlined class="search-input" icon="/frontend/InventaryHouse/src/assets/lista-de-verificacion.png" />
          <q-btn label="Agregar" color="#D9D9D9" icon="/frontend/InventaryHouse/src/assets/agregar-producto.png" @click="onAdd" />
          <q-btn label="Editar" color="#D9D9D9" icon="/frontend/InventaryHouse/src/assets/editar.png" @click="onEdit" />
          <q-btn label="Eliminar" color="#D9D9D9" icon="/frontend/InventaryHouse/src/assets/borrar.png" @click="onDelete" />
        </div>
        <q-table :rows="rows" :columns="columns" class="productos-table" flat bordered dense>
        </q-table>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'ProductosPages',
  setup() {
    const search = ref('');

    const columns = [
      { name: 'cantidad', align: 'left', label: 'CANT.', field: 'cantidad' },
      { name: 'codigo', align: 'left', label: 'CODIGO', field: 'codigo' },
      { name: 'producto', align: 'left', label: 'PRODUCTO', field: 'producto' },
      { name: 'idProveedor', align: 'left', label: 'ID PROV.', field: 'idProveedor' },
      { name: 'categoria', align: 'left', label: 'CATEGORIA', field: 'categoria' },
      { name: 'precioUnitario', align: 'left', label: 'PRECIO UNIT.', field: 'precioUnitario' },
      { name: 'precioVenta', align: 'left', label: 'PRECIO VENT.', field: 'precioVenta' }
    ];

    const rows = [
      // Aquí puedes agregar datos de ejemplo o reales
      { cantidad: '', codigo: '', producto: '', idProveedor: '', categoria: '', precioUnitario: '', precioVenta: '' }
    ];

    const onAdd = () => {
      // Lógica para agregar un producto
      console.log('Agregar producto');
    };

    const onEdit = () => {
      // Lógica para editar un producto
      console.log('Editar producto');
    };

    const onDelete = () => {
      // Lógica para eliminar un producto
      console.log('Eliminar producto');
    };

    return {
      search,
      columns,
      rows,
      onAdd,
      onEdit,
      onDelete
    };
  }
};
</script>

<style scoped>
.productos-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #D3B6D5;
}

.productos-card {
  width: 900px;
  background-color: #F3E5F5;
  padding: 20px;
  border-radius: 10px;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.title {
  display: flex;
  align-items: center;
}

.logo {
  width: 50px;
  height: auto;
  margin-right: 10px;
}

.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.search-input {
  width: 200px;
}

.productos-table {
  margin-top: 20px;
}
</style>
