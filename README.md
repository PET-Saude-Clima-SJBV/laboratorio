# Laboratório PET-Saúde Clima

Espaço de treino do **Grupo PET II**: aqui você aprende o fluxo de desenvolvimento do HUB e cria protótipos,
**sem tocar no sistema real**. Pode errar à vontade.

- **No ar:** https://pet-saude-clima-sjbv.github.io/laboratorio/ (o que foi aprovado na `main`)
- **Projeto real (só leitura para estudo):** https://github.com/PET-Saude-Clima-SJBV/hub-pet-saude

| | Laboratório (aqui) | HUB (projeto real) |
|---|---|---|
| Fluxo de branches e PR | igual | igual |
| Aprovação do tutor | sim | sim |
| Publica em | GitHub Pages (link público) | servidor da UNIFAE |
| Banco de dados | não tem (arquivos JSON) | PostgreSQL |
| Dados | fictícios ou públicos | reais (no prod) |

---

## Primeiros passos

Pré-requisitos: [Git](https://git-scm.com/) e [Node.js 22 LTS](https://nodejs.org/).

```bash
git clone https://github.com/PET-Saude-Clima-SJBV/laboratorio.git
cd laboratorio
npm install
npm run dev
```

Abra http://localhost:5173.

## Criar o seu protótipo

1. Branch a partir da `main`: `git checkout main && git pull && git checkout -b feature/seunome-assunto`
2. Copie `src/prototipos/Exemplo.vue` para `src/prototipos/OQueVoceVaiFazer.vue` (ex.: `MapaDeCalorClarisse.vue`).
3. O protótipo aparece sozinho no menu. Programe, teste no navegador.
4. `git add . && git commit -m "Protótipo do mapa de calor" && git push -u origin feature/seunome-assunto`
5. No GitHub, abra o PR para **`dev`**. O tutor revisa.
6. Quando o tutor pedir, PR da mesma branch para `hml` e depois para `main`. Na `main`, entra no ar.

O passo a passo completo, com exercícios, está em [docs/exercicios.md](docs/exercicios.md).
As regras do fluxo estão em [CONTRIBUTING.md](CONTRIBUTING.md).

## O que já vem pronto

| Onde | O quê |
|---|---|
| `src/dados/metas.json` | as 45 metas oficiais (código, grupo, eixo, indicador, prazo) |
| `src/dados/territorios.json` | as 14 unidades de saúde (PSF, UBS, USF) |
| `src/dados/tipos.ts` | os tipos TypeScript desses dados |
| `src/estilo.css` | cores e estilos do HUB: `cartao`, `botao`, `selo`, `tabela`, `campo`, `grade duas` |
| `src/componentes/` | componentes reaproveitáveis (ex.: `CartaoMeta.vue`) |

## Regras

- **Só dados fictícios ou públicos.** Nunca dado real de paciente ou de pessoa.
- Mexa no **seu** arquivo de protótipo e em componentes **novos**. Para mudar algo compartilhado, combine no PR.
- **Nada de senha, token ou chave** no código. O repositório é público.
- IA é permitida, desde que você saiba explicar cada linha do que enviou.
