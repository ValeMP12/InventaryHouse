<template>
  <div class="q-pa-md">
    <q-table
      flat
      bordered
      title="Categorias"
      :rows="categorias"
      :columns="columns"
      row-key="id_categoria"
    >
      <template v-slot:top>
        <q-btn icon="add" label="Crear" color="primary" @click="$router.push('/createCategoria')" />
      </template>
      <template v-slot:body="props">
        <q-tr :props="props" @click="onRowClick(props.row)">
          <q-td key="id_categoria" :props="props">
            {{ props.row.id_categoria }}
          </q-td>
          <q-td key="nombre" :props="props">
            {{ props.row.nombre }}
          </q-td>
          <q-td key="descripcion" :props="props">
            {{ props.row.descripcion }}
          </q-td>
          <q-td key="actions" :props="props" class="text-center">
            <q-btn
              icon="edit"
              round
              dense
              color="blue"
              @click="$router.push({ name: 'updateCategoria', params: { id: props.row.id_categoria } })"
            />
            <q-btn
              icon="delete"
              round
              dense
              color="red"
              @click="deleteCategoria(props.row.id_categoria)"
            />
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categorias: [],
      columns: [
        { name: "id_categoria", label: "ID" },
        { name: "nombre", label: "Nombre" },
        { name: "descripcion", label: "Descripción" },
        { name: "actions", label: "Acciones", align: "center" },
      ],
    };
  },
  mounted() {
    this.getCategorias();
  },
  methods: {
    async getCategorias() {
      const response = await fetch("http://localhost:8085/api/categoria");
      this.categorias = await response.json();
    },
    async deleteCategoria(id_categoria) {
      try {
        const response = await fetch(`http://localhost:8085/api/categoria/${id_categoria}`, {
          method: 'DELETE'
        });
        if (response.ok) {
          console.log(`Categoria con ID ${id_categoria} eliminada correctamente`);
          this.getCategorias();
        } else {
          console.error('Error al eliminar la categoria:', response.statusText);
        }
      } catch (error) {
        console.error('Error al eliminar la categoria:', error);
      }
    },
    async onRowClick(row) {},
  },
};
</script>

<style scoped>
.text-center {
  text-align: center;
}
</style>
