# Modelo Constitucional de Qualidade, Validação e Certificação de Dados do Portal Permanente da FESTANÇA

> Constituição destinada a regulamentar a avaliação, a validação, a certificação, a homologação, o monitoramento, a correção, a auditoria e a preservação da qualidade dos dados utilizados pelo Portal Permanente da FESTANÇA de Vila Bela da Santíssima Trindade — Mato Grosso — Brasil.

---

## Denominação oficial
**Modelo Constitucional de Qualidade, Validação e Certificação de Dados do Portal Permanente da FESTANÇA**

## 1. Identificação do documento

| Campo | Conteúdo |
|---|---|
| Documento | Modelo Constitucional de Qualidade, Validação e Certificação de Dados do Portal Permanente da FESTANÇA |
| Caminho oficial | `docs/festanca/data/data-quality-and-validation-model.md` |
| Classificação | Documento constitucional de dados |
| Domínio | Qualidade, validação e certificação de dados |
| Regime | Permanente |
| Criticidade | Máxima |
| Mutabilidade | Estritamente controlada |
| Preservação | Integral, auditável, versionada e rastreável |
| Edição fundadora | FESTANÇA 2026 |
| Situação | Constituição permanente |
| Versão inicial | `1.0.0` |
| Aplicabilidade | Portal Permanente e edições anuais |
| Vigência | Permanente |
| Documento superior | `docs/festanca/data/data-architecture.md` |
| Modelo especializado de qualidade | `docs/festanca/data/data-quality-model.md` |
| Regras especializadas de validação | `docs/festanca/data/data-validation-rules.md` |
| Modelo de classificação | `docs/festanca/data/data-classification-model.md` |
| Modelo de linhagem | `docs/festanca/data/data-lineage-and-provenance-model.md` |
| Modelo de auditoria | `docs/festanca/data/data-audit-and-reconciliation-model.md` |
| Modelo de publicação | `docs/festanca/data/data-publication-and-open-data-model.md` |

---

## 2. Natureza constitucional

Este documento constitui o modelo integrador de qualidade, validação e certificação de dados do Portal Permanente da FESTANÇA.

Ele não substitui:

- o `data-quality-model.md`;
- o `data-validation-rules.md`;
- os esquemas oficiais;
- os contratos de dados;
- os procedimentos específicos de auditoria.

Sua função é integrar esses instrumentos em um regime constitucional único, capaz de determinar quando um dado:

- possui qualidade suficiente;
- atende às regras aplicáveis;
- pode ser certificado;
- pode ser homologado;
- está autorizado para publicação;
- deverá ser corrigido;
- deverá permanecer bloqueado;
- deverá ser preservado como registro histórico.

---

## 3. Finalidade

Este documento estabelece os princípios, critérios, procedimentos, responsabilidades e mecanismos destinados a assegurar que os dados utilizados pelo Portal Permanente da FESTANÇA sejam:

- identificáveis;
- legítimos;
- completos;
- exatos;
- consistentes;
- atuais;
- únicos;
- válidos;
- íntegros;
- confiáveis;
- contextualizados;
- rastreáveis;
- verificáveis;
- acessíveis;
- recuperáveis;
- historicamente preservados;
- certificados quando exigido;
- homologados antes de utilizações críticas.

Nenhum dado deverá ser certificado apenas por aparência de correção.

Nenhum dado deverá ser publicado sem a validação correspondente à sua criticidade.

Nenhuma automação deverá substituir a responsabilidade humana em decisões históricas, culturais, pessoais ou institucionais críticas.

---

## 4. Objetivos estratégicos

São objetivos permanentes deste Modelo:

1. estabelecer o regime integrado de qualidade dos dados;

2. padronizar as dimensões de qualidade;

3. regulamentar validações estruturais, semânticas, referenciais e temporais;

4. definir critérios mínimos de aceitação;

5. distinguir validação, certificação, homologação e publicação;

6. garantir que dados críticos recebam validação humana;

7. registrar evidências de conferência;

8. impedir a publicação de dados não validados;

9. identificar anomalias e divergências;

10. regulamentar correções controladas;

11. preservar valores originais;

12. manter o histórico das decisões;

13. definir indicadores e níveis mínimos aceitáveis;

14. permitir monitoramento contínuo;

15. integrar qualidade, linhagem, auditoria e publicação;

16. preservar conflitos de fontes;

17. assegurar a responsabilização institucional;

18. proteger dados pessoais e conhecimentos tradicionais;

19. impedir alterações silenciosas;

20. proteger integralmente os dados da edição fundadora.

---

## 5. Princípios fundamentais

Toda gestão de qualidade, validação e certificação deverá observar:

- autenticidade;
- boa-fé;
- clareza;
- completude;
- consistência;
- contextualização;
- continuidade histórica;
- exatidão;
- imparcialidade;
- integridade;
- legalidade;
- necessidade;
- não adulteração;
- proporcionalidade;
- preservação;
- responsabilidade;
- rastreabilidade;
- segurança;
- supervisão humana;
- transparência proporcional;
- verificabilidade;
- proteção cultural;
- proteção da privacidade;
- proteção da edição fundadora.

---

## 6. Escopo

Este Modelo aplica-se a:

- dados estruturados;
- dados semiestruturados;
- dados não estruturados;
- arquivos JSON;
- planilhas;
- bancos de dados;
- formulários;
- documentos;
- imagens;
- fotografias;
- áudios;
- vídeos;
- transcrições;
- registros históricos;
- registros biográficos;
- programações anuais;
- dados de festeiros;
- dados de grupos culturais;
- informações de locais;
- contatos;
- coordenadas geográficas;
- dados mestres;
- dados de referência;
- metadados;
- dados derivados;
- conteúdos assistidos por inteligência artificial;
- dados migrados;
- dados restaurados;
- dados publicados;
- dados da edição fundadora.

---

## 7. Conceito de qualidade de dados

Qualidade de dados é o grau em que um dado atende às necessidades institucionais para as quais foi recebido, produzido, preservado, utilizado ou publicado.

A qualidade não será considerada característica abstrata.

Ela deverá ser avaliada em relação:

- à finalidade;
- ao contexto;
- à fonte;
- à criticidade;
- ao tempo;
- ao público;
- ao risco;
- à utilização pretendida;
- à necessidade de preservação histórica.

---

## 8. Conceito de validação

Validação é o processo de verificar se um dado atende às regras, aos critérios e aos requisitos aplicáveis.

A validação poderá ser:

- automática;
- técnica;
- documental;
- semântica;
- referencial;
- temporal;
- humana;
- institucional;
- cultural;
- histórica.

---

## 9. Conceito de certificação

Certificação é a declaração formal de que determinado dado, conjunto, versão ou publicação foi submetido aos controles definidos e atingiu o nível de qualidade exigido para uma finalidade específica.

A certificação não significará verdade absoluta.

Ela deverá declarar:

- escopo;
- versão;
- critérios aplicados;
- evidências;
- limitações;
- responsável;
- data;
- validade;
- finalidade autorizada.

---

## 10. Conceito de homologação

Homologação é a aprovação institucional final de um dado, conjunto, versão, esquema, migração ou publicação para uso oficial.

A homologação deverá ocorrer após as validações exigidas.

---

## 11. Distinção entre os estágios

```text
DADO RECEBIDO
→ DADO IDENTIFICADO
→ DADO CLASSIFICADO
→ DADO VALIDADO
→ DADO CERTIFICADO
→ DADO HOMOLOGADO
→ DADO PUBLICÁVEL
→ DADO PUBLICADO
→ DADO MONITORADO
→ DADO PRESERVADO
```

Nem todo dado recebido será validado.

Nem todo dado validado será certificado.

Nem todo dado certificado será público.

Nem todo dado homologado deverá permanecer permanentemente publicado.

---

## 12. Dimensões constitucionais de qualidade

São dimensões oficiais:

```text
ACCURACY
COMPLETENESS
CONSISTENCY
TIMELINESS
UNIQUENESS
VALIDITY
INTEGRITY
RELIABILITY
ACCESSIBILITY
TRACEABILITY
AUTHENTICITY
CONTEXTUALIZATION
RECOVERABILITY
PRESERVABILITY
```

---

## 13. Exatidão

Exatidão é o grau de correspondência entre o dado registrado e o fato, documento, fonte ou realidade que ele representa.

A exatidão deverá ser avaliada por:

- fonte primária;
- evidência documental;
- confirmação institucional;
- comparação independente;
- conferência humana;
- reconciliação entre registros.

---

## 14. Completude

Completude é o grau em que os campos e elementos necessários estão presentes.

A ausência de campo obrigatório deverá gerar:

```text
INCOMPLETE
```

salvo exceção formalmente autorizada.

---

## 15. Consistência

Consistência é a ausência de contradições indevidas dentro do mesmo registro, entre registros relacionados, entre arquivos, entre versões ou entre sistemas.

---

## 16. Atualidade

Atualidade é a adequação temporal do dado à finalidade pretendida.

Dados históricos não serão considerados desatualizados apenas por serem antigos.

Sua atualidade será avaliada em relação ao período que representam.

---

## 17. Unicidade

Unicidade é a inexistência de duplicidades indevidas para a mesma entidade, evento, registro, documento ou ativo.

Aliases legítimos não serão classificados automaticamente como duplicidades.

---

## 18. Validade

Validade é a conformidade com:

- tipo;
- formato;
- domínio permitido;
- regra de negócio;
- esquema;
- contrato;
- intervalo;
- padrão institucional.

---

## 19. Integridade

Integridade é a preservação correta da estrutura, dos relacionamentos, dos valores, dos identificadores e dos vínculos históricos.

---

## 20. Confiabilidade

Confiabilidade é o grau de confiança justificável atribuído ao dado com base em:

- fonte;
- evidências;
- validações;
- coerência;
- histórico;
- responsabilidade;
- ausência de manipulação não registrada.

---

## 21. Acessibilidade

Acessibilidade é a possibilidade de localizar, interpretar e utilizar o dado conforme as permissões e necessidades legítimas.

---

## 22. Rastreabilidade

Rastreabilidade é a capacidade de reconstruir:

- origem;
- autoria;
- recebimento;
- transformação;
- validação;
- correção;
- aprovação;
- publicação;
- preservação;
- responsabilidade.

---

## 23. Autenticidade

Autenticidade é a confiança de que o dado é aquilo que declara ser e mantém vínculo verificável com sua origem.

---

## 24. Contextualização

Contextualização é a preservação dos elementos necessários à interpretação correta do dado.

Nenhum dado culturalmente relevante deverá ser publicado de forma que destrua ou distorça seu contexto.

---

## 25. Recuperabilidade

Recuperabilidade é a capacidade de restaurar o dado e seus vínculos após perda, corrupção, exclusão ou indisponibilidade.

---

## 26. Preservabilidade

Preservabilidade é a capacidade de manter o dado interpretável, íntegro e acessível ao longo do tempo.

---

## 27. Níveis de criticidade

Os dados serão classificados nos seguintes níveis:

```text
LOW
MODERATE
HIGH
CRITICAL
MAXIMUM
```

---

## 28. Criticidade máxima

Será aplicada a dados relacionados a:

- edição fundadora;
- programação oficial;
- festeiros;
- grupos tradicionais;
- decisões institucionais;
- documentos históricos;
- dados pessoais sensíveis;
- crianças e adolescentes;
- residências privadas;
- conhecimentos tradicionais;
- coordenadas protegidas;
- evidências de auditoria;
- cadeia de custódia;
- registros de migração.

---

## 29. Níveis de qualidade

Os níveis oficiais serão:

```text
UNASSESSED
INSUFFICIENT
CONDITIONAL
ACCEPTABLE
CERTIFIED
HOMOLOGATED
HISTORICALLY_PRESERVED
```

---

## 30. Estado não avaliado

```text
UNASSESSED
```

indica que o dado ainda não foi submetido à avaliação formal.

Esse estado não autoriza publicação oficial.

---

## 31. Estado insuficiente

```text
INSUFFICIENT
```

indica que o dado não atende aos critérios mínimos aplicáveis.

---

## 32. Estado condicional

```text
CONDITIONAL
```

indica que o dado poderá ser utilizado apenas:

- com ressalvas;
- para finalidade limitada;
- por prazo definido;
- sob supervisão;
- com pendências registradas.

---

## 33. Estado aceitável

```text
ACCEPTABLE
```

indica que o dado atende aos requisitos mínimos para a finalidade avaliada.

---

## 34. Estado certificado

```text
CERTIFIED
```

indica que o dado recebeu declaração formal de conformidade com critérios definidos.

---

## 35. Estado homologado

```text
HOMOLOGATED
```

indica aprovação institucional para uso oficial.

---

## 36. Estado historicamente preservado

```text
HISTORICALLY_PRESERVED
```

indica que o dado foi preservado como evidência histórica, mesmo quando contenha limitações, divergências ou padrões antigos.

---

## 37. Qualidade por finalidade

A qualidade deverá ser avaliada conforme a utilização.

Um dado poderá ser:

- adequado para preservação;
- inadequado para publicação;
- adequado para pesquisa interna;
- inadequado para decisão oficial;
- adequado para memória histórica;
- inadequado para geolocalização pública.

---

## 38. Validação estrutural

A validação estrutural deverá verificar:

- existência do arquivo;
- codificação;
- sintaxe;
- esquema;
- campos;
- tipos;
- formatos;
- cardinalidades;
- organização interna;
- capacidade de processamento.

---

## 39. Validação sintática

A validação sintática deverá verificar a conformidade da representação com o formato declarado.

Exemplos:

- JSON válido;
- data no formato definido;
- horário válido;
- URL bem formada;
- coordenada válida;
- identificador conforme padrão.

---

## 40. Validação semântica

A validação semântica deverá verificar se o valor possui significado coerente com o campo, a entidade e o contexto.

Um dado sintaticamente válido poderá ser semanticamente incorreto.

---

## 41. Validação referencial

A validação referencial deverá verificar:

- existência do registro relacionado;
- validade do identificador;
- cardinalidade;
- vínculo entre entidades;
- coerência entre edição e registro;
- ausência de referências órfãs indevidas.

---

## 42. Validação temporal

A validação temporal deverá verificar:

- datas válidas;
- sequência cronológica;
- intervalos;
- início e encerramento;
- vigência;
- compatibilidade entre eventos;
- relação com a edição correta.

---

## 43. Validação geográfica

A validação geográfica deverá verificar:

- município;
- estado;
- país;
- formato da coordenada;
- plausibilidade espacial;
- nível de precisão;
- autorização para divulgação;
- proteção de residência privada.

---

## 44. Validação documental

A validação documental deverá verificar:

- documento de origem;
- versão;
- autoria;
- integridade;
- legibilidade;
- data;
- contexto;
- correspondência com o dado registrado.

---

## 45. Validação histórica

A validação histórica deverá considerar:

- fontes disponíveis;
- contexto da época;
- divergências documentais;
- memória oral;
- tradição comunitária;
- limites da evidência;
- necessidade de preservar incertezas.

---

## 46. Validação cultural

A validação cultural deverá envolver pessoas com conhecimento legítimo quando o dado tratar de:

- tradições;
- funções cerimoniais;
- grupos culturais;
- rezas;
- práticas religiosas;
- narrativas comunitárias;
- conhecimentos tradicionais;
- denominações históricas.

---

## 47. Validação humana

A validação humana será obrigatória para:

- dados de criticidade máxima;
- conflitos de fontes;
- decisões históricas;
- dados pessoais;
- conteúdos gerados por IA;
- correções relevantes;
- publicação de endereços;
- publicação de coordenadas;
- homologação oficial;
- dados da edição fundadora.

---

## 48. Validação automatizada

A validação automatizada poderá verificar:

- esquemas;
- tipos;
- formatos;
- campos obrigatórios;
- domínios;
- duplicidades;
- referências;
- intervalos;
- integridade técnica;
- consistência programável.

---

## 49. Limites da validação automatizada

A automação não deverá declarar autonomamente:

- verdade histórica;
- legitimidade cultural;
- autorização pessoal;
- autenticidade documental definitiva;
- inexistência de riscos;
- aprovação institucional;
- certificação máxima.

---

## 50. Validação assistida por inteligência artificial

A inteligência artificial poderá apoiar:

- identificação de inconsistências;
- comparação de versões;
- sugestão de duplicidades;
- classificação preliminar;
- análise de padrões;
- elaboração de relatórios;
- detecção de campos ausentes.

---

## 51. Restrições ao uso de inteligência artificial

A inteligência artificial não poderá:

- inventar fontes;
- preencher lacunas como fatos confirmados;
- eliminar conflitos sem decisão humana;
- certificar autonomamente dados críticos;
- modificar originais;
- ocultar sua participação;
- publicar diretamente dados protegidos;
- alterar a edição fundadora sem autorização.

---

## 52. Registro do uso de inteligência artificial

```text
aiAssisted
modelOrService
purpose
inputReference
outputReference
executedAt
responsiblePerson
humanReviewer
validationResult
```

---

## 53. Regras de negócio

Toda regra de negócio deverá possuir:

```text
ruleId
ruleName
description
scope
severity
condition
expectedResult
exceptionPolicy
version
effectiveFrom
responsibleOwner
```

---

## 54. Versionamento das regras

As regras deverão ser versionadas.

Alterações não poderão modificar silenciosamente o resultado de validações históricas.

---

## 55. Campos obrigatórios

A obrigatoriedade deverá ser definida por:

- entidade;
- processo;
- edição;
- finalidade;
- criticidade;
- estágio do ciclo de vida.

---

## 56. Campos opcionais

Campos opcionais não deverão receber valores artificiais apenas para aparentar completude.

---

## 57. Valores desconhecidos

Valores desconhecidos deverão ser representados de forma explícita e padronizada.

Exemplos permitidos:

```text
UNKNOWN
NOT_PROVIDED
NOT_APPLICABLE
PENDING_VALIDATION
```

---

## 58. Proibição de valores enganosos

Não deverão ser utilizados valores vazios, zeros, datas fictícias ou textos genéricos para ocultar ausência de informação.

---

## 59. Domínios permitidos

Campos controlados deverão utilizar vocabulários ou listas oficiais.

---

## 60. Exceções

Toda exceção deverá registrar:

- regra afetada;
- justificativa;
- responsável;
- prazo;
- risco;
- autorização;
- medida compensatória;
- revisão prevista.

---

## 61. Evidências de validação

Toda validação crítica deverá gerar evidência contendo:

```text
validationId
assetId
recordId
ruleSetVersion
validationType
executedBy
executedAt
result
findings
evidenceReferences
```

---

## 62. Resultados de validação

Os resultados oficiais serão:

```text
PASSED
PASSED_WITH_RESTRICTIONS
FAILED
INCONCLUSIVE
NOT_APPLICABLE
PENDING_HUMAN_REVIEW
```

---

## 63. Validação inconclusiva

```text
INCONCLUSIVE
```

deverá ser utilizada quando as evidências disponíveis não forem suficientes para confirmar ou rejeitar o dado.

A incerteza deverá ser preservada.

---

## 64. Critérios de aceitação

Os critérios mínimos deverão considerar:

- criticidade;
- finalidade;
- dimensões de qualidade;
- riscos;
- público;
- proteção jurídica;
- proteção cultural;
- necessidade histórica;
- capacidade de correção;
- reversibilidade.

---

## 65. Limites mínimos aceitáveis

Os limites poderão ser:

- quantitativos;
- qualitativos;
- absolutos;
- condicionais;
- definidos por categoria;
- definidos por campo;
- definidos por edição.

---

## 66. Indicador de completude

```text
Campos obrigatórios preenchidos
------------------------------- × 100
Campos obrigatórios aplicáveis
```

---

## 67. Indicador de validade

```text
Valores conformes
----------------- × 100
Valores avaliados
```

---

## 68. Indicador de consistência

```text
Registros sem contradições
-------------------------- × 100
Registros avaliados
```

---

## 69. Indicador de unicidade

```text
Registros únicos válidos
------------------------ × 100
Registros avaliados
```

---

## 70. Indicador de rastreabilidade

```text
Registros com origem e histórico completos
------------------------------------------ × 100
Registros sujeitos à rastreabilidade
```

---

## 71. Indicador de certificação

```text
Ativos certificados
------------------- × 100
Ativos sujeitos à certificação
```

---

## 72. Pontuação de qualidade

Uma pontuação consolidada poderá ser utilizada apenas quando:

- a metodologia estiver documentada;
- os pesos forem conhecidos;
- as dimensões individuais permanecerem visíveis;
- a pontuação não ocultar falhas críticas;
- houver validação institucional.

---

## 73. Proibição de compensação indevida

Um resultado elevado em determinada dimensão não poderá compensar automaticamente falha crítica em:

- integridade;
- privacidade;
- autenticidade;
- autorização;
- proteção cultural;
- rastreabilidade;
- edição fundadora.

---

## 74. Perfis de qualidade

Poderão ser definidos perfis específicos:

```text
PUBLICATION_PROFILE
ARCHIVAL_PROFILE
MIGRATION_PROFILE
INTEGRATION_PROFILE
ANALYTICAL_PROFILE
CULTURAL_HERITAGE_PROFILE
FOUNDING_EDITION_PROFILE
```

---

## 75. Perfil de publicação

O perfil de publicação deverá exigir:

- validação;
- classificação;
- revisão de privacidade;
- revisão de direitos;
- metadados;
- acessibilidade;
- aprovação humana;
- versão identificada.

---

## 76. Perfil de preservação

O perfil de preservação deverá exigir:

- origem;
- contexto;
- integridade;
- metadados;
- formato;
- identificador;
- cadeia de custódia;
- recuperação testável.

---

## 77. Perfil de migração

O perfil de migração deverá exigir:

- inventário;
- mapeamento;
- validação anterior;
- validação posterior;
- contagens;
- checksums;
- reconciliação;
- reversibilidade;
- relatório.

---

## 78. Perfil da edição fundadora

O perfil da edição fundadora deverá aplicar proteção máxima e exigir:

- preservação do original;
- validação humana;
- versionamento;
- rastreabilidade integral;
- evidências;
- certificação;
- homologação;
- cópia de preservação;
- auditoria;
- proibição de sobrescrita.

---

## 79. Certificação de dados

A certificação deverá possuir:

```text
certificateId
assetOrDatasetId
certificationScope
qualityProfile
criteriaVersion
issuedBy
issuedAt
validUntil
limitations
status
```

---

## 80. Escopo da certificação

A certificação poderá abranger:

- registro;
- arquivo;
- conjunto de dados;
- edição;
- migração;
- publicação;
- esquema;
- integração;
- relatório;
- cópia restaurada.

---

## 81. Certificação condicionada

A certificação poderá conter ressalvas quando:

- a limitação estiver documentada;
- o risco for aceitável;
- a finalidade estiver limitada;
- não houver ocultação da incerteza;
- existir aprovação competente.

---

## 82. Validade da certificação

A certificação poderá ser:

```text
PERMANENT
TIME_LIMITED
VERSION_BOUND
PURPOSE_BOUND
CONDITIONAL
```

---

## 83. Revogação da certificação

A certificação deverá ser revogada ou suspensa quando houver:

- erro relevante;
- adulteração;
- nova evidência;
- mudança incompatível;
- incidente;
- perda de integridade;
- quebra de rastreabilidade;
- uso fora do escopo.

---

## 84. Registro da revogação

A revogação deverá registrar:

- certificado;
- motivo;
- data;
- responsável;
- impacto;
- ativos afetados;
- ação corretiva;
- comunicação realizada.

---

## 85. Homologação institucional

A homologação deverá registrar:

```text
homologationId
assetOrDatasetId
version
approvedBy
approvedAt
purpose
restrictions
supportingEvidence
```

---

## 86. Segregação de funções

Sempre que possível, deverão ser separados os papéis de:

- produção;
- correção;
- validação;
- certificação;
- homologação;
- publicação;
- auditoria.

---

## 87. Autocertificação

A autocertificação por quem produziu o dado deverá ser evitada em ativos de alta criticidade.

Quando inevitável, deverá existir revisão independente posterior.

---

## 88. Dupla conferência

Dados de criticidade máxima deverão receber dupla conferência ou controle equivalente.

---

## 89. Aprovação humana

A aprovação deverá identificar:

- objeto;
- versão;
- responsável;
- data;
- decisão;
- ressalvas;
- evidências;
- finalidade autorizada.

---

## 90. Tratamento de anomalias

Toda anomalia deverá ser:

1. detectada;

2. registrada;

3. classificada;

4. relacionada ao ativo;

5. investigada;

6. avaliada quanto ao impacto;

7. corrigida ou justificada;

8. validada;

9. auditada;

10. encerrada formalmente.

---

## 91. Tipos de anomalia

```text
MISSING_VALUE
INVALID_FORMAT
REFERENCE_BREAK
TEMPORAL_CONFLICT
DUPLICATE
SEMANTIC_CONFLICT
SOURCE_CONFLICT
UNAUTHORIZED_CHANGE
INTEGRITY_FAILURE
PRIVACY_RISK
HISTORICAL_INCONSISTENCY
```

---

## 92. Severidade das anomalias

```text
INFORMATIONAL
LOW
MODERATE
HIGH
CRITICAL
MAXIMUM
```

---

## 93. Anomalia crítica

Será crítica quando comprometer:

- publicação oficial;
- direitos pessoais;
- segurança;
- integridade histórica;
- conhecimento tradicional;
- cadeia de custódia;
- decisão institucional;
- edição fundadora.

---

## 94. Correção controlada

Toda correção deverá seguir:

```text
VALOR ORIGINAL
→ ANOMALIA
→ EVIDÊNCIA
→ DECISÃO
→ VALOR CORRIGIDO
→ VALIDAÇÃO
→ NOVA VERSÃO
```

---

## 95. Preservação do valor original

O valor original deverá permanecer preservado quando possuir relevância:

- histórica;
- documental;
- probatória;
- técnica;
- de auditoria;
- de migração;
- de responsabilização.

---

## 96. Proibição de correção silenciosa

Nenhuma correção relevante deverá eliminar o registro do estado anterior.

---

## 97. Conflitos de fontes

Quando fontes legítimas divergirem, deverão ser preservados:

- valores conflitantes;
- fontes;
- datas;
- responsáveis;
- evidências;
- níveis de confiança;
- decisão adotada;
- justificativa;
- possibilidade de revisão.

---

## 98. Níveis de confiança

Poderão ser utilizados:

```text
UNVERIFIED
LOW_CONFIDENCE
MODERATE_CONFIDENCE
HIGH_CONFIDENCE
CONFIRMED
INSTITUTIONALLY_HOMOLOGATED
```

---

## 99. Fonte primária

A existência de fonte primária deverá aumentar a confiança, mas não eliminar automaticamente a necessidade de verificação.

---

## 100. Memória oral

A memória oral poderá ser registrada como fonte legítima, desde que identificada conforme sua natureza e contexto.

Não deverá ser apresentada como documento escrito quando não o for.

---

## 101. Validação de nomes

Nomes deverão ser validados quanto a:

- grafia;
- acentuação;
- nome canônico;
- aliases;
- título ou função;
- edição;
- fonte;
- autorização de publicação.

---

## 102. Validação de datas e horários

Datas e horários deverão observar:

- formato oficial;
- fuso horário;
- calendário;
- sequência;
- período da edição;
- conflitos;
- alteração de programação;
- histórico.

---

## 103. Validação de locais

Locais deverão observar:

- nome canônico;
- tipo;
- relação com a atividade;
- município;
- privacidade;
- autorização;
- coordenadas verificadas;
- estratégia de fallback.

---

## 104. Validação de residências privadas

Nenhum endereço ou ponto exato de residência privada deverá ser certificado para publicação sem autorização válida.

---

## 105. Validação de coordenadas

Coordenadas deverão ser:

- tecnicamente válidas;
- conferidas;
- classificadas;
- compatíveis com o local;
- autorizadas para o nível de precisão publicado.

---

## 106. Validação de dados pessoais

Dados pessoais deverão ser avaliados quanto a:

- finalidade;
- necessidade;
- proporcionalidade;
- base aplicável;
- acesso;
- publicação;
- retenção;
- minimização;
- proteção.

---

## 107. Proteção de crianças e adolescentes

Dados relacionados a crianças e adolescentes deverão receber validação reforçada e publicação restritiva.

---

## 108. Proteção dos conhecimentos tradicionais

A validação de conhecimentos tradicionais deverá considerar:

- legitimidade da fonte;
- contexto comunitário;
- consentimento;
- restrições de uso;
- proteção contra apropriação;
- autoria coletiva;
- sensibilidade cultural.

---

## 109. Monitoramento contínuo

A qualidade deverá ser monitorada ao longo de todo o ciclo de vida.

A certificação não encerrará o monitoramento.

---

## 110. Eventos de revalidação

A revalidação deverá ocorrer após:

- alteração;
- migração;
- conversão;
- integração;
- restauração;
- mudança de esquema;
- correção;
- nova evidência;
- incidente;
- mudança de finalidade;
- republicação.

---

## 111. Validação pré-publicação

Antes da publicação, deverão ser verificados:

- conteúdo;
- versão;
- classificação;
- privacidade;
- direitos;
- acessibilidade;
- metadados;
- integridade;
- aprovação;
- rastreabilidade.

---

## 112. Validação pós-publicação

Após a publicação, deverão ser verificados:

- disponibilidade;
- conteúdo publicado;
- formato;
- links;
- metadados;
- acessibilidade;
- versão;
- correspondência com o aprovado;
- ausência de exposição indevida.

---

## 113. Validação pré-migração

Antes da migração, deverão ser preservados:

- inventário;
- estado de origem;
- contagens;
- checksums;
- esquemas;
- relacionamentos;
- anomalias existentes;
- evidências.

---

## 114. Validação pós-migração

Após a migração, deverão ser comparados:

- quantidades;
- valores;
- identificadores;
- relacionamentos;
- formatos;
- checksums;
- metadados;
- amostras;
- regras;
- capacidade de recuperação.

---

## 115. Validação de restauração

Toda restauração deverá ser validada quanto a:

- integridade;
- completude;
- versão;
- ponto de recuperação;
- relacionamentos;
- acessibilidade;
- cadeia de custódia;
- impacto nos sistemas.

---

## 116. Validação de integrações

As integrações deverão ser avaliadas quanto a:

- contrato;
- esquema;
- autenticação;
- autorização;
- frequência;
- transformação;
- erros;
- duplicidades;
- latência;
- reconciliação.

---

## 117. Testes de qualidade

Poderão ser utilizados:

- testes unitários de dados;
- testes de esquema;
- testes referenciais;
- testes temporais;
- testes de regressão;
- testes de reconciliação;
- testes de duplicidade;
- testes de publicação;
- testes de restauração.

---

## 118. Testes de regressão

Toda mudança relevante deverá confirmar que regras anteriormente atendidas não foram rompidas sem decisão formal.

---

## 119. Ambiente de validação

Validações críticas deverão ser executadas em ambiente controlado, sempre que aplicável.

---

## 120. Evidências de testes

Os testes deverão preservar:

- versão;
- entrada;
- regra;
- resultado esperado;
- resultado obtido;
- data;
- responsável;
- falhas;
- correções.

---

## 121. Relatório de qualidade

O relatório deverá conter:

- escopo;
- versão;
- dimensões avaliadas;
- critérios;
- indicadores;
- anomalias;
- riscos;
- limitações;
- decisões;
- recomendações;
- responsáveis.

---

## 122. Painel de qualidade

Um painel poderá apresentar:

- estado geral;
- indicadores;
- tendências;
- falhas abertas;
- certificações;
- homologações;
- revalidações;
- criticidade;
- edição afetada.

---

## 123. Alertas

Deverão existir alertas para:

- dado crítico não validado;
- certificação vencida;
- anomalia crítica;
- quebra referencial;
- queda de completude;
- divergência entre sistemas;
- mudança não autorizada;
- conflito de fontes;
- falha de publicação;
- alteração de dado fundador.

---

## 124. Bloqueios preventivos

Poderá ser bloqueada:

- publicação;
- exportação;
- integração;
- certificação;
- homologação;
- migração;
- descarte;
- alteração;

quando existir risco incompatível com a criticidade.

---

## 125. Não conformidades

Serão consideradas não conformidades:

- ausência de validação obrigatória;
- uso de regra desatualizada;
- certificação sem evidências;
- homologação sem responsável;
- publicação de dado reprovado;
- alteração silenciosa;
- correção sem histórico;
- uso de IA não declarado;
- ausência de proteção de dados pessoais;
- sobrescrita da edição fundadora.

---

## 126. Plano de ação corretiva

Toda ação corretiva deverá registrar:

```text
actionId
findingId
responsiblePerson
plannedAction
priority
dueDate
status
validationResult
closedAt
```

---

## 127. Melhoria contínua

A melhoria contínua deverá ocorrer mediante:

- análise de indicadores;
- revisão de anomalias;
- auditorias;
- feedback;
- atualização de regras;
- testes;
- capacitação;
- evolução tecnológica;
- preservação do histórico.

---

## 128. Responsabilidades institucionais

| Atividade | Responsabilidade principal |
|---|---|
| Definir dimensões e critérios | Governança de dados |
| Definir regras de negócio | Proprietário do dado |
| Manter vocabulários | Steward de dados |
| Implementar validações automáticas | Equipe técnica |
| Realizar validação humana | Responsável institucional autorizado |
| Certificar dados | Autoridade certificadora definida |
| Homologar uso oficial | Autoridade institucional competente |
| Preservar evidências | Gestão documental |
| Monitorar indicadores | Governança e observabilidade |
| Auditar resultados | Auditoria institucional |
| Proteger dados pessoais | Governança, privacidade e segurança |
| Proteger a edição fundadora | Governança superior |

---

## 129. Proprietário do dado

Compete ao proprietário:

- definir finalidade;
- aprovar critérios;
- aceitar riscos;
- autorizar utilização;
- decidir sobre correções;
- aprovar certificação;
- proteger o significado institucional.

---

## 130. Steward de dados

Compete ao steward:

- acompanhar qualidade;
- manter metadados;
- revisar anomalias;
- apoiar validações;
- preservar regras;
- acompanhar correções;
- produzir relatórios.

---

## 131. Equipe técnica

Compete à equipe técnica:

- implementar controles;
- executar testes;
- manter logs;
- versionar regras;
- monitorar falhas;
- preservar resultados;
- apoiar recuperação.

---

## 132. Validador humano

Compete ao validador:

- analisar evidências;
- declarar limitações;
- evitar inferências indevidas;
- registrar decisão;
- justificar rejeições;
- preservar imparcialidade;
- comunicar conflitos.

---

## 133. Certificador

Compete ao certificador:

- verificar o cumprimento dos critérios;
- analisar evidências;
- declarar escopo;
- registrar limitações;
- emitir ou negar certificação;
- suspender certificações inválidas.

---

## 134. Homologador

Compete ao homologador:

- confirmar a finalidade oficial;
- avaliar riscos;
- verificar aprovações;
- registrar decisão;
- definir restrições;
- autorizar uso institucional.

---

## 135. Auditoria institucional

Compete à auditoria:

- verificar critérios;
- revisar amostras;
- conferir evidências;
- identificar lacunas;
- testar rastreabilidade;
- revisar certificações;
- acompanhar correções;
- proteger independência.

---

## 136. Matriz de responsabilidades

Nenhuma função crítica deverá permanecer sem responsável definido.

As responsabilidades deverão ser registradas e atualizadas.

---

## 137. Auditoria da qualidade

A auditoria deverá verificar:

- dimensões;
- métricas;
- regras;
- resultados;
- evidências;
- exceções;
- certificações;
- homologações;
- correções;
- publicação;
- preservação.

---

## 138. Auditoria das validações automáticas

Deverá verificar:

- código;
- versão;
- regras;
- cobertura;
- falsos positivos;
- falsos negativos;
- logs;
- alterações;
- testes.

---

## 139. Auditoria das validações humanas

Deverá verificar:

- competência;
- independência;
- evidências;
- critérios;
- justificativas;
- conflitos;
- decisões;
- rastreabilidade.

---

## 140. Auditoria das certificações

Deverá verificar:

- escopo;
- critérios;
- autoridade;
- evidências;
- validade;
- limitações;
- revogações;
- uso efetivo.

---

## 141. Auditoria da edição fundadora

Os dados da FESTANÇA 2026 deverão receber auditoria prioritária e proteção máxima.

---

## 142. Preservação histórica da qualidade

Deverão ser preservados:

- indicadores históricos;
- regras anteriores;
- resultados de validação;
- anomalias;
- certificações;
- revogações;
- homologações;
- relatórios;
- decisões;
- correções;
- estados anteriores.

---

## 143. Qualidade histórica

Registros antigos não deverão ser modificados apenas para corresponder aos padrões atuais.

Quando necessário, deverão ser:

- contextualizados;
- mapeados;
- enriquecidos;
- relacionados a versões atuais;
- preservados em sua forma original.

---

## 144. Proteção da edição fundadora

A FESTANÇA 2026 será considerada:

- referência histórica;
- edição fundadora;
- base de migração;
- patrimônio documental permanente;
- marco constitucional do Portal.

---

## 145. Regra de não sobrescrita

Nenhum dado fundador deverá ser sobrescrito para simular conformidade atual.

Correções deverão produzir nova versão vinculada ao estado original.

---

## 146. Certificação fundadora

A certificação dos dados fundadores deverá declarar:

- origem;
- escopo;
- versão;
- qualidade;
- limitações;
- conflitos;
- evidências;
- responsável;
- data;
- preservação aplicada.

---

## 147. Homologação fundadora

A homologação dos dados fundadores deverá ser humana, documentada, versionada e auditável.

---

## 148. Lista mínima de qualidade

- [ ] finalidade definida;
- [ ] criticidade classificada;
- [ ] dimensões aplicáveis identificadas;
- [ ] critérios documentados;
- [ ] indicadores calculados;
- [ ] anomalias registradas;
- [ ] riscos avaliados;
- [ ] evidências preservadas;
- [ ] responsável identificado;
- [ ] edição fundadora protegida.

---

## 149. Lista mínima de validação

- [ ] ativo identificado;
- [ ] versão identificada;
- [ ] esquema validado;
- [ ] campos obrigatórios conferidos;
- [ ] tipos e formatos conferidos;
- [ ] regras semânticas aplicadas;
- [ ] referências verificadas;
- [ ] regras temporais verificadas;
- [ ] validação humana realizada quando exigida;
- [ ] resultado registrado.

---

## 150. Lista mínima de certificação

- [ ] escopo definido;
- [ ] finalidade definida;
- [ ] perfil de qualidade definido;
- [ ] critérios atendidos;
- [ ] evidências disponíveis;
- [ ] limitações registradas;
- [ ] certificador identificado;
- [ ] versão vinculada;
- [ ] validade definida;
- [ ] certificado preservado.

---

## 151. Lista mínima de homologação

- [ ] dado validado;
- [ ] certificação verificada quando obrigatória;
- [ ] riscos analisados;
- [ ] finalidade oficial definida;
- [ ] responsável competente identificado;
- [ ] restrições registradas;
- [ ] versão identificada;
- [ ] decisão documentada;
- [ ] evidências preservadas;
- [ ] publicação autorizada ou bloqueada.

---

## 152. Lista mínima de publicação

- [ ] homologação confirmada;
- [ ] classificação revisada;
- [ ] privacidade revisada;
- [ ] direitos revisados;
- [ ] metadados completos;
- [ ] acessibilidade verificada;
- [ ] versão aprovada;
- [ ] correspondência entre origem e publicação;
- [ ] rastreabilidade preservada;
- [ ] validação pós-publicação planejada.

---

## 153. Lista mínima de correção

- [ ] anomalia registrada;
- [ ] valor original preservado;
- [ ] evidência identificada;
- [ ] responsável definido;
- [ ] impacto avaliado;
- [ ] correção executada;
- [ ] nova versão criada;
- [ ] validação realizada;
- [ ] sistemas relacionados atualizados;
- [ ] auditoria preservada.

---

## 154. Lista mínima de auditoria

- [ ] critérios preservados;
- [ ] versões identificadas;
- [ ] amostra definida;
- [ ] evidências verificadas;
- [ ] validações reproduzíveis;
- [ ] exceções analisadas;
- [ ] certificações conferidas;
- [ ] homologações conferidas;
- [ ] correções rastreáveis;
- [ ] dados fundadores protegidos.

---

## 155. Declaração constitucional

Este documento declara que:

1. nenhum dado será considerado de qualidade sem critérios definidos;

2. nenhuma validação crítica ocorrerá sem evidências;

3. nenhuma certificação será emitida sem escopo e responsável;

4. nenhuma homologação oficial permanecerá sem registro;

5. nenhuma publicação crítica ocorrerá com validação pendente;

6. nenhuma anomalia relevante será ocultada;

7. nenhuma correção eliminará silenciosamente o valor original;

8. nenhum conflito legítimo de fontes será apagado;

9. nenhuma automação substituirá a validação humana obrigatória;

10. nenhuma inteligência artificial inventará fatos, fontes ou certificações;

11. nenhuma edição futura sobrescreverá os dados da edição fundadora;

12. todo dado crítico deverá ser identificável, verificável, contextualizável, recuperável e auditável.

---

## 156. Princípio maior

**DEFINIR A FINALIDADE ANTES DE MEDIR A QUALIDADE.**

**IDENTIFICAR A FONTE ANTES DE CONFIAR NO DADO.**

**CLASSIFICAR ANTES DE VALIDAR.**

**VALIDAR A ESTRUTURA E O SIGNIFICADO.**

**PRESERVAR A INCERTEZA QUANDO NÃO HOUVER PROVA SUFICIENTE.**

**REGISTRAR TODA ANOMALIA.**

**CORRIGIR SEM APAGAR O ESTADO ANTERIOR.**

**CERTIFICAR SOMENTE COM EVIDÊNCIAS.**

**HOMOLOGAR SOMENTE COM RESPONSABILIDADE HUMANA.**

**PUBLICAR SOMENTE A VERSÃO APROVADA.**

**MONITORAR MESMO APÓS A CERTIFICAÇÃO.**

**EVOLUIR SEM ROMPER A CONTINUIDADE HISTÓRICA.**

**PRESERVAR INTEGRALMENTE A EDIÇÃO FUNDADORA.**

---

## 157. Compromisso permanente

Toda gestão de qualidade deverá proteger simultaneamente:

- as pessoas;
- as famílias;
- as crianças;
- os adolescentes;
- a comunidade;
- os festeiros;
- os grupos tradicionais;
- os autores;
- os responsáveis;
- os validadores;
- os certificadores;
- os homologadores;
- os curadores;
- os auditores;
- a cultura;
- a fé;
- a história;
- a memória;
- os conhecimentos tradicionais;
- os documentos;
- os dados;
- os registros;
- os metadados;
- os identificadores;
- os relacionamentos;
- as fontes;
- as evidências;
- as versões;
- as regras;
- os esquemas;
- os indicadores;
- as certificações;
- as homologações;
- as publicações;
- a edição fundadora;
- as futuras edições;
- a continuidade institucional;
- o patrimônio histórico;
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
- `docs/festanca/data/metadata-and-data-catalog-model.md`;
- `docs/festanca/data/data-observability-and-monitoring-model.md`;
- `docs/festanca/data/data-backup-recovery-and-restoration-model.md`;
- `docs/festanca/data/data-audit-and-reconciliation-model.md`;
- `docs/festanca/data/data-contracts-and-schema-evolution-model.md`;
- `docs/festanca/data/data-privacy-anonymization-and-minimization-model.md`;
- `docs/festanca/data/data-custody-and-evidence-chain-model.md`;
- `docs/festanca/data/data-publication-and-open-data-model.md`;
- `docs/festanca/architecture/architecture-principles.md`;
- `docs/festanca/architecture/repository-structure.md`;
- `docs/festanca/architecture/component-architecture.md`;
- `docs/festanca/architecture/integration-architecture.md`;
- `docs/festanca/architecture/infrastructure-architecture.md`;
- `docs/festanca/architecture/dependency-management.md`;
- `docs/festanca/governance/data-governance-policy.md`;
- `docs/festanca/governance/privacy-and-data-protection-policy.md`;
- `docs/festanca/governance/digital-preservation-policy.md`;
- `docs/festanca/governance/records-and-archives-management-policy.md`;
- `docs/festanca/governance/information-security-and-cybersecurity-policy.md`;
- `docs/festanca/governance/artificial-intelligence-and-automation-policy.md`;
- `docs/festanca/governance/risk-management-and-resilience-policy.md`;
- `docs/festanca/governance/community-participation-and-cultural-safeguarding-policy.md`.

---

## 159. Estado inicial deste documento

```text
DOCUMENTO: data-quality-and-validation-model.md
FUNÇÃO: Gestão constitucional da qualidade, validação e certificação de dados
REGIME: Permanente
EDIÇÃO FUNDADORA: FESTANÇA 2026
CRITICIDADE: Máxima
MUTABILIDADE: Estritamente controlada
PRESERVAÇÃO: Integral
QUALIDADE: Obrigatoriamente mensurável
EXATIDÃO: Obrigatória conforme a finalidade
COMPLETUDE: Mensurável
CONSISTÊNCIA: Obrigatória
ATUALIDADE: Proporcional à finalidade
UNICIDADE: Obrigatória
VALIDADE: Obrigatória
INTEGRIDADE: Obrigatória
CONFIABILIDADE: Classificada
ACESSIBILIDADE: Obrigatória conforme o perfil
RASTREABILIDADE: Integral
AUTENTICIDADE: Verificável
CONTEXTUALIZAÇÃO: Obrigatória
RECUPERABILIDADE: Testável
PRESERVABILIDADE: Permanente para ativos históricos
VALIDAÇÃO ESTRUTURAL: Obrigatória
VALIDAÇÃO SINTÁTICA: Obrigatória
VALIDAÇÃO SEMÂNTICA: Obrigatória
VALIDAÇÃO REFERENCIAL: Obrigatória
VALIDAÇÃO TEMPORAL: Obrigatória
VALIDAÇÃO HUMANA: Obrigatória para decisões críticas
VALIDAÇÃO AUTOMATIZADA: Controlada
USO DE INTELIGÊNCIA ARTIFICIAL: Declarado e rastreável
EVIDÊNCIAS DE VALIDAÇÃO: Obrigatórias
ANOMALIAS: Registradas
CORREÇÕES SILENCIOSAS: Proibidas
VALORES ORIGINAIS: Preservados
CONFLITOS DE FONTES: Preservados e classificados
CERTIFICAÇÃO: Formalmente registrada
HOMOLOGAÇÃO: Humanamente autorizada
PUBLICAÇÃO: Condicionada à aprovação
MONITORAMENTO: Contínuo
REVALIDAÇÃO: Obrigatória após mudanças relevantes
AUDITORIA: Permanente
PROTEÇÃO DE DADOS PESSOAIS: Obrigatória
PROTEÇÃO DE CONHECIMENTOS TRADICIONAIS: Obrigatória
PROTEÇÃO DA EDIÇÃO FUNDADORA: Máxima
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
- preservar dimensões e critérios históricos;
- preservar regras anteriores;
- preservar indicadores históricos;
- preservar resultados de validação;
- preservar anomalias registradas;
- preservar evidências;
- preservar valores originais;
- preservar conflitos de fontes;
- preservar certificações;
- preservar revogações;
- preservar homologações;
- preservar relatórios;
- documentar mudanças metodológicas;
- testar compatibilidade;
- proteger dados pessoais;
- proteger conhecimentos tradicionais;
- registrar alterações relacionadas à inteligência artificial;
- preservar a edição fundadora;
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
