<script setup lang="ts">
/**
 * EXEMPLO DE ÁREA: copie a pasta "exemplo-de-area" e troque o nome pela sua área
 * (ex.: "mapa-de-calor", "alertas", "indicadores").
 *   - cada arquivo .vue direto na pasta vira uma página no menu, dentro da sua área
 *   - a subpasta "componentes/" guarda peças só da sua área (não viram página)
 */
import { computed, ref } from 'vue';
import territorios from '../../dados/territorios.json';
import CartaoUnidade from './componentes/CartaoUnidade.vue';
import type { Territorio } from '../../dados/tipos';

const busca = ref('');
const lista = computed(() => (territorios as Territorio[])
  .filter((t) => `${t.sigla} ${t.nome}`.toLowerCase().includes(busca.value.toLowerCase())));
</script>

<template>
  <h1>Unidades de saúde</h1>
  <p class="sub">Exemplo de página de uma área, com um componente próprio da área.</p>
  <input v-model="busca" placeholder="Buscar unidade" class="busca" />
  <div class="grade-unidades">
    <CartaoUnidade v-for="t in lista" :key="t.codigo" :unidade="t" />
  </div>
</template>

<style scoped>
.busca { max-width: 360px; margin-bottom: 1rem; }
.grade-unidades { display: grid; gap: .75rem; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); }
</style>
