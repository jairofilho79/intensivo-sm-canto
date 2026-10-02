# Intensivo SM — canto para o louvor

Aulas de canto de 20 minutos (teoria rápida + muita prática) para um grupo pequeno de iniciantes que cantam na igreja. Cada aula é uma página estática que o aluno abre no celular durante a aula e durante o treino da semana.

- **Páginas dos alunos (GitHub Pages):** https://jairofilho79.github.io/intensivo-sm-canto/
- **Ementa completa** (básico, intermediário e avançado, todas as 30 aulas com roteiro): [`ementa-intensivo.md`](ementa-intensivo.md).
- **Diário de desenvolvimento:** [`PROGRESSO.md`](PROGRESSO.md).

## Estrutura

```
index.html                 índice das aulas
aula-01-respiracao.html    Aula 1 — Postura e respiração
aula-02-fluxo-de-ar.html   Aula 2 — Fluxo de ar e início do som
aula-03-aquecimento.html   Aula 3 — Aquecimento completo: corpo, ar, voz e espaço
aula-04-afinacao.html      Aula 4 — Afinação I: ouvir antes de cantar
aula-05-ouvido.html        Aula 5 — Ouvido I: a escala com números
aula-06-ressonancia.html   Aula 6 — Ressonância e projeção I
aula-07-vogais-consoantes.html  Aula 7 — Vogais e consoantes
aula-08-grave-medio-agudo.html  Aula 8 — Grave, médio e agudo
aula-09-leitura-ritmo.html      Aula 9 — Leitura I: o ritmo
aula-10-leitura-melodia.html    Aula 10 — Leitura II: a melodia
aula-11-saude-vocal.html        Aula 11 — Aquecimento, desaquecimento e saúde vocal
aula-12-louvor-do-zero.html     Aula 12 — Estudar um louvor do zero e cantar em grupo
assets/style.css           estilo compartilhado (mobile-first, tema claro/escuro)
assets/app.js              cronômetros dos blocos + checklists salvos no aparelho
assets/fonts/              fonte oficial Amsterdam Four (Pra Teu Louvor)
assets/img/                ilustrações de domínio público (Gray's Anatomy, 1918)
amsterdam-four-ttf-maisfontes.4c67.zip  arquivo da fonte oficial Amsterdam Four
apostila/pra-teu-louvor.pdf  apostila Pra Teu Louvor (PDF comprimido, 144 págs)
ementa-intensivo.md        ementa detalhada
PROGRESSO.md               o que está pronto, o que falta, decisões
```

## Como criar uma nova aula

1. Copie a última aula (hoje `aula-12-louvor-do-zero.html`), renomeie para `aula-NN-<tema>.html`.
2. Troque `data-lesson="aula-NN"` no `<body>` (é a chave do armazenamento local das checklists).
3. Siga o roteiro da aula em `ementa-intensivo.md`: retomada → uma ideia → blocos (`.block`, com `.timer` em segundos) → no hino → sua semana → passou?
4. Ajuste os links de anterior/próxima no topo e no rodapé; adicione a aula em `index.html`.
5. Registre em `PROGRESSO.md`.

Sem build, sem dependências: abra o HTML no navegador.

## Imagens

Somente imagens de domínio público ou com licença livre, com crédito no rodapé de cada página. Nenhuma imagem é gerada por IA.
