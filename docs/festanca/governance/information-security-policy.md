# Política Constitucional de Segurança da Informação do Portal Permanente da FESTANÇA

> Constituição destinada a regulamentar a proteção institucional, cultural, documental, técnica e operacional dos dados, documentos, credenciais, acessos, repositórios, códigos-fonte, cópias de segurança, integrações, ambientes, registros históricos e demais ativos digitais do Portal Permanente da FESTANÇA de Vila Bela da Santíssima Trindade – Mato Grosso – Brasil.

---

## 1. Identificação do documento

| Campo | Valor |
|---|---|
| Documento | Política Constitucional de Segurança da Informação do Portal Permanente da FESTANÇA |
| Caminho oficial | `docs/festanca/governance/information-security-policy.md` |
| Classificação | Documento constitucional de governança |
| Domínio | Segurança da informação e proteção dos ativos digitais |
| Regime | Permanente |
| Criticidade | Máxima |
| Mutabilidade | Estritamente controlada |
| Preservação | Integral, versionada, auditável e recuperável |
| Edição fundadora | FESTANÇA 2026 |
| Situação | Constituição oficial de segurança da informação |
| Versão inicial | `1.0.0` |
| Aplicabilidade | Portal Permanente e todas as edições anuais |
| Documento superior | `docs/festanca/governance/governance-model.md` |
| Documentos complementares | `roles-and-responsibilities.md`, `decision-model.md`, `change-control-policy.md`, `audit-and-compliance-policy.md` e `risk-management-policy.md` |

---

## 2. Finalidade

Esta Política estabelece o regime oficial de segurança da informação do Portal Permanente da FESTANÇA.

Sua finalidade é assegurar que todos os ativos institucionais, culturais, históricos, documentais e tecnológicos sejam protegidos contra:

- acesso não autorizado;
- alteração indevida;
- exclusão acidental ou deliberada;
- vazamento;
- corrupção;
- indisponibilidade;
- perda de autenticidade;
- perda de rastreabilidade;
- destruição de evidências;
- substituição silenciosa;
- uso incompatível com sua finalidade;
- descontinuidade operacional.

---

## 3. Missão da segurança da informação

A segurança da informação deverá proteger simultaneamente:

- a FESTANÇA;
- a comunidade;
- os grupos tradicionais;
- os festeiros;
- a autoridade institucional;
- a curadoria cultural;
- a memória histórica;
- os documentos;
- os dados;
- os sistemas;
- os repositórios;
- os ambientes;
- as credenciais;
- a edição fundadora;
- as futuras edições;
- a continuidade do Portal;
- o patrimônio cultural digital.

---

## 4. Princípio constitucional

A segurança deverá existir para preservar a cultura e assegurar a continuidade institucional.

Nenhuma medida de segurança deverá:

- destruir a memória;
- eliminar evidências legítimas;
- impedir auditoria;
- romper a rastreabilidade;
- substituir a validação cultural;
- concentrar poder sem controle;
- tornar o acervo irrecuperável;
- impedir a continuidade das futuras edições.

---

## 5. Fundamentos da segurança

A segurança da informação será sustentada pelos seguintes fundamentos:

```text
CONFIDENCIALIDADE
INTEGRIDADE
DISPONIBILIDADE
AUTENTICIDADE
RASTREABILIDADE
RESPONSABILIDADE
RECUPERABILIDADE
PRESERVAÇÃO HISTÓRICA
```

---

## 6. Confidencialidade

Confidencialidade é a garantia de que a informação será acessada somente por pessoas, funções, sistemas ou instituições autorizadas.

A confidencialidade deverá proteger especialmente:

- credenciais;
- senhas;
- tokens;
- chaves;
- dados pessoais;
- endereços residenciais;
- documentos internos;
- informações ainda não publicadas;
- registros de incidentes;
- decisões restritas;
- cópias de segurança protegidas.

---

## 7. Integridade

Integridade é a garantia de que a informação permaneça:

- correta;
- completa;
- autêntica;
- coerente;
- rastreável;
- protegida contra alterações indevidas.

A integridade deverá ser comprovada por:

- histórico Git;
- hashes;
- validações;
- revisão;
- auditoria;
- comparação de versões;
- registros de aprovação;
- evidências documentais.

---

## 8. Disponibilidade

Disponibilidade é a garantia de que informações, documentos e serviços estejam acessíveis quando necessários.

A disponibilidade deverá considerar:

- hospedagem;
- repositório;
- domínio;
- arquivos locais;
- ambientes de desenvolvimento;
- backups;
- ferramentas;
- conexão;
- documentação de recuperação;
- continuidade entre edições.

---

## 9. Autenticidade

Autenticidade é a garantia de que o ativo:

- possui origem conhecida;
- foi produzido por fonte legítima;
- não foi substituído silenciosamente;
- mantém relação com seu contexto;
- possui identidade verificável;
- conserva sua proveniência.

---

## 10. Rastreabilidade

Rastreabilidade é a capacidade de identificar:

- quem realizou uma ação;
- o que foi alterado;
- quando ocorreu;
- por que ocorreu;
- quem autorizou;
- quais arquivos foram afetados;
- qual versão foi produzida;
- quais evidências foram preservadas.

---

## 11. Recuperabilidade

Recuperabilidade é a capacidade de restaurar um ativo após:

- perda;
- corrupção;
- exclusão;
- falha;
- incidente;
- alteração indevida;
- indisponibilidade;
- desastre operacional.

---

## 12. Preservação histórica

A preservação histórica exige que os controles de segurança protejam:

- os originais;
- as versões anteriores;
- os registros de alteração;
- os documentos constitucionais;
- os dados fundadores;
- os pacotes de preservação;
- a cadeia de proveniência;
- a edição de 2026.

---

## 13. Objetivos da Política

Esta Política deverá:

1. proteger os ativos digitais;
2. impedir acessos indevidos;
3. proteger credenciais;
4. preservar dados históricos;
5. assegurar continuidade;
6. reduzir vulnerabilidades;
7. orientar permissões;
8. regulamentar backups;
9. proteger repositórios;
10. assegurar recuperação;
11. registrar incidentes;
12. proteger dados pessoais;
13. preservar evidências;
14. orientar integrações;
15. assegurar compatibilidade com futuras edições.

---

## 14. Escopo de aplicação

Esta Política aplica-se a:

```text
docs/festanca/
apps/festanca-2026/
apps/festanca-2027/
apps/festanca-2028/
apps/festanca-*/
assets/
data/
scripts/
workflows/
backups/
archives/
preservation-packages/
```

Também se aplica a:

- computadores;
- dispositivos móveis;
- Termux;
- Git;
- GitHub;
- hospedagem;
- domínios;
- navegadores;
- serviços em nuvem;
- ferramentas de edição;
- integrações;
- contas institucionais;
- mídias removíveis;
- canais de comunicação;
- ambientes locais e remotos.

---

## 15. Ativos protegidos

São ativos protegidos:

- documentos constitucionais;
- arquivos Markdown;
- HTML;
- CSS;
- JavaScript;
- JSON;
- schemas;
- imagens;
- vídeos;
- logotipos;
- mapas;
- dados culturais;
- programação anual;
- cadastros de festeiros;
- inventários de locais;
- dados dos grupos tradicionais;
- registros de curadoria;
- auditorias;
- certificados;
- commits;
- backups;
- hashes;
- credenciais;
- contas;
- domínios;
- conhecimento institucional.

---

## 16. Classificação da informação

Toda informação deverá ser classificada como:

```text
PÚBLICA
INTERNA
RESTRITA
CONFIDENCIAL
PATRIMONIAL
```

---

## 17. Informação pública

É pública a informação:

- aprovada para publicação;
- destinada ao público;
- culturalmente validada;
- editorialmente revisada;
- tecnicamente conferida;
- sem restrição de privacidade.

Exemplos:

- programação oficial;
- história aprovada;
- nomes públicos de festeiros;
- informações institucionais;
- conteúdos culturais autorizados;
- contatos oficiais.

---

## 18. Informação interna

É interna a informação destinada ao funcionamento do Portal, mas que não necessita publicação pública.

Exemplos:

- checklists;
- relatórios preliminares;
- registros de trabalho;
- observações de curadoria;
- planos técnicos;
- inventários em revisão;
- avaliações internas.

---

## 19. Informação restrita

É restrita a informação cujo acesso deverá ser limitado a funções autorizadas.

Exemplos:

- documentos aguardando aprovação;
- relatórios de riscos;
- relatórios de não conformidade;
- dados de contingência;
- registros de incidentes;
- informações operacionais sensíveis.

---

## 20. Informação confidencial

É confidencial a informação cuja exposição poderá provocar dano.

Exemplos:

- senhas;
- tokens;
- chaves privadas;
- códigos de recuperação;
- credenciais administrativas;
- documentos pessoais;
- dados privados;
- contatos não autorizados;
- endereços residenciais exatos.

---

## 21. Informação patrimonial

É patrimonial a informação cuja perda, adulteração ou descaracterização poderá afetar:

- a memória;
- a história;
- a autenticidade;
- a identidade cultural;
- a edição fundadora;
- o valor institucional do acervo.

Informações patrimoniais deverão possuir preservação reforçada.

---

## 22. Regra de classificação

Nenhuma informação deverá ser considerada pública somente porque está tecnicamente acessível.

A publicação dependerá de:

- autoridade;
- finalidade;
- validação;
- privacidade;
- segurança;
- contexto cultural;
- aprovação editorial.

---

## 23. Proprietário da informação

Todo conjunto relevante de informações deverá possuir proprietário institucional.

Compete ao proprietário:

- definir a classificação;
- autorizar acessos;
- aprovar uso;
- determinar preservação;
- revisar riscos;
- solicitar correções;
- definir descarte quando permitido.

---

## 24. Custodiante da informação

O custodiante é responsável pela proteção técnica ou documental do ativo.

Compete ao custodiante:

- armazenar;
- proteger;
- controlar acesso;
- manter backup;
- registrar alterações;
- apoiar recuperação;
- preservar evidências.

---

## 25. Usuário autorizado

Todo usuário autorizado deverá:

- acessar somente o necessário;
- proteger suas credenciais;
- não compartilhar senhas;
- respeitar a classificação;
- registrar alterações;
- comunicar incidentes;
- não copiar dados sem finalidade legítima;
- preservar a memória institucional.

---

## 26. Princípio do menor privilégio

Cada pessoa, função ou sistema deverá receber somente as permissões necessárias para cumprir sua responsabilidade.

Nenhum acesso administrativo deverá ser concedido por:

- conveniência;
- costume;
- amizade;
- informalidade;
- ausência de organização.

---

## 27. Necessidade de conhecer

O acesso a informações restritas ou confidenciais deverá ser concedido somente quando houver:

- função definida;
- necessidade comprovada;
- finalidade legítima;
- autorização;
- prazo;
- responsabilidade.

---

## 28. Segregação de funções

Sempre que possível, deverão ser separadas as funções de:

- criação;
- revisão;
- aprovação;
- publicação;
- administração;
- auditoria;
- restauração;
- certificação.

Nenhuma função crítica deverá controlar sozinha todo o processo.

---

## 29. Matriz básica de acesso

| Função | Acesso esperado |
|---|---|
| Autoridade institucional | Aprovação e supervisão |
| Coordenação-Geral | Administração institucional |
| Curadoria cultural | Validação cultural |
| Curadoria histórica | Validação histórica e documental |
| Governança editorial | Revisão e publicação |
| Governança técnica | Código, infraestrutura e recuperação |
| Auditoria | Leitura, verificação e evidências |
| Colaborador autorizado | Acesso limitado à tarefa |
| Público | Conteúdo formalmente publicado |

---

## 30. Identidade digital

Toda conta utilizada deverá possuir:

- titular definido;
- finalidade;
- nível de acesso;
- método de recuperação;
- registro de criação;
- situação atual;
- procedimento de revogação.

---

## 31. Contas institucionais

Contas institucionais não deverão depender exclusivamente de:

- memória pessoal;
- dispositivo único;
- número telefônico único;
- e-mail sem recuperação;
- pessoa sem substituto;
- credencial não documentada.

---

## 32. Contas compartilhadas

Contas compartilhadas deverão ser evitadas.

Quando forem inevitáveis, deverão possuir:

- justificativa;
- autorização;
- responsáveis identificados;
- credencial protegida;
- registro de uso;
- revisão periódica;
- plano de substituição.

---

## 33. Credenciais

São credenciais:

- senhas;
- PINs;
- tokens;
- chaves;
- certificados;
- códigos de recuperação;
- sessões;
- credenciais de serviços;
- chaves de API.

---

## 34. Proteção das credenciais

Credenciais não deverão ser:

- publicadas;
- incluídas em documentação pública;
- armazenadas em arquivos versionados;
- copiadas para mensagens abertas;
- exibidas em capturas públicas;
- compartilhadas sem autorização;
- reutilizadas de modo indiscriminado.

---

## 35. Senhas

Senhas deverão:

- ser exclusivas;
- possuir comprimento adequado;
- evitar informações previsíveis;
- não ser reutilizadas em serviços diferentes;
- ser alteradas após exposição;
- ser armazenadas em meio seguro;
- possuir recuperação controlada.

---

## 36. Autenticação multifator

A autenticação multifator deverá ser habilitada, sempre que disponível, para:

- GitHub;
- e-mail institucional;
- hospedagem;
- domínio;
- armazenamento em nuvem;
- serviços administrativos;
- contas com capacidade de publicação.

---

## 37. Códigos de recuperação

Códigos de recuperação deverão:

- ser guardados fora do dispositivo principal;
- permanecer protegidos;
- possuir acesso controlado;
- ser atualizados quando utilizados;
- não aparecer em capturas de tela públicas.

---

## 38. Chaves de API

Chaves de API deverão:

- possuir escopo mínimo;
- ser armazenadas fora do código público;
- ser rotacionadas quando necessário;
- possuir restrições de origem;
- ser desativadas quando não utilizadas;
- ser substituídas após exposição.

---

## 39. Segredos no repositório

É proibido inserir no repositório público:

```text
SENHAS
TOKENS
CHAVES PRIVADAS
CÓDIGOS DE RECUPERAÇÃO
CREDENCIAIS ADMINISTRATIVAS
DOCUMENTOS PESSOAIS
```

---

## 40. Arquivos de ambiente

Quando necessários, segredos deverão ser mantidos em arquivos apropriados, como:

```text
.env
.env.local
.env.production
```

Esses arquivos deverão constar em:

```text
.gitignore
```

Um modelo sem valores reais poderá ser mantido como:

```text
.env.example
```

---

## 41. Repositório oficial

O repositório deverá ser tratado como ativo institucional crítico.

Deverá possuir:

- proprietário definido;
- branch principal;
- histórico;
- política de commits;
- backups;
- controle de acesso;
- rastreabilidade;
- capacidade de exportação;
- documentação de recuperação.

---

## 42. Branch principal

A branch principal deverá conter somente estados:

- aprovados;
- validados;
- rastreáveis;
- tecnicamente íntegros;
- documentalmente compreendidos.

Alterações experimentais não deverão ser executadas diretamente sem controle.

---

## 43. Commits

Todo commit relevante deverá possuir:

- finalidade clara;
- mensagem compreensível;
- conjunto coerente de alterações;
- ausência de credenciais;
- relação com tarefa ou decisão;
- possibilidade de auditoria.

---

## 44. Alterações locais

Alterações locais deverão ser:

- identificadas;
- classificadas;
- revisadas;
- separadas de backups transitórios;
- validadas antes de commit;
- preservadas quando relevantes;
- descartadas somente com autorização.

---

## 45. Arquivos não rastreados

Arquivos não rastreados deverão ser classificados como:

```text
PERMANENTE
ANUAL
TRANSITÓRIO
BACKUP
AUDITORIA
ÓRFÃO
PENDENTE
```

Nenhum arquivo deverá ser excluído somente por estar fora do Git.

---

## 46. Cópias de segurança locais

Arquivos com extensões como:

```text
.bak
.bkp
.backup
.old
.tmp
```

deverão ser inventariados antes de:

- exclusão;
- consolidação;
- migração;
- arquivamento.

---

## 47. Integridade criptográfica

Ativos críticos deverão possuir verificação criptográfica por meio de:

```text
SHA-256
```

Exemplo de registro:

```text
ARQUIVO:
HASH SHA-256:
DATA:
ORIGEM:
RESPONSÁVEL:
FINALIDADE:
```

---

## 48. Divergência de hash

Uma divergência de hash deverá ser investigada quando o ativo deveria permanecer imutável.

A investigação deverá verificar:

- alteração autorizada;
- corrupção;
- erro de cópia;
- substituição;
- mudança de codificação;
- restauração inadequada;
- incidente.

---

## 49. Arquivos constitucionais

Documentos constitucionais deverão possuir:

- caminho oficial;
- versão;
- histórico Git;
- responsável;
- classificação;
- revisão controlada;
- preservação integral;
- cópia de segurança.

---

## 50. Proteção da edição fundadora

Os ativos da edição de 2026 deverão ser protegidos contra:

- sobrescrita;
- substituição por dados futuros;
- mudança silenciosa de significado;
- exclusão;
- mistura com outras edições;
- perda de contexto;
- alteração não rastreada.

---

## 51. Dados anuais

Cada edição deverá manter separação lógica e documental.

Exemplos:

```text
programacao-2026.json
programacao-2027.json
programacao-2028.json
```

Nenhuma edição futura deverá substituir arquivos fundadores.

---

## 52. Contratos de dados

Schemas e contratos deverão proteger:

- estrutura;
- tipos;
- campos obrigatórios;
- relacionamentos;
- identificadores;
- compatibilidade;
- validação;
- evolução controlada.

---

## 53. Validação de arquivos JSON

Todo arquivo JSON relevante deverá ser validado antes de:

- commit;
- publicação;
- migração;
- importação;
- restauração.

O arquivo deverá permanecer:

- sintaticamente válido;
- semanticamente coerente;
- compatível com seu schema;
- relacionado aos demais arquivos.

---

## 54. Proteção de dados pessoais

Dados pessoais deverão ser tratados com:

- finalidade;
- necessidade;
- minimização;
- autorização;
- segurança;
- limitação de acesso;
- revisão;
- descarte controlado.

---

## 55. Endereços residenciais

Endereços residenciais não deverão ser publicados com localização exata sem autorização expressa.

Quando não houver autorização, deverão ser utilizados:

- descrição aproximada;
- ponto público de referência;
- busca genérica;
- contato institucional;
- indicação de confirmação posterior.

---

## 56. Telefones e contatos

Telefones pessoais deverão ser publicados somente quando:

- houver autorização;
- existir finalidade;
- forem necessários;
- houver orientação sobre seu uso;
- não houver alternativa institucional adequada.

---

## 57. Imagens e vídeos

Antes da publicação deverão ser verificados:

- autorização;
- contexto;
- autoria;
- integridade;
- adequação cultural;
- presença de dados pessoais;
- identificação de menores;
- localização sensível;
- direitos de uso.

---

## 58. Metadados

Arquivos digitais poderão conter metadados sensíveis.

Antes da publicação deverá ser verificada a existência de:

- coordenadas;
- nome do dispositivo;
- autor;
- localização;
- datas internas;
- informações pessoais;
- dados técnicos desnecessários.

---

## 59. Ambientes

Os ambientes deverão ser classificados como:

```text
LOCAL
DESENVOLVIMENTO
TESTE
HOMOLOGAÇÃO
PRODUÇÃO
PRESERVAÇÃO
```

---

## 60. Ambiente local

O ambiente local deverá:

- possuir cópia conhecida;
- evitar exposição pública;
- manter arquivos organizados;
- preservar credenciais;
- registrar alterações;
- possuir possibilidade de backup.

---

## 61. Ambiente de desenvolvimento

O ambiente de desenvolvimento poderá conter alterações ainda não aprovadas.

Deverá permanecer separado do ambiente de produção.

---

## 62. Ambiente de teste

O ambiente de teste deverá ser utilizado para:

- validações;
- experimentos controlados;
- testes de restauração;
- testes de responsividade;
- testes de carregamento;
- verificações de compatibilidade.

---

## 63. Ambiente de produção

O ambiente de produção deverá conter somente:

- conteúdos aprovados;
- código validado;
- dados conferidos;
- recursos autorizados;
- configurações seguras;
- versões rastreáveis.

---

## 64. Ambiente de preservação

O ambiente de preservação deverá manter:

- originais;
- versões certificadas;
- hashes;
- inventários;
- relatórios;
- pacotes de preservação;
- registros de proveniência;
- documentação de restauração.

---

## 65. Dispositivos móveis

Dispositivos móveis utilizados na administração deverão possuir:

- bloqueio de tela;
- atualização;
- proteção de contas;
- controle de aplicativos;
- recuperação;
- cuidado com capturas de tela;
- proteção contra acesso indevido.

---

## 66. Termux

O ambiente Termux deverá ser tratado como estação operacional relevante.

Deverá possuir:

- diretório conhecido;
- repositório identificado;
- comandos controlados;
- backups;
- histórico;
- cuidado com credenciais;
- validação antes de alterações;
- registro dos ciclos executados.

---

## 67. Comandos destrutivos

Comandos potencialmente destrutivos deverão ser usados somente após:

- confirmação do caminho;
- inventário;
- backup;
- revisão;
- compreensão do impacto;
- autorização;
- plano de recuperação.

São exemplos:

```text
rm
rm -rf
git reset --hard
git clean
git checkout -- arquivo
git restore
git rebase
git push --force
```

---

## 68. Regra de preservação anterior à exclusão

Antes de excluir qualquer ativo relevante, deverá ser respondido:

1. o arquivo pertence ao Git?
2. existe histórico?
3. há backup?
4. há hash?
5. possui valor histórico?
6. é referência de outro arquivo?
7. poderá ser necessário para auditoria?
8. existe autorização para exclusão?

---

## 69. Backups

Os backups deverão proteger:

- repositório;
- documentos;
- dados;
- imagens;
- configurações;
- registros;
- certificados;
- pacotes históricos;
- ativos ainda não publicados.

---

## 70. Regra 3-2-1 adaptada

Sempre que possível, os ativos críticos deverão possuir:

```text
3 CÓPIAS
2 MEIOS DIFERENTES
1 CÓPIA FORA DO AMBIENTE PRINCIPAL
```

---

## 71. Tipos de backup

Poderão existir:

- backup integral;
- backup incremental;
- backup local;
- backup remoto;
- snapshot;
- exportação do repositório;
- pacote de preservação;
- cópia histórica certificada.

---

## 72. Nomeação de backups

Os backups deverão possuir nomes compreensíveis.

Modelo:

```text
festanca-AAAA-TIPO-YYYYMMDD-HHMMSS.ext
```

Exemplo:

```text
festanca-2026-repository-backup-20260731-235900.tar.gz
```

---

## 73. Conteúdo mínimo do backup

O backup deverá registrar:

```text
NOME:
DATA:
ORIGEM:
ESCOPO:
RESPONSÁVEL:
VERSÃO:
COMMIT:
HASH:
FORMATO:
LOCALIZAÇÃO:
TESTE DE RESTAURAÇÃO:
ESTADO:
```

---

## 74. Teste de restauração

Backup não testado não deverá ser considerado plenamente confiável.

O teste deverá verificar:

- abertura;
- integridade;
- estrutura;
- presença dos arquivos;
- validade dos JSONs;
- funcionamento do código;
- compatibilidade;
- hash;
- capacidade de reconstrução.

---

## 75. Frequência dos backups

A frequência deverá ser proporcional à criticidade.

Deverão ser considerados backups:

- antes de alteração crítica;
- antes de migração;
- antes de publicação;
- após certificação;
- no encerramento da edição;
- antes de limpeza;
- após consolidação documental.

---

## 76. Retenção

Os backups poderão ser classificados como:

```text
OPERACIONAL
TEMPORÁRIO
MENSAL
ANUAL
HISTÓRICO
PERMANENTE
```

Backups da edição fundadora poderão receber retenção permanente.

---

## 77. Cópias transitórias

Cópias transitórias deverão possuir:

- identificação;
- finalidade;
- data;
- origem;
- critério de descarte;
- confirmação de que não representam versão única.

---

## 78. Integrações

Toda integração deverá ser avaliada quanto a:

- finalidade;
- permissões;
- dados acessados;
- dependência;
- segurança;
- privacidade;
- disponibilidade;
- revogação;
- exportação;
- continuidade.

---

## 79. Serviços externos

Serviços externos deverão ser avaliados quanto a:

- propriedade dos dados;
- políticas de uso;
- capacidade de exportação;
- autenticação;
- histórico;
- disponibilidade;
- encerramento;
- custos;
- portabilidade;
- suporte.

---

## 80. Dependências técnicas

Toda dependência relevante deverá possuir:

- identificação;
- origem;
- versão;
- finalidade;
- risco;
- alternativa;
- impacto da indisponibilidade;
- responsável.

---

## 81. Atualizações

Atualizações deverão ser avaliadas antes da aplicação.

A avaliação deverá considerar:

- segurança;
- compatibilidade;
- regressão;
- dependências;
- impacto visual;
- impacto cultural;
- capacidade de reversão;
- necessidade de backup.

---

## 82. Vulnerabilidades

Vulnerabilidades deverão ser:

- registradas;
- classificadas;
- avaliadas;
- priorizadas;
- tratadas;
- monitoradas;
- auditadas.

A classificação deverá observar a Política de Gestão de Riscos.

---

## 83. Malware e arquivos suspeitos

Arquivos de origem desconhecida não deverão ser inseridos diretamente no repositório ou ambiente de produção.

Deverão ser verificados:

- origem;
- formato;
- extensão;
- conteúdo;
- permissões;
- necessidade;
- integridade.

---

## 84. Logs e registros

Os sistemas deverão manter, quando tecnicamente possível:

- logs de acesso;
- logs de publicação;
- registros de alteração;
- registros de erro;
- registros de restauração;
- registros de auditoria;
- registros de incidentes.

---

## 85. Proteção dos logs

Os logs deverão ser protegidos contra:

- alteração;
- exclusão;
- exposição indevida;
- perda de contexto;
- retenção insuficiente;
- uso incompatível com sua finalidade.

---

## 86. Monitoramento

O monitoramento poderá verificar:

- falhas de carregamento;
- arquivos ausentes;
- hashes divergentes;
- JSON inválido;
- indisponibilidade;
- alterações inesperadas;
- acessos indevidos;
- credenciais expostas;
- regressões;
- falhas de backup.

---

## 87. Incidente de segurança

Incidente de segurança é qualquer evento que comprometa ou ameace:

- confidencialidade;
- integridade;
- disponibilidade;
- autenticidade;
- rastreabilidade;
- recuperabilidade;
- preservação.

---

## 88. Identificador de incidente

Todo incidente relevante deverá possuir identificador único.

Modelo:

```text
SEC-FESTANCA-AAAA-NNNN
```

Exemplo:

```text
SEC-FESTANCA-2026-0001
```

---

## 89. Registro de incidente

```text
ID:
DATA:
DESCRIÇÃO:
ATIVOS AFETADOS:
CLASSIFICAÇÃO:
ORIGEM:
IMPACTO:
EVIDÊNCIAS:
CONTENÇÃO:
RESPONSÁVEL:
COMUNICAÇÃO:
RESTAURAÇÃO:
VALIDAÇÃO:
CAUSA:
AÇÕES CORRETIVAS:
ESTADO:
```

---

## 90. Resposta a incidentes

```text
DETECTAR
    │
    ▼
REGISTRAR
    │
    ▼
CONTER
    │
    ▼
PRESERVAR EVIDÊNCIAS
    │
    ▼
AVALIAR IMPACTO
    │
    ▼
COMUNICAR
    │
    ▼
CORRIGIR
    │
    ▼
RESTAURAR
    │
    ▼
VALIDAR
    │
    ▼
CERTIFICAR
    │
    ▼
REGISTRAR LIÇÕES
```

---

## 91. Preservação de evidências

Durante um incidente, não deverão ser apagados:

- logs;
- arquivos alterados;
- mensagens relevantes;
- hashes;
- registros Git;
- cópias comprometidas;
- capturas;
- datas;
- informações de origem.

A preservação deverá ocorrer antes da correção definitiva, quando possível.

---

## 92. Contenção

A contenção poderá incluir:

- suspensão de acesso;
- revogação de credencial;
- isolamento de ambiente;
- retirada temporária de publicação;
- bloqueio de integração;
- criação de cópia forense;
- restauração controlada.

---

## 93. Comunicação do incidente

A comunicação deverá ser:

- proporcional;
- responsável;
- documentada;
- direcionada às autoridades competentes;
- cuidadosa com dados pessoais;
- fiel às evidências;
- livre de especulações.

---

## 94. Incidente crítico

Será crítico o incidente capaz de provocar:

- perda da edição fundadora;
- adulteração cultural;
- vazamento de credenciais administrativas;
- indisponibilidade prolongada;
- exposição de dados pessoais;
- perda de repositório;
- destruição de backups;
- substituição silenciosa;
- impossibilidade de recuperação.

---

## 95. Recuperação

A recuperação deverá assegurar:

- origem conhecida;
- versão correta;
- integridade;
- funcionamento;
- compatibilidade;
- validação documental;
- validação técnica;
- preservação do histórico.

---

## 96. Retorno à operação

O retorno à operação dependerá de:

- correção;
- restauração;
- validação;
- confirmação de integridade;
- registro das ações;
- aprovação proporcional ao impacto.

---

## 97. Continuidade operacional

A continuidade deverá prever:

- perda do dispositivo;
- indisponibilidade do GitHub;
- perda de acesso à conta;
- falha de hospedagem;
- expiração de domínio;
- ausência do responsável;
- corrupção de arquivos;
- interrupção de serviço externo.

---

## 98. Plano de continuidade

O plano deverá indicar:

```text
ATIVOS CRÍTICOS:
RESPONSÁVEIS:
DEPENDÊNCIAS:
CÓPIAS DISPONÍVEIS:
AMBIENTE ALTERNATIVO:
CREDENCIAIS DE RECUPERAÇÃO:
PRAZO DE RESTAURAÇÃO:
ORDEM DE PRIORIDADE:
TESTES:
```

---

## 99. Objetivo de tempo de recuperação

Cada ativo crítico poderá possuir:

```text
RTO — RECOVERY TIME OBJECTIVE
```

O RTO define o tempo máximo desejável para restauração.

---

## 100. Objetivo de ponto de recuperação

Cada ativo crítico poderá possuir:

```text
RPO — RECOVERY POINT OBJECTIVE
```

O RPO define a perda máxima aceitável de alterações recentes.

---

## 101. Prioridade de recuperação

A ordem inicial será:

1. documentos constitucionais;
2. dados da edição fundadora;
3. repositório;
4. programação oficial;
5. inventário de locais;
6. cadastros de festeiros;
7. grupos tradicionais;
8. mecanismos de carregamento;
9. interface;
10. ativos complementares.

---

## 102. Segurança na publicação

Antes de publicar deverão ser confirmados:

```text
[ ] Conteúdo aprovado
[ ] Dados pessoais verificados
[ ] Credenciais ausentes
[ ] Arquivos válidos
[ ] Links conferidos
[ ] Origem conhecida
[ ] Backup realizado
[ ] Reversão disponível
[ ] Versão registrada
[ ] Responsável identificado
```

---

## 103. Segurança na migração

Toda migração deverá possuir:

- inventário;
- backup;
- plano;
- matriz de destino;
- análise de riscos;
- validação;
- comparação;
- plano de reversão;
- registro;
- certificação.

---

## 104. Segurança na exclusão

Nenhum ativo relevante deverá ser excluído sem:

- classificação;
- justificativa;
- autoridade;
- verificação de dependências;
- confirmação de backup;
- análise histórica;
- registro da decisão.

---

## 105. Descarte seguro

Quando o descarte for autorizado, deverão ser considerados:

- sensibilidade;
- retenção;
- obrigação histórica;
- necessidade de auditoria;
- cópias existentes;
- impossibilidade de recuperação indevida.

Ativos patrimoniais não deverão ser descartados por conveniência técnica.

---

## 106. Arquivamento

O arquivamento deverá manter:

- contexto;
- nome;
- versão;
- origem;
- data;
- responsável;
- hash;
- relação com a edição;
- classificação;
- possibilidade de leitura futura.

---

## 107. Preservação de formatos

Sempre que possível, deverão ser utilizados formatos:

- documentados;
- amplamente suportados;
- exportáveis;
- independentes de uma única plataforma;
- adequados à preservação.

Exemplos:

```text
.md
.json
.html
.css
.js
.png
.jpg
.svg
.pdf
.txt
.csv
```

---

## 108. Ferramentas de inteligência artificial

Ferramentas de inteligência artificial poderão apoiar:

- organização;
- revisão;
- análise;
- classificação;
- documentação;
- validação;
- planejamento.

Não deverão receber sem necessidade:

- credenciais;
- chaves;
- documentos pessoais;
- dados confidenciais;
- backups integrais;
- conteúdos ainda restritos.

---

## 109. Validação humana

Nenhuma ferramenta automatizada substituirá:

- autoridade institucional;
- validação cultural;
- validação histórica;
- aprovação editorial;
- decisão constitucional;
- responsabilidade humana.

---

## 110. Engenharia social

Todos os responsáveis deverão desconfiar de solicitações que peçam:

- senha;
- código de autenticação;
- token;
- instalação desconhecida;
- acesso remoto;
- alteração urgente sem registro;
- exclusão imediata;
- envio de arquivo confidencial.

---

## 111. Phishing

Mensagens suspeitas deverão ser verificadas antes de:

- clicar;
- baixar;
- responder;
- fornecer credencial;
- autorizar acesso;
- instalar aplicativo;
- alterar dados.

---

## 112. Capturas de tela

Antes de compartilhar uma captura, deverá ser verificada a presença de:

- tokens;
- e-mails;
- telefones;
- nomes privados;
- caminhos sensíveis;
- informações internas;
- códigos de recuperação;
- notificações pessoais;
- dados de localização.

---

## 113. WhatsApp e canais de mensagem

Canais de mensagem poderão ser utilizados para comunicação operacional, mas não deverão substituir:

- repositório;
- documentação oficial;
- registro de decisão;
- inventário;
- aprovação formal;
- backup.

---

## 114. Documentação oficial

A documentação oficial deverá permanecer no repositório ou ambiente documental definido.

Mensagens, conversas e capturas poderão ser evidências complementares, mas não serão a única fonte institucional.

---

## 115. Segurança física

Os dispositivos e meios de armazenamento deverão ser protegidos contra:

- perda;
- furto;
- acesso não autorizado;
- dano;
- exposição;
- descarte indevido;
- uso por terceiros.

---

## 116. Bloqueio de dispositivo

Dispositivos administrativos deverão possuir bloqueio automático e método seguro de desbloqueio.

---

## 117. Atualizações do sistema

Sistemas operacionais, navegadores e aplicativos deverão ser mantidos atualizados de modo controlado, considerando:

- segurança;
- estabilidade;
- compatibilidade;
- necessidade de backup;
- possibilidade de reversão.

---

## 118. Aplicativos autorizados

Aplicativos com acesso a arquivos ou contas institucionais deverão possuir:

- origem conhecida;
- finalidade;
- permissões proporcionais;
- manutenção;
- possibilidade de revogação.

---

## 119. Mídias removíveis

Mídias removíveis deverão ser utilizadas com cautela.

Deverão ser consideradas:

- origem;
- integridade;
- criptografia;
- backup;
- risco de perda;
- risco de malware;
- rastreabilidade.

---

## 120. Compartilhamento de arquivos

Arquivos restritos ou confidenciais deverão ser compartilhados somente por meio autorizado e com destinatário confirmado.

---

## 121. Transferência de responsabilidade

O compartilhamento de um arquivo não transfere automaticamente:

- propriedade;
- autoridade;
- responsabilidade;
- permissão de publicação;
- autorização de alteração.

---

## 122. Terceiros e colaboradores

Terceiros deverão receber somente o acesso necessário.

O acesso deverá possuir:

- finalidade;
- prazo;
- responsável;
- escopo;
- revisão;
- encerramento;
- obrigação de confidencialidade quando aplicável.

---

## 123. Encerramento de acesso

Ao término de uma colaboração deverão ser:

- revogadas permissões;
- encerradas sessões;
- alteradas credenciais compartilhadas;
- recuperados arquivos;
- registradas pendências;
- preservadas evidências;
- atualizada a matriz de acesso.

---

## 124. Revisão de acessos

Os acessos deverão ser revisados:

- periodicamente;
- após mudança de função;
- após incidente;
- após encerramento de colaboração;
- antes de nova edição;
- durante auditoria;
- após mudança institucional.

---

## 125. Não conformidades

São exemplos de não conformidade:

- senha em arquivo público;
- usuário sem autorização;
- backup não testado;
- ativo sem proprietário;
- arquivo crítico sem histórico;
- publicação de endereço privado;
- alteração sem rastreabilidade;
- credencial compartilhada informalmente;
- incidente não registrado;
- ausência de plano de recuperação.

---

## 126. Tratamento das não conformidades

```text
IDENTIFICAR
    │
    ▼
REGISTRAR
    │
    ▼
CONTER
    │
    ▼
CLASSIFICAR
    │
    ▼
CORRIGIR
    │
    ▼
VALIDAR
    │
    ▼
PREVENIR RECORRÊNCIA
    │
    ▼
ENCERRAR
```

---

## 127. Auditoria de segurança

A auditoria deverá verificar:

- acessos;
- credenciais;
- repositórios;
- branches;
- commits;
- backups;
- hashes;
- dados pessoais;
- integrações;
- incidentes;
- restaurações;
- não conformidades;
- continuidade;
- preservação histórica.

---

## 128. Evidências de conformidade

São evidências possíveis:

- commits;
- logs;
- hashes;
- relatórios;
- inventários;
- capturas;
- validações;
- certificados;
- backups;
- testes de restauração;
- aprovações;
- registros de acesso.

---

## 129. Indicadores de segurança

Poderão ser utilizados:

- ativos críticos protegidos;
- backups válidos;
- backups testados;
- credenciais rotacionadas;
- contas com autenticação multifator;
- incidentes;
- vulnerabilidades abertas;
- arquivos sem histórico;
- acessos vencidos;
- hashes divergentes;
- tempo de recuperação;
- não conformidades.

---

## 130. Indicadores críticos

Deverão receber atenção imediata:

- credencial exposta;
- backup indisponível;
- perda de repositório;
- acesso administrativo desconhecido;
- arquivo fundador alterado sem autorização;
- hash inesperadamente divergente;
- dados pessoais publicados;
- restauração impossível;
- exclusão sem inventário.

---

## 131. Revisão desta Política

Esta Política deverá ser revisada quando houver:

- incidente crítico;
- nova edição;
- nova integração;
- mudança de hospedagem;
- mudança de domínio;
- alteração constitucional;
- migração;
- auditoria;
- vulnerabilidade relevante;
- mudança institucional;
- evolução significativa da arquitetura.

---

## 132. Controle de versão

Toda revisão deverá registrar:

```text
VERSÃO:
DATA:
RESPONSÁVEL:
JUSTIFICATIVA:
SEÇÕES ALTERADAS:
RISCOS:
APROVAÇÃO:
COMMIT:
ESTADO:
```

---

## 133. Lista constitucional de verificação

```text
[ ] Ativos críticos identificados
[ ] Proprietários definidos
[ ] Informações classificadas
[ ] Acessos revisados
[ ] Menor privilégio aplicado
[ ] Credenciais protegidas
[ ] Autenticação multifator habilitada quando disponível
[ ] Segredos ausentes do repositório
[ ] Arquivos críticos versionados
[ ] Hashes registrados
[ ] Backups existentes
[ ] Backups testados
[ ] JSONs validados
[ ] Dados pessoais revisados
[ ] Integrações avaliadas
[ ] Incidentes registrados
[ ] Plano de continuidade disponível
[ ] Recuperação testada
[ ] Edição fundadora preservada
[ ] Evidências auditáveis
```

---

## 134. Integração com a gestão de riscos

Esta Política deverá operar em conjunto com:

```text
docs/festanca/governance/risk-management-policy.md
```

Toda vulnerabilidade relevante deverá produzir análise de risco.

Todo risco de segurança deverá possuir tratamento proporcional.

---

## 135. Integração com a auditoria

Esta Política deverá operar em conjunto com:

```text
docs/festanca/governance/audit-and-compliance-policy.md
```

A auditoria verificará a implementação e a eficácia dos controles.

---

## 136. Integração com o controle de alterações

Toda mudança de segurança deverá observar:

```text
docs/festanca/governance/change-control-policy.md
```

Nenhuma mudança crítica deverá ser implantada sem avaliação, backup e reversão.

---

## 137. Integração com o modelo decisório

Decisões de segurança deverão observar:

```text
docs/festanca/governance/decision-model.md
```

A autoridade necessária deverá ser proporcional ao impacto.

---

## 138. Integração com os papéis e responsabilidades

As responsabilidades deverão observar:

```text
docs/festanca/governance/roles-and-responsibilities.md
```

---

## 139. Integração com a resolução de conflitos

Divergências sobre segurança, acesso ou proteção deverão observar:

```text
docs/festanca/governance/conflict-resolution.md
```

---

## 140. Subordinação constitucional

Esta Política subordina-se a:

```text
docs/festanca/governance/governance-model.md
```

Nenhum controle de segurança poderá atuar acima da autoridade constitucional da governança.

---

## 141. Estado inicial deste documento

```text
DOCUMENTO: docs/festanca/governance/information-security-policy.md
FUNÇÃO: Política Constitucional de Segurança da Informação
REGIME: Permanente
EDIÇÃO FUNDADORA: FESTANÇA 2026
VERSÃO: 1.0.0
CRITICIDADE: Máxima
MUTABILIDADE: Estritamente controlada
PRESERVAÇÃO: Integral, versionada, auditável e recuperável
ESTADO: Documento constitucional inicial
```

---

## 142. Declaração constitucional

Este documento declara que:

1. nenhuma credencial deverá ser publicada;
2. nenhum acesso administrativo será concedido sem autoridade;
3. nenhum ativo crítico permanecerá sem proprietário;
4. nenhuma informação será pública apenas por estar acessível;
5. nenhum dado pessoal será publicado sem necessidade e legitimidade;
6. nenhuma cópia será considerada backup sem possibilidade de recuperação;
7. nenhum backup crítico permanecerá indefinidamente sem teste;
8. nenhuma exclusão relevante ocorrerá sem inventário;
9. nenhuma alteração histórica ocorrerá sem rastreabilidade;
10. nenhuma edição futura substituirá silenciosamente a edição fundadora;
11. nenhum incidente relevante será encerrado sem registro;
12. nenhuma restauração será aceita sem validação;
13. nenhuma ferramenta tecnológica substituirá a autoridade cultural;
14. nenhuma medida de segurança poderá apagar a memória;
15. nenhuma conveniência operacional prevalecerá sobre a integridade patrimonial;
16. toda credencial exposta deverá ser revogada ou substituída;
17. todo acesso deverá obedecer ao menor privilégio;
18. toda evidência legítima deverá ser preservada;
19. toda segurança deverá proteger a continuidade;
20. toda tecnologia deverá permanecer a serviço da FESTANÇA.

---

## 143. Princípio maior

```text
PROTEGER ANTES DE EXPOR.

AUTORIZAR ANTES DE ACESSAR.

VALIDAR ANTES DE PUBLICAR.

PRESERVAR ANTES DE ALTERAR.

REGISTRAR ANTES DE ENCERRAR.

TESTAR ANTES DE CONFIAR.

RECUPERAR SEM APAGAR.

EVOLUIR SEM ROMPER A MEMÓRIA.
```

---

## 144. Compromisso permanente

Toda segurança da informação deverá proteger:

- as pessoas;
- a comunidade;
- os grupos tradicionais;
- os festeiros;
- a cultura;
- a história;
- a memória;
- a instituição;
- os documentos;
- os dados;
- os acessos;
- as credenciais;
- os sistemas;
- os repositórios;
- os ambientes;
- a edição fundadora;
- as futuras edições;
- a continuidade;
- o patrimônio;
- o futuro.

---

## 145. Encerramento institucional

Seguimos juntos, passo a passo.

Com método.

Com segurança.

Com preservação integral da edição fundadora.

**SOMOS TODOS, AVANÇO.**

Ao encontro do futuro.

**AMÉM.**
