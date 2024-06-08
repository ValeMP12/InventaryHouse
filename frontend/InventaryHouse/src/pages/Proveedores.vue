<template>
  <q-page class="proveedores-page">
    <q-card class="proveedores-card">
      <q-card-section>
        <div class="header">
          <div class="title">
            <img src="../assets/la-ganancia-high-resolution-logo-transparent.png" alt="La Ganancia" class="logo" />
            <h1>PROVEEDORES</h1>
          </div>
        </div>
      </q-card-section>
      <q-card-section>
        <div class="actions">
          <q-input v-model="search" placeholder="Buscar proveedor..." outlined class="search-input" />
          <q-btn label="Agregar" color="green" icon="add" @click="onAdd" />
          <q-btn label="Editar" color="blue" icon="edit" @click="onEdit" />
          <q-btn label="Eliminar" color="red" icon="delete" @click="onDelete" />
        </div>
        <q-table :rows="rows" :columns="columns" class="proveedores-table" flat bordered dense>
        </q-table>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'ProveedoresPage',
  setup() {
    const search = ref('');

    const columns = [
      { name: 'id', align: 'left', label: 'ID', field: 'id' },
      { name: 'nomEmpresa', align: 'left', label: 'NOM. EMPRESA', field: 'nomEmpresa' },
      { name: 'nomProveedor', align: 'left', label: 'NOM. PROVEEDOR', field: 'nomProveedor' },
      { name: 'dias', align: 'left', label: 'DÍAS', field: 'dias' },
      { name: 'telefono', align: 'left', label: 'TELÉFONO', field: 'telefono' },
      { name: 'direccion', align: 'left', label: 'DIRECCIÓN', field: 'direccion' }
    ];

    const rows = [
      // Aquí puedes agregar datos de ejemplo o reales
      { id: '', nomEmpresa: '', nomProveedor: '', dias: '', telefono: '', direccion: '' }
    ];

    const onAdd = () => {
      // Lógica para agregar un proveedor
      console.log('Agregar proveedor');
    };

    const onEdit = () => {
      // Lógica para editar un proveedor
      console.log('Editar proveedor');
    };

    const onDelete = () => {
      // Lógica para eliminar un proveedor
      console.log('Eliminar proveedor');
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
.proveedores-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #D3B6D5;
}

.proveedores-card {
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

.proveedores-table {
  margin-top: 20px;
}
</style>
