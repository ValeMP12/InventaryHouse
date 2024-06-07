<template>
  <div class="q-pa-md">
    <h1>Editar Categoria</h1>
    <q-form @submit.prevent="updateCategoria" v-if="editedCategoria">
      <q-input label="Nombre" v-model="editedCategoria.nombre" />
      <q-input label="Descripción" v-model="editedCategoria.descripcion" />
      <q-btn type="submit" label="Guardar Cambios" color="primary" class="q-mt-md" />
    </q-form>
    <div v-if="errorMessage" class="text-red">{{ errorMessage }}</div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const id_categoria = route.params.id; // Utiliza 'id_categoria' en lugar de 'categoriaId'
    const editedCategoria = ref(null);
    const errorMessage = ref(null);

    const getCategoria = async () => {
      try {
        const response = await fetch(`http://localhost:8085/api/categoria/${id_categoria}`);
        if (response.ok) {
          editedCategoria.value = await response.json();
        } else {
          console.error('Error al obtener la categoria:', response.statusText);
          errorMessage.value = 'Error al obtener la categoria.';
        }
      } catch (error) {
        console.error('Error al obtener la categoria:', error);
        errorMessage.value = 'Error al obtener la categoria.';
      }
    };

    const updateCategoria = async (event) => {
      event.preventDefault();
      try {
        const response = await fetch(`http://localhost:8085/api/categoria/${id_categoria}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(editedCategoria.value),
        });

        if (response.ok) {
          console.log('Categoria actualizada correctamente');
          router.push('/categoria'); // Redirigir a la página de categorías después de actualizar la categoría
        } else {
          console.error('Error al actualizar la categoria:', response.statusText);
          errorMessage.value = 'Error al actualizar la categoria.';
        }
      } catch (error) {
        console.error('Error al actualizar la categoria:', error);
        errorMessage.value = 'Error al actualizar la categoria.';
      }
    };

    onMounted(() => {
      getCategoria();
    });

    return {
      editedCategoria,
      updateCategoria,
      errorMessage,
    };
  },
};
</script>

<style scoped>
.text-red {
  color: red;
}
</style>
