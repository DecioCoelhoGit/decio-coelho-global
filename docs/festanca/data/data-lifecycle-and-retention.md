# Modelo Constitucional do Ciclo de Vida, Retenção e Destinação de Dados do Portal Permanente da FESTANÇA

> Constituição destinada a regulamentar a criação, o recebimento, a classificação, a utilização, a atualização, a validação, a publicação, o armazenamento, a retenção, a revisão, o arquivamento, a preservação permanente, a anonimização, a restrição de acesso, a eliminação segura, a suspensão de descarte, a recuperação, a cadeia de custódia e a destinação final dos dados utilizados pelo Portal Permanente da FESTANÇA de Vila Bela da Santíssima Trindade — Mato Grosso — Brasil.

---

## Denominação oficial
**Modelo Constitucional do Ciclo de Vida, Retenção e Destinação de Dados do Portal Permanente da FESTANÇA**

## 1. Identificação do documento

| Campo | Conteúdo |
|---|---|
| Documento | Modelo Constitucional do Ciclo de Vida, Retenção e Destinação de Dados do Portal Permanente da FESTANÇA |
| Caminho oficial | `docs/festanca/data/data-lifecycle-and-retention.md` |
| Classificação | Documento constitucional de dados |
| Domínio | Ciclo de vida, retenção, preservação e destinação de dados |
| Regime | Permanente |
| Criticidade | Máxima |
| Mutabilidade | Estritamente controlada |
| Preservação | Integral, auditável, versionada e recuperável |
| Edição fundadora | FESTANÇA 2026 |
| Situação | Constituição de ciclo de vida e retenção de dados |
| Versão inicial | `1.0.0` |
| Aplicabilidade | Portal Permanente e edições anuais |
| Vigência | Permanente |
| Documento superior | `docs/festanca/data/data-architecture.md` |
| Modelo classificatório | `docs/festanca/data/data-classification-model.md` |
| Modelo relacional | `docs/festanca/data/entity-relationship-model.md` |
| Modelo de identificação | `docs/festanca/data/identifiers-and-references.md` |
| Regras de validação | `docs/festanca/data/data-validation-rules.md` |
| Modelo de qualidade | `docs/festanca/data/data-quality-model.md` |

---

## 2. Finalidade

Este documento estabelece o regime oficial do ciclo de vida dos dados produzidos, recebidos, utilizados, relacionados, validados, publicados, corrigidos, armazenados, arquivados e preservados pelo Portal Permanente da FESTANÇA.

Sua finalidade é assegurar que todo dado institucionalmente relevante seja:

- criado ou recebido de forma legítima;
- identificado;
- classificado;
- contextualizado;
- utilizado para finalidade definida;
- atualizado quando necessário;
- validado;
- protegido;
- publicado responsavelmente;
- armazenado com segurança;
- retido pelo prazo adequado;
- revisado periodicamente;
- arquivado de forma controlada;
- preservado quando possuir valor permanente;
- anonimizado quando necessário;
- eliminado com segurança quando autorizado;
- recuperável durante seu período de guarda;
- rastreável durante toda a sua existência.

Nenhum dado deverá ser mantido indefinidamente sem justificativa, nem eliminado sem avaliação, autorização, evidência e proteção da memória institucional.

---

## 3. Objetivos estratégicos

São objetivos permanentes deste Modelo:

1. regulamentar todas as fases do ciclo de vida dos dados;

2. estabelecer responsabilidades em cada fase;

3. definir critérios de retenção;

4. distinguir retenção operacional de preservação permanente;

5. proteger dados pessoais e informações restritas;

6. assegurar continuidade institucional;

7. impedir descarte prematuro;

8. impedir retenção excessiva e injustificada;

9. preservar dados de valor histórico, cultural e documental;

10. assegurar recuperação de informações;

11. manter a cadeia de custódia;

12. documentar toda destinação final;

13. proteger os dados da edição fundadora;

14. preservar vínculos entre edições;

15. permitir auditoria completa do ciclo de vida.

---

## 4. Princípios fundamentais

Todo ciclo de vida de dados deverá observar:

- legitimidade;
- finalidade;
- necessidade;
- proporcionalidade;
- minimização;
- classificação;
- temporalidade;
- segurança;
- integridade;
- autenticidade;
- rastreabilidade;
- responsabilidade;
- reversibilidade controlada;
- preservação histórica;
- continuidade institucional;
- soberania cultural.

---

## 5. Conceito de ciclo de vida dos dados

Ciclo de vida dos dados é o conjunto de fases percorridas desde sua criação ou recebimento até sua destinação final.

O ciclo oficial compreenderá:

```text
CRIAÇÃO OU RECEBIMENTO
          ↓
IDENTIFICAÇÃO
          ↓
CLASSIFICAÇÃO
          ↓
VALIDAÇÃO
          ↓
UTILIZAÇÃO
          ↓
ATUALIZAÇÃO
          ↓
PUBLICAÇÃO OU RESTRIÇÃO
          ↓
ARMAZENAMENTO
          ↓
RETENÇÃO
          ↓
REVISÃO
          ↓
ARQUIVAMENTO
          ↓
PRESERVAÇÃO, ANONIMIZAÇÃO OU ELIMINAÇÃO
```

---

## 6. Dados sujeitos a este Modelo

Este Modelo aplica-se a:

- dados estruturados;
- dados não estruturados;
- metadados;
- documentos;
- registros históricos;
- programações;
- atividades;
- pessoas;
- funções;
- grupos tradicionais;
- locais;
- residências privadas;
- contatos;
- fontes;
- autorizações;
- parceiros;
- publicações;
- imagens;
- áudios;
- vídeos;
- transmissões;
- registros de sistemas;
- logs;
- relatórios;
- backups;
- integrações;
- dados derivados;
- dados automatizados;
- dados produzidos com inteligência artificial.

---

## 7. Fases oficiais

As fases oficiais do ciclo de vida serão:

| Fase | Finalidade |
|---|---|
| Criação | Produção de novo dado |
| Recebimento | Incorporação de dado externo |
| Identificação | Atribuição de identidade |
| Classificação | Definição de categoria, criticidade e acesso |
| Validação | Verificação de conformidade |
| Utilização | Uso institucional autorizado |
| Atualização | Correção ou complementação |
| Publicação | Disponibilização em canal autorizado |
| Armazenamento | Guarda ativa ou intermediária |
| Retenção | Manutenção pelo prazo definido |
| Revisão | Reavaliação de necessidade e estado |
| Arquivamento | Encerramento da fase ativa |
| Preservação | Guarda permanente |
| Anonimização | Redução ou remoção da identificação pessoal |
| Eliminação | Descarte seguro e autorizado |
| Recuperação | Restauração de dado preservado ou retido |

---

## 8. Estados oficiais do ciclo de vida

Os estados poderão incluir:

```text
draft
received
identified
classified
pending-validation
validated
approved
active
published
restricted
under-review
superseded
inactive
archived
preserved
anonymized
disposal-suspended
scheduled-for-disposal
disposed
recovered
```

---

## 9. Criação de dados

Todo dado criado pelo Portal deverá possuir:

- finalidade;
- responsável;
- identificador;
- classificação;
- fonte ou método de produção;
- data de criação;
- estado inicial;
- prazo de revisão;
- regra de retenção;
- destinação prevista.

---

## 10. Dados criados manualmente

Dados criados manualmente deverão registrar:

```text
createdBy
createdAt
creationMethod
sourceId
validationStatus
```

A digitação não deverá ser confundida com autoria da informação.

---

## 11. Dados criados por sistema

Dados criados automaticamente deverão registrar:

```text
systemId
automationId
generatedAt
rulesVersion
sourceIds
humanReviewStatus
```

---

## 12. Dados criados com inteligência artificial

Dados produzidos ou modificados com inteligência artificial deverão registrar:

```text
aiAssisted
modelOrService
generatedAt
sourceIds
humanValidated
validationStatus
```

Nenhum conteúdo crítico produzido por inteligência artificial deverá ser publicado sem validação humana.

---

## 13. Recebimento de dados

Todo dado recebido deverá passar por:

1. identificação da origem;

2. registro do recebimento;

3. classificação inicial;

4. avaliação de integridade;

5. avaliação de segurança;

6. avaliação de privacidade;

7. validação;

8. definição de responsabilidade;

9. definição de retenção.

---

## 14. Origem dos dados

A origem poderá ser:

- institucional;
- comunitária;
- documental;
- cultural;
- testemunhal;
- bibliográfica;
- audiovisual;
- técnica;
- automatizada;
- externa;
- derivada.

---

## 15. Dados sem origem identificada

Dados sem origem deverão receber:

```text
sourceStatus: unidentified
```

Eles não deverão ser considerados oficiais até que sua origem seja verificada.

---

## 16. Identificação

Todo dado institucionalmente relevante deverá possuir identificador único ou referência institucional apropriada.

A ausência de identificação deverá impedir:

- publicação oficial;
- relacionamento definitivo;
- arquivamento permanente;
- migração sem controle;
- eliminação definitiva.

---

## 17. Classificação inicial

No momento da criação ou recebimento, o dado deverá ser classificado quanto a:

- natureza;
- domínio;
- criticidade;
- sensibilidade;
- temporalidade;
- acesso;
- edição;
- valor histórico;
- valor cultural;
- destinação prevista.

---

## 18. Classes de temporalidade

Os dados poderão ser classificados como:

| Classe | Definição |
|---|---|
| Transitório | Necessário por período breve |
| Operacional | Necessário à operação corrente |
| Anual | Vinculado a edição específica |
| Intermediário | Aguardando destinação definitiva |
| Permanente | Possui valor histórico, cultural ou institucional |
| Legalmente retido | Mantido por obrigação aplicável |
| Suspenso | Descarte temporariamente proibido |

---

## 19. Classes de acesso

Os níveis de acesso poderão ser:

```text
PUBLIC
INTERNAL
RESTRICTED
CONFIDENTIAL
CULTURALLY_RESTRICTED
ARCHIVAL_CONTROLLED
```

---

## 20. Classificação de dados pessoais

Dados pessoais deverão receber classificação proporcional a:

- finalidade;
- sensibilidade;
- risco;
- necessidade;
- possibilidade de publicação;
- prazo de retenção;
- direitos do titular.

---

## 21. Classificação cultural

Dados culturais poderão ser classificados como:

- públicos;
- comunitários;
- contextuais;
- restritos;
- sensíveis;
- reservados aos detentores de saberes;
- preserváveis sem divulgação irrestrita.

---

## 22. Validação antes da utilização

Nenhum dado deverá ser utilizado institucionalmente sem validação proporcional à sua finalidade.

A validação deverá considerar:

- estrutura;
- semântica;
- fonte;
- integridade;
- temporalidade;
- contexto;
- direitos;
- privacidade;
- cultura.

---

## 23. Utilização

A utilização deverá ser:

- legítima;
- necessária;
- proporcional;
- autorizada;
- compatível com a finalidade;
- rastreável;
- limitada ao período necessário.

---

## 24. Mudança de finalidade

A utilização para finalidade diferente da originalmente registrada deverá exigir:

- análise;
- justificativa;
- nova classificação;
- avaliação de privacidade;
- avaliação cultural;
- autorização;
- registro da decisão.

---

## 25. Acesso durante a fase ativa

O acesso deverá seguir:

- necessidade funcional;
- menor privilégio;
- autorização;
- registro;
- revisão periódica;
- revogação após encerramento da necessidade.

---

## 26. Atualização

Dados ativos deverão ser atualizados quando:

- houver mudança confirmada;
- erro for identificado;
- nova fonte legítima surgir;
- vínculo for alterado;
- autorização mudar;
- prazo expirar;
- edição avançar;
- revisão periódica determinar.

---

## 27. Correção

Toda correção deverá preservar:

```text
valor anterior
valor novo
data
responsável
fonte
justificativa
versão
impacto
```

---

## 28. Proibição de sobrescrita silenciosa

Nenhum dado materialmente relevante deverá ser sobrescrito sem registro de alteração.

São alterações materiais:

- nomes;
- datas;
- horários;
- locais;
- funções;
- pessoas;
- autorizações;
- fontes;
- classificações;
- vínculos históricos.

---

## 29. Versionamento

Dados e documentos críticos deverão possuir versionamento.

Exemplo:

```text
1.0.0
1.0.1
1.1.0
2.0.0
```

A versão anterior deverá permanecer recuperável.

---

## 30. Publicação

A publicação somente poderá ocorrer quando o dado:

- estiver identificado;
- estiver classificado;
- estiver validado;
- estiver aprovado;
- possuir direitos avaliados;
- possuir privacidade avaliada;
- possuir canal autorizado;
- possuir versão definida;
- possuir preservação prevista.

---

## 31. Publicação não encerra o ciclo de vida

Após a publicação, o dado continuará sujeito a:

- monitoramento;
- correção;
- atualização;
- revisão;
- arquivamento;
- preservação;
- eventual restrição;
- retirada justificada.

---

## 32. Publicação de dados pessoais

Dados pessoais somente poderão ser publicados quando:

- houver finalidade legítima;
- a divulgação for necessária;
- o conteúdo for minimizado;
- a exposição for proporcional;
- os direitos tiverem sido avaliados;
- houver autorização ou fundamento institucional adequado.

---

## 33. Publicação de residências privadas

Dados de residências privadas deverão observar:

- autorização;
- necessidade;
- precisão adequada;
- segurança;
- finalidade;
- alternativa de referência pública;
- prazo de publicação.

A coordenada exata não deverá ser publicada sem autorização adequada.

---

## 34. Publicação de dados de menores

Dados de crianças e adolescentes deverão possuir proteção reforçada.

A publicação deverá respeitar:

- dignidade;
- interesse superior;
- autorização adequada;
- minimização;
- segurança;
- ausência de exposição desnecessária;
- restrição de reutilização.

---

## 35. Armazenamento

Os dados deverão ser armazenados em ambiente:

- autorizado;
- documentado;
- protegido;
- monitorado;
- versionado quando necessário;
- submetido a backups;
- compatível com recuperação;
- adequado à classificação.

---

## 36. Armazenamento primário

O armazenamento primário corresponde ao ambiente utilizado na operação corrente.

Ele deverá possuir:

- controle de acesso;
- integridade;
- disponibilidade;
- backup;
- monitoramento;
- registro de alterações.

---

## 37. Armazenamento intermediário

O armazenamento intermediário será utilizado para dados:

- encerrados operacionalmente;
- ainda sujeitos a revisão;
- aguardando destinação;
- retidos por prazo determinado;
- temporariamente restritos.

---

## 38. Armazenamento permanente

O armazenamento permanente deverá ser destinado a dados com valor:

- histórico;
- cultural;
- documental;
- arquivístico;
- institucional;
- probatório;
- memorial.

---

## 39. Separação entre ambientes

Os ambientes deverão ser separados entre:

```text
DESENVOLVIMENTO
HOMOLOGAÇÃO
PRODUÇÃO
ARQUIVO
PRESERVAÇÃO
```

Dados reais não deverão ser utilizados em desenvolvimento sem necessidade e proteção adequadas.

---

## 40. Dados de teste

Dados de teste deverão ser:

- fictícios;
- anonimizados;
- minimizados;
- identificados como teste;
- separados da produção;
- eliminados após sua finalidade.

---

## 41. Backups

Backups deverão possuir:

- escopo;
- data;
- responsável;
- política de retenção;
- proteção;
- verificação de integridade;
- teste de restauração;
- destinação final.

---

## 42. Backup não é arquivo permanente

A existência de backup não substitui:

- arquivamento;
- preservação;
- classificação;
- versionamento;
- cadeia de custódia;
- plano de recuperação.

---

## 43. Retenção

Retenção é a manutenção do dado por período definido, durante o qual deverá permanecer:

- protegido;
- localizável;
- íntegro;
- acessível às pessoas autorizadas;
- recuperável;
- submetido a revisão.

---

## 44. Critérios de retenção

O prazo de retenção deverá considerar:

- finalidade;
- criticidade;
- valor histórico;
- valor cultural;
- obrigação aplicável;
- direitos envolvidos;
- risco;
- frequência de uso;
- necessidade operacional;
- edição;
- possibilidade de contestação;
- preservação institucional.

---

## 45. Retenção mínima

A retenção mínima corresponde ao prazo durante o qual o dado não deverá ser eliminado.

Ela poderá decorrer de:

- necessidade operacional;
- decisão institucional;
- obrigação aplicável;
- preservação de direitos;
- auditoria;
- valor histórico;
- cadeia de custódia.

---

## 46. Retenção máxima

A retenção máxima deverá impedir a manutenção injustificada de dados, especialmente:

- dados pessoais;
- contatos;
- credenciais;
- dados temporários;
- arquivos de importação;
- cópias intermediárias;
- informações sensíveis sem valor permanente.

---

## 47. Retenção indefinida

A retenção indefinida somente será admitida quando houver:

- valor histórico;
- valor cultural;
- valor arquivístico;
- valor documental permanente;
- necessidade institucional permanente;
- justificativa formal.

---

## 48. Retenção de dados anuais

Dados de edição anual deverão permanecer vinculados à edição correspondente.

Após o encerramento, deverão ser:

- revisados;
- consolidados;
- versionados;
- arquivados;
- preservados ou destinados conforme sua classe.

---

## 49. Retenção de dados permanentes

Dados permanentes deverão ser preservados enquanto existir o Portal e, quando possível, além da infraestrutura tecnológica atual.

Exemplos:

- identidade institucional;
- grupos tradicionais;
- documentos constitucionais;
- registros históricos;
- memória cultural;
- edições encerradas;
- decisões institucionais.

---

## 50. Retenção de dados transitórios

Dados transitórios deverão ser eliminados após o cumprimento de sua finalidade, salvo quando adquirirem valor documental.

Exemplos:

- arquivos temporários;
- caches;
- cópias de processamento;
- dados de teste;
- exportações intermediárias;
- registros provisórios não aprovados.

---

## 51. Tabela de temporalidade

O Portal deverá manter tabela de temporalidade contendo:

```text
dataClass
purpose
activeRetention
intermediateRetention
finalDestination
reviewFrequency
responsible
legalOrInstitutionalBasis
```

---

## 52. Exemplo de tabela de temporalidade

| Classe | Fase ativa | Fase intermediária | Destinação |
|---|---:|---:|---|
| Documento constitucional | Permanente | Não se aplica | Preservação permanente |
| Programação anual aprovada | Durante a edição | Após encerramento | Preservação permanente |
| Rascunho não aprovado | Durante elaboração | Prazo controlado | Eliminação ou preservação seletiva |
| Log operacional | Prazo definido por risco | Quando necessário | Eliminação segura |
| Autorização de imagem | Durante uso e prazo necessário | Revisão | Preservação ou eliminação controlada |
| Arquivo temporário | Curto prazo | Não se aplica | Eliminação segura |

---

## 53. Revisão de retenção

Os prazos deverão ser revisados quando houver:

- mudança de finalidade;
- alteração de risco;
- nova obrigação;
- incidente;
- mudança tecnológica;
- nova edição;
- mudança de classificação;
- aquisição de valor histórico;
- solicitação legítima de titular.

---

## 54. Revisão periódica

Toda classe de dados deverá possuir frequência de revisão.

Exemplos:

```text
mensal
trimestral
anual
no encerramento da edição
antes da migração
após incidente
```

---

## 55. Critérios de revisão

A revisão deverá verificar:

- necessidade de manutenção;
- atualidade;
- integridade;
- acesso;
- classificação;
- prazo;
- direitos;
- valor histórico;
- valor cultural;
- destinação prevista.

---

## 56. Arquivamento

Arquivamento é a transferência controlada de dados encerrados para estado não operacional, preservando:

- identidade;
- contexto;
- versão;
- fonte;
- relacionamentos;
- acesso;
- integridade;
- cadeia de custódia.

---

## 57. Critérios para arquivamento

Um dado deverá ser arquivado quando:

- sua fase ativa terminar;
- a edição for encerrada;
- a versão for substituída;
- a finalidade operacional cessar;
- houver necessidade de preservação;
- houver valor probatório ou histórico.

---

## 58. Pacote de arquivamento

O pacote de arquivamento deverá conter, quando aplicável:

```text
conteúdo
metadados
identificadores
versão
fontes
autorizações
relacionamentos
checksum
classificação
responsáveis
datas
estado de validação
estado de aprovação
```

---

## 59. Arquivamento da edição anual

Cada edição deverá possuir pacote próprio contendo:

- programação;
- festeiros;
- atividades;
- locais;
- publicações;
- documentos;
- imagens;
- áudios;
- vídeos;
- autorizações;
- fontes;
- versões;
- relatórios;
- registros de encerramento.

---

## 60. Preservação permanente

A preservação permanente será obrigatória para dados com valor:

- histórico;
- cultural;
- memorial;
- arquivístico;
- institucional;
- identitário;
- probatório.

---

## 61. Dados de preservação permanente

Deverão ser preservados, no mínimo:

- documentos constitucionais;
- arquitetura oficial;
- políticas de governança;
- esquemas de edição;
- programações oficiais;
- registros de festeiros;
- registros dos grupos tradicionais;
- publicações oficiais;
- decisões institucionais;
- versões encerradas;
- inventários;
- relatórios de migração;
- dados da edição fundadora.

---

## 62. Preservação não significa publicidade

Dados preservados permanentemente poderão permanecer:

- públicos;
- internos;
- restritos;
- confidenciais;
- culturalmente protegidos;
- acessíveis somente mediante autorização.

---

## 63. Preservação de formatos

Deverão ser priorizados formatos:

- documentados;
- interoperáveis;
- amplamente suportados;
- verificáveis;
- migráveis;
- adequados à preservação.

---

## 64. Migração de formatos

A migração deverá preservar:

- conteúdo;
- estrutura;
- aparência relevante;
- metadados;
- autoria;
- direitos;
- checksum anterior;
- relacionamento;
- versão;
- evidência da transformação.

---

## 65. Preservação de mídia

Imagens, áudios e vídeos deverão possuir:

- original;
- derivado de publicação;
- metadados;
- autoria;
- direitos;
- contexto;
- edição;
- checksum;
- formato de preservação.

---

## 66. Anonimização

Anonimização é o processo de remover ou reduzir elementos que permitam identificar pessoa natural.

Ela poderá ser aplicada quando:

- a finalidade puder ser mantida sem identificação;
- o dado possuir valor estatístico;
- o dado possuir valor histórico sem necessidade de identificação;
- o prazo de identificação tiver terminado;
- houver necessidade de redução de risco.

---

## 67. Pseudonimização

Pseudonimização é a substituição do identificador direto por código controlado.

Ela não equivale à anonimização completa.

Os dados de correspondência deverão permanecer:

- separados;
- protegidos;
- restritos;
- auditáveis.

---

## 68. Técnicas de anonimização

Poderão ser utilizadas:

- supressão;
- generalização;
- agregação;
- mascaramento;
- redução de precisão;
- remoção de identificadores;
- substituição por categorias;
- controle de pequenas amostras.

---

## 69. Anonimização de locais

Locais privados poderão ser protegidos por:

- remoção de coordenada exata;
- redução de precisão;
- referência aproximada;
- descrição genérica;
- busca pública sem endereço exato;
- acesso restrito.

---

## 70. Anonimização de pessoas

Quando a identidade não for necessária, poderão ser utilizados:

```text
participante
integrante
festeiro
responsável
representante comunitário
```

A anonimização não deverá apagar autoria ou reconhecimento legítimo quando estes forem necessários e autorizados.

---

## 71. Dados históricos e anonimização

A anonimização de dados históricos deverá considerar:

- valor cultural;
- autoria;
- dignidade;
- direitos;
- contexto;
- interesse comunitário;
- risco;
- finalidade de preservação.

---

## 72. Restrição de acesso

O acesso poderá ser restringido quando houver:

- dado pessoal;
- residência privada;
- risco de segurança;
- autorização limitada;
- conhecimento cultural sensível;
- documento em análise;
- processo de contestação;
- incidente;
- obrigação de confidencialidade.

---

## 73. Restrição temporária

A restrição temporária deverá possuir:

```text
restrictionReason
restrictedAt
restrictedBy
reviewAt
releaseCondition
```

---

## 74. Restrição permanente

A restrição permanente somente deverá ser adotada quando necessária à proteção:

- da dignidade;
- da privacidade;
- da segurança;
- do patrimônio cultural;
- de conhecimentos tradicionais;
- de direitos permanentes.

---

## 75. Suspensão de descarte

A suspensão de descarte impede temporariamente a eliminação de dados que estariam sujeitos à destinação.

---

## 76. Hipóteses de suspensão

O descarte deverá ser suspenso quando houver:

- auditoria;
- investigação;
- incidente;
- contestação;
- processo judicial ou administrativo;
- solicitação de titular;
- revisão institucional;
- migração;
- dúvida sobre valor histórico;
- conflito de fontes;
- risco de perda cultural.

---

## 77. Registro da suspensão

```text
holdId
dataClass
affectedRecords
reason
requestedBy
approvedBy
startedAt
reviewAt
status
releasedAt
```

---

## 78. Efeito da suspensão

Durante a suspensão:

- nenhum dado afetado poderá ser eliminado;
- prazos de descarte deverão ser interrompidos;
- alterações deverão ser controladas;
- acesso deverá ser monitorado;
- evidências deverão ser preservadas.

---

## 79. Encerramento da suspensão

A suspensão somente poderá ser encerrada por:

- autoridade competente;
- decisão documentada;
- verificação do encerramento da causa;
- registro da data;
- reavaliação da destinação.

---

## 80. Eliminação segura

Eliminação segura é o descarte autorizado de dados que não possuam mais necessidade operacional, jurídica, histórica, cultural ou institucional.

---

## 81. Princípios da eliminação

Toda eliminação deverá ser:

- necessária;
- autorizada;
- documentada;
- proporcional;
- irreversível quando exigido;
- verificada;
- auditável;
- compatível com backups;
- precedida de avaliação histórica.

---

## 82. Dados que não poderão ser eliminados

Não deverão ser eliminados:

- documentos constitucionais vigentes ou históricos;
- registros da edição fundadora com valor permanente;
- programações oficiais encerradas;
- decisões institucionais;
- fontes essenciais;
- registros de auditoria relevantes;
- cadeia de custódia;
- documentos sob suspensão de descarte;
- patrimônio cultural documental.

---

## 83. Eliminação de cópias

A eliminação deverá abranger, quando aplicável:

- armazenamento principal;
- cópias intermediárias;
- exportações;
- arquivos temporários;
- dispositivos;
- repositórios auxiliares;
- backups expirados;
- caches;
- ambientes de teste.

---

## 84. Métodos de eliminação

Os métodos poderão incluir:

- exclusão lógica controlada;
- sobrescrita segura;
- destruição criptográfica;
- descarte físico seguro;
- expiração automática controlada;
- inutilização de mídia.

---

## 85. Exclusão lógica

A exclusão lógica não deverá ser considerada eliminação definitiva quando o dado permanecer recuperável no sistema.

Ela poderá ser utilizada como fase anterior à eliminação final.

---

## 86. Certificado de eliminação

Toda eliminação relevante deverá gerar registro contendo:

```text
disposalId
dataClass
recordsOrScope
reason
authorization
method
executedBy
executedAt
verifiedBy
backupImpact
evidence
```

---

## 87. Dupla verificação

A eliminação de dados críticos deverá exigir:

- autorização;
- execução;
- verificação independente.

Nenhuma pessoa deverá aprovar, executar e validar isoladamente a mesma eliminação crítica.

---

## 88. Proibição de eliminação silenciosa

Nenhum dado institucionalmente relevante deverá desaparecer sem:

- justificativa;
- responsável;
- autorização;
- data;
- método;
- evidência;
- verificação;
- avaliação de preservação.

---

## 89. Destinação final

A destinação final poderá ser:

```text
PRESERVAÇÃO PERMANENTE
ANONIMIZAÇÃO
RESTRIÇÃO PERMANENTE
TRANSFERÊNCIA CONTROLADA
ELIMINAÇÃO SEGURA
```

---

## 90. Critérios de destinação

A destinação deverá considerar:

- valor administrativo;
- valor histórico;
- valor cultural;
- valor documental;
- valor probatório;
- privacidade;
- risco;
- utilidade futura;
- direitos;
- custo de preservação;
- responsabilidade institucional.

---

## 91. Transferência controlada

A transferência para outro ambiente ou custodiante deverá preservar:

- identidade;
- integridade;
- metadados;
- classificação;
- acesso;
- responsabilidade;
- cadeia de custódia;
- condições de uso;
- retorno ou encerramento.

---

## 92. Transferência a terceiros

Nenhum terceiro deverá receber dados sem:

- finalidade;
- autorização;
- instrumento formal;
- classificação;
- segurança;
- prazo;
- restrição de uso;
- regra de eliminação ou devolução;
- auditoria.

---

## 93. Cadeia de custódia

Cadeia de custódia é o registro contínuo de quem criou, recebeu, acessou, alterou, transferiu, preservou, recuperou ou eliminou determinado dado.

---

## 94. Elementos da cadeia de custódia

Deverão ser registrados:

```text
custodyEventId
entityId
action
performedBy
performedAt
origin
destination
reason
authorization
integrityEvidence
```

---

## 95. Eventos de custódia

São eventos de custódia:

- criação;
- recebimento;
- importação;
- validação;
- aprovação;
- publicação;
- alteração;
- transferência;
- arquivamento;
- restauração;
- anonimização;
- eliminação.

---

## 96. Integridade da cadeia de custódia

A cadeia deverá ser:

- cronológica;
- íntegra;
- verificável;
- não apagável por usuários comuns;
- protegida contra alteração;
- vinculada ao registro correspondente.

---

## 97. Recuperação

Recuperação é a restauração de dado armazenado, arquivado ou preservado.

Ela deverá ser:

- autorizada;
- registrada;
- testada;
- proporcional;
- compatível com o nível de acesso;
- vinculada à cadeia de custódia.

---

## 98. Motivos de recuperação

A recuperação poderá ocorrer por:

- continuidade operacional;
- correção;
- auditoria;
- pesquisa institucional;
- solicitação legítima;
- restauração após incidente;
- comparação histórica;
- migração;
- republicação autorizada.

---

## 99. Registro de recuperação

```text
recoveryId
entityId
requestedBy
approvedBy
recoveredAt
sourceCopy
destination
reason
integrityStatus
result
```

---

## 100. Testes de recuperação

Dados críticos deverão possuir testes periódicos de recuperação.

O teste deverá verificar:

- legibilidade;
- integridade;
- completude;
- metadados;
- relacionamentos;
- acesso;
- compatibilidade tecnológica.

---

## 101. Recuperação após desastre

A recuperação após desastre deverá obedecer:

- prioridade;
- criticidade;
- ordem de restauração;
- cópia íntegra;
- validação;
- comunicação;
- auditoria;
- preservação de evidências.

---

## 102. Prioridades de recuperação

A ordem mínima deverá considerar:

1. documentos constitucionais;

2. dados da edição fundadora;

3. programação oficial ativa;

4. registros de pessoas e funções;

5. dados de locais e segurança;

6. autorizações;

7. mídias e publicações;

8. históricos e relatórios.

---

## 103. Dados em integrações

Dados compartilhados com integrações deverão possuir:

- origem;
- destino;
- finalidade;
- prazo;
- classificação;
- versão;
- registro de envio;
- confirmação;
- regra de retenção;
- regra de exclusão.

---

## 104. Encerramento de integração

Ao encerrar integração, deverá ser verificado:

- quais dados foram transferidos;
- quais cópias permanecem;
- quais acessos devem ser revogados;
- quais registros devem retornar;
- quais dados devem ser eliminados;
- quais evidências devem ser preservadas.

---

## 105. Ciclo de vida de documentos

Documentos deverão percorrer:

```text
RASCUNHO
   ↓
REVISÃO
   ↓
APROVAÇÃO
   ↓
PUBLICAÇÃO
   ↓
VIGÊNCIA
   ↓
SUBSTITUIÇÃO OU ENCERRAMENTO
   ↓
ARQUIVAMENTO
   ↓
PRESERVAÇÃO
```

---

## 106. Ciclo de vida de atividades

Atividades deverão percorrer:

```text
PROPOSTA
   ↓
CONFIRMAÇÃO
   ↓
VALIDAÇÃO
   ↓
PUBLICAÇÃO
   ↓
REALIZAÇÃO
   ↓
CORREÇÃO, SE NECESSÁRIA
   ↓
ENCERRAMENTO
   ↓
ARQUIVAMENTO HISTÓRICO
```

---

## 107. Ciclo de vida de pessoas e funções

Pessoas serão entidades permanentes quando legitimamente incorporadas.

Funções anuais deverão possuir:

```text
personId
roleId
editionId
validFrom
validUntil
status
```

O encerramento da função não deverá eliminar a pessoa nem o vínculo histórico.

---

## 108. Ciclo de vida dos grupos tradicionais

Os grupos tradicionais deverão possuir identidade permanente.

Sua participação anual deverá ser registrada por relacionamento, preservando:

- edição;
- atividade;
- função;
- período;
- fonte;
- registros audiovisuais;
- contexto cultural.

---

## 109. Ciclo de vida de locais

Locais deverão possuir:

- identificação;
- classificação;
- estado de verificação;
- nível de privacidade;
- período de utilização;
- histórico de alterações;
- regra de publicação;
- regra de preservação.

---

## 110. Ciclo de vida de autorizações

Autorizações deverão possuir:

```text
authorizationId
holder
purpose
scope
issuedAt
validFrom
validUntil
revocationStatus
retentionRule
```

Após o encerramento, deverão ser preservadas enquanto necessárias para demonstrar a legitimidade do uso realizado.

---

## 111. Ciclo de vida de mídias

Mídias deverão possuir:

- original;
- versões derivadas;
- autoria;
- direitos;
- edição;
- atividade;
- pessoas retratadas;
- autorização;
- prazo de publicação;
- regra de preservação;
- destinação.

---

## 112. Ciclo de vida de logs

Logs deverão possuir retenção proporcional a:

- finalidade;
- segurança;
- auditoria;
- privacidade;
- volume;
- criticidade;
- investigação;
- continuidade.

Logs não deverão ser retidos indefinidamente sem justificativa.

---

## 113. Ciclo de vida de credenciais

Credenciais, tokens e chaves deverão:

- possuir prazo;
- ser rotacionados;
- ser revogados quando desnecessários;
- não ser preservados em documentos históricos;
- ser eliminados de forma segura;
- permanecer fora do repositório público.

---

## 114. Dados derivados

Dados derivados deverão manter vínculo com:

- fontes;
- regras;
- versão;
- data de geração;
- responsável;
- estado de validação;
- prazo de retenção.

---

## 115. Dados agregados

Dados agregados poderão ter prazo diferente dos registros de origem, desde que:

- não permitam reidentificação indevida;
- preservem metodologia;
- possuam finalidade;
- mantenham rastreabilidade;
- sejam validados.

---

## 116. Dados contestados

Dados contestados não deverão ser eliminados enquanto a contestação estiver ativa.

Deverão ser preservados:

- valor original;
- contestação;
- fontes;
- análise;
- decisão;
- versões;
- responsáveis.

---

## 117. Dados incorretos

Dados comprovadamente incorretos deverão ser:

- retirados de uso ativo;
- corrigidos;
- versionados;
- preservados como histórico quando necessário;
- vinculados à justificativa;
- impedidos de reaparecer como válidos.

---

## 118. Dados órfãos

Dados sem vínculo, origem ou contexto deverão ser:

- identificados;
- isolados;
- investigados;
- classificados;
- relacionados ou destinados;
- preservados quando houver dúvida histórica.

---

## 119. Dados duplicados

Duplicidades deverão ser tratadas por:

- identificação da entidade canônica;
- migração de relacionamentos;
- preservação de aliases;
- registro da fusão;
- eliminação somente quando segura e autorizada.

---

## 120. Dados da edição fundadora

Todos os dados relevantes da FESTANÇA 2026 deverão ser considerados parte do acervo fundador.

Eles constituirão:

- referência histórica;
- base de migração;
- modelo institucional;
- patrimônio documental;
- origem das futuras edições.

---

## 121. Proteção da edição fundadora

Nenhum dado fundador deverá ser:

- sobrescrito silenciosamente;
- desvinculado da edição;
- eliminado por obsolescência tecnológica;
- confundido com dado de edição futura;
- transferido sem cadeia de custódia;
- anonimizado sem avaliação histórica;
- descartado sem decisão constitucional.

---

## 122. Preservação mínima da edição fundadora

Deverão ser preservados:

- programação;
- festeiros;
- grupos;
- atividades;
- locais;
- documentos;
- mídias;
- autorizações;
- fontes;
- publicações;
- comunicações;
- versões;
- correções;
- relatórios;
- decisões;
- registros de encerramento.

---

## 123. Encerramento da edição fundadora

Antes do encerramento definitivo deverão ser realizados:

1. inventário;

2. validação;

3. consolidação;

4. classificação;

5. revisão de acesso;

6. verificação de fontes;

7. verificação de autorizações;

8. versionamento;

9. geração de checksums;

10. arquivamento;

11. teste de recuperação;

12. aprovação institucional.

---

## 124. Continuidade entre edições

As futuras edições deverão:

- reutilizar entidades permanentes;
- preservar identificadores;
- criar vínculos anuais;
- respeitar temporalidade;
- manter versões;
- impedir sobrescrita;
- preservar a edição fundadora como referência histórica.

---

## 125. Retenção de futuras edições

Cada edição deverá possuir:

- inventário próprio;
- classificação;
- tabela de retenção;
- pacote de arquivamento;
- decisão de destinação;
- registro de encerramento;
- cadeia de custódia.

---

## 126. Responsabilidades

A responsabilidade pelo ciclo de vida será compartilhada.

| Atividade | Responsabilidade principal |
|---|---|
| Criação | Área de origem |
| Recebimento | Responsável pelo canal |
| Identificação | Arquitetura de dados |
| Classificação | Governança de dados |
| Validação | Curadoria competente |
| Utilização | Área autorizada |
| Atualização | Responsável pelo dado |
| Publicação | Autoridade editorial |
| Armazenamento | Custódia técnica |
| Retenção | Governança e gestão documental |
| Arquivamento | Gestão documental e arquivística |
| Preservação | Custódia arquivística |
| Anonimização | Privacidade e segurança |
| Eliminação | Autoridade competente e custódia técnica |
| Auditoria | Auditoria institucional |

---

## 127. Responsável pelo dado

Todo dado crítico deverá possuir responsável que:

- conheça sua finalidade;
- assegure atualização;
- acompanhe retenção;
- participe da revisão;
- responda por correções;
- coopere com auditorias;
- aprove ou encaminhe sua destinação.

---

## 128. Custodiante técnico

O custodiante técnico deverá:

- manter armazenamento;
- aplicar controles;
- realizar backups;
- preservar integridade;
- executar recuperação;
- apoiar migrações;
- executar eliminações autorizadas;
- registrar evidências.

---

## 129. Gestão documental

A gestão documental deverá:

- definir temporalidade;
- organizar arquivos;
- controlar versões;
- supervisionar destinação;
- preservar documentos permanentes;
- manter cadeia de custódia;
- emitir registros de eliminação.

---

## 130. Curadoria cultural

A curadoria cultural deverá avaliar:

- valor histórico;
- valor comunitário;
- legitimidade;
- restrições culturais;
- necessidade de preservação;
- impacto da anonimização;
- impacto da eliminação.

---

## 131. Segurança e privacidade

A área responsável deverá:

- avaliar riscos;
- definir acesso;
- orientar anonimização;
- controlar dados pessoais;
- acompanhar incidentes;
- supervisionar descarte seguro;
- atender direitos dos titulares.

---

## 132. Autoridade institucional

A autoridade institucional deverá:

- aprovar regras;
- resolver conflitos;
- autorizar exceções;
- aprovar preservação permanente;
- autorizar eliminação crítica;
- proteger a edição fundadora.

---

## 133. Auditoria do ciclo de vida

A auditoria deverá verificar:

- dados sem classificação;
- dados sem prazo;
- retenção excessiva;
- descarte prematuro;
- eliminações sem autorização;
- backups não controlados;
- dados órfãos;
- suspensões não revisadas;
- falhas de recuperação;
- alterações na edição fundadora;
- quebra da cadeia de custódia.

---

## 134. Indicadores mínimos

Deverão ser monitorados:

- total de dados por fase;
- dados sem classificação;
- dados sem responsável;
- dados com retenção vencida;
- dados sob suspensão;
- dados arquivados;
- dados preservados;
- dados anonimizados;
- eliminações autorizadas;
- eliminações executadas;
- falhas de recuperação;
- registros fundadores preservados.

---

## 135. Alertas

Alertas deverão ser gerados para:

- prazo de retenção próximo;
- revisão vencida;
- autorização expirada;
- dado sem destinação;
- suspensão sem revisão;
- backup não validado;
- falha de restauração;
- acesso indevido;
- eliminação pendente;
- alteração de dado fundador.

---

## 136. Lista mínima de criação e recebimento

- [ ] finalidade definida;
- [ ] origem identificada;
- [ ] responsável identificado;
- [ ] identificador atribuído;
- [ ] classificação inicial;
- [ ] edição vinculada, quando aplicável;
- [ ] privacidade avaliada;
- [ ] integridade verificada;
- [ ] retenção definida;
- [ ] destinação prevista.

---

## 137. Lista mínima de publicação

- [ ] dado validado;
- [ ] aprovação registrada;
- [ ] versão definida;
- [ ] fonte registrada;
- [ ] direitos avaliados;
- [ ] privacidade avaliada;
- [ ] acesso definido;
- [ ] período de publicação definido;
- [ ] preservação prevista;
- [ ] cópia aprovada preservada.

---

## 138. Lista mínima de arquivamento

- [ ] fase ativa encerrada;
- [ ] versão final identificada;
- [ ] metadados completos;
- [ ] fontes preservadas;
- [ ] relacionamentos válidos;
- [ ] autorizações vinculadas;
- [ ] checksum gerado;
- [ ] acesso revisado;
- [ ] pacote de arquivamento criado;
- [ ] teste de recuperação realizado.

---

## 139. Lista mínima de eliminação

- [ ] prazo cumprido;
- [ ] ausência de suspensão;
- [ ] ausência de valor permanente;
- [ ] análise histórica realizada;
- [ ] análise cultural realizada;
- [ ] análise de privacidade realizada;
- [ ] autorização registrada;
- [ ] método definido;
- [ ] backups avaliados;
- [ ] execução verificada;
- [ ] certificado gerado.

---

## 140. Não conformidades

Serão consideradas não conformidades:

- dado sem finalidade;
- dado sem classificação;
- dado sem prazo de retenção;
- retenção excessiva;
- eliminação prematura;
- eliminação sem autorização;
- ausência de cadeia de custódia;
- backup sem regra;
- falha de recuperação;
- anonimização inadequada;
- acesso mantido após encerramento;
- descarte durante suspensão;
- perda de dado fundador;
- migração sem preservação.

---

## 141. Classificação das não conformidades

| Nível | Definição |
|---|---|
| Baixa | Impacto limitado |
| Média | Compromete organização ou eficiência |
| Alta | Compromete direitos, operação ou auditoria |
| Crítica | Compromete memória, cultura, segurança ou edição fundadora |

---

## 142. Tratamento das não conformidades

Toda não conformidade deverá ser:

1. identificada;

2. registrada;

3. classificada;

4. contida;

5. atribuída a responsável;

6. investigada;

7. corrigida;

8. revalidada;

9. auditada;

10. preservada como evidência.

---

## 143. Exceções

Exceções somente poderão ser aceitas quando:

- houver justificativa;
- o risco for avaliado;
- o prazo for definido;
- o responsável for identificado;
- a autoridade competente aprovar;
- a evidência for preservada;
- não houver destruição da memória;
- a edição fundadora permanecer protegida.

---

## 144. Declaração constitucional

Este documento declara que:

1. nenhum dado será criado sem finalidade;

2. nenhum dado será recebido sem origem registrada;

3. nenhum dado será utilizado sem classificação proporcional;

4. nenhum dado será publicado sem validação e aprovação;

5. nenhum dado pessoal será retido além do necessário sem justificativa;

6. nenhum dado histórico será eliminado por conveniência operacional;

7. nenhuma residência privada será exposta sem proteção adequada;

8. nenhum descarte ocorrerá durante suspensão;

9. nenhuma eliminação crítica será realizada por uma única pessoa;

10. nenhum backup substituirá a preservação arquivística;

11. nenhuma edição futura sobrescreverá a edição fundadora;

12. toda destinação será responsável, rastreável e auditável.

---

## 145. Princípio maior

**CRIAR COM FINALIDADE.**

**RECEBER COM ORIGEM.**

**IDENTIFICAR ANTES DE CLASSIFICAR.**

**CLASSIFICAR ANTES DE UTILIZAR.**

**VALIDAR ANTES DE PUBLICAR.**

**RETER SOMENTE PELO TEMPO NECESSÁRIO.**

**REVISAR ANTES DE ARQUIVAR.**

**PRESERVAR ANTES DE MIGRAR.**

**SUSPENDER ANTES DE ARRISCAR.**

**ANONIMIZAR ANTES DE EXPOR.**

**AUTORIZAR ANTES DE ELIMINAR.**

**ELIMINAR SEM DESTRUIR A MEMÓRIA.**

**RECUPERAR COM INTEGRIDADE.**

**EVOLUIR SEM ROMPER A CADEIA DE CUSTÓDIA.**

---

## 146. Compromisso permanente

Todo ciclo de vida, retenção e destinação de dados deverá proteger simultaneamente:

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
- `docs/festanca/data/data-architecture.md`;
- `docs/festanca/data/data-classification-model.md`;
- `docs/festanca/data/entity-relationship-model.md`;
- `docs/festanca/data/identifiers-and-references.md`;
- `docs/festanca/data/data-validation-rules.md`;
- `docs/festanca/data/data-quality-model.md`;
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
- `docs/festanca/governance/community-participation-and-cultural-safeguarding-policy.md`;
- `docs/festanca/governance/accessibility-and-digital-inclusion-policy.md`;
- `docs/festanca/governance/risk-management-and-resilience-policy.md`;
- `docs/festanca/governance/third-party-and-partnerships-policy.md`.

---

## 148. Estado inicial deste documento

```text
DOCUMENTO: data-lifecycle-and-retention.md
FUNÇÃO: Gestão constitucional do ciclo de vida, retenção e destinação dos dados
REGIME: Permanente
EDIÇÃO FUNDADORA: FESTANÇA 2026
CRITICIDADE: Máxima
MUTABILIDADE: Estritamente controlada
PRESERVAÇÃO: Integral
CLASSIFICAÇÃO: Obrigatória
RETENÇÃO: Definida por classe
REVISÃO: Obrigatória
ARQUIVAMENTO: Controlado
PRESERVAÇÃO PERMANENTE: Obrigatória para dados históricos e culturais
ANONIMIZAÇÃO: Aplicável conforme finalidade e risco
ELIMINAÇÃO SEGURA: Somente mediante autorização
SUSPENSÃO DE DESCARTE: Obrigatória quando aplicável
CADEIA DE CUSTÓDIA: Permanente
RECUPERAÇÃO: Testável
VERSIONAMENTO: Obrigatório
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
- atualizar prazos e critérios;
- preservar tabelas de temporalidade anteriores;
- manter compatibilidade histórica;
- proteger dados pessoais;
- preservar evidências de eliminação;
- proteger a edição fundadora;
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
