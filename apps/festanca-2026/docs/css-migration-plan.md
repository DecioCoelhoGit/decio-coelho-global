# FESTANÇA 2026

# Official Brand Design System

# CSS Migration Plan

## Plano Mestre Oficial de Migração Controlada da Landing Page

**Versão:** 1.0.0  
**Status:** Oficial — Migration Planning  
**Projeto:** FESTANÇA 2026  
**Aplicação:** Landing Page Oficial  
**Local:** Vila Bela da Santíssima Trindade — Mato Grosso — Brasil

> **“Ao encontro do futuro, com os pés firmes na tradição.”**

---

# 1. FINALIDADE

Este documento estabelece o Plano Mestre Oficial de Migração da camada visual e estrutural da Landing Page da FESTANÇA 2026 para o novo:

```text
OFFICIAL BRAND DESIGN SYSTEM
A migração será realizada de forma:
progressiva

auditável

reversível

documentada

testável

culturalmente segura

tecnicamente controlada
O objetivo não é simplesmente substituir CSS antigo.
O objetivo é transformar progressivamente a Landing Page em uma aplicação governada por:
DESIGN TOKENS

THEMES

COMPONENTES PADRONIZADOS

ACESSIBILIDADE

RESPONSIVIDADE

GOVERNANÇA

AUDITORIA

VERSIONAMENTO
2. PRINCÍPIO CENTRAL
A migração obedecerá ao princípio:
NÃO REESCREVER TUDO.

NÃO MIGRAR TUDO AO MESMO TEMPO.

NÃO ALTERAR SEM EVIDÊNCIA.

NÃO REMOVER SEM RASTREABILIDADE.
Fluxo oficial:
MEDIR
  ↓
REGISTRAR
  ↓
MAPEAR
  ↓
MIGRAR
  ↓
TESTAR
  ↓
COMPARAR
  ↓
APROVAR
  ↓
DOCUMENTAR
3. CADEIA DOCUMENTAL
Este plano depende diretamente de:
brand-integration-map.md

css-audit-report.md

css-findings-register.md

css-baseline.md
E da infraestrutura:
assets/brand/tokens/colors.json

assets/brand/tokens/typography.json

assets/brand/tokens/spacing.json

assets/brand/tokens/radius.json

assets/brand/tokens/shadows.json

assets/brand/tokens/animations.json

assets/brand/tokens/icons.json

assets/brand/tokens/symbols.json

assets/brand/tokens/themes.json

assets/brand/tokens/index.json

assets/brand/tokens/tokens.css

assets/brand/tokens/theme-loader.js
Camada de compatibilidade:
apps/festanca-2026/css/brand-integration.css
4. PRÉ-CONDIÇÃO OBRIGATÓRIA
Nenhuma migração estrutural deverá iniciar enquanto:
BASELINE STATUS != FROZEN
Antes do primeiro lote deverão estar registrados:
commit-base

hashes

ordem CSS

ordem JavaScript

breakpoints

screenshots

findings

dependências críticas

estado responsivo

estado de acessibilidade
5. MODELO DE MIGRAÇÃO
A estratégia adotada será:
INCREMENTAL MIGRATION
Também denominada:
STRANGLER PATTERN VISUAL
Em vez de substituir todo o CSS legado de uma única vez:
CSS LEGADO
     +
DESIGN TOKENS
     +
BRAND INTEGRATION
coexistirão temporariamente.
À medida que componentes forem migrados:
LEGACY RULES
      ↓
TOKENIZED RULES
      ↓
VALIDATION
      ↓
LEGACY DEPRECATION
6. CAMADAS DA ARQUITETURA
Ordem conceitual:
DESIGN TOKENS JSON
        ↓
tokens.css
        ↓
theme-loader.js
        ↓
brand-integration.css
        ↓
style.css
        ↓
componentes
        ↓
HTML
        ↓
runtime
Durante a migração:
tokens.css
será a fonte técnica de identidade.
brand-integration.css
atuará como ponte.
style.css
será progressivamente reduzido.
7. PRINCÍPIO DE COMPATIBILIDADE
Nenhuma migração poderá quebrar:
HTML existente

JavaScript existente

IDs

data attributes

navegação

formulários

programação dinâmica

WhatsApp

Google Maps

acessibilidade

links

filtros
8. ESTRATÉGIA POR ONDAS
A migração será dividida em ondas.
WAVE 0
PREPARAÇÃO

WAVE 1
FUNDAÇÃO VISUAL

WAVE 2
COMPONENTES SIMPLES

WAVE 3
COMPONENTES INTERATIVOS

WAVE 4
ESTRUTURAS COMPLEXAS

WAVE 5
TEMAS

WAVE 6
LIMPEZA LEGADA

WAVE 7
CONSOLIDAÇÃO
9. WAVE 0 — PREPARAÇÃO
Objetivo:
garantir segurança antes de alterar
Tarefas:
[ ] congelar baseline

[ ] registrar commit-base

[ ] gerar hashes

[ ] validar CSS order

[ ] validar JS order

[ ] localizar CSS-FIND-0012

[ ] registrar screenshots

[ ] testar mobile

[ ] testar desktop

[ ] registrar console

[ ] registrar network
Critério de saída:
BASELINE = FROZEN
10. WAVE 1 — FUNDAÇÃO VISUAL
Escopo:
cores

tipografia

spacing

radius

shadows
Objetivo:
Substituir gradualmente valores visuais repetidos por tokens.
Exemplo:
color: #ffffff;
passa para:
color: var(--festanca-color-text-primary);
Sem alterar estrutura HTML.
11. WAVE 1 — REGRAS
Permitido:
substituir valores equivalentes

criar aliases

usar fallback

documentar mapeamento
Proibido:
reescrever layout

renomear classes

alterar IDs

mudar comportamento JS
12. WAVE 2 — COMPONENTES SIMPLES
Primeiros candidatos:
badges

labels

divisores

cards simples

botões secundários

chips

ícones decorativos
Critério:
baixo risco

baixa dependência JavaScript

baixo acoplamento estrutural
13. COMPONENT PILOT
Antes de qualquer migração em massa será escolhido:
1 COMPONENTE PILOTO
Candidato recomendado:
CARD SIMPLES
Motivos:
baixo risco

alto valor visual

boa representação dos tokens

fácil rollback

fácil comparação
14. FLUXO DO PILOTO
ESCOLHER COMPONENTE
        ↓
REGISTRAR BASELINE
        ↓
MAPEAR CSS
        ↓
MAPEAR TOKENS
        ↓
CRIAR MIGRAÇÃO
        ↓
TESTAR MOBILE
        ↓
TESTAR DESKTOP
        ↓
TESTAR ACESSIBILIDADE
        ↓
COMPARAR
        ↓
APROVAR
        ↓
DOCUMENTAR
15. CRITÉRIO DE APROVAÇÃO DO PILOTO
Checklist:
[ ] sem regressão funcional

[ ] sem regressão visual grave

[ ] sem overflow

[ ] sem quebra responsiva

[ ] contraste preservado

[ ] foco preservado

[ ] JavaScript preservado

[ ] tokens aplicados

[ ] rollback possível

[ ] finding atualizado
Resultado:
PILOT STATUS:

PENDING
16. WAVE 3 — COMPONENTES INTERATIVOS
Escopo:
botões primários

menus

accordion

tabs

filtros

inputs

selects

formularios simples

floating buttons
Maior atenção para:
hover

focus

active

disabled

keyboard

touch

ARIA
17. WAVE 4 — ESTRUTURAS COMPLEXAS
Escopo:
header

hero

menu mobile

grids principais

programação

formulários complexos

modais

rodapé
Esses componentes não deverão ser os primeiros migrados.
Motivo:
alto impacto

alto acoplamento

alto risco responsivo

dependência JavaScript
18. HEADER — ESTRATÉGIA
Antes de migrar:
mapear altura

mapear sticky/fixed

mapear z-index

mapear menu

mapear logo

mapear breakpoints

mapear JavaScript
Somente depois:
tokenizar

testar

comparar
19. HERO — ESTRATÉGIA
Mapear:
background

overlay

imagem

headline

subtitle

CTA

spacing

responsive behavior
Não alterar simultaneamente:
imagem

layout

tipografia

spacing
Migrar por dimensão.
20. MENU MOBILE
Elementos críticos:
open

close

overlay

scroll lock

focus trap

ARIA

z-index

safe area
Teste obrigatório:
Android

Samsung Internet

Chrome Mobile
21. FORMULÁRIOS
Migrar separadamente:
label

input

select

textarea

checkbox

radio

button

validation

error state

success state
Preservar:
name

id

value

data attributes

event listeners
22. WAVE 5 — THEMES
Somente após estabilidade estrutural.
Temas:
dark

light

heritage

ceremonial

high-contrast

holographic
Estratégia:
dark
  ↓
high-contrast
  ↓
light
  ↓
heritage
  ↓
ceremonial
  ↓
holographic
23. TEMA PADRÃO
Tema inicialmente recomendado:
dark
por manter proximidade com a identidade visual existente.
Isso reduz:
regressão visual

impacto de contraste

mudanças abruptas
24. HIGH-CONTRAST
Tratado como requisito de acessibilidade.
Nunca apenas como efeito visual.
Verificar:
texto

links

botões

bordas

focus

formularios

cards

ícones
25. WAVE 6 — DEPRECATION
Após componentes estabilizados:
identificar regras legadas substituídas

marcar como deprecated

observar por pelo menos um ciclo

remover somente após validação
Nunca:
DELETE FIRST
Sempre:
DEPRECATE
  ↓
OBSERVE
  ↓
VALIDATE
  ↓
REMOVE
26. DEPRECATION MARKER
Padrão:
/**
 * @deprecated
 * Migrado para:
 * var(--festanca-...)
 *
 * Componente:
 * ...
 *
 * Remover após:
 * ...
 */
27. WAVE 7 — CONSOLIDAÇÃO
Objetivo:
reduzir CSS legado

eliminar duplicações confirmadas

consolidar tokens

atualizar documentação

fechar findings

registrar versão
Resultado esperado:
BRAND DESIGN SYSTEM
=
PRIMARY VISUAL SOURCE
28. MATRIZ DE PRIORIDADE
Classificação:
P0 — BLOQUEADOR

P1 — CRÍTICO

P2 — ALTO

P3 — MÉDIO

P4 — BAIXO
29. MATRIZ DE RISCO
Avaliar cada componente por:
impacto visual

impacto funcional

dependência JavaScript

complexidade responsiva

sensibilidade cultural

acessibilidade
Escala:
LOW

MEDIUM

HIGH

CRITICAL
30. CANDIDATOS QUICK WIN
Componentes candidatos:
divisores

badges

chips

cards simples

títulos

subtítulos

ícones decorativos
Características:
baixo acoplamento

sem JavaScript crítico

alto ganho visual
31. NÃO QUICK WIN
Não começar por:
header

menu mobile

hero completo

formulários complexos

programação dinâmica

modais

floating navigation
32. MIGRAÇÃO POR DIMENSÃO
Cada componente poderá ser migrado em dimensões:
COLOR

TYPOGRAPHY

SPACING

RADIUS

SHADOW

ANIMATION

ICON

SYMBOL

THEME
Exemplo:
CARD
  ↓
COLOR
  ↓
TYPOGRAPHY
  ↓
SPACING
  ↓
RADIUS
  ↓
SHADOW
Evitar migrar tudo simultaneamente.
33. TOKEN MAPPING
Cada valor legado deverá ser classificado:
EXACT TOKEN

SEMANTIC TOKEN

ALIAS REQUIRED

NO TOKEN

SPECIAL CASE
Nunca criar token apenas para copiar um valor arbitrário.
34. REGRA DE TOKENIZAÇÃO
Pergunta obrigatória:
ESTE VALOR REPRESENTA UM CONCEITO REUTILIZÁVEL?
Se sim:
TOKEN
Se não:
LOCAL VALUE
35. COMPATIBILITY ALIAS
Durante transição:
--legacy-card-bg:
  var(--festanca-color-surface-card);
Objetivo:
reduzir ruptura

permitir migração gradual
Aliases temporários deverão possuir plano de remoção.
36. CSS ORDER
Ordem alvo:
tokens.css
      ↓
brand-integration.css
      ↓
style.css
Mas a alteração da ordem real somente poderá ocorrer após confirmação da baseline.
37. CASCADE STRATEGY
Preferir:
cascade previsível

baixa especificidade

component scopes

variables
Evitar crescimento de:
!important

IDs como seletor visual

seletores excessivamente longos
38. SPECIFICITY BUDGET
Meta:
0 IDs para estilo novo

máximo recomendado:

0-2 classes por seletor comum
Exceções deverão ser documentadas.
39. IMPORTANT POLICY
Novo !important somente quando:
tecnicamente necessário

documentado

justificado
Nunca como correção rápida de cascata.
40. INLINE STYLE POLICY
Evitar novos:
style=""
Quando necessário por runtime:
documentar origem

documentar JavaScript responsável
41. RESPONSIVE STRATEGY
Princípio preferencial:
MOBILE FIRST
Quando o legado utilizar desktop-first:
não converter tudo automaticamente
Migração gradual.
42. BREAKPOINT POLICY
Não criar novo breakpoint sem:
necessidade real

evidência visual

registro documental
Priorizar os breakpoints já consolidados.
43. ACCESSIBILITY GATE
Nenhum componente poderá ser aprovado se regredir:
contraste

foco

teclado

touch target

zoom

reduced motion
44. TOUCH TARGET
Referência operacional mínima:
44 x 44 px
Quando aplicável a controles interativos.
45. REDUCED MOTION
Todas as animações migradas deverão respeitar:
@media (prefers-reduced-motion: reduce)
Não depender apenas do theme-loader.js.
46. CULTURAL REVIEW
Elementos envolvendo:
Congo

Conguinho

Chorado

Choradinho

Reinado

Divino

São Benedito

Santíssima Trindade

símbolos tradicionais
exigem revisão cultural antes de alteração visual relevante.
47. ICON MIGRATION
Toda migração deverá consultar:
assets/brand/tokens/icons.json
Nunca substituir ícone cultural por ícone genérico sem revisão.
48. SYMBOL MIGRATION
Consultar:
assets/brand/tokens/symbols.json
Preservar:
significado

proporção

área de proteção

contexto
49. SCREENSHOT COMPARISON
Para cada componente migrado:
BEFORE

AFTER
Mesma:
viewport

conteúdo

estado

posição
50. NOMENCLATURA DE EVIDÊNCIA
Padrão:
migration-<wave>-<component>-before.png

migration-<wave>-<component>-after.png
Exemplo:
migration-w2-card-simple-before.png

migration-w2-card-simple-after.png
51. FINDINGS LINK
Toda migração relacionada a problema conhecido deverá citar:
CSS-FIND-XXXX
Exemplo:
Migration resolves:

CSS-FIND-0004
52. STATUS DE MIGRAÇÃO
Estados:
PLANNED

READY

IN PROGRESS

BLOCKED

VALIDATING

APPROVED

ROLLED BACK

COMPLETED
53. CRITÉRIO READY
Um item somente fica:
READY
quando possuir:
baseline

escopo

token mapping

risco

rollback

teste previsto
54. CRITÉRIO COMPLETED
Somente:
COMPLETED
quando:
implementado

testado

comparado

aprovado

documentado

finding atualizado

CHANGELOG atualizado
55. ROLLBACK PLAN
Cada lote deverá ter:
commit anterior

arquivos alterados

passos de reversão

dados preservados
Nunca depender apenas de memória.
56. GRANULARIDADE DE COMMITS
Preferir:
1 componente

ou

1 dimensão coerente
por commit.
Exemplo:
brand(card): migrate colors to design tokens
Evitar:
refactor entire landing page
57. PADRÃO DE COMMIT
Exemplos:
brand(tokens): integrate card color tokens

brand(button): migrate primary button states

brand(theme): enable dark theme runtime

a11y(focus): preserve visible focus after migration

fix(css): resolve overflow regression on mobile
58. BRANCH STRATEGY
Quando possível:
main

migration/<component>
Caso o fluxo continue direto em main:
commits pequenos

baseline clara

rollback garantido
59. TEST MATRIX
Para cada lote:
MOBILE

TABLET

DESKTOP

KEYBOARD

HIGH CONTRAST

REDUCED MOTION
60. VIEWPORT MATRIX
Obrigatórios mínimos:
360 x 800

390 x 844

412 x 915

768 x 1024

1366 x 768

1920 x 1080
61. BROWSER MATRIX
Prioridade:
Chrome Android

Samsung Internet

Chrome Desktop

Firefox

Edge
Quando possível:
Safari iOS
62. REGRESSION CATEGORIES
Classificação:
VISUAL

FUNCTIONAL

RESPONSIVE

ACCESSIBILITY

PERFORMANCE

CULTURAL

CONTENT
63. SEVERIDADE DE REGRESSÃO
CRITICAL

HIGH

MEDIUM

LOW
CRITICAL:
função quebrada

conteúdo inacessível

navegação bloqueada

perda de informação
64. STOP CONDITIONS
Interromper migração quando:
função crítica quebrar

regressão grave surgir

rollback não estiver disponível

baseline estiver inconsistente

dependência desconhecida aparecer

conteúdo cultural for afetado
65. DECISION LOG
Decisões relevantes deverão registrar:
data

componente

problema

alternativas

decisão

responsável

impacto
66. MIGRATION MATRIX
Formato:
ID
Componente
Wave
Risco
Status
MIG-001
Card simples
2
LOW
PLANNED
MIG-002
Botão secundário
2
LOW
PLANNED
MIG-003
Tipografia títulos
1
MEDIUM
PLANNED
MIG-004
Formulários
3
HIGH
PLANNED
MIG-005
Header
4
CRITICAL
PLANNED
MIG-006
Menu mobile
4
CRITICAL
PLANNED
MIG-007
Hero
4
HIGH
PLANNED
67. ORDEM RECOMENDADA
01
FOUNDATION TOKENS

02
CARD SIMPLE PILOT

03
BADGES / LABELS

04
BUTTONS

05
TYPOGRAPHY GROUPS

06
FORM CONTROLS

07
SECTIONS

08
GRID

09
HERO

10
HEADER

11
MOBILE MENU

12
THEMES

13
LEGACY CLEANUP
68. PRIMEIRO PILOTO RECOMENDADO
CARD SIMPLES
Escopo inicial:
background

border

radius

shadow

padding

title color

body color
Não incluir inicialmente:
animation

complex responsive changes

JavaScript
69. COMPONENT PILOT ID
MIG-PILOT-001
Componente:
CARD SIMPLE
Status:
PLANNED
70. RESULTADO ESPERADO DO PILOTO
Provar que:
tokens funcionam

cascade funciona

integration layer funciona

visual permanece consistente

rollback funciona

documentação funciona
71. APÓS O PILOTO
Se aprovado:
EXPAND
Se falhar:
ROLLBACK

ANALYZE

UPDATE PLAN
Nunca continuar em cascata com piloto reprovado.
72. KPI DA MIGRAÇÃO
Indicadores:
% componentes tokenizados

% valores hardcoded reduzidos

% findings resolvidos

% componentes testados

regressões abertas

rollback events

acessibilidade preservada
73. META DE QUALIDADE
A migração deverá buscar:
ZERO REGRESSÃO CRÍTICA

ZERO PERDA CULTURAL

ZERO QUEBRA FUNCIONAL

100% RASTREABILIDADE
74. CSS LEGACY REDUCTION
A redução de style.css não é objetivo isolado.
Não medir sucesso apenas por:
menos linhas
Medir por:
mais consistência

menos duplicação

mais reutilização

mais governança
75. VERSIONAMENTO
Cada wave poderá gerar:
v1.1.0

v1.2.0

v1.3.0
Mudanças incompatíveis:
major version
76. CHANGELOG
Toda alteração relevante deverá ser registrada em:
assets/brand/CHANGELOG.md
77. GOVERNANÇA
Fluxo:
PROPOSTA
  ↓
ANÁLISE TÉCNICA
  ↓
REVISÃO VISUAL
  ↓
REVISÃO CULTURAL
  ↓
ACESSIBILIDADE
  ↓
APROVAÇÃO
  ↓
PUBLICAÇÃO
  ↓
CHANGELOG
78. DOCUMENTOS FUTUROS
Após este plano:
component-migration-matrix.md

migration-pilot-report.md

visual-regression-log.md

migration-decision-log.md

legacy-deprecation-register.md
79. PRÓXIMO ARQUIVO
Próximo passo natural:
apps/festanca-2026/docs/component-migration-matrix.md
Ele converterá este plano em uma tabela operacional componente por componente.
80. ESTADO ATUAL
AUDIT:

COMPLETED


FINDINGS:

REGISTERED


BASELINE:

DOCUMENTED
PENDING FINAL FREEZE


MIGRATION PLAN:

CREATED


COMPONENT PILOT:

NOT STARTED


CONTROLLED MIGRATION:

NOT STARTED
81. GATE DE INÍCIO
Antes de iniciar MIG-PILOT-001:
[ ] CSS-FIND-0012 classificado

[ ] commit-base registrado

[ ] hashes registrados

[ ] screenshots baseline capturados

[ ] baseline marcada FROZEN

[ ] rollback validado
82. PRINCÍPIO FINAL
MIGRAR NÃO É SUBSTITUIR.

MIGRAR É TRANSFORMAR
SEM PERDER CONTROLE.
O Brand Design System deverá evoluir a Landing Page:
SEM APAGAR SUA HISTÓRIA

SEM QUEBRAR SUA OPERAÇÃO

SEM DESCARACTERIZAR SUA CULTURA
A transformação deverá ser:
VISÍVEL

MENSURÁVEL

REVERSÍVEL

AUDITÁVEL

DOCUMENTADA
83. STATUS DO DOCUMENTO
Documento:

apps/festanca-2026/docs/css-migration-plan.md


Versão:

1.0.0


Status:

OFFICIAL — MIGRATION PLANNING


Próximo artefato:

component-migration-matrix.md
FESTANÇA 2026
Official Brand Design System
Ao encontro do futuro, com os pés firmes na tradição.
