<script setup lang="ts">
/**
 * Componente reaproveitável: cartão de uma meta.
 * Uso: <CartaoMeta :meta="m" />
 */
import type { Meta } from '../dados/tipos';
defineProps<{ meta: Meta }>();
const GRUPOS: Record<number, string> = { 1: 'PET I', 2: 'PET II', 3: 'PET III', 4: 'PET IV', 5: 'PET V' };
</script>

<template>
  <article class="cartao meta">
    <div class="topo">
      <span class="codigo">{{ meta.codigo }}</span>
      <span class="selo teal">{{ GRUPOS[meta.grupo] }}</span>
      <span class="selo">Eixo {{ meta.eixo }}</span>
      <span v-if="meta.prazo_inicio != null" class="prazo">mês {{ meta.prazo_inicio }}-{{ meta.prazo_fim }}</span>
    </div>
    <p class="titulo">{{ meta.titulo }}</p>
    <p class="indicador"><strong>Indicador:</strong> {{ meta.indicador }}</p>
  </article>
</template>

<style scoped>
.meta { padding: .9rem 1.1rem; }
.topo { display: flex; gap: .4rem; align-items: center; flex-wrap: wrap; font-size: .8rem; }
.codigo { font-weight: 800; color: var(--teal-900); font-family: ui-monospace, Consolas, monospace; }
.prazo { margin-left: auto; color: var(--texto-2); }
.titulo { font-weight: 600; margin: .45rem 0 .3rem; }
.indicador { font-size: .85rem; color: var(--texto-2); margin: 0; }
</style>
