# Modelo Constitucional de Auditoria, Reconciliação e Conferência de Dados do Portal Permanente da FESTANÇA

> Constituição destinada a regulamentar a auditoria estrutural, semântica, referencial, temporal, documental, técnica e institucional dos dados, bem como os procedimentos de reconciliação, conferência, comparação, investigação, correção controlada, aprovação humana, preservação de evidências e responsabilização aplicáveis ao Portal Permanente da FESTANÇA de Vila Bela da Santíssima Trindade — Mato Grosso — Brasil.

---

## 1. Identificação do documento

| Campo | Conteúdo |
|---|---|
| Documento | Modelo Constitucional de Auditoria, Reconciliação e Conferência de Dados do Portal Permanente da FESTANÇA |
| Caminho oficial | `docs/festanca/data/data-audit-and-reconciliation-model.md` |
| Classificação | Documento constitucional de dados |
| Domínio | Auditoria, reconciliação, conferência, investigação e correção de dados |
| Regime | Permanente |
| Criticidade | Máxima |
| Mutabilidade | Estritamente controlada |
| Preservação | Integral, auditável, versionada e recuperável |
| Edição fundadora | FESTANÇA 2026 |
| Situação | Constituição de auditoria e reconciliação de dados |
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
| Modelo de metadados | `docs/festanca/data/metadata-and-data-catalog-model.md` |
| Modelo de observabilidade | `docs/festanca/data/data-observability-and-monitoring-model.md` |
| Modelo de backup | `docs/festanca/data/data-backup-recovery-and-restoration-model.md` |

---

## 2. Finalidade

Este documento estabelece o regime constitucional de auditoria, reconciliação e conferência dos dados utilizados pelo Portal Permanente da FESTANÇA.

Sua finalidade é assegurar que todo dado institucionalmente relevante possa ser:

- localizado;
- identificado;
- comparado;
- conferido;
- validado;
- reconciliado;
- rastreado;
- investigado;
- corrigido;
- aprovado;
- auditado;
- preservado;
- recuperado;
- relacionado à sua fonte;
- relacionado à sua versão;
- relacionado à edição correspondente;
- protegido contra alteração indevida;
- mantido compatível com a memória institucional.

Nenhum dado crítico deverá ser declarado correto apenas por estar publicado, armazenado, sincronizado ou tecnicamente acessível.

---

## 3. Objetivos estratégicos

São objetivos permanentes deste Modelo:

1. regulamentar a auditoria estrutural;

2. regulamentar a auditoria semântica;

3. regulamentar a auditoria referencial;

4. regulamentar a auditoria temporal;

5. regulamentar a auditoria entre arquivos;

6. regulamentar a auditoria entre sistemas;

7. regulamentar a auditoria entre versões;

8. regulamentar a reconciliação entre origem e destino;

9. conferir quantidades;

10. conferir valores;

11. comparar checksums;

12. identificar divergências;

13. investigar diferenças;

14. classificar não conformidades;

15. controlar correções;

16. preservar evidências;

17. emitir relatórios de reconciliação;

18. instituir aprovação humana;

19. estabelecer cadeia de responsabilidade;

20. auditar as edições anuais;

21. preservar a rastreabilidade;

22. proteger integralmente os dados da edição fundadora.

---

## 4. Princípios fundamentais

Toda auditoria, reconciliação e conferência deverá observar:

- independência;
- imparcialidade;
- rastreabilidade;
- integridade;
- transparência;
- proporcionalidade;
- materialidade;
- verificabilidade;
- reprodutibilidade;
- responsabilidade;
- segregação de funções;
- preservação de evidências;
- supervisão humana;
- proteção de dados pessoais;
- proteção cultural;
- continuidade histórica;
- proteção da edição fundadora.

---

## 5. Conceito de auditoria de dados

Auditoria de dados é o processo sistemático de obtenção, análise e avaliação de evidências destinadas a verificar a conformidade, a integridade, a qualidade, a rastreabilidade, a segurança e a preservação dos dados.

---

## 6. Conceito de reconciliação

Reconciliação é o processo de comparação entre duas ou mais representações de dados, destinado a identificar, explicar e resolver diferenças.

---

## 7. Conceito de conferência

Conferência é a verificação direta de dados, valores, quantidades, campos, relações, documentos, arquivos ou evidências.

---

## 8. Conceito de divergência

Divergência é qualquer diferença relevante entre:

- origem e destino;
- versões;
- arquivos;
- sistemas;
- publicações;
- documentos;
- registros;
- metadados;
- fontes;
- estados temporais.

---

## 9. Conceito de não conformidade

Não conformidade é o descumprimento de uma regra, padrão, obrigação, modelo, validação, procedimento ou decisão institucional.

---

## 10. Conceito de evidência de auditoria

Evidência de auditoria é o registro verificável utilizado para fundamentar constatações, conclusões, correções ou decisões.

---

## 11. Conceito de materialidade

Materialidade é o grau de relevância de uma divergência considerando seu impacto:

- institucional;
- cultural;
- histórico;
- operacional;
- jurídico;
- financeiro;
- reputacional;
- tecnológico;
- documental.

---

## 12. Escopo

Este Modelo aplica-se a:

- conjuntos de dados;
- arquivos JSON;
- bancos de dados;
- planilhas;
- documentos;
- metadados;
- catálogos;
- vocabulários;
- dados mestres;
- dados de referência;
- programações;
- festeiros;
- grupos tradicionais;
- atividades;
- locais;
- publicações;
- mídias;
- integrações;
- APIs;
- sistemas;
- migrações;
- conversões;
- backups;
- restaurações;
- logs;
- relatórios;
- evidências;
- edições anuais;
- edição fundadora.

---

## 13. Objetos auditáveis

Poderão ser auditados:

```text
DATASETS
FILES
RECORDS
FIELDS
RELATIONSHIPS
IDENTIFIERS
METADATA
CATALOGS
VOCABULARIES
SYSTEMS
INTEGRATIONS
MIGRATIONS
PUBLICATIONS
BACKUPS
RESTORATIONS
LOGS
EDITION_ARCHIVES
```

---

## 14. Tipos constitucionais de auditoria

Os tipos oficiais serão:

```text
STRUCTURAL
SEMANTIC
REFERENTIAL
TEMPORAL
DOCUMENTAL
TECHNICAL
SYSTEMIC
INTERSYSTEM
VERSIONAL
MIGRATION
PUBLICATION
PRESERVATION
ACCESS
SECURITY
HISTORICAL
```

---

## 15. Auditoria estrutural

A auditoria estrutural verificará:

- existência dos arquivos;
- presença dos campos;
- tipos de dados;
- formatos;
- esquemas;
- estruturas;
- listas;
- objetos;
- dependências;
- hierarquias;
- organização dos registros.

---

## 16. Critérios da auditoria estrutural

Deverão ser avaliados:

- conformidade com o esquema;
- obrigatoriedade;
- tipos permitidos;
- cardinalidade;
- nomenclatura;
- codificação;
- extensão;
- estrutura de diretórios;
- compatibilidade de versão.

---

## 17. Auditoria semântica

A auditoria semântica verificará se os dados representam corretamente a realidade institucional, cultural, histórica e operacional.

---

## 18. Critérios da auditoria semântica

Deverão ser avaliados:

- significado;
- contexto;
- coerência;
- autenticidade;
- uso correto dos termos;
- correspondência com a fonte;
- legitimidade cultural;
- adequação editorial;
- ausência de ambiguidade indevida.

---

## 19. Auditoria referencial

A auditoria referencial verificará:

- identificadores;
- chaves;
- referências;
- vínculos;
- dependências;
- aliases;
- relações;
- cardinalidades;
- registros órfãos;
- referências inexistentes.

---

## 20. Integridade referencial

Nenhuma referência crítica deverá apontar para:

- entidade inexistente;
- edição incorreta;
- versão descontinuada sem vínculo;
- registro eliminado;
- identificador duplicado;
- destino não autorizado.

---

## 21. Auditoria temporal

A auditoria temporal verificará:

- datas;
- horários;
- períodos;
- vigências;
- sequências;
- início e término;
- sobreposições;
- atrasos;
- ordem cronológica;
- compatibilidade com a edição.

---

## 22. Regras temporais

Deverão ser verificadas:

- data de início anterior à data de término;
- publicação posterior à aprovação;
- vigência compatível;
- atualização coerente;
- atividade vinculada à edição correta;
- ausência de datas impossíveis;
- ausência de mistura temporal entre edições.

---

## 23. Auditoria documental

A auditoria documental verificará:

- autoria;
- versão;
- aprovação;
- classificação;
- referências;
- caminho;
- integridade;
- situação;
- vigência;
- preservação.

---

## 24. Auditoria técnica

A auditoria técnica verificará:

- formato;
- tamanho;
- codificação;
- checksum;
- integridade;
- compatibilidade;
- disponibilidade;
- legibilidade;
- versionamento;
- dependências.

---

## 25. Auditoria entre arquivos

A auditoria entre arquivos comparará conjuntos que possuam vínculos institucionais.

Exemplos:

```text
programacao-2026.json
festeiros-2026.json
locais-2026.json
```

---

## 26. Critérios entre arquivos

Deverão ser verificados:

- identificadores em comum;
- registros ausentes;
- divergência de nomes;
- divergência de datas;
- referências órfãs;
- classificações incompatíveis;
- edições divergentes;
- duplicidades.

---

## 27. Auditoria entre sistemas

A auditoria entre sistemas verificará a correspondência entre:

- origem;
- destino;
- Portal;
- banco de dados;
- sistema administrativo;
- API;
- repositório;
- cópia de preservação;
- publicação pública.

---

## 28. Critérios entre sistemas

Deverão ser comparados:

- quantidade de registros;
- versões;
- identificadores;
- valores;
- estados;
- datas;
- classificações;
- relacionamentos;
- checksums;
- horários de sincronização.

---

## 29. Auditoria entre versões

A auditoria entre versões verificará:

- adições;
- alterações;
- exclusões;
- reclassificações;
- mudanças de relacionamento;
- mudanças de nomenclatura;
- mudanças de estado;
- justificativas;
- responsáveis.

---

## 30. Comparação de versões

Deverá ser possível identificar:

```text
previousVersion
currentVersion
changedFields
changeReason
changedBy
changedAt
approvalId
```

---

## 31. Auditoria de migração

A auditoria de migração verificará:

- inventário de origem;
- mapeamento;
- transformação;
- conversão;
- contagem;
- integridade;
- duplicidades;
- rejeições;
- referências órfãs;
- versão;
- reversibilidade.

---

## 32. Auditoria de publicação

A auditoria de publicação verificará:

- fonte;
- aprovação;
- versão publicada;
- canal;
- data;
- integridade;
- acessibilidade;
- classificação;
- atualização;
- retirada;
- correção.

---

## 33. Auditoria de preservação

A auditoria de preservação verificará:

- existência;
- integridade;
- formato;
- redundância;
- checksum;
- legibilidade;
- cadeia de custódia;
- cópia histórica;
- risco de obsolescência;
- possibilidade de recuperação.

---

## 34. Auditoria de acesso

A auditoria de acesso verificará:

- usuários;
- perfis;
- permissões;
- concessões;
- revogações;
- acessos temporários;
- registros;
- exportações;
- tentativas negadas;
- menor privilégio.

---

## 35. Auditoria de segurança

A auditoria de segurança verificará:

- alterações indevidas;
- acessos não autorizados;
- exposição;
- perda de integridade;
- credenciais;
- criptografia;
- incidentes;
- logs;
- resposta;
- recuperação.

---

## 36. Auditoria histórica

A auditoria histórica verificará se versões, nomes, relações, fontes, caminhos e registros anteriores permanecem recuperáveis.

---

## 37. Planejamento da auditoria

Toda auditoria deverá possuir:

```text
auditId
title
scope
objectives
criteria
period
responsibleTeam
evidenceRequirements
status
```

---

## 38. Definição do escopo

O escopo deverá indicar:

- ativos;
- sistemas;
- períodos;
- edições;
- processos;
- fontes;
- critérios;
- exclusões;
- limitações.

---

## 39. Definição dos objetivos

Os objetivos deverão ser:

- claros;
- verificáveis;
- proporcionais;
- documentados;
- relacionados ao risco;
- relacionados à criticidade.

---

## 40. Critérios de auditoria

Poderão incluir:

- documentos constitucionais;
- esquemas;
- regras de validação;
- políticas;
- decisões;
- contratos de dados;
- requisitos legais;
- padrões institucionais;
- controles aprovados.

---

## 41. Amostragem

A auditoria poderá utilizar:

- universo completo;
- amostragem aleatória;
- amostragem por risco;
- amostragem por criticidade;
- amostragem temporal;
- amostragem por edição;
- amostragem dirigida.

---

## 42. Universo completo obrigatório

Deverá ser utilizado quando:

- o volume permitir;
- o ativo for fundador;
- houver incidente crítico;
- houver suspeita de alteração ampla;
- a integridade histórica estiver ameaçada.

---

## 43. Materialidade da amostra

A amostra deverá ser suficiente para fundamentar conclusões sem ocultar riscos relevantes.

---

## 44. Independência

Sempre que possível, quem audita não deverá ser a única pessoa responsável por:

- criar;
- alterar;
- aprovar;
- publicar;
- restaurar;
- excluir;
- migrar os dados auditados.

---

## 45. Segregação de funções

Deverão ser separadas, quando possível:

- execução;
- conferência;
- aprovação;
- auditoria;
- correção;
- encerramento.

---

## 46. Fonte de autoridade

Toda reconciliação deverá identificar a fonte institucional de autoridade.

Exemplo:

```text
systemOfRecord
```

---

## 47. Origem e destino

A reconciliação deverá distinguir claramente:

```text
source
target
comparisonDate
comparisonVersion
```

---

## 48. Reconciliação entre origem e destino

Deverá verificar:

- quantidade;
- identificadores;
- valores;
- relacionamentos;
- formatos;
- versões;
- checksums;
- rejeições;
- perdas;
- transformações.

---

## 49. Reconciliação entre versões

Deverá verificar:

- alterações autorizadas;
- alterações não autorizadas;
- campos adicionados;
- campos removidos;
- valores alterados;
- registros criados;
- registros desativados;
- relações modificadas.

---

## 50. Reconciliação após migração

Deverá comparar:

- inventário original;
- inventário migrado;
- contagem;
- identificadores;
- checksums;
- duplicidades;
- referências;
- valores originais;
- valores transformados;
- relatório de exceções.

---

## 51. Reconciliação após restauração

Deverá verificar:

- versão restaurada;
- contagem;
- integridade;
- relacionamentos;
- metadados;
- disponibilidade;
- permissões;
- publicação;
- fonte.

---

## 52. Reconciliação após sincronização

Deverá verificar:

- registros processados;
- registros rejeitados;
- atrasos;
- divergências;
- duplicidades;
- versão;
- estado final;
- logs.

---

## 53. Conferência de quantidades

Deverão ser comparadas:

- quantidade de arquivos;
- quantidade de registros;
- quantidade de campos;
- quantidade de relacionamentos;
- quantidade de mídias;
- quantidade de publicações;
- quantidade de rejeições;
- quantidade de entidades.

---

## 54. Contagem de origem

```text
sourceRecordCount
```

---

## 55. Contagem de destino

```text
targetRecordCount
```

---

## 56. Diferença de contagem

```text
difference = targetRecordCount - sourceRecordCount
```

---

## 57. Taxa de correspondência

```text
Registros correspondentes
------------------------- × 100
Registros de origem
```

---

## 58. Conferência de valores

Poderá comparar:

- nomes;
- datas;
- horários;
- códigos;
- estados;
- classificações;
- descrições;
- endereços;
- funções;
- versões;
- valores numéricos.

---

## 59. Comparação exata

A comparação exata será utilizada quando os valores devam ser idênticos.

---

## 60. Comparação normalizada

Poderá considerar:

- espaços;
- caixa;
- acentuação;
- máscara;
- pontuação;
- formato;
- codificação.

A normalização não deverá ocultar diferenças semanticamente relevantes.

---

## 61. Comparação semântica

Poderá ser utilizada quando dois valores possuírem formas diferentes, mas significado potencialmente equivalente.

A conclusão deverá possuir validação humana quando houver relevância institucional.

---

## 62. Comparação de checksums

Checksums deverão ser comparados para verificar a integridade binária ou lógica dos ativos.

---

## 63. Registro da comparação de checksum

```text
assetId
sourceChecksum
targetChecksum
algorithm
comparisonResult
comparedAt
```

---

## 64. Resultado da comparação

```text
MATCH
MISMATCH
NOT_AVAILABLE
NOT_APPLICABLE
```

---

## 65. Divergência de checksum

Deverá gerar:

- alerta;
- investigação;
- bloqueio de publicação quando crítico;
- comparação de versões;
- preservação de evidências;
- eventual recuperação.

---

## 66. Identificação de divergências

Toda divergência deverá possuir identificador único.

Exemplo:

```text
data-divergence-2026-0001
```

---

## 67. Registro da divergência

```text
divergenceId
auditId
source
target
entityId
field
sourceValue
targetValue
detectedAt
severity
status
```

---

## 68. Tipos de divergência

Poderão ser:

```text
MISSING
EXTRA
VALUE_MISMATCH
TYPE_MISMATCH
VERSION_MISMATCH
REFERENCE_MISMATCH
TEMPORAL_MISMATCH
CHECKSUM_MISMATCH
CLASSIFICATION_MISMATCH
LINEAGE_MISMATCH
```

---

## 69. Registro ausente

`MISSING` indica que o registro esperado não foi localizado no destino.

---

## 70. Registro excedente

`EXTRA` indica que o destino contém registro sem correspondência esperada na origem.

---

## 71. Divergência de valor

`VALUE_MISMATCH` indica diferença entre valores equivalentes.

---

## 72. Divergência de tipo

`TYPE_MISMATCH` indica incompatibilidade entre tipos de dados.

---

## 73. Divergência de versão

`VERSION_MISMATCH` indica versões diferentes sem justificativa válida.

---

## 74. Divergência referencial

`REFERENCE_MISMATCH` indica vínculo ausente, incorreto ou incompatível.

---

## 75. Divergência temporal

`TEMPORAL_MISMATCH` indica datas, horários ou vigências incompatíveis.

---

## 76. Divergência classificatória

`CLASSIFICATION_MISMATCH` indica níveis, categorias ou estados divergentes.

---

## 77. Divergência de linhagem

`LINEAGE_MISMATCH` indica origem, transformação ou vínculo histórico incompatível.

---

## 78. Níveis de severidade

Os níveis oficiais serão:

```text
LOW
MODERATE
HIGH
CRITICAL
MAXIMUM
```

---

## 79. Severidade baixa

Corresponde a diferença limitada, sem impacto material.

---

## 80. Severidade moderada

Corresponde a divergência que compromete parcialmente a qualidade ou a compreensão.

---

## 81. Severidade alta

Corresponde a divergência que compromete operação, publicação ou integração.

---

## 82. Severidade crítica

Corresponde a divergência que compromete:

- segurança;
- direitos;
- autenticidade;
- continuidade;
- patrimônio;
- dados pessoais;
- representação cultural.

---

## 83. Severidade máxima

Corresponde a divergência que compromete:

- a edição fundadora;
- a memória institucional;
- a integridade histórica;
- evidências críticas;
- identidade dos registros;
- continuidade ampla.

---

## 84. Critérios de severidade

Deverão considerar:

- extensão;
- quantidade;
- reversibilidade;
- impacto;
- sensibilidade;
- edição;
- valor histórico;
- valor cultural;
- risco jurídico;
- risco reputacional;
- risco operacional.

---

## 85. Investigação das diferenças

Toda divergência relevante deverá ser investigada.

---

## 86. Questões mínimas da investigação

A investigação deverá responder:

1. qual dado divergiu;

2. onde divergiu;

3. quando divergiu;

4. qual versão está envolvida;

5. qual fonte possui autoridade;

6. qual transformação ocorreu;

7. quem realizou a alteração;

8. qual o impacto;

9. se houve perda;

10. se a divergência é legítima.

---

## 87. Causa da divergência

Poderá ser classificada como:

- erro de entrada;
- erro de validação;
- transformação incorreta;
- migração incompleta;
- sincronização atrasada;
- falha técnica;
- alteração não autorizada;
- conflito de fonte;
- diferença legítima;
- problema de versão;
- causa desconhecida.

---

## 88. Linha do tempo da divergência

Deverá registrar:

```text
detectedAt
lastKnownCorrectState
firstKnownDivergentState
investigationStartedAt
resolvedAt
```

---

## 89. Evidências da investigação

Poderão incluir:

- arquivos;
- logs;
- checksums;
- capturas;
- versões;
- fontes;
- mensagens;
- aprovações;
- relatórios;
- registros de migração;
- registros de publicação.

---

## 90. Conflitos de fontes

Quando fontes divergirem, deverão ser avaliados:

- autoridade;
- proximidade do fato;
- autoria;
- data;
- integridade;
- contexto;
- documentação;
- legitimidade cultural;
- validação comunitária;
- histórico.

---

## 91. Fonte prioritária

A fonte prioritária deverá ser definida de forma documentada, sem apagar fontes divergentes.

---

## 92. Divergência legítima

Uma divergência poderá ser legítima quando representar:

- atualização autorizada;
- correção documentada;
- mudança de edição;
- variação histórica;
- fonte distinta;
- versão posterior;
- contextualização adicional.

---

## 93. Divergência não resolvida

Quando não for possível concluir, deverá ser registrada como:

```text
UNRESOLVED
```

com:

- fontes;
- hipóteses;
- responsáveis;
- impacto;
- restrições de uso;
- necessidade de revisão futura.

---

## 94. Correção controlada

Nenhuma correção relevante deverá ocorrer sem:

- divergência registrada;
- fonte identificada;
- análise;
- responsável;
- justificativa;
- aprovação;
- preservação do estado anterior;
- nova validação.

---

## 95. Tipos de correção

Poderão ser:

- correção de valor;
- correção de referência;
- correção temporal;
- correção classificatória;
- correção de versão;
- correção de metadado;
- correção de publicação;
- correção de linhagem.

---

## 96. Registro da correção

```text
correctionId
divergenceId
previousValue
correctedValue
source
reason
correctedBy
approvedBy
correctedAt
```

---

## 97. Correção em lote

Correções em lote deverão possuir:

- escopo;
- regra;
- simulação;
- backup;
- aprovação;
- relatório;
- validação pós-correção;
- plano de retorno.

---

## 98. Correção manual

A correção manual deverá registrar o responsável e a evidência correspondente.

---

## 99. Correção automatizada

A correção automatizada deverá possuir:

- regra;
- versão;
- ambiente;
- teste;
- supervisão;
- logs;
- aprovação;
- reversibilidade.

---

## 100. Proibição de correção silenciosa

Nenhuma divergência crítica deverá ser corrigida sem preservação de evidências e histórico.

---

## 101. Validação pós-correção

Deverá verificar:

- valor;
- tipo;
- formato;
- referência;
- data;
- versão;
- checksum;
- publicação;
- metadados;
- linhagem.

---

## 102. Plano de retorno

Correções de alto impacto deverão possuir mecanismo de retorno ao estado anterior.

---

## 103. Aprovação humana

A aprovação humana será obrigatória para correções relacionadas a:

- pessoas;
- grupos tradicionais;
- funções;
- memória;
- autoria;
- direitos;
- edição fundadora;
- dados pessoais;
- contexto cultural;
- publicação oficial.

---

## 104. Aprovação técnica

Deverá verificar:

- estrutura;
- integridade;
- compatibilidade;
- impacto;
- testes;
- recuperação.

---

## 105. Aprovação institucional

Deverá verificar:

- legitimidade;
- fonte;
- responsabilidade;
- conformidade;
- impacto público;
- preservação histórica.

---

## 106. Aprovação cultural

Deverá ser solicitada quando a alteração afetar:

- tradições;
- nomes;
- papéis;
- grupos;
- narrativas;
- saberes;
- imagens;
- vozes;
- memória comunitária.

---

## 107. Segregação da aprovação

Quem executa a correção não deverá ser o único responsável por aprová-la quando houver criticidade elevada.

---

## 108. Evidências de conferência

Deverão ser preservados:

- relatórios;
- listas;
- consultas;
- arquivos;
- checksums;
- versões;
- fontes;
- capturas;
- assinaturas;
- decisões;
- aprovações;
- justificativas.

---

## 109. Identificação da evidência

```text
evidenceId
auditId
type
source
createdAt
collectedBy
checksum
classification
```

---

## 110. Integridade da evidência

Deverá ser protegida por:

- identificação;
- controle de acesso;
- checksum;
- versionamento;
- cadeia de custódia;
- armazenamento seguro;
- retenção.

---

## 111. Cadeia de custódia

```text
evidenceId
collectedBy
collectedAt
storedAt
transferredBy
transferredAt
accessHistory
currentCustodian
```

---

## 112. Cópias de trabalho

Cópias utilizadas em análise deverão ser identificadas como derivadas e não substituir a evidência original.

---

## 113. Relatório de auditoria

Toda auditoria relevante deverá produzir relatório.

---

## 114. Estrutura do relatório

```text
auditId
title
scope
objectives
criteria
methodology
findings
divergences
risks
recommendations
conclusion
approvals
```

---

## 115. Relatório de reconciliação

Deverá conter:

- origem;
- destino;
- período;
- versão;
- contagem;
- correspondências;
- divergências;
- rejeições;
- diferenças justificadas;
- diferenças não resolvidas;
- correções;
- conclusão.

---

## 116. Resultado da reconciliação

Os estados oficiais serão:

```text
RECONCILED
RECONCILED_WITH_EXCEPTIONS
PARTIALLY_RECONCILED
NOT_RECONCILED
INCONCLUSIVE
```

---

## 117. Reconciliação concluída

`RECONCILED` indica ausência de divergências materiais não resolvidas.

---

## 118. Reconciliação com exceções

`RECONCILED_WITH_EXCEPTIONS` indica divergências conhecidas, justificadas e formalmente aceitas.

---

## 119. Reconciliação parcial

`PARTIALLY_RECONCILED` indica que apenas parte do escopo foi reconciliada.

---

## 120. Não reconciliado

`NOT_RECONCILED` indica divergências materiais pendentes.

---

## 121. Resultado inconclusivo

`INCONCLUSIVE` indica evidência insuficiente.

---

## 122. Relatório de correção

Deverá registrar:

- divergência;
- causa;
- correção;
- fonte;
- executor;
- aprovador;
- resultado;
- validação;
- impacto;
- estado anterior;
- estado posterior.

---

## 123. Relatório por edição

Cada edição deverá possuir, quando aplicável:

- inventário auditado;
- conferência de programação;
- conferência de participantes;
- conferência de locais;
- conferência de documentos;
- conferência de mídias;
- reconciliação de publicações;
- divergências;
- correções;
- conclusão institucional.

---

## 124. Auditoria da programação

Deverá verificar:

- atividades;
- datas;
- horários;
- responsáveis;
- categorias;
- locais;
- vínculos;
- fontes;
- versão publicada;
- correções.

---

## 125. Auditoria dos festeiros

Deverá verificar:

- nome;
- função;
- edição;
- fonte;
- grafia;
- validação;
- publicação;
- histórico.

---

## 126. Auditoria dos grupos tradicionais

Deverá verificar:

- denominação;
- participação;
- função;
- edição;
- fonte;
- legitimidade;
- registro histórico;
- proteção cultural.

---

## 127. Auditoria dos locais

Deverá verificar:

- identificador;
- nome;
- categoria;
- endereço;
- privacidade;
- autorização;
- coordenadas;
- relação com a atividade;
- edição.

---

## 128. Auditoria das mídias

Deverá verificar:

- autoria;
- data;
- local;
- evento;
- participantes;
- direitos;
- integridade;
- arquivo original;
- versões derivadas;
- metadados.

---

## 129. Auditoria das publicações

Deverá verificar:

- conteúdo;
- versão;
- aprovação;
- canal;
- data;
- fonte;
- integridade;
- correções;
- retirada;
- preservação.

---

## 130. Auditoria de identificadores

Deverá detectar:

- duplicidade;
- ausência;
- reutilização indevida;
- mudança silenciosa;
- alias incorreto;
- vínculo rompido;
- conflito entre edições.

---

## 131. Auditoria de dados mestres

Deverá verificar:

- nomes canônicos;
- aliases;
- códigos;
- hierarquias;
- responsáveis;
- desativação;
- versionamento;
- sincronização;
- duplicidades.

---

## 132. Auditoria de metadados

Deverá verificar:

- completude;
- definição;
- localização;
- versão;
- classificação;
- proprietário;
- direitos;
- preservação;
- relações;
- qualidade.

---

## 133. Auditoria de backups

Deverá verificar:

- cobertura;
- execução;
- retenção;
- redundância;
- integridade;
- testes;
- RPO;
- RTO;
- acessos;
- cópias históricas.

---

## 134. Auditoria de restaurações

Deverá verificar:

- autorização;
- cópia selecionada;
- resultado;
- integridade;
- tempo;
- reconciliação;
- validação;
- evidências;
- plano de retorno.

---

## 135. Auditoria de automações

Deverá verificar:

- finalidade;
- regra;
- versão;
- entradas;
- saídas;
- erros;
- supervisão;
- registros;
- reversibilidade;
- impacto.

---

## 136. Auditoria do uso de inteligência artificial

Deverá verificar:

- finalidade;
- modelo ou serviço;
- campos afetados;
- dados de entrada;
- saída;
- validação humana;
- correções;
- limitações;
- impacto cultural;
- rastreabilidade.

---

## 137. IA na auditoria

A inteligência artificial poderá auxiliar em:

- identificação de padrões;
- comparação;
- detecção de anomalias;
- sugestão de duplicidades;
- análise preliminar;
- classificação inicial de divergências.

---

## 138. Limites da IA

A inteligência artificial não deverá:

- encerrar auditoria crítica;
- declarar fonte verdadeira isoladamente;
- aprovar correção cultural;
- apagar divergências;
- substituir a aprovação humana;
- atribuir responsabilidade sem evidência;
- alterar dados fundadores autonomamente.

---

## 139. Registro do uso de IA

```text
aiAssisted
purpose
modelOrService
inputScope
outputScope
humanReviewer
validationStatus
```

---

## 140. Cadeia de responsabilidade

Toda auditoria deverá identificar:

- solicitante;
- planejador;
- executor;
- conferente;
- aprovador;
- responsável pela correção;
- custodiante das evidências;
- autoridade de encerramento.

---

## 141. Responsabilidades

| Atividade | Responsabilidade principal |
|---|---|
| Definir critérios | Governança de dados |
| Planejar auditoria | Auditoria institucional |
| Disponibilizar fontes | Proprietário do dado |
| Executar verificações | Equipe auditora |
| Conferir resultados | Steward de dados |
| Investigar divergências | Equipe técnica e institucional |
| Aprovar correções | Autoridade competente |
| Preservar evidências | Gestão documental |
| Corrigir dados | Equipe autorizada |
| Validar resultado | Proprietário e auditoria |
| Proteger edição fundadora | Governança superior |

---

## 142. Proprietário do dado

Deverá:

- disponibilizar informações;
- esclarecer regras;
- definir autoridade;
- avaliar impacto;
- aprovar prioridades;
- validar correções relevantes.

---

## 143. Steward de dados

Deverá:

- conferir definições;
- apoiar reconciliação;
- avaliar qualidade;
- analisar divergências;
- validar domínios;
- manter evidências.

---

## 144. Equipe técnica

Deverá:

- fornecer logs;
- executar consultas;
- gerar comparações;
- preservar integridade;
- apoiar correções;
- realizar testes;
- documentar procedimentos.

---

## 145. Gestão documental

Deverá:

- preservar relatórios;
- classificar evidências;
- controlar versões;
- manter cadeia de custódia;
- aplicar retenção;
- assegurar recuperabilidade.

---

## 146. Curadoria cultural

Deverá participar quando a auditoria envolver:

- memória;
- tradição;
- grupos;
- festeiros;
- funções;
- saberes;
- imagens;
- vozes;
- legitimidade cultural.

---

## 147. Auditoria institucional

Deverá atuar com independência, proporcionalidade, documentação e base em evidências.

---

## 148. Autoridade de encerramento

O encerramento deverá ser realizado por autoridade compatível com a criticidade e o impacto.

---

## 149. Periodicidade

A auditoria poderá ocorrer:

```text
CONTINUOUS
DAILY
WEEKLY
MONTHLY
QUARTERLY
ANNUAL
PER_EDITION
ON_CHANGE
ON_INCIDENT
ON_MIGRATION
ON_DEMAND
```

---

## 150. Auditoria contínua

Poderá ser aplicada a:

- integridade;
- validações;
- sincronizações;
- segurança;
- publicação;
- alterações em dados fundadores.

---

## 151. Auditoria periódica

Poderá ser aplicada a:

- catálogos;
- metadados;
- documentos;
- dados mestres;
- backups;
- acessos;
- histórico.

---

## 152. Auditoria por evento

Deverá ser considerada após:

- migração;
- restauração;
- incidente;
- publicação;
- correção;
- alteração estrutural;
- encerramento de edição;
- mudança de sistema.

---

## 153. Auditoria extraordinária

Poderá ser instaurada quando houver:

- denúncia;
- suspeita de alteração;
- perda de integridade;
- conflito de fonte;
- risco cultural;
- risco jurídico;
- comprometimento da edição fundadora.

---

## 154. Indicadores de auditoria

Poderão ser monitorados:

- ativos auditados;
- divergências;
- não conformidades;
- tempo de resolução;
- reincidências;
- correções validadas;
- itens reconciliados;
- exceções;
- auditorias concluídas;
- evidências preservadas.

---

## 155. Taxa de reconciliação

```text
Itens reconciliados
------------------- × 100
Itens avaliados
```

---

## 156. Taxa de divergência

```text
Itens divergentes
----------------- × 100
Itens avaliados
```

---

## 157. Taxa de correção

```text
Divergências corrigidas
----------------------- × 100
Divergências confirmadas
```

---

## 158. Taxa de reincidência

```text
Divergências reincidentes
------------------------- × 100
Divergências corrigidas
```

---

## 159. Tempo médio de resolução

```text
Soma do tempo de resolução
--------------------------
Quantidade de divergências resolvidas
```

---

## 160. Cobertura de auditoria

```text
Ativos auditados
---------------- × 100
Ativos previstos
```

---

## 161. Não conformidades

Serão consideradas não conformidades:

- ativo crítico não auditável;
- ausência de fonte;
- divergência não registrada;
- evidência não preservada;
- correção silenciosa;
- falta de aprovação;
- referência órfã;
- checksum divergente;
- reconciliação incompleta;
- relatório ausente;
- alteração fundadora sem conferência.

---

## 162. Classificação das não conformidades

| Nível | Definição |
|---|---|
| Baixa | Falha limitada e sem impacto material |
| Média | Compromete qualidade, clareza ou rastreabilidade |
| Alta | Compromete operação, publicação ou integração |
| Crítica | Compromete segurança, direitos, cultura ou preservação |
| Máxima | Compromete a edição fundadora ou a memória institucional |

---

## 163. Tratamento das não conformidades

Toda não conformidade deverá ser:

1. identificada;

2. registrada;

3. classificada;

4. atribuída;

5. investigada;

6. corrigida;

7. conferida;

8. aprovada;

9. reconciliada;

10. auditada;

11. preservada como evidência.

---

## 164. Aceitação de risco

Uma não conformidade somente poderá permanecer aberta quando:

- o risco estiver identificado;
- o impacto estiver avaliado;
- houver justificativa;
- o responsável estiver definido;
- houver prazo;
- houver controle compensatório;
- a autoridade competente aprovar.

---

## 165. Exceções

Exceções somente poderão ocorrer quando:

- houver fundamento;
- o escopo estiver definido;
- a duração estiver limitada;
- o risco estiver documentado;
- o responsável estiver identificado;
- houver aprovação;
- a edição fundadora permanecer protegida.

---

## 166. Reabertura

Uma auditoria ou divergência deverá ser reaberta quando:

- novas evidências surgirem;
- a correção falhar;
- a divergência reaparecer;
- a causa estiver incorreta;
- o impacto tiver sido subestimado;
- houver comprometimento histórico.

---

## 167. Encerramento da auditoria

O encerramento deverá exigir:

- escopo concluído;
- evidências preservadas;
- divergências classificadas;
- correções documentadas;
- exceções aprovadas;
- relatório emitido;
- responsáveis identificados;
- conclusão formal.

---

## 168. Estados da auditoria

```text
PLANNED
AUTHORIZED
IN_PROGRESS
UNDER_REVIEW
AWAITING_CORRECTION
AWAITING_APPROVAL
COMPLETED
COMPLETED_WITH_EXCEPTIONS
SUSPENDED
CANCELLED
REOPENED
```

---

## 169. Estados da divergência

```text
DETECTED
CONFIRMED
UNDER_INVESTIGATION
JUSTIFIED
AWAITING_CORRECTION
CORRECTED
VALIDATED
ACCEPTED
UNRESOLVED
CLOSED
REOPENED
```

---

## 170. Preservação dos relatórios

Relatórios deverão permanecer vinculados:

- ao ativo;
- ao sistema;
- à versão;
- à edição;
- à divergência;
- à correção;
- às evidências;
- à aprovação.

---

## 171. Retenção

A retenção deverá considerar:

- criticidade;
- valor histórico;
- obrigação jurídica;
- risco;
- edição;
- relevância cultural;
- necessidade de auditoria futura.

---

## 172. Preservação permanente

Deverão possuir preservação permanente, quando aplicável:

- auditorias da edição fundadora;
- relatórios de migração fundadora;
- divergências críticas;
- correções históricas;
- conflitos de fonte;
- decisões institucionais;
- evidências materiais;
- relatórios de encerramento.

---

## 173. Proteção de dados pessoais

Auditorias deverão evitar exposição indevida de:

- documentos pessoais;
- contatos;
- endereços;
- coordenadas privadas;
- credenciais;
- informações confidenciais;
- dados de crianças e adolescentes.

---

## 174. Minimização

Relatórios deverão conter apenas os dados necessários à finalidade da auditoria.

---

## 175. Acesso às auditorias

O acesso deverá considerar:

- classificação;
- necessidade;
- responsabilidade;
- menor privilégio;
- proteção cultural;
- proteção jurídica;
- risco de exposição.

---

## 176. Transparência

Resultados públicos poderão ser divulgados de forma:

- agregada;
- anonimizada;
- contextualizada;
- proporcional;
- institucionalmente aprovada.

---

## 177. Proibição de exposição irresponsável

A transparência não deverá ser utilizada para expor pessoas, famílias, crianças, grupos tradicionais ou dados protegidos.

---

## 178. Proteção da edição fundadora

A FESTANÇA 2026 deverá possuir regime especial de auditoria, reconciliação e conferência.

---

## 179. Objetos fundadores prioritários

Deverão ser auditados, quando aplicável:

- programação;
- festeiros;
- grupos tradicionais;
- locais;
- atividades;
- arquivos JSON;
- documentos;
- publicações;
- imagens;
- áudios;
- vídeos;
- fontes;
- autorizações;
- identificadores;
- metadados;
- registros de migração;
- cópias de preservação.

---

## 180. Auditoria integral fundadora

Sempre que tecnicamente possível, os ativos fundadores deverão ser submetidos a universo completo, e não apenas amostragem.

---

## 181. Reconciliação fundadora

Deverá comparar:

- arquivos originais;
- arquivos migrados;
- arquivos publicados;
- arquivos preservados;
- versões;
- checksums;
- identificadores;
- metadados;
- relacionamentos.

---

## 182. Correções fundadoras

Toda correção em ativo fundador deverá possuir:

- estado anterior;
- estado corrigido;
- fonte;
- justificativa;
- responsável;
- aprovação;
- data;
- versão;
- evidência;
- checksum quando aplicável.

---

## 183. Proibição de sobrescrita

Nenhuma correção fundadora deverá eliminar o estado anterior.

---

## 184. Separação entre edições

A auditoria deverá identificar mistura indevida entre:

- 2026;
- futuras edições;
- núcleo permanente;
- dados compartilhados;
- dados históricos.

---

## 185. Identificadores anuais

Identificadores de uma edição não deverão ser reutilizados indevidamente em outra.

---

## 186. Auditoria de encerramento de edição

Cada edição deverá possuir conferência final antes do arquivamento.

---

## 187. Escopo mínimo do encerramento

Deverá verificar:

- programação final;
- participantes;
- locais;
- documentos;
- mídias;
- publicações;
- correções;
- fontes;
- metadados;
- preservação;
- backups;
- relatório final.

---

## 188. Lista mínima de planejamento

- [ ] auditoria identificada;
- [ ] escopo definido;
- [ ] objetivos registrados;
- [ ] critérios definidos;
- [ ] período estabelecido;
- [ ] ativos relacionados;
- [ ] equipe designada;
- [ ] independência avaliada;
- [ ] evidências previstas;
- [ ] riscos identificados.

---

## 189. Lista mínima de execução

- [ ] fontes localizadas;
- [ ] versões confirmadas;
- [ ] quantidades conferidas;
- [ ] valores comparados;
- [ ] checksums comparados;
- [ ] referências verificadas;
- [ ] datas avaliadas;
- [ ] divergências registradas;
- [ ] evidências preservadas;
- [ ] responsáveis identificados.

---

## 190. Lista mínima de reconciliação

- [ ] origem identificada;
- [ ] destino identificado;
- [ ] fonte de autoridade definida;
- [ ] contagem comparada;
- [ ] identificadores comparados;
- [ ] valores comparados;
- [ ] versões comparadas;
- [ ] relacionamentos conferidos;
- [ ] divergências explicadas;
- [ ] resultado classificado.

---

## 191. Lista mínima de investigação

- [ ] divergência confirmada;
- [ ] impacto avaliado;
- [ ] causa investigada;
- [ ] linha do tempo registrada;
- [ ] fontes avaliadas;
- [ ] logs preservados;
- [ ] responsáveis consultados;
- [ ] hipótese documentada;
- [ ] risco classificado;
- [ ] recomendação emitida.

---

## 192. Lista mínima de correção

- [ ] correção autorizada;
- [ ] backup realizado;
- [ ] estado anterior preservado;
- [ ] fonte registrada;
- [ ] responsável identificado;
- [ ] alteração executada;
- [ ] resultado validado;
- [ ] reconciliação refeita;
- [ ] aprovação obtida;
- [ ] relatório atualizado.

---

## 193. Lista mínima de encerramento

- [ ] escopo concluído;
- [ ] divergências classificadas;
- [ ] correções validadas;
- [ ] exceções aprovadas;
- [ ] evidências preservadas;
- [ ] relatório final emitido;
- [ ] responsáveis comunicados;
- [ ] ações futuras definidas;
- [ ] estado formal registrado;
- [ ] proteção fundadora confirmada.

---

## 194. Declaração constitucional

Este documento declara que:

1. nenhum dado crítico será considerado correto sem possibilidade de conferência;

2. nenhuma divergência relevante será apagada silenciosamente;

3. nenhuma reconciliação será considerada concluída sem evidências;

4. nenhuma correção crítica será executada sem preservação do estado anterior;

5. nenhuma fonte será descartada apenas por divergir da fonte prioritária;

6. nenhuma auditoria cultural crítica será encerrada exclusivamente por automação;

7. nenhum checksum divergente será ignorado;

8. nenhuma aprovação substituirá a necessidade de documentação;

9. nenhuma edição futura sobrescreverá os registros auditáveis da edição fundadora;

10. nenhuma auditoria será utilizada para expor pessoas indevidamente;

11. todo dado crítico deverá ser comparável, conferível, reconciliável, corrigível e auditável.

---

## 195. Princípio maior

**IDENTIFICAR ANTES DE AUDITAR.**

**DEFINIR A FONTE ANTES DE RECONCILIAR.**

**CONFERIR ANTES DE CONCLUIR.**

**COMPARAR ANTES DE CORRIGIR.**

**PRESERVAR EVIDÊNCIAS ANTES DE INTERVIR.**

**INVESTIGAR ANTES DE ATRIBUIR RESPONSABILIDADE.**

**CLASSIFICAR ANTES DE PRIORIZAR.**

**APROVAR ANTES DE PUBLICAR A CORREÇÃO.**

**VALIDAR ANTES DE ENCERRAR.**

**RECONCILIAR SEM APAGAR AS DIFERENÇAS HISTÓRICAS.**

**CORRIGIR SEM ROMPER A LINHAGEM.**

**AUDITAR SEM VIOLAR A DIGNIDADE.**

**PRESERVAR ANTES DE EVOLUIR.**

**EVOLUIR SEM COMPROMETER A EDIÇÃO FUNDADORA.**

---

## 196. Compromisso permanente

Toda auditoria, reconciliação e conferência deverá proteger simultaneamente:

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
- os auditores;
- os parceiros legítimos;
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
- os identificadores;
- as referências;
- os relacionamentos;
- os metadados;
- os catálogos;
- as imagens;
- as vozes;
- os vídeos;
- os locais;
- os sistemas;
- as integrações;
- as migrações;
- as versões;
- os checksums;
- os backups;
- as evidências;
- os relatórios;
- as aprovações;
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
- `docs/festanca/governance/risk-management-and-resilience-policy.md`;
- `docs/festanca/governance/business-continuity-policy.md`;
- `docs/festanca/governance/audit-and-compliance-policy.md`;
- `docs/festanca/governance/change-control-policy.md`;
- `docs/festanca/governance/artificial-intelligence-and-automation-policy.md`;
- `docs/festanca/governance/community-participation-and-cultural-safeguarding-policy.md`.

---

## 198. Estado inicial deste documento

```text
DOCUMENTO: data-audit-and-reconciliation-model.md
FUNÇÃO: Gestão constitucional de auditoria, reconciliação e conferência de dados
REGIME: Permanente
EDIÇÃO FUNDADORA: FESTANÇA 2026
CRITICIDADE: Máxima
MUTABILIDADE: Estritamente controlada
PRESERVAÇÃO: Integral
AUDITORIA ESTRUTURAL: Obrigatória
AUDITORIA SEMÂNTICA: Obrigatória
AUDITORIA REFERENCIAL: Obrigatória
AUDITORIA TEMPORAL: Obrigatória
AUDITORIA DOCUMENTAL: Aplicável
AUDITORIA TÉCNICA: Obrigatória
AUDITORIA ENTRE ARQUIVOS: Obrigatória quando houver vínculos
AUDITORIA ENTRE SISTEMAS: Obrigatória quando houver sincronização
AUDITORIA ENTRE VERSÕES: Obrigatória
RECONCILIAÇÃO ORIGEM E DESTINO: Obrigatória
RECONCILIAÇÃO ENTRE VERSÕES: Obrigatória
CONFERÊNCIA DE QUANTIDADES: Obrigatória
CONFERÊNCIA DE VALORES: Obrigatória
COMPARAÇÃO DE CHECKSUMS: Obrigatória para ativos críticos
IDENTIFICAÇÃO DE DIVERGÊNCIAS: Permanente
INVESTIGAÇÃO DAS DIFERENÇAS: Obrigatória
CORREÇÃO CONTROLADA: Obrigatória
EVIDÊNCIAS DE CONFERÊNCIA: Preservadas
RELATÓRIOS DE RECONCILIAÇÃO: Obrigatórios
APROVAÇÃO HUMANA: Obrigatória para dados críticos
CADEIA DE RESPONSABILIDADE: Formalmente definida
AUDITORIA DAS EDIÇÕES ANUAIS: Obrigatória
AUDITORIA DA EDIÇÃO FUNDADORA: Prioridade máxima
SEGREGAÇÃO DE FUNÇÕES: Obrigatória quando aplicável
CADEIA DE CUSTÓDIA: Integral
AUDITORIA DO USO DE IA: Obrigatória quando aplicável
CORREÇÕES SILENCIOSAS: Proibidas
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
- preservar critérios anteriores;
- preservar relatórios históricos;
- preservar divergências registradas;
- documentar alterações metodológicas;
- manter compatibilidade histórica;
- proteger dados pessoais;
- preservar evidências;
- preservar cadeias de custódia;
- registrar mudanças nos níveis de severidade;
- preservar resultados de reconciliações anteriores;
- documentar alterações nas responsabilidades;
- proteger os dados da edição fundadora;
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
