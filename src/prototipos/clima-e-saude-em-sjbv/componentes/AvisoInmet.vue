<script setup lang="ts">
export interface Alerta {
  nivel: string;
  titulo: string;
  periodo: string;
  descricao: string;
  acoes: string;
  extras: string[];
}

defineProps<{ aviso: Alerta }>();
</script>

<template>
  <article class="cartao-aviso">
    <div class="cabecalho-aviso">
      <span class="label-oficial">AVISO OFICIAL INMET</span>
      <span class="badge-perigo">{{ aviso.nivel }}</span>
    </div>
    
    <h2 class="titulo-tempestade">{{ aviso.titulo }}</h2>
    <p class="periodo"><strong>{{ aviso.periodo.split(' ')[0] }} {{ aviso.periodo.split(' ')[1] }}</strong> {{ aviso.periodo.substring(aviso.periodo.indexOf(' ')+1) }}</p>
    
    <p class="texto">{{ aviso.descricao }}</p>
    
    <div class="box-acoes">
      <p><strong>O que fazer:</strong> {{ aviso.acoes }}</p>
    </div>
    
    <p class="texto-extra" v-for="(extra, index) in aviso.extras" :key="index">
      {{ extra }}
    </p>
  </article>
</template>

<style scoped>
.cartao-aviso {
  background: white;
  border: 3px solid #fce83a;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.cabecalho-aviso {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.label-oficial {
  font-weight: 700;
  font-size: 0.85rem;
  color: #333;
  letter-spacing: 0.5px;
}

.badge-perigo {
  background-color: #fce83a;
  color: #555;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 700;
}

.titulo-tempestade {
  font-size: 1.8rem;
  margin: 0 0 0.5rem 0;
  color: #222;
}

.periodo {
  font-size: 0.95rem;
  color: #555;
  margin-bottom: 1rem;
}

.texto, .texto-extra {
  font-size: 0.95rem;
  color: #444;
  line-height: 1.6;
  margin-bottom: 0.75rem;
}

.box-acoes {
  background-color: #fafafa;
  border-left: 3px solid #fce83a;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 0 4px 4px 0;
}

.box-acoes p {
  margin: 0;
  font-size: 0.95rem;
  color: #444;
  line-height: 1.5;
}
</style>
