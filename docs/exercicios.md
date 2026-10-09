# Exercícios de Git básico

Faça em ordem. Ao final de cada um, o resultado aparece no site do laboratório.

## 1. Primeiro envio

1. Siga o README até o `npm run dev` funcionar.
2. Copie a pasta `src/prototipos/exemplo-de-area/` para `src/prototipos/nome-da-sua-area/`.
3. Dentro dela, crie `Apresentacao.vue` com: seu nome, seu curso, a sua área e o que quer aprender no projeto.
4. `git add .`, `git commit -m "Minha apresentação"`, `git pull`, `git push`.
5. Abra o site do laboratório e veja a sua área no menu.

**Objetivo:** o ciclo completo: alterar, registrar, enviar.

## 2. Ver o histórico

1. `git pull` para trazer as apresentações dos colegas.
2. `git log --oneline` e encontre o seu commit e o de um colega.
   Depois, `git log --oneline -- src/prototipos/nome-da-sua-area` mostra só o histórico da sua área.
3. Mude uma frase da sua página, rode `git diff` e veja a diferença antes do commit.
4. Envie a mudança.

**Objetivo:** entender o histórico e o que cada commit muda.

## 3. Usar os dados prontos

Numa página nova da sua área, liste as unidades de saúde de `src/dados/territorios.json` em cartões, com uma busca por nome.
Use a pasta `exemplo-de-area/` como referência.

**Objetivo:** primeiro passo em Vue com dados reais do projeto.

## 4. Conflito de propósito

Em dupla: os dois mudam **a mesma frase** de `src/componentes/CartaoMeta.vue` ao mesmo tempo.
Um envia primeiro. O segundo faz `git pull`, resolve o conflito (veja o README) e envia.
Depois desfaçam a mudança para o componente voltar ao normal.

**Objetivo:** perder o medo do conflito.

## 5. Desfazer

1. Mude qualquer coisa no seu arquivo e **não** faça commit.
2. `git restore src/prototipos/nome-da-sua-area/Apresentacao.vue` e veja a mudança sumir.

**Objetivo:** saber voltar atrás antes de enviar.

---

Depois destes, o próximo passo é o fluxo com branches e Pull Request, o mesmo do HUB. Ele será ligado aqui pelo
responsável de DevOps quando o grupo estiver pronto.
