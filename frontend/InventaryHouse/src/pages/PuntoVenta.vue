<template>
  <q-page class="punto-venta-page">
    <q-card class="punto-venta-card">
      <q-card-section class="header">
        <div class="logo">
          <img src="../assets/la-ganancia-high-resolution-logo-transparent.png" alt="La Ganancia" class="logo-img">
        </div>
        <div class="title">Punto de Venta</div>
      </q-card-section>

      <q-card-section class="buttons-section">
        <q-btn label="Usuarios" icon="/frontend/InventaryHouse/src/assets/usuario-de-perfil.png" />
        <q-btn label="Clientes" icon="/frontend/InventaryHouse/src/assets/cliente.png" />
        <q-btn label="Corte de Caja" icon="/frontend/InventaryHouse/src/assets/caja-registradora.png" />
        <q-btn label="Cancelar" icon="/frontend/InventaryHouse/src/assets/eliminar-documento.png" />
        <q-input v-model="folio" label="Folio" outlined />
      </q-card-section>

      <q-card-section class="venta-section">
        <q-input v-model="search" label="Venta de productos / Servicios" outlined>
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
        <q-btn label="Inventario" icon="/frontend/InventaryHouse/src/assets/listas-de-control.png" />
        <q-btn label="Factura" icon="/frontend/InventaryHouse/src/assets/tiked.png" />
      </q-card-section>

      <q-card-section class="table-section">
        <q-table :rows="rows" :columns="columns" />
      </q-card-section>

      <q-card-section class="actions-section">
        <q-btn label="Borrar" icon="/frontend/InventaryHouse/src/assets/borrar.png" />
        <q-btn label="Eliminar" icon="/frontend/InventaryHouse/src/assets/eliminar.png" />
        <q-btn label="Cobrar" icon="/frontend/InventaryHouse/src/assets/caja-registradora (1).png" />
        <div class="total">
          <span>$ 00.00</span>
        </div>
      </q-card-section>

      <q-card-section class="info-section">
        <div>Le atiende: <span class="info">ADMINISTRADOR</span></div>
        <div>Cliente: <span class="info">PUBLICO GENERAL</span></div>
        <div>Vendedor: <span class="info">MOSTRADOR</span></div>
        <div>Fecha: <q-date icon="/frontend/InventaryHouse/src/assets/calendario.png" v-model="date" mask="YYYY/MM/DD" /></div>
        <div>Hora: <q-time icon="/frontend/InventaryHouse/src/assets/reloj.png" v-model="time" mask="HH:mm:ss" /></div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      folio: '0001',
      search: '',
      rows: [],
      columns: [
        { name: 'cantidad', required: true, label: 'CANT.', align: 'left', field: row => row.cantidad },
        { name: 'codigo', required: true, label: 'CODIGO', align: 'left', field: row => row.codigo },
        { name: 'producto', required: true, label: 'PRODUCTO', align: 'left', field: row => row.producto },
        { name: 'precio', required: true, label: 'PRECIO', align: 'left', field: row => row.precio }
      ],
      date: '',
      time: ''
    };
  }
}
</script>

<style scoped>
.punto-venta-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #D3B6D5;
}

.punto-venta-card {
  width: 90%;
  max-width: 1000px;
  padding: 20px;
  background-color: #F3E5F5;
  border-radius: 10px;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.logo-img {
  width: 100px;
  height: auto;
}

.title {
  font-size: 24px;
  font-weight: bold;
}

.buttons-section,
.venta-section,
.table-section,
.actions-section,
.info-section {
  margin-bottom: 20px;
}

.total {
  font-size: 24px;
  font-weight: bold;
  color: #000;
}

.info {
  font-weight: bold;
  color: #000;
}
</style>
