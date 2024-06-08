<template>
  <q-page class="clientes-page">
    <q-card class="clientes-card">
      <q-card-section>
        <div class="header">
          <div class="title">
            <img src="../assets/la-ganancia-high-resolution-logo-transparent.png" alt="La Ganancia" class="logo" />
            <h1>CLIENTES</h1>
          </div>
        </div>
      </q-card-section>
      <q-card-section>
        <div class="actions">
          <q-input v-model="search" placeholder="Buscar cliente..." outlined class="search-input" />
          <q-btn label="Agregar" color="green" icon="add" @click="onAdd" />
          <q-btn label="Editar" color="blue" icon="edit" @click="onEdit" />
          <q-btn label="Eliminar" color="red" icon="delete" @click="onDelete" />
        </div>
        <q-table :rows="rows" :columns="columns" class="clientes-table" flat bordered dense>
        </q-table>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'ClientesPage',
  setup() {
    const search = ref('');

    const columns = [
      { name: 'id', align: 'left', label: 'ID', field: 'id' },
      { name: 'nombre', align: 'left', label: 'NOMBRE', field: 'nombre' },
      { name: 'fechaPago', align: 'left', label: 'FECHA PAGO', field: 'fechaPago' },
      { name: 'saldo', align: 'left', label: 'SALDO', field: 'saldo' }
    ];

    const rows = [
      // Aquí puedes agregar datos de ejemplo o reales
      { id: '', nombre: '', fechaPago: '', saldo: '' }
    ];

    const onAdd = () => {
      // Lógica para agregar un cliente
      console.log('Agregar cliente');
    };

    const onEdit = () => {
      // Lógica para editar un cliente
      console.log('Editar cliente');
    };

    const onDelete = () => {
      // Lógica para eliminar un cliente
      console.log('Eliminar cliente');
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
.clientes-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #D3B6D5;
}

.clientes-card {
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

.clientes-table {
  margin-top: 20px;
}
</style>
