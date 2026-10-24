<script setup lang="ts">
import { computed, ref } from 'vue';
</script>

<template>
  <h1>Saúde do Laboratório</h1>
  <p>Acompanhe abaixo o status dos fluxos de trabalho automatizados do projeto.</p>

  <div class="badges">
    <p>
      <strong>Build: </strong>
      <a href="https://github.com/PET-Saude-Clima-SJBV/laboratorio/actions/workflows/build.yml" target="_blank">
        <img src="https://github.com/PET-Saude-Clima-SJBV/laboratorio/actions/workflows/build.yml/badge.svg" alt="Build Status" />
      </a>
    </p>
    <p>
      <strong>Publicação: </strong>
      <a href="https://github.com/PET-Saude-Clima-SJBV/laboratorio/actions/workflows/deploy.yml" target="_blank">
        <img src="https://github.com/PET-Saude-Clima-SJBV/laboratorio/actions/workflows/deploy.yml/badge.svg" alt="Deploy Status" />
      </a>
    </p>
  </div>

  <p>
    Consulte todas as execuções detalhadas diretamente na 
    <a href="https://github.com/PET-Saude-Clima-SJBV/laboratorio/actions" target="_blank">Aba Actions do GitHub</a>.
  </p>
</template>

<style scoped>
.badges {
  margin: 20px 0;
}
.badges p {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
