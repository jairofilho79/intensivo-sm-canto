# Intensivo SM — canto para o louvor

Aulas de canto de 20 minutos (teoria rápida + muita prática) para um grupo pequeno de iniciantes que cantam na igreja. Cada aula é uma página estática que o aluno abre no celular durante a aula e durante o treino da semana.

- **Páginas dos alunos (GitHub Pages):** https://jairofilho79.github.io/intensivo-sm-canto/
- **Ementa completa** (básico, intermediário, avançado): [`ementa-intensivo.md`](ementa-intensivo.md).
- **Diário de desenvolvimento:** [`PROGRESSO.md`](PROGRESSO.md).

## Estrutura

```
index.html                 índice das aulas
aula-01-respiracao.html    Aula 1 — Postura e respiração
aula-02-fluxo-de-ar.html   Aula 2 — Fluxo de ar e início do som
aula-03-aquecimento.html   Aula 3 — Vibração de lábios, canudo e "M"
assets/style.css           estilo compartilhado (mobile-first, tema claro/escuro)
assets/app.js              cronômetros dos blocos + checklists salvos no aparelho
assets/img/                ilustrações de domínio público (Gray's Anatomy, 1918)
ementa-intensivo.md        ementa detalhada
PROGRESSO.md               o que está pronto, o que falta, decisões
```

## Como criar uma nova aula

1. Copie `aula-03-aquecimento.html`, renomeie para `aula-NN-<tema>.html`.
2. Troque `data-lesson="aula-NN"` no `<body>` (é a chave do armazenamento local das checklists).
3. Siga o roteiro da aula em `ementa-intensivo.md`: retomada → uma ideia → blocos (`.block`, com `.timer` em segundos) → no hino → sua semana → passou?
4. Ajuste os links de anterior/próxima no topo e no rodapé; adicione a aula em `index.html`.
5. Registre em `PROGRESSO.md`.

Sem build, sem dependências: abra o HTML no navegador.

## Imagens

Somente imagens de domínio público ou com licença livre, com crédito no rodapé de cada página. Nenhuma imagem é gerada por IA.
