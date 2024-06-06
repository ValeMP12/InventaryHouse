<template>
  <q-layout view="hHh LpR fFf">
    <q-page-container>
      <q-page class="menu-page">
        <div class="menu-grid">
          <q-btn v-for="item in menuItems" :key="item.label" :label="item.label" :icon="item.icon" @click="onMenuItemClick(item.route)"
                  class="menu-btn" color="primary" flat>
            <template v-slot:prepend>
              <img :src="item.image" alt="" class="menu-icon">
            </template>
          </q-btn>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MenuPrincipal'
}
</script>

<!-- <script>
export default {
  data() {
    return {
      menuItems: [
        { label: 'Clientes', image: require('../assets/personas.png'), route: '/clientes' },
        { label: 'Productos', image: require('../assets/carrito-de-supermercado.png'), route: '/productos' },
        { label: 'Proveedores', image: require('../assets/furgoneta-de-reparto.png'), route: '/proveedores' },
        { label: 'Usuarios', image: require('../assets/grupo.png'), route: '/usuarios' },
        { label: 'Ventas', image: require('../assets/grafico-de-barras.png'), route: '/ventas' },
        { label: 'Inventario', image: require('../assets/lista.png'), route: '/inventario' },
        { label: 'Gastos', image: require('../assets/gasto.png'), route: '/gastos' },
        { label: 'Punto de Venta', image: require('../assets/punto-de-venta.png'), route: '/punto-de-venta' },
        { label: 'Corte de Caja', image: require('../assets/cajero.png'), route: '/corte-de-caja' }
      ]
    };
  },
  methods: {
    onMenuItemClick(route) {
      this.$router.push(route);
    }
  }
}
</script> -->

<style scoped>
.menu-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #D3B6D5;
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  padding: 20px;
}

.menu-btn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #F3E5F5;
  border-radius: 10px;
  height: 150px;
}

.menu-icon {
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
}
</style>
