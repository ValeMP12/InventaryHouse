<template>
  <q-page class="corte-caja-page">
    <q-card class="corte-caja-card">
      <q-card-section>
        <div class="header">
          <div class="title">
            <img src="../assets/la-ganancia-high-resolution-logo-transparent.png" alt="La Ganancia" class="logo" />
            <h1>CORTE DE CAJA</h1>
          </div>
          <div class="date-time">
            <span>{{ currentDate }}</span>
            <span>{{ currentTime }}</span>
          </div>
        </div>
      </q-card-section>
      <q-card-section>
        <q-table :rows="rows" :columns="columns" class="corte-caja-table" flat bordered dense>
        </q-table>
        <div class="button-container">
          <q-btn label="Guardar" color="pink" icon="/frontend/InventaryHouse/src/assets/disquete.png" @click="onSave" />
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'CorteCaja',
  setup() {
    const currentDate = ref(new Date().toLocaleDateString());
    const currentTime = ref(new Date().toLocaleTimeString());

    const columns = [
      { name: 'tipo', align: 'left', label: '', field: 'tipo' },
      { name: 'contado', align: 'center', label: 'Contado', field: 'contado' },
      { name: 'calculado', align: 'center', label: 'Calculado', field: 'calculado' },
      { name: 'diferencia', align: 'center', label: 'Diferencia', field: 'diferencia' },
      { name: 'retiro', align: 'center', label: 'Retiro por corte', field: 'retiro' }
    ];

    const rows = [
      { tipo: 'Efectivo', contado: '', calculado: '', diferencia: '', retiro: '' },
      { tipo: 'Tarjeta', contado: '', calculado: '', diferencia: '', retiro: '' },
      { tipo: 'Crédito', contado: '', calculado: '', diferencia: '', retiro: '' },
      { tipo: 'TOTAL', contado: '', calculado: '', diferencia: '', retiro: '' }
    ];

    const onSave = () => {
      // Aquí va la lógica para guardar los datos
      console.log('Datos guardados');
    };

    return {
      currentDate,
      currentTime,
      columns,
      rows,
      onSave
    };
  }
};
</script>

<style scoped>
.corte-caja-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #D3B6D5;
}

.corte-caja-card {
  width: 900px;
  background-color: #F3E5F5;
  padding: 20px;
  border-radius: 10px;
}

.header {
  display: flex;
  justify-content: space-between;
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

.date-time {
  text-align: right;
}

.corte-caja-table {
  margin-top: 20px;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>
