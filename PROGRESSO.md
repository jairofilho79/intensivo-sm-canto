# Progresso do desenvolvimento das aulas

Última atualização: 2026-09-17

## Estado por aula

| Aula | Tema | Ementa | Página | Revisada pelo professor | Dada em |
|---|---|---|---|---|---|
| 01 | Postura e respiração | ✅ | ✅ `aula-01-respiracao.html` | ✅ (mão no peito/barriga em vez de deitado) | — |
| 02 | Fluxo de ar e início do som | ✅ | ✅ `aula-02-fluxo-de-ar.html` (refeita em 2026-09-13; a versão antiga está no primeiro commit) | ✅ ("hhhaaa" × "mmmm") | — |
| 03 | Aquecimento completo | ✅ | ✅ `aula-03-aquecimento.html` (reorganizada em 2026-09-13 a partir dos exercícios do professor) | ✅ | 2026-09-13 |
| 04 | Afinação I | ✅ | ✅ `aula-04-afinacao.html` (2026-09-17) | ⬜ | |
| 05 | Ouvido I | ✅ | ✅ `aula-05-ouvido.html` (2026-09-17) | ⬜ | |
| 06 | Ressonância e projeção I | ✅ | ✅ `aula-06-ressonancia.html` (2026-09-17) | ⬜ | |
| 07 | Vogais e consoantes | ✅ | ✅ `aula-07-vogais-consoantes.html` (2026-09-17) | ⬜ | |
| 08 | Grave, médio e agudo | ✅ | ✅ `aula-08-grave-medio-agudo.html` (2026-09-17) | ⬜ | |
| 09 | Leitura I: ritmo | ✅ | ✅ `aula-09-leitura-ritmo.html` (2026-09-17) | ⬜ | |
| 10 | Leitura II: melodia | ✅ | ✅ `aula-10-leitura-melodia.html` (2026-09-17) | ⬜ | |
| 11 | Aquecimento, desaquecimento e saúde vocal | ✅ | ✅ `aula-11-saude-vocal.html` (2026-09-17) | ⬜ | |
| 12 | Estudar um louvor do zero | ✅ | ✅ `aula-12-louvor-do-zero.html` (2026-09-17) | ⬜ | |
| 13–22 | Intermediário | ✅ roteiro completo (2026-09-17) | ⬜ | ⬜ | |
| 23–30 | Avançado | ✅ roteiro completo (2026-09-17; continua sendo horizonte) | ⬜ | ⬜ | |

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
- **Gravações são para auto-análise.** Os alunos não enviam gravações ao professor. As páginas sugerem, de forma discreta ("Para se ouvir"), o que vale gravar e o que ouvir no dia seguinte.
- **Aula 3 = aquecimento completo em 4 blocos** (corpo → ar → voz → espaço), a partir da lista de exercícios do professor: alongamento (postura, pescoço, ombros, costelas com os braços), "S/Z/Sh" e staccato, "brrr" e "mmm", bocejo (palato mole), sopro "sapão" (espaço na boca) e "espaguete" (laringe). Canudo virou só alternativa ao "brrr"; "região confortável" saiu da aula 3 e fica para a aula 8. O aquecimento da aula 11 passa a ser a ampliação deste.
- **Aula 2 usa duas alavancas**: "hhhaaa" abre (soproso), "mmmm" firma — descoberta do professor em aula. O bloco central é alternar as duas e abrir "mmm → mmmá".
- **Hinos de exemplo** são tradicionais (Castelo Forte, Tal Qual Estou, Mais Perto Quero Estar). Cada página diz "se o hino da coletânea for outro, use…" — trocar quando a coletânea for definida.

## Próximos passos

1. **Revisar as aulas 4–12** no navegador (foram escritas em 2026-09-17 a partir da ementa; ver "Pontos para o professor confirmar" abaixo).
2. Conferir a descrição do sopro "sapão" e do "espaguete" na aula 3 — foram escritas a partir do nome do exercício; ajustar se o professor faz diferente.
3. Definir os hinos da coletânea que substituem os exemplos (e conferir as letras citadas nas aulas 7 e 12).
4. Revisar as ementas do intermediário e do avançado (seções 3 e 4) antes de gerar as páginas 13–22.

## Pontos para o professor confirmar (aulas 4–12)

Decisões tomadas ao escrever as páginas que não estavam na ementa ou se afastaram dela:

- **Relógio:** a ementa dá 3 min para "uma ideia", e a página segue isso (retomada 00:00–02:00, ideia 02:00–05:00, prática 05:00–16:00, hino 16:00–19:00). Para a prática fechar em 11 min, um bloco de cada aula ganhou 1 min a mais do que a ementa (aula 4: afinador 4 min; 5: degraus 1-3-5 4 min; 6: chamar 4 min; 7: 4/5/2; 8: medida 4 min; 9: pulso 3 min). Na aula 11 a ementa somava 22 min: ideia ficou com 2 min, conversa de saúde vocal com 2 min (a lista fica na página), hino 3 min.
- **Aula 4:** correções práticas para "agulha baixa" (mais ar, nota mais clara) e "agulha alta" (soltar mandíbula/ombros); afirma que esquerda da agulha = bemol na maioria dos apps — conferir no app usado.
- **Aula 5:** hino escolhido foi *Tal Qual Estou* (continuidade com a aula 4) sem conferir ao teclado se a 1ª frase começa no 1 por graus vizinhos; o 8 também foi destacado na escada (além de 1, 3, 5).
- **Aula 6:** acrescentados "nnná" e o teste do nariz tapado (para distinguir vibração no rosto de voz fanhosa); "veia saltou" como sinal de grito no erro comum.
- **Aula 7:** segunda volta de vogais com ê/ô; dica "consoante final pula para a sílaba seguinte" e "ditongo fica na primeira vogal"; letras de *Tal Qual Estou* e *Castelo Forte* seguem a tradução mais comum.
- **Aula 8:** não dá notas típicas da passagem (o aluno descobre a sua); ficha de medida é texto para copiar no caderno; frase para mulheres ("a voz de cabeça é a marcha em que vocês já cantam boa parte dos hinos") é uma simplificação.
- **Aula 9:** "Se travar" (uma figura por vez) e 3º check de "passou" (pulsos por compasso, achar a linha da melodia) são acréscimos.
- **Aula 10:** explica "abaixo do 1 vêm 7, 6, 5" (a 1ª frase de *Mais Perto Quero Estar* desce abaixo do 1); diz para ignorar hoje os ♯/♭ da armadura (dó móvel); melodia = hastes para cima na pauta de cima — conferir se a coletânea segue esse padrão.
- **Aula 11:** "versão de culto" de 3 min é acréscimo; os "3 hábitos que mais machucam" escolhidos foram pigarro, falar por cima de som alto e sussurrar.
- **Aula 12:** hino *Segurança* pode estar em 9/8 na coletânea (compasso composto, fora do critério das figuras da aula 9) — trocar por um em 4/4 ou 3/4 se for o caso; "ar pelo nariz em 1 tempo" pode ser liberado para boca+nariz em hino rápido.

## Diário

- **2026-09-17** — Páginas das aulas 4 a 12 escritas (uma por subagent, a partir da ementa e do modelo da aula 3), índice e links da aula 3 atualizados. Ementa: seções 3 (intermediário, aulas 13–22) e 4 (avançado, aulas 23–30) reescritas no mesmo formato do básico — objetivo, uma ideia, pré-requisitos, prática com como fazer / o que sentir / erro comum, no hino, tarefa da semana, sinal de que passou. O avançado continua marcado como horizonte, com pré-requisitos duros e "pare se doer" nas aulas de agudo forte (23, 25).
- **2026-09-13** — Ementa completa escrita (básico detalhado, intermediário e avançado mapeados). Repositório criado. Páginas das aulas 1, 2 (refeita) e 3. Estilo e JS compartilhados.
- **2026-09-13 (revisão do professor)** — Gravação passa a ser auto-análise, sem envio. Aula 1: "deitado com livro" trocado por "mão no peito, mão na barriga" (o que foi dado em aula). Aula 2: bloco central refeito em torno de "hhhaaa" (soproso) × "mmmm" (firme). Aula 3: reorganizada como aquecimento completo em 4 blocos de 3 min, com os exercícios passados pelo professor. Ementa e aula 11 alinhadas.
