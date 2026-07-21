# FESTANÇA 2026
## Official Brand Design System

# Component Migration Protocol

**Versão:** 1.0.0  
**Status:** OFFICIAL — OPERATIONAL PROTOCOL

---

## 1. PRINCÍPIO FUNDAMENTAL

Toda migração deverá obedecer à unidade mínima:

1 COMPONENTE
↓
1 PROPRIEDADE OU ALTERAÇÃO COERENTE
↓
1 EVIDÊNCIA BEFORE
↓
1 EQUIVALÊNCIA SEMÂNTICA COMPROVADA
↓
1 PATCH CONTROLADO
↓
1 VALIDAÇÃO
↓
1 EVIDÊNCIA AFTER
↓
1 DECISÃO
↓
1 COMMIT ATÔMICO

Princípio:

NÃO MIGRAR POR COINCIDÊNCIA NUMÉRICA.

NÃO MIGRAR POR APARÊNCIA.

NÃO MIGRAR PARA “LIMPAR O CSS”.

MIGRAR SOMENTE QUANDO EXISTIR
JUSTIFICATIVA TÉCNICA E SEMÂNTICA.

---

## 2. CICLO OFICIAL

DISCOVER
↓
FREEZE
↓
ANALYZE
↓
MAP
↓
AUTHORIZE
↓
PATCH
↓
DIFF
↓
VALIDATE
↓
EVIDENCE
↓
DECIDE
↓
COMMIT
↓
FREEZE RESULT
↓
NEXT PATCH

---

## 3. DISCOVER

Antes de migrar:

- confirmar componente real no HTML;
- confirmar seletor real no CSS;
- identificar pseudoestados;
- verificar media queries;
- verificar dependência JavaScript;
- verificar data attributes;
- identificar impacto cultural quando aplicável.

Nenhum seletor poderá ser inventado.

---

## 4. FREEZE BEFORE

Registrar:

- commit-base;
- working tree;
- arquivo;
- seletor;
- propriedade;
- valor atual;
- screenshots;
- viewport;
- estado visual.

Condição:

BEFORE = VERIFICÁVEL

---

## 5. ANALYZE

Responder:

- O valor é hardcoded?
- Já utiliza token?
- O valor possui função reutilizável?
- É específico deste componente?
- Existe dependência responsiva?
- Existe efeito em outros componentes?

---

## 6. MAP

Estrutura:

BEFORE
↓
SEMANTIC PURPOSE
↓
TOKEN CANDIDATE
↓
TOKEN VALUE
↓
EQUIVALENCE

Classificações:

EXACT
SEMANTIC EXACT
APPROXIMATE
NO MATCH
NEW TOKEN REQUIRED

---

## 7. REGRA DE EQUIVALÊNCIA

Equivalência numérica isolada não autoriza migração.

Exemplo:

1.5rem

pode representar:

gap
padding
margin
font-size
container padding

Portanto:

EQUIVALÊNCIA NUMÉRICA
+
EQUIVALÊNCIA SEMÂNTICA
=
CANDIDATO MIGRÁVEL

---

## 8. AUTHORIZE

Um patch somente poderá ser autorizado quando:

[ ] BEFORE confirmado
[ ] token confirmado
[ ] equivalência confirmada
[ ] risco conhecido
[ ] rollback disponível
[ ] escopo delimitado

---

## 9. PATCH

Regra:

MENOR ALTERAÇÃO CAPAZ
DE PRODUZIR A MIGRAÇÃO.

Preferência:

1 propriedade
1 componente
1 finalidade

Evitar mudanças paralelas.

---

## 10. DIFF GATE

Imediatamente após o patch:

git diff

Pergunta obrigatória:

O DIFF CONTÉM SOMENTE
A ALTERAÇÃO AUTORIZADA?

Se NÃO:

STOP

ROLLBACK OU CORREÇÃO

---

## 11. VALIDATE

Validar:

### Técnica

- sintaxe;
- token existente;
- referência correta;
- nenhum 404;
- nenhum erro novo;
- nenhum seletor quebrado.

### Visual

- BEFORE × AFTER;
- dimensão;
- espaçamento;
- cor;
- tipografia;
- alinhamento.

### Responsiva

- mobile;
- tablet;
- desktop.

### Acessibilidade

- contraste;
- foco;
- teclado;
- zoom;
- reduced motion.

### Funcional

O componente continua fazendo
exatamente o que fazia?

---

## 12. ZERO REGRESSION RULE

O patch deverá buscar:

ZERO REGRESSÃO FUNCIONAL

ZERO REGRESSÃO RESPONSIVA

ZERO REGRESSÃO DE ACESSIBILIDADE

ZERO ALTERAÇÃO VISUAL NÃO AUTORIZADA

---

## 13. EVIDENCE

Cada patch deverá possuir:

PATCH ID

COMPONENT ID

BEFORE

AFTER

DIFF

TOKEN

VALOR RESOLVIDO

TEST RESULT

COMMIT

DECISION

---

## 14. DECIDE

Estados possíveis:

APPROVED

APPROVED WITH DOCUMENTED DIFFERENCE

REJECTED

ROLLED BACK

Não existe:

“parece estar bom”.

---

## 15. COMMIT ATÔMICO

Somente após validação.

Princípio:

1 PATCH
=
1 COMMIT COERENTE

Mensagem recomendada:

refactor(festanca-brand): tokenize <component> <property> without visual regression

---

## 16. FREEZE RESULT

Depois do commit registrar:

- SHA;
- data;
- arquivos;
- evidência;
- finding;
- componente;
- token;
- resultado.

Esse estado passa a ser:

NEW BASELINE INCREMENTAL

---

## 17. NEXT PATCH

Somente após fechar o patch anterior.

Nunca:

PATCH #001
+
PATCH #002
+
PATCH #003

sem validar individualmente.

Fluxo:

PATCH #001
↓
VALIDATED
↓
COMMITTED
↓
PATCH #002

---

## 18. HARDCODE POLICY

Nem todo hardcode deverá virar token.

Manter hardcoded quando:

- é verdadeiramente local;
- não representa conceito reutilizável;
- tokenizá-lo aumentaria complexidade;
- não existe benefício arquitetural.

Tokenizar quando:

- representa conceito recorrente;
- possui semântica clara;
- integra tema;
- reduz inconsistência;
- melhora governança.

---

## 19. NEW TOKEN POLICY

Criar token apenas quando:

SEMÂNTICA EXISTE
+
REUTILIZAÇÃO É PLAUSÍVEL
+
TOKEN EXISTENTE NÃO SERVE

Nunca criar token apenas para:

“eliminar um número do CSS”.

---

## 20. APPROXIMATION POLICY

No ciclo de migração:

APPROXIMATE TOKEN
≠
AUTOMATIC MIGRATION

Se o valor muda:

isso passa a ser:

DESIGN CHANGE

e deverá ser tratado separadamente.

---

## 21. MIGRATION ≠ REDESIGN

MIGRATION:

preserva aparência
melhora arquitetura

REDESIGN:

altera aparência
evolui linguagem visual

Nunca misturar silenciosamente os dois processos.

---

## 22. ROLLBACK

Todo patch deverá possuir rollback antes da execução.

Preferência:

git revert <commit>

Antes do commit:

restauração isolada
da alteração do patch.

Nunca apagar trabalho não relacionado.

---

## 23. STOP CONDITIONS

Interromper imediatamente quando:

- surgir dependência desconhecida;
- o diff exceder o escopo;
- ocorrer regressão;
- token tiver semântica duvidosa;
- baseline estiver incompleta;
- rollback não estiver garantido.

STOP
não significa falha.

Significa:

GOVERNANÇA FUNCIONANDO.

---

## 24. REGISTRO PADRÃO DO PATCH

Patch ID:

Component:

Selector:

Property:

BEFORE:

Semantic Purpose:

Token:

Resolved Value:

Equivalence:

Risk:

Rollback:

Technical Validation:

Visual Validation:

Responsive Validation:

Accessibility Validation:

Decision:

Commit:

Status:

---

## 25. PRIMEIRO CASO DE REFERÊNCIA

Pilot:

MIG-PILOT-001

Component:

.schedule-card

Property:

gap

BEFORE:

1.5rem

AFTER:

var(--festanca-grid-gap-lg)

Resolved Token Value:

1.5rem

Equivalence:

NUMERIC EXACT
+
SEMANTIC GRID GAP

Migration Type:

PRESERVATIONAL TOKENIZATION

Expected Visual Difference:

ZERO

Esse caso torna-se:

REFERENCE IMPLEMENTATION #001

---

## 26. ESCALA FUTURA

O protocolo deverá funcionar em:

COMPONENT
↓
SECTION
↓
PAGE
↓
APPLICATION
↓
FUTURE FESTANÇA EDITIONS

Mas a unidade mínima permanece:

PATCH CONTROLADO

---

## 27. MÉTRICAS

Indicadores futuros:

- patches aprovados;
- patches revertidos;
- componentes migrados;
- hardcodes legitimamente reduzidos;
- tokens reutilizados;
- tokens novos;
- regressões;
- tempo médio de validação.

---

## 28. PRINCÍPIOS IMUTÁVEIS

PRESERVAR ANTES DE SUBSTITUIR.

COMPREENDER ANTES DE MIGRAR.

PROVAR ANTES DE APROVAR.

VALIDAR ANTES DE COMMITAR.

DOCUMENTAR ANTES DE AVANÇAR.

---

## 29. MANTRA OPERACIONAL

UM COMPONENTE.

UMA DECISÃO.

UMA ALTERAÇÃO CONTROLADA.

UMA PROVA.

UM COMMIT.

---

## 30. DECLARAÇÃO FINAL

O objetivo deste protocolo não é acelerar mudanças indiscriminadas.

É permitir que mudanças possam ser aceleradas no futuro sem perder:

SEGURANÇA

IDENTIDADE

MEMÓRIA

RASTREABILIDADE

REVERSIBILIDADE

Assim:

TRADIÇÃO PRESERVADA.

IDENTIDADE SISTEMATIZADA.

CÓDIGO RASTREÁVEL.

EVOLUÇÃO REVERSÍVEL.

---

FESTANÇA 2026
Official Brand Design System

Ao encontro do futuro,
com os pés firmes na tradição.
