# Laboratório PET-Saúde Clima

Espaço de treino do **Grupo PET II** para aprender o **Git básico** e criar protótipos, **sem tocar no sistema real**.
Pode errar à vontade.

- **No ar:** https://pet-saude-clima-sjbv.github.io/laboratorio/ (atualiza sozinho a cada envio)

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

## 4. A sua área

Cada pessoa cuida de **uma área** e cria **uma pasta** para ela em `src/prototipos/`:

```
src/prototipos/
├── Exemplo.vue                  página solta, grupo "Geral"
├── exemplo-de-area/             modelo de área: copie esta pasta
│   ├── Territorios.vue          cada .vue aqui vira uma página da área
│   └── componentes/
│       └── CartaoUnidade.vue    peças só da área (não viram página)
└── mapa-de-calor/               exemplo: a área de alguém
    ├── Painel.vue
    └── Historico.vue
```

- **Nome da pasta** em minúsculas, com hífen: `mapa-de-calor` aparece no menu como **Mapa de calor**.
- **Nome do arquivo** em CamelCase: `PainelDeAlertas.vue` aparece como **Painel De Alertas**.
- Tudo aparece sozinho no menu, agrupado por área. Não precisa registrar nada.

Como cada um mexe na própria pasta, quase nunca há conflito.

### Acompanhar online

- **Site:** no menu, cada área tem o seu grupo. Em cada página há os links **Ver código** e **Histórico da área**.
- **GitHub:** abra a pasta da área em `src/prototipos/` e clique em **History** para ver quem enviou o quê.
- **Actions:** mostra se o último envio compilou e quando o site foi atualizado.

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

Exercícios: [docs/exercicios.md](docs/exercicios.md).
