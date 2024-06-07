<template>
  <router-view />
</template>

<script setup>
defineOptions({
  name: 'App'
});
</script>
{
  path: '/addUser',
  name: 'addUser',
  component: AddUserComponent // Componente que representa la página para agregar usuarios
}
