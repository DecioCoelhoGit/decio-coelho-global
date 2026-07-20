# FESTANÇA 2026

## Official Brand Design System

# Component Pilot Plan

## Plano Oficial do Primeiro Componente Piloto de Migração

**Versão:** 1.0.0  
**Status:** OFFICIAL — PILOT READY  
**Projeto:** FESTANÇA 2026  
**Aplicação:** Landing Page Oficial  
**Local:** Vila Bela da Santíssima Trindade — Mato Grosso — Brasil  
**Documento:** `apps/festanca-2026/docs/component-pilot-plan.md`

> “Ao encontro do futuro, com os pés firmes na tradição.”

---

# 1. FINALIDADE

Este documento estabelece o plano técnico oficial para execução do primeiro componente piloto de migração da Landing Page da FESTANÇA 2026 para o:

```text
OFFICIAL BRAND DESIGN SYSTEM
O piloto constitui a primeira aplicação controlada da arquitetura desenvolvida nas etapas anteriores:
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
COMPONENT PILOT
↓
CONTROLLED MIGRATION
Seu objetivo principal não é redesenhar a Landing Page.
Seu objetivo é provar que um componente real existente pode ser:
identificado;
documentado;
congelado;
tokenizado;
validado;
comparado;
revertido;
aprovado;
sem necessidade de reescrever a aplicação.
2. PRINCÍPIO DO PILOTO
O primeiro piloto deverá obedecer ao princípio:
MIGRAR NÃO É REDESENHAR.
Nesta primeira etapa:
ANTES
Hardcodes + CSS legado funcional

DEPOIS
Design Tokens + CSS integrado

RESULTADO VISUAL
Equivalentemente preservado
A arquitetura interna poderá evoluir.
A aparência não deverá sofrer alteração visual intencional.
3. IDENTIFICAÇÃO DO PILOTO
Pilot ID:
MIG-PILOT-001
Componente selecionado:
Schedule Card
Classe principal confirmada:
.schedule-card
Categoria:
Card / Programação
Wave:
WAVE 1
Prioridade:
HIGH
Risco inicial:
LOW / CONTROLLED
Status:
READY FOR PILOT IMPLEMENTATION
4. JUSTIFICATIVA DA ESCOLHA
O componente .schedule-card foi selecionado porque reúne características ideais para o primeiro piloto.
Ele:
existe atualmente no index.html;
possui seletores CSS reais e identificáveis;
aparece de forma repetida na programação;
possui estrutura relativamente isolada;
utiliza propriedades visuais já parcialmente relacionadas aos tokens existentes;
permite comparação visual objetiva;
apresenta baixo acoplamento estrutural;
possui baixo risco operacional;
pode ser revertido facilmente;
representa um componente real da aplicação.
O piloto, portanto, permitirá validar o processo antes de componentes de maior criticidade.
5. EVIDÊNCIA DE EXISTÊNCIA
A inspeção do HTML confirmou múltiplas ocorrências reais de:
<article class="schedule-card">
O componente está presente na seção de programação da Landing Page.
Foram identificadas instâncias em diferentes pontos do documento.
Isso comprova que:
MIG-PILOT-001
não é um componente hipotético.
É um componente existente em produção.
6. SELETORES CONFIRMADOS
Durante a inspeção do arquivo:
apps/festanca-2026/css/style.css
foram identificados os seguintes seletores associados ao componente:
.schedule-card
.schedule-card:hover
.schedule-card time
.schedule-card h3
.schedule-card p
.schedule-category
Outros seletores relacionados poderão ser incorporados ao escopo somente após validação.
7. ESCOPO INICIAL
O piloto poderá atuar exclusivamente sobre propriedades relacionadas a:
background;
border;
border-radius;
box-shadow;
color;
font-family;
transition;
spacing;
hover;
foco visual;
desde que seja preservado o comportamento existente.
Não serão modificados inicialmente:
estrutura HTML;
conteúdo textual;
dados da programação;
JavaScript;
ordem dos elementos;
IDs;
data-*;
acessibilidade estrutural;
eventos;
carregamento de dados;
navegação;
lógica da aplicação.
8. ESTADO BEFORE
Antes da migração deverá existir um estado congelado denominado:
MIG-PILOT-001-BEFORE
O BEFORE deverá registrar:
commit atual;
arquivo HTML;
arquivo CSS;
seletores;
valores hardcoded;
tokens já utilizados;
screenshots;
viewport;
breakpoint;
estado normal;
estado hover;
estado focus, quando aplicável.
9. BASELINE DE REFERÊNCIA
O piloto depende oficialmente do documento:
apps/festanca-2026/docs/css-baseline.md
Baseline ID:
FESTANCA-2026-CSS-BASE
Nenhuma migração deverá ser considerada válida sem possibilidade de comparação com a baseline.
10. DOCUMENTOS DE REFERÊNCIA
O piloto utiliza como fontes oficiais:
apps/festanca-2026/docs/css-audit-report.md
apps/festanca-2026/docs/css-findings-register.md
apps/festanca-2026/docs/css-baseline.md
apps/festanca-2026/docs/css-migration-plan.md
apps/festanca-2026/docs/component-migration-matrix.md
apps/festanca-2026/docs/brand-integration-map.md
Além de:
assets/brand/tokens/index.json
assets/brand/tokens/colors.json
assets/brand/tokens/typography.json
assets/brand/tokens/spacing.json
assets/brand/tokens/radius.json
assets/brand/tokens/shadows.json
assets/brand/tokens/animations.json
assets/brand/tokens/icons.json
assets/brand/tokens/symbols.json
assets/brand/tokens/themes.json
assets/brand/tokens/tokens.css
assets/brand/tokens/theme-loader.js
11. CAMADA DE INTEGRAÇÃO
O piloto deverá respeitar a ordem arquitetural:
TOKENS JSON
↓
tokens.css
↓
brand-integration.css
↓
style.css
↓
COMPONENTE
A Landing Page não deverá consumir diretamente arquivos JSON em tempo de renderização para este piloto.
A camada executável primária será:
assets/brand/tokens/tokens.css
A ponte será:
apps/festanca-2026/css/brand-integration.css
12. ESTADO ATUAL DO COMPONENTE
O componente utiliza combinação de:
TOKENS EXISTENTES
+
VALORES HARDCODED
+
ESTILOS LEGADOS
Isso caracteriza um cenário adequado para migração incremental.
13. TOKENS JÁ IDENTIFICADOS
Entre os tokens disponíveis foram confirmados:
--color-background
--color-background-deep
--color-background-soft

--color-surface
--color-surface-light

--color-primary
--color-primary-dark

--color-secondary
--color-secondary-dark

--color-accent
--color-accent-dark

--color-text
--color-text-soft
--color-text-muted

--color-border
--color-border-strong

--radius-medium

--transition-fast
--transition-medium

--font-display
Outros poderão ser utilizados mediante correspondência comprovada.
14. HARDCODES IDENTIFICADOS
Durante a inspeção foram encontrados valores relevantes associados ao contexto do componente, incluindo:
rgba(15, 184, 215, 0.09)
rgba(255, 255, 255, 0.025)
rgba(15, 184, 215, 0.5)
#061018
rgba(255, 210, 31, 0.5)
rgba(255, 210, 31, 0.07)
Esses valores deverão ser analisados individualmente.
Nenhuma substituição automática será permitida apenas por semelhança visual.
15. PRINCÍPIO DE EQUIVALÊNCIA
A migração deverá diferenciar:
VALOR EXATO
de:
VALOR APROXIMADO
Exemplo:
rgba(255, 210, 31, 0.5)
não deverá ser automaticamente substituído por:
var(--color-border-strong)
se o token resolver para:
rgba(255, 210, 31, 0.56)
pois existe diferença visual potencial.
16. REGRA DE PRESERVAÇÃO
Quando não existir token semanticamente adequado com valor equivalente, deverá ser adotado:
NOVO TOKEN SEMÂNTICO
em vez de alterar o design silenciosamente.
Princípio:
TOKENIZAR PRIMEIRO.
HARMONIZAR DEPOIS.
17. ESTRATÉGIA DE MIGRAÇÃO
Estratégia oficial:
TOKENIZAÇÃO PRESERVACIONAL
Isso significa:
identificar valor original;
determinar função semântica;
localizar token exato;
reutilizar token somente quando seguro;
criar token semântico quando necessário;
preservar aparência;
validar;
comparar;
documentar.
18. MAPA PRELIMINAR HARDCODE → TOKEN
Valor atual
Função provável
Destino
rgba(15,184,215,0.09)
superfície cyan sutil
token semântico específico
rgba(255,255,255,0.025)
superfície translúcida
token semântico específico
rgba(15,184,215,0.5)
borda secundária
token semântico específico
#061018
fundo profundo do card
validar equivalência
rgba(255,210,31,0.5)
borda dourada
validar equivalência
rgba(255,210,31,0.07)
superfície dourada sutil
token semântico específico
Este mapa ainda não autoriza substituição.
Ele orienta a implementação.
19. TOKENS CANDIDATOS
Tokens existentes candidatos:
--color-background-deep
--color-background-soft
--color-surface
--color-surface-light
--color-secondary
--color-border
--color-border-strong
--color-primary
--color-text
--color-text-soft
--radius-medium
--transition-fast
--font-display
Uso final dependerá de validação.
20. NOVOS TOKENS POSSÍVEIS
Caso necessário, poderão ser criados tokens semânticos como:
--schedule-card-background
--schedule-card-border
--schedule-card-hover-background
--schedule-card-hover-border
--schedule-card-category-background
--schedule-card-category-border
Ou tokens globais semanticamente reutilizáveis:
--color-surface-cyan-subtle
--color-border-cyan-medium
--color-surface-gold-subtle
--color-border-gold-medium
A decisão deverá evitar tokens excessivamente específicos sem necessidade.
21. REGRA DE NOMENCLATURA
Preferência:
TOKEN SEMÂNTICO
sobre:
TOKEN BASEADO NO VALOR
Correto:
--color-surface-gold-subtle
Evitar:
--gold-007
O nome deverá representar intenção.
22. NÃO ALTERAR DIRETAMENTE TOKENS-FONTE
Durante o piloto:
NÃO ALTERAR
valores existentes nos arquivos JSON apenas para fazer o componente “encaixar”.
Os tokens-fonte são patrimônio arquitetural do sistema.
Se um novo token for necessário:
registrar justificativa;
criar no JSON correto;
atualizar tokens.css;
atualizar index.json, quando aplicável;
documentar;
registrar no CHANGELOG.
23. ORDEM DE EXECUÇÃO
A execução deverá ocorrer nesta ordem:
1. FREEZE BEFORE
2. CONFIRM SELECTORS
3. MAP VALUES
4. MAP TOKENS
5. IDENTIFY GAPS
6. CREATE TOKENS IF REQUIRED
7. APPLY MINIMAL PATCH
8. VALIDATE CSS
9. TEST MOBILE
10. TEST DESKTOP
11. TEST ACCESSIBILITY
12. COMPARE BEFORE × AFTER
13. RECORD EVIDENCE
14. APPROVE OR ROLLBACK
24. PATCH MÁXIMO
O primeiro patch deverá ser pequeno.
Princípio:
ONE COMPONENT
ONE CONTROLLED PATCH
ONE VALIDATION CYCLE
Não incluir no mesmo commit:
header;
hero;
gallery;
footer;
forms;
outros cards;
navegação;
JavaScript não relacionado.
25. PATCH #001
Identificador recomendado:
MIG-PILOT-001-PATCH-001
Objetivo:
Migrar propriedades visuais selecionadas do .schedule-card
para tokens oficiais sem alteração visual intencional.
26. CRITÉRIO ZERO
Critério fundamental:
ZERO ALTERAÇÃO VISUAL INTENCIONAL
Diferenças não intencionais deverão ser tratadas como possível regressão.
27. CRITÉRIOS VISUAIS
Deverão permanecer preservados:
cor de fundo;
borda;
raio;
sombras;
contraste;
tipografia;
hierarquia;
espaçamento;
hover;
estado de foco;
alinhamento;
quebra de texto;
dimensão percebida.
28. CRITÉRIOS FUNCIONAIS
O componente deverá continuar:
renderizando corretamente;
exibindo conteúdo;
respeitando links;
mantendo comportamento de hover;
mantendo foco;
respondendo aos breakpoints;
funcionando sem JavaScript adicional.
29. RESPONSIVIDADE
Testar minimamente:
MOBILE
TABLET
DESKTOP
Breakpoints reais deverão ser obtidos do CSS atual.
Não inventar novos breakpoints durante o piloto.
30. MOBILE FIRST
A validação deverá começar no mobile.
Prioridade:
1. MOBILE
2. TABLET
3. DESKTOP
Motivo:
A Landing Page é fortemente consumida por dispositivos móveis e compartilhamentos via WhatsApp.
31. OVERFLOW
Validar ausência de:
horizontal scroll
text overflow
card overflow
layout shift
content clipping
32. ACESSIBILIDADE
Verificar:
contraste;
leitura;
foco visível;
tamanho mínimo de interação;
zoom;
prefers-reduced-motion;
legibilidade do texto;
comportamento com fonte ampliada.
33. PREFERS-REDUCED-MOTION
Qualquer animação ou transição aplicada deverá respeitar:
@media (prefers-reduced-motion: reduce)
O piloto não poderá introduzir dependência obrigatória de animação.
34. TEMAS
O componente deverá ser testado ao menos nos temas aplicáveis:
dark
light
heritage
ceremonial
high-contrast
holographic
Quando algum tema não for adequado ou ainda não estiver ativo na Landing Page, registrar:
NOT APPLICABLE
Não simular aprovação.
35. THEME LOADER
A migração não deverá quebrar:
assets/brand/tokens/theme-loader.js
Nem interferir no atributo:
data-theme
36. DEPENDÊNCIAS JAVASCRIPT
A inspeção inicial não identificou dependência JavaScript direta exclusiva necessária ao estilo base de .schedule-card.
Caso seja identificada posteriormente:
STOP
↓
REGISTER
↓
ASSESS
↓
CONTINUE
37. DATA ATTRIBUTES
Os data-* existentes não deverão ser removidos ou alterados durante o piloto.
Qualquer atributo dinâmico deverá permanecer compatível.
38. EVIDÊNCIAS
Devem ser registradas evidências:
BEFORE
AFTER
DIFF
TEST
COMMIT
Preferencialmente:
mobile normal
mobile hover/focus quando aplicável
desktop normal
high contrast
39. SCREENSHOTS
Os screenshots deverão possuir identificação clara.
Exemplo:
mig-pilot-001-before-mobile.png
mig-pilot-001-after-mobile.png

mig-pilot-001-before-desktop.png
mig-pilot-001-after-desktop.png
Caso ainda não exista pasta oficial, ela deverá ser definida antes de adicionar os arquivos.
40. COMPARAÇÃO
A análise deverá responder:
A estrutura mudou?
A aparência mudou?
A responsividade mudou?
O contraste mudou?
O comportamento mudou?
O componente ficou dependente de algo novo?
Existe regressão?
Existe melhoria mensurável?
41. DEFINIÇÃO DE SUCESSO
O piloto será aprovado quando:
VISUAL EQUIVALENT
FUNCTIONAL PASS
RESPONSIVE PASS
ACCESSIBILITY PASS
TOKENIZATION PASS
ROLLBACK READY
DOCUMENTATION COMPLETE
42. TOLERÂNCIA VISUAL
A tolerância ideal para o primeiro piloto é:
SEM DIFERENÇA PERCEPTÍVEL
Diferenças tecnicamente inevitáveis deverão ser:
identificadas;
justificadas;
registradas;
aprovadas.
43. REGRESSÃO
Considera-se regressão:
perda de contraste;
alteração não planejada de cor;
mudança de dimensão;
overflow;
quebra de layout;
alteração de tipografia;
hover inconsistente;
foco invisível;
perda de responsividade;
erro em tema;
erro de carregamento.
44. ROLLBACK
Rollback deverá ser possível por Git.
Antes do patch:
git status
git log -1 --oneline
Registrar commit-base.
Se houver regressão:
STOP
↓
REVERT
↓
RESTORE
↓
DOCUMENT FINDING
Nenhuma correção improvisada deverá mascarar falha do piloto.
45. BRANCHING
A estratégia atual poderá continuar em main somente quando o processo estiver sob controle e o usuário estiver conscientemente realizando alterações diretas.
Arquiteturalmente, para futuras ondas maiores, recomenda-se considerar:
feature/festanca-brand-migration
ou branches por wave.
O piloto não deverá introduzir complexidade desnecessária.
46. COMMIT RECOMENDADO
Após conclusão e validação:
feat(festanca-brand): migrate schedule-card pilot to design tokens
Ou:
refactor(festanca-brand): tokenize schedule-card without visual regression
47. FINDINGS RELACIONADOS
O piloto deverá ser vinculado aos findings relevantes registrados em:
css-findings-register.md
Nenhum ID deverá ser inventado.
Somente findings reais deverão ser associados.
48. MATRIZ DE COMPONENTES
Registro correspondente:
component-migration-matrix.md
O status do componente deverá evoluir aproximadamente assim:
IDENTIFIED
↓
ANALYZED
↓
PILOT READY
↓
IN MIGRATION
↓
VALIDATING
↓
APPROVED
49. STATUS INICIAL
Pilot ID:
MIG-PILOT-001

Component:
schedule-card

HTML:
CONFIRMED

CSS:
CONFIRMED

Selectors:
CONFIRMED

Token Infrastructure:
AVAILABLE

Token Gap Analysis:
COMPLETED — PRELIMINARY

Baseline:
AVAILABLE

Rollback:
AVAILABLE

Patch:
NOT STARTED

Validation:
NOT STARTED

Production Approval:
NOT GRANTED
50. GATE DE ENTRADA
Antes da primeira alteração:
[ ] Working tree verificada
[ ] Commit-base registrado
[ ] Baseline confirmada
[ ] Seletores confirmados
[ ] Valores atuais registrados
[ ] Tokens candidatos registrados
[ ] Gaps identificados
[ ] Estratégia de rollback confirmada
Somente então:
PILOT IMPLEMENTATION = AUTHORIZED
51. GATE DE SAÍDA
Após a alteração:
[ ] CSS válido
[ ] HTML preservado
[ ] JS preservado
[ ] Mobile aprovado
[ ] Desktop aprovado
[ ] Responsividade aprovada
[ ] Contraste aprovado
[ ] Foco aprovado
[ ] Reduced Motion preservado
[ ] Themes verificados
[ ] No overflow
[ ] No regression
[ ] Screenshots registrados
[ ] Before × After comparados
[ ] Findings atualizados
[ ] Matrix atualizada
[ ] CHANGELOG atualizado
Somente então:
MIG-PILOT-001 = APPROVED
52. O QUE NÃO FAZER
Durante o piloto:
NÃO reescrever o componente.

NÃO alterar sua estrutura HTML sem necessidade.

NÃO trocar cores apenas para harmonizar.

NÃO remover estilos legados prematuramente.

NÃO migrar vários componentes simultaneamente.

NÃO apagar fallback antes da validação.

NÃO alterar tokens globais para corrigir um único card.

NÃO adicionar JavaScript sem necessidade.

NÃO confundir tokenização com redesign.
53. ESTRATÉGIA DE FALLBACK
Enquanto necessário:
property: fallback;
property: var(--token);
ou estratégia equivalente compatível poderá ser considerada.
A aplicação deverá permanecer funcional mesmo durante a transição.
54. DEPRECATION
Somente após aprovação:
legacy declaration
↓
deprecated
↓
observed
↓
removed in controlled wave
Nenhum CSS legado será removido apenas porque existe token equivalente.
55. RESULTADO ESPERADO
O primeiro piloto deverá demonstrar:
ANTES

.schedule-card
hardcodes
legacy values
isolated decisions

↓

DEPOIS

.schedule-card
semantic tokens
documented architecture
theme compatibility
traceable decisions
Sem perda visual.
56. VALOR ARQUITETURAL
O sucesso do piloto provará que o sistema pode migrar:
COMPONENTE POR COMPONENTE
em vez de:
REESCREVER TODA A LANDING PAGE
Isso reduz:
risco;
regressões;
retrabalho;
interrupções;
perda histórica;
inconsistências.
57. MODELO PARA PRÓXIMOS PILOTOS
Após aprovação do MIG-PILOT-001, este documento poderá servir como modelo para:
MIG-PILOT-002
MIG-PILOT-003
...
Cada novo piloto deverá possuir:
componente real;
baseline;
escopo;
evidência;
token map;
validação;
rollback;
aprovação.
58. PRIMEIRO MARCO HISTÓRICO
Este piloto representa o primeiro momento em que o:
FESTANÇA 2026
OFFICIAL BRAND DESIGN SYSTEM
deixa de existir apenas como arquitetura documental e passa a operar sobre um componente real da Landing Page.
Ele marca a transição:
DOCUMENTAÇÃO
↓
ARQUITETURA
↓
EXECUÇÃO
59. SEQUÊNCIA OFICIAL
BRAND ARCHITECTURE
        ↓
DESIGN TOKENS
        ↓
TOKENS.CSS
        ↓
THEME LOADER
        ↓
BRAND INTEGRATION
        ↓
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
COMPONENT PILOT
        ↓
PATCH #001
        ↓
BEFORE × AFTER
        ↓
APPROVAL
        ↓
CONTROLLED MIGRATION
60. PRÓXIMO ATO TÉCNICO
Após a consolidação deste documento:
NÃO ALTERAR AINDA EM MASSA O STYLE.CSS.
O próximo ato deverá ser:
MIG-PILOT-001
FREEZE FINAL
+
PATCH SPECIFICATION
Definindo exatamente:
SELETOR
PROPRIEDADE
VALOR BEFORE
TOKEN AFTER
ARQUIVO
LINHA/CONTEXTO
RISCO
ROLLBACK
CRITÉRIO DE VALIDAÇÃO
Somente depois disso deverá ocorrer a primeira alteração controlada.
61. PRÓXIMO ARTEFATO RECOMENDADO
apps/festanca-2026/docs/component-pilot-patch-001.md
Função:
Especificação Técnica Executável
do Primeiro Patch Real
do Brand Design System.
Ele será a ponte entre:
PLANEJAMENTO
e:
ALTERAÇÃO REAL DO CÓDIGO
62. PRINCÍPIO FINAL
ANTES DE MIGRAR,
IDENTIFICAMOS.

ANTES DE ALTERAR,
CONGELAMOS.

ANTES DE SUBSTITUIR,
COMPARAMOS.

ANTES DE APROVAR,
TESTAMOS.

ANTES DE REMOVER,
PRESERVAMOS.
O primeiro piloto não existe para provar que conseguimos mudar a Landing Page.
Ele existe para provar que conseguimos:
EVOLUIR
SEM PERDER CONTROLE.
63. STATUS DO DOCUMENTO
Documento:
apps/festanca-2026/docs/component-pilot-plan.md
Versão:
1.0.0
Status:
OFFICIAL — PILOT READY
Pilot ID:
MIG-PILOT-001
Componente:
schedule-card
Estado:
READY FOR FINAL FREEZE
64. PRÓXIMO MARCO
MIG-PILOT-001
        ↓
FINAL FREEZE
        ↓
component-pilot-patch-001.md
        ↓
PATCH #001
        ↓
VALIDAÇÃO
        ↓
BEFORE × AFTER
        ↓
DECISÃO
FESTANÇA 2026
Official Brand Design System
Ao encontro do futuro, com os pés firmes na tradição. 🙏🌍🚀
