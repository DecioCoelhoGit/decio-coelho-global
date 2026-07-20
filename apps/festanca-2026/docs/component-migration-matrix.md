# FESTANÇA 2026

# Official Brand Design System

# Component Migration Matrix

## Matriz Oficial de Migração Controlada por Componente

**Versão:** 1.0.0  
**Status:** Oficial — Operational Migration Matrix  
**Projeto:** FESTANÇA 2026  
**Aplicação:** Landing Page Oficial  
**Local:** Vila Bela da Santíssima Trindade — Mato Grosso — Brasil

> **“Ao encontro do futuro, com os pés firmes na tradição.”**

---

# 1. FINALIDADE

Este documento estabelece a Matriz Oficial de Migração por Componente da Landing Page da FESTANÇA 2026.

Sua função é transformar o:

```text
css-migration-plan.md
em uma estrutura operacional rastreável, permitindo controlar individualmente cada componente da interface.
Cada item da Landing Page deverá possuir:
ID

nome

categoria

localização

wave

prioridade

risco

dependências

tokens envolvidos

estado atual

estratégia de migração

critérios de teste

rollback

status

evidências

findings relacionados
A matriz será a ponte entre:
PLANEJAMENTO
      ↓
EXECUÇÃO
      ↓
VALIDAÇÃO
      ↓
APROVAÇÃO
      ↓
HISTÓRICO
2. PRINCÍPIO OPERACIONAL
Nenhum componente deverá ser migrado apenas porque:
parece simples

está visualmente antigo

possui CSS duplicado

pode ser rapidamente alterado
Todo componente deverá primeiro ser:
IDENTIFICADO

CLASSIFICADO

MAPEADO

PRIORIZADO

TESTADO

DOCUMENTADO
3. DOCUMENTOS DE REFERÊNCIA
Esta matriz depende dos seguintes documentos:
apps/festanca-2026/docs/brand-integration-map.md

apps/festanca-2026/docs/css-audit-report.md

apps/festanca-2026/docs/css-findings-register.md

apps/festanca-2026/docs/css-baseline.md

apps/festanca-2026/docs/css-migration-plan.md
Infraestrutura visual:
assets/brand/tokens/index.json

assets/brand/tokens/tokens.css

assets/brand/tokens/theme-loader.js

apps/festanca-2026/css/brand-integration.css
4. IDENTIFICADOR OFICIAL
Cada item utilizará:
MIG-CMP-XXXX
Exemplo:
MIG-CMP-0001
O piloto utilizará:
MIG-PILOT-001
Os IDs nunca deverão ser reutilizados.
5. STATUS POSSÍVEIS
Estados oficiais:
DISCOVERED

MAPPED

PLANNED

READY

IN PROGRESS

BLOCKED

VALIDATING

APPROVED

ROLLED BACK

COMPLETED

DEFERRED
Fluxo ideal:
DISCOVERED
    ↓
MAPPED
    ↓
PLANNED
    ↓
READY
    ↓
IN PROGRESS
    ↓
VALIDATING
    ↓
APPROVED
    ↓
COMPLETED
6. WAVES
WAVE 0
PREPARATION

WAVE 1
VISUAL FOUNDATION

WAVE 2
SIMPLE COMPONENTS

WAVE 3
INTERACTIVE COMPONENTS

WAVE 4
COMPLEX STRUCTURES

WAVE 5
THEMES

WAVE 6
LEGACY DEPRECATION

WAVE 7
CONSOLIDATION
7. PRIORIDADES
P0 — BLOQUEADOR

P1 — CRÍTICO

P2 — ALTO

P3 — MÉDIO

P4 — BAIXO
8. NÍVEIS DE RISCO
LOW

MEDIUM

HIGH

CRITICAL
Avaliar:
impacto visual

impacto funcional

dependência JavaScript

complexidade responsiva

sensibilidade cultural

acessibilidade

facilidade de rollback
9. FAMÍLIAS DE TOKENS
Os componentes poderão utilizar:
COLOR

TYPOGRAPHY

SPACING

RADIUS

SHADOW

ANIMATION

ICON

SYMBOL

THEME
Arquivos:
colors.json

typography.json

spacing.json

radius.json

shadows.json

animations.json

icons.json

symbols.json

themes.json
10. CAMPOS OBRIGATÓRIOS
Cada registro deverá conter:
Migration ID

Component Name

Category

DOM Reference

CSS Reference

JS Dependency

Wave

Priority

Risk

Token Families

Findings

Baseline Evidence

Migration Strategy

Test Criteria

Rollback Strategy

Status
11. MATRIZ MASTER
ID
Componente
Wave
Prioridade
Risco
Status
MIG-CMP-0001
Tokens Foundation
1
P1
MEDIUM
PLANNED
MIG-CMP-0002
Body / Root
1
P1
HIGH
PLANNED
MIG-CMP-0003
Typography Global
1
P2
MEDIUM
PLANNED
MIG-CMP-0004
Background Global
1
P2
MEDIUM
PLANNED
MIG-CMP-0005
Links
2
P3
LOW
PLANNED
MIG-CMP-0006
Dividers
2
P4
LOW
PLANNED
MIG-CMP-0007
Badges
2
P4
LOW
PLANNED
MIG-CMP-0008
Simple Card
2
P2
LOW
PLANNED
MIG-CMP-0009
Secondary Button
2
P3
LOW
PLANNED
MIG-CMP-0010
Primary Button
3
P2
MEDIUM
PLANNED
MIG-CMP-0011
Floating WhatsApp
3
P1
HIGH
PLANNED
MIG-CMP-0012
Form Inputs
3
P2
MEDIUM
PLANNED
MIG-CMP-0013
Select Controls
3
P2
MEDIUM
PLANNED
MIG-CMP-0014
Textarea
3
P3
MEDIUM
PLANNED
MIG-CMP-0015
Checkbox / Radio
3
P3
MEDIUM
PLANNED
MIG-CMP-0016
Filter Controls
3
P1
HIGH
PLANNED
MIG-CMP-0017
Header
4
P0
CRITICAL
PLANNED
MIG-CMP-0018
Main Navigation
4
P0
CRITICAL
PLANNED
MIG-CMP-0019
Mobile Menu
4
P0
CRITICAL
PLANNED
MIG-CMP-0020
Hero
4
P1
HIGH
PLANNED
MIG-CMP-0021
Main Grid
4
P1
HIGH
PLANNED
MIG-CMP-0022
Programming Section
4
P0
CRITICAL
PLANNED
MIG-CMP-0023
Event Cards
4
P1
HIGH
PLANNED
MIG-CMP-0024
Cultural Groups Section
4
P1
HIGH
PLANNED
MIG-CMP-0025
Location / Maps
4
P1
HIGH
PLANNED
MIG-CMP-0026
Forms Complex
4
P0
CRITICAL
PLANNED
MIG-CMP-0027
Footer
4
P2
MEDIUM
PLANNED
MIG-CMP-0028
Theme Dark
5
P1
MEDIUM
PLANNED
MIG-CMP-0029
Theme High Contrast
5
P1
HIGH
PLANNED
MIG-CMP-0030
Theme Light
5
P3
MEDIUM
PLANNED
MIG-CMP-0031
Theme Heritage
5
P3
MEDIUM
PLANNED
MIG-CMP-0032
Theme Ceremonial
5
P3
HIGH
PLANNED
MIG-CMP-0033
Theme Holographic
5
P4
HIGH
PLANNED
MIG-CMP-0034
Legacy CSS Cleanup
6
P2
HIGH
PLANNED
MIG-CMP-0035
Duplicate Rules Removal
6
P2
HIGH
PLANNED
MIG-CMP-0036
Final Consolidation
7
P1
MEDIUM
PLANNED
12. MIG-CMP-0001 — TOKENS FOUNDATION
Component:

Design Tokens Foundation
Wave:
1
Prioridade:
P1
Risco:
MEDIUM
Dependências:
tokens.css

index.json

themes.json

brand-integration.css
Token Families:
ALL
Estratégia:
Garantir carregamento sem alterar inicialmente
comportamento visual existente.
Teste:
[ ] CSS carrega

[ ] sem erro 404

[ ] variáveis disponíveis

[ ] nenhuma regressão visual

[ ] nenhum erro console
Status:
PLANNED
13. MIG-CMP-0002 — ROOT / BODY
Escopo:
html

body

:root
Wave:
1
Prioridade:
P1
Risco:
HIGH
Tokens:
COLOR

TYPOGRAPHY

SPACING

THEME
Riscos:
herança global

contraste

scroll

background

font rendering
Teste obrigatório:
mobile

desktop

zoom

scroll

theme
14. MIG-CMP-0003 — TYPOGRAPHY GLOBAL
Abrange:
h1

h2

h3

h4

p

small

labels

captions
Tokens:
TYPOGRAPHY

COLOR

SPACING
Não alterar simultaneamente:
font family

font size

line height

spacing
sem comparação visual.
15. MIG-CMP-0004 — BACKGROUND GLOBAL
Escopo:
body

sections

major surfaces
Tokens:
COLOR

THEME
Critérios:
contraste preservado

sem flash visual

sem perda de legibilidade
16. MIG-CMP-0005 — LINKS
Estados:
default

hover

focus

visited

active
Tokens:
COLOR

TYPOGRAPHY

ANIMATION
Critério obrigatório:
foco visível
17. MIG-CMP-0006 — DIVIDERS
Escopo:
hr

section separators

ornamental separators
Tokens:
COLOR

SPACING

SYMBOL
Risco:
LOW
Excelente candidato para quick win.
18. MIG-CMP-0007 — BADGES
Tokens:
COLOR

TYPOGRAPHY

SPACING

RADIUS
Validar:
texto curto

texto longo

mobile

high contrast
19. MIG-CMP-0008 — SIMPLE CARD
Este será o principal candidato a:
MIG-PILOT-001
Escopo inicial:
background

border

radius

shadow

padding

title

body
Tokens:
COLOR

TYPOGRAPHY

SPACING

RADIUS

SHADOW
Não migrar inicialmente:
animation

JavaScript

complex responsive behavior
20. PILOT MAPPING
MIG-PILOT-001
        =
MIG-CMP-0008
Objetivo:
provar integração real
Critérios:
[ ] before capturado

[ ] after capturado

[ ] visual equivalente ou superior

[ ] sem regressão funcional

[ ] sem overflow

[ ] contraste válido

[ ] rollback validado
21. MIG-CMP-0009 — SECONDARY BUTTON
Tokens:
COLOR

TYPOGRAPHY

SPACING

RADIUS

SHADOW

ANIMATION
Estados:
default

hover

focus

active

disabled
22. MIG-CMP-0010 — PRIMARY BUTTON
Risco maior devido à relevância de CTA.
Validar:
contraste

focus

touch target

hover

loading state

disabled
23. MIG-CMP-0011 — FLOATING WHATSAPP
Prioridade:
P1
Risco:
HIGH
Dependências:
position fixed

z-index

safe-area

mobile viewport
Não alterar comportamento de link.
Teste:
[ ] não cobre conteúdo

[ ] respeita safe area

[ ] touch target adequado

[ ] link funcional
24. MIG-CMP-0012 — FORM INPUTS
Escopo:
text

email

tel

number

date
Tokens:
COLOR

TYPOGRAPHY

SPACING

RADIUS

SHADOW
Estados:
default

focus

error

disabled

readonly
25. MIG-CMP-0013 — SELECT CONTROLS
Dependências possíveis:
native browser behavior

JavaScript filters
Preservar:
name

id

value

events
26. MIG-CMP-0014 — TEXTAREA
Validar:
resize

overflow

placeholder

focus

mobile keyboard
27. MIG-CMP-0015 — CHECKBOX / RADIO
Não substituir controles nativos sem justificativa.
Validar:
keyboard

screen reader

checked

unchecked

disabled
28. MIG-CMP-0016 — FILTER CONTROLS
Prioridade:
P1
Risco:
HIGH
Dependências:
programação dinâmica

JavaScript

data attributes
Preservar comportamento integral.
29. MIG-CMP-0017 — HEADER
Prioridade:
P0
Risco:
CRITICAL
Mapear antes:
height

position

sticky/fixed

logo

navigation

buttons

z-index

breakpoints

JS
Nunca usar como piloto.
30. MIG-CMP-0018 — MAIN NAVIGATION
Dependências:
anchors

scroll

active states

mobile transition
Validar:
keyboard

focus

touch

links

deep links
31. MIG-CMP-0019 — MOBILE MENU
Prioridade:
P0
Risco:
CRITICAL
Estados:
closed

opening

open

closing
Validar:
scroll lock

overlay

focus

escape

ARIA

back button behavior
32. MIG-CMP-0020 — HERO
Mapear:
image

overlay

headline

subtitle

CTA

spacing

responsive crop
Tokens:
COLOR

TYPOGRAPHY

SPACING

SHADOW

ANIMATION
33. MIG-CMP-0021 — MAIN GRID
Riscos:
layout shifts

overflow

breakpoint regressions
Tokens:
SPACING

RADIUS
Teste:
360

390

412

768

1366

1920
34. MIG-CMP-0022 — PROGRAMMING SECTION
Prioridade:
P0
Risco:
CRITICAL
Dependências:
programacao-2026.json

filters

JavaScript

event rendering
Preservar integralmente:
datas

horários

irmandades

categorias

localizações

filtros
35. MIG-CMP-0023 — EVENT CARDS
Tokens:
COLOR

TYPOGRAPHY

SPACING

RADIUS

SHADOW

ICON
Validar:
conteúdo variável

textos longos

datas

horários

mobile
36. MIG-CMP-0024 — CULTURAL GROUPS
Abrange:
Congo

Conguinho

Chorado

Choradinho
Risco:
HIGH
Revisão obrigatória:
visual

cultural

provenance
Não substituir símbolos ou ícones sem validação.
37. MIG-CMP-0025 — LOCATION / MAPS
Dependências:
Google Maps

locationId

coordinates

fallback queries
Não alterar:
URLs

IDs

coordenadas verificadas

regras de privacidade
38. MIG-CMP-0026 — COMPLEX FORMS
Prioridade:
P0
Risco:
CRITICAL
Dependências:
validation

submission

WhatsApp workflows

dynamic fields
Migrar por subcomponente.
39. MIG-CMP-0027 — FOOTER
Mapear:
credits

links

contact

copyright

social

institutional references
Tokens:
COLOR

TYPOGRAPHY

SPACING

ICON
40. MIG-CMP-0028 — DARK THEME
Tema inicial preferencial.
Objetivo:
formalizar visual já próximo ao existente
Status:
PLANNED
41. MIG-CMP-0029 — HIGH-CONTRAST THEME
Prioridade:
P1
Risco:
HIGH
Critério:
acessibilidade
Não tratar como tema decorativo.
42. MIG-CMP-0030 — LIGHT THEME
Migrar somente após estabilidade do dark.
Validar:
contraste

imagens

logos

símbolos

borders
43. MIG-CMP-0031 — HERITAGE THEME
Objetivo:
valorizar patrimônio histórico-cultural
Exige revisão:
visual

cultural
44. MIG-CMP-0032 — CEREMONIAL THEME
Aplicação prevista:
conteúdo solene

reinado

programações especiais

cerimônias
Não generalizar seu uso.
45. MIG-CMP-0033 — HOLOGRAPHIC THEME
Uso:
experimental

institucional

demonstrativo
Prioridade:
P4
Não bloquear publicação principal.
46. MIG-CMP-0034 — LEGACY CSS CLEANUP
Somente após:
componentes migrados

testes aprovados

observação
Nunca:
delete-first
Fluxo:
DEPRECATE
    ↓
OBSERVE
    ↓
VERIFY
    ↓
REMOVE
47. MIG-CMP-0035 — DUPLICATE RULES REMOVAL
Antes de remover:
verificar cascade

verificar specificity

verificar breakpoint

verificar JS dependency
48. MIG-CMP-0036 — FINAL CONSOLIDATION
Objetivos:
fechar findings

atualizar CHANGELOG

revisar documentação

validar tokens

validar temas

revisar accessibility

gerar baseline pós-migração
49. DEPENDENCY TYPES
Classificações:
HTML

CSS

JAVASCRIPT

JSON DATA

EXTERNAL API

ACCESSIBILITY

CULTURAL

CONTENT

THEME
50. TOKEN MAPPING STATUS
Para cada componente:
NOT MAPPED

PARTIAL

MAPPED

VALIDATED
51. BASELINE EVIDENCE STATUS
MISSING

PARTIAL

CAPTURED

VERIFIED
52. TEST STATUS
NOT STARTED

RUNNING

PASSED

FAILED

BLOCKED
53. ROLLBACK STATUS
NOT DEFINED

DEFINED

TESTED

VERIFIED
Nenhum componente deverá entrar em:
READY
com rollback:
NOT DEFINED
54. EVIDÊNCIAS
Padrão:
migration/<id>/
Exemplo:
migration/MIG-CMP-0008/
Conteúdo:
before-mobile.png

after-mobile.png

before-desktop.png

after-desktop.png

notes.md
55. RELAÇÃO COM FINDINGS
Campo:
Related Findings
Formato:
CSS-FIND-0001

CSS-FIND-0004
Ou:
NONE
56. GATE READY
Para um componente passar para:
READY
deve possuir:
[ ] baseline registrada

[ ] DOM mapeado

[ ] CSS mapeado

[ ] JS dependency mapeada

[ ] tokens definidos

[ ] risco avaliado

[ ] plano de teste

[ ] rollback definido

[ ] findings relacionados
57. GATE APPROVED
Para:
APPROVED
deve possuir:
[ ] implementação concluída

[ ] mobile testado

[ ] desktop testado

[ ] acessibilidade testada

[ ] regressão avaliada

[ ] screenshots comparados

[ ] rollback disponível

[ ] decisão registrada
58. GATE COMPLETED
Para:
COMPLETED
deve possuir:
[ ] aprovado

[ ] commit registrado

[ ] finding atualizado

[ ] CHANGELOG atualizado

[ ] documentação atualizada
59. COMPONENT RECORD TEMPLATE
Usar para novos componentes:
Migration ID:

Component Name:

Category:

DOM Reference:

CSS Reference:

JS Dependency:

Data Dependency:

Wave:

Priority:

Risk:

Token Families:

Related Findings:

Baseline Evidence:

Migration Strategy:

Test Criteria:

Rollback Strategy:

Status:
60. PILOT RECORD
Migration ID:

MIG-PILOT-001


Component:

Simple Card


Linked Component:

MIG-CMP-0008


Wave:

2


Priority:

P2


Risk:

LOW


Status:

PLANNED
61. PILOT ENTRY CRITERIA
[ ] baseline FROZEN

[ ] CSS-FIND-0012 classificado

[ ] simple card identificado no DOM real

[ ] seletores CSS confirmados

[ ] tokens mapeados

[ ] screenshots before capturados

[ ] rollback definido
62. PILOT MIGRATION SCOPE
Permitido inicialmente:
background

border

text color

padding

radius

shadow
Não permitido inicialmente:
DOM restructuring

class renaming

JavaScript changes

animation redesign

responsive architecture change
63. PILOT SUCCESS CRITERIA
ZERO FUNCTIONAL REGRESSION

ZERO RESPONSIVE BREAK

ZERO ACCESSIBILITY REGRESSION

TOKENIZATION CONFIRMED

ROLLBACK CONFIRMED
64. PILOT RESULT
PILOT STATUS:

NOT STARTED
Quando concluído:
PASSED
ou:
FAILED
Nunca:
PARTIALLY PASSED
sem documentação explícita.
65. COMPONENT PRIORITY ORDER
Ordem recomendada:
01
MIG-CMP-0001
Tokens Foundation

02
MIG-CMP-0008
Simple Card Pilot

03
MIG-CMP-0006
Dividers

04
MIG-CMP-0007
Badges

05
MIG-CMP-0009
Secondary Buttons

06
MIG-CMP-0003
Typography

07
MIG-CMP-0010
Primary Buttons

08
MIG-CMP-0012 → 0016
Form Controls

09
MIG-CMP-0023
Event Cards

10
MIG-CMP-0021
Grid

11
MIG-CMP-0020
Hero

12
MIG-CMP-0017 → 0019
Header / Navigation / Mobile Menu

13
MIG-CMP-0022
Programming

14
MIG-CMP-0028+
Themes
66. NÃO MIGRAR AINDA
Enquanto o piloto não estiver aprovado:
HEADER

MOBILE MENU

PROGRAMMING

COMPLEX FORMS

MAPS

THEMES MULTIPLE
67. PRINCÍPIO DE LOTE
Cada lote deverá conter preferencialmente:
1 componente
ou:
1 família visual coerente
Evitar:
10 componentes independentes
em uma única alteração.
68. CHANGE BUDGET
Uma migração será considerada excessivamente ampla quando alterar simultaneamente:
DOM

CSS

JavaScript

JSON

tokens

theme
do mesmo componente sem necessidade.
Preferir decomposição.
69. PERFORMANCE CHECK
Cada componente migrado deverá observar:
layout shift

paint

reflow

CSS size

JS dependency

animation cost
Especialmente:
shadows

blur

filters

holographic effects
70. ACCESSIBILITY CHECK
Checklist:
[ ] contraste

[ ] foco

[ ] teclado

[ ] touch target

[ ] zoom

[ ] reduced motion

[ ] semantic HTML preservado

[ ] ARIA preservado
71. CULTURAL CHECK
Quando aplicável:
[ ] nome correto

[ ] símbolo correto

[ ] contexto correto

[ ] atribuição correta

[ ] imagem correta

[ ] significado preservado
72. RESPONSIVE CHECK
Testar:
360

390

412

768

1024

1366

1920
Observar:
overflow

wrapping

grid collapse

fixed elements

touch targets
73. BROWSER CHECK
Chrome Android

Samsung Internet

Chrome Desktop

Firefox

Edge
Quando disponível:
Safari iOS
74. DECISION RULE
Quando houver dúvida:
PRESERVAR PRIMEIRO.

MIGRAR DEPOIS.
Não alterar componente sem compreender:
seu papel

suas dependências

seus estados

seu contexto cultural
75. MATRIZ DE RESUMO POR WAVE
WAVE 1
MIG-CMP-0001

MIG-CMP-0002

MIG-CMP-0003

MIG-CMP-0004
WAVE 2
MIG-CMP-0005

MIG-CMP-0006

MIG-CMP-0007

MIG-CMP-0008

MIG-CMP-0009
WAVE 3
MIG-CMP-0010 → MIG-CMP-0016
WAVE 4
MIG-CMP-0017 → MIG-CMP-0027
WAVE 5
MIG-CMP-0028 → MIG-CMP-0033
WAVE 6
MIG-CMP-0034

MIG-CMP-0035
WAVE 7
MIG-CMP-0036
76. PROGRESS INDICATOR
Estado inicial:
TOTAL COMPONENTS:

36


DISCOVERED:

36


MAPPED:

0


READY:

0


IN PROGRESS:

0


APPROVED:

0


COMPLETED:

0
Esses números deverão ser atualizados progressivamente.
77. MIGRATION COMPLETION FORMULA
COMPLETION %

=

COMPLETED COMPONENTS
/
TOTAL COMPONENTS
×
100
Não considerar apenas quantidade.
Componentes críticos possuem peso qualitativo maior.
78. BASELINE RELATIONSHIP
Todos os componentes serão comparados ao marco:
ANTES DO BRAND DESIGN SYSTEM
Nenhuma comparação deverá utilizar memória visual.
Utilizar:
evidência

screenshots

hashes

commits

documentação
79. POST-MIGRATION BASELINE
Ao final será criado novo marco:
AFTER BRAND DESIGN SYSTEM
Permitindo comparar:
BEFORE
    ↓
MIGRATION
    ↓
AFTER
80. AUDIT TRAIL
Cada componente deverá deixar trilha:
ID

commit

before

after

decision

tests

approval
81. GOVERNANÇA
Fluxo:
PROPOSTA

↓

MAPEAMENTO

↓

REVISÃO TÉCNICA

↓

MIGRAÇÃO

↓

TESTE

↓

REVISÃO VISUAL

↓

REVISÃO CULTURAL

↓

ACESSIBILIDADE

↓

APROVAÇÃO

↓

DOCUMENTAÇÃO
82. PRÓXIMO PASSO
Após concluir esta matriz:
apps/festanca-2026/docs/component-pilot-plan.md
Esse documento deverá detalhar exclusivamente:
MIG-PILOT-001
e o primeiro componente real escolhido.
83. PRÓXIMO MARCO
A sequência passa a ser:
AUDIT
  ↓
FINDINGS
  ↓
BASELINE
  ↓
MIGRATION PLAN
  ↓
COMPONENT MATRIX
  ↓
PILOT PLAN
  ↓
PILOT IMPLEMENTATION
  ↓
PILOT REPORT
  ↓
CONTROLLED MIGRATION
84. REGRA CRÍTICA
A matriz inicialmente contém uma classificação arquitetural.
Antes da execução de cada item, devemos confirmar no código real:
classe

ID

estrutura DOM

arquivo CSS

dependência JavaScript

estado responsivo
Portanto:
A MATRIZ NÃO SUBSTITUI A INSPEÇÃO DO CÓDIGO.
Ela governa essa inspeção.
85. PRINCÍPIO FINAL
NÃO MIGRAMOS PÁGINAS.

MIGRAMOS COMPONENTES.

NÃO MIGRAMOS COMPONENTES ÀS CEGAS.

MIGRAMOS COM EVIDÊNCIA.
Cada mudança deverá poder responder:
O QUE ERA?

O QUE MUDOU?

POR QUE MUDOU?

QUEM APROVOU?

COMO FOI TESTADO?

COMO PODE SER REVERTIDO?
86. STATUS DO DOCUMENTO
Documento:

apps/festanca-2026/docs/component-migration-matrix.md


Versão:

1.0.0


Status:

OFFICIAL — OPERATIONAL MIGRATION MATRIX


Total inicial de componentes:

36


Piloto vinculado:

MIG-PILOT-001
→ MIG-CMP-0008


Próximo artefato:

apps/festanca-2026/docs/component-pilot-plan.md
FESTANÇA 2026
Official Brand Design System
Ao encontro do futuro, com os pés firmes na tradição.
