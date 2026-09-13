# Progresso do desenvolvimento das aulas

Última atualização: 2026-09-13

## Estado por aula

| Aula | Tema | Ementa | Página | Revisada pelo professor | Dada em |
|---|---|---|---|---|---|
| 01 | Postura e respiração | ✅ | ✅ `aula-01-respiracao.html` | ⬜ | — |
| 02 | Fluxo de ar e início do som | ✅ | ✅ `aula-02-fluxo-de-ar.html` (refeita em 2026-09-13; a versão antiga está no primeiro commit) | ⬜ | — |
| 03 | Vibração de lábios, canudo e "M" | ✅ | ✅ `aula-03-aquecimento.html` | ⬜ | 2026-09-13 (previsto) |
| 04 | Afinação I | ✅ | ⬜ | | |
| 05 | Ouvido I | ✅ | ⬜ | | |
| 06 | Ressonância e projeção I | ✅ | ⬜ | | |
| 07 | Vogais e consoantes | ✅ | ⬜ | | |
| 08 | Grave, médio e agudo | ✅ | ⬜ | | |
| 09 | Leitura I: ritmo | ✅ | ⬜ | | |
| 10 | Leitura II: melodia | ✅ | ⬜ | | |
| 11 | Aquecimento, desaquecimento e saúde vocal | ✅ | ⬜ | | |
| 12 | Estudar um louvor do zero | ✅ | ⬜ | | |
| 13–22 | Intermediário | ✅ (objetivos e exercícios-chave) | ⬜ | | |
| 23–30 | Avançado | ✅ (só horizonte) | ⬜ | | |

## Infraestrutura

- [x] Ementa completa (`ementa-intensivo.md`)
- [x] Estilo compartilhado mobile-first, tema claro/escuro, safe-areas iOS (`assets/style.css`)
- [x] Cronômetro por bloco (bipe + vibração no fim; mantém a tela acesa quando o navegador permite) e checklists salvos no aparelho (`assets/app.js`)
- [x] Índice (`index.html`)
- [x] Repositório no GitHub (https://github.com/jairofilho79/intensivo-sm-canto) + GitHub Pages (https://jairofilho79.github.io/intensivo-sm-canto/)
- [ ] Testar em um iPhone e um Android reais (foi testado em emulação de largura no desktop)
- [ ] Ícone/favicon e manifest para "adicionar à tela inicial" (opcional)

## Decisões tomadas

- **Fontes do sistema** em vez de Google Fonts: as páginas carregam rápido e funcionam sem rede boa (igreja, celular). O visual continua o mesmo em iOS (San Francisco / Palatino) e Android (Roboto / serif).
- **Notação de notas segue o app de afinador** (Dó4 = Dó central), porque é o que o aluno vai ver na tela. Está dito na ementa e na aula 3.
- **Imagens**: só domínio público (Gray's Anatomy, 1918, via Wikimedia Commons), com crédito em cada página. Nenhuma gerada por IA. Os rótulos vêm em inglês; a legenda em português explica o que olhar.
- **Uma aula = um HTML sem build.** Copiar a última aula é o jeito de criar a próxima (ver README).
- **Aula 2 refeita**: a versão original misturava falsete (mecanismo), soproso/firme (modo de fonação) e claro/escuro (timbre) numa régua só e citava belting. Na versão nova, só soproso × equilibrado × tenso e o início do som. Falsete vai para a aula 8; timbre e belting para o intermediário/avançado (ver seção 0 da ementa).
- **Hinos de exemplo** são tradicionais (Castelo Forte, Tal Qual Estou, Mais Perto Quero Estar). Cada página diz "se o hino da coletânea for outro, use…" — trocar quando a coletânea for definida.

## Próximos passos

1. Dar a aula 3; anotar aqui o que funcionou e o que precisa mudar (tempo de cada bloco, dificuldade com lip trill, canudo).
2. Revisar as aulas 1 e 2 com a experiência da aula 3.
3. Escrever a aula 4 (Afinação I) — precisa de teclado/app de piano e afinador em cada celular.
4. Definir os hinos da coletânea que substituem os exemplos.

## Diário

- **2026-09-13** — Ementa completa escrita (básico detalhado, intermediário e avançado mapeados). Repositório criado. Páginas das aulas 1, 2 (refeita) e 3. Estilo e JS compartilhados.
