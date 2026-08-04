# Inventário Físico e Linha de Base Operacional da Camada de Dados do Portal Permanente da FESTANÇA

---

## Denominação oficial

**Inventário Físico e Linha de Base Operacional da Camada de Dados do Portal Permanente da FESTANÇA**

---

## Arquivo oficial

```text
docs/festanca/data/implementation/physical-inventory-and-baseline.md
```

---

## Identificação do ciclo

```text
FASE: F3
CICLO: F3-P2
DENOMINAÇÃO: Inventário Físico e Linha de Base Operacional
REGIME INICIAL: Somente leitura
CRITICIDADE: Máxima
EDIÇÃO FUNDADORA: FESTANÇA 2026
```

---

## Declaração constitucional

Este documento constitui o instrumento oficial de localização, identificação, contagem, conferência e registro da linha de base física da camada de dados do Portal Permanente da FESTANÇA.

Seu propósito é estabelecer uma representação verificável do estado real do repositório antes de qualquer correção, reorganização, migração, automação ou implementação técnica.

Nenhuma suposição documental substituirá a verificação física.

Nenhum arquivo poderá ser considerado existente apenas por constar em índice, matriz, relatório, captura de tela ou referência textual.

Nenhum documento poderá ser corrigido durante o inventário inicial.

Nenhuma divergência poderá ser ocultada.

Nenhum arquivo não inventariado poderá ser apagado, movido, renomeado ou classificado automaticamente como obsoleto.

Nenhuma linha de base será considerada válida sem identificação do diretório real, da branch, do commit de referência, do estado do Git e das evidências correspondentes.

A FESTANÇA 2026, como edição fundadora, deverá permanecer integralmente preservada durante toda a execução deste ciclo.

---

# 1. Identificação do documento

| Campo | Valor |
|---|---|
| Documento | physical-inventory-and-baseline.md |
| Caminho oficial | docs/festanca/data/implementation/physical-inventory-and-baseline.md |
| Função | Inventário físico e estabelecimento da linha de base operacional |
| Classificação | Documento constitucional operacional permanente |
| Domínio | Inventário, conferência física e rastreabilidade |
| Fase | F3 |
| Ciclo | F3-P2 |
| Regime | Permanente |
| Criticidade | Máxima |
| Mutabilidade | Estrita e controlada |
| Preservação | Integral, permanente e auditável |
| Aplicabilidade | Portal Permanente e edições anuais |
| Escopo | Diretórios e arquivos da camada de dados |
| Edição fundadora | FESTANÇA 2026 |
| Versão inicial | 1.0.0 |
| Versionamento | Obrigatório |
| Supervisão | Governança institucional |
| Validação humana | Obrigatória |
| Auditoria | Permanente |
| Evidências | Obrigatórias |
| Rastreabilidade | Integral |
| Regime de execução | Somente leitura |
| Alterações no repositório | Proibidas durante o inventário inicial |
| Compatibilidade Termux | Obrigatória |
| Compatibilidade GitHub | Obrigatória |

---

# 2. Natureza constitucional

Este documento possui natureza:

- constitucional;
- inventarial;
- operacional;
- verificadora;
- probatória;
- preventiva;
- preservacionista;
- auditável;
- reproduzível;
- permanente.

Sua função é:

- localizar fisicamente o repositório;
- identificar a raiz real do projeto;
- confirmar o diretório da camada de dados;
- contar arquivos e diretórios;
- registrar caminhos;
- registrar nomes;
- registrar tamanhos;
- identificar arquivos vazios;
- identificar possíveis duplicidades;
- identificar documentos não inventariados;
- identificar documentos previstos e ausentes;
- registrar a branch;
- registrar o commit de referência;
- registrar o estado inicial do Git;
- estabelecer a linha de base operacional;
- preservar evidências para comparações futuras.

---

# 3. Finalidade

Este ciclo tem por finalidade:

1. comprovar a existência física do corpus documental;
2. registrar o estado real do repositório;
3. identificar diferenças entre o inventário documental e o inventário físico;
4. impedir correções prematuras;
5. preservar o estado anterior às futuras intervenções;
6. estabelecer uma referência reproduzível;
7. preparar a validação estrutural;
8. preparar a validação de referências e dependências;
9. identificar riscos iniciais;
10. assegurar a proteção integral da FESTANÇA 2026.

---

# 4. Objetivos específicos

São objetivos específicos:

- confirmar o diretório atual;
- localizar a raiz do Git;
- confirmar a branch ativa;
- identificar o commit atual;
- verificar alterações pendentes;
- localizar `docs/festanca/data/`;
- localizar `docs/festanca/data/implementation/`;
- contar arquivos Markdown;
- listar arquivos por caminho;
- registrar tamanho em bytes;
- registrar quantidade de linhas;
- localizar arquivos vazios;
- localizar nomes repetidos;
- localizar arquivos com nomes fora do padrão;
- localizar arquivos não relacionados no `README.md`;
- localizar referências documentais sem arquivo físico;
- preservar saídas do Termux;
- gerar uma linha de base formal.

---

# 5. Escopo físico do inventário

O inventário abrangerá inicialmente:

```text
docs/festanca/data/
docs/festanca/data/implementation/
```

Poderá alcançar, apenas para verificação de referências:

```text
docs/festanca/
schemas/
apps/festanca-2026/
data/
```

A expansão do escopo deverá ser registrada.

Nenhum diretório externo será alterado durante este ciclo.

---

# 6. Limites operacionais

Este ciclo não autoriza:

- criação de correções;
- renomeação de arquivos;
- movimentação de arquivos;
- exclusão;
- sobrescrita;
- formatação automática;
- substituições globais;
- reorganização de diretórios;
- migração;
- publicação;
- commit;
- push;
- limpeza do Git;
- restauração destrutiva;
- alteração de permissões;
- manipulação de dados da edição fundadora.

O ciclo possui natureza exclusivamente inventarial e verificadora.

---

# 7. Regime obrigatório de execução

```text
MODO: SOMENTE LEITURA
ESCRITA EM ARQUIVOS EXISTENTES: PROIBIDA
RENOMEAÇÃO: PROIBIDA
EXCLUSÃO: PROIBIDA
MOVIMENTAÇÃO: PROIBIDA
CORREÇÃO AUTOMÁTICA: PROIBIDA
COMMIT: PROIBIDO DURANTE A COLETA INICIAL
PUSH: PROIBIDO
EVIDÊNCIAS: OBRIGATÓRIAS
VALIDAÇÃO HUMANA: OBRIGATÓRIA
```

---

# 8. Pré-condições de entrada

O ciclo F3-P2 somente poderá iniciar quando:

- o ciclo F3-P1 estiver publicado;
- o repositório estiver acessível;
- o Termux estiver funcional;
- a localização do projeto puder ser verificada;
- os comandos forem executados em blocos curtos;
- o usuário estiver preparado para registrar capturas;
- não houver autorização de escrita ativa;
- a proteção da FESTANÇA 2026 estiver reconhecida.

---

# 9. Critérios de saída

O ciclo será considerado concluído quando:

- a raiz do repositório estiver confirmada;
- o diretório da camada de dados estiver localizado;
- a branch estiver registrada;
- o commit de referência estiver registrado;
- o estado do Git estiver registrado;
- os arquivos forem contados;
- os caminhos forem listados;
- os tamanhos forem registrados;
- os arquivos vazios forem verificados;
- os possíveis itens não inventariados forem identificados;
- as divergências forem classificadas;
- a linha de base estiver formalizada;
- as evidências estiverem preservadas;
- nenhuma alteração tiver sido realizada.

---

# 10. Fluxo operacional do inventário

```text
CONFIRMAR DIRETÓRIO ATUAL
↓
LOCALIZAR RAIZ DO REPOSITÓRIO
↓
REGISTRAR BRANCH
↓
REGISTRAR COMMIT
↓
VERIFICAR ESTADO DO GIT
↓
LOCALIZAR DIRETÓRIOS
↓
CONTAR ARQUIVOS
↓
LISTAR CAMINHOS
↓
REGISTRAR TAMANHOS
↓
REGISTRAR QUANTIDADE DE LINHAS
↓
IDENTIFICAR ARQUIVOS VAZIOS
↓
IDENTIFICAR POSSÍVEIS DUPLICIDADES
↓
COMPARAR COM O INVENTÁRIO DOCUMENTAL
↓
CLASSIFICAR DIVERGÊNCIAS
↓
REGISTRAR LINHA DE BASE
↓
VALIDAR EVIDÊNCIAS
```

---

# 11. Protocolo de localização do repositório

A localização deverá ser confirmada por comandos independentes.

## 11.1. Diretório atual

```bash
pwd
```

Resultado esperado:

```text
CAMINHO ABSOLUTO DO DIRETÓRIO ATUAL
```

## 11.2. Raiz real do repositório

```bash
git rev-parse --show-toplevel
```

Resultado esperado:

```text
CAMINHO ABSOLUTO DA RAIZ DO REPOSITÓRIO
```

## 11.3. Confirmação do diretório de trabalho

```bash
cd "$(git rev-parse --show-toplevel)"
pwd
```

Nenhum caminho deverá ser presumido.

---

# 12. Protocolo de identificação do Git

## 12.1. Branch ativa

```bash
git branch --show-current
```

## 12.2. Commit de referência

```bash
git rev-parse HEAD
```

## 12.3. Commit abreviado

```bash
git rev-parse --short HEAD
```

## 12.4. Estado resumido

```bash
git status --short
```

## 12.5. Estado completo

```bash
git status
```

A saída do estado completo somente deverá ser utilizada quando necessária e em bloco separado.

---

# 13. Regra para repositório com alterações pendentes

Caso `git status --short` apresente conteúdo:

- não corrigir;
- não descartar;
- não restaurar;
- não adicionar;
- não criar commit;
- registrar a saída;
- classificar os arquivos;
- identificar se as alterações pertencem ao ciclo atual;
- interromper qualquer operação de escrita;
- prosseguir apenas com verificações de leitura autorizadas.

O estado deverá ser classificado como:

```text
LIMPO
ALTERAÇÕES CONHECIDAS
ALTERAÇÕES NÃO CLASSIFICADAS
ESTADO CRÍTICO
```

---

# 14. Protocolo de localização dos diretórios

## 14.1. Camada de dados

```bash
test -d docs/festanca/data && echo "OK: docs/festanca/data" || echo "AUSENTE: docs/festanca/data"
```

## 14.2. Diretório da implementação

```bash
test -d docs/festanca/data/implementation && echo "OK: implementation" || echo "AUSENTE: implementation"
```

## 14.3. Diretórios imediatos

```bash
find docs/festanca/data -mindepth 1 -maxdepth 1 -type d -print
```

## 14.4. Árvore limitada

Quando disponível:

```bash
find docs/festanca/data -maxdepth 2 -print
```

As saídas extensas deverão ser divididas quando necessário.

---

# 15. Protocolo de contagem dos arquivos

## 15.1. Total de arquivos da camada

```bash
find docs/festanca/data -type f | wc -l
```

## 15.2. Arquivos no nível principal

```bash
find docs/festanca/data -maxdepth 1 -type f | wc -l
```

## 15.3. Arquivos da implementação

```bash
find docs/festanca/data/implementation -maxdepth 1 -type f | wc -l
```

## 15.4. Arquivos Markdown

```bash
find docs/festanca/data -type f -name '*.md' | wc -l
```

## 15.5. Arquivos não Markdown

```bash
find docs/festanca/data -type f ! -name '*.md' -print
```

---

# 16. Protocolo de listagem física

## 16.1. Arquivos da camada principal

```bash
find docs/festanca/data -maxdepth 1 -type f -printf '%f\n' | sort
```

Caso `-printf` não esteja disponível:

```bash
find docs/festanca/data -maxdepth 1 -type f | sort
```

## 16.2. Arquivos da implementação

```bash
find docs/festanca/data/implementation -maxdepth 1 -type f | sort
```

## 16.3. Listagem completa controlada

```bash
find docs/festanca/data -type f | sort
```

A listagem completa deverá ser utilizada somente se o volume permanecer manejável.

---

# 17. Protocolo de tamanhos dos arquivos

## 17.1. Tamanho legível

```bash
ls -lh docs/festanca/data/*.md
```

## 17.2. Tamanho em bytes

```bash
wc -c docs/festanca/data/*.md
```

## 17.3. Tamanhos dos arquivos da implementação

```bash
wc -c docs/festanca/data/implementation/*.md
```

Caso ainda exista somente o `README.md` e o documento atual, o resultado deverá ser registrado sem inferência sobre os ciclos posteriores.

---

# 18. Protocolo de quantidade de linhas

## 18.1. Documentos da camada principal

```bash
wc -l docs/festanca/data/*.md
```

## 18.2. Documentos da implementação

```bash
wc -l docs/festanca/data/implementation/*.md
```

Arquivos com quantidades muito inferiores ao padrão deverão ser classificados para análise, sem correção automática.

---

# 19. Protocolo de arquivos vazios

## 19.1. Arquivos com zero byte

```bash
find docs/festanca/data -type f -size 0 -print
```

## 19.2. Arquivos Markdown sem conteúdo significativo

A verificação semântica não será executada automaticamente neste ciclo.

Poderá ser utilizada apenas a identificação preliminar por quantidade de linhas:

```bash
find docs/festanca/data -type f -name '*.md' -exec wc -l {} \;
```

Arquivos com zero byte constituem divergência crítica.

---

# 20. Protocolo de nomes fora do padrão

O padrão esperado é:

```text
letras minúsculas
palavras separadas por hífen
extensão .md
ausência de espaços
ausência de caracteres especiais desnecessários
```

## 20.1. Arquivos com letras maiúsculas

```bash
find docs/festanca/data -type f | grep '[A-Z]'
```

## 20.2. Arquivos com espaços

```bash
find docs/festanca/data -type f | grep ' '
```

## 20.3. Arquivos sem extensão Markdown

```bash
find docs/festanca/data -type f ! -name '*.md'
```

A presença de `README.md` constitui exceção institucional autorizada quanto às letras maiúsculas.

---

# 21. Protocolo de possíveis duplicidades de nome

## 21.1. Nomes repetidos em diretórios distintos

```bash
find docs/festanca/data -type f -printf '%f\n' | sort | uniq -d
```

Caso `-printf` não esteja disponível:

```bash
find docs/festanca/data -type f | sed 's|.*/||' | sort | uniq -d
```

A repetição de nomes não constitui automaticamente duplicidade indevida.

Deverão ser analisados:

- diretório;
- finalidade;
- conteúdo;
- versão;
- contexto;
- dependências.

---

# 22. Protocolo de possíveis conteúdos duplicados

A comparação de conteúdo será apenas preparatória.

Poderão ser gerados hashes em modo leitura:

```bash
sha256sum docs/festanca/data/*.md
```

Para a subpasta:

```bash
sha256sum docs/festanca/data/implementation/*.md
```

Hashes iguais deverão ser registrados como:

```text
POSSÍVEL DUPLICIDADE DE CONTEÚDO
```

Nenhum arquivo será removido com base apenas em hash coincidente.

---

# 23. Protocolo de identificação de arquivos não inventariados

A comparação deverá utilizar como referências:

```text
docs/festanca/data/README.md
docs/festanca/data/data-document-dependency-matrix.md
docs/festanca/data/data-constitutional-conformance-checklist.md
docs/festanca/data/data-constitutional-consolidation-report.md
```

O processo deverá identificar:

- arquivo físico não citado;
- arquivo citado e fisicamente ausente;
- nome diferente;
- caminho diferente;
- arquivo em subdiretório inesperado;
- documento temporário;
- cópia;
- backup local;
- arquivo truncado;
- arquivo de teste.

---

# 24. Classificação dos itens encontrados

Cada item deverá ser classificado como:

| Código | Classificação | Definição |
|---|---|---|
| OFC | Oficial confirmado | Existe e corresponde ao inventário |
| PEV | Previsto | Está documentado, mas ainda não foi criado |
| AUS | Ausente | Deveria existir, mas não foi localizado |
| NIN | Não inventariado | Existe fisicamente, mas não consta no inventário |
| DUP | Possível duplicidade | Exige análise de conteúdo e função |
| TMP | Temporário | Arquivo de trabalho ainda não consolidado |
| BCK | Cópia de segurança local | Exige classificação e proteção |
| ORF | Órfão | Sem relação documental identificada |
| DIV | Divergente | Nome, caminho ou conteúdo incompatível |
| FUN | Fundador | Relacionado diretamente à FESTANÇA 2026 |
| IGN | Ignorado justificadamente | Fora do escopo por decisão registrada |

---

# 25. Classificação das divergências

| Código | Tipo | Exemplo |
|---|---|---|
| DV-EX | Existência | Arquivo previsto ausente |
| DV-NM | Nome | Nome físico diferente do oficial |
| DV-CP | Caminho | Arquivo em diretório diferente |
| DV-EXE | Extensão | Arquivo sem `.md` |
| DV-TM | Tamanho | Arquivo vazio ou anormalmente reduzido |
| DV-LN | Linhas | Conteúdo possivelmente truncado |
| DV-DP | Duplicidade | Nome ou hash repetido |
| DV-OR | Orfandade | Arquivo sem referência |
| DV-GIT | Estado Git | Alteração não classificada |
| DV-FN | Fundadora | Risco à FESTANÇA 2026 |

---

# 26. Níveis de criticidade

| Nível | Definição | Tratamento |
|---|---|---|
| C1 | Informativo | Registrar |
| C2 | Baixo | Revisar posteriormente |
| C3 | Moderado | Análise obrigatória |
| C4 | Alto | Bloqueio parcial |
| C5 | Crítico | Bloqueio do ciclo |
| CF | Fundador | Bloqueio total e proteção máxima |

---

# 27. Registro da localização física

| Campo | Resultado |
|---|---|
| Data da verificação | A registrar |
| Horário | A registrar |
| Diretório inicial | A registrar |
| Raiz do repositório | A registrar |
| Diretório de dados | A registrar |
| Diretório de implementação | A registrar |
| Ambiente | Termux |
| Responsável | A registrar |
| Evidência | A vincular |

---

# 28. Registro do estado do Git

| Campo | Resultado |
|---|---|
| Branch atual | A registrar |
| Commit completo | A registrar |
| Commit abreviado | A registrar |
| Estado do Git | A registrar |
| Arquivos modificados | A registrar |
| Arquivos não rastreados | A registrar |
| Divergências conhecidas | A registrar |
| Evidência | A vincular |

---

# 29. Registro quantitativo

| Indicador | Resultado |
|---|---:|
| Total de arquivos em `docs/festanca/data/` | A registrar |
| Arquivos no nível principal | A registrar |
| Arquivos em `implementation/` | A registrar |
| Total de arquivos Markdown | A registrar |
| Total de arquivos não Markdown | A registrar |
| Arquivos vazios | A registrar |
| Possíveis duplicidades de nome | A registrar |
| Possíveis duplicidades de conteúdo | A registrar |
| Arquivos não inventariados | A registrar |
| Arquivos previstos e ausentes | A registrar |
| Divergências fundadoras | A registrar |

---

# 30. Inventário físico da camada principal

| ID | Arquivo | Caminho | Tamanho | Linhas | Estado | Evidência |
|---|---|---|---:|---:|---|---|
| INV-DATA-001 | A registrar | A registrar | A registrar | A registrar | A classificar | A vincular |

Uma linha deverá ser criada para cada arquivo localizado.

---

# 31. Inventário físico da implementação

| ID | Arquivo | Caminho | Ciclo | Tamanho | Linhas | Estado |
|---|---|---|---|---:|---:|---|
| INV-IMP-001 | README.md | docs/festanca/data/implementation/README.md | F3-P1 | A registrar | A registrar | A classificar |
| INV-IMP-002 | physical-inventory-and-baseline.md | docs/festanca/data/implementation/physical-inventory-and-baseline.md | F3-P2 | A registrar | A registrar | Documento atual |

Os documentos dos ciclos posteriores deverão permanecer classificados como previstos enquanto não forem fisicamente criados.

---

# 32. Documentos previstos da Fase F3

| Ciclo | Arquivo | Estado inicial |
|---|---|---|
| F3-P1 | README.md | Criado |
| F3-P2 | physical-inventory-and-baseline.md | Documento atual |
| F3-P3 | repository-structure-validation.md | Previsto |
| F3-P4 | document-reference-integrity-validation.md | Previsto |
| F3-P5 | data-schema-implementation-plan.md | Previsto |
| F3-P6 | data-contract-implementation-plan.md | Previsto |
| F3-P7 | automated-validation-framework.md | Previsto |
| F3-P8 | security-privacy-and-access-implementation.md | Previsto |
| F3-P9 | backup-recovery-and-preservation-implementation.md | Previsto |
| F3-P10 | monitoring-observability-and-audit-implementation.md | Previsto |
| F3-P11 | founder-edition-operational-protection.md | Previsto |
| F3-P12 | operational-conformance-checklist.md | Previsto |
| F3-P13 | operational-certification-report.md | Previsto |

A ausência física dos documentos ainda não produzidos não constitui não conformidade.

---

# 33. Comparação entre inventário previsto e físico

| ID | Documento previsto | Localizado | Caminho correto | Nome correto | Classificação |
|---|---|---|---|---|---|
| CMP-001 | A registrar | A registrar | A registrar | A registrar | A classificar |

A comparação deverá distinguir:

- documento ainda previsto;
- documento obrigatório já produzido;
- documento ausente indevidamente;
- documento com nome divergente;
- documento em caminho divergente.

---

# 34. Registro de arquivos vazios

| ID | Arquivo | Caminho | Tamanho | Criticidade | Tratamento |
|---|---|---|---:|---|---|
| VAZ-001 | A preencher | A preencher | 0 | A classificar | Bloquear correção até análise |

Nenhum arquivo vazio poderá ser preenchido silenciosamente.

---

# 35. Registro de possíveis duplicidades

| ID | Arquivo A | Arquivo B | Critério | Hash | Estado |
|---|---|---|---|---|---|
| DUP-001 | A preencher | A preencher | Nome ou conteúdo | A registrar | Em análise |

Toda duplicidade deverá ser tratada segundo:

```text
IDENTIFICAR
↓
COMPARAR
↓
ANALISAR FINALIDADE
↓
ANALISAR DEPENDÊNCIAS
↓
CLASSIFICAR
↓
DECIDIR
↓
REGISTRAR
```

---

# 36. Registro de arquivos não inventariados

| ID | Arquivo | Caminho | Tamanho | Hipótese | Classificação |
|---|---|---|---:|---|---|
| NIN-001 | A preencher | A preencher | A registrar | A registrar | A definir |

Nenhum arquivo não inventariado será excluído neste ciclo.

---

# 37. Registro de arquivos previstos e ausentes

| ID | Documento | Caminho esperado | Obrigatoriedade atual | Criticidade | Estado |
|---|---|---|---|---|---|
| AUS-001 | A preencher | A preencher | A definir | A definir | A analisar |

Documentos de ciclos ainda não iniciados deverão ser marcados como:

```text
PREVISTO — AUSÊNCIA LEGÍTIMA NO ESTÁGIO ATUAL
```

---

# 38. Registro de nomes divergentes

| ID | Nome oficial | Nome físico | Caminho | Impacto | Estado |
|---|---|---|---|---|---|
| NM-001 | A preencher | A preencher | A preencher | A definir | Em análise |

A correção de nome somente poderá ocorrer em ciclo posterior e com análise de referências.

---

# 39. Registro de caminhos divergentes

| ID | Caminho esperado | Caminho físico | Documento | Impacto | Estado |
|---|---|---|---|---|---|
| CP-001 | A preencher | A preencher | A preencher | A definir | Em análise |

Nenhum arquivo será movido durante este ciclo.

---

# 40. Registro de evidências

| ID | Tipo | Comando ou origem | Resultado relacionado | Localização | Integridade |
|---|---|---|---|---|---|
| EVD-F3P2-001 | Captura | `pwd` | Diretório atual | A vincular | A verificar |
| EVD-F3P2-002 | Captura | `git rev-parse --show-toplevel` | Raiz do repositório | A vincular | A verificar |
| EVD-F3P2-003 | Captura | `git branch --show-current` | Branch | A vincular | A verificar |
| EVD-F3P2-004 | Captura | `git rev-parse HEAD` | Commit | A vincular | A verificar |
| EVD-F3P2-005 | Captura | `git status --short` | Estado Git | A vincular | A verificar |
| EVD-F3P2-006 | Captura | Contagem de arquivos | Quantitativo | A vincular | A verificar |
| EVD-F3P2-007 | Captura | Listagem física | Nomes e caminhos | A vincular | A verificar |
| EVD-F3P2-008 | Captura | Arquivos vazios | Integridade preliminar | A vincular | A verificar |

---

# 41. Nomenclatura das evidências

Recomenda-se:

```text
F3-P2-EVD-001-root-repository.png
F3-P2-EVD-002-git-branch-commit.png
F3-P2-EVD-003-git-status.png
F3-P2-EVD-004-data-file-count.png
F3-P2-EVD-005-data-file-list.png
F3-P2-EVD-006-implementation-file-list.png
F3-P2-EVD-007-file-sizes.png
F3-P2-EVD-008-empty-files.png
```

A denominação poderá ser adaptada, desde que permaneça consistente e rastreável.

---

# 42. Linha de base operacional

A linha de base deverá registrar o estado do repositório em um ponto específico.

Ela será composta por:

- raiz do repositório;
- branch;
- commit;
- data;
- horário;
- estado do Git;
- total de arquivos;
- nomes;
- caminhos;
- tamanhos;
- quantidade de linhas;
- hashes quando aplicáveis;
- divergências;
- evidências;
- responsável;
- parecer inicial.

---

# 43. Registro formal da linha de base

| Campo | Valor |
|---|---|
| Identificador | BASELINE-F3-P2-001 |
| Data | A registrar |
| Horário | A registrar |
| Repositório | A registrar |
| Branch | A registrar |
| Commit | A registrar |
| Estado do Git | A registrar |
| Diretório inventariado | docs/festanca/data/ |
| Total de arquivos | A registrar |
| Total de documentos oficiais | A registrar |
| Total de divergências | A registrar |
| Divergências críticas | A registrar |
| Divergências fundadoras | A registrar |
| Evidências | A vincular |
| Responsável | A registrar |
| Validação humana | Pendente |
| Estado | Em construção |

---

# 44. Imutabilidade lógica da linha de base

Após sua validação, a linha de base não deverá ser alterada para refletir correções posteriores.

As evoluções deverão gerar novas linhas de base:

```text
BASELINE-F3-P2-001 — Estado inicial
BASELINE-F3-P3-001 — Após validação estrutural
BASELINE-F3-P4-001 — Após validação referencial
BASELINE-F3-FINAL — Estado certificado
```

A comparação entre linhas de base deverá preservar todas as versões.

---

# 45. Hashes da linha de base

Quando aplicável, poderão ser registrados:

- SHA-256 dos documentos;
- hash do conjunto de caminhos;
- hash de arquivos críticos;
- hash dos dados fundadores;
- hash de relatórios de inventário.

Exemplo:

```bash
sha256sum docs/festanca/data/*.md
```

A utilização de hashes não substitui a análise documental.

---

# 46. Proteção da edição fundadora

Durante o inventário, toda referência à FESTANÇA 2026 deverá receber atenção prioritária.

Deverão ser preservados:

- arquivos originais;
- dados brutos;
- programação;
- festeiros;
- grupos culturais;
- locais;
- registros;
- imagens;
- áudios;
- vídeos;
- identificadores;
- metadados;
- esquemas;
- relacionamentos;
- documentos de migração;
- evidências;
- commits;
- versões históricas.

---

# 47. Proibições específicas relativas à edição fundadora

São proibidos:

- alterar valores originais;
- excluir arquivos;
- substituir registros;
- reutilizar identificadores;
- mover documentos sem rastreabilidade;
- publicar dados restritos;
- remover versões;
- descartar evidências;
- modificar coordenadas;
- modificar nomes sem registro;
- corrigir conteúdos históricos diretamente;
- gerar nova versão sem vínculo com o original.

---

# 48. Verificação de referências à FESTANÇA 2026

Poderá ser utilizada pesquisa em modo leitura:

```bash
grep -RIn "FESTANÇA 2026" docs/festanca/data
```

Também poderá ser utilizada:

```bash
grep -RIn "edição fundadora" docs/festanca/data
```

A saída deverá ser dividida se for extensa.

Nenhuma substituição será executada.

---

# 49. Proteção de dados pessoais no inventário

As evidências não deverão expor desnecessariamente:

- CPFs;
- documentos pessoais;
- endereços privados;
- telefones;
- e-mails pessoais;
- coordenadas sensíveis;
- dados de crianças e adolescentes;
- credenciais;
- tokens;
- chaves;
- informações restritas.

Caso uma saída contenha dado sensível:

- não compartilhar integralmente;
- registrar a ocorrência;
- preservar a evidência em ambiente protegido;
- utilizar mascaramento na apresentação;
- comunicar a necessidade de tratamento.

---

# 50. Verificação de segredos e credenciais

Este ciclo não realizará varredura destrutiva nem correção automática.

Poderão ser observados sinais de:

- chaves expostas;
- tokens;
- senhas;
- credenciais;
- arquivos `.env`;
- backups indevidos.

Qualquer ocorrência deverá ser classificada como crítica e tratada em ciclo específico.

---

# 51. Inteligência artificial no inventário

A inteligência artificial poderá auxiliar na:

- comparação de listas;
- identificação de padrões;
- classificação preliminar;
- detecção de possíveis nomes divergentes;
- organização das evidências;
- preparação do relatório;
- análise de duplicidades aparentes.

A inteligência artificial não poderá:

- excluir arquivos;
- decidir pela obsolescência;
- alterar a linha de base;
- concluir autenticidade sem evidência;
- substituir validação humana;
- corrigir divergências automaticamente;
- redefinir dados da edição fundadora.

---

# 52. Gestão de riscos do ciclo

| Risco | Impacto | Controle |
|---|---|---|
| Executar comando no diretório errado | Crítico | Confirmar `pwd` e raiz Git |
| Alterar arquivo acidentalmente | Crítico | Modo somente leitura |
| Ocultar alteração pendente | Alto | Registrar `git status --short` |
| Saída extensa demais | Moderado | Dividir comandos |
| Classificar arquivo incorretamente | Alto | Validação humana |
| Excluir duplicidade aparente | Crítico | Exclusão proibida |
| Expor dado pessoal em captura | Crítico | Revisar evidência |
| Sobrescrever dados fundadores | Fundador | Escrita proibida |
| Perder evidência | Alto | Registro e nomenclatura |
| Criar linha de base incompleta | Alto | Checklist obrigatório |

---

# 53. Bloqueios obrigatórios

O ciclo deverá ser interrompido se:

- a raiz do repositório não puder ser confirmada;
- o comando Git indicar que o local não é um repositório;
- houver risco de execução no diretório incorreto;
- surgir comando destrutivo;
- o estado do Git for incompreensível;
- arquivos fundadores parecerem ausentes;
- houver indício de sobrescrita;
- dados pessoais forem expostos indevidamente;
- as evidências não puderem ser preservadas;
- ocorrer resultado inesperado não analisado.

---

# 54. Checklist executivo do ciclo

## 54.1. Ambiente

- [ ] Diretório atual confirmado.
- [ ] Raiz do repositório confirmada.
- [ ] Ambiente Termux identificado.
- [ ] Modo somente leitura confirmado.
- [ ] Nenhum comando destrutivo utilizado.

## 54.2. Git

- [ ] Branch registrada.
- [ ] Commit completo registrado.
- [ ] Commit abreviado registrado.
- [ ] Estado do Git registrado.
- [ ] Alterações pendentes classificadas.

## 54.3. Diretórios

- [ ] `docs/festanca/data/` localizado.
- [ ] `docs/festanca/data/implementation/` localizado.
- [ ] Subdiretórios imediatos registrados.
- [ ] Caminhos inesperados classificados.

## 54.4. Arquivos

- [ ] Total de arquivos contado.
- [ ] Total de Markdown contado.
- [ ] Arquivos não Markdown listados.
- [ ] Nomes registrados.
- [ ] Caminhos registrados.
- [ ] Tamanhos registrados.
- [ ] Quantidade de linhas registrada.
- [ ] Arquivos vazios verificados.

## 54.5. Divergências

- [ ] Possíveis duplicidades registradas.
- [ ] Arquivos não inventariados registrados.
- [ ] Arquivos previstos e ausentes classificados.
- [ ] Nomes divergentes registrados.
- [ ] Caminhos divergentes registrados.
- [ ] Divergências fundadoras avaliadas.

## 54.6. Linha de base

- [ ] Identificador definido.
- [ ] Data e horário registrados.
- [ ] Branch e commit vinculados.
- [ ] Quantitativos registrados.
- [ ] Divergências consolidadas.
- [ ] Evidências vinculadas.
- [ ] Validação humana registrada.

---

# 55. Critérios de conformidade

O ciclo será considerado conforme quando:

- todos os comandos utilizados forem de leitura;
- a localização real estiver comprovada;
- o estado do Git estiver registrado;
- o corpus físico estiver listado;
- os quantitativos estiverem registrados;
- os arquivos vazios forem verificados;
- as divergências forem classificadas;
- a linha de base estiver formalizada;
- as evidências estiverem preservadas;
- nenhuma alteração tiver sido realizada;
- a FESTANÇA 2026 permanecer integralmente protegida.

---

# 56. Critérios de aprovação condicional

A aprovação condicional poderá ocorrer quando:

- existirem divergências ainda não solucionadas;
- nenhuma divergência crítica permanecer sem registro;
- nenhuma alteração tiver sido realizada;
- os responsáveis estiverem identificados;
- os próximos passos estiverem definidos;
- a edição fundadora estiver preservada;
- as evidências forem suficientes para continuar.

---

# 57. Critérios de bloqueio da aprovação

A aprovação será bloqueada quando:

- a raiz do repositório não estiver comprovada;
- o commit não estiver registrado;
- o estado do Git não estiver conhecido;
- existirem arquivos críticos ausentes sem análise;
- a contagem estiver incompleta;
- houver divergência fundadora não classificada;
- tiver ocorrido alteração durante o inventário;
- as evidências forem insuficientes;
- houver risco de perda ou exposição.

---

# 58. Pareceres possíveis

```text
PARECER A — INVENTÁRIO FÍSICO CONFORME
PARECER B — INVENTÁRIO CONFORME COM OBSERVAÇÕES
PARECER C — INVENTÁRIO CONDICIONAL
PARECER D — INVENTÁRIO NÃO CONFORME
PARECER E — INVENTÁRIO BLOQUEADO
```

---

# 59. Registro do parecer

| Campo | Registro |
|---|---|
| Parecer | A definir |
| Data | A registrar |
| Responsável | A registrar |
| Escopo verificado | A registrar |
| Evidências | A vincular |
| Divergências | A registrar |
| Riscos | A registrar |
| Condições | A registrar |
| Próximo ciclo autorizado | A definir |

---

# 60. Resultado esperado

Ao final deste ciclo, deverá ser possível declarar:

```text
CORPUS FÍSICO: LOCALIZADO
RAIZ DO REPOSITÓRIO: CONFIRMADA
BRANCH: REGISTRADA
COMMIT DE REFERÊNCIA: REGISTRADO
ESTADO DO GIT: DOCUMENTADO
ARQUIVOS: CONTADOS
NOMES E CAMINHOS: INVENTARIADOS
TAMANHOS: REGISTRADOS
ARQUIVOS VAZIOS: VERIFICADOS
DIVERGÊNCIAS: CATALOGADAS
LINHA DE BASE: ESTABELECIDA
ALTERAÇÕES: NÃO REALIZADAS
EDIÇÃO FUNDADORA: INTEGRALMENTE PRESERVADA
```

---

# 61. Documentos predecessores

Este documento depende de:

```text
docs/festanca/data/implementation/README.md
docs/festanca/data/README.md
docs/festanca/data/data-document-dependency-matrix.md
docs/festanca/data/data-constitutional-conformance-checklist.md
docs/festanca/data/data-constitutional-consolidation-report.md
```

---

# 62. Documento sucessor

Após a conclusão deste ciclo, deverá ser criado:

```text
docs/festanca/data/implementation/repository-structure-validation.md
```

Denominação oficial:

**Modelo Executivo de Validação Estrutural do Repositório e dos Documentos Constitucionais de Dados do Portal Permanente da FESTANÇA**

---

# 63. Critério de transição para F3-P3

O ciclo F3-P3 somente deverá iniciar quando:

- o inventário estiver concluído;
- a linha de base estiver registrada;
- os caminhos físicos forem conhecidos;
- os arquivos estiverem listados;
- as divergências estiverem classificadas;
- nenhuma escrita não autorizada tiver ocorrido;
- as evidências estiverem preservadas;
- houver autorização expressa para prosseguir.

---

# 64. Registro de decisões

| ID | Decisão | Justificativa | Responsável | Evidência | Estado |
|---|---|---|---|---|---|
| DEC-F3P2-001 | Executar inventário em modo somente leitura | Preservar o estado original | A registrar | Este documento | Aprovada |
| DEC-F3P2-002 | Não corrigir divergências neste ciclo | Separar inventário de correção | A registrar | Este documento | Aprovada |
| DEC-F3P2-003 | Criar linha de base vinculada ao commit | Garantir reprodução futura | A registrar | A produzir | Pendente |

---

# 65. Registro de pendências

| ID | Pendência | Criticidade | Responsável | Prazo | Estado |
|---|---|---|---|---|---|
| PD-F3P2-001 | Executar comandos de localização | Alta | A definir | A definir | Não iniciada |
| PD-F3P2-002 | Registrar branch e commit | Alta | A definir | A definir | Não iniciada |
| PD-F3P2-003 | Contar e listar arquivos | Alta | A definir | A definir | Não iniciada |
| PD-F3P2-004 | Formalizar linha de base | Crítica | A definir | A definir | Não iniciada |

---

# 66. Estado inicial deste documento

| Campo | Valor |
|---|---|
| Documento | physical-inventory-and-baseline.md |
| Função | Inventário físico e linha de base operacional |
| Fase | F3 |
| Ciclo | F3-P2 |
| Regime | Permanente |
| Edição fundadora | FESTANÇA 2026 |
| Criticidade | Máxima |
| Mutabilidade | Estrita e controlada |
| Preservação | Integral |
| Regime de execução | Somente leitura |
| Diretório-alvo | docs/festanca/data/ |
| Diretório de implementação | docs/festanca/data/implementation/ |
| Localização do repositório | Pendente |
| Branch | Pendente |
| Commit | Pendente |
| Estado do Git | Pendente |
| Contagem dos arquivos | Pendente |
| Nomes e caminhos | Pendentes |
| Tamanhos | Pendentes |
| Quantidade de linhas | Pendente |
| Arquivos vazios | Pendente |
| Duplicidades | Pendentes de verificação |
| Arquivos não inventariados | Pendentes de verificação |
| Divergências | Pendentes de classificação |
| Linha de base | Pendente |
| Evidências | Obrigatórias |
| Alterações silenciosas | Proibidas |
| Validação humana | Obrigatória |
| Auditoria | Permanente |
| Proteção fundadora | Máxima |
| Próximo ciclo | F3-P3 |

---

# 67. Vigência

Este documento entra em vigor imediatamente após sua aprovação e publicação no repositório oficial.

Sua vigência será permanente.

Toda revisão deverá:

- preservar versões anteriores;
- registrar justificativas;
- identificar responsáveis;
- apresentar análise de impacto;
- preservar a linha de base original;
- registrar novas linhas de base separadamente;
- preservar as evidências anteriores;
- manter a distinção entre inventário e correção;
- atualizar os comandos apenas com justificativa;
- manter compatibilidade com Termux;
- proteger dados pessoais;
- proteger conhecimentos tradicionais;
- proteger a FESTANÇA 2026;
- assegurar rastreabilidade integral.

---

# 68. Certificação de abertura do ciclo

Com a publicação deste documento, fica formalmente estabelecido:

```text
CICLO F3-P2: FORMALMENTE ABERTO
OBJETO: INVENTÁRIO FÍSICO E LINHA DE BASE
REGIME: SOMENTE LEITURA
LOCALIZAÇÃO FÍSICA: A VERIFICAR
BRANCH E COMMIT: A REGISTRAR
CORPUS: A INVENTARIAR
DIVERGÊNCIAS: A CLASSIFICAR
EVIDÊNCIAS: OBRIGATÓRIAS
CORREÇÕES: PROIBIDAS NESTE CICLO
LINHA DE BASE: A ESTABELECER
EDIÇÃO FUNDADORA: INTEGRALMENTE PROTEGIDA
```

---

# 69. Próximo movimento operacional

A execução deverá começar pela confirmação da localização real do repositório, utilizando comandos curtos e independentes.

Primeiro bloco recomendado:

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

Cada resultado deverá ser conferido antes da execução do bloco seguinte.

---

# 70. Próximo ciclo oficial

```text
F3-P3 — docs/festanca/data/implementation/repository-structure-validation.md
```

## Denominação oficial

**Modelo Executivo de Validação Estrutural do Repositório e dos Documentos Constitucionais de Dados do Portal Permanente da FESTANÇA**

Esse ciclo será iniciado somente após a conclusão, validação e aprovação da linha de base operacional.

---

# 71. Encerramento institucional

Seguimos juntos, passo a passo.

Com método.

Com segurança.

Com preservação integral da edição fundadora.

**SOMOS TODOS, AVANÇO.**

Ao encontro do futuro.

**AMÉM.**
