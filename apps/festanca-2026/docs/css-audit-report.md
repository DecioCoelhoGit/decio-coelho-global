# FESTANÇA 2026

## Official Brand Design System

# CSS Audit Report

## Relatório Técnico Oficial de Auditoria da Landing Page

**Versão:** 1.0.0  
**Status:** Oficial — Baseline Audit  
**Projeto:** FESTANÇA 2026  
**Aplicação:** Landing Page Oficial  
**Local:** Vila Bela da Santíssima Trindade — Mato Grosso — Brasil

> **“Ao encontro do futuro, com os pés firmes na tradição.”**

---

# 1. FINALIDADE

Este documento estabelece o relatório técnico oficial de auditoria da camada CSS da Landing Page da:

```text
FESTANÇA 2026
Sua finalidade é produzir uma visão objetiva da arquitetura visual existente antes da integração definitiva com o:
FESTANÇA 2026
OFFICIAL BRAND DESIGN SYSTEM
A auditoria deverá identificar:
estrutura atual do CSS;
variáveis existentes;
valores hardcoded;
cores;
tipografia;
espaçamentos;
bordas;
arredondamentos;
sombras;
animações;
breakpoints;
seletores;
especificidade;
uso de !important;
estilos inline;
dependências;
redundâncias;
riscos de conflito;
oportunidades de tokenização;
pontos críticos para migração.
O relatório será utilizado como documento-base para orientar a integração progressiva entre a Landing Page existente e o novo sistema oficial de Design Tokens.
2. PRINCÍPIO DA AUDITORIA
A auditoria seguirá o seguinte fluxo:
NÃO PRESUMIR
     ↓
MEDIR
     ↓
REGISTRAR
     ↓
CLASSIFICAR
     ↓
COMPARAR
     ↓
PLANEJAR
     ↓
MIGRAR
     ↓
VALIDAR
Nenhum valor, seletor, componente ou comportamento deverá ser declarado neste relatório como existente sem evidência verificável no código-fonte.
A auditoria deve separar claramente:
FATO OBSERVADO
        ≠
SUPOSIÇÃO
        ≠
RECOMENDAÇÃO
Todo achado deverá possuir, sempre que possível:
arquivo de origem;
linha;
seletor;
propriedade;
valor;
impacto;
classificação;
recomendação.
3. OBJETOS DA AUDITORIA
3.1 Arquivos principais da Landing Page
apps/festanca-2026/index.html

apps/festanca-2026/css/style.css

apps/festanca-2026/css/brand-integration.css
3.2 Infraestrutura do Brand Design System
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
3.3 Documentação relacionada
assets/brand/brand-manifest.json

assets/brand/brand-assets-catalog.json

assets/brand/CHANGELOG.md

assets/brand/USAGE-GUIDE.md

assets/brand/LICENSE-AND-CREDITS.md

assets/brand/governance.md

assets/brand/quality-checklist.md

assets/brand/tokens/README.md

apps/festanca-2026/docs/brand-integration-map.md
4. ARQUITETURA ATUAL A AUDITAR
A arquitetura atual deverá ser analisada sem alterações destrutivas.
Estrutura conceitual:
index.html
    │
    ├── CSS
    │     │
    │     └── style.css
    │
    ├── JavaScript
    │
    ├── imagens
    │
    ├── ícones
    │
    ├── componentes visuais
    │
    └── dados JSON
Arquitetura-alvo:
IDENTIDADE CULTURAL
        │
        ▼
DESIGN TOKENS JSON
        │
        ▼
    index.json
        │
        ▼
    tokens.css
        │
        ▼
brand-integration.css
        │
        ▼
     style.css
        │
        ▼
     index.html
        │
        ▼
   LANDING PAGE
Runtime de temas:
themes.json
     │
     ▼
theme-loader.js
     │
     ▼
data-theme
     │
     ▼
tokens.css
     │
     ▼
INTERFACE
O objetivo da auditoria não é substituir essa arquitetura imediatamente.
O objetivo é descobrir como integrá-la com segurança.
5. STATUS DA AUDITORIA
Legenda oficial:
⬜ PENDING
🟨 IN REVIEW
🟦 MAPPED
🟩 VALIDATED
🟥 RISK
Estado inicial:
Área
Status
Estrutura geral
⬜ PENDING
Arquivos CSS
⬜ PENDING
Variáveis CSS
⬜ PENDING
Cores
⬜ PENDING
Tipografia
⬜ PENDING
Espaçamentos
⬜ PENDING
Radius
⬜ PENDING
Shadows
⬜ PENDING
Animações
⬜ PENDING
Breakpoints
⬜ PENDING
Seletores
⬜ PENDING
Especificidade
⬜ PENDING
!important
⬜ PENDING
Estilos inline
⬜ PENDING
Acessibilidade
⬜ PENDING
Responsividade
⬜ PENDING
Dependências JavaScript
⬜ PENDING
Compatibilidade com tokens
⬜ PENDING
Compatibilidade com temas
⬜ PENDING
Os estados serão atualizados somente após evidência técnica.
6. INVENTÁRIO DOS ARQUIVOS
A primeira etapa operacional consiste em registrar os arquivos envolvidos na integração.
Arquivo
Tipo
Tamanho
Linhas
Função
Status
index.html
HTML
TBD
TBD
Documento principal
PENDING
style.css
CSS
TBD
TBD
Estilo atual da Landing Page
PENDING
brand-integration.css
CSS
TBD
TBD
Ponte de integração
CREATED
tokens.css
CSS
TBD
TBD
Design Tokens executáveis
CREATED
theme-loader.js
JavaScript
TBD
TBD
Runtime oficial de temas
CREATED
index.json
JSON
TBD
TBD
Manifesto central dos tokens
CREATED
TBD significa:
TO BE DETERMINED
Nenhum valor quantitativo deverá ser preenchido por estimativa.
Deverá ser obtido diretamente do repositório.
Exemplo:
wc -l apps/festanca-2026/css/style.css
e:
ls -lh apps/festanca-2026/css/style.css
7. VARIÁVEIS CSS EXISTENTES
A auditoria deverá localizar todas as Custom Properties existentes no CSS atual.
Declarações:
--variavel: valor;
Usos:
var(--variavel)
O objetivo é identificar:
variáveis já existentes;
aliases legados;
valores duplicados;
nomes conflitantes;
oportunidades de integração;
equivalências com --festanca-*.
Tabela-base:
Variável atual
Valor
Arquivo
Função
Token equivalente
Ação
TBD
TBD
TBD
TBD
TBD
REVIEW
Ações permitidas:
KEEP
MAP
MIGRATE
TOKENIZE
ALIAS
DEPRECATE
REMOVE
REVIEW
Regra:
Nenhuma variável existente deverá ser removida antes de verificar todos os seus usos em CSS, HTML e JavaScript.
8. AUDITORIA DE CORES
A auditoria deverá localizar todas as formas de definição de cores:
HEX

RGB

RGBA

HSL

HSLA

NAMED COLORS

LINEAR GRADIENT

RADIAL GRADIENT
Exemplos:
#000000

#ffffff

rgb(0, 0, 0)

rgba(0, 0, 0, 0.5)

hsl(0, 0%, 100%)

linear-gradient(...)

radial-gradient(...)
Para cada valor encontrado deverá ser identificado:
quantidade de ocorrências;
contexto;
função visual;
componente associado;
possibilidade de substituição por token;
risco da migração.
Tabela:
Valor atual
Ocorrências
Função
Token equivalente
Risco
Ação
TBD
TBD
TBD
TBD
TBD
REVIEW
9. CLASSIFICAÇÃO SEMÂNTICA DAS CORES
A auditoria não deverá fazer equivalência apenas por hexadecimal.
As cores deverão ser classificadas semanticamente.
Categorias:
background

surface

surface-alt

surface-elevated

text

text-muted

heading

primary

secondary

accent

border

focus

gold

heritage

cultural

ceremonial

religious

status-success

status-warning

status-error

status-info

decorative
Exemplo incorreto:
#D9A21B
    ↓
substituir por outro amarelo
Exemplo correto:
#D9A21B
    ↓
identificar função
    ↓
dourado institucional?
    ↓
dourado cerimonial?
    ↓
accent?
    ↓
mapear semanticamente
Regra:
O significado visual tem prioridade sobre a simples equivalência cromática.
10. VALORES HARDCODED
A auditoria deverá localizar valores fixos definidos diretamente no CSS.
Categorias:
colors

font-size

font-weight

line-height

letter-spacing

margin

padding

gap

width

height

min-width

max-width

min-height

max-height

border

border-radius

box-shadow

text-shadow

transition

animation

z-index
Cada valor deverá ser classificado como:
REUSABLE

SEMANTIC

ONE-OFF

STRUCTURAL

DECORATIVE

LEGACY

RESPONSIVE

ACCESSIBILITY

UNKNOWN
Nem todo valor hardcoded precisa ser transformado em Design Token.
Regra:
TOKENIZAR
somente quando houver
    ↓
REUTILIZAÇÃO
ou
SIGNIFICADO
ou
PADRÃO SISTÊMICO
ou
GOVERNANÇA
Valores estritamente específicos de um componente podem permanecer locais.
11. TIPOGRAFIA
A auditoria deverá inventariar:
font-family

font-size

font-weight

font-style

line-height

letter-spacing

text-transform

text-decoration

text-align
Elementos prioritários:
body

h1

h2

h3

h4

h5

h6

navigation

hero

buttons

cards

labels

captions

footer

forms

badges

metadata
Matriz inicial:
Elemento
Valor atual
Token-alvo
Risco
Status
body
TBD
Body
MEDIUM
PENDING
h1
TBD
Display / Hero
MEDIUM
PENDING
h2
TBD
Heading
MEDIUM
PENDING
h3
TBD
Subheading
MEDIUM
PENDING
Botões
TBD
Button
MEDIUM
PENDING
Legendas
TBD
Caption
LOW
PENDING
Comparar com:
assets/brand/tokens/typography.json
A migração deverá preservar:
legibilidade;
hierarquia;
contraste;
responsividade;
acessibilidade;
personalidade institucional.
12. ESPAÇAMENTOS
A auditoria deverá localizar:
margin

padding

gap

row-gap

column-gap

inset

top

right

bottom

left
Objetivo:
detectar padrões recorrentes.
Exemplo:
4px

8px

12px

16px

24px

32px

48px

64px
Valores recorrentes poderão ser comparados com:
assets/brand/tokens/spacing.json
Classificação:
FOUNDATION

COMPONENT

LAYOUT

SECTION

RESPONSIVE

SAFE AREA

CEREMONIAL
Regra:
Não substituir todos os espaçamentos automaticamente.
Alterações espaciais podem afetar:
quebra de linha

altura de cards

posição de botões

header

menu mobile

hero

fluxo vertical

scroll

responsividade
13. BORDER RADIUS
A auditoria deverá localizar todas as ocorrências de:
border-radius:
Aplicações possíveis:
button

card

image

badge

modal

input

panel

pill

avatar

navigation

ceremonial
Comparar com:
assets/brand/tokens/radius.json
Tabela:
Valor
Componente
Ocorrências
Token possível
Ação
TBD
TBD
TBD
TBD
REVIEW
Regras:
não substituir automaticamente;
preservar semântica visual;
manter consistência;
não transformar todos os componentes em elementos excessivamente arredondados;
respeitar áreas culturais e cerimoniais.
14. SHADOWS
A auditoria deverá localizar:
box-shadow:

text-shadow:

filter:

drop-shadow:
As sombras deverão ser classificadas por função:
elevation

card

modal

focus

navigation

gold glow

green glow

cultural

ceremonial

holographic

decorative
Comparar com:
assets/brand/tokens/shadows.json
Tabela-base:
Valor atual
Função
Componente
Token equivalente
Status
TBD
TBD
TBD
TBD
PENDING
A migração deverá evitar:
excesso de brilho;
perda de legibilidade;
sombras pesadas em dispositivos móveis;
conflitos entre efeitos decorativos e conteúdo.
15. ANIMAÇÕES E TRANSIÇÕES
A auditoria deverá localizar:
transition

transition-duration

transition-timing-function

animation

animation-duration

animation-delay

animation-iteration-count

@keyframes

transform

opacity

filter

scroll-behavior
Registrar:
Nome
Tipo
Duração
Easing
Elemento
Token possível
TBD
TBD
TBD
TBD
TBD
TBD
Comparar com:
assets/brand/tokens/animations.json
Classificação:
MICROINTERACTION

HOVER

FOCUS

ENTRY

EXIT

REVEAL

CEREMONIAL

DECORATIVE

LOADING

NAVIGATION
Regra:
Movimento deve reforçar compreensão e experiência, nunca dificultar navegação ou leitura.
16. PREFERS-REDUCED-MOTION
A auditoria deverá verificar a existência de:
@media (prefers-reduced-motion: reduce)
Também deverá verificar possíveis implementações JavaScript relacionadas a:
prefers-reduced-motion
Status inicial:
PENDING AUDIT
Critério obrigatório:
Movimentos não essenciais deverão poder ser:
reduzidos

simplificados

ou

desativados
sem comprometer:
acesso ao conteúdo;
navegação;
estado de componentes;
leitura;
interação;
contexto cultural.
Checklist:
[ ] Existe media query reduced-motion

[ ] Transições podem ser reduzidas

[ ] Animações decorativas podem ser removidas

[ ] Informações não dependem exclusivamente de movimento

[ ] Theme loader respeita preferência do usuário

[ ] Navegação permanece funcional sem animações
Classificação:
ACCESSIBILITY
CRITICAL

## FIM DO BLOCO 1 DE 4

BLOCO 2
SEÇÕES 17 → 32

# 17. BREAKPOINTS

A auditoria deverá localizar todas as media queries existentes no CSS atual.

Procurar:

```css
@media (...)
Registrar:
Breakpoint
Tipo
Uso
Componentes afetados
Risco
TBD
TBD
TBD
TBD
TBD
Tipos possíveis:
min-width

max-width

orientation

hover

pointer

prefers-reduced-motion

prefers-color-scheme

resolution

print
O objetivo será detectar:
breakpoints duplicados;
sobreposição de regras;
intervalos conflitantes;
media queries muito próximas;
regras responsivas dispersas;
dependência excessiva de valores específicos;
comportamento inconsistente entre dispositivos.
Classificação:
FOUNDATION

COMPONENT

LAYOUT

ACCESSIBILITY

DEVICE CAPABILITY

THEME

LEGACY
A auditoria deverá responder:
Quantos breakpoints existem?

Quais são os valores mais utilizados?

Há uma escala consistente?

Existem breakpoints equivalentes com valores diferentes?

Há regras conflitantes?

Os breakpoints podem ser consolidados?

A consolidação seria segura?
Nenhuma media query deverá ser removida apenas por parecer duplicada.
Primeiro deverá ser verificado:
contexto

ordem da cascata

especificidade

componente

efeito visual

dependência JavaScript
18. MOBILE FIRST OU DESKTOP FIRST
A estratégia responsiva real deverá ser determinada a partir do código existente.
Possibilidades:
MOBILE-FIRST

DESKTOP-FIRST

HYBRID

INCONSISTENT

UNDETERMINED
Mobile First
Normalmente apresenta:
/* base mobile */

@media (min-width: ...)
Fluxo:
MOBILE
   ↓
TABLET
   ↓
DESKTOP
   ↓
LARGE SCREEN
Desktop First
Normalmente apresenta:
/* base desktop */

@media (max-width: ...)
Fluxo:
DESKTOP
   ↓
TABLET
   ↓
MOBILE
Hybrid
Pode combinar:
min-width

max-width

component-specific breakpoints

legacy overrides
A classificação deverá considerar o conjunto completo do CSS.
Registrar:
ESTRATÉGIA RESPONSIVA ATUAL:

TBD
Evidência:
Arquivo:
Linhas:
Media queries predominantes:
Observação:
Objetivo futuro:
NÃO REESCREVER
       ↓
COMPREENDER
       ↓
ESTABILIZAR
       ↓
PADRONIZAR PROGRESSIVAMENTE
19. SELETORES
A auditoria deverá inventariar e classificar os seletores CSS existentes.
Categorias:
ELEMENT SELECTORS

CLASS SELECTORS

ID SELECTORS

ATTRIBUTE SELECTORS

PSEUDO-CLASSES

PSEUDO-ELEMENTS

DESCENDANT SELECTORS

CHILD SELECTORS

SIBLING SELECTORS

COMPOUND SELECTORS

COMPLEX SELECTORS
Exemplos:
body

.card

#hero

[data-theme="dark"]

button:hover

.card::before

.section .card

.nav > ul

h2 + p

.hero .content .title
O objetivo será identificar:
estrutura predominante;
nível de acoplamento ao HTML;
dependência da hierarquia DOM;
seletores frágeis;
nomes genéricos;
conflitos potenciais;
oportunidades de componentização.
Tabela:
Seletor
Tipo
Especificidade
Componente
Risco
Ação
TBD
TBD
TBD
TBD
TBD
REVIEW
Classificação de ação:
KEEP

DOCUMENT

SIMPLIFY

COMPONENTIZE

DEPRECATE

REFACTOR

REVIEW
Regra:
Seletores existentes não deverão ser renomeados antes da verificação de dependências em HTML e JavaScript.
20. ESPECIFICIDADE
A auditoria deverá analisar a força dos seletores CSS.
Modelo conceitual:
INLINE
   >
ID
   >
CLASS / ATTRIBUTE / PSEUDO-CLASS
   >
ELEMENT / PSEUDO-ELEMENT
Exemplo de baixa especificidade:
.card-title
Exemplo de maior especificidade:
main section.content .card .card-title
Exemplo de risco elevado:
body main section div.card > div.content p span
Classificação:
LOW

MEDIUM

HIGH

CRITICAL
Critérios de risco:
LOW
classes simples

componentes isolados

baixa dependência estrutural
MEDIUM
seletores compostos

dependência moderada do DOM
HIGH
cadeias longas

IDs combinados com classes

múltiplos níveis estruturais
CRITICAL
inline style

!important combinado com alta especificidade

cadeias estruturais frágeis

overrides difíceis de prever
Objetivo:
REDUZIR FRAGILIDADE
≠
REDUZIR ESPECIFICIDADE A QUALQUER CUSTO
A simplificação somente deverá ocorrer quando não houver regressão.
21. USO DE !IMPORTANT
A auditoria deverá localizar todas as ocorrências de:
!important
Registrar:
Linha
Seletor
Propriedade
Motivo aparente
Classificação
Ação
TBD
TBD
TBD
TBD
TBD
REVIEW
Categorias:
JUSTIFIED

ACCESSIBILITY

LEGACY

OVERRIDE

THIRD-PARTY

TEMPORARY

UNKNOWN
Perguntas obrigatórias:
Por que o !important existe?

Ele resolve conflito real?

Ele compensa especificidade excessiva?

Ele é necessário por acessibilidade?

Existe dependência externa?

Pode ser removido sem regressão?
Regra:
!important não será removido automaticamente.
Fluxo correto:
LOCALIZAR
   ↓
ENTENDER
   ↓
TESTAR
   ↓
SUBSTITUIR ESTRATÉGIA
   ↓
VALIDAR
   ↓
REMOVER, SE SEGURO
22. ESTILOS INLINE
A auditoria deverá verificar o HTML principal e conteúdos gerados dinamicamente.
Procurar:
style=""
e:
<style>
Também deverá verificar JavaScript que utilize:
element.style
ou:
setAttribute("style", ...)
Tabela:
Local
Tipo
Conteúdo
Origem
Pode migrar?
Risco
TBD
TBD
TBD
TBD
TBD
TBD
Categorias:
HTML INLINE

STYLE BLOCK

JAVASCRIPT INLINE

DYNAMIC STYLE

THIRD-PARTY STYLE
Ações possíveis:
KEEP

TOKENIZE

MOVE TO CSS

MOVE TO COMPONENT

REVIEW

DEPRECATE
Regra:
Estilo inline não é automaticamente um erro.
Pode existir por:
cálculo dinâmico;
posição;
progressão;
customização;
integração externa.
A decisão dependerá do contexto.
23. CLASSES PRINCIPAIS
A auditoria deverá mapear as classes estruturais reais da Landing Page.
Áreas prioritárias:
header

navigation

hero

sections

cards

buttons

programming

culture

history

tourism

heritage

authorities

locations

forms

maps

accessibility

footer
Tabela-base:
Componente
Classe real
Arquivo
Dependências
Estado
Migração
Header
TBD
style.css
TBD
PENDING
PENDING
Navigation
TBD
style.css
TBD
PENDING
PENDING
Hero
TBD
style.css
TBD
PENDING
PENDING
Cards
TBD
style.css
TBD
PENDING
PENDING
Buttons
TBD
style.css
TBD
PENDING
PENDING
Footer
TBD
style.css
TBD
PENDING
PENDING
Para cada classe importante deverá ser identificado:
responsabilidade visual

responsabilidade estrutural

dependência JavaScript

dependência responsiva

dependência temática

possível tokenização
24. IDS
A auditoria deverá inventariar IDs utilizados em:
HTML

CSS

JavaScript

âncoras

navegação

acessibilidade

integrações
Exemplos:
id="hero"

id="programacao"

id="cultura"

id="menu"
Registrar:
ID
HTML
CSS
JS
Âncora
Função
Risco
TBD
TBD
TBD
TBD
TBD
TBD
TBD
Regra crítica:
Não renomear IDs sem verificar dependências completas.
Um ID pode ser utilizado simultaneamente por:
CSS

JavaScript

URL fragment

screen readers

links externos

Google Analytics

integrações futuras
Classificação:
STRUCTURAL

INTERACTION

ANCHOR

ACCESSIBILITY

DATA HOOK

LEGACY
25. HEADER
Classificação inicial:
HIGH RISK
O header deverá receber auditoria específica.
Verificar:
position

sticky

fixed

height

logo

brand

navigation

mobile menu

menu toggle

z-index

background

blur

shadow

scroll behavior

theme control

WhatsApp

language

accessibility controls
Também verificar:
desktop

tablet

mobile

landscape
Tabela:
Área
Atual
Dependência
Token possível
Risco
Background
TBD
TBD
colors
MEDIUM
Height
TBD
TBD
spacing
HIGH
Logo
TBD
TBD
brand asset
HIGH
Navigation
TBD
JS/CSS
typography/colors
HIGH
Z-index
TBD
layout
layer token futuro
HIGH
Perguntas:
O header é fixed ou sticky?

Existe alteração ao rolar?

Existe menu mobile?

Existe classe JS para abertura?

Há mudança de fundo?

Existe sobreposição com hero?

Há safe area para dispositivos móveis?

O foco de teclado é visível?
Regra:
O header não deverá ser usado como primeiro componente piloto de migração.
26. HERO
Classificação inicial:
HIGH RISK
A seção Hero deverá ser auditada em profundidade.
Verificar:
background

background image

overlay

gradient

positioning

min-height

viewport units

headline

tagline

CTA

logo

image

decorative elements

animations

responsive behavior

contrast
Aspectos críticos:
LCP

CLS

legibilidade

imagem principal

carregamento

texto sobre imagem

mobile crop

safe areas
Tabela:
Elemento
Atual
Dependência
Risco
Migração
Background
TBD
imagem/CSS
HIGH
PENDING
Overlay
TBD
CSS
MEDIUM
PENDING
Título
TBD
typography
MEDIUM
PENDING
CTA
TBD
button styles
MEDIUM
PENDING
Altura
TBD
responsive
HIGH
PENDING
Regra:
O Hero somente deverá ser migrado após componentes de menor risco validarem a estratégia de integração.
27. CARDS
A auditoria deverá identificar todas as famílias de cards existentes.
Possíveis categorias:
cultural

programming

history

tourism

heritage

authority

location

information

religious

ceremonial

community
Para cada família verificar:
background

border

radius

shadow

padding

gap

image

title

body

metadata

icons

buttons

hover

focus

responsive behavior
Tabela:
Família
Classe
Estrutura
Tokenização
Risco
TBD
TBD
TBD
TBD
TBD
Objetivo:
descobrir se existem padrões comuns.
Exemplo:
CARD BASE
   +
VARIANTE CULTURAL

CARD BASE
   +
VARIANTE TURISMO

CARD BASE
   +
VARIANTE HISTÓRIA
Mas essa abstração só deverá ser criada se houver evidência real de estrutura compartilhada.
Regra:
Não forçar componentização artificial onde os cards possuam funções culturais ou semânticas diferentes.
28. BOTÕES
A auditoria deverá mapear todos os estilos de botões e links com aparência de botão.
Categorias possíveis:
PRIMARY

SECONDARY

CTA

WHATSAPP

NAVIGATION

THEME CONTROL

COPY

FORM ACTION

ICON BUTTON

ACCESSIBILITY CONTROL
Para cada botão verificar:
height

min-height

padding

font

weight

radius

background

foreground

border

shadow

hover

focus

active

disabled

loading

touch target
Tabela:
Tipo
Classe
Estado
Tokenização
Risco
Primary
TBD
TBD
TBD
MEDIUM
Secondary
TBD
TBD
TBD
MEDIUM
WhatsApp
TBD
TBD
TBD
HIGH
Icon
TBD
TBD
TBD
MEDIUM
Critério de acessibilidade:
touch target recomendado
≈ 44 × 44 px ou superior
Estados obrigatórios a verificar:
DEFAULT

HOVER

FOCUS

FOCUS-VISIBLE

ACTIVE

DISABLED
Regra:
Cor não deverá ser o único indicador de estado.
29. FORMULÁRIOS
A auditoria deverá analisar componentes de formulário existentes ou planejados.
Elementos:
input

textarea

select

checkbox

radio

button

fieldset

legend

label

placeholder

help text

error message

success message
Verificar:
font

color

background

border

radius

padding

height

focus

invalid

disabled

readonly

autofill
Prioridade:
ACCESSIBILITY
CRITICAL
Critérios:
label explícito

foco visível

contraste

mensagem de erro compreensível

não depender apenas de cor

touch target adequado

navegação por teclado

compatibilidade mobile
Tabela:
Elemento
Atual
Problema
Token possível
Status
Input
TBD
TBD
TBD
PENDING
Select
TBD
TBD
TBD
PENDING
Textarea
TBD
TBD
TBD
PENDING
Checkbox
TBD
TBD
TBD
PENDING
30. ÍCONES
A auditoria deverá verificar a integração futura com:
assets/brand/tokens/icons.json
e com o diretório:
assets/brand/icons/
Categorias previstas:
culturais

religiosos

institucionais

cerimoniais

temáticos

turísticos

patrimoniais

históricos
Para cada ícone verificar:
arquivo

nome

formato

dimensão

fundo

transparência

alt text

uso previsto

significado cultural

contexto
Tabela:
Ícone
Caminho
Categoria
Uso
Alt
Restrição
TBD
TBD
TBD
TBD
TBD
TBD
Regras críticas:
Não substituir ícones culturais por ícones genéricos.

Não alterar significado cultural.

Não estilizar de forma que descaracterize o símbolo.

Não utilizar fotografia de pessoa como ícone público sem revisão apropriada.

Não remover crédito ou proveniência quando aplicável.
Integração:
icons.json
     ↓
brand-integration.css
     ↓
componentes
     ↓
Landing Page
31. SÍMBOLOS
A auditoria deverá verificar integração com:
assets/brand/tokens/symbols.json
e:
assets/brand/symbols/
Elementos previstos:
estrela-festanca.png

arco-dourado.png

ornamentos.png

molduras.png

elementos-graficos.png
Para cada símbolo registrar:
significado

origem

função

composição

área de proteção

versões

uso permitido

uso proibido

contexto cultural

proveniência
Tabela:
Símbolo
Função
Uso
Restrição
Status
Estrela FESTANÇA
TBD
TBD
Cultural
PENDING
Arco Dourado
TBD
TBD
Institucional
PENDING
Ornamentos
TBD
TBD
Contextual
PENDING
Molduras
TBD
TBD
Contextual
PENDING
Elementos Gráficos
TBD
TBD
Contextual
PENDING
Regra:
Símbolos culturais não são meros elementos decorativos.
Sua aplicação deverá respeitar:
SIGNIFICADO

CONTEXTO

PROPORÇÃO

HIERARQUIA

LEGIBILIDADE

PATRIMÔNIO
32. PATTERNS E TEXTURAS
A auditoria deverá analisar a possibilidade de uso dos padrões oficiais existentes em:
assets/brand/patterns/
Arquivos previstos:
pattern-gold.png

pattern-dark.png

pattern-heritage.png

texture-gold.png
Possíveis aplicações:
background

section divider

card accent

hero overlay

ceremonial panel

heritage section

footer

institutional material
Antes da aplicação verificar:
contraste

legibilidade

densidade visual

peso do arquivo

responsividade

repetição

escala

performance

contexto
Evitar:
ruído visual excessivo

competição com textos

redução de contraste

fundos muito carregados

repetição perceptível inadequada

uso indiscriminado
Classificação:
DECORATIVE

HERITAGE

CEREMONIAL

INSTITUTIONAL

BACKGROUND

ACCENT
Tabela:
Pattern
Uso previsto
Risco
Otimização
Status
pattern-gold.png
TBD
TBD
TBD
PENDING
pattern-dark.png
TBD
TBD
TBD
PENDING
pattern-heritage.png
TBD
TBD
TBD
PENDING
texture-gold.png
TBD
TBD
TBD
PENDING
Regra:
Patterns e texturas deverão complementar a identidade, nunca substituir conteúdo ou comprometer acessibilidade.
FIM DO BLOCO 2 DE 4
Cobertura:
SEÇÕES 17 → 32

✓ Breakpoints

✓ Estratégia Mobile First / Desktop First

✓ Seletores

✓ Especificidade

✓ !important

✓ Estilos Inline

✓ Classes Principais

✓ IDs

✓ Header

✓ Hero

✓ Cards

✓ Botões

✓ Formulários

✓ Ícones

✓ Símbolos

✓ Patterns e Texturas

# 33. ACESSIBILIDADE

A auditoria deverá verificar se a camada visual da Landing Page atende princípios básicos de acessibilidade digital.

Áreas prioritárias:

```text
contraste

foco visível

navegação por teclado

ordem lógica

tamanho de toque

legibilidade

motion reduction

zoom

responsividade

semântica visual

mensagens de estado
Checklist inicial:
[ ] Foco visível em links

[ ] Foco visível em botões

[ ] Foco visível em formulários

[ ] Contraste suficiente em textos

[ ] Contraste suficiente em ícones

[ ] Elementos interativos possuem área adequada

[ ] Nenhuma informação depende apenas de cor

[ ] Nenhuma informação depende apenas de animação

[ ] Conteúdo permanece utilizável com zoom

[ ] Conteúdo permanece utilizável em mobile

[ ] Preferência reduced-motion é respeitada
Classificação:
CRITICAL

HIGH

MEDIUM

LOW
Acessibilidade deverá ser tratada como:
REQUISITO ESTRUTURAL
e não como:
AJUSTE POSTERIOR
34. CONTRASTE
A auditoria deverá verificar contraste entre:
texto e fundo

ícone e fundo

botão e fundo

borda e superfície

estado de foco e fundo

links e texto normal

mensagens de status
Categorias:
NORMAL TEXT

LARGE TEXT

UI COMPONENT

FOCUS INDICATOR

DECORATIVE
Tabela-base:
Elemento
Foreground
Background
Contraste
Status
TBD
TBD
TBD
TBD
PENDING
Estados a verificar:
DEFAULT

HOVER

FOCUS

ACTIVE

DISABLED

SELECTED

ERROR

SUCCESS
Temas prioritários:
dark

light

heritage

ceremonial

high-contrast

holographic
Regra:
Um tema visualmente bonito não poderá comprometer leitura e interação.
35. RESPONSIVIDADE
A auditoria deverá verificar comportamento real em diferentes larguras.
Faixas de referência:
320 px

360 px

375 px

390 px

412 px

480 px

768 px

1024 px

1280 px

1440 px

1920 px
Esses valores servem apenas como pontos de teste.
Não deverão ser assumidos como breakpoints oficiais sem confirmação no CSS.
Verificar:
header

navigation

hero

cards

grids

forms

buttons

images

tables

footer

fixed elements

floating buttons

modals
Problemas possíveis:
overflow horizontal

texto cortado

botão fora da tela

imagem deformada

grid quebrado

sobreposição

altura excessiva

largura fixa inadequada

menu inacessível
Tabela:
Viewport
Problema
Componente
Severidade
Status
TBD
TBD
TBD
TBD
PENDING
36. OVERFLOW
A auditoria deverá localizar regras relacionadas a:
overflow

overflow-x

overflow-y

text-overflow

white-space
Também deverá detectar visualmente:
scroll horizontal involuntário

conteúdo cortado

elementos vazando

cards extrapolando

texto truncado

imagens excedendo container
Classificação:
EXPECTED

STRUCTURAL

RESPONSIVE BUG

CONTENT BUG

LEGACY

UNKNOWN
Atenção especial a:
100vw

fixed widths

absolute positioning

transforms

negative margins

large shadows

pseudo-elements
Regra:
overflow: hidden não deverá ser utilizado para mascarar problemas estruturais sem diagnóstico.
37. Z-INDEX
A auditoria deverá localizar todos os valores de:
z-index
Objetivo:
identificar:
escalas desordenadas;
valores excessivamente altos;
conflitos;
stacking contexts;
elementos fixed;
modais;
menus;
tooltips;
overlays;
botões flutuantes.
Tabela:
Seletor
Z-index
Contexto
Função
Risco
TBD
TBD
TBD
TBD
TBD
Classificação:
BASE

CONTENT

STICKY

DROPDOWN

OVERLAY

MODAL

TOAST

SYSTEM
Futura recomendação possível:
tokens de camada
Exemplo conceitual:
--z-base
--z-sticky
--z-dropdown
--z-overlay
--z-modal
--z-toast
Nenhuma escala deverá ser criada antes do inventário real.
38. CSS DUPLICADO
A auditoria deverá identificar:
regras repetidas

seletores duplicados

blocos equivalentes

propriedades redefinidas

media queries redundantes

valores repetidos
Tipos:
EXACT DUPLICATE

SEMANTIC DUPLICATE

OVERRIDE

LEGACY COPY

RESPONSIVE VARIANT

INTENTIONAL DUPLICATE
Tabela:
Regra
Ocorrências
Tipo
Pode consolidar?
Risco
TBD
TBD
TBD
TBD
TBD
Regra:
Duplicação não significa automaticamente erro.
Pode existir por:
cascata

breakpoint

tema

estado

compatibilidade

ordem de carregamento
A consolidação somente ocorrerá após confirmação.
39. CSS NÃO UTILIZADO
A auditoria deverá identificar seletores potencialmente não utilizados.
Fontes de verificação:
index.html

JavaScript

templates

conteúdo dinâmico

classes adicionadas em runtime

data attributes

estados

componentes futuros
Status possíveis:
USED

DYNAMIC

LEGACY

UNKNOWN

CANDIDATE FOR REMOVAL
Nunca remover apenas porque:
grep não encontrou no HTML
A classe pode ser criada por:
classList.add(...)
ou utilizada em:
dados externos

componentes carregados depois

estados temporários
Fluxo:
DETECTAR
   ↓
PROCURAR EM TODO O PROJETO
   ↓
VERIFICAR JS
   ↓
VERIFICAR HTML
   ↓
VERIFICAR RUNTIME
   ↓
CLASSIFICAR
40. DEPENDÊNCIAS JAVASCRIPT
A auditoria deverá verificar dependências entre JavaScript e CSS.
Procurar:
classList.add

classList.remove

classList.toggle

className

style.

setAttribute

dataset

querySelector

querySelectorAll

getElementById
Mapear:
JS
Classe/ID/Data Attribute
Função
CSS relacionado
Risco
TBD
TBD
TBD
TBD
TBD
Casos críticos:
menu mobile

header scroll

theme switch

modals

accordions

tabs

filters

copy buttons

forms

maps

lazy loading
Regra:
Nenhuma classe controlada por JavaScript deverá ser renomeada sem atualização coordenada.
41. DATA ATTRIBUTES
A auditoria deverá mapear atributos como:
data-theme

data-state

data-open

data-active

data-section

data-category

data-id

data-location

data-component
Uso possível:
tema

estado

filtragem

integração

identificação

comportamento
Tabela:
Attribute
Valor
CSS
JS
Função
Status
TBD
TBD
TBD
TBD
TBD
PENDING
Atenção especial:
data-theme
porque será peça central da integração com:
theme-loader.js
Fluxo:
theme-loader.js
      ↓
data-theme
      ↓
tokens.css
      ↓
brand-integration.css
      ↓
Landing Page
42. COMPATIBILIDADE COM BRAND-INTEGRATION.CSS
Arquivo:
apps/festanca-2026/css/brand-integration.css
Função:
CAMADA DE COMPATIBILIDADE
Objetivos:
preservar classes legadas

introduzir aliases

conectar tokens

reduzir risco de regressão

permitir migração progressiva
A auditoria deverá verificar:
quais classes existentes podem receber tokens

quais propriedades podem ser sobrescritas com segurança

quais componentes precisam de aliases

quais áreas exigem isolamento

quais regras dependem da ordem da cascata
Modelo:
LEGACY CLASS
     ↓
BRAND INTEGRATION
     ↓
DESIGN TOKEN
Exemplo conceitual:
.legacy-card {
  background: var(--festanca-surface);
  border-color: var(--festanca-border);
}
Regra:
A camada de integração não deverá duplicar todo o style.css.
Ela deverá funcionar como:
PONTE
e não como:
SEGUNDO SISTEMA CSS COMPLETO
43. COMPATIBILIDADE COM TOKENS.CSS
Arquivo:
assets/brand/tokens/tokens.css
A auditoria deverá validar:
nomes das variáveis

valores

escopo

fallbacks

temas

aliases

dependências

ordem de carregamento
Verificar:
variáveis inexistentes

variáveis sem uso

duplicações

nomes divergentes

referências quebradas
Modelo de consumo:
color: var(--festanca-text);

background: var(--festanca-surface);

border-radius: var(--festanca-radius-card);

box-shadow: var(--festanca-shadow-card);
Regra:
tokens.css deverá ser tratado como artefato derivado da arquitetura oficial de tokens.
A fonte conceitual permanece:
JSON TOKENS
44. ORDEM DA CASCATA
A ordem dos estilos deverá ser auditada cuidadosamente.
Arquitetura-alvo:
<link rel="stylesheet"
      href="../../assets/brand/tokens/tokens.css">

<link rel="stylesheet"
      href="css/brand-integration.css">

<link rel="stylesheet"
      href="css/style.css">
Mas a ordem definitiva deverá respeitar o comportamento real da Landing Page.
Duas estratégias possíveis:
Estratégia A
tokens.css
     ↓
brand-integration.css
     ↓
style.css
Objetivo:
LEGADO TEM PRIORIDADE FINAL
Adequada para:
fase inicial conservadora
Estratégia B
tokens.css
     ↓
style.css
     ↓
brand-integration.css
Objetivo:
CAMADA DE INTEGRAÇÃO SOBRESCREVE O LEGADO
Adequada para:
migração controlada
A escolha deverá ser baseada em teste.
Nunca por preferência teórica.
Registrar:
ORDEM ATUAL:

TBD

ORDEM TESTADA:

TBD

ORDEM RECOMENDADA:

TBD
45. RISCOS DE INTEGRAÇÃO
Classificação oficial:
R0 — NEGLIGIBLE

R1 — LOW

R2 — MEDIUM

R3 — HIGH

R4 — CRITICAL
Matriz:
Área
Risco inicial
Motivo
Tokens isolados
R1
Baixo impacto
Cards simples
R1/R2
Escopo limitado
Botões
R2
Estados interativos
Tipografia global
R3
Impacto amplo
Header
R3
Navegação + layout
Hero
R3
LCP + layout
Breakpoints
R4
Impacto sistêmico
Reset global
R4
Toda interface
IDs usados por JS
R4
Risco funcional
Riscos técnicos:
regressão visual

regressão responsiva

conflito de especificidade

mudança de layout

quebra de JavaScript

problemas de contraste

alteração cultural inadequada

carregamento adicional

CLS

LCP

FOUT

FOIT
Riscos culturais:
descaracterização

substituição indevida de símbolo

uso inadequado de ícone

perda de contexto

aplicação decorativa imprópria
46. MATRIZ PRELIMINAR DE MIGRAÇÃO
A migração deverá ocorrer por níveis.
NÍVEL 0 — INVENTÁRIO
SEM ALTERAÇÃO VISUAL
Ações:
auditar

mapear

documentar
NÍVEL 1 — ALIASES
BAIXO RISCO
Ações:
ligar valores existentes a tokens equivalentes
Exemplo:
--legacy-gold: var(--festanca-gold);
NÍVEL 2 — COMPONENTES ISOLADOS
RISCO CONTROLADO
Exemplos:
badge

botão secundário

card informativo simples

tag

divisor
NÍVEL 3 — COMPONENTES ESTRUTURAIS
RISCO MÉDIO/ALTO
Exemplos:
cards principais

navigation

footer

forms
NÍVEL 4 — COMPONENTES CRÍTICOS
ALTO RISCO
Exemplos:
header

hero

breakpoints

layout principal

tipografia global
Fluxo:
N0
 ↓
N1
 ↓
N2
 ↓
N3
 ↓
N4
Nunca:
N0
 ↓
N4 DIRETAMENTE
47. DEPRECATION STRATEGY
Elementos legados deverão ser descontinuados progressivamente.
Estados:
ACTIVE

MAPPED

DEPRECATED

COMPATIBILITY ONLY

REMOVED
Fluxo:
ACTIVE
   ↓
MAPPED
   ↓
TOKENIZED
   ↓
DEPRECATED
   ↓
REMOVED
Todo item depreciado deverá registrar:
nome

arquivo

versão

motivo

substituto

data

responsável

impacto
Exemplo:
Legacy:
--old-gold

Substituto:
--festanca-gold

Status:
DEPRECATED

Remover:
somente após confirmação de zero uso
Regra:
Deprecar antes de remover.
A compatibilidade tem prioridade sobre limpeza prematura.
48. PILOTO DE MIGRAÇÃO
Antes de migrar componentes críticos, deverá ser escolhido um componente-piloto.
Critérios:
baixo risco

visualmente identificável

poucas dependências

sem JavaScript crítico

fácil rollback

representativo do sistema visual
Candidatos:
badge

tag

card informativo simples

botão secundário

divisor de seção
Evitar inicialmente:
header

hero

menu mobile

grid principal

formulário complexo

floating button crítico
Fluxo do piloto:
ESCOLHER COMPONENTE
        ↓
REGISTRAR BASELINE
        ↓
MAPEAR CSS ATUAL
        ↓
MAPEAR TOKENS
        ↓
APLICAR INTEGRAÇÃO
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
Critérios de aprovação:
[ ] Sem regressão funcional

[ ] Sem regressão visual grave

[ ] Sem overflow

[ ] Sem quebra responsiva

[ ] Contraste preservado ou melhorado

[ ] Foco preservado

[ ] Sem dependência quebrada

[ ] Tokens corretamente utilizados

[ ] Rollback possível

[ ] Mudança registrada no CHANGELOG
Resultado:
PILOT STATUS:

PENDING
O piloto aprovado será utilizado como padrão para os componentes seguintes.
FIM DO BLOCO 3 DE 4
Cobertura:
SEÇÕES 33 → 48

✓ Acessibilidade

✓ Contraste

✓ Responsividade

✓ Overflow

✓ Z-Index

✓ CSS Duplicado

✓ CSS Não Utilizado

✓ Dependências JavaScript

✓ Data Attributes

✓ Compatibilidade com brand-integration.css

✓ Compatibilidade com tokens.css

✓ Ordem da Cascata

✓ Riscos de Integração

✓ Matriz Preliminar de Migração

✓ Deprecation Strategy

✓ Piloto de Migração
Continuação oficial:
BLOCO 4

SEÇÕES 49 → 64

49. Comandos de Auditoria

50. Evidências

51. Registro de Findings

52. Severidade

53. Quick Wins

54. Dívida Técnica

55. Performance

56. Validação Visual

57. Validação Técnica

58. Plano de Rollback

59. Governança da Migração

60. Baseline Oficial

61. Critérios de Aprovação

62. Próximos Artefatos

63. Conclusão

64. Princípio Final

# 33. ACESSIBILIDADE

A auditoria deverá verificar se a camada visual da Landing Page atende princípios básicos de acessibilidade digital.

Áreas prioritárias:

```text
contraste

foco visível

navegação por teclado

ordem lógica

tamanho de toque

legibilidade

motion reduction

zoom

responsividade

semântica visual

mensagens de estado
Checklist inicial:
[ ] Foco visível em links

[ ] Foco visível em botões

[ ] Foco visível em formulários

[ ] Contraste suficiente em textos

[ ] Contraste suficiente em ícones

[ ] Elementos interativos possuem área adequada

[ ] Nenhuma informação depende apenas de cor

[ ] Nenhuma informação depende apenas de animação

[ ] Conteúdo permanece utilizável com zoom

[ ] Conteúdo permanece utilizável em mobile

[ ] Preferência reduced-motion é respeitada
Classificação:
CRITICAL

HIGH

MEDIUM

LOW
Acessibilidade deverá ser tratada como:
REQUISITO ESTRUTURAL
e não como:
AJUSTE POSTERIOR
34. CONTRASTE
A auditoria deverá verificar contraste entre:
texto e fundo

ícone e fundo

botão e fundo

borda e superfície

estado de foco e fundo

links e texto normal

mensagens de status
Categorias:
NORMAL TEXT

LARGE TEXT

UI COMPONENT

FOCUS INDICATOR

DECORATIVE
Tabela-base:
Elemento
Foreground
Background
Contraste
Status
TBD
TBD
TBD
TBD
PENDING
Estados a verificar:
DEFAULT

HOVER

FOCUS

ACTIVE

DISABLED

SELECTED

ERROR

SUCCESS
Temas prioritários:
dark

light

heritage

ceremonial

high-contrast

holographic
Regra:
Um tema visualmente bonito não poderá comprometer leitura e interação.
35. RESPONSIVIDADE
A auditoria deverá verificar comportamento real em diferentes larguras.
Faixas de referência:
320 px

360 px

375 px

390 px

412 px

480 px

768 px

1024 px

1280 px

1440 px

1920 px
Esses valores servem apenas como pontos de teste.
Não deverão ser assumidos como breakpoints oficiais sem confirmação no CSS.
Verificar:
header

navigation

hero

cards

grids

forms

buttons

images

tables

footer

fixed elements

floating buttons

modals
Problemas possíveis:
overflow horizontal

texto cortado

botão fora da tela

imagem deformada

grid quebrado

sobreposição

altura excessiva

largura fixa inadequada

menu inacessível
Tabela:
Viewport
Problema
Componente
Severidade
Status
TBD
TBD
TBD
TBD
PENDING
36. OVERFLOW
A auditoria deverá localizar regras relacionadas a:
overflow

overflow-x

overflow-y

text-overflow

white-space
Também deverá detectar visualmente:
scroll horizontal involuntário

conteúdo cortado

elementos vazando

cards extrapolando

texto truncado

imagens excedendo container
Classificação:
EXPECTED

STRUCTURAL

RESPONSIVE BUG

CONTENT BUG

LEGACY

UNKNOWN
Atenção especial a:
100vw

fixed widths

absolute positioning

transforms

negative margins

large shadows

pseudo-elements
Regra:
overflow: hidden não deverá ser utilizado para mascarar problemas estruturais sem diagnóstico.
37. Z-INDEX
A auditoria deverá localizar todos os valores de:
z-index
Objetivo:
identificar:
escalas desordenadas;
valores excessivamente altos;
conflitos;
stacking contexts;
elementos fixed;
modais;
menus;
tooltips;
overlays;
botões flutuantes.
Tabela:
Seletor
Z-index
Contexto
Função
Risco
TBD
TBD
TBD
TBD
TBD
Classificação:
BASE

CONTENT

STICKY

DROPDOWN

OVERLAY

MODAL

TOAST

SYSTEM
Futura recomendação possível:
tokens de camada
Exemplo conceitual:
--z-base
--z-sticky
--z-dropdown
--z-overlay
--z-modal
--z-toast
Nenhuma escala deverá ser criada antes do inventário real.
38. CSS DUPLICADO
A auditoria deverá identificar:
regras repetidas

seletores duplicados

blocos equivalentes

propriedades redefinidas

media queries redundantes

valores repetidos
Tipos:
EXACT DUPLICATE

SEMANTIC DUPLICATE

OVERRIDE

LEGACY COPY

RESPONSIVE VARIANT

INTENTIONAL DUPLICATE
Tabela:
Regra
Ocorrências
Tipo
Pode consolidar?
Risco
TBD
TBD
TBD
TBD
TBD
Regra:
Duplicação não significa automaticamente erro.
Pode existir por:
cascata

breakpoint

tema

estado

compatibilidade

ordem de carregamento
A consolidação somente ocorrerá após confirmação.
39. CSS NÃO UTILIZADO
A auditoria deverá identificar seletores potencialmente não utilizados.
Fontes de verificação:
index.html

JavaScript

templates

conteúdo dinâmico

classes adicionadas em runtime

data attributes

estados

componentes futuros
Status possíveis:
USED

DYNAMIC

LEGACY

UNKNOWN

CANDIDATE FOR REMOVAL
Nunca remover apenas porque:
grep não encontrou no HTML
A classe pode ser criada por:
classList.add(...)
ou utilizada em:
dados externos

componentes carregados depois

estados temporários
Fluxo:
DETECTAR
   ↓
PROCURAR EM TODO O PROJETO
   ↓
VERIFICAR JS
   ↓
VERIFICAR HTML
   ↓
VERIFICAR RUNTIME
   ↓
CLASSIFICAR
40. DEPENDÊNCIAS JAVASCRIPT
A auditoria deverá verificar dependências entre JavaScript e CSS.
Procurar:
classList.add

classList.remove

classList.toggle

className

style.

setAttribute

dataset

querySelector

querySelectorAll

getElementById
Mapear:
JS
Classe/ID/Data Attribute
Função
CSS relacionado
Risco
TBD
TBD
TBD
TBD
TBD
Casos críticos:
menu mobile

header scroll

theme switch

modals

accordions

tabs

filters

copy buttons

forms

maps

lazy loading
Regra:
Nenhuma classe controlada por JavaScript deverá ser renomeada sem atualização coordenada.
41. DATA ATTRIBUTES
A auditoria deverá mapear atributos como:
data-theme

data-state

data-open

data-active

data-section

data-category

data-id

data-location

data-component
Uso possível:
tema

estado

filtragem

integração

identificação

comportamento
Tabela:
Attribute
Valor
CSS
JS
Função
Status
TBD
TBD
TBD
TBD
TBD
PENDING
Atenção especial:
data-theme
porque será peça central da integração com:
theme-loader.js
Fluxo:
theme-loader.js
      ↓
data-theme
      ↓
tokens.css
      ↓
brand-integration.css
      ↓
Landing Page
42. COMPATIBILIDADE COM BRAND-INTEGRATION.CSS
Arquivo:
apps/festanca-2026/css/brand-integration.css
Função:
CAMADA DE COMPATIBILIDADE
Objetivos:
preservar classes legadas

introduzir aliases

conectar tokens

reduzir risco de regressão

permitir migração progressiva
A auditoria deverá verificar:
quais classes existentes podem receber tokens

quais propriedades podem ser sobrescritas com segurança

quais componentes precisam de aliases

quais áreas exigem isolamento

quais regras dependem da ordem da cascata
Modelo:
LEGACY CLASS
     ↓
BRAND INTEGRATION
     ↓
DESIGN TOKEN
Exemplo conceitual:
.legacy-card {
  background: var(--festanca-surface);
  border-color: var(--festanca-border);
}
Regra:
A camada de integração não deverá duplicar todo o style.css.
Ela deverá funcionar como:
PONTE
e não como:
SEGUNDO SISTEMA CSS COMPLETO
43. COMPATIBILIDADE COM TOKENS.CSS
Arquivo:
assets/brand/tokens/tokens.css
A auditoria deverá validar:
nomes das variáveis

valores

escopo

fallbacks

temas

aliases

dependências

ordem de carregamento
Verificar:
variáveis inexistentes

variáveis sem uso

duplicações

nomes divergentes

referências quebradas
Modelo de consumo:
color: var(--festanca-text);

background: var(--festanca-surface);

border-radius: var(--festanca-radius-card);

box-shadow: var(--festanca-shadow-card);
Regra:
tokens.css deverá ser tratado como artefato derivado da arquitetura oficial de tokens.
A fonte conceitual permanece:
JSON TOKENS
44. ORDEM DA CASCATA
A ordem dos estilos deverá ser auditada cuidadosamente.
Arquitetura-alvo:
<link rel="stylesheet"
      href="../../assets/brand/tokens/tokens.css">

<link rel="stylesheet"
      href="css/brand-integration.css">

<link rel="stylesheet"
      href="css/style.css">
Mas a ordem definitiva deverá respeitar o comportamento real da Landing Page.
Duas estratégias possíveis:
Estratégia A
tokens.css
     ↓
brand-integration.css
     ↓
style.css
Objetivo:
LEGADO TEM PRIORIDADE FINAL
Adequada para:
fase inicial conservadora
Estratégia B
tokens.css
     ↓
style.css
     ↓
brand-integration.css
Objetivo:
CAMADA DE INTEGRAÇÃO SOBRESCREVE O LEGADO
Adequada para:
migração controlada
A escolha deverá ser baseada em teste.
Nunca por preferência teórica.
Registrar:
ORDEM ATUAL:

TBD

ORDEM TESTADA:

TBD

ORDEM RECOMENDADA:

TBD
45. RISCOS DE INTEGRAÇÃO
Classificação oficial:
R0 — NEGLIGIBLE

R1 — LOW

R2 — MEDIUM

R3 — HIGH

R4 — CRITICAL
Matriz:
Área
Risco inicial
Motivo
Tokens isolados
R1
Baixo impacto
Cards simples
R1/R2
Escopo limitado
Botões
R2
Estados interativos
Tipografia global
R3
Impacto amplo
Header
R3
Navegação + layout
Hero
R3
LCP + layout
Breakpoints
R4
Impacto sistêmico
Reset global
R4
Toda interface
IDs usados por JS
R4
Risco funcional
Riscos técnicos:
regressão visual

regressão responsiva

conflito de especificidade

mudança de layout

quebra de JavaScript

problemas de contraste

alteração cultural inadequada

carregamento adicional

CLS

LCP

FOUT

FOIT
Riscos culturais:
descaracterização

substituição indevida de símbolo

uso inadequado de ícone

perda de contexto

aplicação decorativa imprópria
46. MATRIZ PRELIMINAR DE MIGRAÇÃO
A migração deverá ocorrer por níveis.
NÍVEL 0 — INVENTÁRIO
SEM ALTERAÇÃO VISUAL
Ações:
auditar

mapear

documentar
NÍVEL 1 — ALIASES
BAIXO RISCO
Ações:
ligar valores existentes a tokens equivalentes
Exemplo:
--legacy-gold: var(--festanca-gold);
NÍVEL 2 — COMPONENTES ISOLADOS
RISCO CONTROLADO
Exemplos:
badge

botão secundário

card informativo simples

tag

divisor
NÍVEL 3 — COMPONENTES ESTRUTURAIS
RISCO MÉDIO/ALTO
Exemplos:
cards principais

navigation

footer

forms
NÍVEL 4 — COMPONENTES CRÍTICOS
ALTO RISCO
Exemplos:
header

hero

breakpoints

layout principal

tipografia global
Fluxo:
N0
 ↓
N1
 ↓
N2
 ↓
N3
 ↓
N4
Nunca:
N0
 ↓
N4 DIRETAMENTE
47. DEPRECATION STRATEGY
Elementos legados deverão ser descontinuados progressivamente.
Estados:
ACTIVE

MAPPED

DEPRECATED

COMPATIBILITY ONLY

REMOVED
Fluxo:
ACTIVE
   ↓
MAPPED
   ↓
TOKENIZED
   ↓
DEPRECATED
   ↓
REMOVED
Todo item depreciado deverá registrar:
nome

arquivo

versão

motivo

substituto

data

responsável

impacto
Exemplo:
Legacy:
--old-gold

Substituto:
--festanca-gold

Status:
DEPRECATED

Remover:
somente após confirmação de zero uso
Regra:
Deprecar antes de remover.
A compatibilidade tem prioridade sobre limpeza prematura.
48. PILOTO DE MIGRAÇÃO
Antes de migrar componentes críticos, deverá ser escolhido um componente-piloto.
Critérios:
baixo risco

visualmente identificável

poucas dependências

sem JavaScript crítico

fácil rollback

representativo do sistema visual
Candidatos:
badge

tag

card informativo simples

botão secundário

divisor de seção
Evitar inicialmente:
header

hero

menu mobile

grid principal

formulário complexo

floating button crítico
Fluxo do piloto:
ESCOLHER COMPONENTE
        ↓
REGISTRAR BASELINE
        ↓
MAPEAR CSS ATUAL
        ↓
MAPEAR TOKENS
        ↓
APLICAR INTEGRAÇÃO
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
Critérios de aprovação:
[ ] Sem regressão funcional

[ ] Sem regressão visual grave

[ ] Sem overflow

[ ] Sem quebra responsiva

[ ] Contraste preservado ou melhorado

[ ] Foco preservado

[ ] Sem dependência quebrada

[ ] Tokens corretamente utilizados

[ ] Rollback possível

[ ] Mudança registrada no CHANGELOG
Resultado:
PILOT STATUS:

PENDING
O piloto aprovado será utilizado como padrão para os componentes seguintes.
FIM DO BLOCO 3 DE 4
Cobertura:
SEÇÕES 33 → 48

✓ Acessibilidade

✓ Contraste

✓ Responsividade

✓ Overflow

✓ Z-Index

✓ CSS Duplicado

✓ CSS Não Utilizado

✓ Dependências JavaScript

✓ Data Attributes

✓ Compatibilidade com brand-integration.css

✓ Compatibilidade com tokens.css

✓ Ordem da Cascata

✓ Riscos de Integração

✓ Matriz Preliminar de Migração

✓ Deprecation Strategy

✓ Piloto de Migração

# 49. COMANDOS DE AUDITORIA

Esta seção consolida comandos operacionais para inspeção inicial da camada CSS.

Os comandos deverão ser executados a partir da raiz do repositório:

```bash
cd ~/decio-coelho-global
49.1 Localizar arquivos CSS
find apps/festanca-2026 \
  -type f \
  -name "*.css" \
  -print
49.2 Contar linhas
wc -l \
apps/festanca-2026/css/*.css
49.3 Localizar cores hexadecimais
grep -RInE \
'#[0-9A-Fa-f]{3,8}' \
apps/festanca-2026/css
49.4 Localizar rgb, rgba, hsl e hsla
grep -RInE \
'rgba?\(|hsla?\(' \
apps/festanca-2026/css
49.5 Localizar !important
grep -RIn \
'!important' \
apps/festanca-2026/css
49.6 Localizar media queries
grep -RIn \
'@media' \
apps/festanca-2026/css
49.7 Localizar z-index
grep -RIn \
'z-index' \
apps/festanca-2026/css
49.8 Localizar overflow
grep -RInE \
'overflow(-x|-y)?[[:space:]]*:' \
apps/festanca-2026/css
49.9 Localizar CSS variables
grep -RInE \
'--[a-zA-Z0-9_-]+[[:space:]]*:' \
apps/festanca-2026/css
49.10 Localizar uso de var()
grep -RIn \
'var(--' \
apps/festanca-2026/css
49.11 Localizar seletores por ID
grep -RInE \
'#[a-zA-Z_-][a-zA-Z0-9_-]*[[:space:]]*[{,]' \
apps/festanca-2026/css
49.12 Localizar estilos inline no HTML
grep -RInE \
'style="' \
apps/festanca-2026
49.13 Localizar manipulação CSS pelo JavaScript
grep -RInE \
'classList|className|\.style|setAttribute\(["'\'']style|dataset' \
apps/festanca-2026/js
49.14 Localizar data attributes
grep -RInE \
'data-[a-zA-Z0-9_-]+' \
apps/festanca-2026
Os resultados deverão ser registrados como:
EVIDÊNCIA
e nunca interpretados automaticamente como:
ERRO
50. EVIDÊNCIAS
Toda conclusão relevante desta auditoria deverá possuir evidência verificável.
Tipos de evidência:
CODE

SCREENSHOT

TERMINAL

BROWSER

RESPONSIVE TEST

ACCESSIBILITY TEST

RUNTIME

VERSION CONTROL
Formato recomendado:
EVIDENCE-ID:
CSS-EVID-0001

TIPO:
CODE

ARQUIVO:
apps/festanca-2026/css/style.css

LINHA:
TBD

OBSERVAÇÃO:
TBD

RELACIONADO AO FINDING:
CSS-FIND-0001
Padrão de identificação:
CSS-EVID-0001

CSS-EVID-0002

CSS-EVID-0003
Regras:
Toda evidência deve ser rastreável.

Não alterar evidência original.

Screenshots devem preservar contexto suficiente.

Saídas de terminal devem registrar comando utilizado.

Comparações visuais devem registrar viewport.

Evidências críticas devem ser preservadas antes da alteração.
51. REGISTRO DE FINDINGS
Cada problema, risco, oportunidade ou inconsistência deverá ser registrado formalmente.
Modelo:
FINDING-ID:
CSS-FIND-0001

TÍTULO:
TBD

CATEGORIA:
TBD

SEVERIDADE:
TBD

STATUS:
OPEN

ARQUIVO:
TBD

LINHAS:
TBD

EVIDÊNCIA:
CSS-EVID-XXXX

DESCRIÇÃO:
TBD

IMPACTO:
TBD

RECOMENDAÇÃO:
TBD

RISCO DE ALTERAÇÃO:
TBD

DEPENDÊNCIAS:
TBD

RESPONSÁVEL:
TBD
Categorias:
COLOR

TYPOGRAPHY

SPACING

LAYOUT

RESPONSIVE

ACCESSIBILITY

PERFORMANCE

SPECIFICITY

DUPLICATION

LEGACY

JAVASCRIPT DEPENDENCY

THEME

CULTURAL IDENTITY

MAINTAINABILITY
Status:
OPEN

UNDER REVIEW

APPROVED

IN PROGRESS

VALIDATION

RESOLVED

DEFERRED

REJECTED
52. SEVERIDADE
Escala oficial:
S0 — INFORMATIONAL

S1 — LOW

S2 — MEDIUM

S3 — HIGH

S4 — CRITICAL
S0 — INFORMATIONAL
documentação

melhoria futura

padronização opcional

observação sem impacto
S1 — LOW
inconsistência visual pequena

duplicação simples

melhoria de manutenção
S2 — MEDIUM
problema responsivo localizado

inconsistência de componente

problema moderado de acessibilidade
S3 — HIGH
quebra funcional provável

baixo contraste relevante

layout inconsistente em múltiplos dispositivos

dependência crítica de cascata
S4 — CRITICAL
interface inutilizável

conteúdo inacessível

menu quebrado

formulário indisponível

erro que impede navegação

regressão generalizada
Prioridade:
SEVERIDADE
+
IMPACTO
+
PROBABILIDADE
+
ALCANCE
53. QUICK WINS
Quick Wins deverão ser alterações:
baixo risco

baixo custo

alto benefício

fácil rollback

facilmente validáveis
Possíveis candidatos:
substituir valor repetido por token equivalente

padronizar foco visível

corrigir contraste localizado

corrigir touch target isolado

eliminar duplicação exata segura

documentar alias

corrigir variável inexistente
Tabela:
Quick Win
Benefício
Risco
Esforço
Status
TBD
TBD
LOW
LOW
PENDING
Regra:
Quick Win não significa mudança sem teste.
Todo Quick Win deverá seguir:
BASELINE

ALTERAÇÃO

VALIDAÇÃO

REGISTRO

ROLLBACK DISPONÍVEL
54. DÍVIDA TÉCNICA
A auditoria deverá registrar dívida técnica acumulada.
Categorias:
LEGACY CSS

DUPLICATION

HARDCODED VALUES

SPECIFICITY

UNUSED CSS

RESPONSIVE

ACCESSIBILITY

NAMING

DOCUMENTATION

ARCHITECTURE

JAVASCRIPT COUPLING
Classificação:
ACCEPTED

PLANNED

HIGH PRIORITY

BLOCKING
Registro:
DEBT-ID:
CSS-DEBT-0001

CATEGORIA:
TBD

ORIGEM:
TBD

IMPACTO:
TBD

RISCO:
TBD

PLANO:
TBD

VERSÃO-ALVO:
TBD
Objetivo:
NÃO ESCONDER DÍVIDA
       ↓
TORNÁ-LA VISÍVEL
       ↓
PRIORIZÁ-LA
       ↓
REDUZI-LA PROGRESSIVAMENTE
55. PERFORMANCE
A auditoria deverá avaliar impacto da camada visual sobre desempenho.
Itens:
tamanho dos CSS

número de arquivos

regras duplicadas

CSS não utilizado

fontes

imagens de background

shadows pesadas

filters

backdrop-filter

animations

fixed backgrounds

large textures
Métricas relacionadas:
LCP

CLS

INP

FCP

render blocking
Atenção especial:
filter:

backdrop-filter:

box-shadow:

background-image:

animation:

transition:
Tabela:
Recurso
Impacto potencial
Prioridade
Status
TBD
TBD
TBD
PENDING
Regra:
Performance não deverá eliminar identidade visual; deverá orientar implementação eficiente.
56. VALIDAÇÃO VISUAL
Toda migração deverá possuir comparação visual.
Método recomendado:
BEFORE

vs.

AFTER
Registrar:
viewport

dispositivo

navegador

tema

estado do componente

data

versão
Viewports mínimos:
360 px

390 px

768 px

1024 px

1440 px
Estados:
default

hover

focus

active

open

disabled

error
Critérios:
hierarquia preservada

marca preservada

contraste adequado

sem sobreposição

sem corte

sem mudança inesperada

sem regressão cultural
57. VALIDAÇÃO TÉCNICA
A validação deverá incluir:
HTML

CSS

JavaScript

JSON

responsividade

acessibilidade

console

network
Comandos básicos:
Validar JSON dos tokens
for f in assets/brand/tokens/*.json
do
  python -m json.tool "$f" > /dev/null || exit 1
done

echo "✅ JSON tokens válidos"
Verificar sintaxe JavaScript
node --check \
assets/brand/tokens/theme-loader.js
Confirmar arquivos principais
test -f assets/brand/tokens/tokens.css &&
test -f assets/brand/tokens/theme-loader.js &&
test -f apps/festanca-2026/css/brand-integration.css &&
echo "✅ Camada Brand presente"
Também verificar no navegador:
console errors

404

CSS não carregado

JS não carregado

variáveis indefinidas

layout shifts
58. PLANO DE ROLLBACK
Toda alteração estrutural deverá possuir possibilidade clara de reversão.
Estratégias:
git revert

rollback de commit

remoção temporária do link CSS

feature flag

desativação da classe de integração

restauração do arquivo anterior
Antes da migração registrar:
COMMIT BASELINE:

TBD

BRANCH:

main

ARQUIVOS ALTERADOS:

TBD
Fluxo:
ALTERAÇÃO
   ↓
TESTE
   ↓
PROBLEMA?
   ├─ NÃO → APROVAR
   └─ SIM
        ↓
      ROLLBACK
        ↓
      DIAGNÓSTICO
Regra:
Nenhuma migração crítica deverá ser irreversível.
59. GOVERNANÇA DA MIGRAÇÃO
A migração seguirá a governança definida em:
assets/brand/governance.md
Papéis:
proposição

revisão visual

revisão cultural

revisão técnica

revisão de acessibilidade

aprovação institucional

publicação

registro no CHANGELOG
Fluxo:
PROPOSTA
   ↓
EVIDÊNCIA
   ↓
REVISÃO
   ↓
TESTE
   ↓
APROVAÇÃO
   ↓
PUBLICAÇÃO
   ↓
CHANGELOG
Alterações críticas incluem:
logo

cores institucionais

símbolos culturais

tipografia principal

header

hero

navegação

breakpoints globais

tema padrão
60. BASELINE OFICIAL
Antes da primeira migração real deverá ser estabelecida uma baseline.
A baseline deverá registrar:
commit

data

estado visual

arquivos CSS

arquivos JS relacionados

estrutura HTML

screenshots

viewports

temas

problemas conhecidos
Modelo:
BASELINE-ID:
FESTANCA-CSS-BASELINE-2026-001

COMMIT:
TBD

DATA:
TBD

STATUS:
PENDING

ARQUIVOS PRINCIPAIS:

apps/festanca-2026/index.html

apps/festanca-2026/css/style.css

apps/festanca-2026/css/brand-integration.css

assets/brand/tokens/tokens.css

assets/brand/tokens/theme-loader.js
A baseline será:
PONTO ZERO OFICIAL
para comparar todas as evoluções futuras.
61. CRITÉRIOS DE APROVAÇÃO
Uma migração somente poderá ser considerada aprovada quando:
[ ] O componente funciona

[ ] O layout permanece estável

[ ] Mobile foi testado

[ ] Desktop foi testado

[ ] Contraste foi validado

[ ] Foco está visível

[ ] Navegação por teclado permanece funcional

[ ] JavaScript não foi quebrado

[ ] Não existem erros novos no console

[ ] Não existem 404 novos

[ ] Tokens utilizados existem

[ ] Rollback está disponível

[ ] Evidências foram registradas

[ ] Finding relacionado foi atualizado

[ ] CHANGELOG foi atualizado
Para componentes culturais:
[ ] Significado cultural preservado

[ ] Símbolo corretamente utilizado

[ ] Contexto respeitado

[ ] Proveniência preservada quando aplicável
Status final:
APPROVED

APPROVED WITH NOTES

REJECTED

ROLLBACK REQUIRED
62. PRÓXIMOS ARTEFATOS
Após a conclusão desta auditoria, os próximos artefatos recomendados serão:
apps/festanca-2026/docs/css-findings-register.md

apps/festanca-2026/docs/css-migration-plan.md

apps/festanca-2026/docs/css-baseline.md

apps/festanca-2026/docs/component-migration-matrix.md
Possível sequência:
CSS AUDIT REPORT
      ↓
FINDINGS REGISTER
      ↓
BASELINE
      ↓
MIGRATION PLAN
      ↓
PILOT COMPONENT
      ↓
VALIDATION
      ↓
ROLL-OUT PROGRESSIVO
Automação futura recomendada:
scripts/brand/
Possíveis scripts:
audit-css.sh

validate-tokens.sh

validate-brand-paths.sh

check-hardcoded-colors.sh

check-token-references.sh

generate-css-report.sh
63. CONCLUSÃO
A Landing Page da FESTANÇA 2026 não deverá ser submetida a uma substituição visual abrupta.
A estratégia oficial será:
PRESERVAR
   ↓
AUDITAR
   ↓
DOCUMENTAR
   ↓
MAPEAR
   ↓
TOKENIZAR
   ↓
INTEGRAR
   ↓
TESTAR
   ↓
VALIDAR
   ↓
MIGRAR PROGRESSIVAMENTE
O Brand Design System agora possui uma arquitetura capaz de conectar:
IDENTIDADE VISUAL

PATRIMÔNIO CULTURAL

DESIGN TOKENS

CSS

JAVASCRIPT

ACESSIBILIDADE

RESPONSIVIDADE

GOVERNANÇA

CONTROLE DE VERSÕES
A auditoria estabelece a ponte entre:
LANDING PAGE EXISTENTE
        ↓
ARQUITETURA DE TRANSIÇÃO
        ↓
OFFICIAL BRAND DESIGN SYSTEM
O objetivo não é simplesmente modernizar a aparência.
O objetivo é garantir:
CONSISTÊNCIA

MEMÓRIA

IDENTIDADE

SEGURANÇA

RASTREABILIDADE

ESCALABILIDADE

ACESSIBILIDADE

CONTINUIDADE HISTÓRICA
64. PRINCÍPIO FINAL
O CSS da FESTANÇA 2026 deverá evoluir sem apagar sua história.
Cada regra existente deverá ser tratada inicialmente como:
POSSÍVEL DECISÃO DE PROJETO
e não como:
ERRO A SER ELIMINADO
Toda evolução deverá respeitar três dimensões simultâneas:
TÉCNICA

VISUAL

CULTURAL
Princípio arquitetural:
NÃO REESCREVER PRIMEIRO.

COMPREENDER PRIMEIRO.
Princípio operacional:
NÃO REMOVER SEM EVIDÊNCIA.

NÃO MIGRAR SEM BASELINE.

NÃO PUBLICAR SEM VALIDAÇÃO.
Princípio patrimonial:
A tecnologia deve servir à memória.

O design deve servir à identidade.

A inovação deve fortalecer a tradição.
STATUS FINAL DO DOCUMENTO
Documento:
apps/festanca-2026/docs/css-audit-report.md

Versão:
1.0.0

Status:
OFFICIAL — BASELINE AUDIT FRAMEWORK

Cobertura:
SEÇÕES 01 → 64

Bloco 1:
01 → 16

Bloco 2:
17 → 32

Bloco 3:
33 → 48

Bloco 4:
49 → 64

Resultado:
ESTRUTURA COMPLETA
FIM DO CSS AUDIT REPORT
FESTANÇA 2026
OFFICIAL BRAND DESIGN SYSTEM

CSS AUDIT REPORT
COMPLETO

64 SEÇÕES

Ao encontro do futuro,
com os pés firmes na tradição.
