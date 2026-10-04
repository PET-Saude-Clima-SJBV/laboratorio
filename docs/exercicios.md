# Exercícios do laboratório

Faça em ordem. Cada exercício termina com um PR. Assim você pratica o fluxo inteiro várias vezes antes do projeto real.

## 1. Primeiro PR (Git e fluxo)

1. Clone o repositório e rode `npm install` e `npm run dev`.
2. Crie a branch `feature/seunome-apresentacao` a partir da `main`.
3. Crie `src/prototipos/ApresentacaoSeuNome.vue` com o seu nome, curso e uma frase sobre o que quer aprender.
4. Commit, push e PR para `dev`. Leia as checagens automáticas no PR.
5. Depois da aprovação, abra o PR da **mesma branch** para `hml` e, por fim, para `main`.

**Objetivo:** entender branch, commit, PR, revisão e os três degraus.

## 2. Usar os dados prontos (Vue)

Na sua branch nova, crie um protótipo que lista as **unidades de saúde** de `src/dados/territorios.json`
em cartões, com uma busca por nome.

**Objetivo:** importar JSON, `ref`, `computed`, `v-for`, `v-model`.

## 3. Componente reaproveitável

Crie em `src/componentes/` um componente que outro colega possa usar (ex.: `SeloSituacao.vue`, que recebe
`nao_iniciado | em_andamento | em_atraso | concluido` e mostra o selo colorido). Use-o no seu protótipo e
explique no PR como usar.

**Objetivo:** `props`, componentização, documentar para o colega.

## 4. Resolver um conflito

Combine com um colega: os dois alteram a mesma linha de `src/componentes/CartaoMeta.vue` em branches diferentes.
O segundo a abrir o PR para `dev` resolve o conflito com a branch `merge/` (veja o CONTRIBUTING).

**Objetivo:** conflito sem contaminar a sua `feature/`.

## 5. Protótipo da sua frente

Faça uma primeira versão da tela da sua frente na trilha de estudos (importador da planilha, mapa, motor de alerta,
Kanban, app da população, painel de indicadores...). Pode ser só a tela, com dados fictícios em JSON.

**Objetivo:** chegar na reunião com algo para mostrar e discutir.

---

**Dica:** abra o projeto real (`hub-pet-saude`) para estudar como as telas foram feitas: `frontend/src/views/`
e `frontend/src/components/`. Você pode copiar ideias para o laboratório.
