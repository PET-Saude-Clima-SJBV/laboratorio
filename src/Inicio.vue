<script setup lang="ts">
import { prototipos } from './prototipos';
</script>

<template>
  <h1>Laboratório do Grupo PET II</h1>
  <p class="sub">Espaço para treinar o fluxo de desenvolvimento do HUB e criar protótipos. Pode errar à vontade: nada aqui chega ao sistema real.</p>

  <section class="cartao">
    <h2>Como criar o seu protótipo</h2>
    <ol class="passos">
      <li><strong>Traga as novidades:</strong> <code>git pull</code></li>
      <li><strong>Crie um arquivo</strong> em <code>src/prototipos/</code>, por exemplo <code>ApresentacaoSofia.vue</code>. Copie o <code>Exemplo.vue</code> para começar.</li>
      <li><strong>Rode na sua máquina</strong> com <code>npm run dev</code>. O seu protótipo aparece sozinho no menu.</li>
      <li><strong>Registre e envie:</strong> <code>git add .</code>, <code>git commit -m "O que você fez"</code>, <code>git pull</code>, <code>git push</code></li>
      <li><strong>Em alguns minutos</strong> o protótipo fica no ar no link público do laboratório.</li>
    </ol>
  </section>

  <div class="grade duas espaco">
    <section class="cartao">
      <h2>O que você já tem pronto</h2>
      <ul>
        <li><code>src/dados/metas.json</code>: as 45 metas oficiais do projeto</li>
        <li><code>src/dados/territorios.json</code>: as 14 unidades de saúde (PSF, UBS, USF)</li>
        <li><code>src/estilo.css</code>: as cores e os estilos do HUB (classes <code>cartao</code>, <code>botao</code>, <code>selo</code>, <code>tabela</code>...)</li>
        <li><code>src/componentes/</code>: componentes reaproveitáveis. Criou algo útil? Coloque aqui para os colegas usarem.</li>
      </ul>
    </section>
    <section class="cartao">
      <h2>Regras</h2>
      <ul>
        <li>Só dados fictícios. Nunca dado real de pessoa.</li>
        <li>Mexa só no seu arquivo de protótipo e em componentes novos.</li>
        <li>Sem senhas, tokens ou chaves no código.</li>
      </ul>
    </section>
  </div>

  <p class="miudo">{{ prototipos.length }} protótipo(s) no laboratório. Exercícios guiados: <code>docs/exercicios.md</code>.</p>
</template>

<style scoped>
.passos { margin: 0; padding-left: 1.2rem; display: flex; flex-direction: column; gap: .55rem; line-height: 1.5; }
ul { margin: 0; padding-left: 1.2rem; line-height: 1.7; }
code { background: #EEF0EC; border-radius: 4px; padding: .05rem .35rem; font-size: .88em; }
.espaco { margin-top: 1rem; }
.miudo { color: var(--texto-2); font-size: .85rem; margin-top: 1rem; }
</style>
