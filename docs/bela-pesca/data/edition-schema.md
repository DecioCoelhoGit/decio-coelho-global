# BELA PESCA DIGITAL — Contrato Canônico da Edição

**Código:** BP-F1-P3
**Domínio:** DATA / EDITION
**Status:** Documento Estrutural Inicial
**Projeto-piloto:** Bela Pesca 2026
**Escopo:** Edições 2026–N

---

## 1. Finalidade

Este documento define o contrato canônico de dados de uma edição da
Bela Pesca Digital.

Sua função é estabelecer a estrutura mínima, permanente e versionável
necessária para representar qualquer edição anual sem reconstruir a
plataforma.

---

## 2. Princípio estrutural

A plataforma deverá distinguir permanentemente:

- PLATFORM — capacidades permanentes;
- EDITION — contexto de uma edição anual;
- COMPETITION — regras e operações competitivas;
- DATA — contratos e dados estruturados;
- EVIDENCE — fontes, mídia e proveniência;
- ARCHIVE — preservação das edições encerradas.

EVIDENCE não constitui, por si só, DATA oficial.

Cálculo não constitui, por si só, resultado oficial.

Resultado somente adquire condição oficial após o fluxo de validação,
aprovação e publicação definido pela governança da edição.

---

## 3. Regra de evolução

Uma nova edição deverá ser criada prioritariamente por dados e
configuração, e não por duplicação ou reconstrução do núcleo da
plataforma.

O contrato deverá admitir evolução versionada sem destruir a
legibilidade histórica das edições anteriores.

---

## 4. Domínios mínimos da edição

O schema definitivo deverá representar, no mínimo:

1. identidade da edição;
2. ciclo e status;
3. datas;
4. organização;
5. programação;
6. modalidades;
7. inscrições;
8. locais;
9. competição;
10. resultados;
11. premiação;
12. mídia e evidências;
13. proveniência;
14. publicação;
15. encerramento;
16. arquivamento.

---

## 5. Invariantes

Toda edição deverá possuir identificador único.

Toda informação oficial deverá possuir origem rastreável.

Resultados calculados e resultados oficialmente publicados deverão
permanecer semanticamente distintos.

Evidências originais não deverão ser alteradas para adequação ao modelo
de dados.

Uma edição encerrada deverá permanecer reproduzível e auditável.

Nenhuma evolução futura do schema deverá reescrever silenciosamente o
significado histórico de uma edição arquivada.

---

## 6. Próxima etapa

A próxima etapa deste contrato definirá os campos canônicos, tipos,
obrigatoriedade, relacionamentos, estados e regras de validação de cada
domínio.

---

> O EVENTO PASSA.
> A EDIÇÃO É PRESERVADA.
> O DADO PERMANECE.
> O NÚCLEO EVOLUI.

**UM COMANDO. UM RESULTADO. UMA DECISÃO POR VEZ.**

---

## 7. Arquivos canônicos da edição

Cada edição poderá ser representada pelo seguinte conjunto de contratos:

### 7.1 `edition.json`

Contrato raiz da edição.

Responsável por representar:

- identificador estável da edição;
- número da edição;
- nome oficial;
- ano;
- ciclo;
- status;
- datas gerais;
- versão do schema;
- referências para os demais contratos;
- metadados de publicação e arquivamento.

### 7.2 `program.json`

Contrato da programação oficial da edição.

Responsável por representar:

- datas;
- horários;
- atividades;
- categorias de atividade;
- locais;
- ordem programada;
- alterações oficialmente aprovadas.

### 7.3 `locations.json`

Contrato dos locais oficiais utilizados pela edição.

Responsável por representar:

- identificadores de local;
- nomes oficiais;
- tipos;
- endereços ou referências territoriais;
- coordenadas quando disponíveis;
- vínculos com programação e competição.

### 7.4 `modalities.json`

Contrato das modalidades e categorias competitivas.

Responsável por representar:

- modalidades;
- categorias;
- faixas ou classes;
- regras específicas;
- critérios de participação;
- vínculo com regulamentos;
- status operacional.

### 7.5 `registrations.json`

Contrato dos registros de inscrição.

Responsável por representar:

- participantes;
- equipes;
- inscrições;
- situação da inscrição;
- modalidade;
- categoria;
- raia, número ou identificador competitivo;
- datas de submissão e validação.

### 7.6 `regulations.json`

Contrato dos regulamentos aplicáveis.

Responsável por representar:

- regulamentos;
- versões;
- vigência;
- escopo;
- modalidade associada;
- critérios;
- referências documentais oficiais.

### 7.7 `partners.json`

Contrato das organizações, parceiros, patrocinadores e apoiadores.

Responsável por representar:

- entidade;
- categoria de participação;
- papel;
- período;
- nível de associação;
- referências institucionais.

### 7.8 `media.json`

Contrato do acervo de mídia relacionado à edição.

Responsável por representar:

- identificador da mídia;
- tipo;
- origem;
- autoria ou proveniência quando conhecida;
- data;
- vínculo com evento, competição ou premiação;
- referência à evidência preservada;
- hash quando aplicável;
- status de validação e publicação.

### 7.9 `notices.json`

Contrato dos comunicados e avisos oficiais da edição.

Responsável por representar:

- comunicados;
- correções;
- alterações;
- notas;
- avisos operacionais;
- data de publicação;
- autoridade responsável;
- versão e histórico.

---

A ausência de um desses arquivos em determinada edição não invalida a edição,
desde que o contrato raiz declare explicitamente quais domínios estão ativos.

Nenhum desses arquivos deverá carregar responsabilidade pertencente a outro
domínio quando houver contrato canônico específico para essa finalidade.
