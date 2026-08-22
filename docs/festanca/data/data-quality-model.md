# Modelo Constitucional de Qualidade de Dados do Portal Permanente da FESTANÇA

> Constituição destinada a regulamentar a exatidão, a completude, a consistência, a atualidade, a unicidade, a validade, a integridade, a confiabilidade, a acessibilidade, a rastreabilidade, o monitoramento, a melhoria contínua e a preservação histórica da qualidade dos dados utilizados pelo Portal Permanente da FESTANÇA de Vila Bela da Santíssima Trindade — Mato Grosso — Brasil.

---

## 1. Identificação do documento

| Campo | Conteúdo |
|---|---|
| Documento | Modelo Constitucional de Qualidade de Dados do Portal Permanente da FESTANÇA |
| Caminho oficial | `docs/festanca/data/data-quality-model.md` |
| Classificação | Documento constitucional de dados |
| Domínio | Qualidade, confiabilidade, monitoramento e melhoria contínua dos dados |
| Regime | Permanente |
| Criticidade | Máxima |
| Mutabilidade | Estritamente controlada |
| Preservação | Integral, auditável, versionada e recuperável |
| Edição fundadora | FESTANÇA 2026 |
| Situação | Constituição de qualidade de dados |
| Versão inicial | `1.0.0` |
| Aplicabilidade | Portal Permanente e edições anuais |
| Vigência | Permanente |
| Documento superior | `docs/festanca/data/data-architecture.md` |
| Modelo classificatório | `docs/festanca/data/data-classification-model.md` |
| Modelo relacional | `docs/festanca/data/entity-relationship-model.md` |
| Modelo de identificação | `docs/festanca/data/identifiers-and-references.md` |
| Regras de validação | `docs/festanca/data/data-validation-rules.md` |

---

## 2. Finalidade

Este documento estabelece o regime oficial de qualidade dos dados produzidos, recebidos, importados, relacionados, transformados, validados, publicados, corrigidos, arquivados e preservados pelo Portal Permanente da FESTANÇA.

Sua finalidade é assegurar que todo dado institucionalmente relevante seja:

- exato;
- completo;
- consistente;
- atual;
- único;
- válido;
- íntegro;
- confiável;
- acessível às pessoas autorizadas;
- rastreável;
- contextualizado;
- verificável;
- preservável;
- recuperável;
- compatível com a memória histórica;
- adequado à sua finalidade.

Nenhum dado deverá ser considerado de qualidade apenas porque está armazenado, publicado ou tecnicamente bem formatado.

---

## 3. Objetivos estratégicos

São objetivos permanentes deste Modelo:

1. definir as dimensões oficiais de qualidade;

2. estabelecer níveis mínimos aceitáveis;

3. instituir indicadores mensuráveis;

4. detectar erros, lacunas e contradições;

5. impedir duplicidades indevidas;

6. preservar a integridade dos relacionamentos;

7. assegurar atualidade proporcional à finalidade;

8. proteger dados pessoais e culturais;

9. registrar anomalias e não conformidades;

10. regulamentar correções;

11. permitir monitoramento contínuo;

12. preservar evidências de qualidade;

13. proteger os dados da edição fundadora;

14. assegurar melhoria contínua;

15. preservar a qualidade histórica entre futuras edições.

---

## 4. Princípios fundamentais

Toda gestão de qualidade de dados deverá observar:

- legitimidade;
- finalidade;
- proporcionalidade;
- exatidão;
- completude;
- consistência;
- atualidade;
- unicidade;
- validade;
- integridade;
- confiabilidade;
- acessibilidade;
- rastreabilidade;
- transparência;
- responsabilidade;
- preservação histórica;
- continuidade institucional;
- soberania cultural.

---

## 5. Conceito de qualidade de dados

Qualidade de dados é o grau em que um dado atende às necessidades institucionais, culturais, documentais, editoriais, técnicas, jurídicas e históricas para as quais foi produzido ou preservado.

Um dado de qualidade deverá ser adequado:

- ao contexto;
- à finalidade;
- ao público;
- ao período;
- ao nível de acesso;
- à edição correspondente;
- às regras de preservação;
- às responsabilidades institucionais.

---

## 6. Qualidade não é perfeição absoluta

A qualidade deverá ser avaliada de forma proporcional:

- à criticidade;
- ao risco;
- à finalidade;
- à disponibilidade de fontes;
- ao valor cultural;
- ao impacto da publicação;
- ao estado histórico do registro.

Um relato comunitário poderá possuir valor legítimo mesmo quando não estiver confirmado como fato documental.

Nesse caso, sua qualidade dependerá da correta identificação de sua natureza.

---

## 7. Qualidade não é apenas validade estrutural

Um dado poderá estar estruturalmente válido e ainda apresentar baixa qualidade.

Exemplo:

```json
{
  "id": "activity-2026-001",
  "title": "Evento",
  "date": "2026-07-15"
}
```

Embora a estrutura possa estar correta, o título poderá ser insuficiente para identificação institucional.

---

## 8. Qualidade não é apenas atualização

Um registro histórico antigo não deverá ser considerado de baixa qualidade apenas por ser antigo.

Sua qualidade dependerá de:

- autenticidade;
- contexto;
- fonte;
- integridade;
- preservação;
- identificação temporal.

---

## 9. Escopo

Este Modelo aplica-se a:

- dados permanentes;
- dados anuais;
- dados compartilhados;
- dados históricos;
- programações;
- atividades;
- pessoas;
- funções;
- grupos tradicionais;
- locais;
- documentos;
- publicações;
- imagens;
- áudios;
- vídeos;
- autorizações;
- fontes;
- parceiros;
- integrações;
- importações;
- migrações;
- dados derivados;
- dados automatizados;
- registros arquivísticos;
- metadados;
- indicadores;
- relatórios.

---

## 10. Dimensões oficiais de qualidade

As dimensões oficiais serão:

```text
1. Exatidão
2. Completude
3. Consistência
4. Atualidade
5. Unicidade
6. Validade
7. Integridade
8. Confiabilidade
9. Acessibilidade
10. Rastreabilidade
11. Contextualização
12. Autenticidade
13. Preservação
14. Interoperabilidade
15. Segurança
```

---

## 11. Exatidão

Exatidão é o grau em que o dado representa corretamente a realidade, a fonte ou o registro institucional correspondente.

Exemplos:

- nome corretamente grafado;
- data corretamente registrada;
- função corretamente atribuída;
- local corretamente identificado;
- valor corretamente transcrito;
- relacionamento corretamente estabelecido.

---

## 12. Critérios de exatidão

A exatidão deverá ser avaliada por meio de:

- comparação com a fonte;
- confirmação institucional;
- conferência documental;
- validação cultural;
- verificação geográfica;
- revisão humana;
- cruzamento de registros;
- auditoria.

---

## 13. Exatidão de nomes próprios

Nomes próprios deverão preservar a grafia oficialmente validada.

Correções deverão registrar:

```text
valor anterior
valor correto
fonte da correção
responsável
data
justificativa
```

Grafias anteriores poderão permanecer como aliases quando necessárias à rastreabilidade.

---

## 14. Exatidão temporal

Datas e horários deverão corresponder às fontes aprovadas.

Valores aproximados deverão ser classificados como aproximados.

Exemplo:

```json
{
  "startTime": null,
  "timeDescription": "à noite",
  "timeStatus": "approximate"
}
```

---

## 15. Exatidão geográfica

Locais e coordenadas deverão ser conferidos quanto a:

- correspondência real;
- nível de precisão;
- autorização;
- segurança;
- contexto da edição;
- compatibilidade com a atividade.

A exatidão geográfica não deverá prevalecer sobre a proteção de residências privadas.

---

## 16. Completude

Completude é o grau em que os campos necessários estão presentes.

A completude deverá considerar:

- campos obrigatórios;
- campos condicionais;
- relacionamentos;
- fontes;
- autorizações;
- evidências;
- metadados;
- contexto histórico.

---

## 17. Completude mínima

Todo registro institucional deverá possuir, quando aplicável:

```text
id
classification
status
sourceId
validationStatus
createdAt
updatedAt
version
responsible
```

Registros anuais deverão possuir:

```text
editionId
```

---

## 18. Completude contextual

Um registro poderá possuir todos os campos técnicos e ainda estar incompleto culturalmente.

Exemplo:

```text
Atividade registrada sem indicação do grupo tradicional participante.
```

Quando o grupo for essencial para compreender a atividade, sua ausência deverá ser tratada como lacuna de qualidade.

---

## 19. Completude proporcional

Nem todo campo deverá ser obrigatório em todas as entidades.

A completude deverá respeitar:

- o tipo do registro;
- a finalidade;
- o nível de acesso;
- a existência legítima da informação;
- a proteção de dados;
- a condição histórica.

---

## 20. Dados desconhecidos

A ausência legítima de informação deverá utilizar estados explícitos.

```text
unknown
not-informed
pending-confirmation
not-applicable
restricted
not-authorized
```

A ausência conhecida e classificada poderá ser considerada qualitativamente superior a um valor inventado.

---

## 21. Consistência

Consistência é o grau em que os dados não apresentam contradições indevidas entre si.

Deverá ser verificada:

- dentro do mesmo registro;
- entre registros relacionados;
- entre documentos;
- entre ambientes;
- entre versões;
- entre edições;
- entre publicação e fonte;
- entre dados permanentes e anuais.

---

## 22. Consistência interna

Exemplo de inconsistência interna:

```json
{
  "status": "archived",
  "publishedAt": null,
  "publicationStatus": "published"
}
```

O registro deverá ser analisado para confirmar se os estados são compatíveis.

---

## 23. Consistência relacional

Exemplo:

```text
Atividade vinculada à FESTANÇA 2027
mas relacionada à programação oficial de 2026.
```

Esse vínculo deverá ser rejeitado ou formalmente contextualizado.

---

## 24. Consistência cultural

Os dados deverão respeitar regras culturais e institucionais reconhecidas.

Exemplos:

```text
Rezas Cantadas:
realizadas na casa do respectivo festeiro ou festeira.

Missas e celebrações litúrgicas:
realizadas em igrejas, centros paroquiais ou espaços religiosos definidos.
```

Exceções deverão possuir fonte e aprovação.

---

## 25. Consistência histórica

Correções posteriores não deverão alterar silenciosamente a representação original de uma edição encerrada.

Deverão existir:

- versão original;
- versão corrigida;
- justificativa;
- fonte;
- responsável;
- data da correção.

---

## 26. Atualidade

Atualidade é o grau em que o dado está adequado ao momento de utilização.

A atualidade deverá considerar:

- finalidade;
- frequência de mudança;
- criticidade;
- edição;
- canal de publicação;
- prazo de validade;
- contexto histórico.

---

## 27. Dados operacionais

Dados operacionais deverão possuir atualização compatível com:

- programação;
- horários;
- locais;
- comunicados;
- parceiros ativos;
- canais oficiais;
- responsáveis;
- serviços tecnológicos.

---

## 28. Dados históricos

Dados históricos não deverão ser atualizados para parecer atuais.

Eles deverão ser contextualizados por:

```text
eventDate
recordedAt
publishedAt
archivedAt
historicalStatus
```

---

## 29. Prazo de validade

Dados que perdem validade deverão possuir:

```text
validFrom
validUntil
reviewAt
```

Exemplos:

- autorização;
- parceria;
- contato;
- credencial;
- URL externa;
- integração;
- programação provisória.

---

## 30. Unicidade

Unicidade é o grau em que cada entidade legítima possui uma representação canônica, sem duplicidades indevidas.

A unicidade deverá ser assegurada para:

- pessoas;
- grupos;
- locais;
- atividades;
- documentos;
- mídias;
- autorizações;
- fontes;
- parceiros;
- identificadores.

---

## 31. Duplicidade exata

Duplicidade exata ocorre quando dois registros possuem os mesmos valores relevantes e representam a mesma entidade.

Ela deverá ser detectada por:

- identificador;
- campos-chave;
- checksum;
- comparação estrutural;
- análise humana.

---

## 32. Duplicidade semântica

Duplicidade semântica ocorre quando registros diferentes representam a mesma entidade.

Exemplo:

```text
Grupo do Congo
Congo
Grupo Congo de Vila Bela
```

Essas denominações poderão apontar para a mesma entidade canônica, conforme validação cultural.

---

## 33. Homônimos

Pessoas ou locais com nomes iguais não deverão ser fundidos automaticamente.

A resolução deverá considerar:

- contexto;
- função;
- edição;
- fonte;
- período;
- relacionamento;
- confirmação humana.

---

## 34. Resolução de duplicidades

O processo deverá seguir:

```text
DETECÇÃO
   ↓
COMPARAÇÃO
   ↓
VERIFICAÇÃO DAS FONTES
   ↓
VALIDAÇÃO HUMANA
   ↓
DEFINIÇÃO DA ENTIDADE CANÔNICA
   ↓
MIGRAÇÃO DOS RELACIONAMENTOS
   ↓
PRESERVAÇÃO DOS ALIASES
   ↓
AUDITORIA
```

---

## 35. Validade

Validade é o grau em que o dado atende às regras estruturais, semânticas, relacionais, temporais, culturais e institucionais aplicáveis.

Um dado válido deverá cumprir:

- esquema;
- tipo;
- formato;
- domínio;
- regra condicional;
- integridade referencial;
- coerência temporal;
- regra institucional.

---

## 36. Validade estrutural

Deverá confirmar:

- campos;
- tipos;
- hierarquia;
- cardinalidade;
- formato;
- propriedades obrigatórias;
- vocabulários permitidos.

---

## 37. Validade semântica

Deverá confirmar que o conteúdo possui significado coerente.

Exemplo:

```text
Uma data pode ter formato válido, mas estar vinculada à edição errada.
```

---

## 38. Validade institucional

Um dado somente será institucionalmente válido quando:

- possuir origem;
- tiver sido conferido;
- estiver dentro da competência do responsável;
- possuir aprovação quando necessária;
- respeitar as políticas do Portal.

---

## 39. Integridade

Integridade é a preservação da estrutura, do conteúdo, dos relacionamentos e da autenticidade dos dados ao longo do tempo.

Ela inclui:

- integridade física;
- integridade lógica;
- integridade referencial;
- integridade documental;
- integridade histórica;
- integridade arquivística.

---

## 40. Integridade física

A integridade física deverá assegurar que arquivos e registros não estejam:

- corrompidos;
- truncados;
- incompletos;
- ilegíveis;
- danificados;
- substituídos indevidamente.

---

## 41. Integridade lógica

A integridade lógica deverá assegurar:

- tipos corretos;
- campos coerentes;
- estados válidos;
- regras respeitadas;
- ausência de contradições indevidas.

---

## 42. Integridade referencial

Nenhuma referência deverá apontar para entidade inexistente ou incompatível.

Deverão ser monitoradas:

- referências órfãs;
- chaves estrangeiras inválidas;
- relacionamentos quebrados;
- vínculos entre edições incorretos;
- entidades desativadas indevidamente referenciadas.

---

## 43. Integridade documental

Documentos deverão preservar:

- identidade;
- versão;
- autoria;
- classificação;
- checksum;
- caminho;
- estado;
- histórico de alterações.

---

## 44. Integridade histórica

Nenhuma correção deverá destruir:

- o valor anterior;
- o contexto;
- a fonte;
- a edição;
- a justificativa;
- a autoria;
- a sequência temporal.

---

## 45. Confiabilidade

Confiabilidade é o grau em que o dado poderá ser utilizado com segurança institucional para sua finalidade declarada.

A confiabilidade dependerá de:

- fonte;
- validação;
- consistência;
- evidência;
- responsável;
- atualidade;
- histórico;
- ausência de anomalias críticas.

---

## 46. Níveis de confiabilidade

Os níveis poderão ser:

| Nível | Definição |
|---|---|
| `verified` | Verificado por fonte confiável |
| `institutionally-confirmed` | Confirmado por autoridade competente |
| `documented` | Sustentado por documento |
| `community-reported` | Relato comunitário identificado |
| `provisional` | Provisório, aguardando confirmação |
| `contested` | Objeto de divergência |
| `unverified` | Ainda não verificado |
| `unreliable` | Não adequado para uso oficial |

---

## 47. Confiabilidade da fonte

A fonte deverá ser avaliada quanto a:

- autoridade;
- proximidade com o fato;
- autenticidade;
- data;
- consistência;
- responsabilidade;
- verificabilidade;
- interesse envolvido;
- preservação.

---

## 48. Fontes divergentes

Quando fontes legítimas divergirem, deverão ser preservados:

- os valores;
- as fontes;
- as datas;
- os contextos;
- os responsáveis;
- a análise;
- o estado da divergência;
- a decisão institucional.

---

## 49. Acessibilidade

Acessibilidade é o grau em que os dados podem ser encontrados, compreendidos e utilizados pelas pessoas autorizadas, inclusive mediante tecnologias assistivas.

Ela deverá considerar:

- localização;
- formato;
- linguagem;
- contraste;
- legibilidade;
- estrutura;
- descrição;
- navegação;
- compatibilidade;
- nível de acesso.

---

## 50. Acessibilidade não é publicidade irrestrita

Um dado poderá ser acessível às pessoas autorizadas e permanecer protegido do público.

A qualidade deverá compatibilizar:

- acesso;
- privacidade;
- segurança;
- preservação;
- transparência;
- direitos.

---

## 51. Encontrabilidade

Todo dado relevante deverá poder ser localizado por meio de:

- identificador;
- título;
- categoria;
- edição;
- pessoa;
- atividade;
- local;
- data;
- fonte;
- metadados.

---

## 52. Compreensibilidade

Os dados deverão utilizar:

- nomes claros;
- definições;
- vocabulários controlados;
- contexto;
- unidades;
- formatos documentados;
- descrições acessíveis;
- linguagem proporcional ao público.

---

## 53. Rastreabilidade

Rastreabilidade é a capacidade de reconstruir a origem, as transformações, as validações, as aprovações, as publicações, as correções e a preservação de um dado.

---

## 54. Cadeia de rastreabilidade

```text
ORIGEM
  ↓
RECEBIMENTO
  ↓
IDENTIFICAÇÃO
  ↓
CLASSIFICAÇÃO
  ↓
VALIDAÇÃO
  ↓
APROVAÇÃO
  ↓
PUBLICAÇÃO
  ↓
CORREÇÃO
  ↓
ARQUIVAMENTO
  ↓
PRESERVAÇÃO
```

---

## 55. Metadados mínimos de rastreabilidade

Registros críticos deverão possuir:

```text
createdAt
createdBy
updatedAt
updatedBy
sourceId
validationStatus
validatedBy
validatedAt
approvedBy
approvedAt
version
changeReason
preservationStatus
```

---

## 56. Contextualização

Contextualização é o grau em que o dado preserva o ambiente necessário à sua correta interpretação.

Deverão ser preservados, quando aplicáveis:

- edição;
- período;
- local;
- função;
- grupo;
- atividade;
- fonte;
- finalidade;
- estado;
- nível de certeza.

---

## 57. Perda de contexto

Será considerada perda de qualidade:

- imagem sem data;
- atividade sem edição;
- pessoa sem função contextual;
- documento sem versão;
- relato sem fonte;
- local sem classificação;
- publicação sem canal;
- correção sem justificativa.

---

## 58. Autenticidade

Autenticidade é a capacidade de demonstrar que o dado ou documento é aquilo que declara ser.

Poderão ser utilizados:

- autoria;
- assinatura;
- aprovação;
- checksum;
- metadados;
- cadeia de custódia;
- registro de versão;
- origem;
- comparação documental.

---

## 59. Preservação

Preservação é o grau em que a qualidade poderá ser mantida ao longo do tempo.

Deverão ser preservados:

- conteúdo;
- contexto;
- estrutura;
- identificadores;
- relacionamentos;
- versões;
- fontes;
- evidências;
- direitos;
- metadados.

---

## 60. Interoperabilidade

Interoperabilidade é o grau em que o dado pode ser compartilhado e utilizado entre sistemas sem perda de significado.

Ela deverá considerar:

- formatos abertos;
- esquemas documentados;
- identificadores estáveis;
- vocabulários controlados;
- codificação;
- datas;
- tipos;
- referências;
- versões.

---

## 61. Segurança

A qualidade deverá incluir a proteção contra:

- alteração indevida;
- exclusão;
- corrupção;
- acesso não autorizado;
- vazamento;
- fraude;
- substituição silenciosa;
- perda de disponibilidade.

---

## 62. Qualidade por classe de dado

A avaliação deverá considerar a classe:

| Classe | Ênfase principal |
|---|---|
| Permanente | Continuidade e preservação |
| Anual | Atualidade e vínculo com a edição |
| Compartilhada | Consistência e reutilização |
| Histórica | Autenticidade e contexto |
| Pessoal | Exatidão, minimização e proteção |
| Cultural | Legitimidade e soberania cultural |
| Técnica | Integridade e interoperabilidade |
| Arquivística | Cadeia de custódia e preservação |

---

## 63. Dados críticos

Serão considerados críticos os dados que impactem:

- programação;
- segurança;
- pessoas;
- menores;
- residências privadas;
- direitos;
- memória coletiva;
- identidade cultural;
- publicação oficial;
- continuidade operacional;
- edição fundadora.

---

## 64. Níveis de qualidade

Os níveis oficiais poderão ser:

| Nível | Definição |
|---|---|
| Excelente | Atende integralmente aos requisitos |
| Adequado | Atende aos requisitos essenciais |
| Condicional | Pode ser utilizado com ressalvas |
| Insuficiente | Requer correção antes do uso |
| Crítico | Não poderá ser utilizado ou publicado |

---

## 65. Classificação técnica

Poderão ser utilizados estados técnicos:

```text
excellent
acceptable
conditional
insufficient
critical
```

---

## 66. Pontuação de qualidade

Poderá ser utilizada pontuação de `0` a `100`.

Exemplo:

| Faixa | Classificação |
|---|---|
| 95–100 | Excelente |
| 85–94 | Adequado |
| 70–84 | Condicional |
| 50–69 | Insuficiente |
| 0–49 | Crítico |

A pontuação não deverá substituir análise humana em dados culturais, históricos ou pessoais.

---

## 67. Pesos por dimensão

As dimensões poderão possuir pesos diferentes conforme a entidade.

Exemplo para atividade:

| Dimensão | Peso |
|---|---:|
| Exatidão | 20 |
| Completude | 15 |
| Consistência | 15 |
| Atualidade | 15 |
| Validade | 15 |
| Integridade | 10 |
| Rastreabilidade | 10 |

---

## 68. Regra de bloqueio

Mesmo com pontuação geral elevada, uma falha crítica poderá impedir a publicação.

Exemplos:

- ausência de autorização de imagem;
- coordenada privada exposta;
- referência órfã;
- nome de pessoa incorreto;
- atividade vinculada à edição errada;
- documento corrompido.

---

## 69. Níveis mínimos aceitáveis

Nenhum dado crítico deverá ser publicado quando apresentar:

```text
exatidão inferior ao nível adequado;
integridade crítica comprometida;
referência órfã;
ausência de fonte;
violação de privacidade;
aprovação ausente;
anomalia bloqueadora.
```

---

## 70. Indicadores de qualidade

Os indicadores mínimos serão:

- taxa de completude;
- taxa de validade;
- taxa de unicidade;
- taxa de integridade referencial;
- taxa de atualização;
- taxa de rastreabilidade;
- taxa de registros com fonte;
- taxa de registros aprovados;
- taxa de anomalias;
- tempo médio de correção;
- reincidência;
- qualidade da edição fundadora.

---

## 71. Taxa de completude

```text
Campos obrigatórios preenchidos
------------------------------- × 100
Campos obrigatórios esperados
```

---

## 72. Taxa de validade

```text
Registros válidos
----------------- × 100
Registros avaliados
```

---

## 73. Taxa de unicidade

```text
Registros canônicos sem duplicidade
----------------------------------- × 100
Total de registros avaliados
```

---

## 74. Taxa de integridade referencial

```text
Referências válidas
------------------- × 100
Total de referências avaliadas
```

---

## 75. Taxa de rastreabilidade

```text
Registros com origem e histórico completos
------------------------------------------ × 100
Registros críticos avaliados
```

---

## 76. Índice de atualidade

O índice deverá considerar:

- data da última atualização;
- frequência esperada;
- prazo de revisão;
- estado operacional;
- validade da fonte.

---

## 77. Taxa de dados com fonte

```text
Registros com fonte identificada
-------------------------------- × 100
Registros avaliados
```

---

## 78. Taxa de anomalias

```text
Registros com anomalias
----------------------- × 100
Registros avaliados
```

---

## 79. Monitoramento

A qualidade deverá ser monitorada:

- antes da publicação;
- após publicação;
- durante atualização;
- antes de migração;
- depois de migração;
- no encerramento da edição;
- durante auditoria;
- após incidente;
- periodicamente.

---

## 80. Monitoramento automatizado

Automações poderão detectar:

- campos ausentes;
- tipos inválidos;
- duplicidades;
- referências órfãs;
- datas incoerentes;
- links quebrados;
- arquivos ausentes;
- valores fora do domínio;
- versões conflitantes.

---

## 81. Limites da automação

A automação não deverá decidir isoladamente sobre:

- legitimidade cultural;
- valor histórico;
- divergência comunitária;
- autenticidade de memória;
- adequação de imagem;
- interesse superior de menores;
- representação institucional;
- aprovação definitiva.

---

## 82. Supervisão humana

A supervisão humana será obrigatória para:

- dados culturais;
- dados históricos;
- nomes próprios;
- funções;
- atividades oficiais;
- correções materiais;
- dados pessoais;
- menores;
- residências;
- conteúdos audiovisuais;
- divergências;
- dados produzidos por inteligência artificial.

---

## 83. Perfil de qualidade

Cada entidade crítica poderá possuir um perfil.

Exemplo:

```json
{
  "entityId": "activity-2026-05-23-reza-imperatriz",
  "qualityStatus": "acceptable",
  "accuracy": 100,
  "completeness": 95,
  "consistency": 100,
  "timeliness": 90,
  "traceability": 100,
  "evaluatedAt": "2026-08-02"
}
```

---

## 84. Registro de avaliação

Toda avaliação relevante deverá registrar:

```text
entityId
qualityModelVersion
evaluatedAt
evaluatedBy
dimensions
score
status
anomalies
recommendations
evidenceIds
```

---

## 85. Anomalia de dados

Anomalia é qualquer condição que indique possível redução da qualidade.

Exemplos:

- valor incomum;
- campo ausente;
- duplicidade;
- contradição;
- alteração inesperada;
- referência quebrada;
- atraso de atualização;
- fonte ausente;
- divergência histórica.

---

## 86. Anomalia não é automaticamente erro

Uma anomalia poderá representar:

- exceção legítima;
- evento raro;
- mudança institucional;
- tradição específica;
- registro histórico singular;
- erro;
- fraude;
- falha de migração.

Toda anomalia crítica deverá ser analisada antes da correção.

---

## 87. Tipos de anomalia

| Tipo | Exemplo |
|---|---|
| Estrutural | Campo ausente |
| Semântica | Valor incoerente |
| Temporal | Data incompatível |
| Referencial | Entidade inexistente |
| Estatística | Valor fora do padrão |
| Histórica | Divergência entre versões |
| Cultural | Classificação inadequada |
| Técnica | Arquivo corrompido |
| Editorial | Grafia conflitante |
| Privacidade | Exposição indevida |

---

## 88. Níveis de severidade

| Nível | Tratamento |
|---|---|
| Informativo | Registro para acompanhamento |
| Baixo | Correção programada |
| Médio | Revisão prioritária |
| Alto | Bloqueio de aprovação |
| Crítico | Contenção imediata |

---

## 89. Tratamento de anomalias

```text
DETECTAR
   ↓
REGISTRAR
   ↓
CLASSIFICAR
   ↓
CONTER
   ↓
INVESTIGAR
   ↓
CORRIGIR OU JUSTIFICAR
   ↓
REVALIDAR
   ↓
AUDITAR
   ↓
PRESERVAR A EVIDÊNCIA
```

---

## 90. Registro de anomalia

```text
anomalyId
entityId
anomalyType
severity
detectedAt
detectedBy
description
evidenceIds
status
resolution
resolvedAt
responsible
```

---

## 91. Correção de dados

Toda correção deverá:

- preservar o valor anterior;
- indicar o valor novo;
- registrar a fonte;
- identificar o responsável;
- registrar a data;
- apresentar justificativa;
- atualizar a versão;
- revalidar relacionamentos;
- avaliar impacto.

---

## 92. Correção automática

Correções automáticas somente serão admitidas para operações previsíveis e documentadas, como:

- remoção de espaços duplicados;
- normalização de codificação;
- padronização de formato;
- conversão sem perda;
- atualização controlada de índices.

---

## 93. Correção humana obrigatória

Será obrigatória quando envolver:

- nomes;
- datas oficiais;
- horários oficiais;
- funções;
- locais;
- memória;
- contexto cultural;
- direitos;
- autorizações;
- publicações;
- divergências históricas.

---

## 94. Proibição de correção silenciosa

Nenhuma correção material deverá ocorrer sem:

- registro;
- justificativa;
- responsável;
- preservação do valor anterior;
- data;
- nova versão, quando aplicável.

---

## 95. Qualidade na entrada

Dados recebidos deverão passar por:

1. identificação da origem;

2. classificação;

3. validação inicial;

4. verificação de completude;

5. detecção de duplicidade;

6. avaliação de privacidade;

7. registro do estado;

8. encaminhamento para validação humana.

---

## 96. Qualidade no processamento

Durante transformações deverão ser preservados:

- valor original;
- regra aplicada;
- responsável;
- data;
- versão da regra;
- resultado;
- erros;
- evidências.

---

## 97. Qualidade na publicação

Antes da publicação deverão ser avaliados:

- exatidão;
- completude;
- consistência;
- atualidade;
- direitos;
- privacidade;
- acessibilidade;
- aprovação;
- versão;
- preservação.

---

## 98. Qualidade após a publicação

Após a publicação deverão ser verificados:

- conteúdo exibido;
- links;
- mídias;
- formatação;
- acessibilidade;
- correspondência com a versão aprovada;
- integridade;
- ausência de exposição indevida.

---

## 99. Qualidade no arquivamento

Antes do arquivamento deverão ser confirmados:

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

## 100. Qualidade em migrações

Toda migração deverá preservar:

- registros;
- identificadores;
- campos;
- tipos;
- referências;
- versões;
- fontes;
- autorizações;
- metadados;
- histórico;
- contexto da edição.

---

## 101. Comparação pré e pós-migração

Deverá ser produzido relatório contendo:

```text
registros antes
registros depois
registros migrados
registros rejeitados
duplicidades
referências órfãs
campos perdidos
transformações
anomalias
qualidade final
```

---

## 102. Qualidade em integrações

Dados recebidos por integração deverão ser avaliados quanto a:

- origem;
- autenticação;
- estrutura;
- versão;
- atualidade;
- duplicidade;
- integridade;
- mapeamento;
- rastreabilidade;
- autorização.

---

## 103. Qualidade de dados externos

Dados externos não deverão ser considerados de qualidade apenas por virem de plataforma reconhecida.

Deverão ser avaliados:

- autoridade;
- disponibilidade;
- estabilidade;
- atualização;
- licença;
- integridade;
- compatibilidade;
- preservação.

---

## 104. Qualidade de URLs

URLs críticas deverão registrar:

```text
verifiedAt
lastSuccessfulAccessAt
lastFailureAt
verificationStatus
```

Links quebrados deverão ser tratados como anomalias.

---

## 105. Qualidade de documentos

Documentos deverão possuir:

- identificador;
- título;
- versão;
- caminho;
- autoria;
- classificação;
- fonte;
- aprovação;
- checksum;
- preservação.

---

## 106. Qualidade de imagens

Imagens deverão preservar:

- original;
- autoria;
- data;
- contexto;
- edição;
- atividade;
- pessoas retratadas;
- autorização;
- licença;
- descrição acessível;
- versão publicada.

---

## 107. Qualidade de áudios

Áudios deverão preservar:

- original;
- autoria;
- participantes;
- contexto;
- data;
- duração;
- formato;
- autorização;
- transcrição, quando necessária;
- significado cultural.

---

## 108. Qualidade de vídeos

Vídeos deverão preservar:

- original;
- autoria;
- data;
- local;
- edição;
- atividade;
- pessoas;
- direitos de imagem;
- trilha sonora;
- licença;
- legendas;
- contexto.

---

## 109. Qualidade de pessoas e funções

Registros de pessoas e funções deverão assegurar:

- grafia correta;
- pessoa canônica;
- função válida;
- edição correspondente;
- período;
- fonte;
- ausência de duplicidade;
- proteção de dados;
- aprovação.

---

## 110. Qualidade dos festeiros

Todo registro de festeiro deverá possuir:

```text
editionId
personId
roleId
sourceId
validationStatus
approvalStatus
```

A pessoa não deverá ser duplicada para representar sua participação anual.

---

## 111. Qualidade dos grupos tradicionais

Os grupos oficiais deverão utilizar entidades permanentes:

```text
group-congo
group-conguinho
group-chorado
group-choradinho
```

Participações anuais deverão ser registradas por relacionamento.

---

## 112. Qualidade das atividades

Toda atividade deverá possuir:

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

Deverá ser avaliada quanto a:

- data;
- horário;
- local;
- categoria;
- grupo;
- responsável;
- fonte;
- publicação;
- preservação.

---

## 113. Qualidade dos locais

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

## 114. Qualidade de residências privadas

A qualidade não dependerá da publicação da coordenada exata.

Um registro poderá ser de alta qualidade quando possuir:

- identificação interna;
- classificação privada;
- autorização registrada;
- acesso controlado;
- referência pública segura;
- contexto preservado.

---

## 115. Qualidade das fontes

Toda fonte deverá possuir:

- identificador;
- tipo;
- descrição;
- responsável;
- data;
- confiabilidade;
- estado de verificação;
- relação com o dado.

---

## 116. Qualidade de autorizações

Autorizações deverão possuir:

- titular;
- finalidade;
- escopo;
- data;
- vigência;
- documento;
- estado;
- condições;
- possibilidade de revogação.

---

## 117. Qualidade de dados pessoais

Dados pessoais deverão ser avaliados quanto a:

- exatidão;
- necessidade;
- minimização;
- atualização;
- acesso;
- segurança;
- retenção;
- publicação;
- direitos do titular.

---

## 118. Qualidade de dados de menores

A qualidade deverá incorporar proteção reforçada.

Nenhum indicador de completude poderá justificar coleta ou publicação excessiva de dados de crianças e adolescentes.

---

## 119. Qualidade de dados históricos

Dados históricos deverão preservar:

- fonte;
- contexto;
- autoria;
- data;
- classificação epistemológica;
- versão;
- divergência;
- grau de certeza;
- integridade.

---

## 120. Estados históricos

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

A qualidade dependerá da classificação correta, não apenas do grau de confirmação.

---

## 121. Qualidade de conteúdo automatizado

Dados gerados ou transformados por automação deverão registrar:

```text
automationId
rulesVersion
sourceIds
generatedAt
humanReviewer
validationStatus
```

---

## 122. Qualidade de conteúdo produzido com inteligência artificial

Conteúdos produzidos ou modificados com inteligência artificial deverão ser avaliados quanto a:

- fontes;
- exatidão;
- invenções;
- distorções;
- viés;
- contexto;
- autoria;
- direitos;
- autenticidade;
- soberania cultural;
- validação humana.

---

## 123. Proibição de preenchimento inventado

Nenhuma lacuna deverá ser preenchida automaticamente com valor não confirmado.

Deverão ser utilizados estados legítimos de ausência.

---

## 124. Melhoria contínua

A melhoria contínua deverá seguir:

```text
MEDIR
  ↓
ANALISAR
  ↓
PRIORIZAR
  ↓
CORRIGIR
  ↓
VALIDAR
  ↓
MONITORAR
  ↓
DOCUMENTAR
  ↓
PRESERVAR
```

---

## 125. Plano de melhoria

Todo plano deverá registrar:

- problema;
- dimensão afetada;
- impacto;
- prioridade;
- responsável;
- ação;
- prazo;
- indicador;
- resultado;
- evidência.

---

## 126. Priorização

A prioridade deverá considerar:

- criticidade;
- risco;
- número de registros afetados;
- impacto cultural;
- impacto institucional;
- exposição pública;
- edição;
- proximidade de atividade;
- possibilidade de perda histórica.

---

## 127. Prevenção de reincidência

Após correção relevante deverão ser avaliados:

- causa raiz;
- processo;
- esquema;
- validação;
- treinamento;
- automação;
- documentação;
- responsabilidade;
- controles preventivos.

---

## 128. Causa raiz

A análise poderá utilizar categorias:

```text
erro humano
fonte incompleta
regra inadequada
falha de integração
falha de migração
ausência de validação
problema de comunicação
duplicidade
obsolescência
falha de preservação
```

---

## 129. Gestão de problemas recorrentes

Problemas recorrentes deverão gerar:

- revisão de regra;
- melhoria de formulário;
- treinamento;
- controle automático;
- reforço de aprovação;
- ajuste de esquema;
- auditoria direcionada.

---

## 130. Auditoria de qualidade

A auditoria deverá verificar:

- registros incompletos;
- dados inválidos;
- duplicidades;
- referências órfãs;
- fontes ausentes;
- dados desatualizados;
- anomalias não tratadas;
- correções silenciosas;
- falhas de rastreabilidade;
- violações de privacidade;
- perda de contexto;
- alterações na edição fundadora.

---

## 131. Periodicidade

A auditoria poderá ocorrer:

- antes da publicação;
- após publicação crítica;
- no encerramento da edição;
- antes e depois de migração;
- após incidente;
- após mudança de esquema;
- periodicamente;
- por amostragem;
- por risco.

---

## 132. Evidências de qualidade

Deverão ser preservadas:

- relatórios;
- registros de validação;
- fontes;
- capturas;
- documentos;
- logs;
- checksums;
- tabelas comparativas;
- decisões;
- pareceres;
- correções;
- auditorias.

---

## 133. Painel de qualidade

O Portal poderá manter painel contendo:

- situação geral;
- indicadores;
- anomalias abertas;
- registros críticos;
- tendências;
- prazos;
- responsáveis;
- edições afetadas;
- riscos;
- evolução das correções.

---

## 134. Alertas

Alertas poderão ser emitidos para:

- dado crítico sem fonte;
- programação incompleta;
- URL quebrada;
- autorização expirada;
- referência órfã;
- duplicidade;
- arquivo ausente;
- alteração não aprovada;
- registro fundador modificado;
- queda do índice de qualidade.

---

## 135. Responsabilidades

A qualidade dos dados é responsabilidade compartilhada.

| Atividade | Responsabilidade principal |
|---|---|
| Produção do dado | Área de origem |
| Classificação | Governança de dados |
| Validação estrutural | Curadoria técnica |
| Validação semântica | Governança de dados |
| Validação cultural | Curadoria cultural |
| Validação editorial | Curadoria editorial |
| Privacidade | Segurança e proteção de dados |
| Aprovação | Autoridade competente |
| Monitoramento | Gestão de qualidade |
| Auditoria | Auditoria institucional |
| Preservação | Gestão documental e arquivística |

---

## 136. Responsável pelo dado

Todo dado crítico deverá possuir responsável identificável.

O responsável deverá:

- conhecer a finalidade;
- verificar a fonte;
- promover correções;
- responder por atualizações;
- cooperar com auditorias;
- preservar evidências.

---

## 137. Custodiante técnico

O custodiante técnico deverá:

- manter a disponibilidade;
- proteger a integridade;
- aplicar controles;
- executar backups;
- monitorar falhas;
- preservar versões;
- apoiar recuperação.

---

## 138. Curadoria cultural

A curadoria cultural deverá avaliar:

- legitimidade;
- linguagem;
- tradição;
- contexto;
- representação;
- relações comunitárias;
- limites de publicação;
- preservação da memória.

---

## 139. Autoridade institucional

A autoridade institucional deverá:

- aprovar critérios;
- resolver conflitos;
- validar exceções;
- definir prioridades;
- assegurar recursos;
- proteger a edição fundadora.

---

## 140. Exceções

Exceções aos níveis mínimos somente poderão ocorrer quando:

- houver justificativa;
- o risco for avaliado;
- o prazo for definido;
- o responsável for identificado;
- a autoridade aprovar;
- o estado estiver visível;
- a evidência for preservada;
- não houver violação de direitos.

---

## 141. Qualidade provisória

Um dado poderá ser utilizado provisoriamente quando:

- sua incompletude estiver identificada;
- não houver risco crítico;
- existir fonte mínima;
- houver responsável;
- existir prazo de regularização;
- não for apresentado como definitivo.

---

## 142. Critérios mínimos de aprovação

Um dado somente poderá ser aprovado quando:

- possuir finalidade legítima;
- possuir fonte;
- atender às regras de validação;
- alcançar nível mínimo de qualidade;
- preservar integridade;
- respeitar privacidade;
- possuir responsável;
- permitir rastreabilidade;
- ser compatível com a preservação histórica.

---

## 143. Critérios mínimos de publicação

Um dado somente poderá ser publicado quando:

- estiver validado;
- estiver aprovado;
- possuir qualidade adequada;
- não apresentar anomalia bloqueadora;
- respeitar direitos;
- preservar acessibilidade;
- possuir versão;
- possuir canal autorizado;
- possuir preservação prevista.

---

## 144. Lista mínima de verificação geral

Antes da aprovação deverá ser confirmado:

- [ ] identificador válido;
- [ ] entidade definida;
- [ ] edição vinculada, quando aplicável;
- [ ] fonte registrada;
- [ ] exatidão verificada;
- [ ] completude avaliada;
- [ ] consistência verificada;
- [ ] atualidade avaliada;
- [ ] unicidade verificada;
- [ ] validade confirmada;
- [ ] integridade preservada;
- [ ] confiabilidade classificada;
- [ ] acessibilidade avaliada;
- [ ] rastreabilidade registrada;
- [ ] privacidade avaliada;
- [ ] anomalias tratadas;
- [ ] responsável identificado;
- [ ] aprovação registrada;
- [ ] preservação definida.

---

## 145. Lista mínima para atividades

- [ ] `id` válido;
- [ ] `editionId` existente;
- [ ] título exato;
- [ ] categoria válida;
- [ ] data confirmada;
- [ ] horário confirmado ou classificado;
- [ ] local validado;
- [ ] regra cultural atendida;
- [ ] grupo relacionado, quando aplicável;
- [ ] fonte registrada;
- [ ] responsável identificado;
- [ ] publicação autorizada;
- [ ] qualidade mínima alcançada.

---

## 146. Lista mínima para pessoas e funções

- [ ] pessoa canônica existente;
- [ ] nome validado;
- [ ] função válida;
- [ ] edição vinculada;
- [ ] período definido;
- [ ] fonte registrada;
- [ ] duplicidade verificada;
- [ ] privacidade avaliada;
- [ ] aprovação registrada.

---

## 147. Lista mínima para documentos

- [ ] identificador institucional;
- [ ] título;
- [ ] caminho oficial;
- [ ] versão;
- [ ] autoria;
- [ ] classificação;
- [ ] fonte;
- [ ] aprovação;
- [ ] checksum;
- [ ] links verificados;
- [ ] versão anterior preservada;
- [ ] estado de vigência;
- [ ] qualidade mínima alcançada.

---

## 148. Lista mínima para mídias

- [ ] arquivo íntegro;
- [ ] formato permitido;
- [ ] original preservado;
- [ ] autoria registrada;
- [ ] edição vinculada;
- [ ] contexto definido;
- [ ] pessoas avaliadas;
- [ ] autorizações verificadas;
- [ ] licença registrada;
- [ ] descrição acessível;
- [ ] versão publicada identificada;
- [ ] qualidade mínima alcançada.

---

## 149. Não conformidades

Serão consideradas não conformidades:

- dado inexato;
- campo obrigatório ausente;
- inconsistência;
- registro desatualizado;
- duplicidade;
- valor inválido;
- referência órfã;
- arquivo corrompido;
- fonte ausente;
- baixa confiabilidade não declarada;
- dado inacessível indevidamente;
- ausência de rastreabilidade;
- anomalia não tratada;
- correção silenciosa;
- perda de contexto;
- comprometimento da edição fundadora.

---

## 150. Classificação das não conformidades

| Nível | Definição |
|---|---|
| Baixa | Impacto limitado |
| Média | Compromete manutenção ou compreensão |
| Alta | Compromete publicação ou operação |
| Crítica | Compromete direitos, cultura, memória ou continuidade |

---

## 151. Tratamento das não conformidades

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

## 152. Indicadores mínimos institucionais

Deverão ser monitorados:

- qualidade geral;
- exatidão;
- completude;
- consistência;
- atualidade;
- unicidade;
- validade;
- integridade;
- confiabilidade;
- acessibilidade;
- rastreabilidade;
- anomalias abertas;
- tempo de correção;
- reincidência;
- qualidade da edição fundadora.

---

## 153. Relatório de qualidade

O relatório deverá conter:

```text
período
escopo
edição
registros avaliados
dimensões
indicadores
anomalias
não conformidades
correções
riscos
responsáveis
recomendações
estado final
```

---

## 154. Preservação da qualidade histórica

A qualidade histórica deverá preservar:

- o valor original;
- o contexto original;
- a fonte;
- o estado de validação;
- a versão;
- a classificação;
- as correções;
- as divergências;
- a decisão institucional.

---

## 155. Proteção da edição fundadora

Os dados da FESTANÇA 2026 deverão permanecer:

- identificados;
- contextualizados;
- versionados;
- rastreáveis;
- vinculados às fontes;
- protegidos contra sobrescrita;
- recuperáveis;
- preservados integralmente.

---

## 156. Indicadores da edição fundadora

Deverão ser monitorados, no mínimo:

- registros fundadores identificados;
- registros com fonte;
- atividades validadas;
- pessoas e funções validadas;
- locais classificados;
- mídias autorizadas;
- documentos versionados;
- relacionamentos íntegros;
- anomalias abertas;
- correções históricas.

---

## 157. Imutabilidade histórica controlada

Após o encerramento da edição fundadora, toda correção deverá ocorrer mediante:

```text
nova versão
+
justificativa
+
fonte
+
responsável
+
evidência
+
preservação do valor anterior
```

---

## 158. Continuidade entre edições

As futuras edições deverão:

- reutilizar entidades permanentes;
- preservar identificadores;
- registrar vínculos anuais;
- manter compatibilidade;
- evitar duplicidades;
- respeitar a memória histórica;
- preservar a qualidade da edição fundadora.

---

## 159. Comparabilidade entre edições

Indicadores poderão ser comparados entre edições desde que:

- utilizem definições equivalentes;
- tenham regras versionadas;
- preservem contexto;
- não distorçam diferenças históricas;
- identifiquem mudanças metodológicas.

---

## 160. Proibição de ranking cultural inadequado

Indicadores de qualidade não deverão ser utilizados para:

- hierarquizar tradições;
- diminuir grupos;
- comparar dignidade cultural;
- deslegitimar memórias;
- substituir avaliação comunitária;
- impor padronização destrutiva.

---

## 161. Cadeia de responsabilidade

```text
ORIGEM DO DADO
      ↓
GOVERNANÇA DE DADOS
      ↓
VALIDAÇÃO TÉCNICA
      ↓
CURADORIA CULTURAL
      ↓
CURADORIA EDITORIAL
      ↓
SEGURANÇA E PRIVACIDADE
      ↓
AUTORIDADE APROVADORA
      ↓
MONITORAMENTO
      ↓
AUDITORIA
      ↓
PRESERVAÇÃO
```

---

## 162. Declaração constitucional

Este documento declara que:

1. nenhum dado será considerado de qualidade apenas por estar armazenado;

2. nenhum registro incompleto será apresentado como completo;

3. nenhuma informação desatualizada será apresentada como atual;

4. nenhuma duplicidade será ignorada por conveniência;

5. nenhuma referência órfã será considerada íntegra;

6. nenhuma fonte ausente será ocultada;

7. nenhuma anomalia crítica será liberada sem tratamento;

8. nenhuma correção material será silenciosa;

9. nenhuma pontuação substituirá a validação humana necessária;

10. nenhuma automação prevalecerá sobre a soberania cultural;

11. nenhuma edição futura reduzirá a integridade da edição fundadora;

12. toda qualidade deverá ser verificável, mensurável, responsável e preservável.

---

## 163. Princípio maior

**IDENTIFICAR ANTES DE MEDIR.**

**CLASSIFICAR ANTES DE COMPARAR.**

**VALIDAR ANTES DE QUALIFICAR.**

**CONTEXTUALIZAR ANTES DE INTERPRETAR.**

**VERIFICAR ANTES DE CONFIAR.**

**MEDIR SEM DESUMANIZAR.**

**CORRIGIR SEM APAGAR.**

**MONITORAR SEM SUBSTITUIR A RESPONSABILIDADE.**

**MELHORAR SEM ROMPER A MEMÓRIA.**

**PRESERVAR ANTES DE MIGRAR.**

**EVOLUIR SEM PERDER A VERDADE DOCUMENTAL.**

---

## 164. Compromisso permanente

Toda gestão de qualidade de dados deverá proteger simultaneamente:

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

## 165. Referências institucionais essenciais

Este documento deverá ser interpretado em conjunto com:

- `docs/festanca/portal-architecture.md`;
- `docs/festanca/edition-schema.md`;
- `docs/festanca/publication-workflow.md`;
- `docs/festanca/data/data-architecture.md`;
- `docs/festanca/data/data-classification-model.md`;
- `docs/festanca/data/entity-relationship-model.md`;
- `docs/festanca/data/identifiers-and-references.md`;
- `docs/festanca/data/data-validation-rules.md`;
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
- `docs/festanca/governance/risk-management-and-resilience-policy.md`.

---

## 166. Estado inicial deste documento

```text
DOCUMENTO: data-quality-model.md
FUNÇÃO: Gestão constitucional da qualidade dos dados
REGIME: Permanente
EDIÇÃO FUNDADORA: FESTANÇA 2026
CRITICIDADE: Máxima
MUTABILIDADE: Estritamente controlada
PRESERVAÇÃO: Integral
EXATIDÃO: Obrigatória
COMPLETUDE: Mensurável
CONSISTÊNCIA: Obrigatória
ATUALIDADE: Proporcional à finalidade
UNICIDADE: Obrigatória
VALIDADE: Obrigatória
INTEGRIDADE: Obrigatória
CONFIABILIDADE: Classificada
ACESSIBILIDADE: Obrigatória conforme autorização
RASTREABILIDADE: Permanente
MONITORAMENTO: Contínuo e proporcional ao risco
MELHORIA CONTÍNUA: Obrigatória
VERSIONAMENTO: Obrigatório
APLICABILIDADE: Portal Permanente e edições anuais
```

---

## 167. Vigência

Este documento entra em vigor a partir de sua aprovação e publicação no repositório oficial.

Sua vigência será permanente.

Toda revisão deverá:

- preservar as versões anteriores;
- registrar justificativas;
- identificar responsáveis;
- apresentar análise de impacto;
- atualizar indicadores e critérios;
- documentar alterações metodológicas;
- manter comparabilidade histórica;
- preservar evidências;
- proteger dados pessoais;
- proteger a edição fundadora;
- respeitar os modelos constitucionais de dados;
- assegurar rastreabilidade integral.

---

## 168. Encerramento institucional

Seguimos juntos, passo a passo.

Com método.

Com segurança.

Com preservação integral da edição fundadora.

**SOMOS TODOS, AVANÇO.**

Ao encontro do futuro.

**AMÉM.**
