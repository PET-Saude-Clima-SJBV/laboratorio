<script setup lang="ts">
import AvisoInmet from './componentes/AvisoInmet.vue';
import PrevisaoTempo from './componentes/PrevisaoTempo.vue';
import MapaCalor from './componentes/MapaCalor.vue';
import { ref } from 'vue';

// Dados simulados baseados na imagem
const avisosInmet = ref([
  {
    id: 1,
    nivel: 'Perigo Potencial',
    titulo: 'Tempestade',
    periodo: 'Em vigor até ter 06/10 às 23:59',
    descricao: 'Chuva entre 20 e 30 mm/h ou até 50 mm/dia, ventos intensos (40-60 km/h), e queda de granizo. Baixo risco de corte de energia elétrica, estragos em plantações, queda de galhos de árvores e de alagamentos.',
    acoes: 'Não atravesse ruas ou áreas alagadas. Fique longe de córregos, encostas e árvores. Desligue aparelhos elétricos se a água entrar em casa.',
    extras: [
      'Em caso de rajadas de vento: (não se abrigue debaixo de árvores, pois há leve risco de queda e descargas elétricas e não estacione veículos próximos a torres de transmissão e placas de propaganda).',
      'Evite usar aparelhos eletrônicos ligados à tomada.',
      'Obtenha mais informações junto à Defesa Civil (telefone 199) e ao Corpo de Bombeiros (telefone 193).'
    ]
  },
  {
    id: 2,
    nivel: 'Perigo Potencial',
    titulo: 'Tempestade',
    periodo: 'Começa qua 07/10 às 0h, até qua 07/10 às 23:59',
    descricao: 'Chuva entre 20 e 30 mm/h ou até 50 mm/dia, ventos intensos (40-60 km/h), e queda de granizo. Baixo risco de corte de energia elétrica, estragos em plantações, queda de galhos de árvores e de alagamentos.',
    acoes: 'Não atravesse ruas ou áreas alagadas. Fique longe de córregos, encostas e árvores. Desligue aparelhos elétricos se a água entrar em casa.',
    extras: [
      'Em caso de rajadas de vento: (não se abrigue debaixo de árvores, pois há leve risco de queda e descargas elétricas e não estacione veículos próximos a torres de transmissão e placas de propaganda).',
      'Evite usar aparelhos eletrônicos ligados à tomada.'
    ]
  }
]);
</script>

<template>
  <div class="layout-clima">
    <header class="cabecalho-verde">
      <div class="container top-bar">
        <div class="logo">
          <span class="icone-logo">🍃</span> HUB <strong>PET-Saúde Clima</strong>
        </div>
        <button class="btn-acesso">Acesso da equipe</button>
      </div>
      
      <div class="container titulos">
        <h1>Clima e saúde em São João da Boa Vista</h1>
        <p>Acompanhamento público das ações do programa PET-Saúde: Clima, uma parceria entre a UNIFAE, a Secretaria Municipal de Saúde e as instituições de ensino do município.</p>
      </div>
    </header>

    <main class="container conteudo-principal">
      <div class="lista-avisos">
        <AvisoInmet v-for="aviso in avisosInmet" :key="aviso.id" :aviso="aviso" />
      </div>

      <PrevisaoTempo />
      
      <MapaCalor />
    </main>
  </div>
</template>

<style scoped>
.layout-clima {
  font-family: sans-serif;
  background-color: #f5f5f5;
  min-height: 100vh;
}

.cabecalho-verde {
  background-color: #0d5c46;
  color: white;
  padding-bottom: 3rem;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
}

.btn-acesso {
  background: transparent;
  color: white;
  border: 1px solid white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
}

.titulos {
  margin-top: 2rem;
}

.titulos h1 {
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
}

.titulos p {
  font-size: 1rem;
  opacity: 0.9;
  max-width: 800px;
  line-height: 1.5;
}

.conteudo-principal {
  margin-top: -1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-bottom: 3rem;
}

.lista-avisos {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
