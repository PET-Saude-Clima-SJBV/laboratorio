<template>
  <div>
    <h2>Fila de Validação (S03)</h2>
    
    <div v-for="(lista, pessoa) in atividadesAgrupadas" :key="pessoa" class="cartao" style="margin-bottom: 20px;">
      <h3>{{ pessoa }}</h3>
      
      <ul style="list-style: none; padding-left: 0;">
        <li v-for="atividade in lista" :key="atividade.id" style="margin-bottom: 15px;">
          
          
          <strong>{{ atividade.tipo }}</strong> ({{ atividade.horas }}h) - {{ atividade.descricao }} 
          <input type="checkbox" v-model="atividade.selecionada"/>
          
          <span class="selo" style="margin-right: 10px;">Status: {{ atividade.status }}</span>
          
          <a v-if="atividade.evidencia" :href="atividade.evidencia" target="_blank">Acessar Evidência</a>
          <span v-else style="color: red; font-size: 0.9em; font-weight: bold;">(Falta Evidência)</span>
          <br><br>
        </li>
      </ul>

      <button 
        class="botao" 
        :disabled="!podeValidar(pessoa)"
        @click="validarSemana(pessoa)"
        style="margin-top: 10px;"
      >
        Validar semana de {{ pessoa }}
      </button>
      
      <p v-if="!podeValidar(pessoa) && lista.length > 0" style="color: red; font-size: 0.8em; margin-top: 5px;">
        Botão bloqueado: Há atividades desta pessoa sem link de evidência.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import atividadesJson from '../../dados/atividades-ficticias.json'; 

const atividades = ref(atividadesJson.map(a => ({ ...a, selecionada: true })));

const atividadesAgrupadas = computed(() => {
  const grupos = {};
  atividades.value.forEach(atividade => {
    if (atividade.status !== 'validada') {
      if (!grupos[atividade.pessoa]) grupos[atividade.pessoa] = [];
      grupos[atividade.pessoa].push(atividade);
    }
  });
  return grupos;
});

const podeValidar = (pessoa) => {
  const lista = atividadesAgrupadas.value[pessoa];
  if (!lista || lista.length === 0) return false;
  
  const temFaltaDeEvidencia = lista.some(atividade => !atividade.evidencia || atividade.evidencia.trim() === '');
  return !temFaltaDeEvidencia;
};
const validarSemana = (pessoa) => {
  atividades.value.forEach(atividade => {
    if (atividade.pessoa === pessoa) {
      atividade.status = 'validada';
    }
  });
  alert(`Semana de ${pessoa} validada com sucesso!`);
};
</script>