# Modelo Constitucional de Identificadores e Referências do Portal Permanente da FESTANÇA

> Constituição destinada a regulamentar a criação, a atribuição, a utilização, a estabilidade, a validação, a vinculação, a migração, a resolução, a preservação e a auditoria dos identificadores e das referências utilizados pelo Portal Permanente da FESTANÇA de Vila Bela da Santíssima Trindade — Mato Grosso — Brasil.

---

## 1. Identificação do documento

| Campo | Conteúdo |
|---|---|
| Documento | Modelo Constitucional de Identificadores e Referências do Portal Permanente da FESTANÇA |
| Caminho oficial | `docs/festanca/data/identifiers-and-references.md` |
| Classificação | Documento constitucional de dados |
| Domínio | Identificadores, referências e integridade referencial |
| Regime | Permanente |
| Criticidade | Máxima |
| Mutabilidade | Estritamente controlada |
| Preservação | Integral, auditável, versionada e recuperável |
| Edição fundadora | FESTANÇA 2026 |
| Situação | Constituição de identificação e referência |
| Versão inicial | `1.0.0` |
| Aplicabilidade | Portal Permanente e edições anuais |
| Vigência | Permanente |
| Documento superior | `docs/festanca/data/data-architecture.md` |
| Documento estrutural principal | `docs/festanca/data/entity-relationship-model.md` |
| Documento classificatório | `docs/festanca/data/data-classification-model.md` |

---

## 2. Finalidade

Este documento estabelece o regime oficial de identificadores e referências utilizados no Portal Permanente da FESTANÇA.

Sua finalidade é assegurar que toda entidade, registro, documento, edição, atividade, pessoa, grupo, local, mídia, fonte, autorização, publicação, relacionamento e ativo digital relevante seja:

- identificado de forma única;
- distinguível de outros registros;
- referenciável;
- localizável;
- verificável;
- rastreável;
- preservável;
- migrável;
- auditável;
- compatível com futuras tecnologias;
- vinculado corretamente ao seu contexto;
- protegido contra duplicidade e substituição silenciosa.

Nenhum registro relevante deverá depender exclusivamente de nome, posição em arquivo, endereço temporário ou plataforma externa para ser identificado.

---

## 3. Objetivos estratégicos

São objetivos permanentes deste Modelo:

1. instituir identificadores únicos e estáveis;

2. impedir ambiguidades entre registros;

3. preservar vínculos entre entidades;

4. regulamentar referências internas e externas;

5. assegurar integridade referencial;

6. controlar aliases e identificadores legados;

7. permitir migrações sem perda de vínculos;

8. facilitar resolução de duplicidades;

9. preservar referências históricas;

10. assegurar a continuidade entre edições;

11. proteger os identificadores da edição fundadora;

12. permitir auditoria completa das relações de dados.

---

## 4. Princípios fundamentais

Todo identificador e toda referência deverão observar:

- unicidade;
- estabilidade;
- clareza;
- persistência;
- não reutilização;
- independência de apresentação;
- interoperabilidade;
- rastreabilidade;
- reversibilidade;
- verificabilidade;
- integridade referencial;
- preservação histórica;
- continuidade institucional;
- soberania cultural.

---

## 5. Conceito de identificador

Identificador é o valor utilizado para distinguir, de forma única e estável, uma entidade, um registro, um relacionamento, um documento, uma versão ou um ativo.

Exemplos:

```text
festanca-2026
group-congo
role-imperatriz
location-praca-da-bandeira
activity-2026-05-23-reza-imperatriz
document-data-architecture
```

---

## 6. Conceito de referência

Referência é o vínculo utilizado para apontar de um registro para outro.

Exemplos:

```text
editionId
personId
roleId
locationId
activityId
documentId
sourceId
authorizationId
```

Uma referência deverá conduzir a registro existente, legítimo e compatível com o contexto.

---

## 7. Conceito de chave institucional

Chave institucional é o identificador reconhecido oficialmente pelo Portal Permanente como referência principal de uma entidade.

Ela deverá ser:

- única;
- permanente;
- controlada;
- documentada;
- preservada;
- independente de plataforma externa;
- resistente a mudanças de nome.

---

## 8. Conceito de alias

Alias é um identificador alternativo vinculado ao identificador institucional principal.

Poderá representar:

- nome popular;
- grafia alternativa;
- abreviação;
- identificador antigo;
- slug anterior;
- código externo;
- referência histórica;
- nome utilizado em edição específica.

---

## 9. Conceito de identificador legado

Identificador legado é aquele utilizado em sistema, arquivo, documento ou versão anterior.

Exemplos:

```text
legacy-activity-001
old-location-12
programacao-item-05
```

Identificadores legados não deverão ser apagados quando ainda forem necessários para rastreabilidade.

---

## 10. Conceito de referência externa

Referência externa é o vínculo com recurso fora do repositório ou da infraestrutura institucional.

Exemplos:

- URL oficial;
- identificador de plataforma;
- código de mapa;
- endereço de rede social;
- identificador de vídeo;
- referência bibliográfica;
- registro público;
- número de processo;
- identificador de serviço.

---

## 11. Estrutura geral

```text
IDENTIFICADOR PRINCIPAL
          │
          ├── Alias
          ├── Identificador legado
          ├── Referência interna
          ├── Referência externa
          ├── Identificador de versão
          ├── Identificador de relacionamento
          └── Metadados de rastreabilidade
```

---

## 12. Classes de identificadores

Os identificadores serão classificados como:

| Classe | Finalidade |
|---|---|
| Institucional | Identificação oficial permanente |
| Técnico | Utilização interna por sistemas |
| Humano-legível | Leitura e reconhecimento por pessoas |
| Numérico | Sequenciamento ou integração |
| Composto | Formado por múltiplos elementos |
| Externo | Produzido por plataforma ou entidade externa |
| Legado | Herdado de versão anterior |
| Temporário | Utilizado durante processamento controlado |
| Histórico | Preservado por valor documental |
| De versão | Identifica estado específico de registro |

---

## 13. Identificador institucional

O identificador institucional deverá ser a referência principal de cada entidade.

Exemplo:

```text
group-congo
```

Ele não deverá ser substituído apenas porque:

- o nome exibido mudou;
- a grafia foi corrigida;
- o registro foi migrado;
- a plataforma foi alterada;
- a estrutura de diretórios evoluiu;
- uma nova edição foi criada.

---

## 14. Identificador técnico

Identificadores técnicos poderão utilizar:

- UUID;
- ULID;
- hash;
- sequência controlada;
- chave gerada por sistema;
- chave alfanumérica.

Eles deverão permanecer associados ao identificador institucional quando ambos existirem.

---

## 15. Identificador humano-legível

Identificadores humano-legíveis deverão favorecer:

- compreensão;
- conferência;
- manutenção;
- pesquisa;
- auditoria;
- preservação.

Exemplo:

```text
activity-2026-05-23-reza-imperatriz
```

---

## 16. Identificador numérico

Identificadores exclusivamente numéricos poderão ser utilizados para:

- sequenciamento;
- integração;
- controle interno;
- importação;
- compatibilidade com sistemas legados.

Eles não deverão ser a única referência preservada quando não possuírem significado contextual.

---

## 17. Identificador composto

Identificadores compostos poderão reunir elementos como:

```text
tipo + edição + data + categoria + sequência
```

Exemplo:

```text
activity-2026-05-23-reza-imperatriz-001
```

---

## 18. Identificadores temporários

Identificadores temporários poderão ser utilizados durante:

- importação;
- migração;
- conferência;
- validação;
- processamento;
- geração;
- testes;
- homologação.

Eles deverão ser substituídos por identificadores definitivos antes da publicação oficial, quando aplicável.

---

## 19. Identificadores históricos

Identificadores históricos deverão ser preservados quando:

- aparecerem em documentos antigos;
- forem citados externamente;
- estiverem vinculados a registros publicados;
- forem necessários à migração;
- possuírem valor documental;
- integrarem a edição fundadora.

---

## 20. Identificadores de versão

Toda versão relevante poderá possuir identificador próprio.

Exemplo:

```text
document-data-architecture@1.0.0
document-data-architecture@1.1.0
```

A identidade do documento deverá permanecer distinta da identidade da versão.

---

## 21. Identificadores de relacionamento

Relacionamentos com valor próprio deverão possuir identificador específico.

Exemplos:

```text
person-role-2026-evelyn-imperatriz
edition-partner-2026-partner-001
activity-group-2026-congo-001
```

---

## 22. Requisitos obrigatórios

Todo identificador institucional deverá ser:

- único;
- estável;
- não reutilizável;
- não ambíguo;
- legível quando possível;
- documentado;
- compatível com o domínio;
- preservado após arquivamento;
- independente da posição física do arquivo.

---

## 23. Imutabilidade

O identificador institucional deverá ser imutável após sua aprovação.

Mudanças somente poderão ocorrer diante de:

- colisão comprovada;
- erro estrutural grave;
- risco jurídico;
- exposição de dado pessoal;
- incompatibilidade técnica irreparável;
- decisão institucional formal.

Mesmo nesse caso, o identificador anterior deverá ser preservado como alias ou legado.

---

## 24. Não reutilização

Um identificador desativado, arquivado ou substituído não deverá ser atribuído a nova entidade.

Exemplo proibido:

```text
group-congo
```

ser removido de um grupo histórico e reutilizado para outro grupo diferente.

---

## 25. Independência do nome exibido

O identificador não deverá depender integralmente do título apresentado ao público.

Exemplo:

```text
ID: person-nazario-frazao-almeida
NOME OFICIAL: Nazário Frazão de Almeida
```

Uma correção editorial do nome não deverá gerar automaticamente nova entidade.

---

## 26. Independência do caminho físico

O identificador deverá continuar válido mesmo que o arquivo seja movido.

Exemplo:

```text
document-data-architecture
```

deverá permanecer estável mesmo se o caminho físico for alterado por migração controlada.

---

## 27. Independência da plataforma

Identificadores institucionais não deverão depender de:

- GitHub;
- Firebase;
- Google;
- Meta;
- YouTube;
- Canva;
- provedor de hospedagem;
- rede social;
- ferramenta de desenvolvimento.

Identificadores externos dessas plataformas deverão ser armazenados separadamente.

---

## 28. Convenção geral de escrita

Os identificadores humano-legíveis deverão utilizar, preferencialmente:

```text
letras minúsculas
números
hífens
```

Exemplo:

```text
community-participation-policy
```

---

## 29. Caracteres permitidos

Padrão recomendado:

```text
a-z
0-9
-
```

Expressão de referência:

```regex
^[a-z0-9]+(?:-[a-z0-9]+)*$
```

---

## 30. Caracteres não recomendados

Deverão ser evitados:

- espaços;
- acentos;
- barras;
- sinais de pontuação;
- emojis;
- caracteres invisíveis;
- símbolos dependentes de codificação;
- letras maiúsculas sem finalidade.

---

## 31. Normalização textual

Na geração de identificadores, poderá ocorrer:

```text
á → a
ã → a
ç → c
é → e
ó → o
```

Exemplo:

```text
Praça da Bandeira
```

torna-se:

```text
praca-da-bandeira
```

A normalização do identificador não deverá alterar a grafia oficial apresentada ao público.

---

## 32. Prefixos institucionais

Poderão ser utilizados prefixos para indicar o tipo de entidade.

| Prefixo | Entidade |
|---|---|
| `edition-` | Edição |
| `person-` | Pessoa |
| `role-` | Função |
| `group-` | Grupo tradicional |
| `activity-` | Atividade |
| `location-` | Local |
| `document-` | Documento |
| `source-` | Fonte |
| `media-` | Mídia |
| `partner-` | Parceiro |
| `authorization-` | Autorização |
| `publication-` | Publicação |

---

## 33. Identificador da edição

Padrão recomendado:

```text
festanca-YYYY
```

Exemplo:

```text
festanca-2026
```

A edição fundadora deverá preservar permanentemente esse identificador.

---

## 34. Identificador de pessoa

Padrão recomendado:

```text
person-nome-normalizado
```

Exemplo:

```text
person-evelyn-juliane-frazao-de-almeida
```

Quando houver homônimos, deverá ser utilizado qualificador não sensível.

Exemplo:

```text
person-joao-silva-001
person-joao-silva-002
```

---

## 35. Proteção de dados em identificadores

Identificadores não deverão conter:

- CPF;
- RG;
- telefone;
- e-mail;
- endereço residencial;
- data completa de nascimento;
- dado de saúde;
- informação sigilosa;
- credencial;
- código de acesso.

---

## 36. Identificador de função

Padrão recomendado:

```text
role-nome-da-funcao
```

Exemplos:

```text
role-imperatriz
role-imperador
role-rainha
role-rei
role-juiza
role-juiz
role-capitao-do-mastro
```

---

## 37. Identificador de grupo tradicional

Padrão recomendado:

```text
group-nome-do-grupo
```

Registros iniciais:

```text
group-congo
group-conguinho
group-chorado
group-choradinho
```

---

## 38. Identificador de atividade

Padrão recomendado:

```text
activity-ano-data-categoria-qualificador
```

Exemplo:

```text
activity-2026-05-23-reza-imperatriz
```

Quando houver mais de uma atividade equivalente:

```text
activity-2026-05-23-reza-imperatriz-001
activity-2026-05-23-reza-imperatriz-002
```

---

## 39. Identificador de programação

Padrão recomendado:

```text
program-festanca-ano-tipo
```

Exemplos:

```text
program-festanca-2026-preparatoria
program-festanca-2026-principal
```

---

## 40. Identificador de local

Padrão recomendado:

```text
location-nome-normalizado
```

Exemplo:

```text
location-praca-da-bandeira
```

Locais privados deverão utilizar identificadores que não exponham endereço.

Exemplo:

```text
location-private-imperatriz-2026
```

---

## 41. Identificador de documento

Padrão recomendado:

```text
document-dominio-nome
```

Exemplo:

```text
document-data-identifiers-and-references
```

O caminho físico poderá ser registrado separadamente:

```text
docs/festanca/data/identifiers-and-references.md
```

---

## 42. Identificador de mídia

Padrão recomendado:

```text
media-tipo-ano-sequencia
```

Exemplos:

```text
media-image-2026-0001
media-audio-2026-0001
media-video-2026-0001
```

---

## 43. Identificador de publicação

Padrão recomendado:

```text
publication-ano-tipo-sequencia
```

Exemplo:

```text
publication-2026-communique-001
```

---

## 44. Identificador de autorização

Padrão recomendado:

```text
authorization-tipo-ano-sequencia
```

Exemplos:

```text
authorization-image-2026-001
authorization-location-2026-001
```

---

## 45. Identificador de parceiro

Padrão recomendado:

```text
partner-nome-normalizado
```

Exemplo:

```text
partner-prefeitura-vila-bela
```

---

## 46. Identificador de fonte

Padrão recomendado:

```text
source-tipo-sequencia
```

Exemplos:

```text
source-institutional-001
source-documentary-001
source-community-001
```

---

## 47. Identificadores externos

Identificadores externos deverão ser armazenados em campo próprio.

Exemplo:

```json
{
  "id": "media-video-2026-001",
  "externalIds": {
    "youtube": "abc123",
    "facebook": "987654321"
  }
}
```

---

## 48. Autoridade do identificador institucional

Em caso de divergência entre identificador interno e externo, o identificador institucional deverá prevalecer para a organização do acervo.

Identificadores externos serão referências auxiliares.

---

## 49. Referências internas

Referências internas são vínculos entre registros controlados pelo Portal.

Exemplos:

```text
activity.editionId
activity.locationId
personRole.personId
personRole.roleId
document.sourceId
media.authorizationId
```

---

## 50. Referências externas

Referências externas poderão apontar para:

- sites oficiais;
- mapas;
- redes sociais;
- documentos públicos;
- catálogos;
- repositórios;
- vídeos;
- legislações;
- serviços institucionais.

Toda referência externa relevante deverá possuir data de verificação.

---

## 51. Estrutura mínima da referência externa

```json
{
  "type": "official-url",
  "value": "https://example.org/resource",
  "verifiedAt": "2026-08-01",
  "verificationStatus": "verified",
  "responsible": "institutional-curation"
}
```

---

## 52. Persistência de referências externas

Como recursos externos podem desaparecer ou mudar, deverão ser preservados, quando legítimos:

- título;
- descrição;
- entidade responsável;
- data de consulta;
- identificador externo;
- URL;
- cópia autorizada;
- captura institucional;
- checksum;
- contexto da referência.

---

## 53. URLs permanentes

Quando possível, o Portal deverá utilizar URLs permanentes baseadas no identificador institucional.

Exemplo:

```text
/editions/festanca-2026
/groups/group-congo
/activities/activity-2026-05-23-reza-imperatriz
```

---

## 54. Slugs

Slug é o segmento legível utilizado em URLs.

Ele poderá coincidir com o identificador, mas não deverá necessariamente substituí-lo.

Exemplo:

```json
{
  "id": "person-000123",
  "slug": "nazario-frazao-de-almeida"
}
```

---

## 55. Alteração de slug

Slugs poderão mudar por:

- correção de grafia;
- melhoria editorial;
- padronização;
- proteção de privacidade.

O slug anterior deverá permanecer como redirecionamento ou alias quando já tiver sido publicado.

---

## 56. Aliases oficiais

Todo alias deverá registrar:

```text
alias
entityId
aliasType
validFrom
validUntil
source
status
```

---

## 57. Tipos de alias

Os tipos oficiais poderão incluir:

```text
POPULAR_NAME
FORMER_NAME
SPELLING_VARIANT
ABBREVIATION
LEGACY_ID
EXTERNAL_ID
FORMER_SLUG
HISTORICAL_REFERENCE
```

---

## 58. Grafias alternativas

Grafias alternativas deverão apontar para a entidade canônica.

Exemplo:

```text
Alias incorreto anterior
        ↓
Identificador institucional correto
```

A grafia incorreta não deverá criar entidade duplicada.

---

## 59. Identificadores canônicos

Identificador canônico é o identificador principal reconhecido pelo Portal.

Exemplo:

```json
{
  "canonicalId": "person-nazario-frazao-de-almeida",
  "aliases": [
    "person-nazari-frazao-de-almeida"
  ]
}
```

---

## 60. Resolução de identificadores

Todo mecanismo de resolução deverá permitir:

```text
identificador informado
          ↓
busca direta
          ↓
busca por alias
          ↓
busca por legado
          ↓
entidade canônica
```

---

## 61. Tabela de resolução

Poderá existir estrutura como:

| Identificador recebido | Tipo | Identificador canônico |
|---|---|---|
| `old-activity-001` | Legado | `activity-2026-05-23-reza-imperatriz` |
| `congo-group` | Alias | `group-congo` |
| `nazari-frazao` | Grafia anterior | `person-nazario-frazao-de-almeida` |

---

## 62. Identificadores legados

Todo identificador legado deverá indicar:

- sistema de origem;
- arquivo de origem;
- data de criação aproximada;
- identificador canônico;
- estado;
- motivo da substituição;
- data de migração.

---

## 63. Regra de preservação de legados

Identificadores legados não deverão ser excluídos quando aparecerem em:

- documentos publicados;
- arquivos históricos;
- registros de auditoria;
- integrações;
- backups;
- referências externas;
- edição fundadora.

---

## 64. Duplicidade de identificadores

Considera-se duplicidade quando:

- duas entidades utilizam o mesmo identificador;
- uma entidade possui múltiplos registros canônicos;
- um alias aponta para entidades diferentes;
- registros equivalentes foram criados separadamente;
- uma migração gerou cópia indevida.

---

## 65. Tipos de duplicidade

As duplicidades poderão ser:

| Tipo | Definição |
|---|---|
| Exata | Registros idênticos |
| Semântica | Registros diferentes representam a mesma entidade |
| Nominal | Mesmo nome representa entidades distintas |
| Histórica | Registros antigos e novos representam continuidade |
| Técnica | Duplicação causada por sistema |
| Editorial | Duplicação causada por variação de grafia |
| De importação | Duplicação criada em migração |

---

## 66. Processo de resolução de duplicidade

```text
DETECÇÃO
   ↓
BLOQUEIO PREVENTIVO
   ↓
COMPARAÇÃO
   ↓
VERIFICAÇÃO DAS FONTES
   ↓
DEFINIÇÃO DA ENTIDADE CANÔNICA
   ↓
MIGRAÇÃO DAS REFERÊNCIAS
   ↓
CRIAÇÃO DE ALIAS
   ↓
PRESERVAÇÃO DOS REGISTROS
   ↓
AUDITORIA
```

---

## 67. Seleção da entidade canônica

A entidade canônica deverá ser escolhida considerando:

- origem;
- autoridade;
- completude;
- data;
- uso institucional;
- número de referências;
- publicação;
- valor histórico;
- relação com a edição fundadora.

---

## 68. Fusão de registros

A fusão deverá preservar:

- identificadores anteriores;
- atributos legítimos;
- fontes;
- versões;
- relacionamentos;
- autorizações;
- registros de decisão;
- entidade canônica;
- histórico da operação.

---

## 69. Proibição de fusão silenciosa

Nenhuma fusão deverá ocorrer sem:

- justificativa;
- responsável;
- data;
- análise;
- lista dos registros afetados;
- confirmação da entidade canônica;
- preservação dos aliases;
- auditoria posterior.

---

## 70. Colisão de identificadores

Colisão ocorre quando o mesmo identificador é atribuído a entidades distintas.

Toda colisão deverá ser tratada como não conformidade de alta criticidade.

---

## 71. Prevenção de colisões

Deverão ser utilizados:

- validação de unicidade;
- registro central;
- geração controlada;
- prefixos;
- sequências;
- verificações antes da publicação;
- bloqueios de duplicidade;
- auditoria.

---

## 72. Registro central de identificadores

O Portal poderá manter catálogo central contendo:

```text
identifier
entityType
canonicalStatus
createdAt
createdBy
currentState
preservationStatus
```

---

## 73. Estados do identificador

Um identificador poderá assumir:

```text
PROPOSED
RESERVED
ACTIVE
ALIAS
LEGACY
DEPRECATED
RETIRED
ARCHIVED
PRESERVED
```

---

## 74. Reserva de identificador

Um identificador poderá ser reservado antes da criação definitiva quando houver:

- planejamento de edição;
- migração;
- importação;
- criação de documento;
- integração;
- atividade futura confirmada.

Identificadores reservados deverão possuir prazo ou finalidade registrada.

---

## 75. Desativação de identificador

A desativação não significa apagamento.

O identificador deverá permanecer no catálogo com estado:

```text
DEPRECATED
RETIRED
ARCHIVED
```

---

## 76. Redirecionamento

Identificadores substituídos deverão redirecionar, quando aplicável, para o identificador canônico.

Exemplo:

```text
old-id → canonical-id
```

Redirecionamentos deverão ser preservados enquanto houver possibilidade de referência histórica.

---

## 77. Integridade referencial

Toda referência interna deverá apontar para entidade existente e válida.

Exemplo válido:

```json
{
  "editionId": "festanca-2026"
}
```

somente será aceito se:

```text
festanca-2026
```

existir no catálogo de edições.

---

## 78. Referências obrigatórias

Referências obrigatórias não poderão ser nulas.

Exemplos:

```text
Activity.editionId
Activity.categoryId
PersonRole.personId
PersonRole.roleId
Document.id
```

---

## 79. Referências opcionais

Referências opcionais deverão possuir justificativa semântica.

Exemplo:

```json
{
  "authorizationId": null,
  "authorizationStatus": "not-required"
}
```

---

## 80. Referências condicionais

Referências condicionais serão obrigatórias em determinados contextos.

Exemplo:

```text
Se location.type = PRIVATE_RESIDENCE
então ownerAuthorizationId poderá ser obrigatório.
```

---

## 81. Referências polimórficas

Quando um registro puder referenciar diferentes tipos de entidade, deverá utilizar:

```text
subjectType
subjectId
```

Exemplo:

```json
{
  "subjectType": "document",
  "subjectId": "document-data-architecture"
}
```

---

## 82. Validação de tipo

Uma referência deverá apontar para entidade do tipo esperado.

Exemplo inválido:

```text
activity.locationId → person-001
```

O identificador existe, mas pertence ao tipo errado.

---

## 83. Referências entre edições

Referências entre edições deverão ser explícitas.

Exemplo:

```text
activity-2027-001
```

não deverá referenciar programação de 2026, salvo quando a relação histórica estiver formalmente registrada.

---

## 84. Referências permanentes e anuais

Entidades anuais poderão referenciar entidades permanentes.

Exemplo:

```text
Atividade 2026 → Grupo do Congo
```

Entidades permanentes não deverão depender exclusivamente de entidade anual para existir.

---

## 85. Referências circulares

Referências circulares deverão ser evitadas quando produzirem dependência estrutural desnecessária.

Quando legítimas, deverão ser documentadas.

---

## 86. Referências órfãs

Referência órfã é aquela que aponta para entidade inexistente, removida ou não migrada.

Referências órfãs deverão ser:

- identificadas;
- bloqueadas;
- investigadas;
- corrigidas;
- registradas;
- auditadas.

---

## 87. Referências quebradas

Referências externas quebradas deverão possuir:

- data da detecção;
- última verificação válida;
- alternativa disponível;
- cópia institucional, quando autorizada;
- status;
- responsável pela revisão.

---

## 88. Verificação periódica

Referências externas relevantes deverão ser verificadas periodicamente, especialmente:

- mapas;
- vídeos;
- páginas institucionais;
- documentos jurídicos;
- redes sociais;
- serviços;
- integrações;
- arquivos hospedados externamente.

---

## 89. Datas de verificação

Toda referência externa crítica deverá registrar:

```text
createdAt
verifiedAt
lastSuccessfulAccessAt
lastFailureAt
```

---

## 90. Referências bibliográficas

Referências bibliográficas deverão preservar:

- autor;
- título;
- edição;
- local;
- editora;
- ano;
- páginas;
- identificador;
- endereço eletrônico, quando houver;
- data de acesso.

---

## 91. Referências documentais

Referências documentais deverão apontar para:

- identificador institucional;
- título;
- versão;
- caminho;
- checksum;
- estado;
- data;
- classificação.

---

## 92. Referências audiovisuais

Toda referência a mídia deverá preservar:

- identificador;
- tipo;
- autor;
- data;
- atividade;
- edição;
- local;
- autorização;
- licença;
- caminho de preservação.

---

## 93. Referências geográficas

Referências geográficas deverão distinguir:

```text
local público
local privado
coordenada exata
coordenada aproximada
consulta de busca
rota
referência histórica
```

---

## 94. Coordenadas

Coordenadas não deverão funcionar como identificador principal de local.

Um local poderá:

- mudar de coordenada por correção;
- possuir área;
- possuir ponto aproximado;
- mudar de representação cartográfica.

O identificador institucional deverá permanecer estável.

---

## 95. Referências a pessoas

Referências a pessoas deverão utilizar `personId`.

Não deverão utilizar como chave principal:

- nome;
- telefone;
- e-mail;
- CPF;
- cargo anual;
- posição em lista.

---

## 96. Referências a funções anuais

Funções anuais deverão ser representadas por relacionamento.

Modelo correto:

```text
personId
roleId
editionId
```

Modelo inadequado:

```text
imperatriz2026: "nome da pessoa"
```

como único mecanismo de identificação.

---

## 97. Referências a grupos tradicionais

Grupos tradicionais deverão utilizar identificadores permanentes.

Exemplo:

```text
group-congo
```

A participação anual deverá ser registrada separadamente.

---

## 98. Referências a documentos constitucionais

Documentos constitucionais deverão possuir:

```text
documentId
officialPath
version
status
checksum
```

O caminho não deverá substituir a identidade do documento.

---

## 99. Checksums

Checksums poderão ser utilizados para verificar integridade.

Exemplo:

```text
SHA-256
```

O checksum identifica o conteúdo de uma versão, não necessariamente a identidade permanente do documento.

---

## 100. Hashes e identidade

Hashes não deverão substituir identificadores institucionais em registros de longa duração, porque mudanças mínimas de conteúdo geram novo valor.

Eles deverão complementar:

- versionamento;
- autenticidade;
- integridade;
- auditoria.

---

## 101. Identificadores em JSON

Exemplo:

```json
{
  "id": "activity-2026-05-23-reza-imperatriz",
  "editionId": "festanca-2026",
  "categoryId": "activity-category-reza-cantada",
  "locationId": "location-private-imperatriz-2026",
  "sourceId": "source-institutional-001"
}
```

---

## 102. Identificadores em Markdown

Documentos Markdown poderão declarar:

```yaml
---
documentId: document-data-identifiers-and-references
version: 1.0.0
status: active
foundingEdition: festanca-2026
---
```

---

## 103. Identificadores em nomes de arquivos

Nomes de arquivos deverão ser:

- estáveis;
- descritivos;
- compatíveis com o repositório;
- independentes de data quando o documento for permanente;
- vinculáveis ao identificador institucional.

---

## 104. Identificadores em diretórios

Diretórios anuais poderão utilizar:

```text
editions/2026/
editions/2027/
```

A edição deverá continuar identificada internamente por:

```text
festanca-2026
festanca-2027
```

---

## 105. Identificadores em bancos de dados

Em bancos de dados, poderão coexistir:

```text
technicalId
institutionalId
```

Exemplo:

```json
{
  "technicalId": "01JABCDEFG123456",
  "institutionalId": "group-congo"
}
```

---

## 106. Identificadores em APIs

APIs deverão aceitar e retornar identificadores estáveis.

Exemplo:

```text
GET /api/groups/group-congo
```

Mudanças internas de armazenamento não deverão romper o identificador público institucional.

---

## 107. Identificadores em integrações

Toda integração deverá documentar:

- identificador interno;
- identificador externo;
- regra de correspondência;
- autoridade;
- sincronização;
- tratamento de alteração;
- resolução de conflito;
- preservação histórica.

---

## 108. Tabela de correspondência

Exemplo:

| Identificador institucional | Sistema externo | Identificador externo |
|---|---|---|
| `location-praca-da-bandeira` | Google Maps | `external-map-id` |
| `media-video-2026-001` | YouTube | `external-video-id` |

---

## 109. Migração de identificadores

Toda migração deverá preservar:

- identificadores institucionais;
- aliases;
- identificadores legados;
- chaves estrangeiras;
- referências externas;
- relacionamentos;
- versões;
- histórico;
- contexto da edição.

---

## 110. Processo de migração

```text
INVENTÁRIO
   ↓
MAPEAMENTO
   ↓
VALIDAÇÃO DE UNICIDADE
   ↓
CRIAÇÃO DA TABELA DE CORRESPONDÊNCIA
   ↓
MIGRAÇÃO
   ↓
VALIDAÇÃO REFERENCIAL
   ↓
TRATAMENTO DE ÓRFÃOS
   ↓
AUDITORIA
   ↓
PRESERVAÇÃO DO LEGADO
```

---

## 111. Tabela de migração

Toda migração relevante deverá possuir:

```text
oldId
newId
entityType
migrationDate
status
reason
responsible
```

---

## 112. Alteração de esquema

Mudanças no esquema não deverão invalidar identificadores já publicados.

Caso o tipo da entidade mude, deverá existir:

- análise;
- mapeamento;
- compatibilidade;
- redirecionamento;
- versão;
- registro histórico.

---

## 113. Validação pós-migração

Após a migração, deverão ser verificados:

- total de identificadores;
- unicidade;
- aliases;
- legados;
- referências internas;
- referências externas;
- relacionamentos órfãos;
- colisões;
- vínculos entre edições;
- identificadores da edição fundadora.

---

## 114. Recuperação de identificadores

Em caso de perda parcial, a recuperação poderá utilizar:

- backups;
- inventários;
- documentos;
- logs;
- arquivos publicados;
- tabelas de correspondência;
- versões históricas;
- checksums;
- referências externas;
- registros de auditoria.

---

## 115. Identificadores da edição fundadora

Todos os registros relevantes da FESTANÇA 2026 deverão possuir identificadores estáveis e preservados.

Eles constituirão:

- referência histórica;
- base de migração;
- modelo institucional;
- origem das futuras relações;
- patrimônio documental.

---

## 116. Proteção da edição fundadora

Nenhum identificador da edição fundadora deverá ser:

- reutilizado;
- apagado;
- sobrescrito;
- desvinculado do contexto;
- convertido sem registro;
- substituído silenciosamente;
- confundido com futura edição.

---

## 117. Identificadores mínimos da edição fundadora

Deverão existir, no mínimo:

```text
festanca-2026
group-congo
group-conguinho
group-chorado
group-choradinho
role-imperatriz
role-imperador
role-rainha
role-rei
role-juiza
role-juiz
role-capitao-do-mastro
```

Além dos identificadores correspondentes às:

- pessoas;
- atividades;
- locais;
- documentos;
- fontes;
- autorizações;
- publicações;
- mídias;
- parceiros;
- registros históricos.

---

## 118. Continuidade entre edições

A mesma entidade permanente deverá conservar o mesmo identificador.

Exemplo:

```text
group-congo
    ├── participação em festanca-2026
    ├── participação em festanca-2027
    └── participação em festanca-2028
```

---

## 119. Identificadores anuais

Entidades anuais deverão incorporar referência à edição.

Exemplo:

```text
activity-2026-001
activity-2027-001
```

A sequência numérica poderá se repetir entre edições apenas quando o ano fizer parte inequívoca do identificador.

---

## 120. Identificadores globais

Quando houver risco de colisão entre domínios, poderá ser utilizado namespace.

Exemplo:

```text
festanca:group:congo
festanca:edition:2026
festanca:activity:2026:001
```

---

## 121. Namespaces

Namespaces poderão representar:

- projeto;
- domínio;
- entidade;
- edição;
- ambiente;
- integração.

Eles deverão ser documentados e estáveis.

---

## 122. Ambientes

Identificadores institucionais deverão permanecer iguais entre:

- desenvolvimento;
- homologação;
- produção.

O ambiente deverá ser registrado separadamente.

Exemplo:

```json
{
  "id": "group-congo",
  "environment": "production"
}
```

---

## 123. Dados de teste

Dados de teste deverão utilizar prefixo ou namespace específico.

Exemplo:

```text
test-activity-001
fixture-person-001
```

Identificadores de teste não deverão ser publicados como registros reais.

---

## 124. Identificadores reservados

Poderão ser reservados:

```text
system
admin
root
null
undefined
unknown
temp
test
```

Esses termos não deverão ser usados como identificadores institucionais comuns sem qualificação.

---

## 125. Valores desconhecidos

Ausência de identificador não deverá ser representada por identificador falso.

Exemplo inadequado:

```text
person-unknown
```

como entidade única para todas as pessoas não identificadas.

Deverão ser utilizados estados apropriados:

```text
personId: null
identificationStatus: unknown
```

---

## 126. Referência pendente

Quando o registro de destino ainda não tiver sido criado, poderá ser utilizada referência pendente controlada.

Exemplo:

```json
{
  "pendingReference": {
    "entityType": "location",
    "provisionalLabel": "Casa da Imperatriz",
    "status": "awaiting-identification"
  }
}
```

---

## 127. Aprovação de identificadores

Identificadores de entidades críticas deverão passar por:

1. proposição;

2. verificação de unicidade;

3. validação semântica;

4. avaliação de privacidade;

5. confirmação institucional;

6. registro;

7. publicação;

8. preservação.

---

## 128. Responsabilidades

A responsabilidade será distribuída entre:

| Atividade | Responsabilidade principal |
|---|---|
| Proposição | Área responsável |
| Padronização | Arquitetura de dados |
| Verificação de unicidade | Curadoria técnica |
| Validação semântica | Governança de dados |
| Validação cultural | Curadoria cultural |
| Avaliação de privacidade | Segurança e privacidade |
| Aprovação | Autoridade competente |
| Implementação | Equipe técnica autorizada |
| Auditoria | Auditoria institucional |
| Preservação | Gestão documental e arquivística |

---

## 129. Auditoria

A auditoria deverá verificar:

- identificadores duplicados;
- identificadores reutilizados;
- aliases conflitantes;
- legados sem mapeamento;
- referências órfãs;
- tipos incompatíveis;
- referências externas quebradas;
- dados pessoais em identificadores;
- ausência de entidade canônica;
- migrações sem tabela de correspondência;
- identificadores fundadores alterados.

---

## 130. Indicadores mínimos

Deverão ser monitorados:

- total de identificadores;
- identificadores ativos;
- aliases;
- identificadores legados;
- colisões;
- duplicidades;
- referências órfãs;
- referências externas quebradas;
- identificadores sem responsável;
- identificadores migrados;
- registros sem entidade canônica;
- identificadores da edição fundadora preservados.

---

## 131. Lista mínima de verificação

Antes da aprovação de identificador, deverá ser confirmado:

- [ ] entidade definida;
- [ ] tipo identificado;
- [ ] padrão de nomenclatura respeitado;
- [ ] unicidade verificada;
- [ ] ausência de dado pessoal sensível;
- [ ] estabilidade avaliada;
- [ ] identificador canônico definido;
- [ ] aliases registrados;
- [ ] legados avaliados;
- [ ] referências relacionadas identificadas;
- [ ] edição vinculada, quando aplicável;
- [ ] responsável identificado;
- [ ] aprovação registrada;
- [ ] preservação prevista.

---

## 132. Lista mínima de verificação de referência

Antes da aprovação, deverá ser confirmado:

- [ ] identificador de origem existente;
- [ ] identificador de destino existente;
- [ ] tipo da entidade validado;
- [ ] finalidade documentada;
- [ ] obrigatoriedade definida;
- [ ] cardinalidade respeitada;
- [ ] edição compatível;
- [ ] integridade referencial validada;
- [ ] referência externa verificada, quando aplicável;
- [ ] rastreabilidade preservada.

---

## 133. Não conformidades

Serão consideradas não conformidades:

- identificador duplicado;
- identificador reutilizado;
- identificador instável;
- identificador contendo dado sensível;
- alias apontando para múltiplas entidades;
- referência órfã;
- referência de tipo incompatível;
- legado sem mapeamento;
- migração sem correspondência;
- alteração sem redirecionamento;
- exclusão sem preservação;
- substituição de identificador fundador.

---

## 134. Tratamento das não conformidades

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

## 135. Critérios mínimos de aprovação

Um identificador somente poderá ser aprovado quando:

- representar entidade legítima;
- possuir padrão adequado;
- ser único;
- não expor dados protegidos;
- ser estável;
- possuir responsável;
- ser compatível com o modelo de entidades;
- permitir referência;
- preservar a edição fundadora;
- permitir continuidade histórica.

---

## 136. Critérios mínimos de preservação

Identificadores deverão ser preservados quando:

- pertencerem a registros oficiais;
- estiverem publicados;
- integrarem documentos;
- possuírem referências externas;
- participarem de migração;
- constituírem evidência;
- estiverem ligados à edição fundadora;
- possuírem valor histórico.

---

## 137. Declaração constitucional

Este documento declara que:

1. nenhuma entidade relevante permanecerá sem identificador;

2. nenhum identificador institucional será reutilizado;

3. nenhum identificador será alterado silenciosamente;

4. nenhum dado pessoal sensível será utilizado como chave pública;

5. nenhuma referência será criada sem entidade legítima;

6. nenhuma referência órfã será tratada como válida;

7. nenhum alias substituirá a entidade canônica;

8. nenhum identificador legado será apagado sem avaliação;

9. nenhuma migração romperá vínculos históricos;

10. nenhuma edição futura substituirá identificadores da edição fundadora;

11. toda referência deverá ser verificável e auditável;

12. toda evolução deverá preservar a continuidade histórica.

---

## 138. Princípio maior

**IDENTIFICAR ANTES DE REFERENCIAR.**

**VERIFICAR ANTES DE VINCULAR.**

**NORMALIZAR SEM APAGAR A GRAFIA OFICIAL.**

**REFERENCIAR SEM DUPLICAR.**

**MIGRAR SEM ROMPER.**

**CORRIGIR SEM REUTILIZAR.**

**REDIRECIONAR ANTES DE DESATIVAR.**

**PRESERVAR ANTES DE SUBSTITUIR.**

**EVOLUIR SEM PERDER A IDENTIDADE.**

---

## 139. Compromisso permanente

Todo regime de identificadores e referências deverá proteger simultaneamente:

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
- os nomes;
- as funções;
- os documentos;
- os dados;
- os registros;
- as imagens;
- as vozes;
- os locais;
- os relacionamentos;
- os sistemas;
- as integrações;
- a governança;
- a edição fundadora;
- as futuras edições;
- a continuidade;
- o patrimônio;
- o futuro.

---

## 140. Referências institucionais essenciais

Este documento deverá ser interpretado em conjunto com:

- `docs/festanca/portal-architecture.md`;
- `docs/festanca/edition-schema.md`;
- `docs/festanca/publication-workflow.md`;
- `docs/festanca/data/data-architecture.md`;
- `docs/festanca/data/data-classification-model.md`;
- `docs/festanca/data/entity-relationship-model.md`;
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
- `docs/festanca/governance/change-control-policy.md`;
- `docs/festanca/governance/artificial-intelligence-and-automation-policy.md`;
- `docs/festanca/governance/technology-architecture-and-interoperability-policy.md`.

---

## 141. Estado inicial deste documento

```text
DOCUMENTO: identifiers-and-references.md
FUNÇÃO: Gestão constitucional de identificadores e referências
REGIME: Permanente
EDIÇÃO FUNDADORA: FESTANÇA 2026
CRITICIDADE: Máxima
MUTABILIDADE: Estritamente controlada
PRESERVAÇÃO: Integral
IDENTIFICADORES ÚNICOS: Obrigatórios
INTEGRIDADE REFERENCIAL: Obrigatória
VERSIONAMENTO: Obrigatório
RASTREABILIDADE: Permanente
APLICABILIDADE: Portal Permanente e edições anuais
```

---

## 142. Vigência

Este documento entra em vigor a partir de sua aprovação e publicação no repositório oficial.

Sua vigência será permanente.

Toda revisão deverá:

- preservar as versões anteriores;
- registrar justificativas;
- identificar responsáveis;
- apresentar análise de impacto;
- preservar identificadores existentes;
- proteger aliases e legados;
- manter integridade referencial;
- impedir reutilização indevida;
- preservar a edição fundadora;
- respeitar o Modelo Constitucional de Entidades e Relacionamentos;
- assegurar compatibilidade histórica.

---

## 143. Encerramento institucional

Seguimos juntos, passo a passo.

Com método.

Com segurança.

Com preservação integral da edição fundadora.

**SOMOS TODOS, AVANÇO.**

Ao encontro do futuro.

**AMÉM.**
