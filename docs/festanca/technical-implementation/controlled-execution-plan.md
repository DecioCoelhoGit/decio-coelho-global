# Plano Constitucional de Execução Técnica por Blocos e Pontos de Controle do Portal Permanente da FESTANÇA

---

## Denominação oficial

**Plano Constitucional de Execução Técnica por Blocos e Pontos de Controle do Portal Permanente da FESTANÇA**

---

## Arquivo oficial

```text
docs/festanca/technical-implementation/controlled-execution-plan.md
```

---

## Identificação do ciclo

| Campo | Valor |
|---|---|
| Documento | controlled-execution-plan.md |
| Diretório | docs/festanca/technical-implementation/ |
| Fase | F5 |
| Ciclo | F5-P3 |
| Denominação do ciclo | Planejamento da execução técnica controlada |
| Categoria | Planejamento operacional |
| Função | Organizar a execução técnica em blocos verificáveis, reversíveis e auditáveis |
| Regime | Permanente |
| Regime inicial | Planejamento e somente leitura |
| Criticidade | Máxima |
| Mutabilidade | Estrita e controlada |
| Preservação | Integral |
| Aplicabilidade | Portal Permanente e FESTANÇA 2026 |
| Execução física | Condicionada ao parecer favorável do F5-P2 |
| Validação humana | Obrigatória |
| Evidências | Obrigatórias |
| Auditoria | Permanente |
| Plano de retorno | Obrigatório por bloco |
| Rastreabilidade | Integral |
| Proteção da edição fundadora | Máxima |

---

## Declaração constitucional

Este documento estabelece o plano oficial de organização, autorização, execução, verificação, interrupção, retorno e certificação dos blocos técnicos que comporão a implementação controlada do Portal Permanente da FESTANÇA.

Sua finalidade é impedir que a implementação técnica seja realizada por comandos extensos, alterações simultâneas, operações silenciosas ou movimentos sem evidência.

Toda execução deverá ser dividida em unidades pequenas, independentes, compreensíveis, verificáveis e reversíveis.

Cada bloco deverá possuir:

- identificador;
- objetivo;
- objeto técnico;
- arquivos envolvidos;
- dependências;
- estado anterior;
- autorização;
- comando ou procedimento;
- risco;
- evidência;
- validação;
- teste;
- ponto de controle;
- plano de retorno;
- parecer;
- estado final.

Nenhum bloco poderá ser iniciado sem que o bloco anterior tenha sido analisado, validado e formalmente encerrado.

Nenhuma criação, alteração, movimentação, renomeação, integração, correção, publicação ou ativação poderá ocorrer sem autorização compatível com seu impacto.

A mera publicação deste documento não autoriza execução física sobre o repositório.

A execução técnica somente poderá começar após:

- conclusão real do F5-P2;
- parecer favorável de prontidão do ambiente;
- confirmação da linha de base;
- confirmação da capacidade de retorno;
- identificação dos arquivos envolvidos;
- autorização humana expressa.

A FESTANÇA 2026 permanecerá integralmente protegida em todos os blocos.

---

# 1. Identificação do documento

| Campo | Valor |
|---|---|
| Nome oficial | Plano Constitucional de Execução Técnica por Blocos e Pontos de Controle do Portal Permanente da FESTANÇA |
| Arquivo | controlled-execution-plan.md |
| Caminho completo | docs/festanca/technical-implementation/controlled-execution-plan.md |
| Fase | F5 |
| Ciclo | F5-P3 |
| Natureza | Constitucional, executiva, técnica, operacional e preventiva |
| Regime | Permanente |
| Estado inicial | Planejamento pendente de validação ambiental |
| Criticidade | Máxima |
| Mutabilidade | Estrita e controlada |
| Preservação | Integral e permanente |
| Aplicabilidade | Portal Permanente e edição fundadora |
| Execução física | Condicionada |
| Auditoria | Permanente |
| Evidências | Obrigatórias |
| Validação humana | Obrigatória |
| Rastreabilidade | Integral |
| Reversibilidade | Obrigatória |
| Compatibilidade GitHub | Obrigatória |
| Compatibilidade Termux | Obrigatória |
| Edição fundadora | FESTANÇA 2026 |
| Próximo ciclo | F5-P4 |

---

# 2. Natureza constitucional

Este documento possui natureza:

- constitucional;
- executiva;
- técnica;
- operacional;
- preventiva;
- verificadora;
- autorizativa;
- auditável;
- probatória;
- preservacionista;
- histórica;
- permanente.

Sua função é transformar a futura implementação técnica em uma sequência controlada de decisões e evidências.

---

# 3. Finalidade

Este ciclo tem por finalidade:

1. definir os blocos de execução;
2. estabelecer a ordem operacional;
3. identificar os objetos técnicos;
4. relacionar os arquivos envolvidos;
5. mapear dependências;
6. classificar riscos;
7. definir comandos autorizados;
8. estabelecer níveis de autorização;
9. criar critérios de interrupção;
10. definir evidências obrigatórias;
11. definir validações;
12. definir testes;
13. estabelecer pontos de controle;
14. criar planos de retorno;
15. estabelecer critérios de aprovação;
16. proteger integralmente a FESTANÇA 2026.

---

# 4. Objetivos estratégicos

São objetivos estratégicos deste plano:

- impedir execução improvisada;
- impedir comandos extensos não revisados;
- reduzir a superfície de risco;
- separar planejamento de execução;
- separar criação de alteração;
- preservar a linha de base;
- garantir reversibilidade;
- permitir auditoria por bloco;
- registrar decisões;
- identificar dependências antes da alteração;
- impedir regressões;
- proteger dados fundadores;
- preservar a continuidade histórica;
- preparar a implementação permanente;
- proteger integralmente a edição fundadora.

---

# 5. Condição constitucional de entrada

O F5-P3 somente poderá autorizar execução técnica depois que o F5-P2 estiver realmente concluído.

Deverão estar confirmados:

```text
CICLO F5-P2: CONCLUÍDO

PARECER DE PRONTIDÃO: FAVORÁVEL

RAIZ DO REPOSITÓRIO: CONFIRMADA

DIRETÓRIO DE TRABALHO: CONFIRMADO

BRANCH: IDENTIFICADA

COMMIT: REGISTRADO

ESTADO DO GIT: COMPREENDIDO

FERRAMENTAS ESSENCIAIS: DISPONÍVEIS

PERMISSÕES: ADEQUADAS

ARMAZENAMENTO: SUFICIENTE

PONTO DE RECUPERAÇÃO: DEFINIDO

CAPACIDADE DE RETORNO: VALIDADA

EVIDÊNCIAS: PRESERVADAS

FESTANÇA 2026: INTEGRALMENTE PROTEGIDA
```

Enquanto essas condições não estiverem comprovadas, o ciclo permanecerá exclusivamente documental.

---

# 6. Resultado esperado

Ao final deste ciclo, deverá existir:

```text
PLANO DE EXECUÇÃO: CONSOLIDADO

BLOCOS TÉCNICOS: DEFINIDOS

ORDEM OPERACIONAL: ESTABELECIDA

OBJETOS TÉCNICOS: IDENTIFICADOS

ARQUIVOS ENVOLVIDOS: MAPEADOS

DEPENDÊNCIAS: CLASSIFICADAS

COMANDOS: CONTROLADOS

AUTORIZAÇÕES: ESCALONADAS

RISCOS: REGISTRADOS

CRITÉRIOS DE INTERRUPÇÃO: DEFINIDOS

EVIDÊNCIAS: ESPECIFICADAS

VALIDAÇÕES: DEFINIDAS

TESTES: PLANEJADOS

PONTOS DE CONTROLE: ESTABELECIDOS

PLANOS DE RETORNO: PREVISTOS

CRITÉRIOS DE APROVAÇÃO: FORMALIZADOS

ALTERAÇÕES SILENCIOSAS: PROIBIDAS

FESTANÇA 2026: INTEGRALMENTE PROTEGIDA
```

---

# 7. Princípio da execução por blocos

Nenhuma operação técnica relevante deverá ser agrupada em um único movimento extenso.

Cada bloco deverá:

- possuir uma finalidade única;
- afetar a menor quantidade possível de arquivos;
- utilizar comandos curtos;
- produzir resultado observável;
- permitir interrupção;
- permitir validação isolada;
- possuir plano de retorno;
- preservar evidência;
- depender de autorização específica.

---

# 8. Unidade mínima de execução

A unidade mínima será denominada:

```text
BLOCO TÉCNICO CONTROLADO
```

Cada bloco deverá possuir o seguinte ciclo:

```text
IDENTIFICAÇÃO
↓
ANÁLISE
↓
AUTORIZAÇÃO
↓
REGISTRO DO ESTADO ANTERIOR
↓
EXECUÇÃO
↓
CAPTURA DO RESULTADO
↓
VALIDAÇÃO
↓
TESTE
↓
PARECER
↓
ENCERRAMENTO OU RETORNO
```

---

# 9. Estrutura obrigatória de um bloco

```text
ID DO BLOCO
FASE
CICLO
OBJETIVO
ESCOPO
OBJETO TÉCNICO
ARQUIVOS ENVOLVIDOS
DEPENDÊNCIAS
ESTADO ANTERIOR
RISCO
NÍVEL DE AUTORIZAÇÃO
COMANDO OU PROCEDIMENTO
RESULTADO ESPERADO
CRITÉRIO DE INTERRUPÇÃO
EVIDÊNCIA
VALIDAÇÃO
TESTE
PONTO DE CONTROLE
PLANO DE RETORNO
PARECER
ESTADO FINAL
RESPONSÁVEL
DATA
HORÁRIO
```

---

# 10. Identificação dos blocos

O padrão será:

```text
F5-PX-BLK-NNN-TIPO-DESCRICAO
```

Exemplos:

```text
F5-P3-BLK-001-ENV-BASELINE
F5-P4-BLK-001-DIR-PORTAL-ROOT
F5-P4-BLK-002-DIR-EDITIONS
F5-P5-BLK-001-DATA-FOUNDER-INVENTORY
F5-P6-BLK-001-TEST-HTML
F5-P7-BLK-001-SEC-SECRETS
```

---

# 11. Classificação dos blocos

| Código | Tipo de bloco |
|---|---|
| BLK-ENV | Ambiente |
| BLK-GIT | Git e versionamento |
| BLK-DOC | Documento |
| BLK-DIR | Diretório |
| BLK-FILE | Arquivo |
| BLK-DATA | Dados |
| BLK-ASSET | Ativo digital |
| BLK-REF | Referência |
| BLK-DEP | Dependência |
| BLK-CONFIG | Configuração |
| BLK-CODE | Código |
| BLK-TEST | Teste |
| BLK-SEC | Segurança |
| BLK-PUB | Publicação |
| BLK-ROLLBACK | Retorno |
| BLK-FUN | Elemento fundador |

---

# 12. Ordem operacional obrigatória

A ordem geral será:

```text
CONFIRMAÇÃO DO AMBIENTE
↓
RECONFIRMAÇÃO DA LINHA DE BASE
↓
INVENTÁRIO DO OBJETO
↓
MAPEAMENTO DAS DEPENDÊNCIAS
↓
ANÁLISE DE RISCO
↓
DEFINIÇÃO DO RETORNO
↓
AUTORIZAÇÃO
↓
EXECUÇÃO DO BLOCO
↓
VALIDAÇÃO TÉCNICA
↓
TESTE
↓
REGISTRO DA EVIDÊNCIA
↓
PARECER
↓
ENCERRAMENTO
```

---

# 13. Regimes de execução

## 13.1. Regime R0 — Planejamento

Permite:

- documentar;
- analisar;
- mapear;
- classificar;
- preparar blocos.

Não permite alterações físicas.

## 13.2. Regime R1 — Somente leitura

Permite:

- localizar;
- listar;
- contar;
- comparar;
- validar;
- gerar evidências.

## 13.3. Regime R2 — Criação controlada

Permite, mediante autorização:

- criar diretório novo;
- criar arquivo novo;
- criar estrutura ainda inexistente;
- gerar cópia de trabalho.

Não permite sobrescrever arquivo existente.

## 13.4. Regime R3 — Alteração controlada

Permite, mediante autorização específica:

- editar arquivo;
- atualizar caminho;
- corrigir referência;
- alterar configuração;
- integrar componente.

## 13.5. Regime R4 — Movimentação controlada

Permite, mediante análise ampliada:

- mover;
- renomear;
- reorganizar;
- substituir caminho.

## 13.6. Regime R5 — Publicação controlada

Permite:

- commit;
- push;
- implantação;
- ativação gradual.

Depende de validações anteriores.

---

# 14. Níveis de autorização

| Nível | Autorização |
|---|---|
| A0 | Planejamento e análise |
| A1 | Somente leitura |
| A2 | Criação de documento novo |
| A3 | Criação de diretório novo |
| A4 | Criação de arquivo técnico novo |
| A5 | Edição de arquivo existente |
| A6 | Movimentação ou renomeação |
| A7 | Integração de dados ou componentes |
| A8 | Alteração de configuração |
| A9 | Commit |
| A10 | Push |
| A11 | Publicação controlada |
| A12 | Ativação pública |

Nenhuma autorização será presumida.

---

# 15. Matriz entre regime e autorização

| Regime | Autorização mínima |
|---|---|
| R0 — Planejamento | A0 |
| R1 — Somente leitura | A1 |
| R2 — Criação controlada | A2, A3 ou A4 |
| R3 — Alteração controlada | A5, A7 ou A8 |
| R4 — Movimentação controlada | A6 |
| R5 — Publicação controlada | A9 a A12 |

---

# 16. Registro de autorização

| Campo | Registro |
|---|---|
| ID | A definir |
| Ciclo | A registrar |
| Bloco | A registrar |
| Nível | A registrar |
| Objeto | A registrar |
| Arquivos envolvidos | A listar |
| Justificativa | A registrar |
| Riscos | A registrar |
| Evidência anterior | A vincular |
| Plano de retorno | A vincular |
| Responsável | A identificar |
| Data | A registrar |
| Horário | A registrar |
| Estado | Pendente, aprovada, executada, suspensa ou revogada |

---

# 17. Objetos técnicos

Os objetos técnicos poderão incluir:

- diretórios;
- arquivos Markdown;
- arquivos HTML;
- arquivos CSS;
- arquivos JavaScript;
- arquivos JSON;
- imagens;
- ícones;
- fontes de dados;
- esquemas;
- componentes;
- configurações;
- scripts;
- regras;
- referências;
- links;
- rotas;
- coleções;
- documentos históricos;
- registros fundadores.

---

# 18. Registro dos objetos técnicos

| ID | Objeto | Tipo | Caminho | Criticidade | Estado |
|---|---|---|---|---|---|
| OBJ-F5-001 | A registrar | A classificar | A confirmar | A classificar | Pendente |

---

# 19. Arquivos envolvidos

Antes de cada bloco, deverão ser identificados:

- arquivo principal;
- arquivos dependentes;
- arquivos predecessores;
- arquivos sucessores;
- referências de entrada;
- referências de saída;
- ativos relacionados;
- dados relacionados;
- documentos de governança;
- evidências anteriores.

---

# 20. Matriz de arquivos envolvidos

| ID | Arquivo | Papel | Alteração prevista | Risco |
|---|---|---|---|---|
| FIL-F5-001 | A registrar | Principal, dependente ou fundador | A definir | A avaliar |

---

# 21. Dependências

As dependências deverão ser classificadas como:

- diretas;
- indiretas;
- documentais;
- estruturais;
- técnicas;
- funcionais;
- semânticas;
- históricas;
- externas;
- de segurança;
- fundadoras.

---

# 22. Matriz de dependências

| ID | Dependência | Tipo | Origem | Destino | Criticidade | Estado |
|---|---|---|---|---|---|---|
| DEP-F5-001 | A registrar | A classificar | A registrar | A registrar | A definir | Pendente |

---

# 23. Dependências bloqueadoras

São bloqueadoras as dependências:

- desconhecidas;
- quebradas;
- críticas;
- fundadoras;
- sem caminho confirmado;
- sem responsável;
- sem plano de retorno;
- relacionadas a dados sensíveis;
- relacionadas a segurança;
- relacionadas à edição fundadora.

---

# 24. Estado anterior obrigatório

Antes de executar qualquer bloco de alteração, deverá ser registrado:

- branch;
- commit;
- estado do Git;
- caminho do arquivo;
- existência;
- tamanho;
- conteúdo relevante;
- hash, quando necessário;
- referências;
- dependências;
- comportamento atual;
- evidência visual ou textual;
- condição da edição fundadora.

---

# 25. Registro do estado anterior

| Campo | Valor |
|---|---|
| Bloco | A registrar |
| Branch | A registrar |
| Commit | A registrar |
| Estado do Git | A registrar |
| Arquivo principal | A registrar |
| Tamanho | A registrar |
| Hash | A registrar quando aplicável |
| Dependências | A vincular |
| Evidência | A vincular |
| Condição fundadora | A validar |

---

# 26. Comandos autorizados no planejamento

Durante a preparação dos blocos, poderão ser utilizados:

```text
pwd
ls
find
grep
cat
head
tail
wc
sort
uniq
test
stat
file
du
df
sha256sum
git status
git branch
git rev-parse
git diff
git log
```

O uso deverá permanecer em somente leitura.

---

# 27. Comandos condicionados

Somente poderão ser usados dentro de bloco autorizado:

```text
mkdir
touch
cp
mv
sed
perl
python
node
npm
git add
git commit
git push
firebase
```

Cada comando deverá possuir:

- finalidade;
- arquivos afetados;
- autorização;
- resultado esperado;
- critério de interrupção;
- plano de retorno.

---

# 28. Comandos de alto risco

São considerados de alto risco:

```text
rm
rm -rf
git clean
git reset --hard
git restore
git checkout -- arquivo
truncate
find com -delete
sed -i
perl -pi
redirecionamento com >
cp com sobrescrita
mv sobre destino existente
```

Esses comandos não integrarão os blocos regulares sem autorização extraordinária.

---

# 29. Regra de comandos curtos

No Termux:

- um comando por bloco;
- uma finalidade por comando;
- nenhuma sequência extensa;
- nenhuma execução em massa sem inventário;
- nenhuma alteração sem conferência da saída anterior;
- nenhuma continuação diante de erro;
- nenhuma operação baseada em suposição.

---

# 30. Proibição de comandos compactados

Não deverão ser utilizados comandos extensos que:

- combinem localização, alteração e exclusão;
- executem múltiplas mudanças;
- ocultem resultados;
- impeçam análise intermediária;
- dificultem retorno;
- ultrapassem a capacidade segura de leitura no Termux;
- gerem saídas excessivamente grandes.

---

# 31. Fragmentação operacional

Quando uma tarefa exigir múltiplas operações, deverá ser dividida.

Exemplo:

```text
BLOCO 1 — CONFIRMAR CAMINHO
BLOCO 2 — CONFIRMAR ARQUIVO
BLOCO 3 — REGISTRAR ESTADO ANTERIOR
BLOCO 4 — CRIAR CÓPIA DE SEGURANÇA
BLOCO 5 — EXECUTAR ALTERAÇÃO
BLOCO 6 — VALIDAR SINTAXE
BLOCO 7 — TESTAR FUNCIONAMENTO
BLOCO 8 — CONFERIR GIT
BLOCO 9 — EMITIR PARECER
```

---

# 32. Critérios de interrupção

A execução deverá ser interrompida quando:

- o caminho divergir;
- o arquivo não existir;
- o arquivo esperado estiver vazio;
- o resultado for diferente do previsto;
- surgir erro não compreendido;
- houver alteração inesperada no Git;
- aparecer dependência não mapeada;
- ocorrer falha de sintaxe;
- ocorrer falha de teste;
- houver risco de perda;
- o retorno não estiver disponível;
- houver risco à FESTANÇA 2026.

---

# 33. Classificação da interrupção

| Código | Tipo |
|---|---|
| INT-OBS | Interrupção para observação |
| INT-DIV | Divergência |
| INT-RSK | Risco |
| INT-ERR | Erro técnico |
| INT-DEP | Dependência desconhecida |
| INT-SEC | Segurança |
| INT-RET | Retorno necessário |
| INT-FUN | Proteção fundadora |

---

# 34. Registro de interrupção

| Campo | Registro |
|---|---|
| ID | A definir |
| Bloco | A registrar |
| Motivo | A registrar |
| Resultado encontrado | A registrar |
| Resultado esperado | A registrar |
| Criticidade | A classificar |
| Evidência | A vincular |
| Decisão | Suspender, corrigir, retornar ou bloquear |
| Responsável | A identificar |

---

# 35. Classificação dos riscos

| Nível | Classificação | Consequência |
|---|---|---|
| R1 | Informativo | Registro |
| R2 | Baixo | Monitoramento |
| R3 | Moderado | Controle obrigatório |
| R4 | Alto | Autorização ampliada |
| R5 | Crítico | Bloqueio do bloco |
| RF | Fundador | Bloqueio total |

---

# 36. Riscos principais

| ID | Risco | Impacto | Controle |
|---|---|---|---|
| RSK-F5P3-001 | Execução em caminho incorreto | Crítico | Confirmação de raiz e diretório |
| RSK-F5P3-002 | Alteração em branch incorreta | Crítico | Conferência da branch |
| RSK-F5P3-003 | Sobrescrita | Crítico | Estado anterior e retorno |
| RSK-F5P3-004 | Dependência desconhecida | Alto | Mapeamento prévio |
| RSK-F5P3-005 | Comando excessivamente amplo | Alto | Fragmentação |
| RSK-F5P3-006 | Perda de evidência | Alto | Registro por bloco |
| RSK-F5P3-007 | Falha de retorno | Crítico | Teste do plano |
| RSK-F5P3-008 | Regressão da FESTANÇA 2026 | Máximo | Testes fundadores |
| RSK-F5P3-009 | Exposição de credenciais | Crítico | Mascaramento e bloqueio |
| RSK-F5P3-010 | Publicação prematura | Crítico | Níveis A9 a A12 |

---

# 37. Evidências obrigatórias

Cada bloco deverá produzir evidências proporcionais ao seu impacto.

Poderão ser exigidas:

- saída de comando;
- captura de tela;
- listagem;
- diff;
- hash;
- teste;
- registro de arquivo;
- estado do Git;
- parecer;
- registro de autorização;
- plano de retorno;
- resultado do retorno;
- validação humana.

---

# 38. Identificação das evidências

O padrão será:

```text
F5-PX-BLK-NNN-EVD-NNN-TIPO
```

Exemplos:

```text
F5-P4-BLK-001-EVD-001-PRE
F5-P4-BLK-001-EVD-002-EXECUTION
F5-P4-BLK-001-EVD-003-POST
F5-P4-BLK-001-EVD-004-TEST
F5-P4-BLK-001-EVD-005-PARECER
```

---

# 39. Metadados das evidências

| Campo | Obrigatoriedade |
|---|---|
| Identificador | Obrigatório |
| Fase | Obrigatória |
| Ciclo | Obrigatório |
| Bloco | Obrigatório |
| Tipo | Obrigatório |
| Origem | Obrigatória |
| Data | Obrigatória |
| Horário | Obrigatório |
| Responsável | Obrigatório |
| Comando ou procedimento | Obrigatório |
| Resultado | Obrigatório |
| Arquivos relacionados | Obrigatório |
| Integridade | Obrigatória |
| Validação humana | Obrigatória |
| Localização | Obrigatória |
| Cadeia de custódia | Obrigatória |

---

# 40. Cadeia de custódia por bloco

```text
ESTADO ANTERIOR
↓
AUTORIZAÇÃO
↓
EXECUÇÃO
↓
CAPTURA
↓
IDENTIFICAÇÃO
↓
VALIDAÇÃO
↓
VINCULAÇÃO AO BLOCO
↓
TESTE
↓
PARECER
↓
ARQUIVAMENTO
↓
PRESERVAÇÃO
```

---

# 41. Validação obrigatória

Toda execução deverá ser validada em níveis compatíveis com o objeto.

Os níveis serão:

- validação de existência;
- validação de caminho;
- validação estrutural;
- validação sintática;
- validação semântica;
- validação funcional;
- validação de dados;
- validação de segurança;
- validação histórica;
- validação fundadora.

---

# 42. Matriz de validação

| Objeto | Validações mínimas |
|---|---|
| Diretório | Existência, caminho e permissões |
| Markdown | Estrutura, título e integridade |
| HTML | Sintaxe, carregamento e links |
| CSS | Sintaxe, carregamento e responsividade |
| JavaScript | Sintaxe, console e comportamento |
| JSON | Sintaxe, schema e consistência |
| Imagem | Existência, formato e referência |
| Configuração | Sintaxe, segredo e compatibilidade |
| Dados fundadores | Integridade, proveniência e reconstrução |

---

# 43. Testes obrigatórios

Os testes poderão incluir:

- teste de existência;
- teste de sintaxe;
- teste de carregamento;
- teste de navegação;
- teste de integração;
- teste de responsividade;
- teste de acessibilidade;
- teste de regressão;
- teste de segurança;
- teste de retorno;
- teste fundador.

---

# 44. Identificação dos testes

```text
F5-PX-BLK-NNN-TST-NNN-TIPO
```

Exemplos:

```text
F5-P6-BLK-001-TST-001-HTML
F5-P6-BLK-002-TST-001-CSS
F5-P6-BLK-003-TST-001-JS
F5-P6-BLK-004-TST-001-JSON
F5-P6-BLK-005-TST-001-FOUNDER
```

---

# 45. Resultado dos testes

| Código | Resultado |
|---|---|
| TST-AP | Aprovado |
| TST-AO | Aprovado com observações |
| TST-AC | Aprovado condicionalmente |
| TST-PD | Pendente |
| TST-RP | Reprovado |
| TST-BL | Bloqueado |
| TST-FN | Falha fundadora |

---

# 46. Pontos de controle

Um ponto de controle deverá existir:

- antes da execução;
- imediatamente após a execução;
- após a validação;
- após o teste;
- antes da aprovação;
- antes do próximo bloco.

---

# 47. Identificação dos pontos de controle

```text
F5-PX-BLK-NNN-PC-NNN
```

Exemplo:

```text
F5-P4-BLK-001-PC-001 — Estado anterior confirmado
F5-P4-BLK-001-PC-002 — Execução concluída
F5-P4-BLK-001-PC-003 — Validação aprovada
F5-P4-BLK-001-PC-004 — Teste aprovado
F5-P4-BLK-001-PC-005 — Bloco encerrado
```

---

# 48. Registro de ponto de controle

| Campo | Registro |
|---|---|
| ID | A definir |
| Bloco | A registrar |
| Condição | A registrar |
| Resultado | A registrar |
| Evidência | A vincular |
| Responsável | A identificar |
| Autorização para continuar | Sim, não ou condicionada |

---

# 49. Plano de retorno obrigatório

Todo bloco que altere o repositório deverá possuir plano de retorno.

O plano deverá identificar:

- objeto alterado;
- estado anterior;
- ponto de referência;
- cópia ou versão;
- comando de retorno;
- riscos do retorno;
- critério de acionamento;
- teste posterior;
- responsável;
- evidência;
- efeito sobre a edição fundadora.

---

# 50. Estrutura do plano de retorno

```text
ID DO RETORNO
BLOCO DE ORIGEM
MOTIVO
ESTADO ANTERIOR
ARQUIVOS AFETADOS
PONTO DE REFERÊNCIA
PROCEDIMENTO
COMANDOS
VALIDAÇÃO
TESTE
EVIDÊNCIA
RESPONSÁVEL
ESTADO FINAL
```

---

# 51. Identificação dos retornos

```text
F5-PX-BLK-NNN-RTN-NNN
```

Exemplo:

```text
F5-P4-BLK-001-RTN-001
```

---

# 52. Critérios de acionamento do retorno

O retorno deverá ser acionado quando:

- o resultado divergir do autorizado;
- houver falha de sintaxe;
- houver falha funcional;
- surgir regressão;
- ocorrer quebra de dependência;
- surgir erro de carregamento;
- houver perda de conteúdo;
- houver risco de segurança;
- houver exposição de dados;
- ocorrer alteração histórica indevida;
- houver risco fundador.

---

# 53. Retorno não destrutivo

O retorno deverá priorizar:

- restauração controlada;
- reversão mínima;
- preservação das evidências;
- preservação do resultado falho para auditoria;
- ausência de limpeza automática;
- validação posterior;
- atualização do registro do bloco.

---

# 54. Critérios de aprovação de um bloco

Um bloco somente será aprovado quando:

- o objetivo estiver cumprido;
- o escopo tiver sido respeitado;
- o comando executado corresponder ao autorizado;
- o resultado estiver registrado;
- não houver alteração inesperada;
- as evidências estiverem preservadas;
- a validação estiver concluída;
- os testes estiverem aprovados;
- o plano de retorno estiver disponível;
- a edição fundadora estiver protegida;
- houver validação humana.

---

# 55. Classificação final dos blocos

| Código | Estado |
|---|---|
| BLK-PL | Planejado |
| BLK-AU | Autorizado |
| BLK-EX | Executado |
| BLK-VA | Validado |
| BLK-AP | Aprovado |
| BLK-AO | Aprovado com observações |
| BLK-AC | Aprovado condicionalmente |
| BLK-SU | Suspenso |
| BLK-RT | Retornado |
| BLK-NC | Não conforme |
| BLK-BL | Bloqueado |
| BLK-FN | Bloqueio fundador |

---

# 56. Blocos preliminares da Fase F5

A execução futura poderá ser organizada inicialmente nos seguintes blocos estruturais:

```text
BLOCO 01 — RECONFIRMAÇÃO DA LINHA DE BASE

BLOCO 02 — INVENTÁRIO DA ESTRUTURA ATUAL

BLOCO 03 — IDENTIFICAÇÃO DOS ARQUIVOS FUNDADORES

BLOCO 04 — MAPEAMENTO DAS DEPENDÊNCIAS REAIS

BLOCO 05 — DEFINIÇÃO DA ESTRUTURA PERMANENTE

BLOCO 06 — CRIAÇÃO CONTROLADA DOS DIRETÓRIOS

BLOCO 07 — CRIAÇÃO DOS ARQUIVOS-BASE

BLOCO 08 — INTEGRAÇÃO CONTROLADA DA FESTANÇA 2026

BLOCO 09 — ATUALIZAÇÃO CONTROLADA DAS REFERÊNCIAS

BLOCO 10 — VALIDAÇÃO DE DADOS

BLOCO 11 — TESTES APLICACIONAIS

BLOCO 12 — TESTES DE REGRESSÃO

BLOCO 13 — VALIDAÇÃO DE SEGURANÇA

BLOCO 14 — CONSOLIDAÇÃO DAS EVIDÊNCIAS

BLOCO 15 — PARECER DE ATIVAÇÃO
```

Esses blocos deverão ser refinados com base no ambiente real.

---

# 57. Bloco 01 — Reconfirmação da linha de base

Objetivo:

- confirmar novamente o estado do repositório antes da primeira alteração.

Comandos iniciais:

```bash
pwd
```

```bash
git rev-parse --show-toplevel
```

```bash
git branch --show-current
```

```bash
git rev-parse --short HEAD
```

```bash
git status --short
```

Regime:

```text
R1 — SOMENTE LEITURA
```

---

# 58. Bloco 02 — Inventário da estrutura atual

Objetivo:

- registrar a estrutura física real;
- identificar caminhos;
- localizar componentes;
- impedir criação duplicada.

Comandos deverão ser definidos com base na raiz confirmada.

Nenhuma alteração será autorizada neste bloco.

---

# 59. Bloco 03 — Identificação dos arquivos fundadores

Objetivo:

- localizar todos os componentes da FESTANÇA 2026;
- classificá-los como fundadores;
- registrar caminhos;
- preservar integridade;
- impedir movimentação prematura.

Resultado esperado:

```text
CORPUS FUNDADOR: IDENTIFICADO
CAMINHOS: REGISTRADOS
DEPENDÊNCIAS: PRELIMINARMENTE MAPEADAS
ALTERAÇÕES: NÃO REALIZADAS
```

---

# 60. Bloco 04 — Mapeamento das dependências reais

Objetivo:

- confirmar dependências documentais e técnicas;
- localizar referências de entrada e saída;
- identificar componentes compartilhados;
- detectar caminhos quebrados.

Este bloco deverá permanecer em somente leitura.

---

# 61. Bloco 05 — Definição da estrutura permanente

Objetivo:

- confirmar a arquitetura física a ser criada;
- comparar estrutura prevista e estrutura existente;
- evitar sobreposição;
- definir caminhos finais.

Nenhum diretório será criado antes do parecer deste bloco.

---

# 62. Bloco 06 — Criação controlada dos diretórios

Regime previsto:

```text
R2 — CRIAÇÃO CONTROLADA
```

Autorização mínima:

```text
A3 — CRIAÇÃO DE DIRETÓRIO
```

Cada diretório deverá ser criado isoladamente e imediatamente verificado.

---

# 63. Bloco 07 — Criação dos arquivos-base

Regime previsto:

```text
R2 — CRIAÇÃO CONTROLADA
```

Autorização mínima:

```text
A4 — CRIAÇÃO DE ARQUIVO TÉCNICO NOVO
```

É proibido sobrescrever arquivos existentes.

---

# 64. Bloco 08 — Integração da FESTANÇA 2026

Regime previsto:

```text
R3 — ALTERAÇÃO CONTROLADA
```

Autorização mínima:

```text
A7 — INTEGRAÇÃO DE DADOS OU COMPONENTES
```

Este bloco deverá observar integralmente o F5-P5.

---

# 65. Bloco 09 — Atualização das referências

Deverá tratar:

- caminhos HTML;
- caminhos CSS;
- caminhos JavaScript;
- imagens;
- ícones;
- dados JSON;
- links internos;
- links de navegação;
- referências entre edições.

Cada grupo de referências deverá formar bloco independente.

---

# 66. Bloco 10 — Validação de dados

Deverá verificar:

- sintaxe;
- estrutura;
- campos obrigatórios;
- identificadores;
- relacionamentos;
- datas;
- horários;
- locais;
- referências;
- proveniência;
- consistência histórica.

---

# 67. Bloco 11 — Testes aplicacionais

Deverá contemplar:

- carregamento;
- navegação;
- filtros;
- imagens;
- links;
- dados;
- responsividade;
- acessibilidade;
- console;
- comportamento local.

---

# 68. Bloco 12 — Testes de regressão

Deverá confirmar que a implementação não comprometeu:

- programação de 2026;
- festeiros;
- grupos culturais;
- locais;
- navegação;
- identidade visual;
- dados;
- imagens;
- links;
- acessibilidade;
- funcionalidade anterior.

---

# 69. Bloco 13 — Validação de segurança

Deverá verificar:

- credenciais;
- arquivos sensíveis;
- dados pessoais;
- permissões;
- dependências;
- configuração;
- exposição pública;
- registros;
- capacidade de suspensão;
- plano de retorno.

---

# 70. Bloco 14 — Consolidação das evidências

Deverá relacionar:

- autorizações;
- comandos;
- resultados;
- capturas;
- diffs;
- hashes;
- testes;
- divergências;
- retornos;
- pareceres;
- decisões.

---

# 71. Bloco 15 — Parecer de ativação

Somente será preparado quando:

- todos os blocos anteriores estiverem encerrados;
- os testes estiverem aprovados;
- os riscos estiverem controlados;
- a edição fundadora estiver preservada;
- a segurança estiver validada;
- o plano de retorno estiver disponível.

---

# 72. Sequência de análise no Termux

Cada comando deverá seguir este procedimento:

```text
1. COPIAR O COMANDO

2. CONFERIR O COMANDO

3. EXECUTAR NO DIRETÓRIO CONFIRMADO

4. PRESERVAR A SAÍDA

5. ANALISAR O RESULTADO

6. CLASSIFICAR A CONFORMIDADE

7. REGISTRAR DIVERGÊNCIAS

8. AGUARDAR AUTORIZAÇÃO

9. SOMENTE ENTÃO EXECUTAR O PRÓXIMO BLOCO
```

---

# 73. Limite de saída

Comandos que produzam saídas muito extensas deverão ser:

- restringidos por diretório;
- limitados por profundidade;
- divididos;
- filtrados;
- executados por grupos;
- analisados em etapas.

Não deverão ser geradas saídas que ultrapassem a capacidade segura de análise no Termux ou no WhatsApp.

---

# 74. Preservação das capturas

Capturas de tela deverão registrar, quando possível:

- comando;
- resultado;
- caminho;
- horário;
- contexto;
- início e fim da saída;
- ausência de dados sensíveis;
- identificação do bloco.

---

# 75. Proteção de credenciais

Nenhum bloco poderá:

- imprimir tokens;
- mostrar senhas;
- abrir chaves;
- exibir conteúdo de `.env`;
- publicar segredos;
- registrar credenciais em capturas;
- inserir credenciais no Git.

A identificação de arquivo sensível deverá ocorrer sem exibir seu conteúdo.

---

# 76. Proteção de dados pessoais

A execução deverá aplicar:

- minimização;
- mascaramento;
- acesso restrito;
- não exposição de endereços privados;
- proteção de contatos;
- proteção de crianças e adolescentes;
- proteção de dados sensíveis;
- observância da finalidade institucional.

---

# 77. Proteção da edição fundadora

A FESTANÇA 2026 constitui o referencial histórico, cultural, documental e técnico da arquitetura permanente.

Consequentemente:

- nenhum arquivo fundador será removido;
- nenhum dado fundador será sobrescrito;
- nenhum caminho fundador será alterado silenciosamente;
- nenhum identificador será substituído sem registro;
- nenhuma referência histórica será perdida;
- nenhuma integração será irreversível;
- nenhuma mudança poderá impedir a reconstrução da edição original.

---

# 78. Elementos fundadores protegidos

Deverão ser protegidos:

- HTML original;
- CSS original;
- JavaScript original;
- arquivos JSON;
- programação;
- festeiros;
- grupos culturais;
- locais;
- imagens;
- ícones;
- textos;
- metadados;
- identificadores;
- referências;
- documentos;
- evidências;
- histórico do Git;
- decisões institucionais.

---

# 79. Teste fundador obrigatório

Todo bloco com potencial impacto sobre a FESTANÇA 2026 deverá responder:

```text
O CONTEÚDO ORIGINAL PERMANECE DISPONÍVEL?

OS DADOS PERMANECEM ÍNTEGROS?

OS IDENTIFICADORES PERMANECEM RASTREÁVEIS?

AS REFERÊNCIAS PERMANECEM FUNCIONAIS?

A EDIÇÃO PODE SER RECONSTRUÍDA?

O ESTADO ANTERIOR PODE SER RESTAURADO?

NENHUMA ALTERAÇÃO SILENCIOSA OCORREU?
```

Qualquer resposta negativa bloqueará o bloco.

---

# 80. Inteligência artificial

A inteligência artificial poderá auxiliar na:

- elaboração dos blocos;
- revisão dos comandos;
- identificação de riscos;
- comparação de resultados;
- análise de diffs;
- construção dos testes;
- organização das evidências;
- preparação dos pareceres.

A inteligência artificial não poderá:

- executar comandos sem autorização;
- inventar resultados;
- afirmar testes não realizados;
- presumir caminhos;
- ocultar divergências;
- autorizar publicação;
- substituir validação humana;
- alterar dados fundadores;
- certificar a fase isoladamente.

---

# 81. Responsabilidades

## 81.1. Governança institucional

Compete à governança:

- aprovar o plano;
- autorizar os níveis de execução;
- decidir bloqueios;
- aprovar movimentos críticos;
- validar pareceres;
- proteger a edição fundadora.

## 81.2. Coordenação técnica

Compete à coordenação técnica:

- preparar os blocos;
- identificar objetos;
- mapear dependências;
- executar comandos autorizados;
- registrar resultados;
- preservar evidências;
- acionar interrupções.

## 81.3. Curadoria histórica

Compete à curadoria:

- identificar elementos fundadores;
- validar contexto;
- proteger proveniência;
- impedir perda histórica;
- acompanhar integrações.

## 81.4. Auditoria

Compete à auditoria:

- revisar autorizações;
- conferir comandos;
- verificar evidências;
- validar cadeia de custódia;
- revisar testes;
- verificar planos de retorno.

---

# 82. Matriz mestre de blocos

| ID | Objeto | Regime | Autorização | Risco | Estado |
|---|---|---|---|---|---|
| F5-BLK-001 | Linha de base | R1 | A1 | Alto | Pendente |
| F5-BLK-002 | Inventário físico | R1 | A1 | Moderado | Pendente |
| F5-BLK-003 | Corpus fundador | R1 | A1 | Fundador | Pendente |
| F5-BLK-004 | Dependências | R1 | A1 | Alto | Pendente |
| F5-BLK-005 | Estrutura permanente | R0 | A0 | Alto | Pendente |
| F5-BLK-006 | Diretórios permanentes | R2 | A3 | Alto | Não autorizado |
| F5-BLK-007 | Arquivos-base | R2 | A4 | Alto | Não autorizado |
| F5-BLK-008 | Integração 2026 | R3 | A7 | Fundador | Não autorizado |
| F5-BLK-009 | Referências | R3 | A5 | Crítico | Não autorizado |
| F5-BLK-010 | Dados | R3 | A7 | Crítico | Não autorizado |
| F5-BLK-011 | Testes | R1 | A1 | Alto | Pendente |
| F5-BLK-012 | Segurança | R1/R3 | A1/A8 | Crítico | Pendente |
| F5-BLK-013 | Commit | R5 | A9 | Crítico | Não autorizado |
| F5-BLK-014 | Push | R5 | A10 | Crítico | Não autorizado |
| F5-BLK-015 | Ativação | R5 | A11/A12 | Máximo | Não autorizado |

---

# 83. Checklist de planejamento

## 83.1. Ambiente

- [ ] F5-P2 concluído.
- [ ] Parecer favorável emitido.
- [ ] Raiz confirmada.
- [ ] Branch confirmada.
- [ ] Commit registrado.
- [ ] Estado do Git compreendido.
- [ ] Capacidade de retorno validada.

## 83.2. Blocos

- [x] Estrutura dos blocos definida.
- [x] Identificadores definidos.
- [x] Regimes definidos.
- [x] Autorizações definidas.
- [x] Critérios de interrupção definidos.
- [x] Pontos de controle definidos.
- [x] Planos de retorno regulamentados.

## 83.3. Objetos e dependências

- [ ] Objetos reais identificados.
- [ ] Arquivos envolvidos listados.
- [ ] Dependências diretas mapeadas.
- [ ] Dependências indiretas mapeadas.
- [ ] Dependências fundadoras identificadas.
- [ ] Riscos reais classificados.

## 83.4. Evidências e testes

- [x] Padrão de evidências definido.
- [x] Metadados definidos.
- [x] Cadeia de custódia definida.
- [x] Tipos de validação definidos.
- [x] Tipos de testes definidos.
- [ ] Testes específicos detalhados.
- [ ] Pareceres por bloco preparados.

## 83.5. Proteção fundadora

- [x] Proteção máxima estabelecida.
- [x] Teste fundador definido.
- [x] Bloqueio fundador definido.
- [ ] Corpus fundador fisicamente confirmado.
- [ ] Dependências fundadoras confirmadas.
- [ ] Capacidade de reconstrução validada.

---

# 84. Estado inicial deste documento

| Campo | Valor |
|---|---|
| Documento | controlled-execution-plan.md |
| Fase | F5 |
| Ciclo | F5-P3 |
| Regime | Permanente |
| Regime operacional | Planejamento e somente leitura |
| Edição fundadora | FESTANÇA 2026 |
| Criticidade | Máxima |
| Mutabilidade | Estrita e controlada |
| Preservação | Integral |
| F5-P2 | Pendente de conclusão real |
| Parecer ambiental | Pendente |
| Blocos conceituais | Definidos |
| Blocos operacionais reais | Pendentes de detalhamento |
| Objetos técnicos reais | Pendentes de identificação |
| Arquivos envolvidos | Pendentes de mapeamento |
| Dependências reais | Pendentes de validação |
| Comandos de alteração | Não autorizados |
| Níveis de autorização | Definidos |
| Riscos | Preliminarmente definidos |
| Critérios de interrupção | Definidos |
| Evidências | Obrigatórias |
| Validações | Obrigatórias |
| Testes | Obrigatórios |
| Pontos de controle | Obrigatórios |
| Planos de retorno | Obrigatórios |
| Execução física | Não autorizada |
| Commit | Não autorizado |
| Push | Não autorizado |
| Publicação | Não autorizada |
| Ativação pública | Não autorizada |
| Auditoria | Permanente |
| Validação humana | Obrigatória |
| Rastreabilidade | Integral |
| Proteção fundadora | Máxima |
| Próximo ciclo | F5-P4 |

---

# 85. Vigência

Este documento entra imediatamente em vigor após sua aprovação e publicação no repositório oficial.

Sua vigência será permanente.

Toda revisão deverá:

- preservar versões anteriores;
- registrar justificativa;
- identificar responsáveis;
- apresentar análise de impacto;
- preservar evidências;
- preservar planos de retorno;
- manter o histórico dos blocos;
- manter o histórico das autorizações;
- preservar registros de interrupção;
- preservar resultados de testes;
- manter a cadeia de custódia;
- proteger dados pessoais;
- proteger credenciais;
- proteger conhecimentos tradicionais;
- proteger a FESTANÇA 2026;
- assegurar rastreabilidade integral.

---

# 86. Certificação de abertura do ciclo

Com a publicação deste documento, ficam formalmente estabelecidos:

```text
CICLO F5-P3: FORMALMENTE ABERTO

OBJETO:
PLANEJAMENTO DA EXECUÇÃO TÉCNICA
POR BLOCOS E PONTOS DE CONTROLE

REGIME INICIAL:
PLANEJAMENTO E SOMENTE LEITURA

BLOCOS DE EXECUÇÃO: DEFINIDOS

ORDEM OPERACIONAL: ESTABELECIDA

OBJETOS TÉCNICOS: A CONFIRMAR

ARQUIVOS ENVOLVIDOS: A MAPEAR

DEPENDÊNCIAS: A VALIDAR

COMANDOS DE LEITURA: AUTORIZADOS

COMANDOS DE ALTERAÇÃO: NÃO AUTORIZADOS

NÍVEIS DE AUTORIZAÇÃO: DEFINIDOS

RISCOS: A CLASSIFICAR NO AMBIENTE REAL

CRITÉRIOS DE INTERRUPÇÃO: DEFINIDOS

EVIDÊNCIAS: OBRIGATÓRIAS

VALIDAÇÕES: OBRIGATÓRIAS

TESTES: OBRIGATÓRIOS

PONTOS DE CONTROLE: OBRIGATÓRIOS

PLANOS DE RETORNO: OBRIGATÓRIOS

EXECUÇÃO FÍSICA:
CONDICIONADA AO PARECER FAVORÁVEL DO F5-P2

VALIDAÇÃO HUMANA: OBRIGATÓRIA

ALTERAÇÕES SILENCIOSAS: PROIBIDAS

FESTANÇA 2026: INTEGRALMENTE PROTEGIDA
```

---

# 87. Critérios para encerramento do ciclo

O F5-P3 somente poderá ser formalmente concluído quando:

- o F5-P2 estiver encerrado;
- o parecer ambiental estiver aprovado;
- os objetos técnicos reais estiverem identificados;
- os arquivos envolvidos estiverem mapeados;
- as dependências estiverem validadas;
- os blocos reais estiverem enumerados;
- cada bloco possuir nível de autorização;
- os riscos estiverem classificados;
- os testes estiverem relacionados;
- os pontos de controle estiverem definidos;
- os planos de retorno estiverem vinculados;
- a edição fundadora estiver protegida;
- houver parecer humano.

---

# 88. Certificação de encerramento do ciclo

Após a validação real, poderá ser registrada:

```text
CICLO F5-P3: FORMALMENTE CONCLUÍDO

PLANO DE EXECUÇÃO: APROVADO

AMBIENTE TÉCNICO: APTO

LINHA DE BASE: CONFIRMADA

BLOCOS REAIS: DEFINIDOS

ORDEM OPERACIONAL: VALIDADA

OBJETOS TÉCNICOS: IDENTIFICADOS

ARQUIVOS ENVOLVIDOS: MAPEADOS

DEPENDÊNCIAS: VALIDADAS

COMANDOS: CLASSIFICADOS

AUTORIZAÇÕES: DEFINIDAS

RISCOS: CLASSIFICADOS

CRITÉRIOS DE INTERRUPÇÃO: VALIDADOS

EVIDÊNCIAS: ESPECIFICADAS

TESTES: PLANEJADOS

PONTOS DE CONTROLE: ESTABELECIDOS

PLANOS DE RETORNO: VALIDADOS

EXECUÇÃO DO F5-P4: AUTORIZÁVEL

ALTERAÇÕES SILENCIOSAS: PROIBIDAS

FESTANÇA 2026: INTEGRALMENTE PROTEGIDA
```

Essa certificação somente poderá ser registrada após validação humana dos resultados reais.

---

# 89. Próximo movimento operacional

Antes de detalhar qualquer bloco de criação, deverá ser reconfirmado o resultado real do F5-P2.

Primeiro bloco:

```bash
pwd
```

Segundo bloco:

```bash
git rev-parse --show-toplevel
```

Terceiro bloco:

```bash
git branch --show-current
```

Quarto bloco:

```bash
git rev-parse --short HEAD
```

Quinto bloco:

```bash
git status --short
```

Sexto bloco:

```bash
find docs/festanca/technical-implementation -maxdepth 2 -print | sort
```

Cada saída deverá ser analisada separadamente.

Nenhuma alteração física está autorizada por esta seção.

---

# 90. Próximo ciclo oficial

**F5-P4**

Arquivo:

```text
docs/festanca/technical-implementation/permanent-portal-structure-implementation.md
```

Denominação oficial:

**Modelo Executivo de Implementação da Estrutura Permanente do Portal da FESTANÇA**

Esse ciclo deverá estabelecer:

- estrutura física permanente;
- diretórios oficiais;
- arquivos-base;
- separação entre portal e edições anuais;
- componentes compartilhados;
- caminhos oficiais;
- regras de criação;
- critérios de não sobrescrita;
- compatibilidade com a estrutura existente;
- validação após cada criação;
- evidências;
- testes estruturais;
- planos de retorno;
- proteção integral da FESTANÇA 2026.

O F5-P4 somente poderá autorizar criação física após:

- conclusão real do F5-P2;
- conclusão real do F5-P3;
- confirmação da linha de base;
- validação das dependências;
- aprovação dos blocos;
- autorização humana expressa.

---

# 91. Encerramento institucional

Seguimos juntos, passo a passo.

Com método.

Com segurança.

Com preservação integral da edição fundadora.

**SOMOS TODOS, AVANÇO.**

Ao encontro do futuro.

**AMÉM.**
