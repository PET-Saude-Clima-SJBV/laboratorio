# Guia de DevOps do laboratório

Para quem cuida deste repositório. Hoje ele está no **modo Git básico**: todos enviam direto para a `main`,
sem branches de ambiente, sem PR obrigatório e sem aprovação. Isso é de propósito, para o grupo aprender o básico.

## Como está montado hoje

| Peça | Onde | O que faz |
|---|---|---|
| Build | `.github/workflows/build.yml` | a cada envio, confere se o projeto compila (`npm ci` + `npm run build`) |
| Publicação | `.github/workflows/pages.yml` | a cada envio na `main`, publica em https://pet-saude-clima-sjbv.github.io/laboratorio/ |
| Áreas | `src/prototipos/<area>/*.vue` | uma pasta por área; cada `.vue` direto na pasta vira página, agrupada no menu por `src/prototipos.ts` (subpastas como `componentes/` não viram página) |
| Dados | `src/dados/*.json` | cópia de dados públicos do HUB |

Os dois workflows rodam nas máquinas do GitHub (`ubuntu-latest`). **Nunca** use `runs-on: self-hosted` aqui: o runner
do servidor é exclusivo do HUB e não atende este repositório.

## Rotina de manutenção

- **Build vermelho no GitHub:** alguém enviou algo que não compila. Veja o log em Actions, avise a pessoa, e se travar
  o grupo, desfaça com `git revert <commit>`.
- **Dependências:** uma vez por mês, `npm outdated`; atualize com `npm update`, rode `npm run build` e envie.
  Mantenha o `.npmrc` com `registry=https://registry.npmjs.org/`.
- **Dados:** quando o HUB mudar as metas ou os territórios, atualize `src/dados/metas.json` e `src/dados/territorios.json`.
  Só dados públicos, nunca dados de pessoas.
- **Protótipo abandonado:** combine com o autor antes de apagar.

## Quando ligar o fluxo completo (igual ao HUB)

Quando o grupo dominar o básico, passe para: branch saindo da `main` → PR para `dev` → `hml` → `main`, com aprovação.

1. Criar as branches: `git branch dev && git branch hml && git push origin dev hml`.
2. Copiar do HUB para cá: `.github/workflows/regras-de-branch.yml`, `.github/pull_request_template.md` e o `CONTRIBUTING.md`.
3. Criar `.github/CODEOWNERS` com quem aprova (ex.: `* @matheusromano6`).
4. Em Settings → Branches, proteger `dev`, `hml` e `main`: exigir PR, 1 aprovação do code owner, checagens `validar` e `build`,
   sem force push.
5. Trocar no `build.yml` o gatilho para `pull_request` em `dev`, `hml` e `main`.
6. Avisar o grupo e atualizar o README com o novo passo a passo.

Peça ajuda ao tutor nos passos 3 e 4 (precisam de permissão de administrador).
