# FESTANÇA 2026

## Official Brand Design System

# Component Pilot Patch 001

## Especificação Técnica Cirúrgica do Primeiro Patch Real

**Versão:** 1.0.0  
**Status:** OFFICIAL — PATCH SPECIFICATION  
**Projeto:** FESTANÇA 2026  
**Aplicação:** Landing Page Oficial  
**Local:** Vila Bela da Santíssima Trindade — Mato Grosso — Brasil  
**Pilot ID:** `MIG-PILOT-001`  
**Patch ID:** `MIG-PILOT-001-PATCH-001`  
**Componente:** `.schedule-card`  
**Documento:** `apps/festanca-2026/docs/component-pilot-patch-001.md`

> “Ao encontro do futuro, com os pés firmes na tradição.”

---

# 1. FINALIDADE

Este documento define a especificação técnica exata do primeiro patch real do Official Brand Design System da FESTANÇA 2026.

Sua função é transformar o plano aprovado em uma intervenção controlada, propriedade por propriedade, sobre o componente:

```css
.schedule-card
O patch deverá:
preservar o HTML existente;
preservar o comportamento atual;
preservar a aparência visual;
substituir decisões hardcoded por tokens semânticos;
permitir rollback integral;
produzir evidência verificável de BEFORE × AFTER;
servir de modelo para futuras migrações.
2. PRINCÍPIO CENTRAL
NÃO REDESENHAR.

NÃO REESTRUTURAR.

NÃO OTIMIZAR FORA DO ESCOPO.

TOKENIZAR COM PRESERVAÇÃO.
O objetivo do Patch 001 é provar:
MESMO RESULTADO VISUAL
+
ARQUITETURA MELHOR
3. IDENTIFICAÇÃO OFICIAL
Pilot ID:
MIG-PILOT-001

Patch ID:
MIG-PILOT-001-PATCH-001

Component:
schedule-card

Selector principal:
.schedule-card

Wave:
WAVE 1

Priority:
HIGH

Risk:
LOW / CONTROLLED

Patch Type:
PRESERVATIONAL TOKENIZATION
4. ARQUIVOS ENVOLVIDOS
Arquivos candidatos a alteração:
apps/festanca-2026/css/style.css
assets/brand/tokens/tokens.css
Somente se necessário:
assets/brand/tokens/colors.json
assets/brand/tokens/index.json
apps/festanca-2026/css/brand-integration.css
Arquivos de documentação a atualizar após validação:
apps/festanca-2026/docs/component-pilot-plan.md
apps/festanca-2026/docs/component-migration-matrix.md
apps/festanca-2026/docs/css-findings-register.md
CHANGELOG.md
5. ARQUIVOS QUE NÃO DEVEM SER ALTERADOS
Neste patch, salvo descoberta crítica devidamente documentada:
apps/festanca-2026/index.html
apps/festanca-2026/js/script.js
assets/brand/tokens/theme-loader.js
Também não alterar:
dados da programação;
textos;
IDs;
atributos data-*;
ordem estrutural dos elementos;
comportamento de navegação;
lógica JavaScript.
6. PRÉ-CONDIÇÕES
Antes de iniciar:
[ ] Working tree limpa ou alterações conhecidas
[ ] Commit-base registrado
[ ] Baseline disponível
[ ] Seletores reais confirmados
[ ] Valores BEFORE confirmados
[ ] Tokens candidatos confirmados
[ ] Rollback definido
7. COMMIT-BASE
Registrar antes da edição:
git status
git log -1 --oneline
Resultado deverá ser copiado para a seção de evidências deste documento.
Campo:
BASE COMMIT:
PENDING
8. COMPONENTE-ALVO
Seletor principal:
.schedule-card
Seletores relacionados previamente identificados:
.schedule-card:hover
.schedule-card time
.schedule-card h3
.schedule-card p
.schedule-category
Este patch deverá alterar apenas os seletores comprovadamente necessários.
9. ESCOPO PROPRIEDADE POR PROPRIEDADE
Cada alteração deverá obedecer ao seguinte formato:
SELECTOR
PROPERTY
VALUE BEFORE
TOKEN AFTER
SOURCE TOKEN
EQUIVALENCE
RISK
ROLLBACK
VALIDATION
10. PATCH ITEM 001 — BACKGROUND PRINCIPAL
ID:
PATCH-001-ITEM-001
Selector:
.schedule-card
Property:
background
Value BEFORE:
CONFIRMAR NO style.css ANTES DA EDIÇÃO
Possível valor identificado durante auditoria:
rgba(15, 184, 215, 0.09)
Token AFTER:
A DEFINIR APÓS VERIFICAÇÃO DE EQUIVALÊNCIA
Candidato:
var(--color-surface-cyan-subtle)
Equivalence:
PENDING
Classificação permitida:
EXACT
APPROXIMATE
NEW TOKEN REQUIRED
Risk:
LOW
Rollback:
Restaurar literalmente o valor BEFORE.
Validation:
fundo visual idêntico;
contraste preservado;
nenhum efeito colateral em temas;
nenhuma alteração perceptível no card.
11. PATCH ITEM 002 — BORDA
ID:
PATCH-001-ITEM-002
Selector:
.schedule-card
Property:
border
ou:
border-color
conforme implementação real.
Value BEFORE:
Possível valor auditado:
rgba(15, 184, 215, 0.5)
Token AFTER:
Candidato:
var(--color-border-cyan-medium)
ou token existente equivalente.
Equivalence:
PENDING
Risk:
LOW
Rollback:
Restaurar o valor literal original.
Validation:
espessura idêntica;
estilo idêntico;
cor idêntica;
contraste idêntico.
12. PATCH ITEM 003 — BORDER RADIUS
ID:
PATCH-001-ITEM-003
Selector:
.schedule-card
Property:
border-radius
Value BEFORE:
CONFIRMAR NO style.css
Token AFTER candidato:
var(--radius-medium)
Equivalence:
EXACT somente se o valor resolvido for idêntico.
Risk:
LOW
Rollback:
Restaurar dimensão literal original.
Validation:
Comparar visualmente os quatro cantos em BEFORE × AFTER.
13. PATCH ITEM 004 — TRANSITION
ID:
PATCH-001-ITEM-004
Selector:
.schedule-card
Property:
transition
Value BEFORE:
CONFIRMAR NO style.css
Token AFTER candidato:
var(--transition-fast)
ou:
var(--transition-medium)
dependendo da equivalência real.
Equivalence:
PENDING
Risk:
LOW
Validation:
hover mantém mesma duração percebida;
nenhuma animação nova;
prefers-reduced-motion preservado.
14. PATCH ITEM 005 — HOVER BACKGROUND
ID:
PATCH-001-ITEM-005
Selector:
.schedule-card:hover
Property:
background
Value BEFORE:
CONFIRMAR NO style.css
Possível valor auditado:
rgba(255, 255, 255, 0.025)
Token AFTER:
Candidato:
var(--color-surface-hover-subtle)
Equivalence:
PENDING
Risk:
LOW
Validation:
hover perceptivelmente igual;
contraste não reduzido;
sem salto de layout;
sem alteração de dimensão.
15. PATCH ITEM 006 — HOVER BORDER
ID:
PATCH-001-ITEM-006
Selector:
.schedule-card:hover
Property:
border-color
Value BEFORE:
CONFIRMAR NO style.css
Token AFTER:
Token semanticamente equivalente.
Equivalence:
PENDING
Risk:
LOW
Validation:
Comparar estado hover BEFORE × AFTER.
16. PATCH ITEM 007 — TEXTO PRINCIPAL
ID:
PATCH-001-ITEM-007
Selector possível:
.schedule-card h3
Property:
color
Value BEFORE:
CONFIRMAR
Token AFTER candidato:
var(--color-text)
Equivalence:
PENDING
Risk:
LOW
Validation:
mesma luminosidade;
mesma legibilidade;
contraste WCAG não inferior ao baseline.
17. PATCH ITEM 008 — TEXTO SECUNDÁRIO
ID:
PATCH-001-ITEM-008
Selector possível:
.schedule-card p
Property:
color
Token AFTER candidato:
var(--color-text-soft)
ou:
var(--color-text-muted)
Somente após verificar o valor real.
18. PATCH ITEM 009 — TIPOGRAFIA
ID:
PATCH-001-ITEM-009
Selector possível:
.schedule-card h3
Property:
font-family
Token AFTER candidato:
var(--font-display)
Somente se já existir equivalência com a fonte atualmente utilizada.
Não trocar família tipográfica apenas para padronizar.
19. PATCH ITEM 010 — CATEGORY BADGE
ID:
PATCH-001-ITEM-010
Selector:
.schedule-category
Propriedades candidatas:
background
border
color
border-radius
Valores auditados possivelmente relacionados:
rgba(255, 210, 31, 0.07)
rgba(255, 210, 31, 0.5)
Tokens candidatos:
--color-surface-gold-subtle
--color-border-gold-medium
Não substituir por token aproximado sem confirmação.
20. MATRIZ CIRÚRGICA
Item
Seletor
Propriedade
BEFORE
AFTER
Equivalência
Risco
001
.schedule-card
background
confirmar
token
pending
low
002
.schedule-card
border
confirmar
token
pending
low
003
.schedule-card
border-radius
confirmar
token
pending
low
004
.schedule-card
transition
confirmar
token
pending
low
005
.schedule-card:hover
background
confirmar
token
pending
low
006
.schedule-card:hover
border-color
confirmar
token
pending
low
007
.schedule-card h3
color
confirmar
token
pending
low
008
.schedule-card p
color
confirmar
token
pending
low
009
.schedule-card h3
font-family
confirmar
token
pending
low
010
.schedule-category
múltiplas
confirmar
tokens
pending
low
21. REGRA DE CONFIRMAÇÃO
Nenhuma linha marcada:
CONFIRMAR
poderá ser editada sem inspeção direta do código.
Antes do patch, executar:
grep -nE '\.schedule-card|\.schedule-category' \
apps/festanca-2026/css/style.css
Depois:
sed -n '1010,1110p' \
apps/festanca-2026/css/style.css
Ajustar o intervalo conforme as linhas reais.
22. IDENTIFICAÇÃO DE VALORES HARDCODED
Executar inspeção:
sed -n '1010,1110p' \
apps/festanca-2026/css/style.css \
| grep -nE '#[0-9A-Fa-f]{3,8}|rgba?\(|hsla?\('
Registrar exatamente os valores.
23. VERIFICAÇÃO DOS TOKENS EXISTENTES
Executar:
grep -nE \
'color-surface|color-border|color-text|radius|transition|font-display' \
assets/brand/tokens/tokens.css
Comparar os valores resolvidos.
24. REGRA DE EQUIVALÊNCIA
Cada substituição será classificada como:
EXACT
Valor visual idêntico.
SEMANTIC EXACT
Mesmo valor e função semântica correspondente.
APPROXIMATE
Valor próximo, porém não idêntico.
NEW TOKEN REQUIRED
Nenhum token adequado disponível.
No primeiro piloto:
APPROXIMATE
não deverá ser aplicado sem aprovação explícita.
25. NOVOS TOKENS
Se necessário criar novos tokens:
--color-surface-cyan-subtle
--color-border-cyan-medium
--color-surface-gold-subtle
--color-border-gold-medium
Os nomes são candidatos.
A nomenclatura final deverá respeitar o sistema existente.
26. FONTE DA VERDADE
A fonte primária permanece:
assets/brand/tokens/*.json
Portanto:
NÃO criar token apenas no tokens.css
sem registrar sua origem no JSON correspondente.
Fluxo correto:
JSON
↓
tokens.css
↓
brand-integration.css
↓
style.css
27. PROIBIÇÃO DE ALTERAÇÃO GLOBAL
Não modificar token global existente para fazer o .schedule-card se adaptar.
Exemplo proibido:
alterar --color-border-strong
se ele já for usado por múltiplos componentes.
Nesse cenário:
CRIAR TOKEN ADEQUADO
é preferível.
28. PATCH MÍNIMO
A alteração deverá ser a menor possível.
Exemplo conceitual:
.schedule-card {
  background: var(--color-surface-cyan-subtle);
  border-color: var(--color-border-cyan-medium);
  border-radius: var(--radius-medium);
}
Este exemplo não deve ser colado sem confirmar os valores reais.
29. NÃO DUPLICAR REGRAS
Evitar criar nova regra distante da original apenas para sobrescrever o legado.
Preferência:
EDITAR O BLOCO REAL EXISTENTE
quando seguro.
Isso reduz:
cascata desnecessária;
especificidade;
duplicação;
dívida técnica.
30. ORDEM DE EXECUÇÃO DO PATCH
A. FREEZE
B. INSPECT
C. RECORD
D. MAP
E. TOKENIZE
F. EDIT
G. VALIDATE
H. COMPARE
I. APPROVE
J. DOCUMENT
31. ETAPA A — FREEZE
Registrar:
git status
git log -1 --oneline
Opcionalmente:
git diff --stat
Não iniciar com alterações desconhecidas.
32. ETAPA B — INSPECT
Inspecionar HTML:
grep -nE \
'class="[^"]*schedule-card|schedule-category' \
apps/festanca-2026/index.html
Inspecionar CSS:
grep -nE \
'\.schedule-card|\.schedule-category' \
apps/festanca-2026/css/style.css
33. ETAPA C — RECORD
Copiar para este documento:
Selector
Property
Exact BEFORE Value
Line
File
Somente depois marcar:
BEFORE VERIFIED
34. ETAPA D — MAP
Para cada propriedade:
BEFORE VALUE
↓
SEMANTIC FUNCTION
↓
EXISTING TOKEN?
Se sim:
CHECK EXACT VALUE
Se não:
NEW TOKEN REQUIRED
35. ETAPA E — TOKENIZE
Quando necessário:
1. Atualizar JSON-fonte
2. Atualizar tokens.css
3. Atualizar index.json se necessário
4. Validar sintaxe
36. VALIDAÇÃO JSON
Após alteração de JSON:
python -m json.tool \
assets/brand/tokens/colors.json \
> /dev/null \
&& echo "✅ colors.json válido"
Repetir para qualquer JSON alterado.
37. VALIDAÇÃO CSS
Após o patch:
grep -nE \
'\.schedule-card|\.schedule-category' \
apps/festanca-2026/css/style.css
Verificar uso de:
var(--...)
38. BUSCA POR HARDCODES REMANESCENTES
No bloco do componente:
sed -n '1010,1110p' \
apps/festanca-2026/css/style.css \
| grep -nE '#[0-9A-Fa-f]{3,8}|rgba?\(|hsla?\('
Resultado esperado:
Somente hardcodes intencionais/documentados
39. NÃO BUSCAR ZERO ABSOLUTO
O objetivo não é eliminar todo hardcode da aplicação nesta etapa.
O objetivo é:
MIGRAR APENAS O ESCOPO DO PILOTO
40. VALIDAÇÃO SINTÁTICA
Se disponível:
npx stylelint \
apps/festanca-2026/css/style.css
Caso não exista Stylelint configurado, não instalar dependência apenas para este patch sem decisão arquitetural.
41. TESTE LOCAL
Abrir a Landing Page no ambiente local utilizado pelo projeto.
Validar o componente em:
NORMAL
HOVER
FOCUS
RESPONSIVE
42. TESTE MOBILE
Checklist:
[ ] Card renderiza
[ ] Largura preservada
[ ] Padding preservado
[ ] Texto não corta
[ ] Sem overflow horizontal
[ ] Categoria preservada
[ ] Hover/focus coerentes
43. TESTE DESKTOP
Checklist:
[ ] Grid preservado
[ ] Altura coerente
[ ] Borda preservada
[ ] Background preservado
[ ] Espaçamento preservado
[ ] Hover preservado
44. TESTE DE CONTRASTE
Verificar:
Título
Texto
Data
Categoria
Borda
Fundo
Nenhum contraste poderá ser reduzido inadvertidamente.
45. TESTE HIGH-CONTRAST
Caso o tema esteja disponível:
data-theme="high-contrast"
Validar:
texto;
borda;
foco;
legibilidade.
46. TESTE DE TEMAS
Registrar:
dark          PASS / FAIL / N/A
light         PASS / FAIL / N/A
heritage      PASS / FAIL / N/A
ceremonial    PASS / FAIL / N/A
high-contrast PASS / FAIL / N/A
holographic   PASS / FAIL / N/A
47. REDUCED MOTION
Verificar que:
prefers-reduced-motion
continua respeitado.
Nenhuma transição nova deverá ignorar a preferência do usuário.
48. BEFORE × AFTER
Criar comparação nas mesmas condições:
mesmo dispositivo
mesmo viewport
mesmo zoom
mesmo tema
mesmo conteúdo
mesma posição de scroll
49. EVIDÊNCIAS RECOMENDADAS
MIG-PILOT-001-BEFORE-MOBILE
MIG-PILOT-001-AFTER-MOBILE

MIG-PILOT-001-BEFORE-DESKTOP
MIG-PILOT-001-AFTER-DESKTOP
50. CRITÉRIO DE APROVAÇÃO
O patch será aprovado somente quando:
[ ] Visual equivalente
[ ] HTML intacto
[ ] JS intacto
[ ] Responsividade preservada
[ ] Acessibilidade preservada
[ ] Nenhum overflow novo
[ ] Nenhuma regressão
[ ] Tokens semanticamente corretos
[ ] Rollback disponível
[ ] Evidências registradas
51. CRITÉRIO DE REJEIÇÃO
Rejeitar o patch se ocorrer:
mudança visual não planejada
quebra responsiva
contraste inferior
hover inconsistente
focus invisível
erro de tema
erro de sintaxe
token global afetando outros componentes
dependência inesperada
52. ROLLBACK
Estratégia primária:
git diff
↓
identificar patch
↓
restaurar valores BEFORE
Caso já exista commit isolado:
git revert <commit>
Não utilizar comandos destrutivos sem necessidade.
53. ROLLBACK DE TOKEN NOVO
Se o patch for revertido e um token novo tiver sido criado exclusivamente para ele:
avaliar:
TOKEN UNUSED?
Se sim:
remover de forma documentada
Se já tiver outro uso:
preservar
54. DIFF FINAL
Antes do commit:
git diff -- \
apps/festanca-2026/css/style.css \
assets/brand/tokens/
A revisão deverá responder:
Tudo no diff pertence ao Patch 001?
Se não:
STOP
55. GIT STATUS FINAL
git status
Esperado:
Somente arquivos previstos pelo patch.
56. COMMIT RECOMENDADO
git add \
apps/festanca-2026/css/style.css \
assets/brand/tokens/
Depois:
git commit -m \
"refactor(festanca-brand): tokenize schedule-card pilot without visual regression"
A lista de arquivos deverá ser ajustada ao que realmente foi modificado.
57. PÓS-COMMIT
Executar:
git log -1 --oneline
git status
Registrar:
PATCH COMMIT:
PENDING
58. ATUALIZAÇÃO DA MATRIZ
Após aprovação:
component-migration-matrix.md
Alterar status do componente para:
PILOT APPROVED
ou nomenclatura oficial equivalente.
59. ATUALIZAÇÃO DOS FINDINGS
Findings relacionados deverão receber:
status
resolution
patch ID
commit
date
evidence
Não fechar finding que não tenha sido realmente resolvido.
60. CHANGELOG
Registrar:
MIG-PILOT-001-PATCH-001
com:
data;
componente;
propriedades migradas;
tokens criados;
resultado;
validação;
rollback reference.
61. REGISTRO DE EXECUÇÃO
Preencher após execução:
Execution Date:
PENDING

Base Commit:
PENDING

Patch Commit:
PENDING

Executed By:
PENDING

Reviewed By:
PENDING

Visual Result:
PENDING

Responsive Result:
PENDING

Accessibility Result:
PENDING

Theme Result:
PENDING

Rollback Verified:
PENDING

Final Decision:
PENDING
62. RESULTADO POSSÍVEL
Somente um destes estados deverá ser declarado:
APPROVED
APPROVED WITH DOCUMENTED DIFFERENCE
REJECTED
ROLLED BACK
Nunca usar “aprovado” sem evidência.
63. GATE FINAL
MIG-PILOT-001-PATCH-001

BEFORE VERIFIED
        ↓
TOKEN MAP VERIFIED
        ↓
PATCH APPLIED
        ↓
CSS VALID
        ↓
MOBILE PASS
        ↓
DESKTOP PASS
        ↓
ACCESSIBILITY PASS
        ↓
THEMES PASS
        ↓
BEFORE × AFTER
        ↓
NO REGRESSION
        ↓
APPROVED
64. PRINCÍPIO DE CONTENÇÃO
Durante este patch:
NÃO TOCAR NO PRÓXIMO COMPONENTE.
Mesmo que sejam encontrados outros hardcodes.
Eles deverão ser registrados como:
FUTURE FINDING
e tratados em outra wave.
65. VALOR DO PRIMEIRO PATCH
O Patch 001 não será medido pela quantidade de linhas alteradas.
Será medido pela capacidade de demonstrar:
RASTREABILIDADE
REVERSIBILIDADE
EQUIVALÊNCIA
SEGURANÇA
REPETIBILIDADE
66. TRANSFORMAÇÃO ARQUITETURAL
ANTES

.schedule-card
↓
valores locais
↓
hardcodes
↓
decisão isolada


DEPOIS

.schedule-card
↓
tokens semânticos
↓
fonte central de verdade
↓
themes
↓
governança
↓
rastreabilidade
67. NÃO CONFUNDIR MIGRAÇÃO COM MELHORIA VISUAL
Durante o Patch 001:
NÃO MELHORAR A COR.
NÃO AUMENTAR A SOMBRA.
NÃO ALTERAR O RAIO.
NÃO MODERNIZAR O CARD.
Mesmo que pareça visualmente melhor.
Essas melhorias pertencem a uma fase posterior:
DESIGN EVOLUTION
e não:
DESIGN MIGRATION
68. FUTURA FASE DE HARMONIZAÇÃO
Depois da migração completa, poderá existir:
VISUAL HARMONIZATION WAVE
Nessa fase poderão ser avaliados:
novas cores;
refinamento de sombras;
novos raios;
ritmo espacial;
microinterações;
harmonização tipográfica.
Não agora.
69. STATUS ATUAL
Document:
component-pilot-patch-001.md

Version:
1.0.0

Pilot:
MIG-PILOT-001

Patch:
MIG-PILOT-001-PATCH-001

Component:
schedule-card

Specification:
COMPLETE

Implementation:
NOT STARTED

Authorization:
AWAITING FINAL BEFORE INSPECTION
70. PRÓXIMA AÇÃO TÉCNICA
Antes de editar qualquer CSS:
executar a inspeção final real de:
.schedule-card
.schedule-card:hover
.schedule-card time
.schedule-card h3
.schedule-card p
.schedule-category
e capturar:
LINHAS REAIS
PROPRIEDADES REAIS
VALORES BEFORE REAIS
TOKENS DISPONÍVEIS REAIS
71. COMANDO DE INSPEÇÃO FINAL
cd ~/decio-coelho-global

echo "=== SCHEDULE CARD SELECTORS ==="

grep -nE \
'\.schedule-card|\.schedule-category' \
apps/festanca-2026/css/style.css
Depois:
echo "=== SCHEDULE CARD BLOCK ==="

sed -n '1015,1110p' \
apps/festanca-2026/css/style.css
Ajustar o intervalo caso necessário.
72. INSPEÇÃO DOS TOKENS CANDIDATOS
echo "=== CANDIDATE TOKENS ==="

grep -nE \
'color-(surface|border|text)|radius-|transition-|font-display' \
assets/brand/tokens/tokens.css
73. DECISÃO APÓS INSPEÇÃO
Depois da saída real dos comandos:
PROPRIEDADE POR PROPRIEDADE

BEFORE REAL
        ↓
TOKEN REAL
        ↓
EQUIVALÊNCIA
        ↓
AUTORIZAÇÃO
Só então gerar o patch de código.
74. PRÓXIMO MARCO
component-pilot-patch-001.md
        ↓
FINAL BEFORE INSPECTION
        ↓
EXACT TOKEN MAP
        ↓
PATCH COMMANDS
        ↓
FIRST REAL CSS MIGRATION
        ↓
VALIDATION
        ↓
BEFORE × AFTER
        ↓
DECISION
75. PRINCÍPIO FINAL
UM COMPONENTE.

UM PATCH.

UMA BASELINE.

UM DIFF CONTROLADO.

UMA DECISÃO COM EVIDÊNCIA.
Esse é o ponto em que o Brand Design System deixa definitivamente de ser apenas documentação e passa a transformar o código real da FESTANÇA 2026 de forma segura, incremental e auditável.
FESTANÇA 2026
Official Brand Design System
MIG-PILOT-001-PATCH-001
Ao encontro do futuro, com os pés firmes na tradição. 🙏🌍🚀
