# Modelo Constitucional de Dados Mestres e Dados de Referência do Portal Permanente da FESTANÇA

> Constituição destinada a regulamentar a identificação, a criação, a classificação, a padronização, a validação, a utilização, a sincronização, o versionamento, a alteração, a desativação, a auditoria e a preservação histórica dos dados mestres e dos dados de referência utilizados pelo Portal Permanente da FESTANÇA de Vila Bela da Santíssima Trindade — Mato Grosso — Brasil.

---

## Denominação oficial
**Modelo Constitucional de Dados Mestres e Dados de Referência do Portal Permanente da FESTANÇA**

## 1. Identificação do documento

| Campo | Conteúdo |
|---|---|
| Documento | Modelo Constitucional de Dados Mestres e Dados de Referência do Portal Permanente da FESTANÇA |
| Caminho oficial | `docs/festanca/data/master-data-and-reference-data-model.md` |
| Classificação | Documento constitucional de dados |
| Domínio | Dados mestres, dados de referência, vocabulários e listas institucionais |
| Regime | Permanente |
| Criticidade | Máxima |
| Mutabilidade | Estritamente controlada |
| Preservação | Integral, auditável, versionada e recuperável |
| Edição fundadora | FESTANÇA 2026 |
| Situação | Constituição de dados mestres e dados de referência |
| Versão inicial | `1.0.0` |
| Aplicabilidade | Portal Permanente e edições anuais |
| Vigência | Permanente |
| Documento superior | `docs/festanca/data/data-architecture.md` |
| Modelo classificatório | `docs/festanca/data/data-classification-model.md` |
| Modelo relacional | `docs/festanca/data/entity-relationship-model.md` |
| Modelo de identificação | `docs/festanca/data/identifiers-and-references.md` |
| Regras de validação | `docs/festanca/data/data-validation-rules.md` |
| Modelo de qualidade | `docs/festanca/data/data-quality-model.md` |
| Modelo de ciclo de vida | `docs/festanca/data/data-lifecycle-and-retention.md` |
| Modelo de migração | `docs/festanca/data/data-migration-and-conversion-model.md` |
| Modelo de acesso | `docs/festanca/data/data-access-and-sharing-model.md` |
| Modelo de linhagem | `docs/festanca/data/data-lineage-and-provenance-model.md` |

---

## 2. Finalidade

Este documento estabelece o regime constitucional dos dados mestres e dos dados de referência utilizados pelo Portal Permanente da FESTANÇA.

Sua finalidade é assegurar que as entidades, os códigos, os nomes, as categorias, os estados, os domínios, as listas, as hierarquias e os vocabulários institucionais sejam:

- identificáveis;
- legítimos;
- padronizados;
- únicos;
- consistentes;
- contextualizados;
- versionados;
- interoperáveis;
- rastreáveis;
- auditáveis;
- reutilizáveis;
- historicamente preservados;
- compatíveis com as edições anuais;
- subordinados à proteção da edição fundadora.

Nenhuma lista, denominação, categoria ou código deverá adquirir caráter oficial apenas por repetição técnica ou uso informal.

---

## 3. Objetivos estratégicos

São objetivos permanentes deste Modelo:

1. definir as entidades mestres do Portal;

2. regulamentar os dados de referência;

3. estabelecer vocabulários controlados;

4. preservar listas oficiais;

5. padronizar códigos institucionais;

6. definir nomes canônicos;

7. preservar aliases e grafias históricas;

8. regulamentar hierarquias;

9. definir domínios permitidos;

10. identificar responsáveis pelos dados mestres;

11. controlar criação, alteração e desativação;

12. assegurar sincronização entre sistemas;

13. resolver duplicidades;

14. preservar integridade entre edições;

15. controlar versões;

16. permitir auditoria;

17. preservar o histórico institucional;

18. proteger integralmente os dados mestres da edição fundadora.

---

## 4. Princípios fundamentais

Toda gestão de dados mestres e de referência deverá observar:

- unicidade;
- autoridade;
- legitimidade;
- estabilidade;
- consistência;
- clareza semântica;
- padronização;
- interoperabilidade;
- rastreabilidade;
- versionamento;
- temporalidade;
- preservação;
- responsabilidade;
- auditabilidade;
- soberania cultural;
- continuidade institucional.

---

## 5. Conceito de dado mestre

Dado mestre é o registro institucional estável que representa entidade central reutilizada por múltiplos processos, documentos, sistemas ou edições.

Exemplos:

- pessoa;
- grupo tradicional;
- local;
- organização;
- parceiro;
- documento institucional;
- ativo;
- função permanente;
- canal oficial;
- unidade organizacional.

---

## 6. Conceito de dado de referência

Dado de referência é o conjunto controlado de valores utilizado para classificar, validar ou interpretar outros dados.

Exemplos:

- tipos de atividade;
- estados de publicação;
- níveis de acesso;
- níveis de criticidade;
- categorias documentais;
- tipos de fonte;
- tipos de local;
- formatos;
- idiomas;
- estados de validação.

---

## 7. Diferença entre dados mestres e dados anuais

Dados mestres representam entidades estáveis.

Dados anuais representam vínculos, fatos, funções ou ocorrências específicas de uma edição.

Exemplo:

```text
PESSOA
→ dado mestre permanente

PESSOA COMO IMPERATRIZ EM 2026
→ vínculo anual da edição fundadora
```

---

## 8. Diferença entre dado de referência e conteúdo livre

Dados de referência pertencem a domínios controlados.

Conteúdos livres admitem redação contextual.

Exemplo:

```text
activityType: "rehearsal"
```

é dado de referência.

```text
description: "Ensaio comunitário realizado na residência do festeiro."
```

é conteúdo contextual.

---

## 9. Regra de separação constitucional

Nenhuma entidade permanente deverá ser duplicada em cada edição quando puder ser representada por vínculo anual.

Nenhum fato anual deverá ser incorporado indevidamente ao cadastro mestre permanente.

---

## 10. Escopo

Este Modelo aplica-se a:

- pessoas;
- famílias;
- grupos tradicionais;
- organizações;
- parceiros;
- patrocinadores;
- apoiadores;
- fornecedores;
- locais;
- espaços públicos;
- residências privadas;
- igrejas;
- centros religiosos;
- atividades;
- funções;
- documentos;
- mídias;
- fontes;
- canais;
- sistemas;
- integrações;
- categorias;
- estados;
- níveis;
- classificações;
- códigos;
- listas;
- vocabulários;
- domínios;
- hierarquias;
- aliases;
- registros legados.

---

## 11. Entidades mestres oficiais

Poderão ser reconhecidas como entidades mestres:

```text
Person
Family
TraditionalGroup
Organization
Partner
Sponsor
Supporter
Supplier
Location
Venue
Document
MediaAsset
Source
InstitutionalRole
OfficialChannel
System
Integration
Vocabulary
ReferenceDomain
```

---

## 12. Entidades anuais

Poderão ser representadas como entidades ou vínculos anuais:

```text
Edition
EditionRoleAssignment
EditionParticipant
EditionActivity
EditionSchedule
EditionLocationUsage
EditionAuthorization
EditionPublication
EditionPartnership
```

---

## 13. Pessoa como entidade mestre

A entidade `Person` deverá representar a identidade institucional da pessoa.

Ela não deverá conter como atributo permanente uma função válida apenas em determinada edição.

---

## 14. Atribuição anual de função

Funções anuais deverão utilizar estrutura semelhante a:

```json
{
  "personId": "person-0001",
  "editionId": "festanca-2026",
  "roleCode": "EMPRESS",
  "validFrom": "2026-01-01",
  "validTo": "2026-12-31"
}
```

---

## 15. Grupos tradicionais

Serão reconhecidos oficialmente, na edição fundadora:

```text
Grupo do Congo
Conguinho
Chorado
Choradinho
```

Essas denominações deverão ser preservadas como nomes canônicos, salvo decisão cultural formalmente registrada.

---

## 16. Locais como entidades mestres

Locais deverão possuir identidade própria e poderão ser reutilizados entre edições.

Exemplos:

- Praça da Bandeira;
- Centro de Eventos;
- Centro Paroquial;
- igrejas;
- residências autorizadas;
- espaços de cortejo;
- pontos históricos.

---

## 17. Residências privadas

Residências privadas poderão possuir entidade mestre protegida, com:

- identificador;
- denominação autorizada;
- classificação restrita;
- precisão geográfica controlada;
- responsável;
- autorização de publicação;
- histórico de uso por edição.

---

## 18. Organizações

Organizações deverão ser registradas separadamente de suas participações anuais.

Exemplo:

```text
Organização permanente
+
Participação como apoiadora em 2026
```

---

## 19. Funções institucionais permanentes

Funções permanentes poderão incluir:

- Coordenação-Geral;
- curadoria cultural;
- curadoria editorial;
- governança de dados;
- administração técnica;
- auditoria;
- segurança;
- preservação documental.

---

## 20. Funções anuais

Funções anuais poderão incluir:

- Imperatriz;
- Imperador;
- Rainha;
- Rei;
- Juíza;
- Juiz;
- Capitão do Mastro;
- demais funções definidas por edição.

---

## 21. Dados mestres da edição fundadora

São dados mestres especialmente protegidos por sua relação com a FESTANÇA 2026:

- identidades oficiais dos festeiros;
- grupos tradicionais;
- locais oficialmente utilizados;
- entidades participantes;
- canais oficiais;
- documentos constitucionais;
- fontes institucionais;
- identificadores fundadores;
- vocabulários iniciais;
- listas oficiais aprovadas.

---

## 22. Dados de referência oficiais

Os dados de referência deverão ser organizados em domínios identificáveis.

Exemplos:

```text
activity-category
publication-status
validation-status
access-level
source-type
location-type
media-type
document-type
risk-level
confidence-level
preservation-status
```

---

## 23. Domínio de referência

Todo domínio deverá possuir:

```text
domainId
name
description
owner
version
status
values
effectiveFrom
effectiveTo
```

---

## 24. Valor de referência

Cada valor deverá possuir:

```text
code
canonicalLabel
description
aliases
status
validFrom
validTo
sortOrder
```

---

## 25. Códigos institucionais

Códigos deverão ser:

- únicos dentro de seu domínio;
- estáveis;
- legíveis quando possível;
- não reutilizáveis;
- independentes de apresentação;
- documentados;
- versionados.

---

## 26. Exemplo de código institucional

```text
GROUP_CONGO
GROUP_CONGUINHO
GROUP_CHORADO
GROUP_CHORADINHO
```

---

## 27. Código não equivale ao nome

O código deverá permanecer estável mesmo quando o rótulo exibido for atualizado.

Exemplo:

```json
{
  "code": "PUBLICATION_APPROVED",
  "canonicalLabel": "Aprovado para publicação"
}
```

---

## 28. Proibição de códigos posicionais frágeis

Não deverão ser utilizados como identificadores permanentes:

```text
1
2
3
4
```

quando a ordem puder mudar e alterar o significado.

---

## 29. Nomes canônicos

Nome canônico é a denominação oficial principal de uma entidade ou valor.

Ele deverá ser:

- validado;
- contextualizado;
- consistente;
- preservado;
- utilizado como referência institucional.

---

## 30. Nome de exibição

O nome de exibição poderá variar conforme:

- contexto;
- canal;
- idioma;
- espaço;
- acessibilidade;
- edição.

A identidade canônica deverá permanecer estável.

---

## 31. Aliases

Aliases são denominações alternativas vinculadas ao registro canônico.

Poderão representar:

- abreviações;
- grafias anteriores;
- nomes populares;
- nomes históricos;
- variações linguísticas;
- erros legados documentados.

---

## 32. Registro de alias

```json
{
  "alias": "Grafia histórica",
  "aliasType": "historical",
  "validFrom": null,
  "validTo": null,
  "status": "preserved"
}
```

---

## 33. Alias não substitui correção

Uma grafia incorreta conhecida poderá ser preservada como alias histórico ou legado, mas não deverá permanecer como nome canônico.

---

## 34. Correção de nome próprio

A correção deverá preservar:

- nome anterior;
- nome correto;
- fonte;
- motivo;
- responsável;
- data;
- versão;
- registros afetados.

---

## 35. Nomes oficialmente confirmados

Nomes oficialmente confirmados deverão possuir estado:

```text
CONFIRMED
```

Nomes ainda pendentes deverão possuir:

```text
PENDING_VALIDATION
```

---

## 36. Vocabulários controlados

Vocabulários controlados são conjuntos oficiais de termos utilizados para padronizar classificação e interpretação.

---

## 37. Estrutura do vocabulário

Todo vocabulário deverá possuir:

- identificador;
- título;
- finalidade;
- escopo;
- termos;
- definições;
- relações;
- responsáveis;
- versão;
- vigência;
- histórico.

---

## 38. Termo preferencial

Cada conceito deverá possuir um termo preferencial.

---

## 39. Termos alternativos

Termos alternativos poderão ser registrados para:

- busca;
- compatibilidade;
- legado;
- contexto histórico;
- variação regional.

---

## 40. Termos proibidos

Termos considerados incorretos, ofensivos, ambíguos ou incompatíveis poderão ser marcados como:

```text
DEPRECATED
PROHIBITED
LEGACY_ONLY
```

---

## 41. Relações semânticas

Vocabulários poderão registrar:

```text
broader
narrower
related
equivalent
replacedBy
```

---

## 42. Hierarquias

Hierarquias deverão representar relações legítimas entre categorias ou entidades.

Exemplo:

```text
Atividade
├── Religiosa
├── Cultural
├── Institucional
├── Social
└── Turística
```

---

## 43. Hierarquia não implica autoridade humana

Relações hierárquicas de classificação não deverão ser interpretadas automaticamente como relações de poder, superioridade ou legitimidade cultural.

---

## 44. Hierarquia de locais

Poderá ser utilizada:

```text
País
└── Estado
    └── Município
        └── Área
            └── Local
```

---

## 45. Hierarquia organizacional

Organizações poderão possuir:

- unidade superior;
- unidade subordinada;
- vigência;
- responsáveis;
- função;
- histórico.

---

## 46. Integridade hierárquica

Nenhuma hierarquia deverá conter:

- ciclo;
- entidade sem pai obrigatório;
- vínculo inválido;
- nível incompatível;
- duplicidade estrutural.

---

## 47. Listas oficiais

Lista oficial é o conjunto aprovado de entidades ou valores válidos para determinada finalidade.

Exemplos:

- grupos participantes;
- festeiros da edição;
- locais autorizados;
- categorias de atividades;
- canais institucionais;
- documentos constitucionais;
- parceiros aprovados.

---

## 48. Lista oficial anual

Listas anuais deverão possuir:

```text
listId
editionId
listType
version
approvedBy
approvedAt
status
items
```

---

## 49. Lista oficial permanente

Listas permanentes deverão registrar:

- finalidade;
- responsáveis;
- vigência;
- versão;
- critérios de inclusão;
- critérios de exclusão;
- histórico.

---

## 50. Estado das listas

Os estados poderão ser:

```text
DRAFT
UNDER_REVIEW
APPROVED
PUBLISHED
SUPERSEDED
ARCHIVED
```

---

## 51. Domínios permitidos

Campos controlados deverão aceitar apenas valores pertencentes ao domínio oficial aplicável.

---

## 52. Valores desconhecidos

Quando o valor ainda não for conhecido, poderá ser utilizado:

```text
UNKNOWN
```

somente quando o domínio permitir.

---

## 53. Valores não aplicáveis

Quando o campo não se aplicar, poderá ser utilizado:

```text
NOT_APPLICABLE
```

Isso não deverá ser confundido com dado ausente.

---

## 54. Valores pendentes

Dados aguardando validação poderão utilizar:

```text
PENDING
```

desde que o estado seja temporário e rastreável.

---

## 55. Proibição de valores genéricos indiscriminados

Valores como:

```text
outros
diversos
geral
sem categoria
```

não deverão ser utilizados sem regra e justificativa.

---

## 56. Criação de entidade mestre

A criação deverá exigir:

- necessidade demonstrada;
- busca prévia;
- verificação de duplicidade;
- identificação;
- nome canônico;
- classificação;
- fonte;
- responsável;
- validação;
- versão inicial.

---

## 57. Fluxo de criação

```text
SOLICITAÇÃO
   ↓
BUSCA DE EXISTÊNCIA
   ↓
ANÁLISE DE DUPLICIDADE
   ↓
CLASSIFICAÇÃO
   ↓
ATRIBUIÇÃO DE IDENTIFICADOR
   ↓
VALIDAÇÃO
   ↓
APROVAÇÃO
   ↓
PUBLICAÇÃO OU ATIVAÇÃO
```

---

## 58. Solicitação de criação

A solicitação deverá registrar:

```text
requestId
entityType
proposedName
reason
source
requestedBy
requestedAt
```

---

## 59. Busca prévia obrigatória

Antes da criação deverão ser pesquisados:

- identificadores;
- nomes;
- aliases;
- grafias aproximadas;
- registros legados;
- vínculos;
- fontes;
- edições anteriores.

---

## 60. Aprovação da criação

Entidades críticas deverão ser aprovadas por responsável competente.

---

## 61. Criação automatizada

Sistemas não deverão criar automaticamente entidades mestres críticas sem:

- regra;
- controle;
- detecção de duplicidade;
- registro;
- validação humana;
- possibilidade de reversão.

---

## 62. Alteração de dado mestre

Alterações deverão ser classificadas como:

- corretivas;
- complementares;
- estruturais;
- semânticas;
- relacionais;
- administrativas;
- históricas.

---

## 63. Alteração corretiva

Corrige erro sem modificar a identidade essencial.

---

## 64. Alteração complementar

Acrescenta informação sem substituir conteúdo anterior.

---

## 65. Alteração estrutural

Modifica organização, esquema ou relacionamentos.

---

## 66. Alteração semântica

Modifica significado, classificação ou interpretação.

---

## 67. Alteração de nome canônico

Deverá preservar:

```text
previousCanonicalName
newCanonicalName
reason
source
changedBy
approvedBy
effectiveFrom
version
```

---

## 68. Proibição de sobrescrita silenciosa

Nenhum dado mestre deverá ser substituído sem histórico.

---

## 69. Desativação

Uma entidade poderá ser desativada quando:

- deixar de ser utilizada;
- for substituída;
- tiver sido criada indevidamente;
- for incorporada a outra entidade;
- perder validade institucional.

---

## 70. Desativação não é eliminação

A desativação deverá preservar:

- identificador;
- nome;
- aliases;
- relacionamentos históricos;
- versões;
- motivo;
- responsável;
- data;
- substituto, quando houver.

---

## 71. Estados de entidade mestre

```text
PROPOSED
ACTIVE
INACTIVE
DEPRECATED
MERGED
SUPERSEDED
ARCHIVED
```

---

## 72. Entidade substituída

Quando substituída, deverá registrar:

```text
replacedBy
replacementReason
replacementDate
```

---

## 73. Fusão de entidades

A fusão deverá ocorrer somente após validação de que os registros representam a mesma entidade.

---

## 74. Registro da fusão

```text
mergeId
survivingEntityId
mergedEntityIds
reason
sources
approvedBy
mergedAt
```

---

## 75. Entidade sobrevivente

A entidade sobrevivente deverá preservar:

- identificador principal;
- aliases;
- fontes;
- vínculos;
- histórico;
- identificadores legados;
- decisões de fusão.

---

## 76. Proibição de fusão automática crítica

Não deverão ser fundidas exclusivamente por algoritmo:

- pessoas;
- famílias;
- grupos tradicionais;
- locais históricos;
- documentos;
- entidades da edição fundadora.

---

## 77. Duplicidades

Duplicidades poderão ser:

- exatas;
- nominais;
- semânticas;
- históricas;
- técnicas;
- legítimas;
- potenciais.

---

## 78. Duplicidade legítima

Duas pessoas ou entidades poderão possuir o mesmo nome sem serem a mesma entidade.

---

## 79. Indicadores de duplicidade

Poderão ser considerados:

- identificadores;
- nomes;
- aliases;
- datas;
- locais;
- relações;
- fontes;
- documentos;
- contexto.

---

## 80. Processo de resolução

```text
DETECTAR
   ↓
CLASSIFICAR
   ↓
COMPARAR
   ↓
VALIDAR
   ↓
DECIDIR
   ↓
FUNDIR OU MANTER
   ↓
REGISTRAR
   ↓
AUDITAR
```

---

## 81. Dados de referência versionados

Toda alteração em domínio controlado deverá gerar nova versão quando afetar interpretação, validação ou interoperabilidade.

---

## 82. Versão do domínio

Exemplo:

```text
activity-category@1.0.0
```

---

## 83. Versão do valor

Valores poderão possuir versão própria quando necessário.

---

## 84. Vigência de valor

Todo valor deverá poder registrar:

```text
validFrom
validTo
```

---

## 85. Valor descontinuado

Um valor descontinuado não deverá ser reutilizado com novo significado.

---

## 86. Substituição de valor

Deverá registrar:

```text
deprecatedCode
replacementCode
reason
effectiveFrom
```

---

## 87. Compatibilidade entre versões

Sistemas consumidores deverão saber:

- versão utilizada;
- valores suportados;
- valores descontinuados;
- transformações necessárias;
- data de vigência.

---

## 88. Sincronização entre sistemas

Dados mestres poderão ser sincronizados entre:

- repositório;
- Portal;
- banco de dados;
- arquivos JSON;
- ferramentas administrativas;
- serviços;
- integrações;
- arquivos de preservação.

---

## 89. Fonte de autoridade

Cada dado mestre deverá possuir fonte oficial de autoridade.

Exemplo:

```text
systemOfRecord
```

---

## 90. Sistema de registro oficial

O sistema de registro oficial será aquele responsável pela versão institucional vigente do dado.

---

## 91. Réplicas

Réplicas deverão:

- identificar a origem;
- registrar horário de sincronização;
- preservar versão;
- impedir alteração não autorizada;
- detectar divergências.

---

## 92. Sincronização unidirecional

Será utilizada quando apenas a fonte oficial puder alterar o dado.

```text
FONTE OFICIAL → SISTEMA CONSUMIDOR
```

---

## 93. Sincronização bidirecional

Somente deverá ser adotada quando houver:

- regra de conflito;
- autoridade definida;
- versionamento;
- logs;
- reconciliação;
- auditoria.

---

## 94. Conflitos de sincronização

Deverão registrar:

```text
conflictId
entityId
sourceVersion
targetVersion
detectedAt
resolution
resolvedBy
```

---

## 95. Regra de precedência

A precedência poderá considerar:

1. autoridade da fonte;

2. versão;

3. data;

4. aprovação;

5. contexto;

6. integridade;

7. validação humana.

---

## 96. Sincronização offline

Ambientes offline deverão possuir:

- versão de referência;
- data de captura;
- mecanismo de atualização;
- controle de conflitos;
- validade;
- integridade.

---

## 97. Exportação de dados mestres

A exportação deverá preservar:

- identificadores;
- nomes canônicos;
- aliases;
- códigos;
- status;
- versão;
- vigência;
- relacionamentos;
- fontes.

---

## 98. Importação de dados mestres

A importação deverá exigir:

- origem identificada;
- esquema;
- versão;
- mapeamento;
- validação;
- detecção de duplicidade;
- relatório;
- possibilidade de reversão.

---

## 99. Qualidade dos dados mestres

Dados mestres deverão atender a:

- exatidão;
- completude;
- consistência;
- unicidade;
- validade;
- atualidade;
- integridade;
- confiabilidade;
- rastreabilidade.

---

## 100. Campos mínimos da entidade mestre

Toda entidade mestre deverá possuir:

```text
id
entityType
canonicalName
status
version
createdAt
createdBy
sourceIds
```

---

## 101. Campos recomendados

Poderão incluir:

```text
aliases
description
classification
validFrom
validTo
updatedAt
updatedBy
confidenceLevel
preservationStatus
```

---

## 102. Steward de dados mestres

Cada domínio deverá possuir responsável institucional.

---

## 103. Responsabilidades do steward

O responsável deverá:

- aprovar criação;
- validar alterações;
- controlar duplicidades;
- manter definições;
- revisar qualidade;
- supervisionar sincronização;
- preservar histórico;
- apoiar auditoria.

---

## 104. Proprietário institucional do domínio

O proprietário institucional deverá decidir:

- finalidade;
- escopo;
- regras;
- aprovações;
- exceções;
- desativação;
- prioridades;
- riscos.

---

## 105. Curadoria cultural

A curadoria cultural deverá validar:

- nomes tradicionais;
- denominações;
- grupos;
- funções;
- hierarquias culturais;
- termos;
- aliases;
- restrições;
- contextos.

---

## 106. Governança de dados

A governança deverá:

- manter o catálogo;
- controlar versões;
- assegurar interoperabilidade;
- documentar regras;
- acompanhar indicadores;
- organizar auditorias;
- proteger a edição fundadora.

---

## 107. Responsabilidade técnica

A equipe técnica deverá:

- aplicar esquemas;
- garantir identificadores;
- controlar sincronização;
- registrar logs;
- impedir sobrescrita;
- manter backups;
- implementar validações.

---

## 108. Responsabilidade editorial

A equipe editorial deverá:

- utilizar nomes canônicos;
- respeitar códigos;
- verificar edição;
- não criar categorias improvisadas;
- submeter novos termos;
- preservar contexto.

---

## 109. Catálogo de dados mestres

O Portal deverá manter catálogo contendo:

- domínio;
- entidade;
- definição;
- responsável;
- fonte oficial;
- esquema;
- versão;
- status;
- sistemas consumidores;
- restrições;
- preservação.

---

## 110. Catálogo de dados de referência

Deverá conter:

```text
domainId
domainName
description
owner
version
values
status
consumers
```

---

## 111. Dicionário de dados

O dicionário deverá definir:

- campo;
- significado;
- tipo;
- formato;
- obrigatoriedade;
- domínio;
- exemplos;
- restrições;
- fonte.

---

## 112. Registro de decisão

Decisões sobre dados mestres deverão registrar:

```text
decisionId
subject
context
options
decision
reason
approvedBy
approvedAt
```

---

## 113. Auditoria

A auditoria deverá verificar:

- entidades duplicadas;
- nomes inconsistentes;
- aliases sem fonte;
- códigos reutilizados;
- valores fora do domínio;
- entidades sem responsável;
- registros inativos utilizados;
- divergências entre sistemas;
- alterações sem histórico;
- danos à edição fundadora.

---

## 114. Indicadores mínimos

Deverão ser monitorados:

- número de entidades mestres;
- número de domínios;
- duplicidades abertas;
- registros sem fonte;
- registros sem responsável;
- valores descontinuados em uso;
- conflitos de sincronização;
- alterações não aprovadas;
- entidades fundadoras protegidas;
- listas oficiais atualizadas.

---

## 115. Taxa de unicidade

```text
Entidades sem duplicidade
------------------------- × 100
Entidades avaliadas
```

---

## 116. Taxa de conformidade com domínios

```text
Valores válidos
--------------- × 100
Valores avaliados
```

---

## 117. Taxa de sincronização

```text
Registros sincronizados corretamente
------------------------------------ × 100
Registros previstos
```

---

## 118. Taxa de rastreabilidade

```text
Entidades com fonte e histórico
------------------------------- × 100
Entidades avaliadas
```

---

## 119. Alertas

Deverão ser gerados alertas para:

- criação duplicada;
- código repetido;
- nome canônico ausente;
- alias conflitante;
- domínio inválido;
- versão incompatível;
- sincronização falha;
- uso de valor descontinuado;
- alteração em entidade fundadora;
- tentativa de eliminação de histórico.

---

## 120. Não conformidades

Serão consideradas não conformidades:

- entidade sem identificador;
- registro sem nome canônico;
- código reutilizado;
- criação sem busca prévia;
- duplicidade não tratada;
- alteração sem versionamento;
- desativação sem preservação;
- sincronização sem controle;
- valor fora do domínio;
- mistura entre dado mestre e dado anual;
- alteração indevida da edição fundadora.

---

## 121. Classificação das não conformidades

| Nível | Definição |
|---|---|
| Baixa | Inconsistência limitada |
| Média | Compromete padronização |
| Alta | Compromete integração ou qualidade |
| Crítica | Compromete identidade, direitos ou operação |
| Máxima | Compromete a edição fundadora ou a memória cultural |

---

## 122. Tratamento das não conformidades

Toda não conformidade deverá ser:

1. identificada;

2. registrada;

3. classificada;

4. contida;

5. atribuída a responsável;

6. investigada;

7. corrigida;

8. sincronizada;

9. revalidada;

10. auditada;

11. preservada como evidência.

---

## 123. Proteção contra eliminação

Dados mestres utilizados historicamente não deverão ser eliminados fisicamente sem análise excepcional.

A desativação deverá ser preferida.

---

## 124. Preservação histórica

Deverão ser preservados:

- identificadores;
- nomes anteriores;
- aliases;
- códigos;
- classificações;
- versões;
- vínculos;
- decisões;
- fusões;
- desativações;
- fontes;
- responsáveis.

---

## 125. Temporalidade

Dados mestres poderão possuir temporalidade própria.

Exemplo:

```text
nome válido de 1980 a 2000
nome canônico atual a partir de 2001
```

---

## 126. Consultas históricas

O sistema deverá permitir recuperar:

- estado atual;
- estado anterior;
- versão por data;
- valores descontinuados;
- vínculos históricos;
- nomes antigos.

---

## 127. Proteção da edição fundadora

Os dados mestres vinculados à FESTANÇA 2026 deverão receber proteção máxima.

---

## 128. Identificadores fundadores

Identificadores da edição fundadora não deverão ser:

- reutilizados;
- renumerados sem mapa;
- apagados;
- transferidos para outra entidade;
- sobrescritos por edição futura.

---

## 129. Nomes fundadores

Os nomes oficiais registrados em 2026 deverão ser preservados com:

- valor original;
- fonte;
- versão;
- eventual correção;
- justificativa;
- histórico.

---

## 130. Grupos fundadores

As denominações oficiais dos grupos participantes da edição fundadora deverão permanecer vinculadas a 2026, ainda que futuras edições adotem alterações formalmente aprovadas.

---

## 131. Festeiros da edição fundadora

Os vínculos anuais dos festeiros de 2026 deverão permanecer imutáveis historicamente, admitindo apenas correção controlada com evidência.

---

## 132. Locais da edição fundadora

Os locais utilizados em 2026 deverão permanecer vinculados à programação fundadora, mesmo que:

- mudem de nome;
- deixem de ser utilizados;
- recebam nova classificação;
- sejam substituídos em edições futuras.

---

## 133. Vocabulários fundadores

As versões iniciais dos vocabulários deverão ser preservadas como referência histórica.

---

## 134. Evolução dos vocabulários

Novas versões poderão:

- acrescentar termos;
- corrigir definições;
- descontinuar valores;
- ampliar hierarquias;
- melhorar interoperabilidade.

Não poderão apagar a interpretação histórica da versão fundadora.

---

## 135. Compatibilidade entre edições

As edições anuais deverão utilizar:

- entidades permanentes compartilhadas;
- vínculos anuais próprios;
- listas anuais versionadas;
- códigos estáveis;
- referências temporais explícitas.

---

## 136. Proibição de mistura entre edições

Não deverão ser fundidos como se fossem idênticos:

- função permanente;
- função anual;
- pessoa;
- participação anual;
- local;
- uso anual do local;
- organização;
- parceria anual.

---

## 137. Exemplo constitucional

```text
Person: Evelyn Juliane Frazão de Almeida
EditionRoleAssignment:
  editionId: festanca-2026
  roleCode: EMPRESS
```

A função anual não deverá ser incorporada permanentemente ao nome ou à identidade mestre da pessoa.

---

## 138. Lista mínima para criação de entidade mestre

- [ ] necessidade demonstrada;
- [ ] tipo de entidade definido;
- [ ] busca prévia executada;
- [ ] duplicidades avaliadas;
- [ ] identificador atribuído;
- [ ] nome canônico validado;
- [ ] aliases registrados;
- [ ] fonte vinculada;
- [ ] responsável identificado;
- [ ] classificação definida;
- [ ] versão inicial criada;
- [ ] aprovação registrada.

---

## 139. Lista mínima para novo valor de referência

- [ ] domínio identificado;
- [ ] necessidade demonstrada;
- [ ] código único definido;
- [ ] termo canônico validado;
- [ ] definição registrada;
- [ ] aliases avaliados;
- [ ] impacto analisado;
- [ ] interoperabilidade verificada;
- [ ] versão atualizada;
- [ ] vigência definida;
- [ ] aprovação registrada.

---

## 140. Lista mínima para alteração

- [ ] registro identificado;
- [ ] alteração descrita;
- [ ] motivo registrado;
- [ ] fonte apresentada;
- [ ] impacto avaliado;
- [ ] sistemas consumidores identificados;
- [ ] histórico preservado;
- [ ] versão atualizada;
- [ ] sincronização planejada;
- [ ] aprovação registrada.

---

## 141. Lista mínima para desativação

- [ ] entidade identificada;
- [ ] motivo registrado;
- [ ] uso atual verificado;
- [ ] relacionamentos analisados;
- [ ] substituto definido, quando aplicável;
- [ ] histórico preservado;
- [ ] consumidores comunicados;
- [ ] data de vigência definida;
- [ ] sincronização realizada;
- [ ] aprovação registrada.

---

## 142. Lista mínima para fusão

- [ ] entidades comparadas;
- [ ] fontes analisadas;
- [ ] identidade confirmada;
- [ ] vínculos inventariados;
- [ ] entidade sobrevivente definida;
- [ ] aliases preservados;
- [ ] identificadores legados mapeados;
- [ ] impacto avaliado;
- [ ] validação humana concluída;
- [ ] aprovação registrada;
- [ ] auditoria prevista.

---

## 143. Exceções

Exceções somente poderão ocorrer quando:

- houver justificativa;
- o impacto estiver registrado;
- o responsável estiver identificado;
- a temporalidade estiver definida;
- a autoridade competente aprovar;
- o histórico permanecer preservado;
- a edição fundadora estiver protegida.

---

## 144. Declaração constitucional

Este documento declara que:

1. nenhuma entidade mestre será criada sem necessidade;

2. nenhuma entidade será duplicada por conveniência;

3. nenhum nome canônico será alterado silenciosamente;

4. nenhum alias será confundido com identidade oficial;

5. nenhum código institucional será reutilizado;

6. nenhum valor descontinuado será apagado da história;

7. nenhum vínculo anual será transformado indevidamente em atributo permanente;

8. nenhuma sincronização prevalecerá sobre a fonte oficial;

9. nenhuma automação fundirá entidades críticas sem validação humana;

10. nenhuma edição futura substituirá os dados mestres da edição fundadora;

11. toda entidade deverá ser identificável, versionada, rastreável e preservável.

---

## 145. Princípio maior

**IDENTIFICAR ANTES DE CADASTRAR.**

**PESQUISAR ANTES DE CRIAR.**

**CLASSIFICAR ANTES DE RELACIONAR.**

**VALIDAR ANTES DE ATIVAR.**

**PADRONIZAR SEM APAGAR A DIVERSIDADE.**

**DEFINIR ANTES DE CODIFICAR.**

**VERSIONAR ANTES DE ALTERAR.**

**SINCRONIZAR SEM PERDER A AUTORIDADE.**

**DESATIVAR SEM APAGAR.**

**FUNDIR SOMENTE APÓS COMPROVAR.**

**PRESERVAR OS ALIASES SEM CONFUNDI-LOS COM O NOME CANÔNICO.**

**REUTILIZAR ENTIDADES SEM MISTURAR EDIÇÕES.**

**EVOLUIR SEM ROMPER A IDENTIDADE.**

---

## 146. Compromisso permanente

Toda gestão de dados mestres e dados de referência deverá proteger simultaneamente:

- as pessoas;
- as famílias;
- as crianças;
- os adolescentes;
- a comunidade;
- os grupos tradicionais;
- os festeiros;
- os responsáveis;
- os autores;
- os colaboradores;
- os parceiros legítimos;
- a cultura;
- a história;
- a memória;
- a fé;
- as tradições;
- os conhecimentos;
- os nomes;
- os aliases;
- as funções;
- os códigos;
- os documentos;
- os dados;
- os registros;
- as fontes;
- os locais;
- as organizações;
- os relacionamentos;
- os identificadores;
- os vocabulários;
- os domínios;
- as hierarquias;
- as versões;
- os sistemas;
- as integrações;
- a governança;
- a edição fundadora;
- as futuras edições;
- a continuidade;
- o patrimônio;
- o futuro.

---

## 147. Referências institucionais essenciais

Este documento deverá ser interpretado em conjunto com:

- `docs/festanca/portal-architecture.md`;
- `docs/festanca/edition-schema.md`;
- `docs/festanca/publication-workflow.md`;
- `docs/festanca/migration-2026.md`;
- `docs/festanca/data/data-architecture.md`;
- `docs/festanca/data/data-classification-model.md`;
- `docs/festanca/data/entity-relationship-model.md`;
- `docs/festanca/data/identifiers-and-references.md`;
- `docs/festanca/data/data-validation-rules.md`;
- `docs/festanca/data/data-quality-model.md`;
- `docs/festanca/data/data-lifecycle-and-retention.md`;
- `docs/festanca/data/data-migration-and-conversion-model.md`;
- `docs/festanca/data/data-access-and-sharing-model.md`;
- `docs/festanca/data/data-lineage-and-provenance-model.md`;
- `docs/festanca/architecture/architecture-principles.md`;
- `docs/festanca/architecture/repository-structure.md`;
- `docs/festanca/architecture/component-architecture.md`;
- `docs/festanca/architecture/integration-architecture.md`;
- `docs/festanca/architecture/infrastructure-architecture.md`;
- `docs/festanca/architecture/dependency-management.md`;
- `docs/festanca/governance/data-governance-policy.md`;
- `docs/festanca/governance/privacy-and-data-protection-policy.md`;
- `docs/festanca/governance/information-security-and-cybersecurity-policy.md`;
- `docs/festanca/governance/digital-preservation-policy.md`;
- `docs/festanca/governance/records-and-archives-management-policy.md`;
- `docs/festanca/governance/community-participation-and-cultural-safeguarding-policy.md`;
- `docs/festanca/governance/artificial-intelligence-and-automation-policy.md`;
- `docs/festanca/governance/audit-and-compliance-policy.md`;
- `docs/festanca/governance/change-control-policy.md`;
- `docs/festanca/governance/risk-management-and-resilience-policy.md`.

---

## 148. Estado inicial deste documento

```text
DOCUMENTO: master-data-and-reference-data-model.md
FUNÇÃO: Gestão constitucional de dados mestres e dados de referência
REGIME: Permanente
EDIÇÃO FUNDADORA: FESTANÇA 2026
CRITICIDADE: Máxima
MUTABILIDADE: Estritamente controlada
PRESERVAÇÃO: Integral
ENTIDADES MESTRES: Identificadas e controladas
DADOS DE REFERÊNCIA: Versionados
VOCABULÁRIOS CONTROLADOS: Obrigatórios quando aplicáveis
LISTAS OFICIAIS: Aprovadas e rastreáveis
CÓDIGOS INSTITUCIONAIS: Únicos e estáveis
NOMES CANÔNICOS: Obrigatórios
ALIASES: Preservados e contextualizados
HIERARQUIAS: Validadas
DOMÍNIOS PERMITIDOS: Controlados
RESPONSÁVEIS PELOS DADOS: Identificados
CRIAÇÃO: Formalmente controlada
ALTERAÇÃO: Versionada
DESATIVAÇÃO: Sem apagamento histórico
SINCRONIZAÇÃO: Auditável
DUPLICIDADES: Obrigatoriamente tratadas
INTEGRIDADE ENTRE EDIÇÕES: Permanente
VERSIONAMENTO: Obrigatório
AUDITORIA: Permanente
PROTEÇÃO DA EDIÇÃO FUNDADORA: Máxima
RASTREABILIDADE: Integral
APLICABILIDADE: Portal Permanente e edições anuais
```

---

## 149. Vigência

Este documento entra em vigor a partir de sua aprovação e publicação no repositório oficial.

Sua vigência será permanente.

Toda revisão deverá:

- preservar as versões anteriores;
- registrar justificativas;
- identificar responsáveis;
- apresentar análise de impacto;
- preservar identificadores;
- preservar códigos descontinuados;
- preservar nomes anteriores;
- documentar alterações de vocabulários;
- manter compatibilidade histórica;
- atualizar sistemas consumidores;
- proteger dados pessoais;
- preservar os vínculos entre edições;
- proteger os dados mestres fundadores;
- respeitar os modelos constitucionais de dados;
- assegurar rastreabilidade integral.

---

## 150. Encerramento institucional

Seguimos juntos, passo a passo.

Com método.

Com segurança.

Com preservação integral da edição fundadora.

**SOMOS TODOS, AVANÇO.**

Ao encontro do futuro.

**AMÉM.**
