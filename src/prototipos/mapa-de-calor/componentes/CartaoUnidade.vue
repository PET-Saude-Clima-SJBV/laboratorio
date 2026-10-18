<script setup lang="ts">
/** Componente só desta área: não aparece no menu. */
import type { Territorio } from '../../../dados/tipos';
defineProps<{ unidade: Territorio }>();
</script>

<template>
  <article class="cartao">
    <span class="selo azul">{{ unidade.sigla }}</span>
    <p class="nome">{{ unidade.nome }}</p>
  </article>
</template>

<style scoped>
.nome { margin: .5rem 0 0; font-weight: 600; }
</style>
