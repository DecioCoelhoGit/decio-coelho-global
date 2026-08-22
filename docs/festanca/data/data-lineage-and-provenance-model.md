# Modelo Constitucional de Linhagem, Proveniência e Rastreabilidade de Dados do Portal Permanente da FESTANÇA

> Constituição destinada a regulamentar a origem, a autoria, a responsabilidade, as fontes, as transformações, os relacionamentos, as validações, as versões, os níveis de confiança, os conflitos, as publicações, as automações, o uso de inteligência artificial e a preservação das evidências relacionadas aos dados do Portal Permanente da FESTANÇA de Vila Bela da Santíssima Trindade — Mato Grosso — Brasil.

---

## 1. Identificação do documento

| Campo | Conteúdo |
|---|---|
| Documento | Modelo Constitucional de Linhagem, Proveniência e Rastreabilidade de Dados do Portal Permanente da FESTANÇA |
| Caminho oficial | `docs/festanca/data/data-lineage-and-provenance-model.md` |
| Classificação | Documento constitucional de dados |
| Domínio | Linhagem, proveniência, rastreabilidade e evidências |
| Regime | Permanente |
| Criticidade | Máxima |
| Mutabilidade | Estritamente controlada |
| Preservação | Integral, auditável, versionada e recuperável |
| Edição fundadora | FESTANÇA 2026 |
| Situação | Constituição de linhagem e proveniência de dados |
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

---

## 2. Finalidade

Este documento estabelece o regime constitucional de linhagem, proveniência e rastreabilidade dos dados utilizados pelo Portal Permanente da FESTANÇA.

Sua finalidade é assegurar que todo dado institucionalmente relevante possa demonstrar:

- de onde veio;
- quem o forneceu;
- quem o registrou;
- quem o validou;
- quem o aprovou;
- quando foi criado;
- quando foi alterado;
- quais fontes o sustentam;
- quais transformações sofreu;
- quais versões existiram;
- quais registros estão relacionados;
- como chegou à publicação;
- qual é seu nível de confiança;
- quais divergências permanecem;
- quais evidências deverão ser preservadas.

Nenhum dado deverá ser considerado plenamente institucional sem origem, contexto, responsabilidade e histórico minimamente rastreáveis.

---

## 3. Objetivos estratégicos

São objetivos permanentes deste Modelo:

1. registrar a origem dos dados;

2. distinguir fontes primárias e secundárias;

3. identificar autoria, fornecimento, registro e validação;

4. documentar transformações;

5. preservar o histórico de alterações;

6. manter vínculos entre registros;

7. identificar dados derivados;

8. preservar evidências de validação;

9. rastrear o percurso entre origem e publicação;

10. controlar versões;

11. tratar conflitos de fontes;

12. definir níveis de confiança;

13. regulamentar proveniência documental;

14. regulamentar proveniência audiovisual;

15. regulamentar proveniência automatizada;

16. registrar o uso de inteligência artificial;

17. permitir auditoria integral;

18. preservar evidências históricas;

19. proteger a autenticidade cultural;

20. preservar integralmente a edição fundadora.

---

## 4. Princípios fundamentais

Toda gestão de linhagem e proveniência deverá observar:

- origem identificável;
- autoria responsável;
- fonte verificável;
- contexto preservado;
- transformação documentada;
- versionamento;
- integridade;
- autenticidade;
- rastreabilidade;
- transparência;
- auditabilidade;
- reversibilidade informacional;
- respeito às divergências;
- proteção de dados pessoais;
- proteção cultural;
- preservação histórica;
- supervisão humana;
- continuidade institucional.

---

## 5. Conceito de linhagem

Linhagem de dados é o registro do percurso realizado por um dado desde sua origem até seu estado atual.

Ela deverá demonstrar:

```text
ORIGEM
   ↓
RECEBIMENTO
   ↓
REGISTRO
   ↓
CLASSIFICAÇÃO
   ↓
VALIDAÇÃO
   ↓
TRANSFORMAÇÃO
   ↓
APROVAÇÃO
   ↓
PUBLICAÇÃO
   ↓
ATUALIZAÇÃO
   ↓
ARQUIVAMENTO
   ↓
PRESERVAÇÃO
```

---

## 6. Conceito de proveniência

Proveniência é o conjunto de informações que demonstra a origem, o contexto, a responsabilidade e as condições de produção ou obtenção de determinado dado.

---

## 7. Conceito de rastreabilidade

Rastreabilidade é a capacidade de reconstruir, verificar e auditar o histórico completo de um dado.

Ela deverá permitir responder:

```text
QUEM?
O QUÊ?
QUANDO?
ONDE?
COMO?
POR QUÊ?
COM QUAL FONTE?
COM QUAL AUTORIZAÇÃO?
COM QUAL RESULTADO?
```

---

## 8. Conceito de evidência

Evidência é qualquer registro capaz de sustentar:

- a origem;
- a autenticidade;
- a autoria;
- a validação;
- a aprovação;
- a transformação;
- a publicação;
- a correção;
- a decisão institucional.

---

## 9. Linhagem não é simples histórico técnico

A linhagem deverá abranger simultaneamente:

- história;
- cultura;
- pessoas;
- documentos;
- fontes;
- sistemas;
- decisões;
- transformações;
- responsabilidades;
- versões;
- evidências.

---

## 10. Escopo

Este Modelo aplica-se a:

- dados permanentes;
- dados anuais;
- dados compartilhados;
- documentos;
- programações;
- atividades;
- pessoas;
- funções;
- grupos tradicionais;
- locais;
- fontes;
- autorizações;
- publicações;
- imagens;
- áudios;
- vídeos;
- entrevistas;
- transmissões;
- dados derivados;
- dados migrados;
- dados automatizados;
- dados produzidos ou modificados com inteligência artificial;
- registros históricos;
- metadados;
- logs;
- relatórios;
- bases estruturadas;
- arquivos preservados.

---

## 11. Elementos mínimos de proveniência

Todo dado crítico deverá possuir, quando aplicável:

```text
entityId
sourceId
sourceType
providedBy
recordedBy
createdAt
receivedAt
validatedBy
validatedAt
approvedBy
approvedAt
transformationHistory
version
confidenceLevel
publicationStatus
evidenceIds
```

---

## 12. Identificador da linhagem

Cada cadeia de linhagem deverá possuir identificador único.

Exemplo:

```text
lineage-festanca-2026-activity-0001
```

---

## 13. Registro de proveniência

O registro poderá utilizar estrutura semelhante a:

```json
{
  "entityId": "activity-2026-001",
  "sourceIds": [
    "source-coordenacao-001"
  ],
  "providedBy": "person-001",
  "recordedBy": "editor-001",
  "validatedBy": "reviewer-001",
  "confidenceLevel": "CONFIRMED",
  "version": "1.0.0"
}
```

---

## 14. Origem dos dados

A origem deverá ser classificada como:

- institucional;
- comunitária;
- documental;
- oral;
- audiovisual;
- bibliográfica;
- administrativa;
- tecnológica;
- automatizada;
- derivada;
- migrada;
- externa;
- desconhecida.

---

## 15. Origem institucional

É aquela fornecida ou produzida por:

- Coordenação-Geral;
- responsáveis oficiais;
- curadoria;
- organização;
- comissão;
- entidade pública competente;
- instância formalmente reconhecida.

---

## 16. Origem comunitária

É aquela fornecida por:

- moradores;
- famílias;
- festeiros;
- integrantes dos grupos tradicionais;
- participantes;
- detentores de memória;
- representantes comunitários.

---

## 17. Origem documental

É aquela proveniente de:

- documentos oficiais;
- livros;
- atas;
- programas;
- convites;
- cartazes;
- registros;
- fotografias;
- arquivos;
- publicações;
- correspondências;
- acervos.

---

## 18. Origem oral

É aquela proveniente de:

- entrevista;
- depoimento;
- testemunho;
- memória pessoal;
- narrativa comunitária;
- tradição oral.

A informação oral deverá manter identificação do contexto, quando autorizado.

---

## 19. Origem audiovisual

É aquela proveniente de:

- fotografia;
- gravação de áudio;
- vídeo;
- transmissão;
- documentário;
- registro de evento;
- entrevista audiovisual.

---

## 20. Origem automatizada

É aquela produzida por:

- sistema;
- serviço;
- integração;
- sensor;
- rotina;
- script;
- agente digital;
- inteligência artificial.

---

## 21. Origem derivada

É aquela gerada a partir de um ou mais dados existentes.

Ela deverá registrar obrigatoriamente:

```text
derivedFrom
derivationRule
generatedAt
generatedBy
validationStatus
```

---

## 22. Origem desconhecida

Dados com origem desconhecida deverão receber:

```text
sourceStatus: unidentified
```

Eles não deverão ser publicados como fatos confirmados.

---

## 23. Fontes primárias

Serão consideradas fontes primárias aquelas diretamente relacionadas ao fato, registro ou manifestação.

Exemplos:

- documento original;
- responsável oficial;
- participante direto;
- fotografia original;
- gravação original;
- programação aprovada;
- ata;
- autorização;
- comunicado institucional.

---

## 24. Fontes secundárias

Serão consideradas fontes secundárias aquelas que interpretam, reproduzem ou comentam fontes anteriores.

Exemplos:

- reportagem;
- artigo;
- livro posterior;
- reprodução;
- postagem;
- resumo;
- transcrição indireta;
- compilação.

---

## 25. Fontes terciárias

Serão consideradas terciárias aquelas que sintetizam ou indexam informações de outras fontes.

Exemplos:

- enciclopédias;
- catálogos;
- diretórios;
- índices;
- compilações gerais;
- sistemas agregadores.

---

## 26. Preferência por fontes primárias

Sempre que possível, dados críticos deverão ser sustentados por fontes primárias.

Fontes secundárias poderão complementar, contextualizar ou indicar caminhos de verificação.

---

## 27. Classificação das fontes

As fontes poderão ser classificadas como:

```text
PRIMARY
SECONDARY
TERTIARY
ORAL
COMMUNITY
INSTITUTIONAL
AUTOMATED
DERIVED
UNIDENTIFIED
```

---

## 28. Registro mínimo da fonte

Toda fonte deverá possuir:

```text
sourceId
sourceType
titleOrDescription
authorOrProvider
date
location
accessCondition
rightsStatus
preservationStatus
```

---

## 29. Fontes físicas

Fontes físicas deverão registrar:

- localização;
- titularidade;
- condição;
- responsável pela guarda;
- forma de consulta;
- reprodução disponível;
- restrições.

---

## 30. Fontes digitais

Fontes digitais deverão registrar:

- caminho;
- formato;
- versão;
- checksum;
- data de captura;
- responsável;
- estado de preservação;
- origem tecnológica.

---

## 31. Fontes externas

Fontes externas deverão registrar:

- instituição;
- autor;
- endereço de origem;
- data de acesso;
- direitos;
- versão consultada;
- evidência preservada quando permitido.

---

## 32. Fonte não equivale a confirmação

A existência de uma fonte não garante automaticamente a veracidade integral do conteúdo.

Toda fonte deverá ser avaliada quanto a:

- autenticidade;
- proximidade;
- contexto;
- coerência;
- interesse;
- integridade;
- temporalidade;
- confiabilidade.

---

## 33. Autoria

Autoria é a responsabilidade intelectual, cultural, artística, técnica ou documental pela criação de determinado conteúdo.

---

## 34. Fornecimento

O fornecedor da informação poderá ser diferente do autor.

Exemplo:

```text
Autor do documento: Coordenação-Geral
Fornecedor ao Portal: colaborador autorizado
Registrador no sistema: editor
```

---

## 35. Registro

O registrador é quem insere ou formaliza o dado no sistema.

A atividade de registro não transfere autoria.

---

## 36. Validação

O validador é quem verifica a conformidade, a coerência, a fonte, o contexto ou a legitimidade do dado.

---

## 37. Aprovação

O aprovador é quem autoriza a utilização ou publicação institucional.

---

## 38. Publicação

O publicador é quem executa a disponibilização em canal oficial.

Ele não deverá ser automaticamente considerado autor, validador ou aprovador.

---

## 39. Responsabilidades separadas

Sempre que aplicável, deverão ser distinguidos:

```text
author
provider
recorder
reviewer
validator
approver
publisher
custodian
```

---

## 40. Autoria coletiva

Conteúdos produzidos coletivamente poderão possuir:

- autoria institucional;
- autoria comunitária;
- autoria compartilhada;
- autoria de grupo tradicional;
- múltiplos autores identificados.

---

## 41. Autoria tradicional

Conhecimentos tradicionais deverão preservar:

- comunidade de origem;
- grupo detentor;
- contexto cultural;
- limites de atribuição individual;
- autorização;
- restrições.

---

## 42. Autoria desconhecida

Quando a autoria não puder ser identificada, deverá ser registrado:

```text
authorStatus: unidentified
```

Não deverá ser atribuída autoria presumida sem evidência.

---

## 43. Cadeia de transformação

Toda transformação deverá ser registrada como evento.

Exemplos:

- correção;
- padronização;
- normalização;
- tradução;
- conversão;
- resumo;
- transcrição;
- migração;
- anonimização;
- enriquecimento;
- classificação;
- agregação.

---

## 44. Evento de transformação

O evento deverá conter:

```text
transformationId
entityId
transformationType
inputVersion
outputVersion
rule
performedBy
performedAt
evidence
```

---

## 45. Valor original

Toda transformação material deverá preservar o valor original.

Exemplo:

```json
{
  "originalValue": "dia quinze de julho",
  "normalizedValue": "2026-07-15"
}
```

---

## 46. Proibição de transformação silenciosa

Nenhuma transformação material deverá ocorrer sem:

- registro;
- regra;
- responsável;
- data;
- justificativa;
- versão;
- evidência.

---

## 47. Transformações automatizadas

Transformações automatizadas deverão registrar:

```text
systemId
automationId
rulesVersion
executedAt
inputIds
outputIds
humanReviewStatus
```

---

## 48. Transformações humanas

Transformações humanas deverão registrar:

- responsável;
- função;
- justificativa;
- fonte;
- data;
- resultado;
- validação posterior.

---

## 49. Histórico de alterações

Todo dado crítico deverá possuir histórico cronológico das alterações.

---

## 50. Elementos do histórico

Cada alteração deverá registrar:

```text
changeId
entityId
previousValue
newValue
changedBy
changedAt
reason
sourceId
version
```

---

## 51. Alterações materiais

Serão consideradas materiais as alterações em:

- nomes;
- datas;
- horários;
- locais;
- funções;
- pessoas;
- grupos;
- fontes;
- autorizações;
- classificações;
- vínculos;
- direitos;
- status de publicação.

---

## 52. Alterações não materiais

Poderão ser consideradas não materiais:

- correção de espaço;
- ajuste tipográfico;
- padronização de pontuação;
- formatação sem mudança de conteúdo.

Mesmo assim, documentos constitucionais deverão manter versionamento.

---

## 53. Correção sem apagamento

A correção deverá preservar:

- conteúdo anterior;
- conteúdo corrigido;
- motivo;
- fonte;
- responsável;
- data;
- versão.

---

## 54. Vínculos entre registros

Todo vínculo deverá possuir:

- origem;
- destino;
- tipo;
- data;
- responsável;
- fonte;
- estado;
- edição;
- nível de confiança.

---

## 55. Tipos de vínculos

Poderão existir vínculos como:

```text
PERSON_PERFORMS_ROLE
ROLE_BELONGS_TO_EDITION
ACTIVITY_OCCURS_AT_LOCATION
DOCUMENT_SUPPORTS_ENTITY
MEDIA_RECORDS_ACTIVITY
SOURCE_CONFIRMS_RECORD
ENTITY_DERIVED_FROM_ENTITY
VERSION_SUPERSEDES_VERSION
```

---

## 56. Vínculo permanente

Vínculos permanentes são aqueles válidos independentemente da edição.

Exemplos:

- pessoa e sua identidade;
- grupo tradicional e sua denominação;
- local histórico e sua identidade institucional.

---

## 57. Vínculo anual

Vínculos anuais são aqueles válidos em edição específica.

Exemplos:

- pessoa como festeiro em 2026;
- grupo participando de atividade em 2026;
- local utilizado em determinada programação.

---

## 58. Dados derivados

Dados derivados deverão manter relação explícita com suas fontes.

---

## 59. Tipos de derivação

A derivação poderá ser:

- cálculo;
- agregação;
- resumo;
- classificação;
- inferência;
- consolidação;
- normalização;
- combinação;
- extração;
- tradução;
- transcrição.

---

## 60. Derivação verificável

Toda derivação deverá permitir a reconstrução do processo.

---

## 61. Inferências

Inferências deverão ser claramente identificadas como inferências.

Não deverão ser apresentadas como fatos confirmados.

---

## 62. Evidências de validação

Toda validação crítica deverá possuir evidência.

Poderão ser evidências:

- documento;
- captura;
- assinatura;
- ata;
- mensagem institucional;
- gravação autorizada;
- confirmação formal;
- registro no sistema;
- relatório;
- checklist.

---

## 63. Registro da validação

```text
validationId
entityId
validationType
validatedBy
validatedAt
sourceIds
result
observations
evidenceIds
```

---

## 64. Tipos de validação

A validação poderá ser:

- estrutural;
- semântica;
- documental;
- institucional;
- cultural;
- técnica;
- jurídica;
- editorial;
- humana;
- automatizada.

---

## 65. Validação humana

Dados críticos deverão possuir validação humana quando envolverem:

- nomes;
- funções;
- datas oficiais;
- programação;
- conhecimentos tradicionais;
- direitos;
- dados pessoais;
- publicação pública;
- edição fundadora.

---

## 66. Validação automatizada

A validação automatizada poderá verificar:

- formato;
- tipo;
- obrigatoriedade;
- domínio;
- duplicidade;
- integridade referencial;
- consistência técnica.

Ela não substitui validação cultural, histórica ou institucional.

---

## 67. Resultado da validação

Os estados poderão ser:

```text
PENDING
VALID
VALID_WITH_RESTRICTIONS
INCONSISTENT
REJECTED
REQUIRES_HUMAN_REVIEW
```

---

## 68. Rastreabilidade entre origem e publicação

Todo conteúdo oficial deverá permitir rastrear:

```text
FONTE
   ↓
REGISTRO
   ↓
VALIDAÇÃO
   ↓
APROVAÇÃO
   ↓
VERSÃO
   ↓
CANAL DE PUBLICAÇÃO
```

---

## 69. Registro de publicação

```text
publicationId
entityId
version
channel
publishedBy
approvedBy
publishedAt
sourceIds
archivedCopy
```

---

## 70. Cópia oficial publicada

Toda publicação relevante deverá possuir cópia oficial preservada.

---

## 71. Retirada de publicação

A retirada deverá registrar:

- conteúdo;
- versão;
- canal;
- data;
- responsável;
- motivo;
- preservação da cópia anterior;
- decisão.

---

## 72. Republicação

A republicação deverá indicar:

- versão anterior;
- versão atual;
- alteração;
- justificativa;
- nova aprovação;
- nova data.

---

## 73. Registro de versões

Todo dado ou documento crítico deverá possuir versão identificável.

---

## 74. Padrão de versão

Poderá ser adotado:

```text
MAJOR.MINOR.PATCH
```

Exemplo:

```text
1.0.0
1.0.1
1.1.0
2.0.0
```

---

## 75. Versão principal

A versão principal deverá mudar quando houver alteração estrutural ou incompatível.

---

## 76. Versão secundária

A versão secundária deverá mudar quando houver ampliação compatível.

---

## 77. Versão corretiva

A versão corretiva deverá mudar quando houver correção sem alteração estrutural relevante.

---

## 78. Relação entre versões

Cada versão deverá registrar:

```text
previousVersion
currentVersion
changeSummary
changedBy
changedAt
approval
```

---

## 79. Versões substituídas

Versões substituídas deverão permanecer:

- preservadas;
- identificadas;
- não publicadas como atuais;
- recuperáveis;
- vinculadas à versão vigente.

---

## 80. Conflitos de fontes

Conflito de fontes ocorre quando duas ou mais fontes apresentam informações incompatíveis.

---

## 81. Tipos de conflito

Os conflitos poderão envolver:

- nome;
- grafia;
- data;
- horário;
- local;
- pessoa;
- função;
- autoria;
- sequência histórica;
- número;
- interpretação;
- direito;
- autorização.

---

## 82. Registro do conflito

```text
conflictId
entityId
field
sourceA
valueA
sourceB
valueB
status
analysis
decision
```

---

## 83. Estados do conflito

```text
OPEN
UNDER_REVIEW
PARTIALLY_RESOLVED
RESOLVED
PRESERVED_AS_DIVERGENT
```

---

## 84. Preservação de divergências legítimas

Divergências históricas ou memoriais legítimas poderão ser preservadas sem escolha forçada de uma única versão.

---

## 85. Resolução de conflitos

A resolução deverá considerar:

1. proximidade da fonte;

2. autenticidade;

3. temporalidade;

4. competência;

5. contexto;

6. coerência;

7. validação comunitária;

8. documentação;

9. responsabilidade institucional.

---

## 86. Proibição de resolução automática crítica

Conflitos envolvendo memória, tradição, pessoas ou edição fundadora não deverão ser resolvidos exclusivamente por automação.

---

## 87. Níveis de confiança

Os dados poderão receber níveis de confiança.

---

## 88. Escala oficial de confiança

```text
CONFIRMED
HIGH_CONFIDENCE
PROBABLE
UNVERIFIED
CONTESTED
MEMORY_BASED
INFERRED
UNKNOWN
```

---

## 89. Dado confirmado

Um dado será `CONFIRMED` quando possuir validação adequada e fonte suficientemente confiável.

---

## 90. Alta confiança

Um dado será `HIGH_CONFIDENCE` quando possuir fortes evidências, ainda que falte algum elemento de confirmação formal.

---

## 91. Provável

Um dado será `PROBABLE` quando for coerente e sustentado parcialmente, mas ainda exigir confirmação.

---

## 92. Não verificado

Um dado será `UNVERIFIED` quando ainda não tiver passado por validação suficiente.

---

## 93. Contestado

Um dado será `CONTESTED` quando houver divergência ativa ou questionamento relevante.

---

## 94. Baseado em memória

Um dado será `MEMORY_BASED` quando sua origem principal for memória pessoal ou comunitária.

Isso não significa irrelevância, mas exige contextualização.

---

## 95. Inferido

Um dado será `INFERRED` quando resultar de interpretação lógica ou analítica.

---

## 96. Desconhecido

Um dado será `UNKNOWN` quando não houver evidência suficiente para classificá-lo.

---

## 97. Registro do nível de confiança

```text
confidenceLevel
assignedBy
assignedAt
reason
supportingSources
reviewDate
```

---

## 98. Revisão do nível de confiança

O nível deverá ser revisto quando:

- surgir nova fonte;
- houver contestação;
- ocorrer validação;
- houver correção;
- a fonte perder confiabilidade;
- uma decisão institucional for tomada.

---

## 99. Proveniência documental

Todo documento deverá preservar:

- título;
- autoria;
- data;
- versão;
- origem;
- caminho;
- formato;
- checksum;
- classificação;
- aprovação;
- referências;
- estado de preservação.

---

## 100. Documento original

O documento original deverá ser distinguido de:

- cópia;
- reprodução;
- transcrição;
- conversão;
- resumo;
- edição;
- derivação.

---

## 101. Cópia documental

A cópia deverá registrar vínculo com o original.

---

## 102. Transcrição documental

Toda transcrição deverá preservar:

- documento de origem;
- responsável;
- data;
- método;
- observações;
- trechos ilegíveis;
- validação.

---

## 103. Conversão documental

Conversões deverão registrar:

```text
originalFile
convertedFile
conversionTool
convertedAt
convertedBy
validationResult
```

---

## 104. Proveniência fotográfica

Toda fotografia deverá possuir, quando possível:

- autor;
- data;
- local;
- atividade;
- pessoas retratadas;
- contexto;
- edição;
- direitos;
- arquivo original;
- checksum;
- versões derivadas.

---

## 105. Fotografias sem metadados

Fotografias sem metadados deverão ser contextualizadas por:

- testemunhos;
- análise visual;
- comparação;
- registros relacionados;
- estimativa claramente identificada.

---

## 106. Proveniência de áudio

Todo áudio deverá possuir:

- autor ou gravador;
- participantes;
- data;
- local;
- contexto;
- duração;
- formato;
- direitos;
- transcrição;
- checksum;
- edição.

---

## 107. Proveniência de vídeo

Todo vídeo deverá possuir:

- responsável pela gravação;
- data;
- local;
- atividade;
- participantes;
- duração;
- formato;
- direitos;
- legendas;
- versões;
- checksum.

---

## 108. Proveniência de transmissão ao vivo

Transmissões deverão preservar:

- canal;
- início;
- término;
- responsável;
- participantes;
- edição;
- cópia arquivada;
- autorização;
- incidentes;
- versão editada, quando houver.

---

## 109. Proveniência de entrevistas

Entrevistas deverão registrar:

- entrevistado;
- entrevistador;
- data;
- local;
- finalidade;
- autorização;
- gravação;
- transcrição;
- revisão;
- restrições;
- contexto.

---

## 110. Proveniência automatizada

Dados produzidos automaticamente deverão identificar:

- sistema;
- versão;
- regra;
- entrada;
- saída;
- data;
- responsável técnico;
- estado de validação;
- falhas;
- logs.

---

## 111. Dados de integração

Dados recebidos por integração deverão registrar:

```text
integrationId
sourceSystem
sourceRecordId
receivedAt
payloadVersion
validationStatus
destinationEntityId
```

---

## 112. Dados importados

Toda importação deverá registrar:

- arquivo;
- origem;
- data;
- responsável;
- formato;
- quantidade;
- regras;
- rejeições;
- resultados;
- relatório.

---

## 113. Dados migrados

Dados migrados deverão manter:

- identificador de origem;
- identificador de destino;
- migração;
- transformação;
- versão;
- validação;
- reconciliação;
- cadeia de custódia.

---

## 114. Uso de inteligência artificial

Todo uso de inteligência artificial que produza, modifique, classifique, resuma, traduza ou recomende conteúdo deverá ser registrado.

---

## 115. Registro mínimo de IA

```text
aiAssisted
purpose
modelOrService
inputSources
generatedAt
generatedBy
humanReviewer
validationStatus
limitations
```

---

## 116. Conteúdo gerado por IA

Conteúdo gerado por IA não deverá ser considerado fonte primária.

---

## 117. Conteúdo assistido por IA

Conteúdo assistido por IA deverá preservar:

- fontes humanas ou documentais;
- instrução aplicada;
- resultado;
- revisão;
- correções;
- aprovação.

---

## 118. Proibição de autoria fictícia

A inteligência artificial não deverá receber autoria humana fictícia.

Sua participação deverá ser identificada quando materialmente relevante.

---

## 119. IA e memória cultural

A inteligência artificial não deverá:

- inventar tradições;
- criar fatos históricos;
- atribuir falas inexistentes;
- substituir testemunhos;
- eliminar divergências;
- descontextualizar saberes;
- assumir autoridade cultural.

---

## 120. Validação humana de IA

Conteúdos críticos produzidos com IA deverão ser validados por pessoa competente antes de publicação.

---

## 121. Nível de confiança de saída automatizada

Saídas automatizadas deverão iniciar, por padrão, com confiança provisória até revisão.

---

## 122. Rastreabilidade de prompts institucionais

Quando relevante, deverão ser preservados:

- instrução;
- finalidade;
- fontes;
- modelo;
- data;
- responsável;
- resultado;
- validação.

Informações sigilosas não deverão ser registradas indevidamente.

---

## 123. Auditoria da linhagem

A auditoria deverá verificar:

- dados sem origem;
- fontes não identificadas;
- alterações sem responsável;
- versões ausentes;
- transformações silenciosas;
- conflitos não tratados;
- níveis de confiança inadequados;
- publicações sem evidência;
- uso não registrado de IA;
- rompimento de relacionamentos;
- alteração da edição fundadora.

---

## 124. Teste de rastreabilidade

O teste deverá selecionar determinado conteúdo e reconstruir:

```text
PUBLICAÇÃO
   ↑
APROVAÇÃO
   ↑
VALIDAÇÃO
   ↑
TRANSFORMAÇÃO
   ↑
REGISTRO
   ↑
FONTE
```

---

## 125. Critério de rastreabilidade completa

Um dado possuirá rastreabilidade completa quando:

- a origem estiver identificada;
- a fonte estiver preservada;
- o registro possuir responsável;
- as transformações estiverem documentadas;
- as versões estiverem relacionadas;
- a publicação estiver vinculada;
- as evidências estiverem acessíveis.

---

## 126. Critério de rastreabilidade parcial

A rastreabilidade será parcial quando algum elemento histórico não puder ser recuperado, mas a limitação estiver claramente registrada.

---

## 127. Rastreabilidade interrompida

A rastreabilidade será considerada interrompida quando não for possível demonstrar origem, transformação ou responsabilidade.

---

## 128. Indicadores mínimos

Deverão ser monitorados:

- percentual de dados com fonte;
- percentual de fontes classificadas;
- dados sem autoria;
- dados sem validador;
- transformações sem registro;
- versões não relacionadas;
- conflitos abertos;
- dados contestados;
- dados derivados sem origem;
- conteúdos de IA sem revisão;
- registros fundadores com linhagem completa.

---

## 129. Taxa de proveniência completa

```text
Dados com proveniência completa
------------------------------- × 100
Dados avaliados
```

---

## 130. Taxa de rastreabilidade de publicação

```text
Publicações vinculadas às fontes
-------------------------------- × 100
Publicações avaliadas
```

---

## 131. Taxa de transformações documentadas

```text
Transformações documentadas
--------------------------- × 100
Transformações identificadas
```

---

## 132. Taxa de conflitos resolvidos

```text
Conflitos resolvidos
-------------------- × 100
Conflitos registrados
```

---

## 133. Alertas

Deverão ser gerados alertas para:

- dado crítico sem fonte;
- publicação sem aprovação;
- alteração sem justificativa;
- versão sem antecessora;
- transformação sem regra;
- conflito não revisado;
- dado derivado sem origem;
- IA sem validação humana;
- alteração de registro fundador;
- evidência indisponível.

---

## 134. Responsabilidades

| Atividade | Responsabilidade principal |
|---|---|
| Identificação da origem | Área de origem |
| Registro da fonte | Editor ou responsável pelo recebimento |
| Classificação da fonte | Governança de dados |
| Validação documental | Curadoria documental |
| Validação cultural | Curadoria cultural |
| Registro das transformações | Responsável técnico ou editorial |
| Controle de versões | Gestão documental |
| Aprovação | Autoridade competente |
| Preservação das evidências | Custódia arquivística |
| Auditoria | Auditoria institucional |
| Proteção da edição fundadora | Governança institucional |

---

## 135. Responsabilidade do fornecedor

Quem fornecer informação deverá, quando possível:

- identificar-se;
- explicar a origem;
- indicar contexto;
- apresentar documentos;
- declarar incertezas;
- respeitar direitos;
- informar restrições.

---

## 136. Responsabilidade do registrador

Quem registrar deverá:

- preservar o conteúdo recebido;
- não inventar elementos;
- identificar a fonte;
- registrar dúvidas;
- manter contexto;
- atribuir estado provisório quando necessário.

---

## 137. Responsabilidade do validador

Quem validar deverá:

- analisar fontes;
- verificar coerência;
- identificar conflitos;
- registrar decisão;
- declarar limitações;
- preservar evidências.

---

## 138. Responsabilidade do publicador

Quem publicar deverá:

- utilizar versão aprovada;
- preservar vínculo com as fontes;
- registrar canal e data;
- não alterar silenciosamente;
- arquivar cópia oficial.

---

## 139. Responsabilidade da curadoria cultural

A curadoria cultural deverá:

- proteger contextos;
- verificar representações;
- respeitar saberes;
- preservar divergências;
- evitar atribuição indevida;
- validar restrições;
- assegurar reconhecimento comunitário.

---

## 140. Responsabilidade técnica

A equipe técnica deverá:

- preservar logs;
- manter identificadores;
- registrar automações;
- proteger evidências;
- impedir sobrescrita silenciosa;
- manter recuperação;
- apoiar auditorias.

---

## 141. Preservação das evidências

As evidências deverão ser preservadas conforme:

- criticidade;
- valor histórico;
- valor cultural;
- direitos;
- temporalidade;
- necessidade de auditoria;
- relação com a edição fundadora.

---

## 142. Tipos de evidências preserváveis

Deverão ser preservados, quando aplicável:

- documentos originais;
- cópias verificadas;
- fotografias;
- áudios;
- vídeos;
- mensagens institucionais;
- atas;
- autorizações;
- capturas;
- relatórios;
- checksums;
- logs;
- decisões;
- registros de validação;
- mapas de transformação.

---

## 143. Evidência não pública

Uma evidência poderá ser preservada sem ser publicamente acessível.

---

## 144. Integridade das evidências

Evidências digitais deverão possuir:

- checksum;
- data;
- origem;
- formato;
- responsável;
- classificação;
- estado de preservação.

---

## 145. Cadeia de custódia das evidências

Toda evidência crítica deverá registrar:

```text
evidenceId
receivedBy
receivedAt
storedAt
accessHistory
transformations
currentCustodian
integrityStatus
```

---

## 146. Acesso às evidências

O acesso deverá respeitar:

- classificação;
- finalidade;
- menor privilégio;
- privacidade;
- direitos;
- proteção cultural;
- auditoria.

---

## 147. Preservação da edição fundadora

Todos os dados relevantes da FESTANÇA 2026 deverão possuir linhagem protegida e preservada.

---

## 148. Elementos fundadores mínimos

Deverão possuir proveniência documentada:

- programação;
- períodos oficiais;
- festeiros;
- grupos tradicionais;
- atividades;
- locais;
- documentos;
- imagens;
- áudios;
- vídeos;
- fontes;
- autorizações;
- publicações;
- correções;
- decisões;
- migrações;
- versões.

---

## 149. Origem dos dados fundadores

A origem dos dados de 2026 deverá ser preservada mesmo quando houver migração, normalização ou reestruturação.

---

## 150. Proibição de apagamento fundador

Nenhuma transformação poderá apagar:

- valor original;
- fonte;
- versão;
- responsável;
- contexto;
- vínculo com 2026;
- evidência histórica.

---

## 151. Alterações em dados fundadores

Toda alteração deverá registrar:

```text
founderRecordId
originalValue
newValue
reason
source
changedBy
approvedBy
changedAt
version
```

---

## 152. Dados fundadores contestados

Quando houver contestação, deverão ser preservados:

- valor anterior;
- valor contestado;
- fontes;
- análise;
- decisão;
- responsáveis;
- versões.

---

## 153. Linhagem entre edições

As futuras edições deverão manter distinção entre:

- entidades permanentes;
- registros anuais;
- fontes específicas;
- autorizações anuais;
- versões;
- publicações;
- transformações.

---

## 154. Herança institucional

As edições futuras poderão herdar:

- estruturas;
- identificadores permanentes;
- vocabulários;
- políticas;
- entidades permanentes.

Não poderão herdar automaticamente fatos anuais.

---

## 155. Proibição de mistura histórica

Dados de edições diferentes não deverão ser combinados sem preservação explícita do vínculo temporal.

---

## 156. Rastreabilidade de migrações futuras

Toda migração deverá preservar:

- origem;
- destino;
- identificadores;
- mapeamentos;
- transformações;
- relatórios;
- reconciliação;
- evidências;
- versão.

---

## 157. Lista mínima de registro da origem

- [ ] entidade identificada;
- [ ] fonte identificada;
- [ ] tipo de fonte classificado;
- [ ] fornecedor identificado;
- [ ] data registrada;
- [ ] contexto descrito;
- [ ] direitos avaliados;
- [ ] evidência vinculada;
- [ ] nível de confiança atribuído;
- [ ] edição vinculada.

---

## 158. Lista mínima de transformação

- [ ] dado de entrada identificado;
- [ ] regra documentada;
- [ ] responsável identificado;
- [ ] data registrada;
- [ ] valor original preservado;
- [ ] valor transformado registrado;
- [ ] versão atualizada;
- [ ] validação executada;
- [ ] evidência preservada.

---

## 159. Lista mínima de validação

- [ ] fonte consultada;
- [ ] responsável identificado;
- [ ] método definido;
- [ ] resultado registrado;
- [ ] conflitos analisados;
- [ ] nível de confiança revisado;
- [ ] evidência vinculada;
- [ ] data registrada;
- [ ] decisão preservada.

---

## 160. Lista mínima de publicação

- [ ] fonte vinculada;
- [ ] origem rastreável;
- [ ] validação concluída;
- [ ] aprovação registrada;
- [ ] versão identificada;
- [ ] canal autorizado;
- [ ] publicador identificado;
- [ ] data registrada;
- [ ] cópia oficial preservada;
- [ ] direitos verificados.

---

## 161. Lista mínima para conteúdos com IA

- [ ] finalidade registrada;
- [ ] modelo ou serviço identificado;
- [ ] fontes preservadas;
- [ ] participação da IA registrada;
- [ ] resultado revisado;
- [ ] fatos verificados;
- [ ] conteúdo cultural validado;
- [ ] limitações registradas;
- [ ] aprovação humana concluída;
- [ ] versão preservada.

---

## 162. Não conformidades

Serão consideradas não conformidades:

- dado sem origem;
- fonte sem identificação;
- autoria indevidamente atribuída;
- transformação silenciosa;
- versão não registrada;
- evidência ausente;
- conflito ignorado;
- nível de confiança enganoso;
- publicação sem rastreabilidade;
- dado derivado sem vínculo;
- IA não declarada;
- alteração de registro fundador sem evidência.

---

## 163. Classificação das não conformidades

| Nível | Definição |
|---|---|
| Baixa | Falha documental limitada |
| Média | Compromete compreensão ou manutenção |
| Alta | Compromete confiabilidade ou auditoria |
| Crítica | Compromete direitos, cultura ou autenticidade |
| Máxima | Compromete a edição fundadora ou a memória institucional |

---

## 164. Tratamento das não conformidades

Toda não conformidade deverá ser:

1. identificada;

2. registrada;

3. classificada;

4. contida;

5. investigada;

6. atribuída a responsável;

7. corrigida;

8. revalidada;

9. auditada;

10. preservada como evidência.

---

## 165. Exceções

Exceções somente poderão ocorrer quando:

- houver justificativa;
- a limitação estiver registrada;
- o risco for avaliado;
- o responsável estiver identificado;
- houver prazo de revisão;
- a autoridade competente aprovar;
- a edição fundadora permanecer protegida.

---

## 166. Declaração constitucional

Este documento declara que:

1. nenhum dado institucional será considerado plenamente confiável sem origem identificável;

2. nenhuma fonte será tratada como infalível;

3. nenhuma autoria será atribuída sem legitimidade;

4. nenhum registrador será confundido com autor;

5. nenhuma transformação ocorrerá silenciosamente;

6. nenhum valor original será apagado por normalização;

7. nenhum conflito legítimo será escondido;

8. nenhuma inferência será apresentada como fato confirmado;

9. nenhum conteúdo gerado por inteligência artificial será considerado fonte primária;

10. nenhuma publicação oficial ficará sem vínculo com sua origem;

11. nenhuma edição futura romperá a linhagem da edição fundadora;

12. toda evidência relevante será identificável, protegida e recuperável.

---

## 167. Princípio maior

**IDENTIFICAR A ORIGEM ANTES DE REGISTRAR.**

**REGISTRAR A FONTE ANTES DE VALIDAR.**

**VALIDAR ANTES DE APROVAR.**

**APROVAR ANTES DE PUBLICAR.**

**PRESERVAR O ORIGINAL ANTES DE TRANSFORMAR.**

**VERSIONAR ANTES DE SUBSTITUIR.**

**CONTEXTUALIZAR ANTES DE INTERPRETAR.**

**DECLARAR A INCERTEZA ANTES DE AFIRMAR.**

**REGISTRAR A DIVERGÊNCIA ANTES DE DECIDIR.**

**RECONHECER A AUTORIA ANTES DE REUTILIZAR.**

**REVISAR A IA ANTES DE DIVULGAR.**

**AUDITAR SEM APAGAR A MEMÓRIA.**

**EVOLUIR SEM ROMPER A LINHAGEM.**

---

## 168. Compromisso permanente

Toda gestão de linhagem, proveniência e rastreabilidade deverá proteger simultaneamente:

- as pessoas;
- as crianças;
- os adolescentes;
- as famílias;
- a comunidade;
- os grupos tradicionais;
- os festeiros;
- os responsáveis;
- os autores;
- os colaboradores;
- os pesquisadores;
- os curadores;
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
- as fontes;
- as imagens;
- as vozes;
- os relatos;
- os locais;
- os relacionamentos;
- os identificadores;
- as versões;
- as evidências;
- os sistemas;
- as integrações;
- a governança;
- a edição fundadora;
- as futuras edições;
- a continuidade;
- o patrimônio;
- o futuro.

---

## 169. Referências institucionais essenciais

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
- `docs/festanca/governance/intellectual-property-and-licensing-policy.md`;
- `docs/festanca/governance/community-participation-and-cultural-safeguarding-policy.md`;
- `docs/festanca/governance/artificial-intelligence-and-automation-policy.md`;
- `docs/festanca/governance/audit-and-compliance-policy.md`;
- `docs/festanca/governance/change-control-policy.md`;
- `docs/festanca/governance/risk-management-and-resilience-policy.md`.

---

## 170. Estado inicial deste documento

```text
DOCUMENTO: data-lineage-and-provenance-model.md
FUNÇÃO: Gestão constitucional de linhagem, proveniência e rastreabilidade de dados
REGIME: Permanente
EDIÇÃO FUNDADORA: FESTANÇA 2026
CRITICIDADE: Máxima
MUTABILIDADE: Estritamente controlada
PRESERVAÇÃO: Integral
ORIGEM DOS DADOS: Obrigatória
CLASSIFICAÇÃO DE FONTES: Obrigatória
AUTORIA E RESPONSABILIDADE: Identificáveis
CADEIA DE TRANSFORMAÇÃO: Registrada
HISTÓRICO DE ALTERAÇÕES: Permanente
VÍNCULOS ENTRE REGISTROS: Rastreáveis
DADOS DERIVADOS: Vinculados às fontes
EVIDÊNCIAS DE VALIDAÇÃO: Obrigatórias
RASTREABILIDADE ATÉ A PUBLICAÇÃO: Obrigatória
VERSIONAMENTO: Obrigatório
CONFLITOS DE FONTES: Registrados
NÍVEIS DE CONFIANÇA: Obrigatórios quando aplicáveis
PROVENIÊNCIA DOCUMENTAL: Preservada
PROVENIÊNCIA AUDIOVISUAL: Preservada
PROVENIÊNCIA AUTOMATIZADA: Registrada
USO DE INTELIGÊNCIA ARTIFICIAL: Declarado e supervisionado
AUDITORIA DA LINHAGEM: Permanente
CADEIA DE CUSTÓDIA: Integral
PROTEÇÃO DA EDIÇÃO FUNDADORA: Máxima
RASTREABILIDADE: Integral
APLICABILIDADE: Portal Permanente e edições anuais
```

---

## 171. Vigência

Este documento entra em vigor a partir de sua aprovação e publicação no repositório oficial.

Sua vigência será permanente.

Toda revisão deverá:

- preservar as versões anteriores;
- registrar justificativas;
- identificar responsáveis;
- apresentar análise de impacto;
- preservar modelos anteriores de proveniência;
- documentar alterações nas classificações;
- preservar vínculos históricos;
- manter compatibilidade entre versões;
- proteger dados pessoais;
- preservar conflitos e decisões;
- registrar alterações relacionadas à inteligência artificial;
- preservar evidências;
- proteger a edição fundadora;
- respeitar os modelos constitucionais de dados;
- assegurar rastreabilidade integral.

---

## 172. Encerramento institucional

Seguimos juntos, passo a passo.

Com método.

Com segurança.

Com preservação integral da edição fundadora.

**SOMOS TODOS, AVANÇO.**

Ao encontro do futuro.

**AMÉM.**
