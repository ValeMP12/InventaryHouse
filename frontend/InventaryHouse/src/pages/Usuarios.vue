<template>
  <q-page class="usuarios-page">
    <q-card class="usuarios-card">
      <q-card-section>
        <div class="header">
          <div class="title">
            <img src="../assets/la-ganancia-high-resolution-logo-transparent.png" alt="La Ganancia" class="logo" />
            <h1>USUARIOS</h1>
          </div>
        </div>
      </q-card-section>
      <q-card-section>
        <div class="actions">
          <q-input v-model="search" placeholder="Buscar usuario..." outlined class="search-input" />
          <q-btn label="Agregar" color="green" icon="add" @click="onAdd" />
          <q-btn label="Editar" color="blue" icon="edit" @click="onEdit" />
          <q-btn label="Eliminar" color="red" icon="delete" @click="onDelete" />
        </div>
        <q-table :rows="rows" :columns="columns" class="usuarios-table" flat bordered dense>
        </q-table>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'UsuariosPage',
  setup() {
    const search = ref('');

    const columns = [
      { name: 'id', align: 'left', label: 'ID', field: 'id' },
      { name: 'nombre', align: 'left', label: 'NOMBRE', field: 'nombre' },
      { name: 'cargo', align: 'left', label: 'CARGO', field: 'cargo' },
      { name: 'horario', align: 'left', label: 'HORARIO', field: 'horario' },
      { name: 'turno', align: 'left', label: 'TURNO', field: 'turno' },
      { name: 'telefono', align: 'left', label: 'TELÉFONO', field: 'telefono' }
    ];

    const rows = [
      // Aquí puedes agregar datos de ejemplo o reales
      { id: '', nombre: '', cargo: '', horario: '', turno: '', telefono: '' }
    ];

    const onAdd = () => {
      // Lógica para agregar un usuario
      console.log('Agregar usuario');
    };

    const onEdit = () => {
      // Lógica para editar un usuario
      console.log('Editar usuario');
    };

    const onDelete = () => {
      // Lógica para eliminar un usuario
      console.log('Eliminar usuario');
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
.usuarios-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #D3B6D5;
}

.usuarios-card {
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

.usuarios-table {
  margin-top: 20px;
}
</style>
