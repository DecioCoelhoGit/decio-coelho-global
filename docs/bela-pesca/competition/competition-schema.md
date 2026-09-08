# BELA PESCA DIGITAL — Contrato Canônico do Domínio COMPETITION

**Código:** BP-F1-P4  
**Domínio:** COMPETITION  
**Status:** Documento Estrutural Inicial  
**Projeto-piloto:** Bela Pesca 2026  
**Escopo:** Edições 2026-N

---

## 1. Finalidade

Este documento define o contrato canônico do domínio COMPETITION da Bela Pesca Digital.

Sua função é estabelecer a estrutura mínima, permanente e versionável necessária para representar competições, participantes, equipes, embarcações, capturas, medições, pontuação, penalidades, classificação, ranking, homologação, resultados e recordes.

---

## 2. Princípio estrutural

COMPETITION é domínio específico da Bela Pesca Digital.

O domínio deverá permanecer desacoplado de:

- CORE;
- EDITION;
- REGISTRATION;
- ARCHIVE;
- TOURISM;
- BUSINESS;
- EXPERIENCE.

Relacionamentos entre domínios deverão ocorrer exclusivamente por contratos conhecidos, identificadores estáveis e referências explícitas.

---

## 3. Princípio de governança competitiva

O sistema poderá calcular resultados intermediários.

Nenhum cálculo automático deverá adquirir, por si só, condição de resultado oficial.

Fluxo canônico:

DRAFT
|
RECEIVED
|
VALIDATED
|
PROVISIONAL
|
HOMOLOGATED
|
OFFICIAL
|
ARCHIVED

Princípio:

> O SISTEMA CALCULA.
> A GOVERNANÇA HOMOLOGA.

---

## 4. Estrutura mínima do domínio

O domínio COMPETITION deverá contemplar, no mínimo:

1. modalidades;
2. categorias;
3. equipes;
4. participantes;
5. embarcações, quando aplicável;
6. capturas;
7. medições;
8. pontuação;
9. penalidades;
10. classificação;
11. rankings;
12. homologação;
13. resultados;
14. recordes;
15. proveniência;
16. auditoria.

---

## 5. Estrutura canônica

Estrutura conceitual:

competition/
├── modalities/
├── categories/
├── teams/
├── participants/
├── boats/
├── catches/
├── scoring/
├── penalties/
├── rankings/
├── results/
└── homologation/

---

## 6. Invariantes

Toda entidade competitiva deverá possuir identificador estável.

Toda informação competitiva oficial deverá possuir origem rastreável.

Resultados calculados e resultados oficialmente publicados deverão permanecer semanticamente distintos.

Regras de pontuação deverão ser versionáveis por modalidade.

Nenhuma modalidade deverá assumir fórmula universal de pontuação.

Resultados oficiais somente poderão existir após fluxo explícito de validação e homologação.

Evidências originais não deverão ser alteradas para adequação ao modelo de dados.

Nenhuma evolução futura do schema deverá reescrever silenciosamente o significado histórico de competição encerrada.

Uma competição arquivada deverá permanecer reproduzível e auditável.

---

## 7. Proveniência

Dados relevantes deverão possuir origem identificável.

Exemplo conceitual:

source: {
  type: "official",
  status: "validated",
  receivedAt: "...",
  documentId: "..."
}

Informações ainda não oficializadas poderão utilizar:

status: "pending-validation"

---

## 8. Relação com EDITION

Toda competição deverá estar vinculada a uma edição por identificador estável.

Exemplo:

editionId: "edition-16"

COMPETITION não deverá duplicar metadados pertencentes ao contrato raiz da edição.

EDITION identifica a edição.

COMPETITION representa a verdade competitiva daquela edição.

---

## 9. Relação com REGISTRATION

REGISTRATION será responsável pelos processos de inscrição.

COMPETITION será responsável pela participação efetiva na competição.

A transição deverá ocorrer por referência explícita entre:

registrationId
participantId
teamId
competitionEntryId

REGISTRATION e COMPETITION deverão permanecer desacoplados.

---

## 10. Scoring

O motor de pontuação deverá permanecer separado da homologação.

Fluxo canônico:

INPUT
|
SCORING ENGINE
|
CALCULATED RESULT
|
VALIDATION
|
HOMOLOGATION
|
OFFICIAL RESULT

Regras de pontuação deverão possuir identificadores e versões estáveis.

Exemplo:

scoringRuleId
regulationId
modalityId
version

---

## 11. Resultados

Resultados deverão possuir estados explícitos.

Estados mínimos:

- draft;
- received;
- validated;
- provisional;
- homologated;
- official;
- archived.

Nenhum resultado calculado deverá ser publicado como oficial sem homologação.

---

## 12. Próxima etapa

A próxima etapa deste contrato definirá os campos canônicos, tipos, obrigatoriedade, relacionamentos, estados e regras de validação dos subdomínios COMPETITION.

---

> O EVENTO PASSA.
> A EDIÇÃO É PRESERVADA.
> O DADO PERMANECE.
> O NÚCLEO EVOLUI.

**UM COMANDO. UM RESULTADO. UMA DECISÃO POR VEZ.**
