# Plano Executivo de Testes Locais, Regressão, Compatibilidade e Estabilidade do Portal Permanente da FESTANÇA

---

## Denominação oficial

**Plano Executivo de Testes Locais, Regressão, Compatibilidade e Estabilidade do Portal Permanente da FESTANÇA**

---

## Arquivo oficial

```text
docs/festanca/technical-implementation/local-testing-and-regression-plan.md
```

---

## Identificação do ciclo

| Campo | Valor |
|---|---|
| Documento | local-testing-and-regression-plan.md |
| Diretório | docs/festanca/technical-implementation/ |
| Fase | F5 |
| Ciclo | F5-P7 |
| Denominação do ciclo | Testes locais, regressão, compatibilidade e estabilidade |
| Categoria | Validação técnica, funcional, visual, responsiva, acessível e histórica |
| Função | Planejar e controlar os testes locais do Portal Permanente |
| Regime | Permanente |
| Regime inicial | Planejamento e somente leitura |
| Execução de testes | Condicionada |
| Criticidade | Máxima |
| Mutabilidade | Estrita e controlada |
| Preservação | Integral e permanente |
| Aplicabilidade | Portal Permanente, componentes compartilhados e FESTANÇA 2026 |
| Compatibilidade GitHub | Obrigatória |
| Compatibilidade Termux | Obrigatória |
| Validação humana | Obrigatória |
| Evidências | Obrigatórias |
| Auditoria | Permanente |
| Testes funcionais | Obrigatórios |
| Testes responsivos | Obrigatórios |
| Testes de acessibilidade | Obrigatórios |
| Testes de compatibilidade | Obrigatórios |
| Testes de regressão | Obrigatórios |
| Testes de segurança local | Obrigatórios |
| Plano de retorno | Obrigatório |
| Rastreabilidade | Integral |
| Proteção da edição fundadora | Máxima |

---

## Declaração constitucional

Este documento estabelece o plano executivo de testes locais, regressão, compatibilidade, estabilidade, acessibilidade, segurança e preservação histórica do Portal Permanente da FESTANÇA.

Sua finalidade é assegurar que toda estrutura, dado, componente, referência, funcionalidade e integração autorizada seja submetida a testes controlados antes de qualquer ativação, publicação ou disponibilização pública.

Nenhuma funcionalidade será considerada válida apenas porque carrega visualmente.

Nenhum componente será considerado estável apenas porque não apresenta erro aparente.

Nenhum dado será considerado corretamente integrado apenas porque possui sintaxe válida.

Nenhuma página será considerada aprovada sem testes funcionais, responsivos, acessíveis e de regressão.

Nenhuma falha poderá ser ocultada.

Nenhum resultado poderá ser certificado sem evidência.

Nenhuma correção poderá ser incorporada silenciosamente.

Nenhum teste poderá comprometer a edição fundadora FESTANÇA 2026.

A execução deverá ser:

- progressiva;
- segmentada;
- rastreável;
- reproduzível;
- auditável;
- comparável;
- reversível;
- humanamente validada.

A publicação deste documento não autoriza automaticamente:

- alteração de arquivos;
- correção de falhas;
- modificação de dados;
- substituição de componentes;
- publicação em produção;
- ativação pública;
- alteração de rotas;
- exclusão de referências;
- criação de commits;
- envio ao repositório remoto.

---

# 1. Identificação do documento

| Campo | Valor |
|---|---|
| Nome oficial | Plano Executivo de Testes Locais, Regressão, Compatibilidade e Estabilidade do Portal Permanente da FESTANÇA |
| Arquivo | local-testing-and-regression-plan.md |
| Caminho completo | docs/festanca/technical-implementation/local-testing-and-regression-plan.md |
| Fase | F5 |
| Ciclo | F5-P7 |
| Natureza | Executiva, técnica, funcional, preventiva, probatória e preservacionista |
| Regime | Permanente |
| Estado inicial | Planejamento |
| Criticidade | Máxima |
| Mutabilidade | Estrita e controlada |
| Preservação | Integral |
| Aplicabilidade | Portal Permanente, edições anuais e componentes compartilhados |
| Edição fundadora | FESTANÇA 2026 |
| Testes locais | Obrigatórios |
| Testes de regressão | Obrigatórios |
| Testes de compatibilidade | Obrigatórios |
| Testes de estabilidade | Obrigatórios |
| Testes de acessibilidade | Obrigatórios |
| Testes de segurança local | Obrigatórios |
| Validação humana | Obrigatória |
| Evidências | Obrigatórias |
| Auditoria | Permanente |
| Plano de retorno | Obrigatório |
| Rastreabilidade | Integral |
| Próximo ciclo | F5-P8 |

---

# 2. Natureza constitucional

Este documento possui natureza:

- constitucional;
- executiva;
- técnica;
- funcional;
- operacional;
- comparativa;
- responsiva;
- acessível;
- preventiva;
- auditável;
- probatória;
- preservacionista;
- reversível;
- permanente.

Sua função é estabelecer os ambientes, matrizes, procedimentos, critérios e evidências necessários para testar o Portal Permanente sem comprometer a integridade da edição fundadora.

---

# 3. Finalidade

Este ciclo tem por finalidade:

1. preparar o ambiente local de testes;
2. definir navegadores e dispositivos;
3. testar carregamento;
4. testar funcionalidades;
5. testar responsividade;
6. testar acessibilidade;
7. testar compatibilidade;
8. testar estabilidade;
9. testar dados;
10. testar componentes;
11. testar referências;
12. testar regressão;
13. verificar segurança local;
14. registrar falhas;
15. preservar evidências;
16. validar planos de retorno;
17. proteger integralmente a FESTANÇA 2026.

---

# 4. Objetivos estratégicos

São objetivos estratégicos:

- detectar falhas antes da publicação;
- impedir regressões silenciosas;
- verificar comportamento em diferentes ambientes;
- proteger o corpus fundador;
- preservar dados históricos;
- assegurar navegação funcional;
- validar componentes compartilhados;
- garantir compatibilidade móvel;
- elevar a acessibilidade;
- controlar riscos;
- registrar resultados reproduzíveis;
- assegurar capacidade de retorno;
- preparar a ativação progressiva;
- manter a continuidade histórica da FESTANÇA.

---

# 5. Princípios dos testes

A execução deverá respeitar:

```text
TESTAR ANTES DE PUBLICAR

COMPARAR ANTES DE APROVAR

REGISTRAR ANTES DE CORRIGIR

REPRODUZIR ANTES DE CERTIFICAR

PRESERVAR ANTES DE ALTERAR

RETESTAR APÓS CORRIGIR

REVERTER DIANTE DE RISCO

PROTEGER SEMPRE A EDIÇÃO FUNDADORA
```

---

# 6. Condições obrigatórias de entrada

O F5-P7 somente poderá iniciar após comprovação de:

```text
F5-P2: CONCLUÍDO

AMBIENTE TÉCNICO: VALIDADO

F5-P3: CONCLUÍDO

PLANO DE EXECUÇÃO: APROVADO

F5-P4: CONCLUÍDO

ESTRUTURA PERMANENTE: CONFIRMADA

F5-P5: CONCLUÍDO

CORPUS FUNDADOR: PRESERVADO

F5-P6: CONCLUÍDO

INTEGRAÇÃO: VALIDADA

DIVERGÊNCIAS: CLASSIFICADAS

PLANOS DE RETORNO: DISPONÍVEIS

AUTORIZAÇÃO HUMANA: EXPRESSA

FESTANÇA 2026: INTEGRALMENTE PROTEGIDA
```

Enquanto qualquer condição estiver pendente, o ciclo permanecerá em:

```text
PLANEJAMENTO
SOMENTE LEITURA
E
PREPARAÇÃO DAS MATRIZES DE TESTE
```

---

# 7. Resultado esperado

Ao final deste ciclo, deverá existir:

```text
AMBIENTE LOCAL:
VALIDADO

MATRIZ DE NAVEGADORES:
EXECUTADA

MATRIZ DE DISPOSITIVOS:
EXECUTADA

CARREGAMENTO:
APROVADO

FUNCIONALIDADES:
TESTADAS

RESPONSIVIDADE:
VALIDADA

ACESSIBILIDADE:
VALIDADA

COMPATIBILIDADE:
COMPROVADA

ESTABILIDADE:
AVALIADA

DADOS:
TESTADOS

COMPONENTES:
TESTADOS

REFERÊNCIAS:
TESTADAS

REGRESSÃO:
VERIFICADA

SEGURANÇA LOCAL:
VALIDADA

FALHAS:
REGISTRADAS

EVIDÊNCIAS:
PRESERVADAS

PLANOS DE RETORNO:
VALIDADOS

FESTANÇA 2026:
INTEGRALMENTE PROTEGIDA
```

---

# 8. Escopo dos testes

O escopo poderá compreender:

- páginas HTML;
- folhas de estilo;
- scripts;
- arquivos JSON;
- imagens;
- ícones;
- fontes;
- menus;
- cabeçalhos;
- rodapés;
- filtros;
- botões;
- cartões;
- galerias;
- programação;
- festeiros;
- locais;
- mapas;
- formulários;
- compartilhamento;
- downloads;
- links internos;
- links externos;
- componentes compartilhados;
- estrutura permanente;
- edição fundadora.

---

# 9. Objetos fora do escopo inicial

Não integram automaticamente o escopo inicial:

- testes de carga em produção;
- ataques de segurança;
- varreduras destrutivas;
- testes de estresse extremo;
- alterações automáticas;
- exclusões;
- migrações adicionais;
- publicação pública;
- modificação de DNS;
- alteração de domínio;
- envio de dados reais por formulários;
- processamento de pagamentos.

Qualquer ampliação dependerá de autorização específica.

---

# 10. Regimes operacionais

## 10.1. Regime R0 — Planejamento

Permite:

- preparar matrizes;
- definir dispositivos;
- definir navegadores;
- identificar páginas;
- classificar funcionalidades;
- preparar evidências.

## 10.2. Regime R1 — Somente leitura

Permite:

- inspecionar arquivos;
- localizar componentes;
- verificar referências;
- validar sintaxe;
- consultar dados;
- calcular integridade.

## 10.3. Regime R2 — Servidor local

Permite, mediante autorização:

- iniciar servidor local;
- carregar páginas;
- observar respostas;
- verificar recursos;
- testar navegação.

## 10.4. Regime R3 — Teste funcional

Permite:

- acionar menus;
- usar filtros;
- abrir links;
- testar mapas;
- testar compartilhamento;
- verificar mensagens.

## 10.5. Regime R4 — Teste comparativo

Permite:

- comparar versão fundadora;
- comparar versão integrada;
- identificar regressões;
- registrar divergências.

## 10.6. Regime R5 — Correção controlada

Não integra o estado inicial.

Exige:

- falha registrada;
- proposta documentada;
- autorização humana;
- plano de retorno;
- reteste obrigatório.

## 10.7. Regime R6 — Certificação

Somente poderá ocorrer após validação integral das evidências.

---

# 11. Níveis de autorização

| Nível | Operação |
|---|---|
| A0 | Planejamento |
| A1 | Somente leitura |
| A2 | Servidor local |
| A3 | Testes de carregamento |
| A4 | Testes funcionais |
| A5 | Testes responsivos |
| A6 | Testes de acessibilidade |
| A7 | Testes de compatibilidade |
| A8 | Testes de regressão |
| A9 | Testes de segurança local |
| A10 | Correção em cópia controlada |
| A11 | Correção no arquivo de trabalho |
| A12 | Commit |
| A13 | Push |
| A14 | Publicação |
| A15 | Ativação pública |

Nenhum nível será presumido.

---

# 12. Ambiente local de testes

O ambiente deverá possuir, quando aplicável:

- raiz confirmada do repositório;
- branch identificada;
- commit identificado;
- estado do Git registrado;
- servidor local;
- navegador disponível;
- ferramentas de desenvolvimento;
- console;
- inspetor de elementos;
- modo responsivo;
- espaço de armazenamento;
- conectividade controlada;
- ponto de recuperação.

---

# 13. Identificação do ambiente

Padrão:

```text
F5-P7-ENV-NNN
```

Exemplo:

```text
F5-P7-ENV-001-TERMUX-LOCAL
```

---

# 14. Matriz do ambiente

| Campo | Valor |
|---|---|
| ID do ambiente | A atribuir |
| Dispositivo | A registrar |
| Sistema operacional | A registrar |
| Navegador | A registrar |
| Versão | A registrar |
| Servidor local | A registrar |
| Porta | A registrar |
| Branch | A registrar |
| Commit | A registrar |
| Estado do Git | A registrar |
| Responsável | A registrar |
| Data | A registrar |
| Estado | Pendente |

---

# 15. Reconfirmação da linha de base

Antes de qualquer teste:

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

Cada resultado deverá ser analisado antes da continuidade.

---

# 16. Localização do Portal

Exemplo:

```bash
find apps -maxdepth 4 -type d -iname '*festanca*' | sort
```

O caminho real deverá ser confirmado antes da inicialização do servidor local.

---

# 17. Servidor local

Quando autorizado:

```bash
python -m http.server 8000
```

O comando deverá ser executado apenas no diretório confirmado.

Alternativamente:

```bash
python3 -m http.server 8000
```

---

# 18. Regras do servidor local

O servidor local:

- não representa produção;
- não autoriza publicação;
- não comprova desempenho externo;
- não certifica domínio;
- não valida CDN;
- não altera arquivos;
- serve exclusivamente aos testes autorizados.

---

# 19. Registro da sessão de teste

Cada sessão deverá possuir:

```text
ID DA SESSÃO

DATA

HORÁRIO INICIAL

HORÁRIO FINAL

RESPONSÁVEL

AMBIENTE

BRANCH

COMMIT

PORTA

ESCOPO

TESTES EXECUTADOS

RESULTADOS

FALHAS

EVIDÊNCIAS

PARECER
```

---

# 20. Identificação das sessões

Padrão:

```text
F5-P7-SES-NNN
```

Exemplo:

```text
F5-P7-SES-001-MOBILE-CHROME
```

---

# 21. Matriz de navegadores

A matriz mínima deverá considerar, quando disponíveis:

| Navegador | Ambiente | Prioridade |
|---|---|---|
| Chrome ou Chromium | Android | Crítica |
| Chrome ou Chromium | Desktop | Alta |
| Firefox | Desktop | Alta |
| Firefox | Android | Moderada |
| Edge | Desktop | Moderada |
| Safari | iOS ou macOS | Condicionada à disponibilidade |
| Navegador Samsung | Android | Alta |
| WebView | Android | Moderada |

A indisponibilidade deverá ser registrada.

---

# 22. Critérios para navegadores

Cada navegador deverá registrar:

- nome;
- versão;
- sistema;
- dispositivo;
- largura;
- altura;
- zoom;
- orientação;
- resultado;
- falhas;
- evidências.

---

# 23. Matriz de dispositivos

A matriz deverá considerar:

| Categoria | Exemplo de teste |
|---|---|
| Móvel pequeno | 320 a 360 px |
| Móvel médio | 375 a 390 px |
| Móvel grande | 412 a 430 px |
| Tablet retrato | 768 px |
| Tablet paisagem | 1024 px |
| Notebook | 1280 a 1440 px |
| Desktop | 1920 px |
| Tela ampliada | Zoom entre 150% e 200% |

Os valores são referências operacionais e poderão ser ajustados conforme os dispositivos realmente disponíveis.

---

# 24. Identificação dos dispositivos

Padrão:

```text
F5-P7-DEV-NNN
```

Exemplo:

```text
F5-P7-DEV-001-ANDROID-MOBILE
```

---

# 25. Matriz de orientação

Deverão ser testadas:

- orientação retrato;
- orientação paisagem;
- mudança de orientação;
- redimensionamento;
- reabertura da página;
- manutenção do estado funcional.

---

# 26. Testes de carregamento

Os testes deverão verificar:

- carregamento do documento;
- carregamento do CSS;
- carregamento dos scripts;
- carregamento dos dados;
- carregamento das imagens;
- carregamento dos ícones;
- carregamento das fontes;
- ausência de recursos quebrados;
- ausência de tela vazia;
- ausência de bloqueio da navegação.

---

# 27. Matriz de carregamento

| ID | Recurso | Resultado esperado | Resultado real | Estado |
|---|---|---|---|---|
| LOAD-001 | HTML principal | Carregamento completo | Pendente | A testar |
| LOAD-002 | CSS principal | Estilos aplicados | Pendente | A testar |
| LOAD-003 | JavaScript | Inicialização sem falha crítica | Pendente | A testar |
| LOAD-004 | Dados JSON | Dados disponíveis | Pendente | A testar |
| LOAD-005 | Imagens | Recursos exibidos | Pendente | A testar |
| LOAD-006 | Ícones | Recursos exibidos | Pendente | A testar |

---

# 28. Estados de carregamento

| Código | Estado |
|---|---|
| LOAD-OK | Carregamento aprovado |
| LOAD-PAR | Carregamento parcial |
| LOAD-LEN | Carregamento lento |
| LOAD-404 | Recurso não encontrado |
| LOAD-JS | Falha de JavaScript |
| LOAD-DAT | Falha de dados |
| LOAD-CSS | Falha de estilos |
| LOAD-BLK | Carregamento bloqueado |
| LOAD-PEN | Pendente |

---

# 29. Verificação do console

O console deverá ser observado quanto a:

- erros;
- advertências;
- falhas de rede;
- erros de sintaxe;
- promessas rejeitadas;
- recursos ausentes;
- violações de segurança;
- problemas de compatibilidade;
- mensagens inesperadas.

---

# 30. Classificação do console

| Código | Classificação |
|---|---|
| CON-ERR | Erro |
| CON-WRN | Advertência |
| CON-INF | Informação |
| CON-DEP | Recurso obsoleto |
| CON-SEC | Segurança |
| CON-NET | Rede |
| CON-DAT | Dados |
| CON-PEN | Pendente |

---

# 31. Testes funcionais

Deverão abranger:

- abertura da página;
- navegação principal;
- menus;
- botões;
- filtros;
- busca;
- cartões;
- abas;
- âncoras;
- mapas;
- compartilhamento;
- downloads;
- retorno;
- mensagens;
- formulários, quando aplicáveis.

---

# 32. Identificação dos testes funcionais

Padrão:

```text
F5-P7-FUN-NNN
```

---

# 33. Matriz funcional

| ID | Funcionalidade | Ação | Resultado esperado | Estado |
|---|---|---|---|---|
| FUN-001 | Página inicial | Abrir | Conteúdo íntegro | Pendente |
| FUN-002 | Menu | Selecionar item | Seção correta | Pendente |
| FUN-003 | Programação | Aplicar filtro | Resultado coerente | Pendente |
| FUN-004 | Local | Abrir mapa | Destino válido | Pendente |
| FUN-005 | WhatsApp | Compartilhar | Texto preservado | Pendente |
| FUN-006 | Downloads | Abrir arquivo | Arquivo disponível | Pendente |

---

# 34. Testes da programação

Deverão verificar:

- exibição das atividades;
- datas;
- horários;
- categorias;
- irmandades;
- locais;
- ordenação;
- filtros;
- ausência de duplicidade indevida;
- coerência com o arquivo oficial.

---

# 35. Testes dos festeiros

Deverão verificar:

- nomes;
- títulos;
- funções;
- associação com atividades;
- caracteres especiais;
- ausência de truncamento;
- consistência histórica;
- preservação dos identificadores.

---

# 36. Testes dos locais

Deverão verificar:

- nome do local;
- identificação;
- relação com atividades;
- mapa;
- fallback de busca;
- privacidade de residências;
- autorização de pino;
- comportamento sem coordenadas;
- caracteres especiais.

---

# 37. Testes dos filtros

Cada filtro deverá ser testado:

- individualmente;
- em combinação;
- com resultado;
- sem resultado;
- após recarregamento;
- em tela móvel;
- com teclado;
- com leitor de tela, quando disponível.

---

# 38. Testes de compartilhamento

Deverão verificar:

- WhatsApp;
- cópia de texto;
- preservação de quebras de linha;
- preservação de acentos;
- links;
- títulos;
- datas;
- locais;
- ausência de código indevido;
- ausência de dados privados.

---

# 39. Testes de mapas

Deverão verificar:

- link válido;
- abertura em nova janela ou aplicativo;
- consulta de busca alternativa;
- coordenadas verificadas;
- ausência de exposição indevida;
- comportamento sem conexão;
- tratamento de erro.

---

# 40. Testes de links internos

Todo link interno deverá ser testado quanto a:

- existência do destino;
- caminho;
- âncora;
- capitalização;
- retorno;
- contexto;
- compatibilidade local;
- compatibilidade GitHub Pages, quando aplicável.

---

# 41. Testes de links externos

Todo link externo deverá ser classificado e testado quanto a:

- protocolo;
- domínio;
- disponibilidade;
- segurança;
- finalidade;
- comportamento;
- permanência;
- alternativa local.

---

# 42. Testes de referências

Deverão abranger:

- `href`;
- `src`;
- `fetch`;
- `import`;
- `url()`;
- arquivos JSON;
- imagens;
- scripts;
- estilos;
- âncoras;
- identificadores relacionados.

---

# 43. Matriz de referências

| ID | Origem | Referência | Destino esperado | Resultado |
|---|---|---|---|---|
| REF-001 | A registrar | A registrar | A registrar | Pendente |

---

# 44. Testes de dados

Os dados deverão ser testados quanto a:

- sintaxe;
- estrutura;
- tipos;
- campos obrigatórios;
- completude;
- unicidade;
- relacionamentos;
- temporalidade;
- compatibilidade;
- caracteres;
- codificação;
- preservação histórica.

---

# 45. Validação JSON

Exemplo:

```bash
python -m json.tool CAMINHO_DO_ARQUIVO_JSON
```

Quando disponível:

```bash
jq empty CAMINHO_DO_ARQUIVO_JSON
```

A validação sintática não substitui a validação semântica.

---

# 46. Testes de dados vazios

Deverão ser testados cenários como:

- lista vazia;
- campo opcional ausente;
- campo obrigatório ausente;
- valor nulo;
- texto vazio;
- identificação ausente;
- arquivo indisponível;
- erro de carregamento.

O sistema deverá apresentar comportamento previsível e compreensível.

---

# 47. Testes de caracteres

Deverão ser verificados:

- acentos;
- cedilha;
- apóstrofos;
- travessões;
- aspas;
- símbolos;
- caracteres especiais;
- nomes extensos;
- títulos extensos;
- textos multilinha.

---

# 48. Testes dos componentes

Cada componente deverá ser testado quanto a:

- renderização;
- conteúdo;
- comportamento;
- dependências;
- estilo;
- acessibilidade;
- responsividade;
- reutilização;
- compatibilidade anual;
- impacto fundador.

---

# 49. Matriz de componentes

| ID | Componente | Página | Teste | Estado |
|---|---|---|---|---|
| CMP-001 | Cabeçalho | Global | Renderização e navegação | Pendente |
| CMP-002 | Rodapé | Global | Links e conteúdo | Pendente |
| CMP-003 | Cartão | Programação | Dados e responsividade | Pendente |
| CMP-004 | Filtro | Programação | Interação | Pendente |
| CMP-005 | Botão | Compartilhamento | Ação e acessibilidade | Pendente |

---

# 50. Testes responsivos

Deverão verificar:

- ausência de rolagem horizontal indevida;
- legibilidade;
- adaptação de imagens;
- adaptação de tabelas;
- comportamento dos menus;
- largura dos cartões;
- espaçamento;
- alvos de toque;
- textos longos;
- orientação;
- zoom;
- navegação.

---

# 51. Matriz responsiva

| ID | Largura | Orientação | Página | Estado |
|---|---:|---|---|---|
| RSP-001 | 320 px | Retrato | Página inicial | Pendente |
| RSP-002 | 360 px | Retrato | Programação | Pendente |
| RSP-003 | 412 px | Retrato | Programação | Pendente |
| RSP-004 | 768 px | Retrato | Portal | Pendente |
| RSP-005 | 1024 px | Paisagem | Portal | Pendente |
| RSP-006 | 1440 px | Paisagem | Portal | Pendente |

---

# 52. Critérios de responsividade

O teste será aprovado quando:

- o conteúdo permanecer acessível;
- não houver sobreposição crítica;
- textos não forem cortados;
- botões permanecerem utilizáveis;
- menus permanecerem navegáveis;
- imagens não deformarem;
- tabelas possuírem tratamento adequado;
- a leitura não exigir zoom horizontal;
- a identidade visual for preservada.

---

# 53. Testes de acessibilidade

Deverão verificar:

- hierarquia de títulos;
- semântica;
- contraste;
- foco;
- teclado;
- rótulos;
- textos alternativos;
- nomes acessíveis;
- mensagens;
- ampliação;
- orientação;
- tamanho de toque;
- independência de cor.

---

# 54. Identificação dos testes de acessibilidade

Padrão:

```text
F5-P7-ACC-NNN
```

---

# 55. Checklist de acessibilidade

- [ ] Existe título principal coerente.
- [ ] A hierarquia de títulos é lógica.
- [ ] Imagens informativas possuem texto alternativo.
- [ ] Imagens decorativas são tratadas adequadamente.
- [ ] Botões possuem nomes compreensíveis.
- [ ] Links possuem finalidade identificável.
- [ ] Campos possuem rótulos.
- [ ] O foco é visível.
- [ ] A navegação por teclado é possível.
- [ ] O contraste é suficiente.
- [ ] O conteúdo aceita ampliação.
- [ ] O layout não perde informações com zoom.
- [ ] Os alvos de toque são utilizáveis.
- [ ] Mensagens de erro são compreensíveis.
- [ ] Informações não dependem exclusivamente de cor.

---

# 56. Testes com teclado

Deverão verificar:

- sequência de foco;
- acesso aos menus;
- ativação de botões;
- ativação de links;
- operação dos filtros;
- fechamento de elementos;
- ausência de armadilha de foco;
- retorno ao ponto lógico.

---

# 57. Testes de contraste

O contraste deverá ser avaliado especialmente em:

- títulos;
- textos;
- botões;
- links;
- cartões;
- fundos;
- estados de foco;
- mensagens;
- elementos desabilitados;
- informações críticas.

---

# 58. Testes com ampliação

Deverão ser testados:

- 125%;
- 150%;
- 175%;
- 200%, quando possível.

O conteúdo deverá permanecer:

- legível;
- navegável;
- funcional;
- sem perda crítica;
- sem sobreposição impeditiva.

---

# 59. Testes de compatibilidade

A compatibilidade deverá ser avaliada entre:

- navegadores;
- dispositivos;
- sistemas;
- orientações;
- resoluções;
- edições;
- componentes;
- dados;
- caminhos;
- ambientes locais.

---

# 60. Estados de compatibilidade

| Código | Estado |
|---|---|
| COMP-OK | Compatível |
| COMP-PAR | Parcialmente compatível |
| COMP-WRN | Compatível com advertência |
| COMP-NC | Não compatível |
| COMP-BLK | Bloqueado |
| COMP-PEN | Pendente |

---

# 61. Matriz de compatibilidade

| ID | Navegador | Dispositivo | Funcionalidade | Estado |
|---|---|---|---|---|
| COMP-001 | Chrome | Android | Portal completo | Pendente |
| COMP-002 | Samsung Internet | Android | Portal completo | Pendente |
| COMP-003 | Firefox | Desktop | Portal completo | Pendente |
| COMP-004 | Edge | Desktop | Portal completo | Pendente |

---

# 62. Testes de estabilidade

Deverão verificar:

- repetição de ações;
- recarregamento;
- navegação prolongada;
- múltiplos filtros;
- mudança de orientação;
- retorno à página;
- perda de conexão;
- recuperação da conexão;
- ausência de travamento;
- ausência de crescimento anormal de erros.

---

# 63. Cenários de estabilidade

Poderão incluir:

1. abrir e fechar o menu repetidamente;
2. aplicar e remover filtros;
3. navegar entre seções;
4. recarregar a programação;
5. alternar orientação;
6. retornar pelo navegador;
7. abrir links externos;
8. reabrir a página;
9. testar com conexão instável;
10. repetir compartilhamento sem envio real.

---

# 64. Testes de regressão

A regressão deverá comparar:

- edição fundadora;
- linha de base anterior;
- estrutura integrada;
- versão testada;
- versão após correção autorizada.

---

# 65. Objetos de regressão

Deverão ser comparados:

- estrutura física;
- conteúdo;
- programação;
- festeiros;
- locais;
- componentes;
- estilos;
- scripts;
- navegação;
- filtros;
- links;
- mapas;
- imagens;
- responsividade;
- acessibilidade;
- segurança;
- identidade institucional.

---

# 66. Identificação dos testes de regressão

Padrão:

```text
F5-P7-REG-NNN
```

---

# 67. Matriz de regressão

| ID | Objeto | Linha de base | Estado testado | Resultado |
|---|---|---|---|---|
| REG-001 | Página inicial | A registrar | A registrar | Pendente |
| REG-002 | Programação | A registrar | A registrar | Pendente |
| REG-003 | Dados | A registrar | A registrar | Pendente |
| REG-004 | Navegação | A registrar | A registrar | Pendente |
| REG-005 | Acessibilidade | A registrar | A registrar | Pendente |

---

# 68. Classificação das regressões

| Código | Tipo |
|---|---|
| REG-VIS | Visual |
| REG-FUN | Funcional |
| REG-DAT | Dados |
| REG-REF | Referência |
| REG-RSP | Responsividade |
| REG-ACC | Acessibilidade |
| REG-SEC | Segurança |
| REG-HIS | Histórica |
| REG-FND | Fundadora |

---

# 69. Severidade das regressões

| Nível | Classificação |
|---|---|
| S1 | Informativa |
| S2 | Baixa |
| S3 | Moderada |
| S4 | Alta |
| S5 | Crítica |
| SF | Fundadora |

Uma regressão fundadora bloqueará imediatamente o ciclo.

---

# 70. Testes de segurança local

Deverão verificar:

- exposição de credenciais;
- exposição de tokens;
- dados pessoais;
- arquivos sensíveis;
- scripts externos;
- protocolos inseguros;
- erros reveladores;
- entradas de formulário;
- parâmetros de URL;
- conteúdo injetável;
- dependências externas;
- permissões locais.

---

# 71. Busca controlada de informações sensíveis

Exemplo:

```bash
grep -RIn --exclude-dir=.git -E 'api[_-]?key|secret|token|password' CAMINHO_CONFIRMADO
```

Os resultados não deverão ser reproduzidos integralmente em documentação pública.

---

# 72. Testes de formulários

Quando existentes, deverão verificar:

- rótulos;
- campos obrigatórios;
- validação;
- mensagens;
- caracteres inválidos;
- textos longos;
- privacidade;
- envio;
- cancelamento;
- ausência de vazamento;
- comportamento offline.

Nenhum dado pessoal real deverá ser usado sem necessidade e autorização.

---

# 73. Testes de comportamento offline

Quando aplicável, deverão verificar:

- mensagem de indisponibilidade;
- preservação do conteúdo já carregado;
- ausência de travamento;
- retorno após reconexão;
- comportamento dos mapas;
- comportamento de links externos;
- ausência de perda de dados locais.

---

# 74. Registro de falhas

Toda falha deverá possuir:

- identificador;
- sessão;
- ambiente;
- navegador;
- dispositivo;
- objeto;
- ação;
- resultado esperado;
- resultado real;
- evidência;
- severidade;
- impacto;
- reprodução;
- estado;
- responsável;
- recomendação;
- plano de retorno.

---

# 75. Identificação das falhas

Padrão:

```text
F5-P7-FAL-NNN-TIPO
```

Exemplos:

```text
F5-P7-FAL-001-LOAD
F5-P7-FAL-002-FUNCTIONAL
F5-P7-FAL-003-RESPONSIVE
F5-P7-FAL-004-ACCESSIBILITY
F5-P7-FAL-005-REGRESSION
F5-P7-FAL-006-SECURITY
```

---

# 76. Estados das falhas

| Código | Estado |
|---|---|
| FAL-AB | Aberta |
| FAL-AN | Em análise |
| FAL-RP | Reproduzida |
| FAL-NR | Não reproduzida |
| FAL-AP | Correção aprovada |
| FAL-CR | Corrigida |
| FAL-RT | Retestada |
| FAL-VA | Validada |
| FAL-AC | Aceita com justificativa |
| FAL-BL | Bloqueada |
| FAL-FN | Bloqueio fundador |

---

# 77. Critérios de reprodução

Uma falha será considerada reproduzida quando:

- o ambiente estiver identificado;
- os passos forem repetíveis;
- o resultado ocorrer novamente;
- a evidência for preservada;
- o impacto for compreendido;
- não houver alteração silenciosa entre as tentativas.

---

# 78. Modelo de registro de falha

```text
ID:

SESSÃO:

AMBIENTE:

NAVEGADOR:

DISPOSITIVO:

PÁGINA:

COMPONENTE:

AÇÃO EXECUTADA:

RESULTADO ESPERADO:

RESULTADO OBTIDO:

PASSOS PARA REPRODUÇÃO:

SEVERIDADE:

IMPACTO:

EVIDÊNCIA:

PLANO DE RETORNO:

ESTADO:

PARECER:
```

---

# 79. Critérios para correção

Nenhuma falha será corrigida automaticamente.

A correção exigirá:

- falha registrada;
- reprodução comprovada;
- causa analisada;
- impacto identificado;
- proposta documentada;
- arquivos afetados;
- plano de retorno;
- autorização humana;
- reteste;
- evidência;
- parecer final.

---

# 80. Reteste obrigatório

Toda correção autorizada deverá ser seguida de:

- teste da falha original;
- teste do componente;
- teste da página;
- teste responsivo;
- teste acessível;
- teste de regressão;
- verificação do Git;
- preservação das evidências.

---

# 81. Planos de retorno

Cada correção deverá possuir plano de retorno com:

- identificação;
- estado anterior;
- alteração;
- arquivos envolvidos;
- dependências;
- procedimento de retorno;
- teste de restauração;
- responsável;
- autorização;
- evidência.

---

# 82. Identificação dos retornos

Padrão:

```text
F5-P7-RTN-NNN
```

---

# 83. Critérios de acionamento do retorno

O retorno deverá ser acionado quando:

- a falha permanecer;
- surgir regressão;
- a navegação quebrar;
- o dado deixar de carregar;
- a acessibilidade piorar;
- a compatibilidade for reduzida;
- a segurança for comprometida;
- a estabilidade for afetada;
- a edição fundadora sofrer impacto.

---

# 84. Evidências obrigatórias

Deverão ser preservadas evidências de:

- ambiente;
- branch;
- commit;
- estado do Git;
- servidor local;
- navegador;
- dispositivo;
- carregamento;
- console;
- funcionalidades;
- responsividade;
- acessibilidade;
- compatibilidade;
- estabilidade;
- regressão;
- segurança;
- falhas;
- correções;
- retestes;
- retornos;
- pareceres.

---

# 85. Identificação das evidências

Padrão:

```text
F5-P7-SES-NNN-EVD-NNN-TIPO
```

Exemplos:

```text
F5-P7-SES-001-EVD-001-BASELINE
F5-P7-SES-001-EVD-002-LOAD
F5-P7-SES-001-EVD-003-CONSOLE
F5-P7-SES-001-EVD-004-RESPONSIVE
F5-P7-SES-001-EVD-005-ACCESSIBILITY
F5-P7-SES-001-EVD-006-REGRESSION
```

---

# 86. Metadados das evidências

| Campo | Obrigatoriedade |
|---|---|
| Identificador | Obrigatório |
| Fase | Obrigatória |
| Ciclo | Obrigatório |
| Sessão | Obrigatória |
| Ambiente | Obrigatório |
| Navegador | Obrigatório |
| Dispositivo | Obrigatório |
| Data | Obrigatória |
| Horário | Obrigatório |
| Responsável | Obrigatório |
| Procedimento | Obrigatório |
| Resultado | Obrigatório |
| Integridade | Obrigatória |
| Validação humana | Obrigatória |
| Vínculo com falha | Quando aplicável |
| Cadeia de custódia | Obrigatória |

---

# 87. Cadeia de custódia

```text
AMBIENTE
↓
LINHA DE BASE
↓
SESSÃO
↓
TESTE
↓
RESULTADO
↓
FALHA OU APROVAÇÃO
↓
EVIDÊNCIA
↓
RETESTE
↓
PARECER
↓
ARQUIVAMENTO
↓
PRESERVAÇÃO
```

---

# 88. Blocos operacionais preliminares

```text
BLK-001 — RECONFIRMAÇÃO DA LINHA DE BASE

BLK-002 — PREPARAÇÃO DO AMBIENTE LOCAL

BLK-003 — VALIDAÇÃO DO SERVIDOR LOCAL

BLK-004 — TESTES DE CARREGAMENTO

BLK-005 — TESTES DOS DADOS

BLK-006 — TESTES DOS COMPONENTES

BLK-007 — TESTES DAS REFERÊNCIAS

BLK-008 — TESTES FUNCIONAIS

BLK-009 — TESTES DE NAVEGAÇÃO

BLK-010 — TESTES RESPONSIVOS

BLK-011 — TESTES DE ACESSIBILIDADE

BLK-012 — TESTES DE COMPATIBILIDADE

BLK-013 — TESTES DE ESTABILIDADE

BLK-014 — TESTES DE REGRESSÃO

BLK-015 — TESTES DE SEGURANÇA LOCAL

BLK-016 — REGISTRO DAS FALHAS

BLK-017 — RETESTES AUTORIZADOS

BLK-018 — VALIDAÇÃO DOS PLANOS DE RETORNO

BLK-019 — CONSOLIDAÇÃO DAS EVIDÊNCIAS

BLK-020 — PARECER FINAL
```

---

# 89. Estrutura obrigatória de cada bloco

Cada bloco deverá registrar:

- identificador;
- objetivo;
- ambiente;
- objeto;
- escopo;
- dependências;
- riscos;
- autorização;
- procedimento;
- resultado esperado;
- resultado real;
- falhas;
- evidências;
- plano de retorno;
- estado;
- parecer.

---

# 90. Primeiro movimento operacional

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
find apps -maxdepth 4 -type d -iname '*festanca*' | sort
```

Nenhum servidor deverá ser iniciado antes da confirmação integral dessas saídas.

---

# 91. Segundo movimento operacional

Após confirmação da raiz e do caminho do Portal:

```bash
find CAMINHO_CONFIRMADO -maxdepth 3 -type f | sort
```

A saída deverá ser limitada quando necessário.

---

# 92. Terceiro movimento operacional

Validar arquivos JSON individualmente:

```bash
python -m json.tool CAMINHO_DO_ARQUIVO_JSON
```

Cada arquivo deverá possuir evidência própria.

---

# 93. Quarto movimento operacional

Somente após autorização:

```bash
cd CAMINHO_CONFIRMADO
```

Em seguida:

```bash
python -m http.server 8000
```

A execução deverá ser registrada como sessão de teste.

---

# 94. Quinto movimento operacional

No navegador local, deverá ser acessado:

```text
http://localhost:8000
```

ou:

```text
http://127.0.0.1:8000
```

Nenhum endereço deverá ser presumido sem confirmação da porta.

---

# 95. Verificação do Git após os testes

Após cada conjunto de testes:

```bash
git status --short
```

O resultado deverá comprovar que:

- nenhum arquivo foi alterado silenciosamente;
- nenhum recurso temporário foi incorporado;
- nenhum dado fundador foi modificado;
- o repositório permanece compreendido.

---

# 96. Regras para o Termux

A execução deverá obedecer:

- comandos curtos;
- um objetivo por comando;
- saídas limitadas;
- validação entre blocos;
- captura das evidências;
- nenhuma correção automática;
- nenhuma substituição em massa;
- nenhuma execução destrutiva;
- interrupção diante de divergência;
- validação humana obrigatória.

---

# 97. Limitação das saídas

Deverão ser evitadas saídas superiores à capacidade segura de leitura, cópia e registro.

Os comandos deverão utilizar:

- caminhos específicos;
- profundidade limitada;
- extensões definidas;
- filtros;
- ordenação;
- segmentação.

---

# 98. Proibições absolutas

Não estão autorizados:

```text
rm -rf

git clean

git reset --hard

git restore indiscriminado

git checkout sobre arquivos fundadores

sed -i em massa

substituição automática de conteúdo

alteração automática de identificadores

correção automática de dados

teste destrutivo

ataque de segurança

publicação automática

commit automático

push automático

certificação sem evidência
```

---

# 99. Critérios de interrupção

A execução deverá ser interrompida quando:

- a raiz não for confirmada;
- a branch divergir;
- o commit não corresponder à linha de base;
- o Git apresentar alteração inesperada;
- o servidor local iniciar no diretório incorreto;
- um dado estiver corrompido;
- um componente falhar criticamente;
- uma referência estiver quebrada;
- surgir regressão crítica;
- houver falha de acessibilidade crítica;
- houver exposição de credencial;
- a estabilidade for comprometida;
- a FESTANÇA 2026 puder ser afetada.

---

# 100. Classificação das interrupções

| Código | Tipo |
|---|---|
| INT-ENV | Ambiente divergente |
| INT-GIT | Estado inesperado do Git |
| INT-SRV | Servidor incorreto |
| INT-LOAD | Falha de carregamento |
| INT-DAT | Falha de dados |
| INT-CMP | Falha de componente |
| INT-REF | Referência quebrada |
| INT-FUN | Falha funcional |
| INT-RSP | Falha responsiva |
| INT-ACC | Falha de acessibilidade |
| INT-COMP | Incompatibilidade |
| INT-REG | Regressão |
| INT-SEC | Segurança |
| INT-FND | Risco fundador |

---

# 101. Matriz de riscos

| ID | Risco | Impacto | Controle |
|---|---|---|---|
| F5P7-RSK-001 | Servidor iniciado no caminho incorreto | Crítico | Confirmação da raiz |
| F5P7-RSK-002 | Teste em estado não rastreável | Alto | Registro de branch e commit |
| F5P7-RSK-003 | Recurso ausente | Alto | Teste de carregamento |
| F5P7-RSK-004 | Falha somente em dispositivo móvel | Alto | Matriz de dispositivos |
| F5P7-RSK-005 | Regressão não detectada | Crítico | Comparação com linha de base |
| F5P7-RSK-006 | Redução de acessibilidade | Crítico | Checklist obrigatório |
| F5P7-RSK-007 | Exposição de credencial | Crítico | Validação de segurança |
| F5P7-RSK-008 | Correção silenciosa | Fundador | Proibição absoluta |
| F5P7-RSK-009 | Evidência insuficiente | Alto | Metadados obrigatórios |
| F5P7-RSK-010 | Comprometimento da edição 2026 | Fundador | Bloqueio total |

---

# 102. Proteção de dados pessoais

Os testes não deverão expor:

- contatos privados;
- endereços residenciais não autorizados;
- dados de menores;
- credenciais;
- dados sensíveis;
- informações institucionais restritas;
- identificadores privados.

Dados fictícios deverão ser utilizados sempre que possível.

---

# 103. Proteção da edição fundadora

Durante todo o ciclo:

- o caminho original deverá ser preservado;
- os arquivos fundadores não poderão ser sobrescritos;
- os dados de 2026 deverão permanecer íntegros;
- os identificadores deverão permanecer estáveis;
- as referências históricas deverão permanecer rastreáveis;
- a identidade visual deverá ser preservada;
- a capacidade de reconstrução deverá ser mantida;
- nenhuma alteração silenciosa será admitida.

---

# 104. Teste fundador obrigatório

Todo conjunto de testes deverá responder:

```text
A EDIÇÃO FESTANÇA 2026 CONTINUA ACESSÍVEL?

A PROGRAMAÇÃO CONTINUA COMPLETA?

OS FESTEIROS CONTINUAM CORRETAMENTE IDENTIFICADOS?

OS LOCAIS CONTINUAM RELACIONADOS?

OS CAMINHOS ORIGINAIS CONTINUAM VÁLIDOS?

OS IDENTIFICADORES CONTINUAM ESTÁVEIS?

AS REFERÊNCIAS CONTINUAM FUNCIONAIS?

A NAVEGAÇÃO CONTINUA OPERACIONAL?

A RESPONSIVIDADE NÃO FOI REDUZIDA?

A ACESSIBILIDADE NÃO FOI REDUZIDA?

A IDENTIDADE INSTITUCIONAL FOI PRESERVADA?

OS DADOS CONTINUAM RECONSTRUÍVEIS?

O ESTADO ANTERIOR PODE SER RESTAURADO?

NENHUMA ALTERAÇÃO SILENCIOSA OCORREU?
```

Qualquer resposta negativa bloqueará a certificação.

---

# 105. Inteligência artificial

A inteligência artificial poderá auxiliar na:

- preparação das matrizes;
- análise preliminar;
- identificação de padrões;
- detecção de inconsistências;
- comparação de versões;
- classificação de falhas;
- preparação dos registros;
- consolidação das evidências.

A inteligência artificial não poderá:

- afirmar que executou teste sem evidência;
- aprovar acessibilidade isoladamente;
- certificar segurança isoladamente;
- corrigir arquivos autonomamente;
- ocultar falhas;
- substituir validação humana;
- autorizar publicação;
- alterar dados fundadores;
- certificar ausência de regressão sem comparação real.

---

# 106. Responsabilidades

## 106.1. Governança institucional

Compete à governança:

- aprovar o plano;
- autorizar sessões;
- decidir sobre falhas críticas;
- autorizar correções;
- validar riscos;
- proteger a edição fundadora.

## 106.2. Coordenação técnica

Compete à coordenação:

- preparar o ambiente;
- executar testes autorizados;
- registrar resultados;
- preservar evidências;
- interromper diante de risco;
- preparar parecer técnico.

## 106.3. Curadoria de dados

Compete à curadoria:

- conferir conteúdos;
- validar significado;
- verificar completude;
- avaliar consistência;
- preservar proveniência.

## 106.4. Curadoria histórica

Compete à curadoria histórica:

- verificar continuidade;
- preservar contexto;
- proteger identificadores;
- validar o teste fundador;
- impedir perda documental.

## 106.5. Auditoria

Compete à auditoria:

- conferir autorizações;
- revisar sessões;
- validar evidências;
- analisar falhas;
- acompanhar retestes;
- conferir planos de retorno;
- emitir parecer independente.

---

# 107. Checklist de entrada

- [ ] F5-P2 concluído.
- [ ] Ambiente técnico validado.
- [ ] F5-P3 concluído.
- [ ] Plano de execução aprovado.
- [ ] F5-P4 concluído.
- [ ] Estrutura permanente confirmada.
- [ ] F5-P5 concluído.
- [ ] Corpus fundador preservado.
- [ ] F5-P6 concluído.
- [ ] Integração validada.
- [ ] Divergências classificadas.
- [ ] Planos de retorno disponíveis.
- [ ] Autorização humana registrada.
- [ ] FESTANÇA 2026 protegida.

---

# 108. Checklist do ambiente

- [ ] Raiz confirmada.
- [ ] Diretório confirmado.
- [ ] Branch registrada.
- [ ] Commit registrado.
- [ ] Estado do Git registrado.
- [ ] Dispositivo identificado.
- [ ] Sistema identificado.
- [ ] Navegador identificado.
- [ ] Versão registrada.
- [ ] Porta definida.
- [ ] Servidor local autorizado.
- [ ] Ponto de recuperação disponível.

---

# 109. Checklist de carregamento

- [ ] HTML carrega.
- [ ] CSS carrega.
- [ ] JavaScript carrega.
- [ ] JSON carrega.
- [ ] Imagens carregam.
- [ ] Ícones carregam.
- [ ] Fontes carregam.
- [ ] Não há recursos críticos ausentes.
- [ ] Console foi verificado.
- [ ] Erros foram registrados.

---

# 110. Checklist funcional

- [ ] Página inicial funciona.
- [ ] Menu funciona.
- [ ] Links internos funcionam.
- [ ] Links externos foram avaliados.
- [ ] Filtros funcionam.
- [ ] Programação é exibida.
- [ ] Festeiros são exibidos.
- [ ] Locais são exibidos.
- [ ] Mapas funcionam.
- [ ] Compartilhamento funciona.
- [ ] Downloads funcionam.
- [ ] Mensagens são compreensíveis.

---

# 111. Checklist responsivo

- [ ] Móvel pequeno testado.
- [ ] Móvel médio testado.
- [ ] Móvel grande testado.
- [ ] Tablet testado.
- [ ] Desktop testado.
- [ ] Retrato testado.
- [ ] Paisagem testada.
- [ ] Zoom testado.
- [ ] Textos longos testados.
- [ ] Tabelas testadas.
- [ ] Menus testados.
- [ ] Não há rolagem horizontal crítica.

---

# 112. Checklist de acessibilidade

- [ ] Hierarquia de títulos correta.
- [ ] Contraste avaliado.
- [ ] Foco visível.
- [ ] Teclado funcional.
- [ ] Textos alternativos presentes.
- [ ] Rótulos presentes.
- [ ] Botões nomeados.
- [ ] Links compreensíveis.
- [ ] Ampliação preserva conteúdo.
- [ ] Informação não depende só de cor.
- [ ] Mensagens de erro são acessíveis.
- [ ] Tamanho de toque é adequado.

---

# 113. Checklist de compatibilidade

- [ ] Chrome Android testado.
- [ ] Samsung Internet testado.
- [ ] Chrome Desktop testado.
- [ ] Firefox Desktop testado.
- [ ] Edge testado, quando disponível.
- [ ] Safari avaliado, quando disponível.
- [ ] WebView avaliado, quando aplicável.
- [ ] Diferenças registradas.
- [ ] Incompatibilidades classificadas.
- [ ] Alternativas documentadas.

---

# 114. Checklist de regressão

- [ ] Estrutura comparada.
- [ ] Conteúdo comparado.
- [ ] Dados comparados.
- [ ] Componentes comparados.
- [ ] Estilos comparados.
- [ ] Scripts comparados.
- [ ] Navegação comparada.
- [ ] Filtros comparados.
- [ ] Links comparados.
- [ ] Mapas comparados.
- [ ] Responsividade comparada.
- [ ] Acessibilidade comparada.
- [ ] Segurança comparada.
- [ ] Identidade institucional preservada.

---

# 115. Checklist de segurança local

- [ ] Credenciais não expostas.
- [ ] Tokens não expostos.
- [ ] Arquivos sensíveis identificados.
- [ ] Dados pessoais protegidos.
- [ ] Protocolos inseguros avaliados.
- [ ] Scripts externos identificados.
- [ ] Entradas analisadas.
- [ ] Parâmetros avaliados.
- [ ] Mensagens não revelam informações sensíveis.
- [ ] Evidências públicas estão higienizadas.

---

# 116. Critérios de aprovação

O F5-P7 somente poderá ser aprovado quando:

- o ambiente estiver validado;
- a linha de base estiver confirmada;
- os testes de carregamento estiverem aprovados;
- as funcionalidades críticas estiverem aprovadas;
- a responsividade estiver validada;
- a acessibilidade estiver validada;
- a compatibilidade estiver comprovada;
- a estabilidade estiver avaliada;
- os dados estiverem testados;
- os componentes estiverem testados;
- as referências estiverem testadas;
- as regressões estiverem classificadas;
- a segurança local estiver validada;
- as falhas críticas estiverem resolvidas ou bloqueadas;
- os retestes estiverem concluídos;
- os planos de retorno estiverem disponíveis;
- as evidências estiverem preservadas;
- houver aprovação humana;
- a FESTANÇA 2026 estiver integralmente protegida.

---

# 117. Critérios de reprovação

O ciclo será reprovado ou bloqueado quando:

- houver falha crítica de carregamento;
- houver falha funcional impeditiva;
- houver regressão fundadora;
- houver perda de dados;
- houver referência fundadora quebrada;
- houver identificador alterado;
- houver incompatibilidade crítica;
- houver falha grave de acessibilidade;
- houver exposição de credencial;
- houver ausência de evidência;
- houver alteração silenciosa;
- não existir plano de retorno;
- a edição 2026 for comprometida.

---

# 118. Classificação final do ciclo

| Código | Estado |
|---|---|
| F5P7-PL | Planejado |
| F5P7-RD | Somente leitura |
| F5P7-PR | Ambiente preparado |
| F5P7-TS | Em testes |
| F5P7-FL | Falhas identificadas |
| F5P7-RT | Em reteste |
| F5P7-VA | Validado |
| F5P7-AP | Aprovado |
| F5P7-AO | Aprovado com observações |
| F5P7-AC | Aprovado condicionalmente |
| F5P7-SU | Suspenso |
| F5P7-RV | Retornado |
| F5P7-NC | Não conforme |
| F5P7-BL | Bloqueado |
| F5P7-FN | Bloqueio fundador |

---

# 119. Estado inicial deste documento

| Campo | Valor |
|---|---|
| Documento | local-testing-and-regression-plan.md |
| Fase | F5 |
| Ciclo | F5-P7 |
| Regime | Permanente |
| Regime operacional | Planejamento e somente leitura |
| Edição fundadora | FESTANÇA 2026 |
| Criticidade | Máxima |
| Mutabilidade | Estrita e controlada |
| Preservação | Integral |
| F5-P2 | Pendente de confirmação real |
| F5-P3 | Pendente de confirmação real |
| F5-P4 | Pendente de confirmação real |
| F5-P5 | Pendente de confirmação real |
| F5-P6 | Pendente de confirmação real |
| Integração | Pendente de validação comprovada |
| Divergências | Pendentes de classificação consolidada |
| Ambiente local | Pendente |
| Navegadores | Pendentes |
| Dispositivos | Pendentes |
| Carregamento | Pendente |
| Funcionalidades | Pendentes |
| Responsividade | Pendente |
| Acessibilidade | Pendente |
| Compatibilidade | Pendente |
| Estabilidade | Pendente |
| Dados | Pendentes |
| Componentes | Pendentes |
| Referências | Pendentes |
| Regressão | Pendente |
| Segurança local | Pendente |
| Falhas | Pendentes de identificação |
| Correções | Não autorizadas |
| Planos de retorno | Obrigatórios |
| Evidências | Obrigatórias |
| Auditoria | Permanente |
| Validação humana | Obrigatória |
| Rastreabilidade | Integral |
| Proteção fundadora | Máxima |
| Próximo ciclo | F5-P8 |

---

# 120. Vigência

Este documento entra imediatamente em vigor após sua aprovação institucional e publicação no repositório oficial.

Sua vigência será permanente.

Toda revisão deverá:

- preservar versões anteriores;
- registrar justificativa;
- identificar responsáveis;
- registrar impacto;
- preservar matrizes;
- preservar sessões;
- preservar evidências;
- preservar falhas;
- preservar retestes;
- preservar planos de retorno;
- preservar resultados comparativos;
- manter a cadeia de custódia;
- proteger dados pessoais;
- proteger credenciais;
- proteger a edição fundadora;
- assegurar rastreabilidade integral.

---

# 121. Certificação de abertura do ciclo

Com a publicação deste documento, ficam formalmente estabelecidos:

```text
CICLO F5-P7:
FORMALMENTE ABERTO

OBJETO:
TESTES LOCAIS,
REGRESSÃO,
COMPATIBILIDADE
E ESTABILIDADE

REGIME INICIAL:
PLANEJAMENTO
E SOMENTE LEITURA

AMBIENTE LOCAL:
A VALIDAR

MATRIZ DE NAVEGADORES:
A EXECUTAR

MATRIZ DE DISPOSITIVOS:
A EXECUTAR

TESTES DE CARREGAMENTO:
OBRIGATÓRIOS

TESTES FUNCIONAIS:
OBRIGATÓRIOS

TESTES RESPONSIVOS:
OBRIGATÓRIOS

TESTES DE ACESSIBILIDADE:
OBRIGATÓRIOS

TESTES DE COMPATIBILIDADE:
OBRIGATÓRIOS

TESTES DE ESTABILIDADE:
OBRIGATÓRIOS

TESTES DE REGRESSÃO:
OBRIGATÓRIOS

TESTES DE SEGURANÇA LOCAL:
OBRIGATÓRIOS

FALHAS:
A REGISTRAR

CORREÇÕES AUTOMÁTICAS:
PROIBIDAS

RETESTES:
OBRIGATÓRIOS APÓS CORREÇÃO

PLANOS DE RETORNO:
OBRIGATÓRIOS

EVIDÊNCIAS:
OBRIGATÓRIAS

VALIDAÇÃO HUMANA:
OBRIGATÓRIA

FESTANÇA 2026:
INTEGRALMENTE PROTEGIDA
```

---

# 122. Próximo movimento operacional

A execução deverá começar pela reconfirmação da linha de base.

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
find apps -maxdepth 4 -type d -iname '*festanca*' | sort
```

Após confirmação do caminho:

```bash
find CAMINHO_CONFIRMADO -maxdepth 3 -type f | sort
```

Depois, os arquivos de dados deverão ser validados individualmente.

Exemplo:

```bash
python -m json.tool CAMINHO_DO_ARQUIVO_JSON
```

Somente após análise e autorização poderá ser iniciado o servidor local:

```bash
cd CAMINHO_CONFIRMADO
```

```bash
python -m http.server 8000
```

Cada saída deverá ser:

1. preservada;
2. analisada;
3. classificada;
4. vinculada ao bloco;
5. comparada com a linha de base;
6. validada antes da continuidade.

Nenhuma correção física está autorizada por esta seção.

---

# 123. Certificação de encerramento do ciclo

Após a execução real, poderá ser registrada:

```text
CICLO F5-P7:
FORMALMENTE CONCLUÍDO

AMBIENTE LOCAL:
VALIDADO

MATRIZ DE NAVEGADORES:
EXECUTADA

MATRIZ DE DISPOSITIVOS:
EXECUTADA

CARREGAMENTO:
APROVADO

FUNCIONALIDADES:
APROVADAS

RESPONSIVIDADE:
VALIDADA

ACESSIBILIDADE:
VALIDADA

COMPATIBILIDADE:
COMPROVADA

ESTABILIDADE:
VALIDADA

DADOS:
TESTADOS

COMPONENTES:
TESTADOS

REFERÊNCIAS:
TESTADAS

REGRESSÃO:
VERIFICADA

SEGURANÇA LOCAL:
VALIDADA

FALHAS:
REGISTRADAS E CLASSIFICADAS

RETESTES:
CONCLUÍDOS

PLANOS DE RETORNO:
VALIDADOS

EVIDÊNCIAS:
PRESERVADAS

ALTERAÇÕES SILENCIOSAS:
NÃO OCORRERAM

FESTANÇA 2026:
INTEGRALMENTE PROTEGIDA
```

Essa certificação somente poderá ser utilizada após a validação humana dos resultados reais.

---

# 124. Próximo ciclo oficial

**F5-P8**

Arquivo:

```text
docs/festanca/technical-implementation/security-accessibility-and-publication-readiness-model.md
```

Denominação oficial:

**Modelo Executivo de Validação de Segurança, Acessibilidade e Prontidão para Publicação do Portal Permanente da FESTANÇA**

Esse ciclo deverá estabelecer:

- verificação final de segurança;
- proteção de dados;
- análise de credenciais;
- validação de permissões;
- conformidade com a LGPD;
- validação consolidada de acessibilidade;
- revisão de conteúdo;
- revisão de referências;
- revisão de metadados;
- revisão de SEO institucional;
- revisão de compartilhamento;
- verificação de domínio e hospedagem;
- critérios de prontidão;
- bloqueios de publicação;
- aprovação institucional;
- plano de retorno;
- evidências;
- preservação integral da FESTANÇA 2026.

O F5-P8 somente poderá iniciar após:

- conclusão real do F5-P2;
- conclusão real do F5-P3;
- conclusão real do F5-P4;
- conclusão real do F5-P5;
- conclusão real do F5-P6;
- conclusão real do F5-P7;
- aprovação dos testes locais;
- tratamento das falhas críticas;
- validação dos retestes;
- autorização humana expressa.

---

# 125. Encerramento institucional

Seguimos juntos, passo a passo.

Com método.

Com segurança.

Com preservação integral da edição fundadora.

**SOMOS TODOS, AVANÇO.**

Ao encontro do futuro.

**AMÉM.**
