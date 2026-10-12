<script setup lang="ts">
// Dados simulados para estruturar o layout
const horas = [
  { hora: '15:00', temp: '22°', chuva: '98%' },
  { hora: '16:00', temp: '23°', chuva: '98%' },
  { hora: '17:00', temp: '24°', chuva: '93%' },
  { hora: '18:00', temp: '20°', chuva: '88%' },
  { hora: '19:00', temp: '19°', chuva: '86%' },
];

const dias = [
  { dia: 'Hoje', max: '26°', min: '18°', chuva: '98%' },
  { dia: 'Amanhã', max: '27°', min: '18°', chuva: '61%' },
  { dia: 'Qui', max: '29°', min: '16°', chuva: '37%' },
  { dia: 'Sex', max: '30°', min: '17°', chuva: '39%' },
  { dia: 'Sáb', max: '31°', min: '17°', chuva: '57%' },
];
</script>

<template>
  <section class="cartao-clima">
    <!-- Bloco Principal -->
    <div class="clima-atual">
      <div class="temperatura-destaque">
        <div class="icone-grande">⛈️</div>
        <div>
          <div class="graus">23°<span>C</span></div>
          <p class="sensacao">Tempestade, sensação de 25°C</p>
          <p class="local">São João da Boa Vista, medido às 14:15</p>
        </div>
      </div>
      
      <div class="detalhes-grid">
        <div class="detalhe-item">
          <span>UMIDADE</span>
          <strong>82%</strong>
        </div>
        <div class="detalhe-item">
          <span>VENTO</span>
          <strong>9 km/h</strong>
        </div>
        <div class="detalhe-item">
          <span>HOJE</span>
          <strong>18° a 26°</strong>
        </div>
        <div class="detalhe-item">
          <span>UV MÁXIMO</span>
          <strong>7</strong>
        </div>
      </div>
    </div>

    <!-- Alerta Vermelho -->
    <div class="alerta-chuva">
      <strong>Chuva forte agora</strong>
      <p>Não atravesse ruas ou áreas alagadas. Fique longe de córregos e encostas.</p>
    </div>

    <!-- Previsão por Hora -->
    <div class="previsao-horas">
      <div class="hora-item" v-for="h in horas" :key="h.hora">
        <span class="horario">{{ h.hora }}</span>
        <span class="icone-pequeno">⛈️</span>
        <span class="temp-hora">{{ h.temp }}</span>
        <span class="chuva-chance">{{ h.chuva }}</span>
      </div>
    </div>

    <!-- Previsão por Dia -->
    <div class="previsao-dias">
      <div class="dia-item" v-for="d in dias" :key="d.dia">
        <span class="dia-nome">{{ d.dia }}</span>
        <span class="icone-pequeno">⛈️</span>
        <span class="temp-minmax"><strong>{{ d.max }}</strong> {{ d.min }}</span>
        <span class="chuva-chance">chuva {{ d.chuva }}</span>
      </div>
    </div>

    <div class="rodape-fontes">
      Fontes: INMET (avisos oficiais) e Open-Meteo (medições e previsão). Emergência: Defesa Civil 199, Bombeiros 193, SAMU 192.
    </div>
  </section>
</template>

<style scoped>
.cartao-clima {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.clima-atual {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 1.5rem;
}

.temperatura-destaque {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.icone-grande {
  font-size: 4rem;
}

.graus {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1;
}

.graus span {
  font-size: 1.5rem;
  vertical-align: super;
}

.sensacao {
  font-weight: 600;
  margin: 0.25rem 0;
}

.local {
  font-size: 0.8rem;
  color: #777;
  margin: 0;
}

.detalhes-grid {
  display: flex;
  gap: 2rem;
}

.detalhe-item {
  display: flex;
  flex-direction: column;
}

.detalhe-item span {
  font-size: 0.75rem;
  color: #777;
  letter-spacing: 0.5px;
}

.detalhe-item strong {
  font-size: 1.2rem;
  color: #333;
}

.alerta-chuva {
  background-color: #ffeaea;
  border-left: 4px solid #ff4d4d;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1.5rem;
}

.alerta-chuva strong {
  color: #cc0000;
  display: block;
  margin-bottom: 0.25rem;
}

.alerta-chuva p {
  margin: 0;
  font-size: 0.9rem;
  color: #555;
}

.previsao-horas {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: 1rem 0;
  margin-bottom: 1.5rem;
  overflow-x: auto;
}

.hora-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 60px;
  gap: 0.25rem;
}

.horario { font-size: 0.85rem; color: #555; }
.temp-hora { font-weight: 600; }
.chuva-chance { font-size: 0.8rem; color: #0066cc; font-weight: 600; }

.previsao-dias {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 1rem;
  margin-bottom: 1rem;
}

.dia-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 8px;
  gap: 0.25rem;
}

.dia-nome { font-weight: 600; }
.temp-minmax { font-size: 0.9rem; color: #555; }

.rodape-fontes {
  font-size: 0.75rem;
  color: #888;
  text-align: left;
}
</style>
