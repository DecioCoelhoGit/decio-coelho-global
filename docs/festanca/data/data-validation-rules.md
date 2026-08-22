# Regras Constitucionais de Validação de Dados do Portal Permanente da FESTANÇA

> Constituição destinada a regulamentar a validação estrutural, semântica, referencial, temporal, institucional, cultural, editorial e técnica dos dados utilizados pelo Portal Permanente da FESTANÇA de Vila Bela da Santíssima Trindade — Mato Grosso — Brasil.

---

## 1. Identificação do documento

| Campo | Conteúdo |
|---|---|
| Documento | Regras Constitucionais de Validação de Dados do Portal Permanente da FESTANÇA |
| Caminho oficial | `docs/festanca/data/data-validation-rules.md` |
| Classificação | Documento constitucional de dados |
| Domínio | Validação, integridade e conformidade dos dados |
| Regime | Permanente |
| Criticidade | Máxima |
| Mutabilidade | Estritamente controlada |
| Preservação | Integral, auditável, versionada e recuperável |
| Edição fundadora | FESTANÇA 2026 |
| Situação | Constituição de validação de dados |
| Versão inicial | `1.0.0` |
| Aplicabilidade | Portal Permanente e edições anuais |
| Vigência | Permanente |
| Documento superior | `docs/festanca/data/data-architecture.md` |
| Modelo classificatório | `docs/festanca/data/data-classification-model.md` |
| Modelo relacional | `docs/festanca/data/entity-relationship-model.md` |
| Modelo de identificação | `docs/festanca/data/identifiers-and-references.md` |

---

## 2. Finalidade

Este documento estabelece o regime oficial de validação dos dados produzidos, recebidos, importados, relacionados, transformados, publicados, corrigidos, arquivados e preservados pelo Portal Permanente da FESTANÇA.

Sua finalidade é assegurar que todo dado institucionalmente relevante seja:

- identificável;
- estruturado;
- compreensível;
- legítimo;
- consistente;
- verificável;
- contextualizado;
- referenciado;
- temporalmente coerente;
- culturalmente responsável;
- tecnicamente válido;
- aprovado antes da publicação;
- preservado com seu histórico.

Nenhum dado deverá ser considerado oficial apenas porque foi recebido, digitado, importado, calculado ou gerado por sistema.

---

## 3. Objetivos estratégicos

São objetivos permanentes destas Regras:

1. estabelecer critérios uniformes de validação;

2. impedir a publicação de dados incompletos ou contraditórios;

3. garantir compatibilidade com os esquemas institucionais;

4. verificar tipos, formatos e domínios permitidos;

5. assegurar integridade referencial;

6. preservar coerência entre entidades;

7. proteger dados pessoais e informações restritas;

8. diferenciar dado recebido, conferido, validado e aprovado;

9. documentar evidências de conferência;

10. assegurar supervisão humana;

11. preservar as versões anteriores;

12. proteger os dados da edição fundadora;

13. permitir auditoria e recuperação;

14. assegurar continuidade entre futuras edições.

---

## 4. Princípios fundamentais

Toda validação deverá observar:

- legitimidade;
- finalidade;
- necessidade;
- exatidão;
- completude;
- consistência;
- autenticidade;
- integridade;
- rastreabilidade;
- proporcionalidade;
- segurança;
- transparência;
- responsabilidade;
- preservação histórica;
- continuidade institucional;
- soberania cultural.

---

## 5. Conceito de validação

Validação é o processo de verificar se determinado dado atende aos requisitos estruturais, semânticos, relacionais, temporais, institucionais, culturais, editoriais e técnicos aplicáveis.

A validação deverá responder, no mínimo:

- o dado existe?
- o dado está completo?
- o formato está correto?
- o valor é permitido?
- a fonte foi identificada?
- o contexto está claro?
- o relacionamento é legítimo?
- a informação está atualizada?
- a publicação foi autorizada?
- a preservação foi prevista?

---

## 6. Validação não é aprovação

Validação e aprovação são atos distintos.

```text
VALIDAÇÃO
Verifica se o dado atende às regras aplicáveis.

APROVAÇÃO
Autoriza institucionalmente sua utilização ou publicação.
```

Um dado poderá estar tecnicamente válido e ainda não estar autorizado para publicação.

---

## 7. Validação não é confirmação histórica

Um dado estruturalmente válido poderá conter informação historicamente não confirmada.

Exemplo:

```json
{
  "title": "Relato comunitário",
  "validationStatus": "structurally-valid",
  "historicalStatus": "awaiting-confirmation"
}
```

A validade estrutural não transforma automaticamente memória, relato ou hipótese em fato documental confirmado.

---

## 8. Escopo da validação

Estas Regras aplicam-se a:

- dados permanentes;
- dados anuais;
- dados compartilhados;
- registros históricos;
- documentos;
- programações;
- atividades;
- pessoas;
- funções;
- grupos tradicionais;
- locais;
- publicações;
- imagens;
- áudios;
- vídeos;
- autorizações;
- parceiros;
- fontes;
- integrações;
- importações;
- migrações;
- dados derivados;
- dados produzidos por automação;
- dados produzidos com inteligência artificial.

---

## 9. Camadas de validação

Todo dado relevante poderá ser submetido às seguintes camadas:

```text
1. Validação de existência
2. Validação estrutural
3. Validação de tipo
4. Validação de formato
5. Validação de domínio
6. Validação semântica
7. Validação referencial
8. Validação temporal
9. Validação contextual
10. Validação institucional
11. Validação cultural
12. Validação editorial
13. Validação de privacidade
14. Validação de segurança
15. Validação de publicação
16. Validação de preservação
```

---

## 10. Estados oficiais de validação

Os estados oficiais serão:

| Estado | Definição |
|---|---|
| `received` | Dado recebido e ainda não analisado |
| `pending-review` | Aguardando conferência |
| `in-review` | Em processo de validação |
| `partially-valid` | Parte das regras foi atendida |
| `valid` | Atende às regras aplicáveis |
| `approved` | Autorizado pela autoridade competente |
| `rejected` | Não atende aos requisitos mínimos |
| `contested` | Submetido a contestação |
| `corrected` | Corrigido com preservação do histórico |
| `published` | Publicado oficialmente |
| `archived` | Encerrado e preservado |
| `revoked` | Aprovação ou validade revogada |

---

## 11. Fluxo constitucional de validação

```text
RECEBIMENTO
     ↓
IDENTIFICAÇÃO
     ↓
CLASSIFICAÇÃO
     ↓
VALIDAÇÃO ESTRUTURAL
     ↓
VALIDAÇÃO SEMÂNTICA
     ↓
VALIDAÇÃO REFERENCIAL
     ↓
VALIDAÇÃO TEMPORAL
     ↓
VALIDAÇÃO HUMANA
     ↓
APROVAÇÃO
     ↓
PUBLICAÇÃO
     ↓
AUDITORIA
     ↓
PRESERVAÇÃO
```

---

## 12. Responsabilidade pela origem

Todo dado deverá possuir origem identificada.

A origem poderá ser:

- institucional;
- documental;
- cultural;
- comunitária;
- testemunhal;
- bibliográfica;
- audiovisual;
- técnica;
- jornalística;
- automatizada;
- derivada.

Dados sem origem deverão receber:

```text
sourceStatus: unidentified
```

e não deverão ser considerados oficiais.

---

## 13. Validação de existência

A validação de existência deverá confirmar:

- presença do registro;
- presença do identificador;
- presença dos campos obrigatórios;
- existência da entidade referenciada;
- existência física do arquivo, quando aplicável;
- existência da fonte declarada;
- existência da autorização exigida.

---

## 14. Validação estrutural

A validação estrutural verifica se o dado segue o esquema oficial.

Deverão ser conferidos:

- nomes dos campos;
- hierarquia;
- objetos;
- listas;
- propriedades obrigatórias;
- propriedades opcionais;
- cardinalidade;
- estrutura aninhada;
- conformidade com o contrato de dados.

---

## 15. Exemplo de validação estrutural

Estrutura esperada:

```json
{
  "id": "activity-2026-001",
  "editionId": "festanca-2026",
  "title": "Reza Cantada",
  "date": "2026-05-23",
  "startTime": "20:00",
  "locationId": "location-private-001"
}
```

Estrutura inválida:

```json
{
  "codigo": 1,
  "evento": "Reza Cantada",
  "quando": "23 de maio"
}
```

A segunda estrutura somente poderá ser utilizada após transformação formal e documentada.

---

## 16. Campos obrigatórios

Campo obrigatório é aquele sem o qual o registro não poderá cumprir sua finalidade.

Todo campo obrigatório deverá possuir:

- nome;
- definição;
- tipo;
- regra;
- mensagem de erro;
- criticidade;
- condição de obrigatoriedade.

---

## 17. Campos obrigatórios gerais

Registros institucionais relevantes deverão possuir, quando aplicável:

```text
id
classification
status
sourceId
createdAt
updatedAt
version
responsible
validationStatus
```

Entidades anuais deverão possuir:

```text
editionId
```

---

## 18. Campos condicionais

Campos condicionais tornam-se obrigatórios quando determinada condição for verdadeira.

Exemplo:

```text
SE location.type = PRIVATE_RESIDENCE
ENTÃO privacyLevel é obrigatório.
```

Outro exemplo:

```text
SE media.containsIdentifiableMinor = true
ENTÃO authorizationId é obrigatório.
```

---

## 19. Campos opcionais

Campos opcionais não poderão ser tratados como obrigatórios durante publicação ou migração, salvo quando houver mudança formal de esquema.

A ausência deverá ser distinguida entre:

```text
não informado
não aplicável
desconhecido
aguardando confirmação
restrito
não autorizado
```

---

## 20. Validação de tipos

Todo valor deverá corresponder ao tipo definido.

Tipos oficiais incluem:

| Tipo | Exemplo |
|---|---|
| `string` | `"FESTANÇA 2026"` |
| `text` | Texto extenso |
| `integer` | `2026` |
| `decimal` | `12.50` |
| `boolean` | `true` |
| `date` | `"2026-07-15"` |
| `time` | `"19:00"` |
| `datetime` | `"2026-07-15T19:00:00-04:00"` |
| `enum` | `"approved"` |
| `array` | `[]` |
| `object` | `{}` |
| `reference` | `"festanca-2026"` |
| `uri` | Endereço de recurso |

---

## 21. Conversão de tipos

Conversões automáticas somente poderão ocorrer quando:

- a regra estiver documentada;
- não houver perda de informação;
- o valor original for preservado quando relevante;
- a transformação for rastreável;
- o resultado for validado.

Exemplo:

```text
"2026" → 2026
```

Poderá ser permitido.

Exemplo:

```text
"mais ou menos à noite" → "20:00"
```

Não deverá ocorrer sem confirmação humana.

---

## 22. Validação de texto

Campos textuais deverão ser verificados quanto a:

- tamanho mínimo;
- tamanho máximo;
- codificação;
- caracteres inválidos;
- conteúdo vazio;
- espaços excessivos;
- quebras indevidas;
- grafia institucional;
- linguagem ofensiva;
- exposição de dados pessoais;
- coerência com a finalidade.

---

## 23. Normalização de texto

A normalização poderá:

- remover espaços duplicados;
- padronizar quebras de linha;
- corrigir codificação;
- padronizar aspas;
- preservar acentuação;
- manter grafia oficial;
- registrar correções relevantes.

A normalização não deverá alterar silenciosamente o significado cultural ou histórico.

---

## 24. Validação de nomes próprios

Nomes próprios deverão ser validados mediante:

- fonte oficial;
- documento;
- confirmação da pessoa;
- confirmação da coordenação;
- registro institucional;
- evidência equivalente.

Correções deverão preservar grafias anteriores como alias, quando necessário.

---

## 25. Validação de datas

Datas deverão utilizar:

```text
YYYY-MM-DD
```

Exemplo válido:

```text
2026-07-15
```

Exemplos inválidos como valor oficial:

```text
15/7
15 de julho
quarta-feira
```

Esses formatos poderão ser apresentados ao público, mas não deverão substituir o formato estrutural.

---

## 26. Validação de horários

Horários deverão utilizar:

```text
HH:MM
```

Exemplo válido:

```text
20:00
```

Valores como:

```text
à noite
depois da missa
quando terminar
```

deverão ser classificados como descrição temporal, não como horário confirmado.

---

## 27. Validação de data e horário

Datas e horários completos deverão utilizar padrão interoperável.

Exemplo:

```text
2026-07-15T19:00:00-04:00
```

O fuso horário deverá ser documentado quando necessário.

---

## 28. Coerência temporal

Deverá ser validado se:

- a data inicial precede a data final;
- o horário inicial precede o horário final;
- a atividade pertence ao período da edição;
- a publicação não antecede indevidamente a aprovação;
- a autorização está válida;
- a parceria está vigente;
- o registro não utiliza data futura indevida.

---

## 29. Período da edição fundadora

Os períodos institucionais da FESTANÇA 2026 deverão ser preservados conforme fonte oficial:

```text
Período preparatório:
2026-04-05 a 2026-05-31

Período principal:
2026-07-15 a 2026-07-27
```

Atividades fora desses intervalos poderão existir, mas deverão possuir justificativa e classificação apropriada.

---

## 30. Validação de números

Valores numéricos deverão ser verificados quanto a:

- tipo;
- faixa;
- sinal;
- unidade;
- precisão;
- casas decimais;
- limites institucionais;
- consistência com outros campos.

---

## 31. Validação de valores monetários

Valores monetários deverão possuir:

```text
amount
currency
```

Exemplo:

```json
{
  "amount": 500.00,
  "currency": "BRL"
}
```

A formatação pública poderá utilizar:

```text
R$ 500,00
```

---

## 32. Validação de valores booleanos

Campos booleanos deverão aceitar apenas valores semanticamente inequívocos.

Exemplos válidos:

```text
true
false
```

Não deverão ser utilizados como equivalentes automáticos:

```text
sim
não
talvez
não sei
```

quando o contrato exigir booleano estrito.

---

## 33. Validação de enumerações

Campos de domínio controlado deverão aceitar somente valores permitidos.

Exemplo:

```text
validationStatus:
- received
- pending-review
- in-review
- valid
- approved
- rejected
- contested
- corrected
- published
- archived
- revoked
```

---

## 34. Valores fora do domínio

Valor fora do domínio deverá:

- ser rejeitado;
- ser mapeado formalmente;
- ou ser submetido à ampliação controlada do vocabulário.

Nenhum valor novo deverá ser incorporado silenciosamente.

---

## 35. Validação de identificadores

Todo identificador deverá ser:

- único;
- estável;
- compatível com o padrão;
- não reutilizado;
- não sensível;
- associado à entidade correta;
- preservável;
- rastreável.

---

## 36. Padrão de identificadores

Identificadores humano-legíveis deverão respeitar, preferencialmente:

```regex
^[a-z0-9]+(?:-[a-z0-9]+)*$
```

Exemplo válido:

```text
activity-2026-05-23-reza-imperatriz
```

---

## 37. Validação de referências

Toda referência deverá ser verificada quanto a:

- existência;
- tipo;
- estado;
- contexto;
- edição;
- cardinalidade;
- vigência;
- autorização;
- compatibilidade semântica.

---

## 38. Integridade referencial

Uma referência será válida quando:

```text
a entidade de destino existir;
o tipo for compatível;
a relação for permitida;
a cardinalidade for respeitada;
a edição estiver correta;
o vínculo estiver ativo ou historicamente válido.
```

---

## 39. Referências órfãs

Referências órfãs deverão ser rejeitadas ou classificadas como pendentes durante processos controlados.

Exemplo:

```json
{
  "locationId": "location-inexistente"
}
```

Não poderá ser publicado como dado válido.

---

## 40. Referências de tipo incompatível

Exemplo inválido:

```text
activity.locationId = person-001
```

O identificador poderá existir, mas não representa um local.

---

## 41. Validação de cardinalidade

Deverão ser verificadas as cardinalidades definidas no modelo relacional.

Exemplos:

```text
Portal 1:N Edição
Edição 1:N Atividade
Documento 1:N Versão
Pessoa N:N Função
Grupo N:N Atividade
```

---

## 42. Validação semântica

A validação semântica verifica se o valor faz sentido no contexto.

Exemplo estruturalmente válido, mas semanticamente incorreto:

```json
{
  "activityType": "Missa",
  "locationType": "residence",
  "locationRuleStatus": "official"
}
```

Deverá ser conferido, pois missas e celebrações litúrgicas ocorrem em igrejas, centros paroquiais ou espaços religiosos definidos na programação.

---

## 43. Regras culturais de local

Deverão ser respeitadas as seguintes regras institucionais:

```text
Rezas Cantadas:
realizadas na casa do respectivo festeiro ou festeira.

Missas e celebrações litúrgicas:
realizadas em igrejas, centros paroquiais ou espaços religiosos definidos.
```

Exceções deverão possuir fonte, justificativa e aprovação.

---

## 44. Validação dos grupos tradicionais

Os grupos oficialmente reconhecidos deverão utilizar identificadores permanentes correspondentes a:

```text
Grupo do Congo
Conguinho
Chorado
Choradinho
```

Novos grupos ou alterações de denominação deverão passar por validação cultural e institucional.

---

## 45. Validação de festeiros

Todo registro de festeiro deverá possuir:

- `editionId`;
- `personId`;
- `roleId`;
- fonte;
- estado de validação;
- confirmação institucional;
- período ou edição correspondente.

A pessoa não deverá ser duplicada para representar a função anual.

---

## 46. Validação de atividades

Toda atividade deverá possuir, no mínimo:

```text
id
editionId
categoryId
title
date
locationId ou locationStatus
sourceId
validationStatus
```

O horário poderá ser condicionado à disponibilidade da informação.

---

## 47. Validação da programação

A programação deverá ser validada quanto a:

- edição;
- período;
- sequência;
- datas;
- horários;
- categorias;
- locais;
- fontes;
- duplicidades;
- conflitos;
- estado de aprovação;
- versão publicada.

---

## 48. Conflitos de programação

Deverão ser identificados:

- atividades simultâneas incompatíveis;
- duplicidades;
- horários invertidos;
- atividades sem local;
- atividade vinculada à edição errada;
- local incompatível com a categoria;
- pessoa em funções simultâneas incompatíveis.

---

## 49. Validação de locais

Todo local deverá possuir:

- identificador;
- nome;
- tipo;
- cidade;
- estado;
- nível de privacidade;
- estado de verificação;
- estado de publicação.

---

## 50. Validação de coordenadas

Coordenadas deverão ser verificadas quanto a:

- formato;
- faixa;
- correspondência geográfica;
- autorização;
- nível de precisão;
- segurança;
- compatibilidade com o local declarado.

---

## 51. Faixas geográficas

Valores válidos deverão obedecer:

```text
latitude: -90 a 90
longitude: -180 a 180
```

A validade numérica não confirma que o ponto corresponde ao local correto.

---

## 52. Residências privadas

Localizações residenciais privadas deverão ser validadas quanto a:

- autorização;
- finalidade;
- necessidade;
- precisão;
- risco;
- publicação;
- consentimento;
- alternativa de busca aproximada.

A ausência de autorização deverá impedir a divulgação da coordenada exata.

---

## 53. Validação de endereços

Endereços deverão ser separados entre:

- endereço completo;
- referência pública;
- ponto aproximado;
- consulta de busca;
- descrição histórica;
- informação restrita.

---

## 54. Validação de URLs

Toda URL deverá ser verificada quanto a:

- formato;
- protocolo;
- domínio;
- finalidade;
- acessibilidade;
- segurança;
- disponibilidade;
- titularidade;
- data da última verificação.

---

## 55. URLs permitidas

URLs públicas deverão utilizar, preferencialmente:

```text
https://
```

Protocolos inseguros, executáveis ou desconhecidos deverão ser bloqueados.

---

## 56. Referências externas

Toda referência externa crítica deverá possuir:

```text
url
title
source
verifiedAt
verificationStatus
responsible
```

---

## 57. Validação de documentos

Documentos deverão ser verificados quanto a:

- identificador;
- título;
- caminho;
- versão;
- classificação;
- autoria;
- fonte;
- aprovação;
- integridade;
- formato;
- estado de preservação.

---

## 58. Validação de caminhos

Caminhos de arquivos deverão:

- pertencer à estrutura oficial;
- respeitar convenções;
- evitar duplicidade;
- não conter caracteres inadequados;
- apontar para arquivo existente;
- preservar relação com o documento.

---

## 59. Validação de versões

Versões deverão utilizar padrão coerente.

Exemplo recomendado:

```text
1.0.0
```

Uma nova versão deverá possuir:

- justificativa;
- responsável;
- data;
- registro de alterações;
- preservação da versão anterior.

---

## 60. Validação de imagens

Imagens deverão ser verificadas quanto a:

- formato;
- integridade;
- dimensões;
- autoria;
- data;
- contexto;
- edição;
- atividade;
- pessoas retratadas;
- direitos de imagem;
- licença;
- descrição acessível;
- preservação do original.

---

## 61. Validação de áudios

Áudios deverão ser verificados quanto a:

- formato;
- duração;
- integridade;
- autoria;
- participantes;
- autorização;
- contexto;
- transcrição, quando necessária;
- classificação cultural;
- preservação.

---

## 62. Validação de vídeos

Vídeos deverão ser verificados quanto a:

- formato;
- duração;
- integridade;
- autoria;
- conteúdo;
- pessoas retratadas;
- autorização;
- trilha sonora;
- direitos;
- edição;
- atividade;
- local;
- preservação do original.

---

## 63. Validação de direitos autorais

Antes da publicação, deverá ser confirmado:

- autor;
- titular;
- licença;
- autorização;
- atribuição;
- permissão de reprodução;
- permissão de edição;
- restrições;
- prazo.

---

## 64. Validação de dados pessoais

Dados pessoais deverão ser avaliados quanto a:

- finalidade;
- necessidade;
- base legítima;
- minimização;
- acesso;
- publicação;
- retenção;
- segurança;
- direitos do titular;
- preservação legítima.

---

## 65. Validação de dados de menores

Dados de crianças e adolescentes deverão exigir proteção reforçada.

A validação deverá considerar:

- interesse superior;
- autorização adequada;
- dignidade;
- exposição;
- identificação;
- localização;
- reutilização;
- retenção;
- segurança.

---

## 66. Validação de contatos

Contatos deverão indicar:

```text
contactType
value
isPublic
isOfficial
status
```

Telefones e e-mails privados não deverão ser publicados sem autorização.

---

## 67. Validação de parceiros

Parceiros deverão possuir:

- identificação;
- tipo;
- finalidade;
- período;
- autorização;
- contrapartida;
- marca;
- responsável;
- estado;
- vínculo com a edição, quando aplicável.

---

## 68. Validação de marcas

Antes da utilização de marca deverá ser conferido:

- titular;
- arquivo oficial;
- versão;
- autorização;
- período;
- aplicação;
- restrições;
- proporção;
- contexto;
- encerramento da parceria.

---

## 69. Validação de fontes

Toda fonte deverá possuir:

- identificador;
- tipo;
- descrição;
- responsável;
- data;
- estado de verificação;
- nível de confiabilidade;
- relação com o dado.

---

## 70. Hierarquia de fontes

A hierarquia poderá considerar:

1. documento institucional aprovado;

2. autoridade institucional competente;

3. registro documental verificável;

4. autoridade cultural reconhecida;

5. relato comunitário identificado;

6. publicação externa verificável;

7. dado automatizado;

8. dado sem origem confirmada.

A posição na hierarquia não elimina a necessidade de análise contextual.

---

## 71. Fontes divergentes

Quando houver divergência, deverão ser preservados:

- os valores conflitantes;
- as fontes;
- as datas;
- os responsáveis;
- a análise;
- a decisão;
- a justificativa;
- o estado de contestação.

---

## 72. Dados contestados

Dados contestados deverão receber:

```text
validationStatus: contested
```

Eles não deverão ser apagados ou apresentados como definitivos até a resolução.

---

## 73. Validação humana

A validação humana será obrigatória para dados que envolvam:

- história;
- memória;
- patrimônio cultural;
- pessoas;
- menores;
- residências privadas;
- direitos de imagem;
- decisões institucionais;
- comunicação oficial;
- inteligência artificial;
- conflitos de fonte;
- correções relevantes.

---

## 74. Níveis de validação humana

Poderão existir:

| Nível | Responsabilidade |
|---|---|
| Operacional | Conferência inicial |
| Editorial | Linguagem e publicação |
| Cultural | Tradições e contexto |
| Técnica | Estrutura e sistema |
| Jurídica | Direitos e obrigações |
| Institucional | Aprovação oficial |
| Arquivística | Preservação e autenticidade |

---

## 75. Proibição de aprovação exclusivamente automática

Nenhum dado crítico deverá ser aprovado exclusivamente por:

- importador;
- script;
- inteligência artificial;
- validação de esquema;
- integração externa;
- ferramenta de publicação;
- banco de dados.

A automação poderá apoiar, mas não substituir a autoridade responsável.

---

## 76. Dados produzidos por automação

Dados produzidos por automação deverão registrar:

```text
automationId
sourceIds
generatedAt
rulesVersion
validationStatus
humanReviewer
```

---

## 77. Dados produzidos por inteligência artificial

Conteúdos produzidos ou modificados por inteligência artificial deverão ser avaliados quanto a:

- fontes;
- fidelidade;
- invenções;
- distorções;
- contexto;
- viés;
- direitos;
- privacidade;
- autenticidade;
- soberania cultural.

---

## 78. Identificação de conteúdo sintético

Quando necessário, deverá existir metadado como:

```text
syntheticContent: true
aiAssisted: true
humanValidated: true
```

---

## 79. Proibição de fabricação de dados

Nenhuma lacuna deverá ser preenchida por inferência automática apresentada como fato.

Valores ausentes deverão permanecer:

```text
unknown
not-informed
pending-confirmation
not-applicable
restricted
```

---

## 80. Evidências de conferência

Toda validação relevante deverá preservar evidências como:

- documento;
- mensagem;
- formulário;
- ata;
- registro de sistema;
- captura;
- arquivo;
- assinatura;
- confirmação;
- comparação;
- parecer;
- relatório.

---

## 81. Metadados de validação

Todo processo relevante deverá registrar:

```text
validatedBy
validatedAt
validationMethod
validationRulesVersion
validationResult
evidenceIds
notes
```

---

## 82. Registro de aprovação

Toda aprovação deverá possuir:

```text
approvedBy
approvedAt
approvalScope
approvalDecision
approvalEvidence
```

---

## 83. Revalidação

Um dado deverá ser revalidado quando houver:

- alteração;
- mudança de fonte;
- mudança de edição;
- atualização de esquema;
- migração;
- incidente;
- contestação;
- nova autorização;
- mudança legal;
- erro identificado;
- expiração de referência externa.

---

## 84. Validação antes da publicação

Antes da publicação deverão ser conferidos:

- estrutura;
- semântica;
- fonte;
- direitos;
- privacidade;
- edição;
- datas;
- locais;
- versão;
- autorização;
- acessibilidade;
- preservação.

---

## 85. Validação após a publicação

Após a publicação deverá ser verificado:

- conteúdo exibido;
- links;
- imagens;
- acessibilidade;
- versão;
- integridade;
- funcionamento;
- correspondência com o arquivo aprovado;
- ausência de exposição indevida.

---

## 86. Validação de correções

Toda correção deverá:

- preservar o valor anterior;
- registrar o erro;
- indicar o novo valor;
- registrar o responsável;
- indicar a fonte;
- informar a data;
- avaliar o impacto;
- atualizar a versão;
- revalidar referências.

---

## 87. Correções editoriais

Correções de ortografia, pontuação ou formatação poderão possuir fluxo simplificado quando não alterarem:

- identidade;
- significado;
- data;
- local;
- pessoa;
- função;
- valor;
- contexto histórico.

---

## 88. Correções materiais

Correções materiais exigirão validação formal quando alterarem:

- nome;
- data;
- horário;
- local;
- função;
- pessoa;
- atividade;
- fonte;
- autorização;
- versão histórica;
- decisão institucional.

---

## 89. Critérios de rejeição

Um dado deverá ser rejeitado quando:

- não possuir origem mínima;
- violar o esquema;
- utilizar tipo incompatível;
- possuir referência inexistente;
- expor dado protegido;
- contradizer regra institucional sem justificativa;
- apresentar conflito grave não resolvido;
- utilizar autorização inválida;
- possuir conteúdo fabricado;
- comprometer a edição fundadora;
- impedir rastreabilidade.

---

## 90. Rejeição temporária

A rejeição poderá ser temporária quando o dado puder ser corrigido.

Estado recomendado:

```text
rejected-pending-correction
```

---

## 91. Rejeição definitiva

A rejeição definitiva deverá ser utilizada quando:

- o dado for comprovadamente falso;
- o conteúdo for ilegítimo;
- a publicação for proibida;
- a origem for fraudulenta;
- a autorização for inválida;
- a preservação implicar violação sem fundamento.

A evidência da rejeição deverá ser mantida quando institucionalmente relevante.

---

## 92. Mensagens de erro

Mensagens de erro deverão ser:

- claras;
- específicas;
- acionáveis;
- não ofensivas;
- compatíveis com acessibilidade;
- livres de exposição de dados sensíveis.

Exemplo:

```text
O campo editionId é obrigatório para atividades anuais.
```

---

## 93. Níveis de erro

| Nível | Efeito |
|---|---|
| Informativo | Não impede continuidade |
| Aviso | Requer atenção |
| Erro | Impede aprovação |
| Crítico | Exige contenção imediata |
| Bloqueador | Impede armazenamento ou publicação |

---

## 94. Registro de erros

Todo erro relevante deverá registrar:

```text
errorCode
entityId
field
detectedAt
severity
description
responsible
resolutionStatus
```

---

## 95. Tratamento de erros

O tratamento deverá seguir:

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
REVALIDAR
    ↓
APROVAR
    ↓
PRESERVAR EVIDÊNCIA
```

---

## 96. Códigos de validação

Poderão ser adotados códigos padronizados.

Exemplos:

```text
VAL-STR-001 — Campo obrigatório ausente
VAL-TYP-001 — Tipo inválido
VAL-REF-001 — Referência órfã
VAL-TMP-001 — Inconsistência temporal
VAL-PRV-001 — Violação de privacidade
VAL-CUL-001 — Regra cultural não atendida
VAL-PUB-001 — Publicação não autorizada
```

---

## 97. Validação em lote

Importações ou atualizações em lote deverão produzir relatório contendo:

- total recebido;
- total válido;
- total inválido;
- total pendente;
- duplicidades;
- referências órfãs;
- avisos;
- erros;
- registros rejeitados;
- versão das regras;
- responsável.

---

## 98. Validação transacional

Operações críticas deverão ser validadas como unidade.

Exemplo:

```text
criação de atividade
+
vínculo com edição
+
vínculo com local
+
vínculo com fonte
```

Se parte obrigatória falhar, a operação não deverá ser considerada concluída.

---

## 99. Validação em migrações

Toda migração deverá verificar:

- quantidade de registros;
- campos;
- tipos;
- identificadores;
- aliases;
- chaves estrangeiras;
- relacionamentos;
- versões;
- fontes;
- autorizações;
- integridade;
- preservação histórica.

---

## 100. Comparação pré e pós-migração

Deverá ser produzida comparação contendo:

```text
registros antes
registros depois
registros migrados
registros rejeitados
registros corrigidos
referências preservadas
divergências
```

---

## 101. Validação de backups

Backups deverão ser validados quanto a:

- existência;
- integridade;
- legibilidade;
- criptografia;
- data;
- escopo;
- retenção;
- capacidade de restauração;
- correspondência com a origem.

---

## 102. Teste de restauração

A validade de um backup não poderá ser presumida apenas por sua existência.

Deverão ocorrer testes de restauração conforme criticidade e política de continuidade.

---

## 103. Validação de dados históricos

Dados históricos deverão ser avaliados quanto a:

- fonte;
- contexto;
- autoria;
- data;
- integridade;
- alterações;
- classificação epistemológica;
- preservação;
- relação com a memória comunitária.

---

## 104. Estados históricos

Poderão ser utilizados:

```text
CONFIRMADO
DOCUMENTADO
MEMÓRIA PESSOAL
MEMÓRIA COMUNITÁRIA
RELATO TESTEMUNHAL
EM CONFERÊNCIA
CONTESTADO
NÃO CONFIRMADO
```

---

## 105. Preservação da divergência histórica

Divergências legítimas não deverão ser apagadas.

Deverão ser preservados:

- relatos;
- fontes;
- contexto;
- responsáveis;
- análise;
- decisão;
- grau de certeza.

---

## 106. Validação cultural

A validação cultural deverá proteger:

- nomes tradicionais;
- funções;
- grupos;
- cerimônias;
- significados;
- lugares;
- saberes;
- memórias;
- formas de representação;
- limites de publicação.

---

## 107. Autoridade cultural

A validação cultural deverá ser realizada, conforme o caso, por:

- coordenação;
- consistório;
- festeiros;
- representantes dos grupos;
- detentores de saberes;
- comunidade;
- curadoria cultural autorizada.

---

## 108. Validação editorial

A validação editorial deverá avaliar:

- clareza;
- coerência;
- linguagem;
- grafia;
- contexto;
- acessibilidade;
- fidelidade à fonte;
- adequação ao canal;
- preservação do conteúdo original.

---

## 109. Validação de acessibilidade

Antes da publicação deverão ser verificados, quando aplicável:

- títulos hierárquicos;
- textos alternativos;
- contraste;
- legibilidade;
- navegação;
- linguagem clara;
- legendas;
- transcrições;
- descrição de imagens;
- compatibilidade com tecnologias assistivas.

---

## 110. Validação de segurança

Deverá impedir:

- inserção de código malicioso;
- scripts não autorizados;
- links perigosos;
- arquivos executáveis indevidos;
- exposição de credenciais;
- dados secretos;
- manipulação de parâmetros;
- conteúdo corrompido.

---

## 111. Sanitização

Dados recebidos de formulários, APIs e arquivos externos deverão ser sanitizados sem apagar seu valor documental.

O valor original poderá ser preservado em área restrita quando necessário para auditoria.

---

## 112. Validação de arquivos

Arquivos deverão ser verificados quanto a:

- extensão;
- tipo real;
- tamanho;
- integridade;
- nome;
- malware;
- metadados;
- direitos;
- classificação;
- local de armazenamento.

---

## 113. Extensão e tipo real

A extensão declarada deverá corresponder ao conteúdo real do arquivo.

Exemplo:

```text
arquivo.jpg
```

não deverá conter executável ou conteúdo incompatível.

---

## 114. Validação de integrações

Dados recebidos por integrações deverão ser verificados quanto a:

- origem;
- autenticação;
- assinatura;
- estrutura;
- versão;
- duplicidade;
- horário;
- integridade;
- mapeamento;
- autorização.

---

## 115. Confiança em plataformas externas

Nenhum dado externo deverá ser considerado confiável apenas porque foi fornecido por plataforma conhecida.

Deverá existir validação institucional proporcional ao risco.

---

## 116. Validação por ambiente

Os ambientes deverão possuir regras próprias:

```text
DESENVOLVIMENTO
Pode utilizar dados de teste.

HOMOLOGAÇÃO
Deve reproduzir regras de produção.

PRODUÇÃO
Somente dados aprovados e autorizados.
```

Dados de teste não deverão ser publicados como reais.

---

## 117. Validação de consistência entre ambientes

Deverão ser comparados:

- versão dos esquemas;
- regras de validação;
- vocabulários;
- configurações;
- integrações;
- identificadores;
- comportamento de publicação.

---

## 118. Consistência entre edições

Deverá ser validado que:

- cada dado anual possua `editionId`;
- dados de uma edição não sobrescrevam outra;
- entidades permanentes mantenham identificadores;
- relacionamentos históricos sejam preservados;
- vocabulários permaneçam compatíveis;
- mudanças sejam versionadas.

---

## 119. Reutilização de entidades permanentes

Entidades permanentes deverão ser reutilizadas quando representarem o mesmo objeto institucional.

Exemplo:

```text
group-congo
```

deverá ser referenciado por 2026, 2027 e futuras edições, sem duplicação anual do grupo.

---

## 120. Proibição de mistura entre edições

Será inválido:

- atividade de 2027 com `editionId` de 2026;
- festeiro anual sem edição;
- imagem de edição futura incorporada ao acervo de 2026 sem contexto;
- correção de 2026 aplicada silenciosamente como dado original.

---

## 121. Validação da edição fundadora

Os dados da FESTANÇA 2026 deverão receber validação reforçada quanto a:

- identificadores;
- fontes;
- estrutura;
- contexto;
- edição;
- versões;
- atividades;
- pessoas;
- funções;
- locais;
- documentos;
- mídias;
- preservação.

---

## 122. Imutabilidade histórica controlada

Após o encerramento da edição fundadora, correções deverão ocorrer por:

```text
nova versão
+
justificativa
+
responsável
+
evidência
+
preservação do valor anterior
```

---

## 123. Validação antes do arquivamento

Antes do arquivamento deverão ser confirmados:

- encerramento;
- completude;
- versão final;
- fontes;
- autorizações;
- relacionamentos;
- metadados;
- checksum;
- cópia de preservação;
- capacidade de recuperação.

---

## 124. Validação de preservação

Todo dado permanente deverá possuir:

- classe de preservação;
- formato adequado;
- metadados;
- origem;
- versão;
- responsável;
- integridade;
- cópias;
- plano de migração;
- teste de recuperação.

---

## 125. Auditoria das validações

A auditoria deverá verificar:

- dados publicados sem validação;
- aprovações sem responsável;
- referências órfãs;
- campos obrigatórios ausentes;
- regras ignoradas;
- erros não tratados;
- versões não preservadas;
- fontes ausentes;
- dados pessoais expostos;
- conteúdos sintéticos não identificados;
- registros fundadores alterados.

---

## 126. Periodicidade da auditoria

A auditoria poderá ocorrer:

- antes da publicação;
- após publicação relevante;
- no encerramento da edição;
- antes e depois de migração;
- após incidente;
- após alteração de esquema;
- periodicamente em dados críticos.

---

## 127. Indicadores mínimos

Deverão ser monitorados:

- total de registros recebidos;
- total validado;
- total rejeitado;
- total pendente;
- campos obrigatórios ausentes;
- referências órfãs;
- conflitos temporais;
- dados sem fonte;
- dados sem aprovação;
- correções realizadas;
- dados contestados;
- registros fundadores validados;
- falhas de preservação.

---

## 128. Taxa de conformidade

Poderá ser calculada:

```text
Registros válidos
----------------- × 100
Registros avaliados
```

A taxa não deverá substituir análise qualitativa dos dados críticos.

---

## 129. Lista mínima de validação geral

Antes da aprovação deverá ser confirmado:

- [ ] identificador válido;
- [ ] entidade definida;
- [ ] edição vinculada, quando aplicável;
- [ ] classificação atribuída;
- [ ] campos obrigatórios preenchidos;
- [ ] tipos corretos;
- [ ] formatos corretos;
- [ ] domínios permitidos;
- [ ] referências existentes;
- [ ] cardinalidades respeitadas;
- [ ] datas coerentes;
- [ ] fonte identificada;
- [ ] responsável identificado;
- [ ] privacidade avaliada;
- [ ] direitos avaliados;
- [ ] validação humana realizada;
- [ ] evidências preservadas;
- [ ] aprovação registrada;
- [ ] versão registrada;
- [ ] preservação definida.

---

## 130. Lista mínima para atividades

- [ ] `id` válido;
- [ ] `editionId` existente;
- [ ] categoria válida;
- [ ] título confirmado;
- [ ] data válida;
- [ ] horário validado ou classificado como pendente;
- [ ] local válido;
- [ ] regra cultural de local atendida;
- [ ] fonte registrada;
- [ ] responsável identificado;
- [ ] status definido;
- [ ] publicação autorizada.

---

## 131. Lista mínima para pessoas e funções

- [ ] pessoa canônica existente;
- [ ] nome oficial validado;
- [ ] função existente;
- [ ] edição vinculada;
- [ ] período definido;
- [ ] fonte registrada;
- [ ] duplicidade verificada;
- [ ] dados pessoais minimizados;
- [ ] aprovação registrada.

---

## 132. Lista mínima para mídias

- [ ] arquivo íntegro;
- [ ] formato permitido;
- [ ] autoria registrada;
- [ ] edição vinculada;
- [ ] atividade vinculada, quando aplicável;
- [ ] pessoas identificadas avaliadas;
- [ ] autorizações verificadas;
- [ ] licença registrada;
- [ ] descrição acessível;
- [ ] original preservado;
- [ ] versão publicada identificada.

---

## 133. Lista mínima para documentos

- [ ] identificador institucional;
- [ ] caminho oficial;
- [ ] título;
- [ ] versão;
- [ ] autor ou responsável;
- [ ] classificação;
- [ ] fonte;
- [ ] aprovação;
- [ ] integridade;
- [ ] links internos;
- [ ] preservação da versão anterior;
- [ ] estado de vigência.

---

## 134. Não conformidades

Serão consideradas não conformidades:

- dado sem identificador;
- campo obrigatório ausente;
- tipo incompatível;
- formato inválido;
- valor fora do domínio;
- referência órfã;
- violação de cardinalidade;
- inconsistência temporal;
- fonte não identificada;
- aprovação ausente;
- exposição indevida;
- duplicidade;
- erro cultural;
- conteúdo fabricado;
- migração não validada;
- alteração sem versão;
- apagamento de dado fundador.

---

## 135. Classificação das não conformidades

| Nível | Definição |
|---|---|
| Baixa | Não compromete finalidade principal |
| Média | Compromete qualidade ou manutenção |
| Alta | Compromete publicação, direitos ou operação |
| Crítica | Compromete memória, segurança, cultura ou continuidade |

---

## 136. Tratamento das não conformidades

Toda não conformidade deverá ser:

1. identificada;

2. registrada;

3. classificada;

4. contida;

5. atribuída a responsável;

6. corrigida;

7. revalidada;

8. aprovada;

9. auditada;

10. preservada como evidência.

---

## 137. Prazos de correção

Os prazos deverão considerar:

- criticidade;
- risco;
- impacto;
- publicação;
- direitos;
- continuidade;
- proximidade da atividade;
- possibilidade de dano histórico.

Não conformidades críticas deverão receber tratamento imediato.

---

## 138. Exceções

Exceções somente poderão ser aceitas quando:

- houver justificativa;
- o risco for avaliado;
- o prazo for definido;
- o responsável for identificado;
- a autoridade competente aprovar;
- o registro for preservado;
- não houver violação de direitos;
- a edição fundadora permanecer protegida.

---

## 139. Validação provisória

Um dado poderá receber validação provisória quando:

- sua utilização for necessária;
- sua incompletude estiver identificada;
- não houver risco crítico;
- o status estiver visível;
- existir prazo de regularização;
- não for apresentado como definitivo.

---

## 140. Critérios mínimos de aprovação

Um dado somente poderá ser aprovado quando:

- cumprir sua finalidade;
- possuir estrutura válida;
- possuir semântica coerente;
- utilizar tipos e formatos corretos;
- respeitar domínios;
- possuir fonte;
- preservar integridade referencial;
- proteger direitos;
- possuir evidências;
- permitir auditoria;
- ser compatível com a preservação histórica.

---

## 141. Critérios mínimos de publicação

Um dado somente poderá ser publicado quando:

- estiver validado;
- estiver aprovado;
- tiver privacidade avaliada;
- tiver direitos verificados;
- tiver versão definida;
- tiver canal autorizado;
- tiver acessibilidade avaliada;
- tiver preservação prevista;
- não apresentar não conformidade bloqueadora.

---

## 142. Cadeia de responsabilidade

```text
ORIGEM DO DADO
      ↓
RECEBIMENTO
      ↓
GOVERNANÇA DE DADOS
      ↓
CURADORIA CULTURAL
      ↓
CURADORIA EDITORIAL
      ↓
VALIDAÇÃO TÉCNICA
      ↓
SEGURANÇA E PRIVACIDADE
      ↓
AUTORIDADE APROVADORA
      ↓
PUBLICAÇÃO
      ↓
AUDITORIA E PRESERVAÇÃO
```

---

## 143. Matriz mínima de responsabilidade

| Atividade | Responsabilidade principal |
|---|---|
| Fornecimento | Fonte ou responsável de origem |
| Classificação | Governança de dados |
| Validação estrutural | Curadoria técnica |
| Validação semântica | Governança de dados |
| Validação cultural | Curadoria cultural |
| Validação editorial | Curadoria editorial |
| Privacidade | Segurança e proteção de dados |
| Aprovação | Autoridade competente |
| Publicação | Responsável autorizado |
| Auditoria | Auditoria institucional |
| Preservação | Gestão documental e arquivística |

---

## 144. Declaração constitucional

Este documento declara que:

1. nenhum dado será considerado oficial apenas por ter sido recebido;

2. nenhum campo obrigatório será ignorado silenciosamente;

3. nenhum tipo incompatível será aceito por conveniência;

4. nenhuma referência órfã será tratada como válida;

5. nenhuma informação sem fonte será apresentada como confirmada;

6. nenhum dado pessoal será publicado sem avaliação;

7. nenhuma residência privada será exposta sem autorização adequada;

8. nenhum conteúdo automatizado será aceito sem validação proporcional;

9. nenhuma divergência histórica será apagada por simplificação;

10. nenhuma correção destruirá a versão anterior;

11. nenhuma edição futura substituirá os dados da edição fundadora;

12. toda validação deverá ser verificável, responsável e auditável.

---

## 145. Princípio maior

**IDENTIFICAR ANTES DE VALIDAR.**

**CLASSIFICAR ANTES DE PROCESSAR.**

**ESTRUTURAR ANTES DE ARMAZENAR.**

**VERIFICAR ANTES DE RELACIONAR.**

**CONTEXTUALIZAR ANTES DE INTERPRETAR.**

**CONFERIR ANTES DE APROVAR.**

**APROVAR ANTES DE PUBLICAR.**

**CORRIGIR SEM APAGAR.**

**REVALIDAR APÓS ALTERAR.**

**PRESERVAR ANTES DE MIGRAR.**

**EVOLUIR SEM ROMPER A VERDADE DOCUMENTAL.**

---

## 146. Compromisso permanente

Toda validação de dados deverá proteger simultaneamente:

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
- `docs/festanca/governance/accessibility-and-digital-inclusion-policy.md`.

---

## 148. Estado inicial deste documento

```text
DOCUMENTO: data-validation-rules.md
FUNÇÃO: Validação constitucional dos dados
REGIME: Permanente
EDIÇÃO FUNDADORA: FESTANÇA 2026
CRITICIDADE: Máxima
MUTABILIDADE: Estritamente controlada
PRESERVAÇÃO: Integral
VALIDAÇÃO ESTRUTURAL: Obrigatória
VALIDAÇÃO SEMÂNTICA: Obrigatória
VALIDAÇÃO REFERENCIAL: Obrigatória
VALIDAÇÃO HUMANA: Obrigatória para dados críticos
EVIDÊNCIAS: Obrigatórias
VERSIONAMENTO: Obrigatório
RASTREABILIDADE: Permanente
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
- atualizar a versão das regras;
- manter compatibilidade histórica;
- preservar evidências;
- proteger dados pessoais;
- preservar a edição fundadora;
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
