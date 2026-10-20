<template>
  <div>
    <h2>Fila de Validação (S02)</h2>
    
    <div v-for="(atividades, pessoa) in atividadesAgrupadas" :key="pessoa" class="cartao" style="margin-bottom: 20px;">
      <h3>{{ pessoa }}</h3>
      
      <ul>
        <li v-for="atividade in atividades" :key="atividade.id" style="margin-bottom: 15px;">
          <strong>{{ atividade.tipo }}</strong> ({{ atividade.horas }}h) - {{ atividade.descricao }}
          <br>
          <span class="selo" style="margin-right: 10px;">Status: {{ atividade.status }}</span>
          
          <a v-if="atividade.evidencia" :href="atividade.evidencia" target="_blank">Acessar Evidência</a>
          <span v-else style="color: red; font-size: 0.9em; font-weight: bold;">(Evidência Ausente)</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import atividadesJson from '../../dados/atividades-ficticias.json';


const atividadesAgrupadas = computed(() => {
  const grupos = {};
  
  atividadesJson.forEach(atividade => {
    if (!grupos[atividade.pessoa]) {
      grupos[atividade.pessoa] = [];
    }
    grupos[atividade.pessoa].push(atividade);
  });
  
  return grupos;
});
</script>
