# Como contribuir: o mesmo fluxo do HUB

O laboratório usa **exatamente o fluxo do projeto real**, para você chegar no HUB já sabendo trabalhar.

```
main ──┬──> feature/sofia-importador ──PR──> dev    (tutor aprova)
       │                            └──PR──> hml    (tutor aprova)
       │                            └──PR──> main   (tutor aprova; entra no ar)
       └──> feature/rafael-pwa ...
```

**A mesma branch sua sobe de degrau em degrau.** `dev` e `hml` nunca são mescladas para frente.

## Regras (o GitHub bloqueia se não seguir)

- Toda branch nasce da `main`: `git checkout main && git pull && git checkout -b feature/seunome-assunto`.
- Prefixos: `feature/` (novo), `fix/` (correção), `docs/` (documentação).
- Ninguém faz `push` direto em `dev`, `hml` ou `main`: só por Pull Request, com aprovação do tutor.
- PR para `hml` ou `main` não pode vir de `dev` nem de `hml`.
- **Nunca** faça `git merge dev` ou `git merge hml` na sua branch. Para atualizar, use `git merge main`.
- Todo PR roda duas checagens automáticas: as regras de branch e o **build** (o projeto precisa compilar).

## Conflito no PR para `dev`

Não clique em "Resolve conflicts" no GitHub. Crie uma branch só para isso:

```bash
git checkout feature/sua-branch
git checkout -b merge/sua-branch-dev
git merge origin/dev        # resolva os conflitos aqui
git push -u origin merge/sua-branch-dev
```

Abra o PR de `merge/sua-branch-dev` para `dev`. A sua `feature/` continua limpa para `hml` e `main`.

## Padrão de texto

- Não use travessão (—). Use hífen (-), dois-pontos ou uma frase nova.
- Texto objetivo e direto.
- Dado ilustrativo é sempre rotulado como ilustrativo.
