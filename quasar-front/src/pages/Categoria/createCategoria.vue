<template>
  <div class="q-pa-md">
    <h1>Crear Categoria</h1>
    <q-form @submit.prevent="createCategoria">
      <q-input label="Nombre" v-model="newCategoria.nombre" />
      <q-input label="Descripción" v-model="newCategoria.descripcion" />
      <q-btn type="submit" label="Crear Categoria" color="primary" class="q-mt-md" />
    </q-form>
    <div v-if="errorMessage" class="text-red">{{ errorMessage }}</div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const newCategoria = ref({
      nombre: '',
      descripcion: '',
    });
    const errorMessage = ref(null);

    const createCategoria = async () => {
      try {
        const response = await fetch('http://localhost:8085/api/categoria', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newCategoria.value),
        });
        if (response.ok) {
          console.log('Categoria creada correctamente');
          router.push('/categoria'); // Redirigir a la página de categorías después de crear la categoría
        } else {
          console.error('Error al crear categoria:', response.statusText);
          errorMessage.value = 'Error al crear categoria.';
        }
      } catch (error) {
        console.error('Error al crear categoria:', error);
        errorMessage.value = 'Error al crear categoria.';
      }
    };

    return {
      newCategoria,
      createCategoria,
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
