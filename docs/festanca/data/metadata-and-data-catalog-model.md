# Modelo Constitucional de Metadados e Catálogo de Dados do Portal Permanente da FESTANÇA

> Constituição destinada a regulamentar a criação, a classificação, a padronização, a gestão, a validação, a utilização, a localização, a pesquisa, a interoperabilidade, o versionamento, a auditoria e a preservação dos metadados e do catálogo institucional de dados do Portal Permanente da FESTANÇA de Vila Bela da Santíssima Trindade — Mato Grosso — Brasil.

---

## 1. Identificação do documento

| Campo | Conteúdo |
|---|---|
| Documento | Modelo Constitucional de Metadados e Catálogo de Dados do Portal Permanente da FESTANÇA |
| Caminho oficial | `docs/festanca/data/metadata-and-data-catalog-model.md` |
| Classificação | Documento constitucional de dados |
| Domínio | Metadados, catálogo, dicionário, glossário e descoberta de ativos |
| Regime | Permanente |
| Criticidade | Máxima |
| Mutabilidade | Estritamente controlada |
| Preservação | Integral, auditável, versionada e recuperável |
| Edição fundadora | FESTANÇA 2026 |
| Situação | Constituição de metadados e catálogo institucional |
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
| Modelo de dados mestres | `docs/festanca/data/master-data-and-reference-data-model.md` |

---

## 2. Finalidade

Este documento estabelece o regime constitucional dos metadados e do catálogo institucional de dados utilizados pelo Portal Permanente da FESTANÇA.

Sua finalidade é assegurar que todo ativo institucionalmente relevante seja:

- identificável;
- localizável;
- compreensível;
- classificável;
- contextualizado;
- pesquisável;
- relacionável;
- acessível conforme autorização;
- tecnicamente descrito;
- administrativamente controlado;
- juridicamente protegido;
- historicamente preservado;
- versionado;
- auditável;
- compatível com a memória institucional;
- protegido contra perda de contexto.

Nenhum dado, documento, imagem, áudio, vídeo, registro, serviço ou ativo digital deverá depender exclusivamente do conhecimento informal de uma pessoa para ser localizado, compreendido ou preservado.

---

## 3. Objetivos estratégicos

São objetivos permanentes deste Modelo:

1. regulamentar os metadados descritivos;

2. regulamentar os metadados técnicos;

3. regulamentar os metadados administrativos;

4. regulamentar os metadados de preservação;

5. regulamentar os metadados de direitos;

6. regulamentar os metadados de segurança;

7. regulamentar os metadados de linhagem;

8. instituir o catálogo oficial de dados;

9. instituir o dicionário de dados;

10. instituir o glossário institucional;

11. facilitar a descoberta e a localização de ativos;

12. identificar responsáveis e proprietários;

13. registrar classificações;

14. registrar indicadores de qualidade;

15. controlar versões;

16. preservar relações entre ativos;

17. regulamentar mecanismos de busca;

18. permitir auditoria permanente;

19. preservar o contexto histórico;

20. proteger integralmente os metadados da edição fundadora.

---

## 4. Princípios fundamentais

Toda gestão de metadados e catálogo deverá observar:

- identificação;
- clareza;
- contextualização;
- padronização;
- interoperabilidade;
- completude;
- consistência;
- rastreabilidade;
- acessibilidade;
- segurança;
- temporalidade;
- versionamento;
- preservação;
- responsabilidade;
- auditabilidade;
- soberania cultural;
- continuidade institucional.

---

## 5. Conceito de metadado

Metadado é o dado utilizado para descrever, identificar, contextualizar, administrar, proteger, relacionar, localizar, validar ou preservar outro dado ou ativo.

Exemplos:

```text
Título
Autor
Data
Formato
Versão
Origem
Classificação
Direitos
Localização
Checksum
Responsável
Estado de preservação
```

---

## 6. Conceito de catálogo de dados

Catálogo de dados é o inventário institucional organizado dos conjuntos de dados, documentos, registros, ativos digitais, domínios, sistemas e serviços utilizados pelo Portal Permanente da FESTANÇA.

---

## 7. Conceito de dicionário de dados

Dicionário de dados é o conjunto estruturado de definições dos campos, atributos, tipos, formatos, regras, domínios, relacionamentos e restrições utilizados nos modelos de dados.

---

## 8. Conceito de glossário institucional

Glossário institucional é o conjunto controlado de termos, conceitos, expressões, siglas, denominações e definições oficiais utilizadas no contexto da FESTANÇA.

---

## 9. Conceito de ativo catalogável

Ativo catalogável é qualquer elemento institucional que necessite ser identificado, localizado, interpretado, protegido, reutilizado ou preservado.

---

## 10. Ativos sujeitos à catalogação

Deverão ser catalogados, quando aplicável:

- conjuntos de dados;
- arquivos JSON;
- planilhas;
- documentos;
- fotografias;
- áudios;
- vídeos;
- entrevistas;
- transmissões;
- mapas;
- publicações;
- bancos de dados;
- tabelas;
- APIs;
- integrações;
- sistemas;
- vocabulários;
- listas oficiais;
- esquemas;
- relatórios;
- backups;
- arquivos de preservação;
- registros da edição fundadora.

---

## 11. Metadados não são acessórios

Os metadados deverão ser considerados parte integrante do ativo.

A perda dos metadados poderá comprometer:

- autenticidade;
- interpretação;
- localização;
- direitos;
- rastreabilidade;
- preservação;
- valor histórico;
- possibilidade de reutilização.

---

## 12. Categorias constitucionais de metadados

As categorias oficiais serão:

```text
DESCRIPTIVE
TECHNICAL
ADMINISTRATIVE
PRESERVATION
RIGHTS
SECURITY
LINEAGE
QUALITY
STRUCTURAL
OPERATIONAL
```

---

## 13. Metadados descritivos

Metadados descritivos identificam e contextualizam o conteúdo do ativo.

Poderão incluir:

- título;
- subtítulo;
- descrição;
- assunto;
- palavras-chave;
- pessoa;
- grupo;
- local;
- atividade;
- data;
- edição;
- idioma;
- resumo;
- contexto cultural.

---

## 14. Metadados técnicos

Metadados técnicos descrevem propriedades tecnológicas.

Poderão incluir:

- formato;
- extensão;
- tamanho;
- codificação;
- resolução;
- duração;
- taxa de bits;
- dimensões;
- esquema;
- versão;
- software;
- ambiente;
- checksum.

---

## 15. Metadados administrativos

Metadados administrativos apoiam a gestão institucional.

Poderão incluir:

- responsável;
- proprietário;
- custodiante;
- situação;
- classificação;
- data de criação;
- data de atualização;
- prazo de retenção;
- fluxo de aprovação;
- canal de publicação.

---

## 16. Metadados de preservação

Metadados de preservação registram informações necessárias para manter o ativo utilizável e autêntico ao longo do tempo.

Poderão incluir:

- formato original;
- formato preservado;
- checksum;
- eventos de migração;
- eventos de conversão;
- estado de integridade;
- cópias existentes;
- localização de armazenamento;
- ações de preservação.

---

## 17. Metadados de direitos

Metadados de direitos registram:

- autoria;
- titularidade;
- licença;
- autorização;
- restrições;
- consentimento;
- condições de reutilização;
- atribuição;
- vigência;
- direito de imagem;
- direito de voz.

---

## 18. Metadados de segurança

Metadados de segurança deverão registrar:

- nível de acesso;
- classificação;
- restrições;
- perfis autorizados;
- prazo de acesso;
- sensibilidade;
- necessidade de autenticação;
- necessidade de criptografia;
- registro de incidentes.

---

## 19. Metadados de linhagem

Metadados de linhagem deverão registrar:

- origem;
- fontes;
- dados de entrada;
- transformações;
- responsável;
- versões;
- validações;
- aprovações;
- publicações;
- dados derivados.

---

## 20. Metadados de qualidade

Poderão registrar:

- completude;
- exatidão;
- consistência;
- validade;
- atualidade;
- unicidade;
- integridade;
- confiabilidade;
- data de avaliação;
- responsável pela avaliação.

---

## 21. Metadados estruturais

Metadados estruturais descrevem como as partes de um ativo se relacionam.

Exemplos:

- páginas de um documento;
- capítulos;
- arquivos de um conjunto;
- sequência de imagens;
- faixas de áudio;
- componentes de um sistema;
- entidades e relacionamentos.

---

## 22. Metadados operacionais

Metadados operacionais poderão registrar:

- frequência de atualização;
- disponibilidade;
- última execução;
- falhas;
- dependências;
- consumo;
- desempenho;
- ambiente;
- rotina responsável.

---

## 23. Identificador do ativo

Todo ativo catalogável deverá possuir identificador único e estável.

Exemplo:

```text
asset-festanca-2026-programacao-001
```

---

## 24. Registro mínimo do catálogo

Todo item deverá possuir, quando aplicável:

```text
catalogEntryId
assetId
assetType
title
description
owner
custodian
classification
location
version
status
createdAt
updatedAt
```

---

## 25. Estrutura mínima de metadados

```json
{
  "assetId": "dataset-festanca-2026-programacao",
  "title": "Programação Oficial da FESTANÇA 2026",
  "assetType": "dataset",
  "editionId": "festanca-2026",
  "classification": "PUBLIC",
  "version": "1.0.0",
  "status": "ACTIVE"
}
```

---

## 26. Catálogo institucional oficial

O Portal deverá manter catálogo institucional único ou logicamente unificado.

O catálogo poderá ser implementado em:

- arquivo estruturado;
- banco de dados;
- sistema administrativo;
- repositório;
- combinação controlada desses mecanismos.

---

## 27. Fonte oficial do catálogo

Deverá existir uma fonte de autoridade para o catálogo.

```text
catalogSystemOfRecord
```

Réplicas não deverão alterar silenciosamente a fonte oficial.

---

## 28. Domínios do catálogo

O catálogo poderá ser organizado por:

```text
DATA
DOCUMENTS
MEDIA
SYSTEMS
INTEGRATIONS
VOCABULARIES
ARCHIVES
PUBLICATIONS
PRESERVATION
```

---

## 29. Catálogo de conjuntos de dados

Cada conjunto deverá registrar:

- título;
- finalidade;
- conteúdo;
- esquema;
- proprietário;
- custodiante;
- classificação;
- qualidade;
- frequência de atualização;
- localização;
- versão;
- dependências;
- linhagem;
- retenção.

---

## 30. Catálogo documental

Cada documento deverá registrar:

- título;
- caminho;
- autoria;
- versão;
- classificação;
- situação;
- referências;
- aprovação;
- data;
- formato;
- checksum;
- preservação.

---

## 31. Catálogo audiovisual

Cada ativo audiovisual deverá registrar:

- tipo;
- título;
- autor;
- data;
- local;
- atividade;
- participantes;
- direitos;
- duração ou dimensões;
- formato;
- arquivo original;
- versões derivadas;
- checksum.

---

## 32. Catálogo de sistemas

Cada sistema deverá registrar:

- nome;
- finalidade;
- proprietário;
- responsável técnico;
- ambiente;
- tecnologia;
- dados processados;
- integrações;
- criticidade;
- dependências;
- situação;
- plano de continuidade.

---

## 33. Catálogo de integrações

Cada integração deverá registrar:

- origem;
- destino;
- finalidade;
- interface;
- protocolo;
- autenticação;
- frequência;
- formato;
- proprietário;
- versão;
- monitoramento;
- plano de encerramento.

---

## 34. Catálogo de vocabulários

Cada vocabulário deverá registrar:

- identificador;
- nome;
- finalidade;
- termos;
- versão;
- responsável;
- vigência;
- status;
- relações;
- domínios consumidores.

---

## 35. Catálogo de arquivos de preservação

Cada ativo preservado deverá registrar:

- identificador;
- objeto original;
- cópia preservada;
- formato;
- checksum;
- armazenamento;
- redundância;
- data de verificação;
- estado de integridade;
- eventos de preservação.

---

## 36. Dicionário institucional de dados

O Portal deverá manter dicionário contendo, no mínimo:

```text
fieldName
canonicalName
definition
dataType
format
required
domain
defaultValue
validationRules
examples
classification
```

---

## 37. Nome técnico do campo

O nome técnico deverá:

- ser estável;
- evitar ambiguidade;
- seguir convenção;
- não depender de texto de interface;
- ser documentado.

Exemplo:

```text
editionId
activityType
validationStatus
```

---

## 38. Nome canônico do campo

O nome canônico será a denominação institucional compreensível.

Exemplo:

```text
Nome técnico: locationId
Nome canônico: Identificador do local
```

---

## 39. Definição do campo

Toda definição deverá explicar:

- o que o campo representa;
- o que não representa;
- quando deve ser utilizado;
- como deve ser preenchido;
- quais restrições se aplicam.

---

## 40. Tipo de dado

Os tipos poderão incluir:

```text
string
integer
number
boolean
date
datetime
object
array
enum
identifier
uri
```

---

## 41. Formato

O formato deverá definir padrões adicionais.

Exemplos:

```text
YYYY-MM-DD
HH:mm
email
uri
uuid
slug
sha256
```

---

## 42. Obrigatoriedade

Cada campo deverá ser classificado como:

```text
REQUIRED
CONDITIONALLY_REQUIRED
OPTIONAL
PROHIBITED
```

---

## 43. Domínio permitido

Campos controlados deverão apontar para domínio de referência oficial.

Exemplo:

```text
domain: validation-status
```

---

## 44. Valor padrão

Valores padrão somente deverão ser utilizados quando não ocultarem ausência de informação.

---

## 45. Exemplos de preenchimento

O dicionário deverá possuir exemplos válidos e, quando útil, exemplos inválidos.

---

## 46. Glossário institucional

O glossário deverá consolidar termos relevantes à:

- cultura;
- governança;
- arquitetura;
- dados;
- publicação;
- preservação;
- segurança;
- participação comunitária;
- edição anual.

---

## 47. Termos culturais

Termos culturais deverão ser definidos com:

- legitimidade;
- contexto;
- respeito;
- participação comunitária;
- preservação de particularidades locais.

---

## 48. Termos técnicos

Termos técnicos deverão utilizar linguagem clara e compatível com a implementação.

---

## 49. Siglas

Toda sigla deverá possuir:

- forma completa;
- definição;
- contexto;
- primeiro uso por extenso;
- situação de uso.

---

## 50. Termos equivalentes

O glossário poderá registrar:

```text
preferredTerm
alternativeTerms
deprecatedTerms
relatedTerms
```

---

## 51. Termos descontinuados

Termos descontinuados deverão permanecer preservados para:

- pesquisa histórica;
- compatibilidade;
- migração;
- compreensão documental.

---

## 52. Proibição de redefinição silenciosa

Nenhum termo institucional deverá receber novo significado incompatível sem:

- nova versão;
- justificativa;
- impacto;
- aprovação;
- preservação da definição anterior.

---

## 53. Proprietário do ativo

O proprietário institucional será responsável por:

- finalidade;
- legitimidade;
- regras;
- classificação;
- decisões;
- autorizações;
- continuidade.

---

## 54. Custodiante

O custodiante será responsável por:

- armazenamento;
- proteção;
- disponibilidade;
- backups;
- integridade;
- recuperação;
- preservação técnica.

---

## 55. Steward de dados

O steward será responsável por:

- qualidade;
- definições;
- metadados;
- domínios;
- consistência;
- catalogação;
- revisão;
- interoperabilidade.

---

## 56. Curadoria cultural

A curadoria cultural deverá validar metadados relativos a:

- grupos tradicionais;
- festeiros;
- práticas;
- locais;
- funções;
- imagens;
- narrativas;
- saberes;
- memória coletiva.

---

## 57. Curadoria documental

A curadoria documental deverá validar:

- autoria;
- versão;
- data;
- classificação;
- referências;
- integridade;
- preservação;
- cadeia de custódia.

---

## 58. Responsabilidade editorial

A equipe editorial deverá:

- utilizar títulos consistentes;
- registrar descrições;
- aplicar palavras-chave controladas;
- vincular fontes;
- indicar edição;
- preservar versões;
- manter contexto.

---

## 59. Responsabilidade técnica

A equipe técnica deverá:

- implementar campos;
- preservar identificadores;
- manter índices;
- controlar versões;
- registrar checksums;
- garantir exportação;
- apoiar pesquisa;
- preservar integridade.

---

## 60. Classificação dos ativos

Todo ativo deverá possuir classificação conforme:

- acesso;
- criticidade;
- domínio;
- retenção;
- preservação;
- sensibilidade;
- edição.

---

## 61. Metadado de acesso

```text
accessLevel
```

Poderá utilizar:

```text
PUBLIC
INTERNAL
RESTRICTED
CONFIDENTIAL
CULTURALLY_RESTRICTED
ARCHIVAL_CONTROLLED
SYSTEM_SECRET
```

---

## 62. Metadado de criticidade

```text
criticality
```

Poderá utilizar:

```text
LOW
MODERATE
HIGH
CRITICAL
MAXIMUM
```

---

## 63. Metadado de preservação

```text
preservationStatus
```

Poderá utilizar:

```text
NOT_EVALUATED
ACTIVE
PRESERVED
AT_RISK
MIGRATION_REQUIRED
DAMAGED
LOST
```

---

## 64. Metadado de edição

Todo ativo anual deverá possuir:

```text
editionId
```

Exemplo:

```text
festanca-2026
```

---

## 65. Ativos permanentes

Ativos permanentes deverão utilizar classificação explícita.

```text
scope: permanent
```

---

## 66. Ativos compartilhados

Ativos reutilizados entre núcleo permanente e edições deverão utilizar:

```text
scope: shared
```

---

## 67. Ativos anuais

Ativos específicos de uma edição deverão utilizar:

```text
scope: annual
```

---

## 68. Relações entre ativos

O catálogo deverá registrar relações como:

```text
isPartOf
hasPart
isVersionOf
replaces
isReplacedBy
derivesFrom
supports
documents
references
dependsOn
integratesWith
```

---

## 69. Relação entre dado e documento

Um conjunto de dados poderá ser vinculado ao documento que define seu esquema, sua origem ou sua aprovação.

---

## 70. Relação entre mídia e atividade

Uma imagem, áudio ou vídeo deverá poder ser vinculado à atividade registrada.

---

## 71. Relação entre publicação e fonte

Toda publicação oficial deverá manter vínculo com suas fontes e evidências.

---

## 72. Relação entre sistema e dados

Todo sistema deverá indicar:

- dados que produz;
- dados que consome;
- dados que transforma;
- dados que preserva;
- dados que publica.

---

## 73. Relações temporais

Poderão ser registradas:

```text
validFrom
validTo
createdAt
updatedAt
publishedAt
archivedAt
preservedAt
```

---

## 74. Versionamento dos metadados

Os metadados deverão possuir versão própria quando alterações afetarem:

- significado;
- classificação;
- localização;
- direitos;
- preservação;
- relações;
- responsabilidade.

---

## 75. Versão do registro catalográfico

Exemplo:

```text
catalogRecordVersion: 1.2.0
```

---

## 76. Histórico de alterações

Toda alteração relevante deverá registrar:

```text
changeId
catalogEntryId
field
previousValue
newValue
changedBy
changedAt
reason
```

---

## 77. Alterações materiais

Serão materiais as mudanças em:

- título canônico;
- classificação;
- proprietário;
- custodiante;
- direitos;
- localização;
- versão;
- integridade;
- preservação;
- relações;
- edição.

---

## 78. Correções descritivas

Correções em títulos, nomes ou descrições deverão preservar:

- valor anterior;
- valor novo;
- responsável;
- fonte;
- justificativa;
- data.

---

## 79. Busca institucional

O catálogo deverá permitir busca por:

- título;
- descrição;
- identificador;
- pessoa;
- grupo;
- local;
- atividade;
- edição;
- data;
- tipo;
- palavra-chave;
- classificação;
- responsável;
- formato;
- status.

---

## 80. Índices

Poderão ser criados índices para:

- nomes;
- identificadores;
- datas;
- edições;
- categorias;
- palavras-chave;
- relacionamentos;
- texto integral;
- localização.

---

## 81. Pesquisa por nome

A pesquisa deverá considerar:

- nome canônico;
- aliases;
- grafias anteriores;
- acentuação;
- variações autorizadas.

---

## 82. Pesquisa por edição

A pesquisa deverá distinguir claramente:

```text
FESTANÇA 2026
FESTANÇA 2027
FESTANÇA 2028
```

---

## 83. Pesquisa histórica

A pesquisa histórica deverá permitir localizar:

- versões anteriores;
- termos descontinuados;
- nomes antigos;
- documentos arquivados;
- publicações retiradas;
- vínculos históricos.

---

## 84. Pesquisa por contexto cultural

Poderá considerar:

- grupo tradicional;
- celebração;
- função;
- local;
- período;
- manifestação;
- fonte oral;
- registro audiovisual.

---

## 85. Resultados de busca

Os resultados deverão exibir, quando permitido:

- título;
- tipo;
- descrição;
- edição;
- data;
- classificação;
- versão;
- estado;
- acesso;
- localização.

---

## 86. Proteção na pesquisa

A busca não deverá revelar indevidamente:

- dados pessoais;
- endereços privados;
- coordenadas restritas;
- conhecimentos tradicionais protegidos;
- credenciais;
- documentos confidenciais;
- dados de crianças e adolescentes.

---

## 87. Indexação de ativos restritos

Ativos restritos poderão ser:

- totalmente ocultos;
- parcialmente descritos;
- identificados apenas a perfis autorizados;
- apresentados sem conteúdo sensível.

---

## 88. Localização dos ativos

Todo ativo deverá registrar localização lógica ou física.

Exemplos:

```text
repositoryPath
storageLocation
archiveLocation
publicUrl
systemIdentifier
```

---

## 89. Caminho oficial

Documentos do repositório deverão registrar caminho oficial.

Exemplo:

```text
docs/festanca/data/metadata-and-data-catalog-model.md
```

---

## 90. Localização múltipla

Quando houver múltiplas cópias, deverão ser distinguidas:

- cópia oficial;
- réplica;
- backup;
- cópia de preservação;
- cópia pública;
- derivação.

---

## 91. Localização física

Documentos físicos deverão registrar:

- acervo;
- caixa;
- pasta;
- responsável;
- condição;
- forma de consulta.

---

## 92. Descoberta de ativos

A descoberta deverá permitir que usuários autorizados compreendam:

- quais ativos existem;
- onde estão;
- quem responde por eles;
- como acessá-los;
- qual sua classificação;
- qual sua qualidade;
- qual sua versão;
- com quais ativos se relacionam.

---

## 93. Dados não catalogados

Ativos não catalogados deverão ser identificados como risco institucional.

---

## 94. Catalogação mínima obrigatória

Nenhum ativo crítico deverá entrar em produção, publicação ou preservação permanente sem catalogação mínima.

---

## 95. Qualidade dos metadados

Os metadados deverão atender a:

- completude;
- exatidão;
- consistência;
- atualidade;
- unicidade;
- validade;
- integridade;
- clareza;
- acessibilidade;
- rastreabilidade.

---

## 96. Indicadores de qualidade catalográfica

Poderão ser medidos:

- campos preenchidos;
- ativos com proprietário;
- ativos com classificação;
- ativos com versão;
- ativos com localização;
- ativos com fonte;
- ativos com direitos;
- ativos com checksum;
- ativos com preservação definida.

---

## 97. Taxa de catalogação

```text
Ativos catalogados
------------------ × 100
Ativos identificados
```

---

## 98. Taxa de completude dos metadados

```text
Campos obrigatórios preenchidos
------------------------------- × 100
Campos obrigatórios previstos
```

---

## 99. Taxa de ativos com proprietário

```text
Ativos com proprietário definido
-------------------------------- × 100
Ativos avaliados
```

---

## 100. Taxa de ativos localizáveis

```text
Ativos com localização válida
----------------------------- × 100
Ativos catalogados
```

---

## 101. Taxa de preservação identificada

```text
Ativos com política de preservação
---------------------------------- × 100
Ativos críticos
```

---

## 102. Validação dos metadados

A validação deverá verificar:

- campos obrigatórios;
- tipos;
- formatos;
- domínios;
- identificadores;
- relações;
- localização;
- versão;
- classificação;
- coerência temporal.

---

## 103. Validação semântica

A validação semântica deverá verificar:

- título adequado;
- descrição coerente;
- termo correto;
- contexto cultural;
- edição correta;
- relação legítima;
- atribuição responsável.

---

## 104. Validação técnica

A validação técnica poderá verificar:

- existência do arquivo;
- extensão;
- tamanho;
- checksum;
- esquema;
- formato;
- caminho;
- integridade;
- compatibilidade.

---

## 105. Validação humana

Deverá ser obrigatória para metadados críticos relacionados a:

- pessoas;
- grupos tradicionais;
- funções;
- memória;
- direitos;
- conhecimentos tradicionais;
- edição fundadora;
- classificação cultural.

---

## 106. Metadados gerados automaticamente

Poderão ser gerados automaticamente:

- tamanho;
- formato;
- extensão;
- duração;
- dimensões;
- checksum;
- data técnica;
- identificador de sistema.

---

## 107. Validação de metadados automáticos

Metadados automáticos deverão ser verificados quando:

- houver conflito;
- o ativo for crítico;
- ocorrer migração;
- houver conversão;
- o valor afetar preservação;
- houver suspeita de erro.

---

## 108. Inteligência artificial na catalogação

A inteligência artificial poderá auxiliar em:

- sugestão de palavras-chave;
- transcrição;
- classificação preliminar;
- identificação de duplicidades;
- resumo;
- extração de metadados;
- pesquisa semântica.

---

## 109. Limites da inteligência artificial

A inteligência artificial não deverá:

- atribuir autoria sem evidência;
- identificar pessoas como fato sem validação;
- decidir restrições culturais;
- alterar nomes canônicos;
- apagar divergências;
- determinar direitos;
- publicar metadados críticos sem revisão humana.

---

## 110. Registro do uso de IA

Quando materialmente relevante, deverá ser registrado:

```text
aiAssisted
purpose
modelOrService
generatedFields
humanReviewer
validationStatus
generatedAt
```

---

## 111. Interoperabilidade de metadados

O modelo deverá permitir interoperabilidade com:

- sistemas internos;
- repositórios;
- ferramentas de preservação;
- plataformas de publicação;
- arquivos;
- bibliotecas;
- museus;
- instituições culturais;
- serviços autorizados.

---

## 112. Mapeamento de padrões

Quando necessário, deverão ser documentados mapeamentos entre:

- campo institucional;
- campo externo;
- transformação;
- regra;
- perda potencial;
- versão.

---

## 113. Exportação do catálogo

O catálogo deverá poder ser exportado em formatos como:

```text
JSON
CSV
XML
PDF
```

conforme finalidade e classificação.

---

## 114. Exportação pública

A exportação pública deverá conter somente metadados aprovados para acesso público.

---

## 115. Exportação administrativa

A exportação administrativa poderá conter campos internos, desde que protegida e autorizada.

---

## 116. Importação de metadados

A importação deverá verificar:

- origem;
- esquema;
- versão;
- identificadores;
- domínios;
- duplicidades;
- classificação;
- integridade;
- conflitos.

---

## 117. Migração do catálogo

Toda migração deverá preservar:

- identificadores;
- títulos;
- descrições;
- classificações;
- relacionamentos;
- direitos;
- versões;
- proprietários;
- localizações;
- histórico;
- vínculos com a edição fundadora.

---

## 118. Conversão de metadados

Conversões deverão registrar:

```text
sourceSchema
targetSchema
mappingVersion
convertedBy
convertedAt
validationResult
```

---

## 119. Perda de informação

Qualquer perda potencial de metadados durante conversão deverá ser:

- identificada;
- documentada;
- avaliada;
- autorizada;
- mitigada;
- preservada em relatório.

---

## 120. Auditoria do catálogo

A auditoria deverá verificar:

- ativos sem registro;
- registros sem ativo;
- caminhos inválidos;
- proprietários ausentes;
- classificações incorretas;
- versões inconsistentes;
- direitos ausentes;
- metadados incompletos;
- duplicidades;
- vínculos rompidos;
- riscos à edição fundadora.

---

## 121. Auditoria dos metadados

Deverá verificar:

- exatidão;
- completude;
- consistência;
- atualidade;
- rastreabilidade;
- conformidade com o dicionário;
- conformidade com vocabulários;
- conformidade com acesso;
- preservação.

---

## 122. Periodicidade da auditoria

A auditoria poderá ocorrer:

- periodicamente;
- antes da publicação;
- após migração;
- após incidente;
- no encerramento de edição;
- antes de mudança estrutural;
- por amostragem;
- por criticidade.

---

## 123. Alertas

Deverão ser gerados alertas para:

- ativo sem proprietário;
- ativo sem classificação;
- caminho quebrado;
- arquivo inexistente;
- checksum divergente;
- metadado obrigatório ausente;
- domínio inválido;
- versão incompatível;
- duplicidade;
- alteração de registro fundador;
- ativo crítico sem preservação.

---

## 124. Não conformidades

Serão consideradas não conformidades:

- ativo crítico sem catálogo;
- metadado sem definição;
- campo fora do dicionário;
- uso de termo não autorizado;
- proprietário ausente;
- classificação ausente;
- localização inválida;
- versão não registrada;
- direitos não definidos;
- relação sem rastreabilidade;
- alteração indevida de metadado fundador.

---

## 125. Classificação das não conformidades

| Nível | Definição |
|---|---|
| Baixa | Falha descritiva limitada |
| Média | Compromete localização ou compreensão |
| Alta | Compromete operação, integração ou direitos |
| Crítica | Compromete autenticidade, segurança ou preservação |
| Máxima | Compromete a edição fundadora ou a memória institucional |

---

## 126. Tratamento das não conformidades

Toda não conformidade deverá ser:

1. identificada;

2. registrada;

3. classificada;

4. atribuída a responsável;

5. corrigida;

6. validada;

7. versionada;

8. sincronizada;

9. auditada;

10. preservada como evidência.

---

## 127. Ciclo de vida do registro catalográfico

```text
PROPOSTO
   ↓
CATALOGADO
   ↓
VALIDADO
   ↓
ATIVO
   ↓
ATUALIZADO
   ↓
ARQUIVADO
   ↓
PRESERVADO
```

---

## 128. Estados do catálogo

```text
PROPOSED
DRAFT
UNDER_REVIEW
ACTIVE
INACTIVE
ARCHIVED
PRESERVED
SUPERSEDED
```

---

## 129. Criação do registro

A criação deverá exigir:

- ativo identificado;
- responsável;
- tipo;
- título;
- classificação;
- localização;
- versão;
- fonte;
- situação.

---

## 130. Atualização do registro

A atualização deverá preservar:

- valor anterior;
- valor novo;
- responsável;
- data;
- motivo;
- versão;
- impacto.

---

## 131. Desativação

Um registro poderá ser desativado quando o ativo:

- deixar de existir;
- for substituído;
- for incorporado;
- perder validade operacional;
- permanecer apenas para referência histórica.

---

## 132. Desativação não implica apagamento

O registro desativado deverá permanecer recuperável.

---

## 133. Registro órfão

Registro órfão é aquele cujo ativo não pode ser localizado.

Deverá ser:

- identificado;
- investigado;
- classificado;
- preservado;
- vinculado a ocorrência;
- submetido a recuperação.

---

## 134. Ativo não catalogado

Ativo não catalogado deverá entrar em fluxo de inventário e regularização.

---

## 135. Catálogo como instrumento de governança

O catálogo deverá apoiar:

- decisões;
- segurança;
- auditoria;
- preservação;
- publicação;
- migração;
- integração;
- qualidade;
- transparência;
- continuidade.

---

## 136. Catálogo como instrumento de memória

O catálogo deverá permitir reconhecer:

- o que existiu;
- quando existiu;
- quem produziu;
- como foi utilizado;
- onde foi preservado;
- quais versões existiram;
- como se relaciona à história da FESTANÇA.

---

## 137. Preservação histórica dos metadados

Deverão ser preservados:

- títulos anteriores;
- descrições anteriores;
- classificações;
- proprietários;
- localizações;
- versões;
- relações;
- direitos;
- eventos de preservação;
- decisões;
- migrações;
- correções.

---

## 138. Metadados da edição fundadora

Os metadados da FESTANÇA 2026 serão considerados patrimônio documental fundador.

---

## 139. Ativos fundadores prioritários

Deverão possuir catalogação completa, quando aplicável:

- programação oficial;
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
- listas oficiais;
- arquivos JSON;
- registros de migração;
- decisões institucionais.

---

## 140. Identificação fundadora

Todo ativo de 2026 deverá possuir vínculo explícito:

```text
editionId: festanca-2026
founderAsset: true
```

---

## 141. Preservação dos títulos originais

Títulos utilizados em 2026 deverão ser preservados, mesmo que futuras versões adotem título atualizado.

---

## 142. Preservação dos caminhos originais

Caminhos anteriores deverão ser preservados como:

- caminho legado;
- alias;
- origem;
- referência de migração;
- evidência histórica.

---

## 143. Metadados de migração fundadora

Toda migração deverá registrar:

```text
originalPath
destinationPath
migrationId
migratedAt
migratedBy
validationStatus
checksumBefore
checksumAfter
```

---

## 144. Proteção contra sobrescrita

Nenhuma edição futura deverá sobrescrever os metadados históricos de 2026.

---

## 145. Compatibilidade entre edições

O catálogo deverá distinguir:

- ativos permanentes;
- ativos compartilhados;
- ativos anuais;
- ativos fundadores;
- ativos históricos;
- ativos arquivados.

---

## 146. Consulta por edição

Deverá ser possível recuperar todos os ativos vinculados a uma edição específica.

---

## 147. Consulta permanente

Deverá ser possível recuperar ativos que pertencem ao núcleo permanente independentemente de edição.

---

## 148. Relação entre versões anuais

Ativos semelhantes de edições diferentes deverão ser relacionados sem perder suas identidades.

Exemplo:

```text
programacao-2026.json
programacao-2027.json
```

Poderão compartilhar tipo e esquema, mas não o mesmo identificador anual.

---

## 149. Lista mínima de catalogação de dados

- [ ] identificador atribuído;
- [ ] título definido;
- [ ] descrição registrada;
- [ ] proprietário identificado;
- [ ] custodiante identificado;
- [ ] classificação definida;
- [ ] esquema vinculado;
- [ ] versão registrada;
- [ ] localização válida;
- [ ] qualidade avaliada;
- [ ] linhagem vinculada;
- [ ] retenção definida;
- [ ] preservação avaliada.

---

## 150. Lista mínima de catalogação documental

- [ ] documento identificado;
- [ ] título validado;
- [ ] caminho oficial registrado;
- [ ] autoria registrada;
- [ ] versão definida;
- [ ] data registrada;
- [ ] classificação definida;
- [ ] referências vinculadas;
- [ ] aprovação registrada;
- [ ] formato identificado;
- [ ] checksum registrado;
- [ ] preservação definida.

---

## 151. Lista mínima de catalogação audiovisual

- [ ] ativo identificado;
- [ ] tipo definido;
- [ ] autor ou responsável registrado;
- [ ] data registrada;
- [ ] local vinculado;
- [ ] atividade vinculada;
- [ ] participantes avaliados;
- [ ] direitos definidos;
- [ ] formato identificado;
- [ ] arquivo original preservado;
- [ ] checksum registrado;
- [ ] versão derivada vinculada.

---

## 152. Lista mínima de metadados de preservação

- [ ] formato original identificado;
- [ ] checksum registrado;
- [ ] localização preservável definida;
- [ ] cópia de segurança verificada;
- [ ] estado de integridade registrado;
- [ ] eventos de migração registrados;
- [ ] responsável identificado;
- [ ] data de verificação definida;
- [ ] risco avaliado.

---

## 153. Lista mínima de qualidade catalográfica

- [ ] campos obrigatórios preenchidos;
- [ ] termos controlados utilizados;
- [ ] nomes canônicos verificados;
- [ ] relações válidas;
- [ ] classificação coerente;
- [ ] versão consistente;
- [ ] localização testada;
- [ ] proprietário confirmado;
- [ ] direitos avaliados;
- [ ] edição corretamente vinculada.

---

## 154. Exceções

Exceções somente poderão ocorrer quando:

- houver justificativa;
- a limitação estiver registrada;
- o ativo estiver identificado;
- o responsável estiver definido;
- o risco estiver avaliado;
- houver prazo para regularização;
- a autoridade competente aprovar;
- a edição fundadora permanecer protegida.

---

## 155. Declaração constitucional

Este documento declara que:

1. nenhum ativo crítico permanecerá deliberadamente invisível à governança;

2. nenhum registro catalográfico será confundido com o próprio ativo;

3. nenhum metadado crítico será alterado silenciosamente;

4. nenhum campo institucional ficará sem definição;

5. nenhum termo cultural será padronizado sem legitimidade;

6. nenhum caminho técnico será considerado suficiente sem contexto;

7. nenhum ativo será considerado preservado apenas porque existe uma cópia;

8. nenhuma inteligência artificial substituirá a validação cultural;

9. nenhum catálogo apagará versões, nomes ou localizações anteriores;

10. nenhuma edição futura sobrescreverá os metadados da edição fundadora;

11. todo ativo deverá ser identificável, localizável, compreensível, relacionável e preservável.

---

## 156. Princípio maior

**IDENTIFICAR ANTES DE CATALOGAR.**

**DESCREVER ANTES DE PUBLICAR.**

**CLASSIFICAR ANTES DE DISPONIBILIZAR.**

**DEFINIR ANTES DE IMPLEMENTAR.**

**RELACIONAR ANTES DE ISOLAR.**

**LOCALIZAR ANTES DE DECLARAR PRESERVADO.**

**VERSIONAR ANTES DE ALTERAR.**

**VALIDAR ANTES DE INDEXAR.**

**PROTEGER ANTES DE EXPOR.**

**REGISTRAR DIREITOS ANTES DE REUTILIZAR.**

**PRESERVAR O CONTEXTO ANTES DE MIGRAR.**

**AUDITAR SEM APAGAR A HISTÓRIA.**

**EVOLUIR SEM ROMPER A MEMÓRIA CATALOGADA.**

---

## 157. Compromisso permanente

Toda gestão de metadados e catálogo deverá proteger simultaneamente:

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
- os curadores;
- os pesquisadores;
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
- os documentos;
- os dados;
- os registros;
- as fontes;
- as imagens;
- as vozes;
- os vídeos;
- os locais;
- os sistemas;
- as integrações;
- os relacionamentos;
- os identificadores;
- os metadados;
- os catálogos;
- os dicionários;
- os glossários;
- os vocabulários;
- as versões;
- as evidências;
- os direitos;
- a governança;
- a edição fundadora;
- as futuras edições;
- a continuidade;
- o patrimônio;
- o futuro.

---

## 158. Referências institucionais essenciais

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
- `docs/festanca/governance/accessibility-and-digital-inclusion-policy.md`;
- `docs/festanca/governance/artificial-intelligence-and-automation-policy.md`;
- `docs/festanca/governance/audit-and-compliance-policy.md`;
- `docs/festanca/governance/change-control-policy.md`;
- `docs/festanca/governance/risk-management-and-resilience-policy.md`.

---

## 159. Estado inicial deste documento

```text
DOCUMENTO: metadata-and-data-catalog-model.md
FUNÇÃO: Gestão constitucional de metadados e catálogo de dados
REGIME: Permanente
EDIÇÃO FUNDADORA: FESTANÇA 2026
CRITICIDADE: Máxima
MUTABILIDADE: Estritamente controlada
PRESERVAÇÃO: Integral
METADADOS DESCRITIVOS: Obrigatórios quando aplicáveis
METADADOS TÉCNICOS: Obrigatórios
METADADOS ADMINISTRATIVOS: Obrigatórios
METADADOS DE PRESERVAÇÃO: Obrigatórios para ativos críticos
METADADOS DE DIREITOS: Obrigatórios
METADADOS DE SEGURANÇA: Obrigatórios
METADADOS DE LINHAGEM: Rastreáveis
CATÁLOGO INSTITUCIONAL: Obrigatório
DICIONÁRIO DE DADOS: Obrigatório
GLOSSÁRIO INSTITUCIONAL: Controlado
IDENTIFICAÇÃO DOS ATIVOS: Obrigatória
LOCALIZAÇÃO DOS ATIVOS: Registrada
RESPONSÁVEIS E PROPRIETÁRIOS: Identificados
CLASSIFICAÇÃO: Obrigatória
QUALIDADE: Mensurável
VERSIONAMENTO: Obrigatório
RELAÇÕES ENTRE ATIVOS: Rastreáveis
MECANISMOS DE BUSCA: Controlados
AUDITORIA: Permanente
PRESERVAÇÃO HISTÓRICA: Integral
PROTEÇÃO DOS METADADOS FUNDADORES: Máxima
RASTREABILIDADE: Integral
APLICABILIDADE: Portal Permanente e edições anuais
```

---

## 160. Vigência

Este documento entra em vigor a partir de sua aprovação e publicação no repositório oficial.

Sua vigência será permanente.

Toda revisão deverá:

- preservar as versões anteriores;
- registrar justificativas;
- identificar responsáveis;
- apresentar análise de impacto;
- preservar identificadores catalográficos;
- preservar títulos e descrições anteriores;
- documentar alterações no dicionário;
- documentar alterações no glossário;
- manter compatibilidade histórica;
- atualizar índices e mecanismos de busca;
- preservar classificações anteriores;
- proteger dados pessoais;
- preservar direitos e autorizações;
- preservar relações entre ativos;
- proteger os metadados da edição fundadora;
- respeitar os modelos constitucionais de dados;
- assegurar rastreabilidade integral.

---

## 161. Encerramento institucional

Seguimos juntos, passo a passo.

Com método.

Com segurança.

Com preservação integral da edição fundadora.

**SOMOS TODOS, AVANÇO.**

Ao encontro do futuro.

**AMÉM.**
