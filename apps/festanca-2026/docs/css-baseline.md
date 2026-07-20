# FESTANÇA 2026

# Official Brand Design System

# CSS Baseline

## Marco Técnico Oficial — Estado Pré-Migração da Landing Page

**Versão:** 1.0.0  
**Status:** Oficial — Pre-Migration Baseline  
**Projeto:** FESTANÇA 2026  
**Aplicação:** Landing Page Oficial  
**Local:** Vila Bela da Santíssima Trindade — Mato Grosso — Brasil

> **“Ao encontro do futuro, com os pés firmes na tradição.”**

---

# 1. FINALIDADE

Este documento estabelece a baseline técnica oficial da Landing Page da FESTANÇA 2026 antes da primeira migração estrutural para o novo:

```text
OFFICIAL BRAND DESIGN SYSTEM
Seu objetivo é congelar e documentar o estado atual da aplicação, criando um ponto de referência permanente denominado:
BASELINE PRÉ-BRAND DESIGN SYSTEM
A partir deste marco, toda alteração futura deverá poder ser comparada com o estado anterior.
A baseline permitirá:
comparação visual

comparação estrutural

detecção de regressões

rollback seguro

auditoria técnica

rastreabilidade histórica

controle de evolução
2. PRINCÍPIO DA BASELINE
A baseline representa:
O ESTADO CONHECIDO E DOCUMENTADO
ANTES DA MIGRAÇÃO
Ela não significa que o sistema esteja perfeito.
Pode conter:
problemas conhecidos

CSS legado

valores hardcoded

duplicações

dependências

inconsistências responsivas

elementos ainda não tokenizados
Sua função é registrar fielmente o estado existente.
Princípio:
Não se compara evolução sem preservar o ponto de partida.
3. RELAÇÃO COM A ARQUITETURA DOCUMENTAL
A baseline integra a seguinte cadeia:
css-audit-report.md
        ↓
css-findings-register.md
        ↓
css-baseline.md
        ↓
css-migration-plan.md
        ↓
component-migration-matrix.md
        ↓
IMPLEMENTAÇÃO CONTROLADA
Documentos relacionados:
apps/festanca-2026/docs/brand-integration-map.md

apps/festanca-2026/docs/css-audit-report.md

apps/festanca-2026/docs/css-findings-register.md

assets/brand/quality-checklist.md

assets/brand/governance.md
4. IDENTIFICAÇÃO DA BASELINE
Identificador oficial:
FESTANCA-2026-CSS-BASELINE-001
Tipo:
PRE-MIGRATION
Estado:
FROZEN REFERENCE
Data de criação:
2026-07-19
Branch principal:
main
Repositório:
decio-coelho-global
Aplicação:
apps/festanca-2026/
5. COMMIT-BASE
O commit-base deverá representar exatamente o estado utilizado como referência da baseline.
Registrar após sincronização:
COMMIT-BASE:

TBD
Comando:
git rev-parse HEAD
Registrar também:
SHORT COMMIT:

TBD
Comando:
git rev-parse --short HEAD
A baseline somente será considerada congelada após registrar o commit real.
6. ESTADO DO REPOSITÓRIO
Antes do congelamento:
git status
Resultado esperado:
working tree clean
Caso existam alterações:
modified

untracked

deleted

staged
elas deverão ser classificadas antes da baseline.
Registrar:
WORKING TREE STATUS:

TBD
7. ESTRUTURA PRINCIPAL DA APLICAÇÃO
Diretório-base:
apps/festanca-2026/
Estrutura esperada:
apps/festanca-2026/
├── index.html
├── css/
├── js/
├── assets/
├── data/
└── docs/
A estrutura real deverá ser capturada por:
find apps/festanca-2026 \
  -maxdepth 3 \
  -type f \
  | sort
Resultado:
TBD — CAPTURAR NO MOMENTO DO CONGELAMENTO
8. ARQUIVO HTML PRINCIPAL
Arquivo:
apps/festanca-2026/index.html
Registrar:
existência

tamanho

quantidade de linhas

hash

data
Comandos:
ls -lh apps/festanca-2026/index.html

wc -l apps/festanca-2026/index.html

sha256sum apps/festanca-2026/index.html
Resultado:
SIZE:

TBD

LINES:

TBD

SHA256:

TBD
9. ARQUIVOS CSS ATIVOS
Diretório:
apps/festanca-2026/css/
Arquivos conhecidos:
style.css

brand-integration.css
Camada global externa:
assets/brand/tokens/tokens.css
Inventário:
find apps/festanca-2026/css \
  -maxdepth 1 \
  -type f \
  -name '*.css' \
  -print \
  | sort
Registrar:
CSS FILES:

TBD
10. ORDEM REAL DE CARREGAMENTO DOS CSS
A ordem real deve ser extraída diretamente do HTML.
Comando:
grep -nEi \
'<link[^>]+stylesheet' \
apps/festanca-2026/index.html
Registrar exatamente a sequência encontrada.
Exemplo estrutural:
1. tokens.css

2. brand-integration.css

3. style.css
ou:
1. style.css

2. tokens.css

3. brand-integration.css
Status atual:
TBD — NÃO PRESUMIR
A ordem encontrada será considerada:
BASELINE CASCADE ORDER
11. CSS PRINCIPAL LEGADO
Arquivo principal:
apps/festanca-2026/css/style.css
Registrar:
wc -l apps/festanca-2026/css/style.css

ls -lh apps/festanca-2026/css/style.css

sha256sum apps/festanca-2026/css/style.css
Campos:
LINES:

TBD

SIZE:

TBD

SHA256:

TBD
Esse hash permitirá comprovar futuramente se o arquivo foi alterado.
12. CAMADA DE INTEGRAÇÃO
Arquivo:
apps/festanca-2026/css/brand-integration.css
Função:
PONTE DE COMPATIBILIDADE
Entre:
tokens.css
        ↓
brand-integration.css
        ↓
CSS legado / componentes
Registrar:
LINES:

TBD

SIZE:

TBD

SHA256:

TBD
13. DESIGN TOKENS CSS
Arquivo:
assets/brand/tokens/tokens.css
Status:
EXECUTABLE DESIGN TOKEN LAYER
Registrar:
wc -l assets/brand/tokens/tokens.css

sha256sum assets/brand/tokens/tokens.css
Campos:
LINES:

TBD

SHA256:

TBD
14. THEME LOADER
Arquivo:
assets/brand/tokens/theme-loader.js
Função:
controle de tema

persistência

preferência do usuário

high contrast

reduced motion

runtime de identidade
Registrar:
LINES:

TBD

SHA256:

TBD
15. DESIGN TOKENS DISPONÍVEIS
Arquivos oficiais:
colors.json

typography.json

spacing.json

radius.json

shadows.json

animations.json

icons.json

symbols.json

themes.json

index.json
Inventário:
find assets/brand/tokens \
  -maxdepth 1 \
  -type f \
  -print \
  | sort
Quantidade esperada de arquivos JSON centrais:
10
Além dos executáveis:
tokens.css

theme-loader.js

README.md
16. JAVASCRIPT DA LANDING PAGE
Inventariar:
find apps/festanca-2026/js \
  -maxdepth 2 \
  -type f \
  -print \
  | sort
Registrar:
JS FILES:

TBD
É essencial porque CSS e JavaScript podem estar acoplados por:
classes

ids

data attributes

inline styles

classList

dataset
17. DEPENDÊNCIAS CSS → JAVASCRIPT
Buscar:
grep -RInE \
'classList|className|dataset|setAttribute|style\.' \
apps/festanca-2026/js
Classificar resultados em:
CLASS DEPENDENCY

STATE DEPENDENCY

DATA ATTRIBUTE

INLINE STYLE

THEME DEPENDENCY
Resultado baseline:
TBD
18. IDS DO HTML
Capturar IDs:
grep -oE \
'id="[^"]+"' \
apps/festanca-2026/index.html \
| sort -u
Objetivo:
preservar dependências

detectar duplicação

mapear navegação

mapear âncoras

mapear JavaScript
Resultado:
TBD
19. CLASSES PRINCIPAIS DO HTML
Captura inicial:
grep -oE \
'class="[^"]+"' \
apps/festanca-2026/index.html
Posteriormente, normalizar para inventário.
Categorias:
layout

component

utility

state

javascript hook

legacy

unknown
Status:
BASELINE INVENTORY PENDING
20. VARIÁVEIS CSS EXISTENTES
Buscar:
grep -RIn \
'--[a-zA-Z0-9_-]*:' \
apps/festanca-2026/css \
assets/brand/tokens/tokens.css
Objetivo:
identificar variáveis existentes

detectar duplicação semântica

mapear aliases

mapear tokens oficiais
Resultado:
TBD
21. VALORES HARDCODED
Tipos a inventariar:
HEX

RGB

RGBA

HSL

PX

REM

EM

VW

VH
Exemplo:
grep -RInE \
'#[0-9A-Fa-f]{3,8}|rgba?\(|hsla?\(' \
apps/festanca-2026/css
Status:
NÃO REMOVER AUTOMATICAMENTE
Cada ocorrência deverá ser classificada posteriormente.
22. MEDIA QUERIES
Comando:
grep -RIn \
'@media' \
apps/festanca-2026/css
Registrar:
TOTAL:

TBD
Classificar:
mobile-first

desktop-first

component-specific

duplicated

legacy
23. BREAKPOINTS
Extrair valores:
grep -RInE \
'min-width|max-width' \
apps/festanca-2026/css
Registrar valores únicos.
Exemplo:
320px

480px

768px

1024px

1280px
Somente registrar valores realmente encontrados.
24. RESPONSIVIDADE
Viewports baseline recomendados:
320 x 568

360 x 800

375 x 812

390 x 844

412 x 915

768 x 1024

1024 x 768

1366 x 768

1440 x 900

1920 x 1080
Classificação por viewport:
PASS

WARNING

FAIL

NOT TESTED
Tabela:
Viewport
Status
Observação
320x568
TBD
TBD
360x800
TBD
TBD
375x812
TBD
TBD
390x844
TBD
TBD
412x915
TBD
TBD
768x1024
TBD
TBD
1024x768
TBD
TBD
1366x768
TBD
TBD
1440x900
TBD
TBD
1920x1080
TBD
TBD
25. MOBILE BASELINE
Elementos críticos:
header

menu

hero

cards

formulários

programação

botões

rodapé

floating actions
Verificar:
overflow horizontal

texto cortado

botões pequenos

sobreposição

z-index

menu móvel

scroll lock

formulários
Status:
TBD
26. DESKTOP BASELINE
Verificar:
largura máxima

alinhamento

grid

hero

cards

navegação

imagens

espaçamento

rodapé
Status:
TBD
27. OVERFLOW
Busca CSS:
grep -RInE \
'overflow|overflow-x|overflow-y' \
apps/festanca-2026/css
Testar também manualmente:
320px

360px

390px
Resultado:
TBD
28. Z-INDEX
Inventário:
grep -RIn \
'z-index' \
apps/festanca-2026/css
Elementos críticos:
header

menu mobile

modal

floating buttons

overlay

dropdown
Registrar valores encontrados:
TBD
29. POSITION FIXED / STICKY
Buscar:
grep -RInE \
'position:[[:space:]]*(fixed|sticky)' \
apps/festanca-2026/css
Riscos:
sobreposição

mobile viewport

teclado virtual

scroll

safe areas
Resultado:
TBD
30. INLINE STYLES
Buscar:
grep -nEi \
'style="' \
apps/festanca-2026/index.html
Quantidade:
TBD
Classificação:
temporary

required

legacy

tokenizable
31. IMPORTANT
Buscar:
grep -RIn \
'!important' \
apps/festanca-2026/css
Quantidade:
TBD
Cada ocorrência deverá ser posteriormente classificada.
32. ESPECIFICIDADE
Pontos de atenção:
IDs

seletores longos

nested selectors

!important

inline style
Status baseline:
TBD
Não refatorar durante o congelamento.
33. CSS DUPLICADO
Possíveis duplicações deverão ser apenas registradas.
Não remover.
Categorias:
exact duplicate

semantic duplicate

responsive duplicate

legacy override
Resultado:
TBD
34. CSS NÃO UTILIZADO
Nenhum seletor será considerado inutilizado apenas por busca textual.
Antes de classificar como UNUSED verificar:
HTML

JavaScript

templates

dynamic classes

runtime

data attributes
Status:
PENDING AUDIT
35. TIPOGRAFIA
Registrar:
font-family

font-size

font-weight

line-height

letter-spacing

text-transform
Comparar futuramente com:
assets/brand/tokens/typography.json
Baseline:
TBD
36. CORES
Registrar principais cores encontradas.
Comparação futura:
CSS LEGADO
      ↕
colors.json
      ↕
tokens.css
Não substituir durante baseline.
37. ESPAÇAMENTOS
Inventariar:
margin

padding

gap

row-gap

column-gap
Comparar futuramente com:
spacing.json
Status:
TBD
38. BORDER RADIUS
Buscar:
grep -RIn \
'border-radius' \
apps/festanca-2026/css
Comparar futuramente com:
radius.json
Resultado:
TBD
39. SOMBRAS
Buscar:
grep -RInE \
'box-shadow|text-shadow|drop-shadow' \
apps/festanca-2026/css
Comparar com:
shadows.json
Resultado:
TBD
40. ANIMAÇÕES
Buscar:
grep -RInE \
'animation|transition|@keyframes' \
apps/festanca-2026/css
Comparar com:
animations.json
Verificar:
prefers-reduced-motion
Resultado:
TBD
41. THEMES
Temas definidos no novo Design System:
dark

light

heritage

ceremonial

high-contrast

holographic
Na baseline registrar quais realmente estão ativos.
Status:
TBD
42. DATA-THEME
Buscar:
grep -RIn \
'data-theme' \
apps/festanca-2026 \
assets/brand/tokens
Registrar:
HTML:

TBD

CSS:

TBD

JS:

TBD
43. ACESSIBILIDADE
Baseline mínima:
contraste

foco visível

navegação por teclado

tamanho de alvo

zoom

texto alternativo

semântica

reduced motion

high contrast
Tabela:
Critério
Status
Contraste
TBD
Foco
TBD
Teclado
TBD
Touch Target
TBD
Zoom
TBD
Alt Text
TBD
Semântica
TBD
Reduced Motion
TBD
High Contrast
TBD
44. IMAGENS
Inventário:
find apps/festanca-2026/assets \
  -type f \
  | sort
Registrar:
quantidade

formatos

arquivos grandes

alt text

dimensões críticas
Não recomprimir durante baseline.
45. ÍCONES
Diretório oficial:
assets/brand/icons/
Registro técnico:
assets/brand/tokens/icons.json
Na baseline verificar:
quais já são usados

quais ainda não estão integrados
Status:
TBD
46. SÍMBOLOS
Diretório:
assets/brand/symbols/
Registro:
assets/brand/tokens/symbols.json
Verificar:
estrela-festanca

arco-dourado

ornamentos

molduras

elementos gráficos
Status de integração:
TBD
47. FORMULÁRIOS
Mapear:
inputs

selects

textareas

buttons

labels

fieldset

validation
Verificar:
focus

erro

contraste

touch target

mobile keyboard

layout
Status:
TBD
48. BOTÕES
Categorias:
primary

secondary

ghost

icon

floating

navigation
Verificar:
altura mínima

contraste

hover

focus

disabled

active
Status:
TBD
49. HEADER
Elemento crítico.
Não migrar primeiro.
Registrar:
altura

posição

sticky/fixed

logo

menu

z-index

mobile behavior
Status:
BASELINE CRITICAL COMPONENT
50. HERO
Registrar:
layout

background

imagem

overlay

headline

CTA

responsividade
Status:
BASELINE CRITICAL COMPONENT
51. MENU MOBILE
Verificar:
abertura

fechamento

scroll lock

focus

aria

overlay

z-index

touch
Status:
TBD
52. CARDS
Registrar:
tipos

padding

radius

shadow

imagem

tipografia

grid
Candidato futuro a migração piloto:
CARD SIMPLES
Não migrar ainda.
53. FLOATING BUTTONS
Verificar:
WhatsApp

atalhos

scroll top

outros
Riscos:
sobreposição

safe area

mobile keyboard

z-index
Status:
TBD
54. PERFORMANCE BASELINE
Registrar posteriormente:
HTML size

CSS size

JS size

image weight

requests

render blocking
Métricas futuras:
LCP

CLS

INP
Status inicial:
NOT YET MEASURED
55. COMPATIBILIDADE
Ambientes recomendados:
Chrome Android

Chrome Desktop

Samsung Internet

Firefox

Edge

Safari iOS
Status:
TBD
56. CONSOLE BASELINE
Registrar erros existentes antes da migração.
Classificação:
ERROR

WARNING

INFO
Resultado:
TBD
Novo erro após migração será considerado:
POTENTIAL REGRESSION
57. NETWORK BASELINE
Verificar:
404

CSS ausente

JS ausente

imagem ausente

JSON ausente

fontes
Resultado:
TBD
58. PROBLEMAS CONHECIDOS
Inicialmente derivados de:
css-audit-report.md

css-findings-register.md
Findings ativos conhecidos:
CSS-FIND-0001

CSS-FIND-0002

CSS-FIND-0003

CSS-FIND-0004

CSS-FIND-0005

CSS-FIND-0006

CSS-FIND-0007

CSS-FIND-0008

CSS-FIND-0009

CSS-FIND-0010
Observação:
Foi detectada também referência a:
CSS-FIND-0012
durante validação por grep.
Essa referência deverá ser localizada e classificada antes do fechamento definitivo da baseline.
59. COMANDO PARA LOCALIZAR CSS-FIND-0012
Executar:
grep -n \
'CSS-FIND-0012' \
apps/festanca-2026/docs/css-findings-register.md
Classificar o resultado:
FINDING REAL

EXEMPLO

REFERÊNCIA FUTURA

ERRO DE NUMERAÇÃO
Não apagar antes da análise.
60. SCREENSHOTS BASELINE
Capturas recomendadas:
01-home-mobile-top

02-home-mobile-middle

03-home-mobile-footer

04-home-tablet

05-home-desktop-top

06-home-desktop-middle

07-home-desktop-footer

08-menu-mobile-open

09-form-state

10-accessibility-high-contrast
Diretório recomendado:
apps/festanca-2026/docs/baseline/screenshots/
Nomenclatura:
baseline-2026-001-home-mobile-top.png
61. HASHES DA BASELINE
Arquivos prioritários:
index.html

style.css

brand-integration.css

tokens.css

theme-loader.js
Comando:
sha256sum \
apps/festanca-2026/index.html \
apps/festanca-2026/css/style.css \
apps/festanca-2026/css/brand-integration.css \
assets/brand/tokens/tokens.css \
assets/brand/tokens/theme-loader.js
Salvar resultado:
TBD
Esses hashes funcionarão como impressão digital do marco inicial.
62. MANIFESTO DA BASELINE
A baseline deverá preservar:
commit

hashes

estrutura de arquivos

estado visual

responsividade

dependências

erros existentes

findings conhecidos
Não deverá depender apenas de memória humana.
63. CRITÉRIOS PARA CONGELAMENTO
A baseline será considerada:
FROZEN
somente quando:
[ ] repositório sincronizado

[ ] commit-base registrado

[ ] working tree verificada

[ ] arquivos principais identificados

[ ] ordem CSS registrada

[ ] hashes gerados

[ ] screenshots principais capturados

[ ] findings conhecidos vinculados

[ ] dependências principais mapeadas

[ ] nenhuma alteração estrutural iniciada
64. PROIBIÇÕES DURANTE O CONGELAMENTO
Não realizar simultaneamente:
refatoração

renomeação em massa

remoção de CSS

troca de breakpoints

reorganização do HTML

substituição massiva por tokens

mudança de JavaScript

troca de ícones culturais
Primeiro:
CONGELAR
Depois:
MIGRAR
65. ROLLBACK
O commit-base será o ponto oficial de retorno.
Estratégia:
BASELINE COMMIT
      ↓
MIGRAÇÃO
      ↓
REGRESSÃO
      ↓
ANÁLISE
      ↓
ROLLBACK CONTROLADO
Nunca utilizar rollback destrutivo sem preservar trabalho não commitado.
66. COMPARAÇÃO PÓS-MIGRAÇÃO
Cada lote migrado deverá ser comparado com a baseline em:
visual

layout

responsividade

interação

acessibilidade

performance

console

network
Resultado:
NO REGRESSION

ACCEPTED CHANGE

REGRESSION

UNDETERMINED
67. BASELINE COMO PATRIMÔNIO TÉCNICO
Este documento não é apenas operacional.
Ele registra historicamente o momento em que a Landing Page passou de:
IDENTIDADE VISUAL CONVENCIONAL
para:
BRAND DESIGN SYSTEM
+
DESIGN TOKENS
+
THEME RUNTIME
+
GOVERNANÇA
+
AUDITORIA
Esse marco deverá permanecer preservado.
68. PAINEL DA BASELINE
BASELINE ID:

FESTANCA-2026-CSS-BASELINE-001


STATUS:

PREPARATION


COMMIT:

TBD


WORKING TREE:

TBD


HTML HASH:

TBD


STYLE.CSS HASH:

TBD


BRAND-INTEGRATION HASH:

TBD


TOKENS.CSS HASH:

TBD


THEME-LOADER HASH:

TBD


SCREENSHOTS:

PENDING


RESPONSIVE TEST:

PENDING


ACCESSIBILITY BASELINE:

PENDING
69. FLUXO DE CONGELAMENTO
SINCRONIZAR REPOSITÓRIO
        ↓
CONFIRMAR WORKING TREE
        ↓
REGISTRAR COMMIT
        ↓
INVENTARIAR ARQUIVOS
        ↓
REGISTRAR CSS ORDER
        ↓
GERAR HASHES
        ↓
MAPEAR DEPENDÊNCIAS
        ↓
CAPTURAR SCREENSHOTS
        ↓
REGISTRAR FINDINGS
        ↓
VALIDAR
        ↓
FROZEN BASELINE
70. COMANDOS OFICIAIS DE CAPTURA
Commit
git rev-parse HEAD
Commit curto
git rev-parse --short HEAD
Status
git status --short
Arquivos
find apps/festanca-2026 \
  -maxdepth 3 \
  -type f \
  | sort
CSS
find apps/festanca-2026/css \
  -type f \
  -name '*.css' \
  -print
Ordem dos estilos
grep -nEi \
'<link[^>]+stylesheet' \
apps/festanca-2026/index.html
Scripts
grep -nEi \
'<script' \
apps/festanca-2026/index.html
Media queries
grep -RIn \
'@media' \
apps/festanca-2026/css
Important
grep -RIn \
'!important' \
apps/festanca-2026/css
Inline styles
grep -nEi \
'style="' \
apps/festanca-2026/index.html
Hashes
sha256sum \
apps/festanca-2026/index.html \
apps/festanca-2026/css/style.css \
apps/festanca-2026/css/brand-integration.css \
assets/brand/tokens/tokens.css \
assets/brand/tokens/theme-loader.js
71. VALIDAÇÃO FINAL DA BASELINE
Checklist:
[ ] Commit registrado

[ ] Working tree conhecida

[ ] Estrutura de arquivos registrada

[ ] CSS order registrada

[ ] JS order registrada

[ ] Breakpoints inventariados

[ ] Dependências CSS/JS registradas

[ ] Hashes gerados

[ ] Screenshots capturados

[ ] Findings vinculados

[ ] Acessibilidade baseline registrada

[ ] Responsividade baseline registrada

[ ] Rollback definido
Resultado:
BASELINE STATUS:

PENDING
Quando concluído:
BASELINE STATUS:

FROZEN
72. PRÓXIMA ETAPA
Após congelar esta baseline, o próximo documento será:
apps/festanca-2026/docs/css-migration-plan.md
Ele definirá:
ondas de migração

ordem dos componentes

quick wins

componentes críticos

dependências

critérios de entrada

critérios de saída

rollback

validação por lote
A migração real somente deverá começar após:
BASELINE = FROZEN
73. STATUS DO DOCUMENTO
Documento:

apps/festanca-2026/docs/css-baseline.md


Versão:

1.0.0


Status:

OFFICIAL — PRE-MIGRATION BASELINE


Baseline ID:

FESTANCA-2026-CSS-BASELINE-001


Marco:

ANTES DO BRAND DESIGN SYSTEM
74. PRINCÍPIO FINAL
ANTES DE MUDAR,
REGISTRAMOS.

ANTES DE SUBSTITUIR,
COMPARAMOS.

ANTES DE APAGAR,
PRESERVAMOS.

ANTES DE MIGRAR,
CONGELAMOS O PONTO DE PARTIDA.
A baseline transforma o estado atual da Landing Page em:
EVIDÊNCIA

REFERÊNCIA

MEMÓRIA

SEGURANÇA

HISTÓRIA TÉCNICA
FESTANÇA 2026
Official Brand Design System
Ao encontro do futuro, com os pés firmes na tradição.
