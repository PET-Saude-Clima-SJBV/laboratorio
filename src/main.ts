import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';
import Inicio from './Inicio.vue';
import { prototipos } from './prototipos';
import './estilo.css';

const router = createRouter({
  // hash (#/...) funciona no GitHub Pages sem configuração extra
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Inicio },
    ...prototipos.map((p) => ({ path: `/${p.slug}`, component: p.carregar, meta: { titulo: p.titulo } })),
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
});

createApp(App).use(router).mount('#app');
