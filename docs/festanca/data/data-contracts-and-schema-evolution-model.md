# Modelo Constitucional de Contratos de Dados e Evolução de Esquemas do Portal Permanente da FESTANÇA

> Constituição destinada a regulamentar a definição, a formalização, a validação, o versionamento, a compatibilidade, a publicação, a alteração, a descontinuação, a migração, a auditoria e a preservação dos contratos de dados e dos esquemas oficiais utilizados pelo Portal Permanente da FESTANÇA de Vila Bela da Santíssima Trindade — Mato Grosso — Brasil.

---

## Denominação oficial
**Modelo Constitucional de Contratos de Dados e Evolução de Esquemas do Portal Permanente da FESTANÇA**

## 1. Identificação do documento

| Campo | Conteúdo |
|---|---|
| Documento | Modelo Constitucional de Contratos de Dados e Evolução de Esquemas do Portal Permanente da FESTANÇA |
| Caminho oficial | `docs/festanca/data/data-contracts-and-schema-evolution-model.md` |
| Classificação | Documento constitucional de dados |
| Domínio | Contratos de dados, esquemas, compatibilidade e evolução estrutural |
| Regime | Permanente |
| Criticidade | Máxima |
| Mutabilidade | Estritamente controlada |
| Preservação | Integral, auditável, versionada e recuperável |
| Edição fundadora | FESTANÇA 2026 |
| Situação | Constituição de contratos de dados e evolução de esquemas |
| Versão inicial | `1.0.0` |
| Aplicabilidade | Portal Permanente e edições anuais |
| Vigência | Permanente |
| Documento superior | `docs/festanca/data/data-architecture.md` |
| Esquema superior | `docs/festanca/edition-schema.md` |
| Modelo classificatório | `docs/festanca/data/data-classification-model.md` |
| Modelo relacional | `docs/festanca/data/entity-relationship-model.md` |
| Modelo de identificação | `docs/festanca/data/identifiers-and-references.md` |
| Regras de validação | `docs/festanca/data/data-validation-rules.md` |
| Modelo de qualidade | `docs/festanca/data/data-quality-model.md` |
| Modelo de migração | `docs/festanca/data/data-migration-and-conversion-model.md` |
| Modelo de linhagem | `docs/festanca/data/data-lineage-and-provenance-model.md` |
| Modelo de metadados | `docs/festanca/data/metadata-and-data-catalog-model.md` |
| Modelo de observabilidade | `docs/festanca/data/data-observability-and-monitoring-model.md` |
| Modelo de auditoria | `docs/festanca/data/data-audit-and-reconciliation-model.md` |

---

## 2. Finalidade

Este documento estabelece o regime constitucional dos contratos de dados e da evolução dos esquemas oficiais utilizados pelo Portal Permanente da FESTANÇA.

Sua finalidade é assegurar que toda estrutura de dados institucional seja:

- formalmente definida;
- identificável;
- compreensível;
- documentada;
- validável;
- versionada;
- compatível;
- rastreável;
- testável;
- interoperável;
- auditável;
- migrável;
- recuperável;
- preservada historicamente;
- subordinada à continuidade institucional;
- compatível com a proteção da edição fundadora.

Nenhum conjunto de dados crítico deverá depender exclusivamente de entendimento informal, interpretação individual ou estrutura não documentada.

---

## 3. Objetivos estratégicos

São objetivos permanentes deste Modelo:

1. instituir contratos formais de dados;

2. identificar produtores e consumidores;

3. regulamentar esquemas oficiais;

4. definir campos obrigatórios e opcionais;

5. controlar tipos, formatos e domínios;

6. assegurar compatibilidade retroativa;

7. assegurar compatibilidade progressiva quando aplicável;

8. regulamentar versionamento semântico;

9. controlar inclusão de campos;

10. controlar alteração de campos;

11. controlar descontinuação de campos;

12. regulamentar mudanças incompatíveis;

13. instituir períodos de transição;

14. validar contratos;

15. testar compatibilidade;

16. comunicar mudanças;

17. atribuir responsabilidades;

18. controlar migrações entre versões;

19. preservar esquemas históricos;

20. proteger os contratos e esquemas da edição fundadora.

---

## 4. Princípios fundamentais

Todo contrato de dados e toda evolução de esquema deverão observar:

- clareza;
- estabilidade;
- interoperabilidade;
- previsibilidade;
- proporcionalidade;
- compatibilidade;
- versionamento;
- rastreabilidade;
- documentação;
- validação;
- testabilidade;
- reversibilidade;
- continuidade;
- preservação histórica;
- supervisão humana;
- responsabilidade;
- proteção da edição fundadora.

---

## 5. Conceito de contrato de dados

Contrato de dados é o acordo técnico e institucional que define como um conjunto de dados deverá ser produzido, estruturado, validado, disponibilizado, consumido, alterado e preservado.

---

## 6. Conceito de esquema

Esquema é a representação formal da estrutura esperada de um conjunto de dados.

O esquema poderá definir:

- entidades;
- campos;
- tipos;
- formatos;
- obrigatoriedade;
- domínios;
- relacionamentos;
- restrições;
- regras condicionais;
- versões.

---

## 7. Conceito de produtor de dados

Produtor de dados é a pessoa, equipe, sistema, integração ou processo responsável pela geração ou fornecimento dos dados.

---

## 8. Conceito de consumidor de dados

Consumidor de dados é a pessoa, aplicação, sistema, documento, processo ou integração que utiliza os dados produzidos.

---

## 9. Conceito de compatibilidade

Compatibilidade é a capacidade de diferentes versões, sistemas ou consumidores funcionarem sem perda indevida de dados, significado ou continuidade.

---

## 10. Conceito de evolução de esquema

Evolução de esquema é o processo controlado de alteração da estrutura oficial dos dados ao longo do tempo.

---

## 11. Conceito de mudança incompatível

Mudança incompatível é aquela capaz de impedir ou alterar o funcionamento esperado de produtores, consumidores, integrações, validações ou registros históricos.

---

## 12. Escopo

Este Modelo aplica-se a:

- arquivos JSON;
- bancos de dados;
- tabelas;
- documentos estruturados;
- APIs;
- integrações;
- formulários;
- catálogos;
- metadados;
- dados mestres;
- dados de referência;
- programações;
- festeiros;
- grupos tradicionais;
- atividades;
- locais;
- mídias;
- publicações;
- migrações;
- edições anuais;
- edição fundadora;
- futuras estruturas institucionais.

---

## 13. Objetos sujeitos a contrato

Deverão possuir contratos proporcionais à criticidade:

```text
DATASETS
JSON_FILES
DATABASE_TABLES
API_PAYLOADS
FORMS
IMPORT_FORMATS
EXPORT_FORMATS
MASTER_DATA
REFERENCE_DATA
METADATA
PUBLICATION_DATA
EDITION_DATA
```

---

## 14. Estrutura mínima do contrato

Todo contrato deverá conter, quando aplicável:

```text
contractId
name
description
version
status
producer
consumers
schema
validationRules
compatibilityPolicy
owner
effectiveDate
```

---

## 15. Identificador do contrato

Cada contrato deverá possuir identificador único, estável e permanente.

Exemplo:

```text
festanca-programacao-contract
```

---

## 16. Nome canônico

O contrato deverá possuir nome oficial e inequívoco.

---

## 17. Descrição

A descrição deverá informar:

- finalidade;
- domínio;
- abrangência;
- contexto;
- limitações;
- edição;
- responsabilidade.

---

## 18. Proprietário do contrato

Todo contrato deverá possuir proprietário institucional responsável por:

- aprovação;
- manutenção;
- evolução;
- classificação;
- comunicação;
- encerramento.

---

## 19. Produtor oficial

O produtor deverá estar formalmente identificado.

---

## 20. Consumidores conhecidos

Os consumidores deverão ser registrados, sempre que possível.

Exemplos:

- Portal;
- componentes;
- sistemas;
- relatórios;
- aplicações;
- exportações;
- edições futuras;
- processos de preservação.

---

## 21. Consumidores desconhecidos

A existência de consumidores não identificados deverá ser considerada antes de alterações em contratos públicos ou amplamente utilizados.

---

## 22. Fonte de autoridade

Todo contrato deverá identificar a fonte institucional de autoridade.

```text
systemOfRecord
```

---

## 23. Responsabilidade compartilhada

Produtores e consumidores deverão cooperar na prevenção de rupturas.

---

## 24. Obrigações do produtor

O produtor deverá:

- obedecer ao esquema;
- fornecer dados válidos;
- documentar alterações;
- comunicar mudanças;
- preservar versões;
- registrar falhas;
- manter rastreabilidade.

---

## 25. Obrigações do consumidor

O consumidor deverá:

- utilizar versões suportadas;
- validar entradas;
- tratar campos opcionais;
- evitar dependências não documentadas;
- acompanhar notificações;
- atualizar integrações;
- reportar incompatibilidades.

---

## 26. Esquema oficial

Todo conjunto de dados crítico deverá possuir esquema oficial aprovado.

---

## 27. Formatos de esquema

Poderão ser utilizados:

- JSON Schema;
- estrutura documental formal;
- definição tabular;
- modelo relacional;
- contrato de API;
- dicionário de dados;
- especificação institucional equivalente.

---

## 28. Exemplo de referência de esquema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "festanca-programacao.schema.json",
  "title": "Programação da FESTANÇA",
  "type": "object"
}
```

---

## 29. Campos obrigatórios

Campos obrigatórios são aqueles sem os quais o registro não poderá ser considerado válido para determinada finalidade.

---

## 30. Definição de campo obrigatório

```json
{
  "required": [
    "id",
    "editionId",
    "name",
    "status"
  ]
}
```

---

## 31. Critérios de obrigatoriedade

A obrigatoriedade deverá considerar:

- finalidade;
- identificação;
- integridade;
- publicação;
- segurança;
- contexto;
- rastreabilidade;
- preservação.

---

## 32. Campos opcionais

Campos opcionais poderão ser omitidos sem invalidar o registro, desde que não exista regra condicional que determine sua obrigatoriedade.

---

## 33. Campo opcional não significa irrelevante

Campos opcionais deverão possuir descrição, tipo e finalidade definidos.

---

## 34. Obrigatoriedade condicional

Um campo poderá ser obrigatório apenas em determinada condição.

Exemplo:

```text
Se locationType = PRIVATE_RESIDENCE,
authorizationStatus deverá ser informado.
```

---

## 35. Campos calculados

Campos derivados ou calculados deverão identificar:

- fonte;
- regra;
- versão;
- momento de cálculo;
- possibilidade de recalculação.

---

## 36. Campos imutáveis

Campos definidos como imutáveis não deverão ser alterados após sua criação, salvo procedimento constitucional específico.

Exemplos:

- identificador permanente;
- edição de origem;
- data de criação;
- referência fundadora.

---

## 37. Tipos de dados

Os tipos deverão ser explicitamente definidos.

```text
string
integer
number
boolean
array
object
null
```

---

## 38. Tipos institucionais derivados

Poderão existir tipos especializados, como:

```text
InstitutionalIdentifier
EditionIdentifier
ISODate
ISODateTime
ControlledVocabularyCode
Checksum
Version
```

---

## 39. Formatos

Os formatos deverão ser documentados.

Exemplos:

```text
date
date-time
time
email
uri
uuid
```

---

## 40. Datas

Datas deverão utilizar, preferencialmente:

```text
YYYY-MM-DD
```

---

## 41. Horários

Horários deverão utilizar, preferencialmente:

```text
HH:MM
```

ou formato com fuso quando necessário.

---

## 42. Data e hora

Quando o fuso for relevante:

```text
YYYY-MM-DDTHH:MM:SS-04:00
```

---

## 43. Valores enumerados

Domínios fechados deverão utilizar enumerações controladas.

```json
{
  "status": {
    "type": "string",
    "enum": [
      "DRAFT",
      "VALIDATED",
      "APPROVED",
      "PUBLISHED",
      "ARCHIVED"
    ]
  }
}
```

---

## 44. Vocabulários controlados

Campos institucionais deverão utilizar vocabulários controlados quando necessário.

---

## 45. Valores livres

Campos livres deverão ser limitados quando puderem causar:

- duplicidade;
- inconsistência;
- perda de classificação;
- dificuldade de busca;
- ambiguidade;
- incompatibilidade.

---

## 46. Limites de tamanho

Campos textuais deverão possuir limites adequados quando necessários.

---

## 47. Valores mínimos e máximos

Campos numéricos poderão possuir:

```text
minimum
maximum
exclusiveMinimum
exclusiveMaximum
```

---

## 48. Padrões textuais

Expressões regulares poderão ser utilizadas para formatos previsíveis.

---

## 49. Valores nulos

O uso de `null` deverá ser semanticamente definido.

`null` não deverá ser utilizado indistintamente para representar:

- desconhecido;
- não aplicável;
- não informado;
- removido;
- pendente;
- confidencial.

---

## 50. Estados de ausência

Quando necessário, deverão ser distinguidos:

```text
UNKNOWN
NOT_APPLICABLE
NOT_PROVIDED
PENDING
RESTRICTED
```

---

## 51. Valores padrão

Valores padrão deverão ser utilizados com cautela.

Nenhum valor padrão deverá produzir informação falsa ou presumida.

---

## 52. Campos depreciados

Campos em processo de descontinuação deverão ser marcados como:

```text
deprecated: true
```

---

## 53. Relação entre campos

O contrato poderá definir dependências entre campos.

---

## 54. Relação entre entidades

O contrato deverá respeitar o Modelo Constitucional de Entidades e Relacionamentos.

---

## 55. Identificadores referenciais

Referências deverão utilizar identificadores estáveis e previstos no modelo institucional.

---

## 56. Cardinalidades

As cardinalidades deverão ser documentadas:

```text
ONE_TO_ONE
ONE_TO_MANY
MANY_TO_ONE
MANY_TO_MANY
```

---

## 57. Integridade referencial

Nenhuma versão de esquema deverá romper referências sem plano formal de migração.

---

## 58. Versionamento semântico

Os contratos e esquemas deverão utilizar versionamento semântico:

```text
MAJOR.MINOR.PATCH
```

Exemplo:

```text
2.4.1
```

---

## 59. Versão principal

A versão `MAJOR` deverá ser alterada quando houver mudança incompatível.

Exemplo:

```text
1.5.0 → 2.0.0
```

---

## 60. Versão secundária

A versão `MINOR` deverá ser alterada quando houver inclusão compatível de funcionalidade ou estrutura.

Exemplo:

```text
1.4.0 → 1.5.0
```

---

## 61. Versão de correção

A versão `PATCH` deverá ser alterada quando houver correção compatível sem mudança estrutural relevante.

Exemplo:

```text
1.4.2 → 1.4.3
```

---

## 62. Versão do contrato

O contrato deverá possuir versão própria, ainda que esteja relacionado a uma versão de esquema.

---

## 63. Versão do esquema

O esquema deverá possuir versão explicitamente identificada.

---

## 64. Versão do conjunto de dados

O conjunto de dados poderá possuir versão distinta da versão do esquema.

---

## 65. Separação de versões

Deverão ser distinguidas:

```text
contractVersion
schemaVersion
datasetVersion
editionVersion
```

---

## 66. Versão da edição

A versão da edição não deverá ser confundida com a versão do esquema.

---

## 67. Compatibilidade retroativa

Compatibilidade retroativa é a capacidade de uma versão nova compreender dados produzidos por versões anteriores.

---

## 68. Exemplo de compatibilidade retroativa

A inclusão de campo opcional geralmente poderá ser compatível com dados antigos.

---

## 69. Compatibilidade progressiva

Compatibilidade progressiva é a capacidade de consumidores antigos processarem dados produzidos por versões novas.

---

## 70. Compatibilidade completa

Compatibilidade completa ocorre quando versões antigas e novas podem interagir em ambas as direções dentro das regras estabelecidas.

---

## 71. Modos de compatibilidade

Os modos oficiais poderão ser:

```text
NONE
BACKWARD
FORWARD
FULL
```

---

## 72. Política de compatibilidade

Cada contrato deverá informar:

```text
compatibilityMode
supportedVersions
minimumConsumerVersion
```

---

## 73. Mudança compatível

Poderão ser compatíveis, conforme análise:

- inclusão de campo opcional;
- inclusão de valor não obrigatório;
- ampliação controlada de tamanho;
- inclusão de metadado;
- correção documental;
- adição de descrição;
- inclusão de alias preservando o nome anterior.

---

## 74. Mudança potencialmente incompatível

Poderão ser incompatíveis:

- renomear campo;
- remover campo;
- alterar tipo;
- tornar campo opcional obrigatório;
- reduzir domínio;
- alterar significado;
- modificar identificador;
- mudar cardinalidade;
- alterar formato temporal;
- reutilizar código descontinuado.

---

## 75. Inclusão de campo

Toda inclusão deverá registrar:

- nome;
- finalidade;
- tipo;
- obrigatoriedade;
- valor padrão;
- impacto;
- versão;
- consumidor afetado.

---

## 76. Inclusão de campo obrigatório

Campo obrigatório novo somente deverá ser introduzido quando houver:

- período de transição;
- valor de migração;
- validação;
- comunicação;
- atualização dos consumidores;
- versão principal quando necessário.

---

## 77. Alteração de campo

Toda alteração deverá identificar:

- estado anterior;
- estado novo;
- justificativa;
- compatibilidade;
- impacto;
- migração;
- data de vigência.

---

## 78. Renomeação de campo

Renomeações deverão preservar temporariamente o nome anterior por:

- alias;
- campo legado;
- adaptador;
- transformação;
- documentação.

---

## 79. Alteração de tipo

Alterações de tipo deverão possuir análise de conversão e perda.

Exemplo de alto risco:

```text
string → integer
```

---

## 80. Alteração de significado

A alteração semântica de um campo deverá ser tratada como mudança estrutural relevante, mesmo que o tipo técnico permaneça igual.

---

## 81. Alteração de domínio

A inclusão ou remoção de valores permitidos deverá ser avaliada quanto à compatibilidade com consumidores.

---

## 82. Descontinuação de campo

A descontinuação deverá ocorrer em etapas controladas.

---

## 83. Etapas de descontinuação

1. identificação;

2. justificativa;

3. marcação como depreciado;

4. comunicação;

5. período de transição;

6. migração dos consumidores;

7. preservação histórica;

8. retirada na versão apropriada.

---

## 84. Campo depreciado

Durante o período de transição, deverá permanecer:

- documentado;
- validável;
- legível;
- rastreável;
- vinculado ao substituto.

---

## 85. Campo substituto

A substituição deverá registrar:

```text
deprecatedField
replacementField
deprecatedSince
removalVersion
```

---

## 86. Proibição de remoção silenciosa

Nenhum campo relevante deverá ser removido sem:

- versão;
- justificativa;
- comunicação;
- análise de impacto;
- migração;
- preservação do histórico.

---

## 87. Descontinuação de valor enumerado

Valores descontinuados não deverão ser reutilizados com significado diferente.

---

## 88. Códigos reservados

Códigos históricos poderão permanecer reservados indefinidamente.

---

## 89. Mudanças incompatíveis

Toda mudança incompatível deverá:

- alterar a versão principal;
- possuir análise de impacto;
- possuir plano de migração;
- possuir período de transição;
- possuir testes;
- possuir aprovação;
- preservar a versão anterior.

---

## 90. Registro da mudança

```text
changeId
contractId
previousVersion
newVersion
changeType
compatibilityImpact
effectiveDate
approvedBy
```

---

## 91. Tipos de mudança

```text
ADDITION
MODIFICATION
DEPRECATION
REMOVAL
RENAMING
TYPE_CHANGE
DOMAIN_CHANGE
CARDINALITY_CHANGE
SEMANTIC_CHANGE
```

---

## 92. Classificação do impacto

```text
LOW
MODERATE
HIGH
CRITICAL
MAXIMUM
```

---

## 93. Mudança de impacto máximo

Será de impacto máximo quando comprometer:

- dados da edição fundadora;
- identificadores permanentes;
- integridade histórica;
- preservação;
- autenticidade;
- múltiplos consumidores críticos.

---

## 94. Período de transição

Toda mudança relevante deverá possuir prazo formal de transição.

---

## 95. Elementos do período de transição

```text
transitionStart
transitionEnd
supportedOldVersion
supportedNewVersion
migrationDeadline
```

---

## 96. Operação paralela

Versões antiga e nova poderão coexistir temporariamente.

---

## 97. Adaptadores

Poderão ser utilizados adaptadores para converter estruturas entre versões.

---

## 98. Transformadores

Toda transformação deverá ser:

- documentada;
- versionada;
- testada;
- reversível quando possível;
- auditável.

---

## 99. Mapeamento entre versões

```text
sourceField
targetField
transformationRule
defaultValue
lossRisk
```

---

## 100. Plano de migração

Mudanças relevantes deverão possuir plano contendo:

- origem;
- destino;
- versões;
- campos;
- regras;
- validação;
- backup;
- retorno;
- responsabilidades;
- evidências.

---

## 101. Migração automática

Poderá ser utilizada quando:

- a regra for determinística;
- os riscos estiverem controlados;
- os testes estiverem aprovados;
- os registros forem auditáveis;
- houver plano de retorno.

---

## 102. Migração manual

Deverá ser utilizada quando houver:

- interpretação;
- contexto cultural;
- conflito de fonte;
- dado histórico sensível;
- baixa confiança na automação.

---

## 103. Migração híbrida

Poderá combinar transformação automática com validação humana.

---

## 104. Preservação do valor original

Toda migração deverá preservar o valor original quando houver transformação material.

---

## 105. Registro da transformação

```text
originalValue
transformedValue
transformationRule
transformedAt
transformedBy
validationStatus
```

---

## 106. Plano de retorno

Toda mudança estrutural de alto impacto deverá possuir mecanismo de retorno.

---

## 107. Reversibilidade

A reversibilidade deverá considerar:

- dados;
- esquemas;
- consumidores;
- integrações;
- publicações;
- versões;
- identificadores.

---

## 108. Validação do contrato

Todo contrato deverá ser validado antes de entrar em vigor.

---

## 109. Validação estrutural

Deverá verificar:

- presença dos elementos obrigatórios;
- tipos;
- formatos;
- sintaxe;
- versão;
- identificadores;
- referências.

---

## 110. Validação semântica

Deverá verificar:

- significado;
- coerência;
- contexto;
- denominações;
- finalidade;
- compatibilidade cultural.

---

## 111. Validação referencial

Deverá verificar:

- vínculos;
- identificadores;
- entidades;
- cardinalidades;
- referências órfãs.

---

## 112. Validação temporal

Deverá verificar:

- vigência;
- datas;
- transição;
- versão;
- edição;
- prazos de descontinuação.

---

## 113. Validação humana

Será obrigatória quando o contrato afetar:

- pessoas;
- grupos tradicionais;
- memória;
- funções culturais;
- dados pessoais;
- direitos;
- edição fundadora;
- publicação institucional.

---

## 114. Testes de contrato

Poderão incluir:

- testes positivos;
- testes negativos;
- testes de limites;
- testes condicionais;
- testes referenciais;
- testes de integração;
- testes de migração;
- testes de compatibilidade.

---

## 115. Teste positivo

Verifica se dados válidos são aceitos.

---

## 116. Teste negativo

Verifica se dados inválidos são rejeitados.

---

## 117. Teste de regressão

Verifica se mudanças novas não rompem comportamentos anteriormente válidos.

---

## 118. Teste de compatibilidade retroativa

Deverá utilizar dados históricos contra a nova versão do esquema.

---

## 119. Teste de compatibilidade progressiva

Deverá verificar se consumidores antigos conseguem tratar dados novos dentro da política definida.

---

## 120. Teste entre versões

Deverá comparar:

```text
v1 → v2
v2 → v1
```

quando a reversibilidade for exigida.

---

## 121. Matriz de compatibilidade

| Produtor | Consumidor | Resultado esperado |
|---|---|---|
| Versão antiga | Consumidor antigo | Compatível |
| Versão antiga | Consumidor novo | Compatível retroativamente |
| Versão nova | Consumidor antigo | Conforme política progressiva |
| Versão nova | Consumidor novo | Compatível |

---

## 122. Estados do teste

```text
PASSED
PASSED_WITH_RESTRICTIONS
FAILED
INCONCLUSIVE
```

---

## 123. Evidências dos testes

Deverão ser preservados:

- dados de entrada;
- resultado;
- erros;
- versão;
- ambiente;
- responsável;
- data;
- aprovação.

---

## 124. Registro do teste

```text
testId
contractId
schemaVersion
testType
result
executedAt
executedBy
evidenceId
```

---

## 125. Publicação do contrato

O contrato aprovado deverá ser publicado em localização oficial, acessível aos responsáveis autorizados.

---

## 126. Estados do contrato

```text
DRAFT
UNDER_REVIEW
APPROVED
ACTIVE
DEPRECATED
RETIRED
ARCHIVED
```

---

## 127. Estado de rascunho

`DRAFT` indica contrato em elaboração.

---

## 128. Estado em revisão

`UNDER_REVIEW` indica análise técnica, institucional ou cultural.

---

## 129. Estado aprovado

`APPROVED` indica autorização formal, ainda que a vigência futura não tenha iniciado.

---

## 130. Estado ativo

`ACTIVE` indica contrato vigente.

---

## 131. Estado depreciado

`DEPRECATED` indica contrato ainda suportado, mas em processo de substituição.

---

## 132. Estado retirado

`RETIRED` indica contrato não utilizado para novos dados.

---

## 133. Estado arquivado

`ARCHIVED` indica preservação histórica sem uso operacional ativo.

---

## 134. Data de vigência

Todo contrato deverá possuir:

```text
effectiveFrom
effectiveUntil
```

quando aplicável.

---

## 135. Notificação de mudança

Mudanças deverão ser comunicadas aos produtores, consumidores, responsáveis e auditores afetados.

---

## 136. Conteúdo da notificação

A notificação deverá informar:

- contrato;
- versão atual;
- nova versão;
- mudança;
- impacto;
- prazo;
- migração;
- ação necessária;
- responsável;
- canal de suporte.

---

## 137. Antecedência

Mudanças incompatíveis deverão ser comunicadas com antecedência proporcional ao impacto.

---

## 138. Registro da comunicação

```text
notificationId
changeId
recipients
sentAt
channel
acknowledgementStatus
```

---

## 139. Confirmação de ciência

Mudanças críticas poderão exigir confirmação formal de ciência.

---

## 140. Canal institucional

A comunicação deverá utilizar canal institucional preservável e auditável.

---

## 141. Comunicação pública

Quando o contrato afetar dados públicos, a alteração poderá exigir nota de versão ou documentação pública.

---

## 142. Responsabilidades

| Atividade | Responsabilidade principal |
|---|---|
| Definir contrato | Governança de dados |
| Definir esquema | Arquitetura e responsáveis pelos dados |
| Produzir dados | Produtor oficial |
| Consumir dados | Consumidor autorizado |
| Validar estrutura | Equipe técnica |
| Validar significado | Steward e curadoria |
| Aprovar evolução | Autoridade institucional |
| Executar migração | Equipe autorizada |
| Preservar versões | Gestão documental |
| Testar compatibilidade | Equipe técnica e consumidores |
| Auditar contratos | Auditoria institucional |
| Proteger edição fundadora | Governança superior |

---

## 143. Governança de dados

Deverá:

- definir padrões;
- aprovar contratos;
- arbitrar conflitos;
- controlar versões;
- estabelecer compatibilidade;
- supervisionar mudanças.

---

## 144. Arquitetura de dados

Deverá:

- modelar estruturas;
- avaliar impactos;
- garantir interoperabilidade;
- definir migrações;
- preservar coerência arquitetural.

---

## 145. Proprietário do dado

Deverá:

- aprovar finalidade;
- classificar criticidade;
- validar significado;
- definir consumidores;
- avaliar riscos;
- autorizar mudanças relevantes.

---

## 146. Steward de dados

Deverá:

- manter definições;
- validar campos;
- acompanhar qualidade;
- verificar vocabulários;
- analisar incompatibilidades;
- preservar rastreabilidade.

---

## 147. Produtor de dados

Deverá garantir a conformidade dos dados produzidos com o contrato vigente.

---

## 148. Consumidor de dados

Deverá evitar dependências implícitas em campos ou comportamentos não definidos no contrato.

---

## 149. Equipe técnica

Deverá:

- implementar esquemas;
- automatizar validações;
- executar testes;
- registrar erros;
- preservar logs;
- apoiar migrações.

---

## 150. Curadoria cultural

Deverá participar quando campos, domínios ou estruturas representarem:

- tradições;
- grupos;
- funções;
- memória;
- nomes;
- saberes;
- imagens;
- narrativas;
- práticas culturais.

---

## 151. Gestão documental

Deverá:

- preservar contratos;
- preservar esquemas;
- manter versões;
- controlar vigência;
- preservar relatórios;
- manter cadeia de custódia.

---

## 152. Auditoria

Deverá verificar:

- existência dos contratos;
- conformidade;
- versões;
- compatibilidade;
- comunicação;
- migração;
- testes;
- preservação;
- proteção fundadora.

---

## 153. Governança das mudanças

Toda mudança deverá seguir fluxo controlado.

---

## 154. Fluxo mínimo de mudança

1. solicitação;

2. justificativa;

3. análise de impacto;

4. classificação;

5. proposta de versão;

6. revisão;

7. testes;

8. aprovação;

9. comunicação;

10. migração;

11. ativação;

12. monitoramento;

13. auditoria;

14. preservação.

---

## 155. Solicitação de mudança

```text
changeRequestId
contractId
requestedBy
reason
proposedChange
expectedImpact
requestedAt
```

---

## 156. Análise de impacto

Deverá avaliar:

- produtores;
- consumidores;
- dados existentes;
- sistemas;
- documentos;
- integrações;
- migrações;
- edição fundadora;
- custos;
- riscos;
- prazos.

---

## 157. Aprovação da mudança

A aprovação deverá ser proporcional à criticidade.

---

## 158. Mudança emergencial

Mudanças emergenciais somente poderão ocorrer para:

- corrigir falha crítica;
- proteger dados;
- restaurar continuidade;
- impedir exposição;
- preservar a edição fundadora.

---

## 159. Requisitos da mudança emergencial

Deverá possuir:

- justificativa;
- autoridade;
- backup;
- evidências;
- registro;
- validação posterior;
- revisão institucional;
- plano de estabilização.

---

## 160. Proibição de emergência artificial

A falta de planejamento não deverá ser utilizada para eliminar controles de mudança.

---

## 161. Exceções

Exceções somente poderão ocorrer quando:

- houver justificativa;
- o risco estiver avaliado;
- o escopo estiver definido;
- o responsável estiver identificado;
- o prazo estiver limitado;
- houver controle compensatório;
- a autoridade competente aprovar;
- a edição fundadora permanecer protegida.

---

## 162. Monitoramento dos contratos

Deverão ser monitorados:

- validações;
- falhas;
- versões em uso;
- consumidores desatualizados;
- campos depreciados;
- prazos de transição;
- incompatibilidades;
- migrações pendentes.

---

## 163. Indicadores

Poderão ser utilizados:

- contratos ativos;
- contratos sem proprietário;
- versões suportadas;
- falhas de validação;
- consumidores desatualizados;
- campos depreciados;
- mudanças incompatíveis;
- migrações concluídas;
- testes aprovados.

---

## 164. Taxa de conformidade contratual

```text
Registros conformes
------------------- × 100
Registros avaliados
```

---

## 165. Taxa de compatibilidade

```text
Testes de compatibilidade aprovados
----------------------------------- × 100
Testes de compatibilidade executados
```

---

## 166. Cobertura de contratos

```text
Conjuntos críticos com contrato
------------------------------- × 100
Conjuntos críticos identificados
```

---

## 167. Consumidores atualizados

```text
Consumidores em versão suportada
-------------------------------- × 100
Consumidores conhecidos
```

---

## 168. Alertas

Deverão ser gerados para:

- contrato inexistente;
- versão não suportada;
- esquema divergente;
- campo obrigatório ausente;
- tipo incompatível;
- consumidor desatualizado;
- período de transição vencido;
- migração falha;
- alteração fundadora não autorizada.

---

## 169. Não conformidades

Serão consideradas não conformidades:

- conjunto crítico sem contrato;
- contrato sem versão;
- esquema sem proprietário;
- alteração sem aprovação;
- campo removido silenciosamente;
- migração sem validação;
- incompatibilidade não comunicada;
- consumidor crítico em versão retirada;
- esquema histórico ausente;
- modificação indevida da edição fundadora.

---

## 170. Classificação das não conformidades

| Nível | Definição |
|---|---|
| Baixa | Falha documental de impacto limitado |
| Média | Compromete clareza ou manutenção |
| Alta | Compromete integração ou operação |
| Crítica | Compromete dados, segurança ou continuidade |
| Máxima | Compromete a edição fundadora ou a memória institucional |

---

## 171. Tratamento das não conformidades

Toda não conformidade deverá ser:

1. identificada;

2. registrada;

3. classificada;

4. atribuída;

5. investigada;

6. corrigida;

7. testada;

8. reconciliada;

9. aprovada;

10. auditada;

11. preservada como evidência.

---

## 172. Preservação dos contratos históricos

Todo contrato substituído deverá permanecer:

- identificado;
- versionado;
- legível;
- recuperável;
- relacionado ao sucessor;
- associado aos dados correspondentes.

---

## 173. Preservação dos esquemas históricos

Esquemas antigos deverão permanecer disponíveis para:

- leitura;
- validação;
- auditoria;
- migração;
- recuperação;
- interpretação histórica.

---

## 174. Preservação das regras

Regras de validação antigas deverão permanecer associadas à versão correspondente.

---

## 175. Preservação das migrações

Scripts, mapeamentos, relatórios e evidências de migração deverão ser preservados conforme criticidade.

---

## 176. Preservação dos exemplos

Exemplos válidos e inválidos poderão ser preservados para apoiar testes e interpretação.

---

## 177. Preservação de consumidores históricos

Quando possível, deverão permanecer documentadas as aplicações e versões que consumiram cada contrato.

---

## 178. Proteção da edição fundadora

Os contratos e esquemas relacionados à FESTANÇA 2026 deverão possuir proteção máxima.

---

## 179. Contratos fundadores prioritários

Deverão ser preservados, quando aplicável:

- contrato da programação;
- contrato dos festeiros;
- contrato dos locais;
- contrato das atividades;
- contrato dos grupos;
- contrato das mídias;
- contrato dos metadados;
- contrato das publicações;
- contrato das edições;
- contrato das migrações.

---

## 180. Esquemas fundadores

Todo esquema utilizado para produzir, validar, migrar ou publicar dados de 2026 deverá permanecer preservado.

---

## 181. Imutabilidade histórica

A versão fundadora não deverá ser reescrita silenciosamente para refletir regras posteriores.

---

## 182. Correções em esquema fundador

Correções deverão produzir nova versão, preservando:

- versão anterior;
- justificativa;
- diferença;
- responsável;
- aprovação;
- impacto;
- evidências.

---

## 183. Migração de dados fundadores

Toda migração deverá preservar:

- valores originais;
- identificadores;
- relacionamentos;
- versões;
- esquemas;
- metadados;
- fontes;
- checksums;
- relatórios.

---

## 184. Validação fundadora

Dados de 2026 deverão poder ser validados com o esquema correspondente à sua versão histórica.

---

## 185. Compatibilidade com futuras edições

Futuras edições poderão evoluir sem impor alteração retroativa indevida aos dados de 2026.

---

## 186. Separação entre núcleo e edição

O contrato deverá distinguir:

- dados permanentes;
- dados anuais;
- dados compartilhados;
- metadados;
- registros históricos;
- referências institucionais.

---

## 187. Proibição de mistura estrutural

Campos específicos de uma edição não deverão ser incorporados ao núcleo permanente sem análise formal.

---

## 188. Lista mínima de criação do contrato

- [ ] identificador definido;
- [ ] nome canônico definido;
- [ ] finalidade descrita;
- [ ] produtor identificado;
- [ ] consumidores identificados;
- [ ] proprietário definido;
- [ ] esquema associado;
- [ ] versão definida;
- [ ] compatibilidade definida;
- [ ] validações definidas;
- [ ] responsabilidades registradas;
- [ ] preservação prevista.

---

## 189. Lista mínima de criação do esquema

- [ ] entidades definidas;
- [ ] campos definidos;
- [ ] tipos definidos;
- [ ] formatos definidos;
- [ ] obrigatoriedade definida;
- [ ] domínios definidos;
- [ ] relacionamentos definidos;
- [ ] regras condicionais definidas;
- [ ] exemplos preparados;
- [ ] versão registrada;
- [ ] testes preparados;
- [ ] aprovação obtida.

---

## 190. Lista mínima de alteração

- [ ] solicitação registrada;
- [ ] justificativa apresentada;
- [ ] impacto avaliado;
- [ ] compatibilidade classificada;
- [ ] nova versão definida;
- [ ] consumidores analisados;
- [ ] migração planejada;
- [ ] testes executados;
- [ ] comunicação preparada;
- [ ] aprovação obtida;
- [ ] plano de retorno definido;
- [ ] histórico preservado.

---

## 191. Lista mínima de descontinuação

- [ ] objeto identificado;
- [ ] substituto definido;
- [ ] motivo registrado;
- [ ] consumidores notificados;
- [ ] período de transição definido;
- [ ] migração disponível;
- [ ] documentação atualizada;
- [ ] códigos preservados;
- [ ] versão histórica arquivada;
- [ ] retirada autorizada.

---

## 192. Lista mínima de migração

- [ ] origem identificada;
- [ ] destino identificado;
- [ ] versões registradas;
- [ ] mapeamento concluído;
- [ ] transformações documentadas;
- [ ] backup validado;
- [ ] testes aprovados;
- [ ] execução registrada;
- [ ] reconciliação concluída;
- [ ] evidências preservadas;
- [ ] retorno testado;
- [ ] aprovação final obtida.

---

## 193. Lista mínima de encerramento de versão

- [ ] consumidores migrados;
- [ ] prazo encerrado;
- [ ] contratos atualizados;
- [ ] esquema arquivado;
- [ ] documentação preservada;
- [ ] dados históricos acessíveis;
- [ ] migrações preservadas;
- [ ] riscos residuais registrados;
- [ ] aprovação obtida;
- [ ] proteção fundadora confirmada.

---

## 194. Declaração constitucional

Este documento declara que:

1. nenhum conjunto de dados crítico permanecerá sem contrato formal;

2. nenhum esquema será alterado silenciosamente;

3. nenhum campo relevante será removido sem transição;

4. nenhuma mudança incompatível será publicada sem nova versão principal;

5. nenhum consumidor crítico será ignorado durante a evolução;

6. nenhuma migração será considerada concluída sem reconciliação;

7. nenhuma versão histórica será apagada por obsolescência operacional;

8. nenhum valor fundador será transformado sem preservação da origem;

9. nenhuma automação alterará contratos críticos sem aprovação humana;

10. nenhuma edição futura reescreverá os esquemas da edição fundadora;

11. todo contrato deverá ser identificável, versionável, validável, compatível, migrável e auditável.

---

## 195. Princípio maior

**CONTRATAR ANTES DE INTEGRAR.**

**DEFINIR ANTES DE PRODUZIR.**

**DOCUMENTAR ANTES DE CONSUMIR.**

**VERSIONAR ANTES DE ALTERAR.**

**TESTAR ANTES DE PUBLICAR.**

**COMUNICAR ANTES DE ROMPER.**

**DEPRECIAR ANTES DE REMOVER.**

**MIGRAR ANTES DE DESCONTINUAR.**

**RECONCILIAR ANTES DE ENCERRAR.**

**PRESERVAR ANTES DE SUBSTITUIR.**

**CORRIGIR SEM APAGAR O ESQUEMA ANTERIOR.**

**EVOLUIR SEM PERDER A COMPATIBILIDADE HISTÓRICA.**

**MODERNIZAR SEM COMPROMETER A EDIÇÃO FUNDADORA.**

---

## 196. Compromisso permanente

Todo contrato de dados e toda evolução de esquema deverão proteger simultaneamente:

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
- os pesquisadores;
- os curadores;
- os produtores;
- os consumidores;
- os desenvolvedores;
- os auditores;
- a cultura;
- a história;
- a memória;
- a fé;
- as tradições;
- os conhecimentos;
- os nomes;
- as funções;
- os documentos;
- os dados;
- os registros;
- os campos;
- os tipos;
- os formatos;
- os domínios;
- os identificadores;
- as referências;
- os relacionamentos;
- os metadados;
- os catálogos;
- os esquemas;
- os contratos;
- as versões;
- as validações;
- as integrações;
- as migrações;
- as evidências;
- as publicações;
- a governança;
- a edição fundadora;
- as futuras edições;
- a continuidade;
- o patrimônio;
- o futuro.

---

## 197. Referências institucionais essenciais

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
- `docs/festanca/data/master-data-and-reference-data-model.md`;
- `docs/festanca/data/metadata-and-data-catalog-model.md`;
- `docs/festanca/data/data-observability-and-monitoring-model.md`;
- `docs/festanca/data/data-backup-recovery-and-restoration-model.md`;
- `docs/festanca/data/data-audit-and-reconciliation-model.md`;
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
- `docs/festanca/governance/artificial-intelligence-and-automation-policy.md`;
- `docs/festanca/governance/technology-architecture-and-interoperability-policy.md`;
- `docs/festanca/governance/risk-management-and-resilience-policy.md`;
- `docs/festanca/governance/change-control-policy.md`;
- `docs/festanca/governance/audit-and-compliance-policy.md`.

---

## 198. Estado inicial deste documento

```text
DOCUMENTO: data-contracts-and-schema-evolution-model.md
FUNÇÃO: Gestão constitucional de contratos de dados e evolução de esquemas
REGIME: Permanente
EDIÇÃO FUNDADORA: FESTANÇA 2026
CRITICIDADE: Máxima
MUTABILIDADE: Estritamente controlada
PRESERVAÇÃO: Integral
CONTRATOS DE DADOS: Obrigatórios para conjuntos críticos
PRODUTORES: Formalmente identificados
CONSUMIDORES: Registrados quando conhecidos
ESQUEMAS OFICIAIS: Obrigatórios
CAMPOS OBRIGATÓRIOS: Formalmente definidos
CAMPOS OPCIONAIS: Documentados
TIPOS E FORMATOS: Obrigatórios
DOMÍNIOS PERMITIDOS: Controlados
COMPATIBILIDADE RETROATIVA: Avaliada
COMPATIBILIDADE PROGRESSIVA: Avaliada quando aplicável
VERSIONAMENTO SEMÂNTICO: Obrigatório
INCLUSÃO DE CAMPOS: Controlada
ALTERAÇÃO DE CAMPOS: Versionada
DESCONTINUAÇÃO DE CAMPOS: Gradual
MUDANÇAS INCOMPATÍVEIS: Exigem versão principal
PERÍODOS DE TRANSIÇÃO: Obrigatórios
VALIDAÇÃO DE CONTRATOS: Obrigatória
TESTES DE COMPATIBILIDADE: Obrigatórios
TESTES DE REGRESSÃO: Obrigatórios quando aplicáveis
NOTIFICAÇÕES DE MUDANÇA: Formalizadas
RESPONSABILIDADES: Definidas
MIGRAÇÃO ENTRE VERSÕES: Controlada
PLANO DE RETORNO: Obrigatório para mudanças críticas
PRESERVAÇÃO DOS CONTRATOS HISTÓRICOS: Permanente
PRESERVAÇÃO DOS ESQUEMAS HISTÓRICOS: Permanente
ALTERAÇÕES SILENCIOSAS: Proibidas
APROVAÇÃO HUMANA: Obrigatória para mudanças críticas
PROTEÇÃO DOS CONTRATOS FUNDADORES: Máxima
PROTEÇÃO DOS ESQUEMAS FUNDADORES: Máxima
RASTREABILIDADE: Integral
APLICABILIDADE: Portal Permanente e edições anuais
```

---

## 199. Vigência

Este documento entra em vigor a partir de sua aprovação e publicação no repositório oficial.

Sua vigência será permanente.

Toda revisão deverá:

- preservar as versões anteriores;
- registrar justificativas;
- identificar responsáveis;
- apresentar análise de impacto;
- preservar contratos anteriores;
- preservar esquemas anteriores;
- preservar regras de validação históricas;
- documentar alterações de compatibilidade;
- registrar consumidores afetados;
- preservar notificações de mudança;
- manter relatórios de testes;
- preservar mapeamentos de migração;
- preservar evidências de reconciliação;
- documentar alterações de responsabilidades;
- manter compatibilidade histórica;
- proteger dados pessoais;
- proteger os contratos da edição fundadora;
- proteger os esquemas da edição fundadora;
- respeitar os modelos constitucionais de dados;
- assegurar rastreabilidade integral.

---

## 200. Encerramento institucional

Seguimos juntos, passo a passo.

Com método.

Com segurança.

Com preservação integral da edição fundadora.

**SOMOS TODOS, AVANÇO.**

Ao encontro do futuro.

**AMÉM.**
