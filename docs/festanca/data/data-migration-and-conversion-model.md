# Modelo Constitucional de Migração, Conversão e Transformação de Dados do Portal Permanente da FESTANÇA

> Constituição destinada a regulamentar o inventário, a análise, o planejamento, o mapeamento, a extração, a transformação, a conversão, a normalização, a validação, a transferência, a reconciliação, a reversibilidade, a recuperação e a preservação histórica dos dados migrados pelo Portal Permanente da FESTANÇA de Vila Bela da Santíssima Trindade — Mato Grosso — Brasil.

---

## Denominação oficial
**Modelo Constitucional de Migração, Conversão e Transformação de Dados do Portal Permanente da FESTANÇA**

## 1. Identificação do documento

| Campo | Conteúdo |
|---|---|
| Documento | Modelo Constitucional de Migração, Conversão e Transformação de Dados do Portal Permanente da FESTANÇA |
| Caminho oficial | `docs/festanca/data/data-migration-and-conversion-model.md` |
| Classificação | Documento constitucional de dados |
| Domínio | Migração, conversão, transformação e preservação de dados |
| Regime | Permanente |
| Criticidade | Máxima |
| Mutabilidade | Estritamente controlada |
| Preservação | Integral, auditável, versionada e recuperável |
| Edição fundadora | FESTANÇA 2026 |
| Situação | Constituição de migração e transformação de dados |
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

---

## 2. Finalidade

Este documento estabelece o regime oficial para toda migração, conversão, importação, exportação, transformação, reestruturação, consolidação, normalização ou transferência de dados relacionados ao Portal Permanente da FESTANÇA.

Sua finalidade é assegurar que toda operação de migração seja:

- necessária;
- planejada;
- autorizada;
- documentada;
- reversível quando tecnicamente possível;
- verificável;
- auditável;
- segura;
- compatível com os modelos constitucionais;
- preservadora dos dados originais;
- protetora dos identificadores;
- protetora dos relacionamentos;
- compatível com a continuidade histórica;
- subordinada à preservação integral da edição fundadora.

Nenhuma migração deverá ser tratada como simples cópia de arquivos quando envolver memória, cultura, pessoas, documentos, registros institucionais ou patrimônio histórico.

---

## 3. Objetivos estratégicos

São objetivos permanentes deste Modelo:

1. regulamentar o ciclo completo das migrações;

2. impedir perda, corrupção ou descaracterização de dados;

3. preservar valores originais;

4. proteger identificadores permanentes;

5. preservar integridade referencial;

6. documentar mapeamentos entre origem e destino;

7. assegurar compatibilidade estrutural e semântica;

8. definir critérios de conversão;

9. controlar normalizações;

10. tratar duplicidades;

11. identificar referências órfãs;

12. validar dados antes e depois da migração;

13. permitir comparação entre origem e destino;

14. estabelecer planos de retorno;

15. preservar cadeia de custódia;

16. proteger a edição fundadora;

17. assegurar continuidade entre futuras edições;

18. impedir migrações irreversíveis sem justificativa institucional.

---

## 4. Princípios fundamentais

Toda migração deverá observar:

- legitimidade;
- necessidade;
- finalidade;
- proporcionalidade;
- planejamento;
- preservação;
- integridade;
- autenticidade;
- rastreabilidade;
- reversibilidade;
- segurança;
- compatibilidade;
- transparência;
- responsabilização;
- continuidade institucional;
- soberania cultural;
- proteção da memória.

---

## 5. Conceito de migração

Migração de dados é o processo controlado de transferir dados entre:

- arquivos;
- diretórios;
- estruturas;
- aplicações;
- bancos de dados;
- formatos;
- versões;
- ambientes;
- plataformas;
- provedores;
- repositórios;
- modelos tecnológicos.

A migração poderá ocorrer sem alteração semântica ou envolver transformações documentadas.

---

## 6. Conceito de conversão

Conversão é a alteração controlada da representação técnica de um dado.

Exemplos:

```text
CSV → JSON
XLSX → CSV
DOCX → PDF/A
imagem proprietária → formato aberto
texto livre → estrutura normalizada
```

A conversão não deverá alterar o significado institucional do conteúdo.

---

## 7. Conceito de transformação

Transformação é a modificação estruturada de dados para adequá-los ao modelo de destino.

Ela poderá incluir:

- renomeação de campos;
- reorganização de objetos;
- separação de valores;
- junção controlada;
- normalização;
- enriquecimento autorizado;
- conversão de tipos;
- criação de referências;
- substituição por identificadores canônicos.

---

## 8. Conceito de normalização

Normalização é a aplicação de padrões consistentes sem alteração indevida do significado.

Poderá abranger:

- datas;
- horários;
- nomes de campos;
- espaços;
- codificação;
- acentuação;
- enumerações;
- identificadores;
- unidades;
- nomes institucionais;
- referências.

---

## 9. Migração não é reconstrução silenciosa

A migração não deverá ser utilizada para:

- reescrever a história;
- apagar versões;
- remover divergências legítimas;
- substituir fontes;
- inventar valores;
- alterar autoria;
- modificar datas sem evidência;
- fundir entidades sem análise;
- apagar dados da edição fundadora.

---

## 10. Escopo

Este Modelo aplica-se a:

- dados permanentes;
- dados anuais;
- dados compartilhados;
- documentos;
- registros históricos;
- programações;
- pessoas;
- funções;
- grupos tradicionais;
- locais;
- fontes;
- parceiros;
- mídias;
- autorizações;
- relatórios;
- metadados;
- logs;
- identificadores;
- relacionamentos;
- esquemas;
- backups;
- arquivos legados;
- integrações;
- dados produzidos por automações;
- conteúdos produzidos com inteligência artificial.

---

## 11. Tipos oficiais de migração

As migrações poderão ser classificadas como:

| Tipo | Definição |
|---|---|
| Estrutural | Alteração de organização ou esquema |
| Tecnológica | Mudança de plataforma ou tecnologia |
| Aplicacional | Transferência entre aplicações |
| Documental | Migração de documentos e arquivos |
| Arquivística | Transferência para preservação |
| Formato | Conversão entre formatos |
| Ambiente | Transferência entre desenvolvimento, homologação e produção |
| Repositório | Mudança de estrutura ou local de armazenamento |
| Banco de dados | Transferência entre sistemas de dados |
| Edição | Organização ou consolidação de dados anuais |
| Emergencial | Migração motivada por incidente ou risco |
| Preservacional | Migração para evitar obsolescência |

---

## 12. Níveis de criticidade

As migrações serão classificadas como:

```text
BAIXA
MODERADA
ALTA
CRÍTICA
MÁXIMA
```

Migrações envolvendo a edição fundadora deverão possuir criticidade máxima.

---

## 13. Critérios de criticidade

A criticidade deverá considerar:

- volume;
- complexidade;
- sensibilidade;
- valor histórico;
- valor cultural;
- presença de dados pessoais;
- número de relacionamentos;
- risco de perda;
- reversibilidade;
- indisponibilidade esperada;
- impacto sobre publicação;
- dependência tecnológica;
- impacto sobre a edição fundadora.

---

## 14. Estados oficiais da migração

Os estados poderão ser:

```text
proposed
under-analysis
approved
planned
inventoried
mapped
ready-for-test
testing
validated-for-execution
in-progress
paused
failed
rolled-back
completed
reconciled
audited
archived
```

---

## 15. Fluxo constitucional da migração

```text
PROPOSTA
   ↓
ANÁLISE DE NECESSIDADE
   ↓
AUTORIZAÇÃO
   ↓
INVENTÁRIO DA ORIGEM
   ↓
ANÁLISE DE COMPATIBILIDADE
   ↓
MAPEAMENTO
   ↓
PLANEJAMENTO
   ↓
TESTE
   ↓
VALIDAÇÃO PRÉVIA
   ↓
EXECUÇÃO
   ↓
VALIDAÇÃO POSTERIOR
   ↓
RECONCILIAÇÃO
   ↓
AUDITORIA
   ↓
ENCERRAMENTO
   ↓
PRESERVAÇÃO DAS EVIDÊNCIAS
```

---

## 16. Proposta de migração

Toda migração deverá iniciar por proposta documentada contendo:

- identificação;
- finalidade;
- justificativa;
- escopo;
- origem;
- destino;
- responsáveis;
- riscos;
- impacto;
- prazo;
- reversibilidade;
- necessidade de indisponibilidade;
- relação com a edição fundadora.

---

## 17. Análise de necessidade

Antes de aprovar uma migração, deverá ser verificado:

- se a migração é realmente necessária;
- se existe alternativa menos arriscada;
- se a tecnologia de origem ainda é viável;
- se o destino é sustentável;
- se haverá ganho institucional;
- se os dados poderão ser preservados;
- se existe capacidade de retorno.

---

## 18. Autoridade para aprovação

Migrações críticas deverão ser aprovadas pela autoridade institucional competente.

A aprovação deverá registrar:

```text
migrationId
approvedBy
approvedAt
scope
conditions
riskAcceptance
rollbackRequirement
```

---

## 19. Inventário de origem

Antes de qualquer transformação deverá ser produzido inventário completo da origem.

O inventário deverá identificar:

- arquivos;
- diretórios;
- tabelas;
- coleções;
- campos;
- tipos;
- formatos;
- volumes;
- versões;
- relações;
- índices;
- identificadores;
- dados pessoais;
- dados históricos;
- mídias;
- documentos;
- arquivos órfãos;
- duplicidades;
- restrições;
- dependências.

---

## 20. Inventário físico

O inventário físico deverá registrar:

```text
path
fileName
extension
size
checksum
createdAt
modifiedAt
owner
classification
preservationStatus
```

---

## 21. Inventário lógico

O inventário lógico deverá registrar:

```text
entity
field
dataType
required
domain
primaryKey
foreignKey
cardinality
validationRule
retentionRule
```

---

## 22. Inventário semântico

O inventário semântico deverá explicar:

- significado do dado;
- contexto;
- fonte;
- finalidade;
- relacionamento;
- regras culturais;
- regras históricas;
- nível de confiança;
- restrições de uso.

---

## 23. Inventário de documentos

Documentos deverão ser inventariados por:

- título;
- caminho;
- versão;
- autoria;
- classificação;
- vigência;
- checksum;
- referências;
- preservação;
- relação com a edição.

---

## 24. Inventário de mídias

Imagens, áudios e vídeos deverão possuir:

- nome;
- formato;
- tamanho;
- duração, quando aplicável;
- autoria;
- direitos;
- edição;
- atividade;
- pessoas retratadas;
- checksum;
- original;
- derivados;
- estado de preservação.

---

## 25. Inventário de identificadores

Deverão ser identificados:

- identificadores principais;
- chaves legadas;
- aliases;
- identificadores temporários;
- identificadores duplicados;
- identificadores inconsistentes;
- identificadores de terceiros;
- chaves estrangeiras.

---

## 26. Inventário de relacionamentos

Deverão ser registrados:

- origem;
- destino;
- tipo;
- cardinalidade;
- obrigatoriedade;
- estado;
- edição;
- dependência referencial;
- risco de rompimento.

---

## 27. Congelamento da origem

Quando necessário, a origem deverá ser congelada antes da migração.

O congelamento poderá envolver:

- suspensão de alterações;
- modo somente leitura;
- captura de versão;
- backup completo;
- geração de checksums;
- registro de horário;
- bloqueio de publicação.

---

## 28. Captura de referência

Antes da execução deverão ser preservados:

```text
snapshot
backup
checksums
inventory
schema
configuration
recordCounts
relationshipCounts
```

---

## 29. Análise de compatibilidade

A análise de compatibilidade deverá comparar:

- estruturas;
- tipos;
- formatos;
- codificações;
- identificadores;
- relacionamentos;
- domínios;
- regras;
- versões;
- capacidades técnicas;
- limitações do destino.

---

## 30. Compatibilidade estrutural

Deverá ser verificado se:

- os campos possuem equivalência;
- os tipos são compatíveis;
- a hierarquia pode ser reproduzida;
- os relacionamentos podem ser preservados;
- os tamanhos são suficientes;
- os valores nulos são suportados.

---

## 31. Compatibilidade semântica

Campos com nomes semelhantes não deverão ser considerados equivalentes sem análise.

Exemplo:

```text
source.date
```

poderá significar:

- data do fato;
- data do documento;
- data de importação;
- data de publicação.

---

## 32. Compatibilidade temporal

Deverá ser verificado:

- formato de datas;
- fuso horário;
- precisão;
- calendário;
- campos aproximados;
- datas desconhecidas;
- intervalos;
- vigência.

---

## 33. Compatibilidade de codificação

A migração deverá preservar:

- caracteres acentuados;
- símbolos;
- nomes próprios;
- aspas;
- travessões;
- quebras de linha;
- caracteres culturais;
- conteúdo multilíngue.

---

## 34. Codificação preferencial

Deverá ser utilizado, preferencialmente:

```text
UTF-8
```

Conversões deverão ser testadas para evitar perda de caracteres.

---

## 35. Compatibilidade de formatos

O formato de destino deverá ser avaliado quanto a:

- abertura;
- documentação;
- durabilidade;
- interoperabilidade;
- suporte;
- preservação;
- risco de obsolescência;
- capacidade de representar o conteúdo original.

---

## 36. Matriz de compatibilidade

Deverá ser produzida matriz contendo:

| Origem | Destino | Compatibilidade | Transformação | Risco | Validação |
|---|---|---|---|---|---|
| Campo original | Campo de destino | Total, parcial ou inexistente | Regra aplicada | Nível | Método |

---

## 37. Mapeamento de campos

Todo campo migrado deverá possuir mapeamento documentado.

Exemplo:

```text
origin.event_name
→
destination.title
```

---

## 38. Tipos de mapeamento

Os mapeamentos poderão ser:

```text
1:1
1:N
N:1
N:N
DERIVADO
CONSTANTE
NÃO MIGRADO
PRESERVADO COMO LEGADO
```

---

## 39. Mapeamento direto

O mapeamento direto deverá ocorrer quando:

- significado for equivalente;
- tipo for compatível;
- regra não alterar o valor;
- contexto estiver preservado.

---

## 40. Mapeamento com transformação

Quando houver transformação, deverão ser registrados:

```text
sourceField
targetField
transformationRule
rulesVersion
originalPreserved
validationMethod
```

---

## 41. Mapeamento sem equivalente

Campos sem equivalente deverão ser:

- preservados em estrutura legada;
- incorporados aos metadados;
- submetidos à extensão do modelo;
- ou classificados para não migração.

A decisão deverá ser justificada.

---

## 42. Campos não migrados

Nenhum campo institucionalmente relevante deverá ser descartado sem:

- avaliação;
- justificativa;
- autorização;
- registro;
- preservação quando necessário;
- análise de impacto.

---

## 43. Preservação do valor original

Toda transformação relevante deverá preservar o valor original.

Poderá ser utilizado:

```json
{
  "originalValue": "23 de maio, à noite",
  "normalizedDate": "2026-05-23",
  "normalizedTime": null,
  "timeDescription": "à noite"
}
```

---

## 44. Conversão de tipos

Conversões deverão ser:

- explícitas;
- documentadas;
- testadas;
- livres de perda indevida;
- reversíveis quando possível;
- validadas.

---

## 45. Conversão de texto para número

Somente deverá ocorrer quando o valor for inequívoco.

Exemplo permitido:

```text
"2026" → 2026
```

Exemplo não permitido automaticamente:

```text
"vinte e poucos participantes" → 20
```

---

## 46. Conversão de datas

Datas deverão ser convertidas para padrão institucional.

Exemplo:

```text
15/07/2026
→
2026-07-15
```

O valor original poderá ser preservado para auditoria.

---

## 47. Datas incompletas

Datas incompletas não deverão ser completadas por invenção.

Exemplo:

```text
"julho de 2026"
```

deverá ser preservado como data parcial, quando o modelo suportar.

---

## 48. Conversão de horários

Exemplo:

```text
8 da noite
→
20:00
```

Somente será permitida quando o contexto for inequívoco.

---

## 49. Conversão de valores monetários

Valores deverão preservar:

```text
amount
currency
originalRepresentation
```

Exemplo:

```json
{
  "amount": 500.00,
  "currency": "BRL",
  "originalRepresentation": "R$ 500,00"
}
```

---

## 50. Normalização de nomes

A normalização poderá corrigir:

- espaços duplicados;
- capitalização;
- caracteres;
- abreviações controladas;
- grafia confirmada.

Ela não deverá substituir a validação institucional de nomes próprios.

---

## 51. Aliases de nomes

Grafias anteriores ou alternativas deverão ser preservadas como aliases quando necessárias.

Exemplo:

```json
{
  "canonicalName": "Nome validado",
  "aliases": [
    "Grafia anterior"
  ]
}
```

---

## 52. Normalização de enumerações

Valores legados deverão ser mapeados para domínios controlados.

Exemplo:

```text
ativo
ATIVO
sim
1
→
active
```

O mapeamento deverá ser documentado e validado.

---

## 53. Normalização de locais

Locais deverão ser vinculados a entidades canônicas.

Valores como:

```text
Praça
Praça da Bandeira
praça central
```

não deverão ser fundidos automaticamente sem validação.

---

## 54. Normalização de grupos tradicionais

As denominações oficiais deverão ser preservadas:

```text
Grupo do Congo
Conguinho
Chorado
Choradinho
```

Variações históricas poderão permanecer como aliases contextualizados.

---

## 55. Migração de identificadores

Identificadores permanentes deverão ser preservados sempre que possível.

A alteração somente será admitida quando:

- o identificador for inválido;
- houver duplicidade;
- houver risco;
- o padrão novo exigir;
- a decisão estiver documentada.

---

## 56. Mapa de identificadores

Quando identificadores forem alterados, deverá existir mapa:

```text
legacyId
canonicalId
entityType
migrationId
reason
validatedBy
```

---

## 57. Proibição de reutilização

Identificadores descontinuados não deverão ser reutilizados para outra entidade.

---

## 58. Identificadores temporários

Identificadores temporários deverão ser substituídos de forma controlada.

O vínculo com o identificador definitivo deverá ser preservado.

---

## 59. Migração de relacionamentos

Os relacionamentos deverão ser migrados após ou junto às entidades necessárias.

A ordem deverá respeitar dependências referenciais.

---

## 60. Ordem de migração

Uma sequência recomendada será:

```text
1. Vocabulários
2. Entidades permanentes
3. Edições
4. Pessoas
5. Grupos
6. Locais
7. Funções
8. Atividades
9. Relacionamentos
10. Documentos
11. Mídias
12. Autorizações
13. Fontes
14. Metadados
```

---

## 61. Integridade referencial durante a migração

Referências deverão ser:

- resolvidas;
- validadas;
- temporariamente registradas;
- reconciliadas;
- impedidas de permanecer quebradas após o encerramento.

---

## 62. Referências órfãs

Uma referência será considerada órfã quando seu destino não existir ou não puder ser identificado.

---

## 63. Tratamento de referências órfãs

Referências órfãs deverão ser:

1. identificadas;

2. isoladas;

3. investigadas;

4. vinculadas quando possível;

5. classificadas como pendentes quando necessário;

6. preservadas com evidência;

7. impedidas de publicação como válidas.

---

## 64. Estados de referência órfã

Poderão ser utilizados:

```text
unresolved
pending-source
pending-human-review
legacy-only
invalid
resolved
```

---

## 65. Duplicidades

Duplicidades deverão ser identificadas antes da migração definitiva.

Elas poderão ser:

- exatas;
- semânticas;
- históricas;
- legítimas;
- causadas por importação;
- causadas por grafia;
- causadas por identificadores inconsistentes.

---

## 66. Detecção de duplicidades

Poderão ser utilizados:

- identificadores;
- nomes;
- datas;
- campos-chave;
- checksums;
- similaridade;
- relacionamentos;
- revisão humana.

---

## 67. Fusão de registros

A fusão deverá preservar:

- entidade canônica;
- valores originais;
- fontes;
- aliases;
- relacionamentos;
- histórico;
- justificativa;
- responsável;
- data.

---

## 68. Proibição de fusão automática crítica

Pessoas, grupos, locais culturais, documentos históricos e registros da edição fundadora não deverão ser fundidos exclusivamente por automação.

---

## 69. Registros divergentes

Quando registros duplicados apresentarem valores divergentes, deverão ser preservados:

- valores;
- fontes;
- datas;
- estados;
- análise;
- decisão;
- nível de confiança.

---

## 70. Transformações permitidas

Poderão ser realizadas:

- normalização de codificação;
- padronização de datas;
- conversão de tipos segura;
- separação de campos compostos;
- criação de relacionamentos explícitos;
- adoção de identificadores canônicos;
- normalização de enumerações;
- reorganização estrutural;
- inclusão de metadados derivados verificáveis.

---

## 71. Transformações proibidas

Não serão permitidas:

- invenção de valores;
- alteração de fatos sem fonte;
- remoção de autoria;
- apagamento de divergências;
- substituição silenciosa de nomes;
- descarte de campos sem avaliação;
- alteração de edição;
- modificação de datas históricas sem evidência;
- remoção de restrições culturais;
- fusão automática de pessoas.

---

## 72. Dados derivados

Todo dado derivado deverá registrar:

```text
derivedFrom
transformationRule
generatedAt
generatedBy
rulesVersion
validationStatus
```

---

## 73. Enriquecimento de dados

O enriquecimento somente poderá ocorrer quando:

- a fonte adicional for identificada;
- a finalidade for legítima;
- o dado for compatível;
- o vínculo for rastreável;
- houver validação;
- não houver exposição indevida.

---

## 74. Migração de dados pessoais

Dados pessoais deverão ser avaliados quanto a:

- necessidade;
- minimização;
- acesso;
- finalidade;
- retenção;
- segurança;
- destino;
- direitos dos titulares.

---

## 75. Redução de dados pessoais

Quando o destino não necessitar de determinado dado pessoal, deverá ser avaliada:

- exclusão controlada;
- anonimização;
- pseudonimização;
- restrição;
- preservação separada.

---

## 76. Migração de dados de menores

Dados de crianças e adolescentes deverão possuir proteção reforçada.

A migração deverá avaliar:

- necessidade;
- autorização;
- risco;
- exposição;
- nível de acesso;
- retenção;
- integridade;
- destino.

---

## 77. Migração de residências privadas

Coordenadas e endereços privados deverão manter:

- classificação;
- restrição;
- autorização;
- precisão apropriada;
- acesso controlado;
- histórico de publicação.

---

## 78. Migração de dados culturais

Dados culturais deverão preservar:

- denominações;
- contexto;
- autoria;
- tradição;
- restrições;
- fontes;
- relações comunitárias;
- classificações;
- limites de divulgação.

---

## 79. Migração de conhecimentos tradicionais

Conhecimentos tradicionais não deverão ser migrados para ambientes de acesso ampliado sem:

- autorização;
- análise cultural;
- classificação;
- controle;
- preservação do contexto;
- responsabilidade institucional.

---

## 80. Migração de documentos

Documentos deverão preservar:

- conteúdo;
- título;
- caminho;
- versão;
- autoria;
- classificação;
- vigência;
- checksum;
- referências;
- histórico;
- formato original.

---

## 81. Conversão documental

Quando houver conversão, deverão ser preservados:

```text
originalFile
convertedFile
originalChecksum
convertedChecksum
conversionTool
conversionDate
responsible
validationResult
```

---

## 82. Migração de Markdown

Arquivos Markdown deverão ser verificados quanto a:

- títulos;
- tabelas;
- listas;
- links;
- blocos de código;
- caracteres;
- caminhos;
- referências internas;
- renderização no GitHub.

---

## 83. Migração de imagens

Imagens deverão preservar:

- original;
- resolução;
- proporção;
- metadados relevantes;
- autoria;
- direitos;
- descrição;
- edição;
- checksum.

---

## 84. Migração de áudios

Áudios deverão preservar:

- arquivo original;
- formato;
- duração;
- taxa relevante;
- autoria;
- participantes;
- direitos;
- contexto;
- transcrição;
- checksum.

---

## 85. Migração de vídeos

Vídeos deverão preservar:

- original;
- formato;
- resolução;
- duração;
- áudio;
- legendas;
- autoria;
- direitos;
- contexto;
- edição;
- checksum.

---

## 86. Migração de metadados

Metadados não deverão ser descartados por não aparecerem ao público.

Eles poderão ser essenciais para:

- autoria;
- data;
- contexto;
- direitos;
- integridade;
- preservação;
- auditoria;
- localização.

---

## 87. Migração de logs

Logs somente deverão ser migrados quando:

- possuírem finalidade;
- forem necessários à auditoria;
- estiverem dentro da retenção;
- não expuserem dados indevidos;
- forem compatíveis com o destino.

---

## 88. Migração de backups

Backups não deverão ser importados como dados operacionais.

Sua utilização deverá ocorrer em ambiente controlado para:

- recuperação;
- comparação;
- auditoria;
- extração autorizada.

---

## 89. Ambiente de teste

Toda migração relevante deverá ser testada antes da execução definitiva.

O ambiente deverá reproduzir:

- esquema;
- regras;
- formatos;
- volumes representativos;
- relacionamentos;
- restrições;
- comportamento do destino.

---

## 90. Dados de teste

Quando dados reais forem necessários, deverão ser:

- minimizados;
- protegidos;
- restritos;
- eliminados após o teste;
- submetidos às mesmas regras de segurança.

---

## 91. Migração piloto

Migrações críticas deverão possuir piloto com:

- amostra representativa;
- entidades variadas;
- dados complexos;
- relacionamentos;
- mídias;
- casos de erro;
- referências órfãs;
- duplicidades.

---

## 92. Critérios de aprovação do piloto

O piloto somente será aprovado quando:

- não houver perda indevida;
- os identificadores estiverem preservados;
- os relacionamentos estiverem íntegros;
- as transformações estiverem corretas;
- os relatórios estiverem completos;
- o retorno tiver sido testado.

---

## 93. Validação pré-migração

Antes da execução deverão ser verificados:

- inventário completo;
- backup;
- checksums;
- contagens;
- esquemas;
- mapeamentos;
- regras;
- riscos;
- plano de retorno;
- responsáveis;
- janela de execução;
- comunicação;
- aprovação.

---

## 94. Lista mínima pré-migração

- [ ] migração identificada;
- [ ] finalidade registrada;
- [ ] escopo aprovado;
- [ ] origem inventariada;
- [ ] destino preparado;
- [ ] campos mapeados;
- [ ] identificadores analisados;
- [ ] relacionamentos analisados;
- [ ] duplicidades identificadas;
- [ ] referências órfãs identificadas;
- [ ] dados pessoais avaliados;
- [ ] backup concluído;
- [ ] checksums gerados;
- [ ] testes executados;
- [ ] plano de retorno testado;
- [ ] autorização registrada.

---

## 95. Plano de execução

O plano deverá definir:

- sequência;
- responsáveis;
- comandos;
- ferramentas;
- ambiente;
- horários;
- dependências;
- bloqueios;
- pontos de validação;
- critérios de pausa;
- critérios de retorno;
- comunicação.

---

## 96. Janela de migração

A janela deverá considerar:

- menor impacto;
- disponibilidade da equipe;
- capacidade de retorno;
- tempo de validação;
- contingência;
- atividades públicas;
- proximidade de eventos;
- riscos operacionais.

---

## 97. Execução controlada

A execução deverá ser:

- registrada;
- monitorada;
- dividida por blocos;
- verificável;
- interrompível;
- submetida a pontos de controle;
- protegida contra alterações externas.

---

## 98. Migração por blocos

Os blocos poderão ser:

```text
B1 — Estruturas
B2 — Vocabulários
B3 — Entidades permanentes
B4 — Edição fundadora
B5 — Relacionamentos
B6 — Documentos
B7 — Mídias
B8 — Metadados
B9 — Índices
B10 — Validação final
```

---

## 99. Ponto de controle

Após cada bloco deverão ser verificados:

- contagens;
- erros;
- integridade;
- relacionamentos;
- checksums;
- desempenho;
- logs;
- possibilidade de continuidade.

---

## 100. Critérios de pausa

A migração deverá ser pausada quando houver:

- perda de dados;
- corrupção;
- crescimento anormal de erros;
- quebra de relacionamentos;
- falha de segurança;
- indisponibilidade não prevista;
- divergência crítica;
- ausência de responsável;
- risco à edição fundadora.

---

## 101. Critérios de interrupção

A migração deverá ser interrompida quando:

- o destino não preservar os dados;
- o retorno se tornar inviável;
- a integridade for comprometida;
- houver acesso indevido;
- o escopo for ultrapassado;
- os critérios de segurança falharem;
- a edição fundadora estiver ameaçada.

---

## 102. Plano de retorno

Toda migração crítica deverá possuir plano de retorno.

O plano deverá indicar:

- gatilhos;
- responsáveis;
- cópia de origem;
- passos;
- tempo estimado;
- validações;
- comunicação;
- preservação de evidências.

---

## 103. Reversibilidade

A reversibilidade deverá ser testada antes da migração definitiva, quando tecnicamente possível.

---

## 104. Migração irreversível

Migração irreversível somente será admitida quando:

- não existir alternativa;
- houver justificativa;
- os dados originais estiverem preservados;
- o risco for aceito;
- a autoridade competente aprovar;
- a evidência for arquivada.

---

## 105. Retorno parcial

O plano poderá prever retorno por bloco quando a migração for modular.

---

## 106. Registro do retorno

Em caso de retorno deverão ser registrados:

```text
rollbackId
migrationId
trigger
startedAt
completedAt
executedBy
restoredVersion
validationResult
impact
```

---

## 107. Validação pós-migração

Após a execução deverão ser verificados:

- contagem de registros;
- contagem de arquivos;
- checksums;
- campos;
- tipos;
- identificadores;
- relacionamentos;
- referências;
- versões;
- fontes;
- direitos;
- acesso;
- qualidade;
- preservação.

---

## 108. Validação estrutural posterior

Deverá confirmar:

- conformidade com o esquema;
- campos obrigatórios;
- tipos;
- domínios;
- hierarquia;
- cardinalidade;
- ausência de truncamento.

---

## 109. Validação semântica posterior

Deverá confirmar:

- preservação de significado;
- contexto correto;
- edição correta;
- nomes;
- datas;
- funções;
- grupos;
- locais;
- classificações;
- estados.

---

## 110. Validação referencial posterior

Deverá verificar:

- referências órfãs;
- relacionamentos quebrados;
- vínculos incorretos;
- cardinalidades;
- dependências;
- identificadores alterados.

---

## 111. Validação documental posterior

Deverá verificar:

- renderização;
- legibilidade;
- links;
- caminhos;
- versões;
- autoria;
- checksum;
- conteúdo.

---

## 112. Validação de mídias posterior

Deverá verificar:

- abertura;
- duração;
- resolução;
- integridade;
- sincronização;
- metadados;
- direitos;
- contexto;
- checksum.

---

## 113. Comparação entre origem e destino

A comparação deverá demonstrar:

```text
total na origem
total no destino
migrados
transformados
rejeitados
pendentes
duplicados tratados
referências órfãs
campos preservados
campos não migrados
divergências
```

---

## 114. Reconciliação

Reconciliação é o processo de explicar todas as diferenças entre origem e destino.

Nenhuma diferença relevante deverá permanecer sem classificação.

---

## 115. Estados de reconciliação

Poderão ser utilizados:

```text
matched
transformed
merged
preserved-as-legacy
not-migrated
rejected
pending-review
unexpected-difference
```

---

## 116. Critério de completude da reconciliação

A migração somente deverá ser encerrada quando:

```text
registros de origem
=
registros reconciliados
```

considerando todas as categorias documentadas.

---

## 117. Amostragem

A amostragem poderá complementar, mas não substituir, a validação integral de:

- identificadores;
- contagens;
- checksums;
- referências críticas;
- edição fundadora;
- documentos constitucionais.

---

## 118. Relatório de migração

Toda migração deverá produzir relatório contendo:

- identificação;
- finalidade;
- escopo;
- origem;
- destino;
- responsáveis;
- período;
- inventário;
- mapeamentos;
- transformações;
- erros;
- resultados;
- reconciliação;
- retorno, se ocorrido;
- riscos residuais;
- aprovação final.

---

## 119. Estrutura mínima do relatório

```text
1. Identificação
2. Objetivo
3. Escopo
4. Origem
5. Destino
6. Inventário
7. Mapeamentos
8. Regras de transformação
9. Plano de execução
10. Resultado
11. Erros e anomalias
12. Reconciliação
13. Validação
14. Impactos
15. Pendências
16. Conclusão
17. Aprovação
```

---

## 120. Relatório de erros

O relatório de erros deverá registrar:

```text
errorId
migrationId
entityId
sourceLocation
targetLocation
errorType
severity
description
status
resolution
```

---

## 121. Classificação de erros

| Nível | Efeito |
|---|---|
| Informativo | Sem impacto relevante |
| Baixo | Correção simples |
| Médio | Requer revisão |
| Alto | Bloqueia bloco ou entidade |
| Crítico | Exige interrupção |
| Máximo | Ameaça memória, segurança ou edição fundadora |

---

## 122. Tratamento de erros

```text
IDENTIFICAR
   ↓
REGISTRAR
   ↓
CLASSIFICAR
   ↓
CONTER
   ↓
CORRIGIR
   ↓
REPROCESSAR
   ↓
VALIDAR
   ↓
RECONCILIAR
   ↓
PRESERVAR EVIDÊNCIA
```

---

## 123. Reprocessamento

Registros corrigidos deverão ser reprocessados de forma:

- controlada;
- identificável;
- limitada;
- auditável;
- sem duplicação;
- sem perda do histórico anterior.

---

## 124. Cadeia de custódia

Toda migração deverá manter cadeia de custódia desde a origem até o encerramento.

---

## 125. Eventos da cadeia de custódia

Deverão ser registrados:

- inventário;
- cópia;
- extração;
- transformação;
- transferência;
- validação;
- reconciliação;
- arquivamento;
- retorno;
- eliminação autorizada de temporários.

---

## 126. Elementos da cadeia de custódia

```text
custodyEventId
migrationId
assetOrEntity
action
performedBy
performedAt
origin
destination
authorization
integrityEvidence
```

---

## 127. Integridade da cadeia

A cadeia deverá ser:

- cronológica;
- íntegra;
- protegida;
- verificável;
- recuperável;
- vinculada às evidências.

---

## 128. Segurança da migração

A migração deverá proteger:

- credenciais;
- canais;
- arquivos;
- dispositivos;
- backups;
- dados pessoais;
- logs;
- ambientes;
- acessos;
- chaves.

---

## 129. Transferência segura

Transferências deverão utilizar:

- canais autorizados;
- criptografia quando aplicável;
- autenticação;
- controle de acesso;
- verificação de integridade;
- confirmação de recebimento.

---

## 130. Arquivos temporários

Arquivos temporários deverão:

- ser identificados;
- ser protegidos;
- possuir prazo;
- ser eliminados após validação;
- não permanecer em locais públicos;
- não substituir a origem.

---

## 131. Credenciais

Credenciais nunca deverão ser incorporadas aos dados migrados ou ao repositório público.

---

## 132. Acesso durante a migração

O acesso deverá ser concedido conforme:

- função;
- necessidade;
- prazo;
- menor privilégio;
- registro;
- revogação após encerramento.

---

## 133. Auditoria

A auditoria deverá verificar:

- autorização;
- inventário;
- mapeamentos;
- transformações;
- segurança;
- integridade;
- erros;
- reconciliação;
- retorno;
- cadeia de custódia;
- preservação da edição fundadora.

---

## 134. Indicadores mínimos

Deverão ser monitorados:

- registros inventariados;
- registros migrados;
- registros transformados;
- registros rejeitados;
- duplicidades;
- referências órfãs;
- erros;
- tempo de migração;
- tempo de retorno;
- diferenças inesperadas;
- percentual reconciliado;
- integridade da edição fundadora.

---

## 135. Taxa de migração

```text
Registros migrados com sucesso
------------------------------ × 100
Registros previstos
```

---

## 136. Taxa de reconciliação

```text
Registros reconciliados
----------------------- × 100
Registros da origem
```

---

## 137. Taxa de erro

```text
Registros com erro
------------------ × 100
Registros processados
```

---

## 138. Taxa de integridade referencial

```text
Referências válidas no destino
------------------------------ × 100
Referências avaliadas
```

---

## 139. Critérios mínimos de sucesso

A migração somente será considerada bem-sucedida quando:

- o escopo tiver sido cumprido;
- os dados estiverem reconciliados;
- não houver perda não autorizada;
- os identificadores estiverem preservados;
- os relacionamentos estiverem íntegros;
- os erros críticos estiverem resolvidos;
- o relatório estiver concluído;
- a validação estiver aprovada;
- a edição fundadora estiver protegida.

---

## 140. Sucesso com ressalvas

A migração poderá ser concluída com ressalvas quando:

- as pendências forem conhecidas;
- não houver risco crítico;
- houver responsável;
- houver prazo;
- os dados afetados estiverem identificados;
- a autoridade competente aprovar.

---

## 141. Falha da migração

A migração será considerada falha quando:

- houver perda de dados;
- houver corrupção não recuperada;
- a reconciliação for impossível;
- identificadores forem comprometidos;
- relacionamentos críticos forem rompidos;
- a edição fundadora for descaracterizada;
- o retorno necessário não puder ser executado.

---

## 142. Encerramento

O encerramento deverá ocorrer somente após:

1. validação;

2. reconciliação;

3. correção dos erros críticos;

4. aprovação;

5. arquivamento dos relatórios;

6. preservação das evidências;

7. revogação dos acessos temporários;

8. eliminação segura dos arquivos temporários;

9. atualização documental.

---

## 143. Preservação das evidências

Deverão ser preservados:

- proposta;
- autorização;
- inventário;
- snapshots;
- backups;
- checksums;
- mapeamentos;
- scripts;
- versões;
- logs;
- relatórios;
- erros;
- decisões;
- reconciliação;
- aprovação final.

---

## 144. Preservação de scripts

Scripts de migração deverão possuir:

- versão;
- autoria;
- finalidade;
- dependências;
- parâmetros;
- instruções;
- hash;
- ambiente;
- resultado;
- estado de preservação.

---

## 145. Reutilização de scripts

Scripts somente poderão ser reutilizados após:

- revisão;
- atualização;
- teste;
- validação;
- confirmação de compatibilidade;
- nova autorização.

---

## 146. Dependências da migração

Toda dependência deverá ser registrada quanto a:

- nome;
- versão;
- licença;
- origem;
- criticidade;
- vulnerabilidades;
- compatibilidade;
- preservação.

---

## 147. Migração entre ambientes

A promoção entre ambientes deverá seguir:

```text
DESENVOLVIMENTO
       ↓
HOMOLOGAÇÃO
       ↓
PRODUÇÃO
       ↓
ARQUIVAMENTO
```

Nenhum dado de teste deverá alcançar produção como dado oficial.

---

## 148. Migração entre edições

A criação de nova edição não deverá copiar indiscriminadamente os dados anuais da anterior.

Deverão ser reutilizadas:

- entidades permanentes;
- estruturas;
- vocabulários;
- políticas;
- identificadores institucionais.

Deverão ser criados novamente:

- vínculos anuais;
- programação;
- funções anuais;
- atividades;
- decisões específicas;
- autorizações específicas.

---

## 149. Proibição de sobrescrita entre edições

Nenhum dado de edição futura deverá sobrescrever:

- programação de 2026;
- festeiros de 2026;
- atividades de 2026;
- versões de 2026;
- documentos históricos de 2026;
- mídias vinculadas à edição fundadora.

---

## 150. Migração da edição fundadora

Toda migração envolvendo a FESTANÇA 2026 deverá possuir:

- inventário integral;
- cópia preservada;
- checksums;
- mapa de identificadores;
- comparação completa;
- validação humana;
- relatório específico;
- plano de retorno;
- aprovação institucional.

---

## 151. Dados fundadores mínimos

Deverão ser protegidos:

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
- decisões;
- versões;
- correções;
- metadados.

---

## 152. Imutabilidade histórica controlada

Qualquer transformação em dado fundador deverá preservar:

```text
valor original
valor transformado
regra
fonte
responsável
data
versão
evidência
```

---

## 153. Comparação especial da edição fundadora

A comparação deverá confirmar:

- mesma quantidade de entidades;
- mesmos identificadores;
- mesmos relacionamentos;
- mesmas fontes;
- mesmos contextos;
- mesmas versões históricas;
- ausência de sobrescrita;
- ausência de mistura com futuras edições.

---

## 154. Proteção contra obsolescência

Migrações preservacionais deverão ser realizadas antes que formatos, serviços ou tecnologias se tornem inacessíveis.

---

## 155. Sinais de obsolescência

Deverão ser monitorados:

- falta de suporte;
- incompatibilidade;
- dependência exclusiva;
- formato proprietário;
- indisponibilidade de ferramentas;
- risco de corrupção;
- ausência de documentação;
- vulnerabilidades críticas.

---

## 156. Migração emergencial

Migrações emergenciais poderão ocorrer diante de:

- incidente;
- falha iminente;
- perda de fornecedor;
- corrupção;
- ataque;
- indisponibilidade crítica;
- risco de desaparecimento de dados.

---

## 157. Requisitos emergenciais

Mesmo em emergência deverão ser preservados:

- responsável;
- justificativa;
- cópia da origem, quando possível;
- registro das ações;
- validação posterior;
- cadeia de custódia;
- relatório.

---

## 158. Migração para terceiros

A transferência a fornecedor ou plataforma externa deverá exigir:

- instrumento formal;
- finalidade;
- escopo;
- segurança;
- acesso;
- retenção;
- devolução;
- eliminação;
- exportabilidade;
- continuidade;
- preservação histórica.

---

## 159. Encerramento de fornecedor

Antes do encerramento deverão ser garantidos:

- exportação integral;
- formatos utilizáveis;
- identificadores;
- metadados;
- mídias;
- logs necessários;
- comprovação de eliminação;
- validação;
- continuidade.

---

## 160. Independência tecnológica

Nenhuma migração deverá criar dependência irreversível de:

- fornecedor único;
- formato fechado;
- serviço sem exportação;
- tecnologia sem documentação;
- licença incompatível;
- plataforma sem garantia de preservação.

---

## 161. Responsabilidades

| Atividade | Responsabilidade principal |
|---|---|
| Proposta | Área solicitante |
| Aprovação | Autoridade institucional |
| Inventário | Governança de dados e equipe técnica |
| Mapeamento | Arquitetura de dados |
| Validação semântica | Governança e curadoria |
| Validação cultural | Curadoria cultural |
| Execução | Equipe técnica autorizada |
| Segurança | Segurança da informação |
| Reconciliação | Governança de dados |
| Auditoria | Auditoria institucional |
| Preservação | Gestão documental e arquivística |

---

## 162. Responsável pela migração

Toda migração deverá possuir responsável principal que:

- coordene o processo;
- assegure documentação;
- controle escopo;
- acompanhe riscos;
- autorize pausas;
- solicite retorno;
- consolide o relatório;
- responda pela conclusão.

---

## 163. Responsável técnico

O responsável técnico deverá:

- preparar ambientes;
- executar scripts;
- monitorar;
- registrar logs;
- proteger credenciais;
- validar integridade;
- apoiar retorno;
- preservar evidências.

---

## 164. Governança de dados

A governança deverá:

- validar mapeamentos;
- verificar qualidade;
- controlar identificadores;
- reconciliar;
- aprovar transformações;
- preservar significado;
- proteger edições.

---

## 165. Curadoria cultural

A curadoria cultural deverá avaliar:

- nomes;
- tradições;
- grupos;
- funções;
- lugares;
- conteúdos;
- restrições;
- perda de contexto;
- impacto sobre a memória.

---

## 166. Segurança da informação

A segurança deverá:

- avaliar riscos;
- controlar acessos;
- proteger transferências;
- verificar arquivos;
- acompanhar incidentes;
- validar eliminação de temporários.

---

## 167. Auditoria institucional

A auditoria deverá possuir acesso a:

- autorização;
- inventário;
- mapeamentos;
- logs;
- relatórios;
- reconciliação;
- cadeia de custódia;
- decisões;
- evidências.

---

## 168. Lista mínima de encerramento

- [ ] execução concluída;
- [ ] registros reconciliados;
- [ ] identificadores preservados;
- [ ] relacionamentos validados;
- [ ] duplicidades tratadas;
- [ ] referências órfãs classificadas;
- [ ] erros críticos resolvidos;
- [ ] qualidade verificada;
- [ ] documentos testados;
- [ ] mídias testadas;
- [ ] relatório concluído;
- [ ] aprovação registrada;
- [ ] evidências arquivadas;
- [ ] acessos temporários revogados;
- [ ] arquivos temporários destinados;
- [ ] edição fundadora preservada.

---

## 169. Não conformidades

Serão consideradas não conformidades:

- migração sem autorização;
- inventário incompleto;
- ausência de backup;
- ausência de checksums;
- campo sem mapeamento;
- transformação não documentada;
- identificador perdido;
- referência órfã não tratada;
- duplicidade indevida;
- perda de metadados;
- diferença não reconciliada;
- falha de retorno;
- exposição de dados pessoais;
- perda de contexto cultural;
- alteração da edição fundadora.

---

## 170. Classificação das não conformidades

| Nível | Definição |
|---|---|
| Baixa | Impacto limitado |
| Média | Compromete manutenção ou compreensão |
| Alta | Compromete qualidade ou operação |
| Crítica | Compromete dados, direitos ou continuidade |
| Máxima | Compromete memória, cultura ou edição fundadora |

---

## 171. Tratamento das não conformidades

Toda não conformidade deverá ser:

1. identificada;

2. registrada;

3. classificada;

4. contida;

5. atribuída a responsável;

6. investigada;

7. corrigida;

8. reprocessada;

9. revalidada;

10. auditada;

11. preservada como evidência.

---

## 172. Exceções

Exceções somente poderão ocorrer quando:

- houver justificativa;
- o risco estiver documentado;
- o impacto for conhecido;
- o responsável estiver identificado;
- a autoridade competente aprovar;
- os dados originais estiverem preservados;
- a edição fundadora permanecer protegida.

---

## 173. Declaração constitucional

Este documento declara que:

1. nenhuma migração ocorrerá sem finalidade;

2. nenhuma origem será migrada sem inventário;

3. nenhum campo será transformado sem regra;

4. nenhum identificador será alterado silenciosamente;

5. nenhum relacionamento será abandonado por conveniência;

6. nenhuma duplicidade crítica será fundida exclusivamente por automação;

7. nenhuma referência órfã será ocultada;

8. nenhum valor original será destruído por normalização;

9. nenhuma diferença permanecerá sem reconciliação;

10. nenhuma migração crítica ocorrerá sem plano de retorno;

11. nenhuma tecnologia prevalecerá sobre a memória cultural;

12. nenhuma edição futura substituirá a edição fundadora;

13. toda migração será verificável, reversível quando possível e auditável.

---

## 174. Princípio maior

**INVENTARIAR ANTES DE MIGRAR.**

**ANALISAR ANTES DE MAPEAR.**

**MAPEAR ANTES DE TRANSFORMAR.**

**PRESERVAR ANTES DE CONVERTER.**

**TESTAR ANTES DE EXECUTAR.**

**VALIDAR ANTES DE TRANSFERIR.**

**CONTROLAR ANTES DE ESCALAR.**

**PAUSAR ANTES DE ARRISCAR.**

**RETORNAR ANTES DE PERDER.**

**RECONCILIAR ANTES DE ENCERRAR.**

**DOCUMENTAR ANTES DE ARQUIVAR.**

**MIGRAR SEM APAGAR.**

**CONVERTER SEM DISTORCER.**

**EVOLUIR SEM ROMPER A MEMÓRIA.**

---

## 175. Compromisso permanente

Toda migração, conversão e transformação de dados deverá proteger simultaneamente:

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
- as fontes;
- as imagens;
- as vozes;
- os locais;
- as residências;
- os relacionamentos;
- os identificadores;
- os sistemas;
- as integrações;
- a governança;
- a edição fundadora;
- as futuras edições;
- a continuidade;
- o patrimônio;
- o futuro.

---

## 176. Referências institucionais essenciais

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
- `docs/festanca/governance/risk-management-and-resilience-policy.md`;
- `docs/festanca/governance/technology-architecture-and-interoperability-policy.md`.

---

## 177. Estado inicial deste documento

```text
DOCUMENTO: data-migration-and-conversion-model.md
FUNÇÃO: Gestão constitucional de migração, conversão e transformação de dados
REGIME: Permanente
EDIÇÃO FUNDADORA: FESTANÇA 2026
CRITICIDADE: Máxima
MUTABILIDADE: Estritamente controlada
PRESERVAÇÃO: Integral
INVENTÁRIO DE ORIGEM: Obrigatório
ANÁLISE DE COMPATIBILIDADE: Obrigatória
MAPEAMENTO DE CAMPOS: Obrigatório
PRESERVAÇÃO DO VALOR ORIGINAL: Obrigatória
MIGRAÇÃO DE IDENTIFICADORES: Controlada
MIGRAÇÃO DE RELACIONAMENTOS: Obrigatória
TRATAMENTO DE DUPLICIDADES: Obrigatório
TRATAMENTO DE REFERÊNCIAS ÓRFÃS: Obrigatório
VALIDAÇÃO PRÉ-MIGRAÇÃO: Obrigatória
VALIDAÇÃO PÓS-MIGRAÇÃO: Obrigatória
RECONCILIAÇÃO: Obrigatória
PLANO DE RETORNO: Obrigatório para migrações críticas
CADEIA DE CUSTÓDIA: Permanente
RELATÓRIO DE MIGRAÇÃO: Obrigatório
VERSIONAMENTO: Obrigatório
RASTREABILIDADE: Integral
APLICABILIDADE: Portal Permanente e edições anuais
```

---

## 178. Vigência

Este documento entra em vigor a partir de sua aprovação e publicação no repositório oficial.

Sua vigência será permanente.

Toda revisão deverá:

- preservar as versões anteriores;
- registrar justificativas;
- identificar responsáveis;
- apresentar análise de impacto;
- preservar modelos de mapeamento anteriores;
- documentar alterações de regras;
- manter compatibilidade histórica;
- preservar evidências de migração;
- proteger dados pessoais;
- preservar a cadeia de custódia;
- proteger a edição fundadora;
- respeitar os modelos constitucionais de dados;
- assegurar rastreabilidade integral.

---

## 179. Encerramento institucional

Seguimos juntos, passo a passo.

Com método.

Com segurança.

Com preservação integral da edição fundadora.

**SOMOS TODOS, AVANÇO.**

Ao encontro do futuro.

**AMÉM.**
