# Laboratório PET-Saúde Clima

Espaço de treino do **Grupo PET II** para aprender o **Git básico** e criar protótipos, **sem tocar no sistema real**.
Pode errar à vontade.

- **No ar:** https://pet-saude-clima-sjbv.github.io/laboratorio/ (atualiza sozinho a cada envio)
- **Projeto real, para estudar:** https://github.com/PET-Saude-Clima-SJBV/hub-pet-saude

---

## 1. Preparar (uma vez)

Instale o [Git](https://git-scm.com/) e o [Node.js 22 LTS](https://nodejs.org/). Depois, no terminal:

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu-email@exemplo.com"
```

Use o mesmo e-mail da sua conta do GitHub.

## 2. Baixar o projeto (uma vez)

```bash
git clone https://github.com/PET-Saude-Clima-SJBV/laboratorio.git
cd laboratorio
npm install
npm run dev
```

Abra http://localhost:5173. Para parar, `Ctrl + C` no terminal.

## 3. O ciclo do dia a dia

Sempre nesta ordem:

```bash
git pull                          # 1. traz o que os colegas enviaram
                                  # 2. trabalhe nos seus arquivos
git status                        # 3. veja o que mudou
git add .                         # 4. separa as mudanças para o commit
git commit -m "O que você fez"    # 5. registra, com uma mensagem clara
git pull                          # 6. de novo, caso alguém tenha enviado algo nesse meio tempo
git push                          # 7. envia para o GitHub
```

Em alguns minutos o site no ar mostra a sua mudança.

## 4. O seu protótipo

Cada pessoa cria **o próprio arquivo** em `src/prototipos/`, por exemplo `ApresentacaoSofia.vue`.
Ele aparece sozinho no menu. Copie o `Exemplo.vue` para começar.

Como cada um mexe no seu arquivo, quase nunca há conflito.

## Comandos úteis

| Comando | Para quê |
|---|---|
| `git status` | o que mudou e o que ainda não foi enviado |
| `git log --oneline` | histórico de commits |
| `git diff` | o que exatamente mudou nos arquivos |
| `git pull` | baixar as novidades |
| `git restore arquivo` | desfazer mudanças num arquivo que ainda não foi para commit |

## Deu conflito?

Acontece quando duas pessoas mudam **a mesma linha** do mesmo arquivo. O `git pull` avisa e marca o trecho assim:

```
<<<<<<< HEAD
a sua versão
=======
a versão do colega
>>>>>>> ...
```

Deixe o texto como deve ficar, apague as marcas `<<<<<<<`, `=======` e `>>>>>>>`, e então:

```bash
git add .
git commit -m "Resolve conflito"
git push
```

Na dúvida, chame o colega que mexeu no mesmo arquivo.

## O que já vem pronto

| Onde | O quê |
|---|---|
| `src/dados/metas.json` | as 45 metas oficiais do projeto |
| `src/dados/territorios.json` | as 14 unidades de saúde (PSF, UBS, USF) |
| `src/estilo.css` | cores e estilos do HUB: `cartao`, `botao`, `selo`, `tabela`, `campo` |
| `src/componentes/` | componentes reaproveitáveis (ex.: `CartaoMeta.vue`) |

## Regras

- **Só dados fictícios ou públicos.** Nunca dado real de pessoa.
- Mexa no **seu** arquivo. Para mudar algo compartilhado, avise o grupo antes.
- **Nada de senha, token ou chave** no código: o repositório é público.
- IA é permitida, desde que você saiba explicar o que enviou.

Exercícios: [docs/exercicios.md](docs/exercicios.md).
