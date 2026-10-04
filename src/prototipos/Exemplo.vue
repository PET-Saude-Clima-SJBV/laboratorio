<script setup lang="ts">
/**
 * PROTÓTIPO DE EXEMPLO: copie este arquivo para começar o seu.
 * Mostra as metas oficiais com filtro por grupo e por eixo, usando:
 *   - dados prontos (src/dados/metas.json)
 *   - um componente reaproveitável (src/componentes/CartaoMeta.vue)
 *   - as classes de estilo do HUB (cartao, selo, botao...)
 */
import { computed, ref } from 'vue';
import metas from '../dados/metas.json';
import CartaoMeta from '../componentes/CartaoMeta.vue';
import type { Meta } from '../dados/tipos';

const grupo = ref<number | null>(null);
const eixo = ref('');
const busca = ref('');

const filtradas = computed(() => (metas as Meta[])
  .filter((m) => !grupo.value || m.grupo === grupo.value)
  .filter((m) => !eixo.value || m.eixo === eixo.value)
  .filter((m) => !busca.value || m.titulo.toLowerCase().includes(busca.value.toLowerCase())));
</script>

<template>
  <h1>Exemplo: metas do projeto</h1>
  <p class="sub">Filtre as 45 metas oficiais. Abra <code>src/prototipos/Exemplo.vue</code> para ver como foi feito.</p>

  <section class="cartao filtros">
    <div class="abas">
      <button :class="{ ativa: !grupo }" @click="grupo = null">Todos</button>
      <button v-for="g in 5" :key="g" :class="{ ativa: grupo === g }" @click="grupo = g">PET {{ ['I', 'II', 'III', 'IV', 'V'][g - 1] }}</button>
    </div>
    <div class="linha">
      <select v-model="eixo"><option value="">Todos os eixos</option><option v-for="e in ['I', 'II', 'III']" :key="e" :value="e">Eixo {{ e }}</option></select>
      <input v-model="busca" placeholder="Buscar meta..." />
    </div>
  </section>

  <p class="contagem">{{ filtradas.length }} meta(s)</p>
  <div class="lista">
    <CartaoMeta v-for="m in filtradas" :key="m.codigo" :meta="m" />
  </div>
</template>

<style scoped>
.filtros { display: flex; flex-direction: column; gap: .75rem; margin-bottom: 1rem; }
.abas { display: flex; gap: .25rem; flex-wrap: wrap; }
.abas button { border: 1px solid var(--borda); background: #fff; padding: .35rem .8rem; border-radius: 999px; font: inherit; font-size: .85rem; cursor: pointer; }
.abas button.ativa { background: var(--teal-700); border-color: var(--teal-700); color: #fff; font-weight: 600; }
.linha { display: flex; gap: .5rem; flex-wrap: wrap; }
.linha select { max-width: 200px; }
.linha input { max-width: 300px; }
.contagem { color: var(--texto-2); font-size: .85rem; }
.lista { display: flex; flex-direction: column; gap: .5rem; }
code { background: #EEF0EC; border-radius: 4px; padding: .05rem .35rem; }
</style>
