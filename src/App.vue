<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { prototipos } from './prototipos';

const rota = useRoute();
const menuAberto = ref(false);
const base = import.meta.env.BASE_URL; // '/' na sua máquina, '/laboratorio/' no GitHub Pages
watch(() => rota.path, () => (menuAberto.value = false));
</script>

<template>
  <div class="faixa">Laboratório: espaço de treino com dados fictícios. Nada aqui afeta o HUB.</div>
  <div class="casca">
    <aside class="lateral" :class="{ aberta: menuAberto }">
      <div class="marca">
        <img :src="base + 'pet-saude-clima.png'" alt="PET-Saúde Clima" />
        <div><strong>Laboratório</strong><span>PET-Saúde Clima</span></div>
        <button class="hamburguer" :aria-expanded="menuAberto" aria-label="Menu" @click="menuAberto = !menuAberto">☰</button>
      </div>
      <nav>
        <RouterLink to="/" class="item" :class="{ ativo: rota.path === '/' }">Como funciona</RouterLink>
        <div class="grupo">Protótipos ({{ prototipos.length }})</div>
        <RouterLink v-for="p in prototipos" :key="p.slug" :to="`/${p.slug}`" class="item" :class="{ ativo: rota.path === `/${p.slug}` }">
          {{ p.titulo }}
        </RouterLink>
      </nav>
    </aside>
    <main class="conteudo"><RouterView /></main>
  </div>
</template>

<style scoped>
.faixa { text-align: center; font-size: .8rem; font-weight: 700; padding: .3rem; color: #3b2a07; background: var(--ambar); }
.casca { display: flex; min-height: 100vh; }
.lateral { width: 240px; flex-shrink: 0; background: var(--teal-900); color: #CFE3DF; display: flex; flex-direction: column; padding: 1rem .75rem; position: sticky; top: 0; height: 100vh; overflow-y: auto; }
.marca { display: flex; align-items: center; gap: .6rem; padding: 0 .35rem 1rem; }
.marca img { width: 42px; height: 42px; object-fit: contain; background: #fff; border-radius: 10px; padding: 3px; }
.marca strong { display: block; color: #fff; font-size: 1.1rem; line-height: 1; }
.marca span { color: var(--ambar); font-size: .78rem; font-weight: 600; }
.hamburguer { display: none; margin-left: auto; background: none; border: 0; color: #fff; font-size: 1.4rem; cursor: pointer; }
nav { display: flex; flex-direction: column; gap: .15rem; }
.item { color: #CFE3DF; text-decoration: none; padding: .45rem .7rem; border-radius: 7px; font-size: .9rem; }
.item:hover { background: rgba(255, 255, 255, .07); }
.item.ativo { background: var(--teal-700); color: #fff; font-weight: 600; }
.grupo { font-size: .72rem; font-weight: 700; text-transform: uppercase; letter-spacing: .08em; opacity: .7; padding: .9rem .7rem .3rem; }
.conteudo { flex: 1; padding: 2rem; max-width: 1150px; min-width: 0; }
@media (max-width: 760px) {
  .casca { flex-direction: column; }
  .lateral { width: auto; height: auto; position: static; }
  .hamburguer { display: block; }
  .lateral:not(.aberta) nav { display: none; }
  .marca { padding-bottom: 0; }
  .lateral.aberta .marca { padding-bottom: 1rem; }
  .conteudo { padding: 1.25rem 1rem; }
}
</style>
