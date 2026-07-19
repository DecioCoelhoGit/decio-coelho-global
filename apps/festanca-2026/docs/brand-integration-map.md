PERFEITO! As capturas confirmam um marco importante: o brand-integration.css já foi criado e passou pelas verificações básicas, incluindo presença do arquivo, estrutura esperada e pontos críticos como prefers-reduced-motion. Agora o brand-integration-map.md deve funcionar como documento de controle da migração, e não apenas como documentação descritiva.
Crie exatamente:
apps/festanca-2026/docs/brand-integration-map.md
Conteúdo completo para copiar e colar no GitHub:
# FESTANÇA 2026
## Official Brand Design System

# Brand Integration Map
## Mapa Oficial de Migração da Landing Page

**Versão:** 1.0.0  
**Status:** Oficial — Migration Governance  
**Projeto:** FESTANÇA 2026  
**Local:** Vila Bela da Santíssima Trindade — Mato Grosso — Brasil  

> **“Ao encontro do futuro, com os pés firmes na tradição.”**

---

# 1. FINALIDADE

Este documento estabelece o mapa técnico oficial para integração progressiva do:

```text
FESTANÇA 2026
OFFICIAL BRAND DESIGN SYSTEM
com a Landing Page existente em:
apps/festanca-2026/
Seu objetivo é garantir que a migração:
preserve o que já funciona;
não provoque regressões visuais;
mantenha compatibilidade com dispositivos móveis;
preserve acessibilidade;
respeite a identidade histórico-cultural;
seja progressiva;
seja reversível;
seja auditável;
utilize os Design Tokens como fonte primária de verdade.
2. PRINCÍPIO CENTRAL
NÃO DESTRUIR O QUE JÁ FUNCIONA.

MAPEAR
   ↓
CONECTAR
   ↓
COMPATIBILIZAR
   ↓
TESTAR
   ↓
MIGRAR
   ↓
VALIDAR
   ↓
CONSOLIDAR
Nenhum componente existente deverá ser substituído apenas por razões estéticas.
Toda migração deverá possuir justificativa:
técnica;
visual;
funcional;
cultural;
de acessibilidade;
ou de manutenção.
3. ARQUITETURA DE INTEGRAÇÃO
IDENTIDADE CULTURAL
        │
        ▼
BRAND GOVERNANCE
        │
        ▼
DESIGN TOKENS JSON
        │
        ├── colors.json
        ├── typography.json
        ├── spacing.json
        ├── radius.json
        ├── shadows.json
        ├── animations.json
        ├── icons.json
        ├── symbols.json
        └── themes.json
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
        ├──────────────┐
        ▼              ▼
theme-loader.js     style.css
        │              │
        └──────┬───────┘
               ▼
          index.html
               │
               ▼
        LANDING PAGE
               │
               ▼
      FESTANÇA DIGITAL
4. FONTES DE VERDADE
4.1 Fonte primária
Os arquivos JSON localizados em:
assets/brand/tokens/
constituem a fonte primária de verdade dos Design Tokens.
4.2 Manifesto central
assets/brand/tokens/index.json
Responsável pelo registro:
dos arquivos;
dependências;
versões;
ordem de carregamento;
status;
integrações;
governança.
4.3 Camada CSS executável
assets/brand/tokens/tokens.css
Responsável por transformar os tokens arquiteturais em:
var(--festanca-*)
consumíveis pelas interfaces.
4.4 Runtime de temas
assets/brand/tokens/theme-loader.js
Responsável pelo gerenciamento dinâmico dos temas e preferências compatíveis.
4.5 Ponte de integração
apps/festanca-2026/css/brand-integration.css
Responsável pela compatibilidade entre:
Design Tokens
        ↕
CSS legado
4.6 CSS existente
apps/festanca-2026/css/style.css
Permanece válido durante a migração.
Não deverá ser substituído integralmente.
Sua evolução será progressiva.
5. ORDEM FUTURA DE CARREGAMENTO
A ordem arquitetural prevista para a Landing Page será:
HTML
<link
  rel="stylesheet"
  href="../../assets/brand/tokens/tokens.css"
/>

<link
  rel="stylesheet"
  href="./css/brand-integration.css"
/>

<link
  rel="stylesheet"
  href="./css/style.css"
/>
E, para o runtime:
HTML
<script
  src="../../assets/brand/tokens/theme-loader.js"
  defer
></script>
ATENÇÃO
Esta integração somente deverá ser ativada após:
AUDITORIA
    ↓
MAPEAMENTO
    ↓
VALIDAÇÃO DE CAMINHOS
    ↓
TESTE LOCAL
    ↓
TESTE MOBILE
    ↓
PUBLICAÇÃO CONTROLADA
Não inserir automaticamente em produção sem validação.
6. ESTADOS OFICIAIS DE MIGRAÇÃO
Cada componente poderá assumir um dos seguintes estados:
Estado
Significado
NOT-MAPPED
Ainda não analisado
MAPPED
Estrutura identificada
LEGACY
Mantido no CSS atual
TRANSITIONING
Em processo de migração
MIGRATED
Já utiliza tokens oficiais
VALIDATED
Migrado e testado
DEPRECATED
Estrutura antiga aguardando remoção
BLOCKED
Migração temporariamente impedida
7. NÍVEIS DE RISCO
LOW
Alterações com baixo potencial de regressão.
Exemplos:
cores de fundo;
cores de texto;
bordas simples;
pequenos aliases.
MEDIUM
Alterações que podem modificar layout ou legibilidade.
Exemplos:
tipografia;
espaçamento;
botões;
cards;
formulários.
HIGH
Alterações que podem afetar estrutura crítica.
Exemplos:
header;
navegação;
hero;
posicionamento;
menus;
componentes JavaScript;
breakpoints;
temas.
CRITICAL
Alterações com impacto direto sobre:
identidade cultural;
conteúdo oficial;
acessibilidade;
funcionamento institucional;
informações históricas;
programação oficial;
rotas e localização.
Alterações CRITICAL exigem validação específica.
8. MATRIZ MASTER DE MIGRAÇÃO
Elemento
Origem atual
Destino
Risco
Prioridade
Status
Background global
style.css
--festanca-bg
LOW
P1
MAPPED
Texto principal
style.css
--festanca-text
LOW
P1
MAPPED
Texto secundário
style.css
token semântico
LOW
P1
MAPPED
Bordas
style.css
--festanca-border
LOW
P1
MAPPED
Dourado institucional
valores locais
token gold
LOW
P1
MAPPED
Tipografia
regras locais
typography tokens
MEDIUM
P2
MAPPED
Espaçamentos
valores locais
spacing tokens
MEDIUM
P2
MAPPED
Radius
valores locais
radius tokens
MEDIUM
P2
MAPPED
Shadows
valores locais
shadow tokens
MEDIUM
P2
MAPPED
Botões
classes existentes
bridge + tokens
MEDIUM
P3
MAPPED
Cards
classes existentes
bridge + tokens
MEDIUM
P3
MAPPED
Formulários
estilos existentes
bridge + tokens
MEDIUM
P3
MAPPED
Header
CSS atual
integração progressiva
HIGH
P4
NOT-MAPPED
Navegação
CSS + JS
integração progressiva
HIGH
P4
NOT-MAPPED
Hero
CSS atual
tokens semânticos
HIGH
P4
NOT-MAPPED
Programação
componentes atuais
semantic tokens
HIGH
P5
NOT-MAPPED
Congo
conteúdo cultural
cultural tokens
CRITICAL
P5
NOT-MAPPED
Conguinho
conteúdo cultural
cultural tokens
CRITICAL
P5
NOT-MAPPED
Chorado
conteúdo cultural
cultural tokens
CRITICAL
P5
NOT-MAPPED
Choradinho
conteúdo cultural
cultural tokens
CRITICAL
P5
NOT-MAPPED
Reinado
conteúdo cerimonial
ceremonial tokens
CRITICAL
P5
NOT-MAPPED
Juizado
conteúdo cerimonial
ceremonial tokens
CRITICAL
P5
NOT-MAPPED
Footer
CSS atual
tokens
MEDIUM
P4
NOT-MAPPED
Responsividade
media queries
tokens/layout
HIGH
P6
NOT-MAPPED
Acessibilidade
regras atuais
tokens + bridge
CRITICAL
P1
MAPPED
Temas
inexistente/parcial
theme-loader.js
HIGH
P7
NOT-MAPPED
9. FASE 0 — BASE ARQUITETURAL
Objetivo
Consolidar a infraestrutura antes da integração visual.
Artefatos
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
tokens.css
theme-loader.js
README.md
brand-integration.css
brand-integration-map.md
Status
[✓] Design Tokens JSON
[✓] Manifesto index.json
[✓] tokens.css
[✓] theme-loader.js
[✓] README técnico
[✓] brand-integration.css
[✓] mapa de integração
Resultado:
INFRAESTRUTURA DO BRAND DESIGN SYSTEM
PRONTA PARA AUDITORIA DA LANDING PAGE
10. FASE 1 — CORES FUNDAMENTAIS
Migrar primeiro:
background
text
muted text
border
primary
secondary
accent
gold
Motivo
São alterações:
altamente visíveis;
relativamente fáceis de testar;
de baixo risco estrutural.
Critério de aceite
[ ] Nenhum texto perde contraste
[ ] Nenhum fundo fica ilegível
[ ] Dourado mantém função cultural
[ ] Links continuam identificáveis
[ ] Focus permanece visível
[ ] Alto contraste permanece funcional
11. FASE 2 — TIPOGRAFIA
Mapear:
font-family
font-size
font-weight
line-height
letter-spacing
headings
body
labels
captions
Regra
Não substituir tipografia apenas por estética.
Validar:
legibilidade;
mobile;
acessibilidade;
hierarquia;
identidade institucional.
12. FASE 3 — ESPAÇAMENTO E GEOMETRIA
Migrar:
margin
padding
gap
radius
container widths
section spacing
Risco
Alterações aparentemente pequenas podem modificar:
quebra de linha
altura de cards
posição de botões
menu mobile
hero
fluxo vertical
Por isso deverão ser feitas progressivamente.
13. FASE 4 — COMPONENTES
Componentes prioritários:
buttons
cards
badges
forms
inputs
selectors
links
dividers
containers
Fluxo:
COMPONENTE LEGADO
       ↓
MAPEAR CLASSES
       ↓
IDENTIFICAR TOKENS
       ↓
APLICAR BRIDGE
       ↓
TESTAR
       ↓
MIGRATED
       ↓
VALIDATED
14. FASE 5 — HEADER
O Header é considerado:
HIGH RISK
Auditar:
logo
identidade
menu
mobile menu
links
sticky/fixed
z-index
altura
scroll behavior
acessibilidade
touch targets
Não migrar integralmente em uma única alteração.
15. FASE 6 — HERO
Auditar:
imagem
overlay
gradientes
headline
tagline
CTAs
responsividade
contraste
carregamento
LCP
Objetivo:
preservar impacto visual sem comprometer desempenho.
16. FASE 7 — PROGRAMAÇÃO OFICIAL
A programação possui caráter informacional crítico.
Não permitir que migração visual altere:
datas
horários
nomes
locais
categorias
ordem cronológica
informações oficiais
A camada visual deve permanecer separada da camada de dados.
Arquitetura:
programacao-2026.json
          ↓
renderização
          ↓
componente
          ↓
Design Tokens
Nunca:
Design Tokens
      ↓
alteração dos dados
17. FASE 8 — GRUPOS CULTURAIS
Elementos:
CONGO
CONGUINHO
CHORADO
CHORADINHO
Classificação:
CRITICAL CULTURAL CONTENT
Regras:
não alterar significado cultural;
não recolorir símbolos arbitrariamente;
não substituir iconografia sem validação;
preservar nomenclatura oficial;
preservar proveniência;
respeitar contexto histórico;
manter acessibilidade.
18. FASE 9 — REINADO E JUIZADO
Elementos cerimoniais possuem significado próprio.
O Design System deverá:
APOIAR A REPRESENTAÇÃO
e nunca:
REDEFINIR A TRADIÇÃO
A hierarquia cultural é fonte superior à conveniência estética.
19. FASE 10 — TEMAS
Temas previstos pelo sistema deverão ser ativados somente após validação individual.
Fluxo:
themes.json
      ↓
tokens.css
      ↓
theme-loader.js
      ↓
brand-integration.css
      ↓
interface
Testar cada tema em:
mobile
tablet
desktop
alto contraste
reduced motion
navegação por teclado
20. ALIASES LEGADOS
Aliases transitórios poderão existir em:
brand-integration.css
Exemplos:
--primary-color
--secondary-color
--background-color
--text-color
--gold
Fluxo de depreciação:
ALIAS LEGADO
     ↓
IDENTIFICAR USOS
     ↓
SUBSTITUIR PELO TOKEN OFICIAL
     ↓
TESTAR
     ↓
MARCAR DEPRECATED
     ↓
REMOVER EM VERSÃO MAJOR
21. REGRA DE CASCATA
Ordem planejada:
1. tokens.css
2. brand-integration.css
3. style.css
Isso significa que:
TOKENS
fornecem valores

BRIDGE
fornece compatibilidade

STYLE.CSS
mantém ajustes específicos
durante a migração
No futuro, conforme a migração avançar:
style.css
deverá depender progressivamente menos de valores hardcoded.
22. AUDITORIA DE HARDCODED VALUES
Localizar progressivamente:
hex colors
rgb()
rgba()
hsl()
font-size fixo
margin fixo
padding fixo
border-radius fixo
box-shadow fixo
transition fixo
z-index
Classificar cada ocorrência:
KEEP
MIGRATE
TOKENIZE
DEPRECATE
REVIEW
Nem todo valor fixo precisa virar token.
Somente valores:
recorrentes;
semânticos;
estruturais;
reutilizáveis;
relevantes ao Design System.
23. MAPA DE RESPONSIVIDADE
Auditar breakpoints existentes antes de alterá-los.
Tabela:
Faixa
Situação
Risco
Mobile pequeno
auditar
HIGH
Mobile padrão
auditar
HIGH
Tablet
auditar
MEDIUM
Desktop
auditar
MEDIUM
Wide desktop
auditar
LOW
Não substituir breakpoints existentes sem teste real.
24. ACESSIBILIDADE
A migração deverá preservar ou melhorar:
WCAG
contraste
navegação por teclado
focus-visible
touch targets
alt text
ARIA
reduced motion
zoom
leitura mobile
screen readers
Checklist:
[ ] Focus visível
[ ] Contraste adequado
[ ] Touch target mínimo
[ ] Imagens com alt
[ ] Ordem semântica preservada
[ ] Headings hierárquicos
[ ] Reduced motion funcional
[ ] Tema de alto contraste funcional
25. PERFORMANCE
Monitorar:
CSS duplicado
CSS não utilizado
JS bloqueante
fontes
imagens
LCP
CLS
INP
cache
O Brand Design System não deverá aumentar complexidade sem benefício mensurável.
26. ESTRATÉGIA DE ROLLBACK
Toda fase deve permitir retorno.
Fluxo:
ANTES DA ALTERAÇÃO
      ↓
estado funcional conhecido
      ↓
alteração isolada
      ↓
teste
      ↓
FALHOU?
  │       │
 SIM     NÃO
  │       │
rollback  avançar
Evitar alterações massivas simultâneas.
27. MATRIZ DE TESTES
Cada etapa deverá ser validada em:
Ambiente
Obrigatório
Android
SIM
Mobile portrait
SIM
Mobile landscape
SIM
Desktop
SIM
GitHub Pages
SIM
Navegação por teclado
SIM
Reduced Motion
SIM
Alto contraste
SIM
JavaScript desabilitado
RECOMENDADO
28. CRITÉRIO DE “MIGRATED”
Um componente somente poderá receber status:
MIGRATED
quando:
[✓] usa tokens oficiais
[✓] não depende desnecessariamente de hardcoded values
[✓] mantém funcionalidade
[✓] mantém responsividade
[✓] mantém acessibilidade
29. CRITÉRIO DE “VALIDATED”
Para:
VALIDATED
também deverá:
[✓] passar teste mobile
[✓] passar teste desktop
[✓] passar teste visual
[✓] passar teste de interação
[✓] passar teste de acessibilidade aplicável
[✓] não introduzir regressão conhecida
30. MIGRATION LEDGER
Registrar progressivamente:
Data
Componente
De
Para
Status
Observação
—
Infraestrutura
arquitetura
tokens
VALIDATED
Base criada
—
Integration Bridge
legado
bridge
VALIDATED
Arquivo criado
—
Landing Page
legado
tokens
PENDING
Próxima etapa
31. PROIBIÇÕES
Não:
[ ] substituir style.css integralmente
[ ] remover CSS legado sem auditoria
[ ] alterar conteúdo cultural por estética
[ ] duplicar tokens
[ ] criar nomes paralelos sem necessidade
[ ] usar !important indiscriminadamente
[ ] remover acessibilidade
[ ] alterar dados oficiais durante migração visual
[ ] ativar temas sem teste
[ ] publicar mudanças estruturais sem validação
32. GOVERNANÇA
Toda alteração deverá respeitar:
assets/brand/governance.md

assets/brand/quality-checklist.md

assets/brand/tokens/README.md

assets/brand/tokens/index.json
Quando aplicável, registrar também em:
CHANGELOG.md
33. PRÓXIMA AÇÃO TÉCNICA
Após a criação deste mapa:
NÃO alterar imediatamente a Landing Page.
Primeiro executar auditoria do CSS existente.
Precisamos levantar:
1. variáveis CSS atuais
2. cores hardcoded
3. fontes
4. espaçamentos
5. shadows
6. radius
7. breakpoints
8. classes principais
9. IDs relevantes
10. !important
11. estilos inline
12. dependências JS/CSS
Resultado esperado:
LANDING PAGE
CSS AUDIT REPORT
34. PRÓXIMO ARTEFATO RECOMENDADO
apps/festanca-2026/docs/css-audit-report.md
Função:
style.css
   ↓
AUDITORIA AUTOMATIZADA + MANUAL
   ↓
css-audit-report.md
   ↓
brand-integration-map.md
   ↓
PLANO DE MIGRAÇÃO REAL
Este relatório será baseado no CSS que realmente existe.
Não em suposições.
35. REGRA DE OURO
A ARQUITETURA NÃO DEVE FORÇAR A INTERFACE.

A ARQUITETURA DEVE SERVIR À INTERFACE.

A INTERFACE NÃO DEVE REDEFINIR A CULTURA.

A TECNOLOGIA DEVE SERVIR À MEMÓRIA,
À TRADIÇÃO,
À ACESSIBILIDADE
E À EXPERIÊNCIA HUMANA.
36. STATUS GERAL
FESTANÇA 2026
OFFICIAL BRAND DESIGN SYSTEM

FOUNDATION
    [✓]

DESIGN TOKENS
    [✓]

TOKEN MANIFEST
    [✓]

EXECUTABLE CSS
    [✓]

THEME RUNTIME
    [✓]

TECHNICAL MANUAL
    [✓]

INTEGRATION BRIDGE
    [✓]

MIGRATION MAP
    [✓]

CSS AUDIT
    [ ] NEXT

LANDING PAGE PILOT
    [ ]

PROGRESSIVE MIGRATION
    [ ]

FULL VALIDATION
    [ ]

PRODUCTION CONSOLIDATION
    [ ]
37. CONCLUSÃO
O brand-integration-map.md transforma a integração da Landing Page em um processo:
CONTROLADO
DOCUMENTADO
REVERSÍVEL
AUDITÁVEL
PROGRESSIVO
ACESSÍVEL
CULTURALMENTE RESPONSÁVEL
A partir deste ponto, nenhuma migração precisa ser feita por tentativa e erro.
Cada mudança passa a possuir:
ORIGEM
  ↓
DESTINO
  ↓
RISCO
  ↓
PRIORIDADE
  ↓
TESTE
  ↓
STATUS
  ↓
VALIDAÇÃO
FESTANÇA 2026
Official Brand Design System
Brand Integration Map — v1.0.0
Ao encontro do futuro, com os pés firmes na tradição.

 
