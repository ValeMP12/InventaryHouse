<template>
  <q-layout view="hHh LpR fFf">
    <q-page-container>
      <q-page class="login-page">
        <q-card class="login-card">
          <q-card-section class="q-pt-none">
            <div class="text-center">
              <img src="../assets/la-ganancia-high-resolution-logo-transparent.png" alt="La Ganancia" class="login-logo" />
            </div>
          </q-card-section>
          <q-card-section>
            <q-form @submit.prevent="onSubmit">
              <q-input v-model="username" label="Usuario" outlined class="q-mb-md" />
              <q-input v-model="password" type="password" label="Contraseña" outlined class="q-mb-md" />
              <q-btn  type="submit" label="Entrar" color="pink" class="full-width q-mt-md" />
            </q-form>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onSubmit() {
      const router = useRouter();
      // Aquí va tu lógica de inicio de sesión
      console.log('Usuario:', this.username);
      console.log('Contraseña:', this.password);
      // Añade aquí la lógica de autenticación
      router.push('/menuPrincipal');
    }
  }
}
</script>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #D3B6D5;
}

.login-card {
  width: 450px;
  background-color: #F3E5F5;
  padding: 20px;
  border-radius: 10px;
}

.login-logo {
  width: 300px;
  height: auto;
  margin-bottom: 20px;
}

.full-width {
  width: 100%;
}

.q-mb-md {
  margin-bottom: 16px;
}

.q-mt-md {
  margin-top: 16px;
}
</style>
