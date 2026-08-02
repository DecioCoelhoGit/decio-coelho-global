# Modelo Constitucional de Entidades e Relacionamentos do Portal Permanente da FESTANÇA

> Constituição destinada a regulamentar a identificação, a definição, a estruturação, o relacionamento, a validação, a integridade, a rastreabilidade, o versionamento e a preservação das entidades de dados utilizadas pelo Portal Permanente da FESTANÇA de Vila Bela da Santíssima Trindade — Mato Grosso — Brasil.

---

## 1. Identificação do documento

| Campo | Conteúdo |
|---|---|
| Documento | Modelo Constitucional de Entidades e Relacionamentos do Portal Permanente da FESTANÇA |
| Caminho oficial | `docs/festanca/data/entity-relationship-model.md` |
| Classificação | Documento constitucional de dados |
| Domínio | Entidades, atributos, relacionamentos e integridade referencial |
| Regime | Permanente |
| Criticidade | Máxima |
| Mutabilidade | Estritamente controlada |
| Preservação | Integral, auditável, versionada e recuperável |
| Edição fundadora | FESTANÇA 2026 |
| Situação | Constituição estrutural de entidades e relacionamentos |
| Versão inicial | `1.0.0` |
| Aplicabilidade | Portal Permanente e edições anuais |
| Vigência | Permanente |
| Documento superior | `docs/festanca/data/data-architecture.md` |
| Documento complementar principal | `docs/festanca/data/data-classification-model.md` |

---

## 2. Finalidade

Este documento estabelece o regime oficial de definição, organização e relacionamento das entidades utilizadas pelo Portal Permanente da FESTANÇA.

Sua finalidade é assegurar que toda entidade seja:

- identificável;
- necessária;
- documentada;
- semanticamente definida;
- estruturalmente consistente;
- relacionada de forma legítima;
- versionada;
- validável;
- auditável;
- interoperável;
- recuperável;
- preservada historicamente.

Nenhuma entidade relevante deverá ser incorporada ao Portal sem definição, responsabilidade, identificador e relacionamento com o domínio institucional correspondente.

---

## 3. Objetivos estratégicos

São objetivos permanentes deste Modelo:

1. estabelecer uma estrutura oficial de entidades;

2. definir atributos mínimos e complementares;

3. instituir identificadores estáveis;

4. regulamentar relacionamentos e cardinalidades;

5. assegurar integridade referencial;

6. impedir duplicidades indevidas;

7. separar o núcleo permanente das edições anuais;

8. preservar relacionamentos históricos;

9. permitir evolução tecnológica controlada;

10. proteger os dados da edição fundadora;

11. facilitar validação e auditoria;

12. assegurar continuidade entre futuras edições.

---

## 4. Princípios fundamentais

Toda entidade e todo relacionamento deverão observar:

- legitimidade;
- necessidade;
- clareza semântica;
- unicidade;
- consistência;
- integridade;
- rastreabilidade;
- interoperabilidade;
- temporalidade;
- versionamento;
- auditabilidade;
- preservação histórica;
- continuidade institucional;
- soberania cultural.

---

## 5. Conceito de entidade

Entidade é uma representação estruturada de pessoa, grupo, instituição, lugar, atividade, documento, edição, acontecimento, ativo, registro ou conceito relevante para a FESTANÇA.

São exemplos de entidades:

- edição;
- pessoa;
- festeiro;
- função;
- grupo tradicional;
- atividade;
- local;
- programação;
- documento;
- imagem;
- áudio;
- vídeo;
- publicação;
- parceiro;
- autorização;
- fonte;
- registro histórico.

---

## 6. Conceito de atributo

Atributo é uma característica pertencente a uma entidade.

Exemplo:

```text
ENTIDADE: Pessoa

ATRIBUTOS:
- id
- nome
- nomePublico
- funcao
- contato
- status
```

Todo atributo deverá possuir significado, tipo, finalidade e regra de validação.

---

## 7. Conceito de relacionamento

Relacionamento é o vínculo formal entre duas ou mais entidades.

Exemplos:

```text
PESSOA exerce FUNÇÃO

ATIVIDADE pertence a EDIÇÃO

ATIVIDADE ocorre em LOCAL

PUBLICAÇÃO referencia DOCUMENTO

IMAGEM registra ATIVIDADE
```

---

## 8. Conceito de cardinalidade

Cardinalidade define quantas ocorrências de uma entidade poderão se relacionar com outra.

As cardinalidades oficiais serão:

| Cardinalidade | Representação | Significado |
|---|---|---|
| Um para um | `1:1` | Uma ocorrência relaciona-se com uma ocorrência |
| Um para muitos | `1:N` | Uma ocorrência relaciona-se com várias |
| Muitos para um | `N:1` | Várias ocorrências relacionam-se com uma |
| Muitos para muitos | `N:N` | Várias ocorrências relacionam-se entre si |
| Opcional | `0..1` | Relação não obrigatória |
| Uma ou mais | `1..N` | Pelo menos uma relação obrigatória |
| Zero ou mais | `0..N` | Nenhuma ou várias relações |

---

## 9. Estrutura geral do modelo

```text
PORTAL PERMANENTE
        │
        ├── NÚCLEO PERMANENTE
        │     ├── Instituição
        │     ├── Pessoa
        │     ├── Grupo tradicional
        │     ├── Função
        │     ├── Local permanente
        │     ├── Documento constitucional
        │     └── Acervo histórico
        │
        ├── EDIÇÕES ANUAIS
        │     ├── Edição
        │     ├── Festeiro
        │     ├── Atividade
        │     ├── Programação
        │     ├── Local anual
        │     ├── Parceiro
        │     └── Publicação
        │
        └── ENTIDADES COMPARTILHADAS
              ├── Fonte
              ├── Autorização
              ├── Imagem
              ├── Áudio
              ├── Vídeo
              ├── Documento
              └── Metadado
```

---

## 10. Classificação das entidades

As entidades serão classificadas como:

| Classe | Definição |
|---|---|
| Permanente | Integra o núcleo contínuo do Portal |
| Anual | Vinculada a uma edição determinada |
| Compartilhada | Utilizada pelo núcleo e por múltiplas edições |
| Histórica | Preservada por valor cultural ou documental |
| Institucional | Representa autoridade, estrutura ou governança |
| Cultural | Representa tradição, manifestação ou conhecimento |
| Técnica | Representa sistema, configuração ou processo tecnológico |
| Associativa | Materializa relacionamento entre entidades |
| Arquivística | Preserva evidência, contexto e autenticidade |

---

## 11. Entidades permanentes

São entidades permanentes:

- Portal;
- instituição;
- autoridade institucional;
- pessoa;
- grupo tradicional;
- função cultural;
- categoria de atividade;
- local permanente;
- documento constitucional;
- política;
- patrimônio;
- acervo;
- fonte institucional;
- vocabulário controlado.

---

## 12. Entidades anuais

São entidades anuais:

- edição;
- programação anual;
- festeiro;
- função anual;
- atividade;
- agenda;
- comunicado;
- publicação anual;
- parceiro da edição;
- patrocinador;
- apoiador;
- equipe;
- relatório de encerramento.

---

## 13. Entidades compartilhadas

São entidades compartilhadas:

- pessoa;
- grupo tradicional;
- local;
- categoria;
- documento;
- imagem;
- áudio;
- vídeo;
- autorização;
- fonte;
- referência;
- endereço;
- contato;
- metadado.

---

## 14. Entidades históricas

São entidades históricas:

- edição encerrada;
- programação preservada;
- atividade realizada;
- registro audiovisual;
- documento publicado;
- versão anterior;
- decisão institucional;
- memória comunitária;
- depoimento;
- cronologia;
- registro de alteração.

---

## 15. Entidades associativas

Entidades associativas deverão ser utilizadas para relacionamentos `N:N`.

Exemplos:

```text
pessoa_grupo
atividade_participante
atividade_local
publicacao_autor
documento_fonte
edicao_parceiro
midia_pessoa
```

Toda entidade associativa deverá possuir identificador próprio quando o relacionamento produzir valor histórico, jurídico ou institucional.

---

## 16. Entidade Portal

A entidade `Portal` representa o sistema institucional permanente.

Atributos mínimos:

```text
id
name
officialName
description
status
createdAt
updatedAt
version
```

Identificador recomendado:

```text
festanca-portal-permanente
```

---

## 17. Entidade Edição

A entidade `Edição` representa uma realização anual da FESTANÇA.

Atributos mínimos:

```text
id
year
officialName
status
preparatoryStartDate
preparatoryEndDate
mainStartDate
mainEndDate
createdAt
updatedAt
closedAt
preservationStatus
```

Exemplo:

```json
{
  "id": "festanca-2026",
  "year": 2026,
  "officialName": "FESTANÇA 2026",
  "status": "founding-edition"
}
```

---

## 18. Estados da entidade Edição

Os estados oficiais poderão ser:

```text
PLANEJADA
EM PREPARAÇÃO
EM VALIDAÇÃO
PUBLICADA
EM REALIZAÇÃO
ENCERRADA
ARQUIVADA
PRESERVADA
```

A edição fundadora deverá possuir marcação permanente:

```text
foundingEdition: true
```

---

## 19. Entidade Pessoa

A entidade `Pessoa` representa indivíduo relacionado à FESTANÇA.

Atributos mínimos:

```text
id
fullName
publicName
status
createdAt
updatedAt
```

Atributos condicionais:

```text
phone
email
image
biography
authorizationId
privacyClassification
```

Dados pessoais deverão obedecer às políticas de privacidade e minimização.

---

## 20. Entidade Função

A entidade `Função` representa papel institucional, cultural, religioso, editorial, técnico ou operacional.

Exemplos:

- Coordenador-Geral;
- Imperatriz;
- Imperador;
- Rainha;
- Rei;
- Juíza;
- Juiz;
- Capitão do Mastro;
- curador cultural;
- responsável editorial;
- administrador técnico.

Atributos mínimos:

```text
id
name
category
scope
description
status
```

---

## 21. Entidade PessoaFunção

A entidade associativa `PessoaFunção` deverá relacionar uma pessoa a uma função.

Atributos:

```text
id
personId
roleId
editionId
startDate
endDate
status
sourceId
approvalStatus
```

Cardinalidade:

```text
PESSOA 1:N PESSOA_FUNÇÃO
FUNÇÃO 1:N PESSOA_FUNÇÃO
EDIÇÃO 0..1:N PESSOA_FUNÇÃO
```

---

## 22. Entidade Festeiro

A entidade `Festeiro` representa a participação anual de pessoa investida em função tradicional.

Atributos mínimos:

```text
id
editionId
personId
roleId
status
validationStatus
sourceId
```

A entidade não deverá duplicar os dados da pessoa.

Ela deverá referenciar:

```text
personId
```

---

## 23. Entidade Grupo Tradicional

A entidade `GrupoTradicional` representa grupos culturais oficialmente relacionados à FESTANÇA.

Registros iniciais:

```text
Grupo do Congo
Conguinho
Chorado
Choradinho
```

Atributos mínimos:

```text
id
officialName
shortName
description
status
historicalContext
createdAt
updatedAt
```

---

## 24. Entidade Membro de Grupo

A entidade `MembroGrupo` deverá relacionar pessoas aos grupos tradicionais.

Atributos:

```text
id
groupId
personId
title
role
skills
editionId
startDate
endDate
status
```

Cardinalidade:

```text
GRUPO 1:N MEMBRO_GRUPO
PESSOA 1:N MEMBRO_GRUPO
```

---

## 25. Entidade Categoria de Atividade

A entidade `CategoriaAtividade` deverá padronizar tipos de atividades.

Exemplos:

- Reza Cantada;
- Missa;
- celebração litúrgica;
- reunião;
- cortejo;
- apresentação cultural;
- levantamento de mastro;
- solenidade;
- atividade comunitária.

Atributos mínimos:

```text
id
name
description
locationRule
status
```

---

## 26. Entidade Atividade

A entidade `Atividade` representa acontecimento individual da programação.

Atributos mínimos:

```text
id
editionId
categoryId
title
date
startTime
endTime
locationId
status
validationStatus
sourceId
createdAt
updatedAt
```

Atributos complementares:

```text
description
responsiblePersonId
traditionalGroupId
accessibilityNotes
mapsEnabled
publicationStatus
```

---

## 27. Regras da entidade Atividade

Toda atividade deverá:

- pertencer a uma edição;
- possuir categoria;
- possuir data;
- possuir horário quando disponível;
- possuir local ou indicação de confirmação pendente;
- possuir fonte;
- possuir estado de validação;
- preservar versões anteriores.

---

## 28. Entidade Programação

A entidade `Programação` representa o conjunto organizado de atividades de uma edição.

Atributos mínimos:

```text
id
editionId
officialName
status
version
providedBy
validationStatus
publishedAt
updatedAt
```

Cardinalidade:

```text
EDIÇÃO 1:1..N PROGRAMAÇÃO
PROGRAMAÇÃO 1:N ATIVIDADE
```

---

## 29. Entidade ProgramaçãoAtividade

Quando necessária ordenação, agrupamento ou múltipla participação, deverá ser utilizada:

```text
ProgramacaoAtividade
```

Atributos:

```text
id
programId
activityId
displayOrder
section
highlight
status
```

---

## 30. Entidade Local

A entidade `Local` representa espaço relacionado à FESTANÇA.

Atributos mínimos:

```text
id
name
type
city
state
country
privacyLevel
verificationStatus
status
```

Atributos condicionais:

```text
address
latitude
longitude
mapsQuery
ownerAuthorizationId
accessibilityNotes
```

---

## 31. Tipos de Local

Os tipos oficiais poderão incluir:

```text
PRAÇA
IGREJA
CENTRO PAROQUIAL
CENTRO DE EVENTOS
RESIDÊNCIA PRIVADA
ESPAÇO CULTURAL
VIA PÚBLICA
LOCAL TEMPORÁRIO
PONTO DE CORTEJO
LOCAL HISTÓRICO
```

---

## 32. Regras para residências privadas

Locais classificados como residência privada deverão:

- possuir acesso restrito por padrão;
- evitar coordenadas públicas sem autorização;
- possuir vínculo com autorização quando aplicável;
- utilizar busca aproximada quando necessário;
- preservar a segurança dos moradores;
- registrar a edição e a atividade relacionada.

---

## 33. Entidade Endereço

Quando necessário, o endereço deverá ser separado da entidade `Local`.

Atributos:

```text
id
street
number
district
city
state
postalCode
country
reference
privacyLevel
```

Relacionamento:

```text
LOCAL 0..1:1 ENDEREÇO
```

---

## 34. Entidade Rota

A entidade `Rota` representa deslocamento, cortejo ou roteiro cultural.

Atributos:

```text
id
editionId
name
description
startLocationId
endLocationId
status
mapsEnabled
verificationStatus
```

---

## 35. Entidade RotaLocal

A entidade associativa deverá preservar a ordem dos pontos:

```text
id
routeId
locationId
sequence
arrivalTime
departureTime
notes
```

---

## 36. Entidade Documento

A entidade `Documento` representa arquivo institucional, cultural, jurídico, editorial ou técnico.

Atributos mínimos:

```text
id
title
documentType
classification
version
status
path
createdAt
updatedAt
preservationStatus
```

Atributos complementares:

```text
editionId
authorId
sourceId
approvalId
licenseId
checksum
```

---

## 37. Tipos de Documento

Os tipos poderão incluir:

- constituição;
- política;
- modelo;
- relatório;
- inventário;
- ata;
- autorização;
- contrato;
- formulário;
- programação;
- comunicado;
- parecer;
- registro histórico;
- documento técnico;
- esquema.

---

## 38. Entidade DocumentoVersão

Toda versão relevante deverá ser representada por:

```text
DocumentoVersao
```

Atributos:

```text
id
documentId
version
path
checksum
createdAt
createdBy
changeReason
approvalStatus
preservationStatus
```

Cardinalidade:

```text
DOCUMENTO 1:N DOCUMENTO_VERSÃO
```

---

## 39. Entidade Fonte

A entidade `Fonte` representa a origem de dado ou informação.

Atributos:

```text
id
name
sourceType
description
responsiblePersonId
documentId
verificationStatus
reliabilityLevel
createdAt
```

---

## 40. Tipos de Fonte

Os tipos poderão ser:

```text
INSTITUCIONAL
DOCUMENTAL
CULTURAL
COMUNITÁRIA
TESTEMUNHAL
BIBLIOGRÁFICA
AUDIOVISUAL
TÉCNICA
JORNALÍSTICA
AUTOMATIZADA
```

---

## 41. Entidade Autorização

A entidade `Autorização` deverá registrar consentimentos e permissões.

Atributos mínimos:

```text
id
authorizationType
holderPersonId
scope
status
issuedAt
expiresAt
documentId
```

Exemplos:

- autorização de imagem;
- autorização de localização;
- autorização de publicação;
- cessão de conteúdo;
- consentimento para contato;
- autorização de responsável legal.

---

## 42. Entidade Imagem

A entidade `Imagem` representa arquivo visual do acervo.

Atributos:

```text
id
title
filePath
fileName
format
width
height
capturedAt
authorId
editionId
activityId
locationId
licenseId
preservationStatus
```

---

## 43. Entidade Áudio

A entidade `Áudio` representa gravação sonora.

Atributos:

```text
id
title
filePath
format
duration
recordedAt
authorId
editionId
activityId
authorizationId
preservationStatus
```

---

## 44. Entidade Vídeo

A entidade `Vídeo` representa gravação audiovisual.

Atributos:

```text
id
title
filePath
format
duration
recordedAt
authorId
editionId
activityId
locationId
licenseId
preservationStatus
```

---

## 45. Entidade PessoaMídia

Quando uma mídia retratar ou registrar pessoas, deverá existir relacionamento específico.

Atributos:

```text
id
personId
mediaId
mediaType
authorizationId
representationType
status
```

---

## 46. Entidade Publicação

A entidade `Publicação` representa conteúdo oficialmente divulgado.

Atributos:

```text
id
title
publicationType
editionId
status
channelId
publishedAt
version
responsiblePersonId
approvalId
```

---

## 47. Tipos de Publicação

Os tipos poderão incluir:

- notícia;
- comunicado;
- programação;
- postagem;
- vídeo;
- transmissão;
- galeria;
- entrevista;
- material gráfico;
- documento para download;
- conteúdo institucional.

---

## 48. Entidade Canal

A entidade `Canal` representa meio oficial de publicação.

Exemplos:

- Portal Permanente;
- Instagram;
- Facebook;
- WhatsApp;
- YouTube;
- LinkedIn;
- repositório oficial;
- imprensa institucional.

Atributos:

```text
id
name
channelType
officialUrl
status
responsiblePersonId
```

---

## 49. Entidade Parceiro

A entidade `Parceiro` representa pessoa jurídica, instituição, órgão, organização ou colaborador externo.

Atributos:

```text
id
officialName
partnerType
description
status
contactId
brandAssetId
```

---

## 50. Entidade EdiçãoParceiro

A entidade associativa deverá registrar a relação anual:

```text
id
editionId
partnerId
relationshipType
scope
startDate
endDate
counterpart
approvalStatus
```

---

## 51. Tipos de parceria

Os tipos poderão incluir:

```text
REALIZAÇÃO
COORDENAÇÃO
APOIO INSTITUCIONAL
PATROCÍNIO
PARCERIA TECNOLÓGICA
COLABORAÇÃO
FORNECIMENTO
MÍDIA
PRODUÇÃO DE CONTEÚDO
```

---

## 52. Entidade Marca

A entidade `Marca` representa identidade visual institucional ou de parceiro.

Atributos:

```text
id
ownerId
name
assetPath
usageStatus
licenseId
validFrom
validUntil
```

---

## 53. Entidade Licença

A entidade `Licença` representa condição de uso de ativo, conteúdo, software ou mídia.

Atributos:

```text
id
name
licenseType
description
attributionRequired
commercialUseAllowed
modificationAllowed
documentId
```

---

## 54. Entidade Registro Histórico

A entidade `RegistroHistorico` preserva acontecimento ou estado relevante.

Atributos:

```text
id
title
recordType
description
eventDate
editionId
sourceId
documentId
validationStatus
preservationStatus
```

---

## 55. Entidade Memória Comunitária

A entidade `MemoriaComunitaria` representa relato, lembrança ou conhecimento comunitário.

Atributos:

```text
id
title
description
narratorPersonId
recordedAt
sourceId
validationStatus
classification
authorizationId
```

Memória comunitária não deverá ser confundida automaticamente com fato documental confirmado.

---

## 56. Entidade Notícia

A entidade `Notícia` poderá especializar `Publicação`.

Atributos adicionais:

```text
summary
body
authorId
reviewerId
featuredImageId
category
```

---

## 57. Entidade Comunicado Oficial

A entidade `ComunicadoOficial` deverá possuir:

```text
id
title
body
editionId
authorityId
approvalId
publishedAt
version
status
```

Nenhum comunicado deverá ser considerado oficial sem autoridade e aprovação identificadas.

---

## 58. Entidade Aprovação

A entidade `Aprovação` representa ato formal de validação.

Atributos:

```text
id
subjectType
subjectId
approvalLevel
approvedBy
approvedAt
decision
justification
version
```

---

## 59. Entidade Decisão

A entidade `Decisão` representa deliberação institucional.

Atributos:

```text
id
title
decisionType
subjectType
subjectId
decisionDate
responsibleAuthorityId
status
justification
documentId
```

---

## 60. Entidade Alteração

A entidade `Alteração` registra mudança realizada.

Atributos:

```text
id
entityType
entityId
changeType
previousValue
newValue
reason
changedBy
changedAt
approvalId
```

---

## 61. Entidade Auditoria

A entidade `Auditoria` representa verificação formal.

Atributos:

```text
id
auditType
scope
startedAt
completedAt
responsiblePersonId
result
reportDocumentId
status
```

---

## 62. Entidade Não Conformidade

A entidade `NaoConformidade` deverá possuir:

```text
id
auditId
subjectType
subjectId
severity
description
detectedAt
responsiblePersonId
status
resolution
resolvedAt
```

---

## 63. Entidade Usuário Institucional

A entidade `UsuarioInstitucional` representa acesso autorizado ao sistema.

Atributos:

```text
id
personId
accountStatus
roleId
createdAt
lastAccessAt
accessLevel
```

Credenciais secretas não deverão ser armazenadas como atributos documentais públicos.

---

## 64. Entidade Controle de Acesso

A entidade `ControleAcesso` representa concessão específica.

Atributos:

```text
id
userId
resourceType
resourceId
permission
grantedBy
grantedAt
expiresAt
status
```

---

## 65. Entidade Contato

A entidade `Contato` deverá separar informações de comunicação.

Atributos:

```text
id
ownerType
ownerId
contactType
value
isPublic
isOfficial
status
```

---

## 66. Entidade Metadado

Metadados deverão complementar entidades sem substituir atributos essenciais.

Atributos:

```text
id
entityType
entityId
key
value
valueType
sourceId
```

---

## 67. Identificadores constitucionais

Toda entidade deverá possuir identificador:

- único;
- estável;
- não ambíguo;
- não reutilizável;
- independente do nome exibido;
- preservado após arquivamento.

---

## 68. Padrão recomendado de identificadores

Exemplos:

```text
edition-festanca-2026
person-evelyn-juliane-frazao-almeida
role-imperatriz
activity-2026-05-23-reza-imperatriz
location-praca-da-bandeira
group-congo
document-governance-model-001
```

Identificadores não deverão expor dados pessoais sensíveis.

---

## 69. Chaves primárias

Cada entidade deverá possuir chave primária:

```text
id
```

A chave primária deverá:

- ser obrigatória;
- ser única;
- permanecer imutável;
- ser preservada historicamente;
- não depender exclusivamente de posição em arquivo.

---

## 70. Chaves estrangeiras

Relacionamentos deverão utilizar chaves estrangeiras explícitas.

Exemplos:

```text
editionId
personId
activityId
locationId
groupId
documentId
sourceId
authorizationId
```

---

## 71. Integridade referencial

Nenhuma chave estrangeira deverá apontar para entidade inexistente, salvo em processos temporários formalmente classificados.

Toda referência deverá ser:

- validada;
- documentada;
- rastreável;
- recuperável;
- compatível com a edição correspondente.

---

## 72. Exclusão restrita

Entidades referenciadas não deverão ser excluídas fisicamente sem análise.

Deverão ser priorizados estados como:

```text
inactive
archived
revoked
superseded
preserved
```

---

## 73. Exclusão lógica

A exclusão lógica poderá utilizar:

```text
status
deletedAt
deletedBy
deletionReason
```

Registros históricos e fundadores não deverão ser eliminados por exclusão lógica automática.

---

## 74. Relacionamento entre Portal e Edição

Cardinalidade:

```text
PORTAL 1:N EDIÇÃO
```

Regras:

- toda edição pertence ao Portal;
- o Portal existe independentemente de uma edição;
- nenhuma edição substitui o Portal;
- cada edição preserva identidade própria.

---

## 75. Relacionamento entre Edição e Atividade

Cardinalidade:

```text
EDIÇÃO 1:N ATIVIDADE
```

Regras:

- toda atividade anual deverá possuir `editionId`;
- atividades de edições diferentes não deverão ser misturadas;
- correções deverão preservar o vínculo original.

---

## 76. Relacionamento entre Atividade e Local

Cardinalidade principal:

```text
ATIVIDADE N:1 LOCAL
```

Quando houver percurso ou múltiplos locais:

```text
ATIVIDADE N:N LOCAL
```

Nesse caso, deverá existir entidade associativa específica.

---

## 77. Relacionamento entre Pessoa e Função

Cardinalidade:

```text
PESSOA N:N FUNÇÃO
```

O relacionamento deverá registrar:

- edição;
- período;
- autoridade;
- fonte;
- estado;
- validação.

---

## 78. Relacionamento entre Grupo e Atividade

Cardinalidade:

```text
GRUPO N:N ATIVIDADE
```

Uma atividade poderá envolver mais de um grupo.

Um grupo poderá participar de múltiplas atividades e edições.

---

## 79. Relacionamento entre Documento e Fonte

Cardinalidade:

```text
DOCUMENTO N:N FONTE
```

O relacionamento deverá indicar:

```text
sourceRole
citation
verificationStatus
```

---

## 80. Relacionamento entre Publicação e Mídia

Cardinalidade:

```text
PUBLICAÇÃO N:N MÍDIA
```

A entidade associativa deverá registrar:

```text
displayOrder
mediaRole
caption
accessibilityDescription
```

---

## 81. Relacionamento entre Mídia e Autorização

Cardinalidade:

```text
MÍDIA 0..N:N AUTORIZAÇÃO
```

Mídias com pessoas identificáveis poderão exigir múltiplas autorizações.

---

## 82. Relacionamento entre Edição e Parceiro

Cardinalidade:

```text
EDIÇÃO N:N PARCEIRO
```

O vínculo deverá preservar:

- tipo de relação;
- período;
- contrapartida;
- autorização de marca;
- encerramento;
- registro histórico.

---

## 83. Cardinalidades obrigatórias

| Entidade de origem | Relação | Entidade de destino | Cardinalidade |
|---|---|---|---|
| Portal | possui | Edição | `1:N` |
| Edição | possui | Programação | `1:N` |
| Programação | organiza | Atividade | `1:N` |
| Atividade | pertence a | Edição | `N:1` |
| Atividade | ocorre em | Local | `N:1` ou `N:N` |
| Pessoa | exerce | Função | `N:N` |
| Pessoa | integra | Grupo | `N:N` |
| Grupo | participa de | Atividade | `N:N` |
| Documento | possui | Versão | `1:N` |
| Publicação | utiliza | Mídia | `N:N` |
| Edição | relaciona-se com | Parceiro | `N:N` |
| Dado | possui | Fonte | `N:1` ou `N:N` |

---

## 84. Restrições de unicidade

Deverão ser únicos, no mínimo:

- identificador da edição;
- ano da edição, quando houver apenas uma edição oficial anual;
- identificador da pessoa;
- identificador do grupo;
- identificador da atividade;
- identificador do local;
- caminho oficial do documento ativo;
- versão dentro de um documento;
- identificador de autorização.

---

## 85. Restrições temporais

Relacionamentos temporais deverão possuir:

```text
validFrom
validUntil
```

Quando `validUntil` não existir, o vínculo poderá ser considerado ativo, desde que seu estado também seja ativo.

---

## 86. Relacionamentos históricos

O encerramento de relacionamento não deverá apagar sua existência.

Deverão ser preservados:

- início;
- término;
- edição;
- contexto;
- responsável;
- fonte;
- motivo de encerramento.

---

## 87. Versionamento de entidades

Entidades críticas deverão possuir:

```text
version
createdAt
updatedAt
updatedBy
changeReason
```

Versões históricas deverão ser preservadas quando houver impacto:

- institucional;
- cultural;
- documental;
- jurídico;
- editorial;
- técnico;
- patrimonial.

---

## 88. Controle de concorrência

Quando houver múltiplas edições simultâneas, deverão ser utilizados mecanismos que evitem sobrescrita indevida.

Poderão ser utilizados:

```text
version
updatedAt
revisionId
```

---

## 89. Dados ausentes

Dados ausentes deverão ser diferenciados entre:

```text
não informado
não aplicável
desconhecido
aguardando confirmação
restrito
não autorizado para publicação
```

Valores desconhecidos não deverão ser inventados.

---

## 90. Valores nulos

O uso de valor nulo deverá possuir significado documentado.

Exemplo:

```json
{
  "endTime": null,
  "endTimeStatus": "not-informed"
}
```

---

## 91. Vocabulários controlados

Categorias, estados, tipos e classificações deverão utilizar vocabulários controlados.

Exemplos:

```text
activityStatus
validationStatus
publicationStatus
preservationStatus
accessLevel
criticality
```

---

## 92. Integridade semântica

A integridade semântica deverá impedir:

- uso de termos contraditórios;
- duplicação de categorias equivalentes;
- mudança de significado sem versão;
- mistura entre função permanente e anual;
- confusão entre pessoa e participação;
- confusão entre local e endereço;
- confusão entre fonte e autor.

---

## 93. Regras de nomenclatura

Entidades deverão utilizar nomes:

- claros;
- singulares;
- sem abreviações ambíguas;
- semanticamente estáveis;
- compatíveis com o domínio cultural;
- documentados em glossário.

Exemplo recomendado:

```text
TraditionalGroup
Activity
Edition
Location
Authorization
```

---

## 94. Convenções para atributos

Atributos técnicos deverão utilizar padrão consistente.

Exemplos:

```text
createdAt
updatedAt
publishedAt
editionId
personId
validationStatus
preservationStatus
```

Não deverão coexistir, sem justificativa:

```text
created_date
creationDate
dateCreated
createdAt
```

---

## 95. Tipos de dados

Os tipos mínimos serão:

| Tipo | Utilização |
|---|---|
| String | Textos curtos |
| Text | Conteúdos longos |
| Integer | Números inteiros |
| Decimal | Valores decimais |
| Boolean | Verdadeiro ou falso |
| Date | Data |
| Time | Horário |
| DateTime | Data e horário |
| Enum | Vocabulário controlado |
| Object | Estrutura composta |
| Array | Coleção |
| Reference | Relacionamento |
| URI | Endereço de recurso |

---

## 96. Datas e horários

Datas deverão utilizar:

```text
YYYY-MM-DD
```

Horários deverão utilizar:

```text
HH:MM
```

Datas e horários completos deverão utilizar padrão interoperável.

Exemplo:

```text
2026-07-15T19:00:00-04:00
```

---

## 97. Entidades canônicas

Uma entidade canônica será a referência oficial para determinado conceito.

Exemplo:

```text
Pessoa canônica
Local canônico
Grupo canônico
Documento canônico
```

Cópias de apresentação não deverão substituir a entidade canônica.

---

## 98. Resolução de duplicidades

Ao detectar duplicidade, deverá ocorrer:

1. identificação;

2. comparação;

3. verificação das fontes;

4. definição da entidade canônica;

5. migração dos relacionamentos;

6. preservação dos identificadores antigos como aliases;

7. registro da decisão;

8. auditoria.

---

## 99. Identificadores alternativos

Uma entidade poderá possuir identificadores históricos ou externos.

Exemplo:

```text
aliases
externalIds
legacyIds
```

Esses identificadores não deverão substituir o identificador institucional principal.

---

## 100. Migração entre modelos

Toda migração deverá preservar:

- entidades;
- atributos;
- identificadores;
- relacionamentos;
- cardinalidades;
- versões;
- fontes;
- autorizações;
- classificação;
- edição de origem;
- histórico.

---

## 101. Validação pós-migração

Após migração, deverão ser verificados:

- quantidade de entidades;
- chaves primárias;
- chaves estrangeiras;
- relacionamentos órfãos;
- duplicidades;
- cardinalidades;
- versões;
- fontes;
- autorizações;
- integridade histórica.

---

## 102. Relacionamentos órfãos

Considera-se órfão todo relacionamento cuja entidade de origem ou destino não exista.

Relacionamentos órfãos deverão ser:

- identificados;
- bloqueados;
- analisados;
- corrigidos;
- registrados;
- preservados como evidência quando relevantes.

---

## 103. Entidades incompletas

Entidades incompletas poderão permanecer temporariamente quando:

- estiverem em conferência;
- possuírem fonte identificada;
- apresentarem status apropriado;
- não forem publicadas como definitivas;
- possuírem responsável;
- tiverem prazo de regularização.

---

## 104. Entidades contestadas

Entidades contestadas deverão possuir:

```text
status: contested
contestReason
contestedAt
responsibleReview
```

Nenhuma contestação deverá apagar o registro anterior.

---

## 105. Auditoria do modelo

A auditoria deverá verificar:

- entidades sem identificador;
- atributos sem definição;
- relacionamentos órfãos;
- cardinalidades inválidas;
- duplicidades;
- referências entre edições incorretas;
- dados pessoais expostos;
- ausência de fonte;
- exclusões não registradas;
- versões não preservadas.

---

## 106. Indicadores mínimos

Deverão ser monitorados:

- total de entidades;
- entidades permanentes;
- entidades anuais;
- entidades sem fonte;
- entidades incompletas;
- relacionamentos órfãos;
- duplicidades;
- violações de cardinalidade;
- entidades sem responsável;
- registros contestados;
- relacionamentos históricos preservados;
- entidades da edição fundadora validadas.

---

## 107. Lista mínima de verificação de entidade

Antes da aprovação, deverá ser confirmado:

- [ ] identificador atribuído;
- [ ] nome definido;
- [ ] classe definida;
- [ ] finalidade documentada;
- [ ] atributos definidos;
- [ ] tipos de dados definidos;
- [ ] edição vinculada, quando aplicável;
- [ ] fonte registrada;
- [ ] responsável identificado;
- [ ] classificação de acesso definida;
- [ ] validação registrada;
- [ ] preservação definida;
- [ ] versionamento previsto;
- [ ] relacionamentos documentados;
- [ ] ausência de duplicidade confirmada.

---

## 108. Lista mínima de verificação de relacionamento

Antes da aprovação, deverá ser confirmado:

- [ ] entidade de origem existente;
- [ ] entidade de destino existente;
- [ ] finalidade do vínculo definida;
- [ ] cardinalidade definida;
- [ ] obrigatoriedade definida;
- [ ] integridade referencial validada;
- [ ] temporalidade definida;
- [ ] edição vinculada, quando aplicável;
- [ ] fonte registrada;
- [ ] preservação histórica prevista.

---

## 109. Não conformidades

Serão consideradas não conformidades:

- entidade sem identificador;
- entidade sem definição;
- duplicidade não tratada;
- relacionamento órfão;
- cardinalidade violada;
- referência entre edições incorreta;
- atributo com significado ambíguo;
- exclusão sem registro;
- entidade anual sem `editionId`;
- dado histórico sem fonte;
- vínculo cultural sem validação;
- apagamento de relacionamento fundador.

---

## 110. Tratamento das não conformidades

Toda não conformidade deverá ser:

1. identificada;

2. registrada;

3. classificada;

4. contida;

5. comunicada;

6. corrigida;

7. validada;

8. auditada;

9. preservada como evidência institucional.

---

## 111. Proteção da edição fundadora

As entidades e os relacionamentos da FESTANÇA 2026 deverão permanecer:

- identificados;
- vinculados à edição fundadora;
- versionados;
- contextualizados;
- rastreáveis;
- recuperáveis;
- preservados;
- protegidos contra substituição silenciosa.

---

## 112. Entidades fundadoras mínimas

A edição fundadora deverá preservar, no mínimo:

```text
Edition
Person
Role
PersonRole
TraditionalGroup
GroupMember
ActivityCategory
Activity
Program
Location
Document
Source
Authorization
Publication
Media
Partner
HistoricalRecord
```

---

## 113. Relacionamentos fundadores mínimos

Deverão ser preservados:

```text
Edição → Programação
Programação → Atividade
Atividade → Local
Atividade → Categoria
Pessoa → Função
Pessoa → Grupo
Grupo → Atividade
Documento → Fonte
Publicação → Mídia
Edição → Parceiro
Mídia → Autorização
```

---

## 114. Continuidade entre edições

Cada futura edição deverá reutilizar entidades permanentes sem sobrescrevê-las.

Exemplo:

```text
Pessoa permanente
        │
        ├── participação em 2026
        ├── participação em 2027
        └── participação em 2028
```

---

## 115. Separação entre pessoa e participação

A pessoa deverá existir independentemente de sua participação anual.

Modelo correto:

```text
Pessoa
   ↓
PessoaFunção
   ↓
Edição
```

Modelo inadequado:

```text
Pessoa2026
Pessoa2027
Pessoa2028
```

---

## 116. Separação entre local e ocorrência

O local permanente deverá existir independentemente da atividade.

Modelo correto:

```text
Local
  ↓
Atividade
  ↓
Edição
```

---

## 117. Separação entre documento e versão

O documento representa identidade contínua.

A versão representa estado específico.

```text
Documento
    ├── Versão 1.0.0
    ├── Versão 1.1.0
    └── Versão 2.0.0
```

---

## 118. Separação entre mídia e publicação

A mídia deverá existir independentemente da postagem onde foi utilizada.

```text
Imagem
   ↓
PublicaçãoMídia
   ↓
Publicação
```

---

## 119. Cadeia de responsabilidade

```text
AUTORIDADE INSTITUCIONAL
          ↓
GOVERNANÇA DE DADOS
          ↓
CURADORIA CULTURAL
          ↓
CURADORIA EDITORIAL
          ↓
ARQUITETURA DE DADOS
          ↓
CURADORIA TÉCNICA
          ↓
SEGURANÇA E PRIVACIDADE
          ↓
AUDITORIA E PRESERVAÇÃO
```

---

## 120. Matriz mínima de responsabilidade

| Atividade | Responsabilidade principal |
|---|---|
| Proposição de entidade | Área interessada |
| Definição semântica | Governança de dados |
| Validação cultural | Curadoria cultural |
| Validação editorial | Curadoria editorial |
| Modelagem técnica | Arquitetura de dados |
| Avaliação de privacidade | Segurança e privacidade |
| Aprovação | Autoridade competente |
| Implementação | Curadoria técnica |
| Auditoria | Auditoria institucional |
| Preservação | Gestão documental e arquivística |

---

## 121. Critérios mínimos de aprovação

Uma entidade somente poderá ser aprovada quando possuir:

- finalidade legítima;
- definição clara;
- identificador único;
- atributos suficientes;
- classificação definida;
- responsável;
- fonte;
- relacionamentos documentados;
- regras de validação;
- política de preservação;
- compatibilidade com a edição fundadora.

---

## 122. Critérios mínimos de aprovação de relacionamento

Um relacionamento somente poderá ser aprovado quando:

- possuir finalidade;
- conectar entidades legítimas;
- possuir cardinalidade definida;
- preservar integridade referencial;
- considerar temporalidade;
- indicar edição quando necessário;
- possuir fonte;
- permitir auditoria;
- preservar contexto histórico.

---

## 123. Declaração constitucional

Este documento declara que:

1. nenhuma entidade relevante existirá sem identificador;

2. nenhum atributo será criado sem significado definido;

3. nenhum relacionamento será incorporado sem finalidade;

4. nenhuma atividade anual existirá sem vínculo com sua edição;

5. nenhuma pessoa será duplicada para representar participação anual;

6. nenhum local será exposto sem classificação adequada;

7. nenhuma fonte será omitida quando necessária;

8. nenhuma versão relevante será apagada;

9. nenhum relacionamento histórico será destruído silenciosamente;

10. nenhuma edição futura substituirá a edição fundadora;

11. toda entidade deverá ser verificável e auditável;

12. toda evolução deverá preservar a continuidade histórica.

---

## 124. Princípio maior

**IDENTIFICAR ANTES DE RELACIONAR.**

**DEFINIR ANTES DE ESTRUTURAR.**

**CLASSIFICAR ANTES DE ARMAZENAR.**

**VALIDAR ANTES DE VINCULAR.**

**VERSIONAR ANTES DE ALTERAR.**

**REFERENCIAR SEM DUPLICAR.**

**CORRIGIR SEM APAGAR.**

**MIGRAR SEM ROMPER RELACIONAMENTOS.**

**PRESERVAR ANTES DE EVOLUIR.**

---

## 125. Compromisso permanente

Todo modelo de entidades e relacionamentos deverá proteger simultaneamente:

- as pessoas;
- as crianças;
- os adolescentes;
- as famílias;
- a comunidade;
- os grupos tradicionais;
- os festeiros;
- os responsáveis;
- a cultura;
- a história;
- a memória;
- a fé;
- as tradições;
- os conhecimentos;
- os documentos;
- os dados;
- os registros;
- as imagens;
- as vozes;
- os locais;
- as relações;
- os sistemas;
- a governança;
- a edição fundadora;
- as futuras edições;
- a continuidade;
- o patrimônio;
- o futuro.

---

## 126. Referências institucionais essenciais

Este documento deverá ser interpretado em conjunto com:

- `docs/festanca/portal-architecture.md`;
- `docs/festanca/edition-schema.md`;
- `docs/festanca/publication-workflow.md`;
- `docs/festanca/data/data-architecture.md`;
- `docs/festanca/data/data-classification-model.md`;
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
- `docs/festanca/governance/audit-and-compliance-policy.md`;
- `docs/festanca/governance/artificial-intelligence-and-automation-policy.md`.

---

## 127. Estado inicial deste documento

```text
DOCUMENTO: entity-relationship-model.md
FUNÇÃO: Modelagem constitucional de entidades e relacionamentos
REGIME: Permanente
EDIÇÃO FUNDADORA: FESTANÇA 2026
CRITICIDADE: Máxima
MUTABILIDADE: Estritamente controlada
PRESERVAÇÃO: Integral
VERSIONAMENTO: Obrigatório
RASTREABILIDADE: Permanente
INTEGRIDADE REFERENCIAL: Obrigatória
APLICABILIDADE: Portal Permanente e edições anuais
```

---

## 128. Vigência

Este documento entra em vigor a partir de sua aprovação e publicação no repositório oficial.

Sua vigência será permanente.

Toda revisão deverá:

- preservar as versões anteriores;
- registrar justificativas;
- identificar responsáveis;
- apresentar análise de impacto;
- preservar identificadores;
- manter compatibilidade histórica;
- proteger relacionamentos existentes;
- preservar a edição fundadora;
- respeitar a Arquitetura Constitucional de Dados;
- assegurar integridade referencial.

---

## 129. Encerramento institucional

Seguimos juntos, passo a passo.

Com método.

Com segurança.

Com preservação integral da edição fundadora.

**SOMOS TODOS, AVANÇO.**

Ao encontro do futuro.

**AMÉM.**
