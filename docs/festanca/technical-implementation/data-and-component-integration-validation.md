# Modelo Executivo de Validação da Integração de Dados, Componentes e Referências do Portal Permanente da FESTANÇA

---

## Denominação oficial

**Modelo Executivo de Validação da Integração de Dados, Componentes e Referências do Portal Permanente da FESTANÇA**

---

## Arquivo oficial

```text
docs/festanca/technical-implementation/data-and-component-integration-validation.md
```

---

## Identificação do ciclo

| Campo | Valor |
|---|---|
| Documento | data-and-component-integration-validation.md |
| Diretório | docs/festanca/technical-implementation/ |
| Fase | F5 |
| Ciclo | F5-P6 |
| Denominação do ciclo | Validação da integração de dados, componentes e referências |
| Categoria | Validação técnica, funcional, estrutural, semântica e histórica |
| Função | Verificar a integridade da integração progressiva do Portal Permanente |
| Regime | Permanente |
| Regime inicial | Planejamento, somente leitura e validação controlada |
| Execução física | Condicionada |
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
| Testes de regressão | Obrigatórios |
| Testes de acessibilidade | Obrigatórios |
| Validação de segurança | Obrigatória |
| Plano de retorno | Obrigatório |
| Rastreabilidade | Integral |
| Proteção da edição fundadora | Máxima |

---

## Declaração constitucional

Este documento estabelece o modelo executivo de validação da integração de dados, componentes, referências, identificadores, caminhos, relacionamentos e funcionalidades do Portal Permanente da FESTANÇA.

Sua finalidade é assegurar que toda integração autorizada:

- preserve os dados originais;
- mantenha a integridade estrutural;
- preserve a coerência semântica;
- mantenha as referências funcionais;
- preserve os identificadores;
- mantenha os relacionamentos;
- conserve a acessibilidade;
- preserve a segurança;
- não produza regressões;
- não comprometa a FESTANÇA 2026.

Nenhum componente será considerado integrado apenas porque foi copiado, criado, referenciado ou carregado.

Nenhum dado será considerado válido apenas porque possui sintaxe formalmente correta.

Nenhuma referência será considerada preservada sem teste real.

Nenhum caminho será considerado definitivo sem verificação.

Nenhum identificador poderá ser modificado silenciosamente.

Nenhuma divergência poderá ser ocultada.

Nenhum teste poderá ser certificado sem evidência.

Nenhuma integração poderá ser aprovada sem validação humana.

A publicação deste documento não autoriza automaticamente:

- alteração de dados;
- correção automática;
- substituição de arquivos;
- modificação de identificadores;
- atualização de caminhos;
- criação de redirecionamentos;
- publicação;
- ativação;
- exclusão;
- movimentação.

Toda validação deverá ser progressiva, rastreável, verificável, reversível e documentalmente comprovada.

---

# 1. Identificação do documento

| Campo | Valor |
|---|---|
| Nome oficial | Modelo Executivo de Validação da Integração de Dados, Componentes e Referências do Portal Permanente da FESTANÇA |
| Arquivo | data-and-component-integration-validation.md |
| Caminho completo | docs/festanca/technical-implementation/data-and-component-integration-validation.md |
| Fase | F5 |
| Ciclo | F5-P6 |
| Natureza | Executiva, constitucional, técnica, funcional, semântica e preservacionista |
| Regime | Permanente |
| Estado inicial | Planejamento e validação pendente |
| Criticidade | Máxima |
| Mutabilidade | Estrita e controlada |
| Preservação | Integral |
| Aplicabilidade | Portal Permanente, edições anuais e componentes compartilhados |
| Edição fundadora | FESTANÇA 2026 |
| Integração física | Condicionada |
| Validação humana | Obrigatória |
| Evidências | Obrigatórias |
| Auditoria | Permanente |
| Testes funcionais | Obrigatórios |
| Testes de carregamento | Obrigatórios |
| Testes de navegação | Obrigatórios |
| Testes de acessibilidade | Obrigatórios |
| Testes de regressão | Obrigatórios |
| Validação de segurança | Obrigatória |
| Plano de retorno | Obrigatório |
| Rastreabilidade | Integral |
| Próximo ciclo | F5-P7 |

---

# 2. Natureza constitucional

Este documento possui natureza:

- constitucional;
- executiva;
- técnica;
- estrutural;
- funcional;
- semântica;
- operacional;
- preventiva;
- auditável;
- probatória;
- preservacionista;
- reversível;
- permanente.

Sua função é verificar se a integração realizada ou proposta conserva a autenticidade, a integridade, a funcionalidade e a continuidade histórica do ecossistema da FESTANÇA.

---

# 3. Finalidade

Este ciclo tem por finalidade:

1. validar os dados integrados;
2. validar os componentes compartilhados;
3. validar as referências internas;
4. validar os caminhos;
5. validar os identificadores;
6. validar os relacionamentos;
7. verificar compatibilidade estrutural;
8. verificar compatibilidade semântica;
9. verificar compatibilidade funcional;
10. realizar testes de carregamento;
11. realizar testes de navegação;
12. realizar testes de acessibilidade;
13. realizar testes de regressão;
14. validar segurança;
15. registrar evidências;
16. identificar divergências;
17. definir planos de retorno;
18. preservar integralmente a FESTANÇA 2026.

---

# 4. Objetivos estratégicos

São objetivos estratégicos deste ciclo:

- impedir integração incompleta;
- detectar referências quebradas;
- identificar dados inválidos;
- preservar identificadores fundadores;
- garantir compatibilidade entre estruturas;
- assegurar carregamento correto;
- validar navegação;
- preservar acessibilidade;
- identificar regressões;
- validar componentes compartilhados;
- garantir consistência entre documentos e implementação;
- assegurar reversibilidade;
- consolidar evidências;
- preparar a ativação progressiva;
- proteger integralmente a edição fundadora.

---

# 5. Princípios operacionais

A validação deverá obedecer aos seguintes princípios:

```text
VALIDAR ANTES DE APROVAR

TESTAR ANTES DE ATIVAR

COMPARAR ANTES DE SUBSTITUIR

REGISTRAR ANTES DE CORRIGIR

PRESERVAR ANTES DE TRANSFORMAR

REVERTER ANTES DE COMPROMETER

COMPROVAR ANTES DE CERTIFICAR
```

---

# 6. Condições obrigatórias de entrada

O F5-P6 somente poderá iniciar após comprovação de:

```text
F5-P2: CONCLUÍDO

AMBIENTE TÉCNICO: VALIDADO

F5-P3: CONCLUÍDO

PLANO DE EXECUÇÃO: APROVADO

F5-P4: CONCLUÍDO

ESTRUTURA PERMANENTE: CONFIRMADA

F5-P5: CONCLUÍDO

CORPUS FUNDADOR: PRESERVADO

INVENTÁRIO FUNDADOR: CONSOLIDADO

DEPENDÊNCIAS: MAPEADAS

ESTRATÉGIA DE INTEGRAÇÃO: APROVADA

PLANOS DE RETORNO: DEFINIDOS

AUTORIZAÇÃO HUMANA: EXPRESSA

FESTANÇA 2026: INTEGRALMENTE PROTEGIDA
```

Enquanto qualquer condição estiver pendente, o ciclo permanecerá em:

```text
PLANEJAMENTO
SOMENTE LEITURA
E
PREPARAÇÃO DOS TESTES
```

---

# 7. Resultado esperado

Ao final deste ciclo, deverá existir:

```text
DADOS INTEGRADOS: VALIDADOS

COMPONENTES COMPARTILHADOS: VALIDADOS

REFERÊNCIAS INTERNAS: VALIDADAS

CAMINHOS: VALIDADOS

IDENTIFICADORES: PRESERVADOS

RELACIONAMENTOS: VALIDADOS

COMPATIBILIDADE ESTRUTURAL: COMPROVADA

COMPATIBILIDADE SEMÂNTICA: COMPROVADA

COMPATIBILIDADE FUNCIONAL: COMPROVADA

CARREGAMENTO: TESTADO

NAVEGAÇÃO: TESTADA

ACESSIBILIDADE: TESTADA

REGRESSÃO: VERIFICADA

SEGURANÇA: VALIDADA

DIVERGÊNCIAS: REGISTRADAS

PLANOS DE RETORNO: VALIDADOS

EVIDÊNCIAS: PRESERVADAS

FESTANÇA 2026: INTEGRALMENTE PROTEGIDA
```

---

# 8. Escopo da validação

O escopo poderá compreender:

- arquivos HTML;
- arquivos CSS;
- arquivos JavaScript;
- arquivos JSON;
- imagens;
- ícones;
- fontes;
- páginas;
- componentes;
- rotas;
- links;
- caminhos relativos;
- caminhos absolutos;
- dados anuais;
- dados permanentes;
- dados compartilhados;
- identificadores;
- relacionamentos;
- filtros;
- mapas;
- downloads;
- elementos de acessibilidade;
- integrações externas;
- configurações;
- documentação associada.

---

# 9. Dimensões de validação

A validação deverá abranger:

1. dimensão física;
2. dimensão estrutural;
3. dimensão sintática;
4. dimensão semântica;
5. dimensão referencial;
6. dimensão funcional;
7. dimensão visual;
8. dimensão responsiva;
9. dimensão acessível;
10. dimensão histórica;
11. dimensão de segurança;
12. dimensão fundadora.

---

# 10. Regimes operacionais

## 10.1. Regime R0 — Planejamento

Permite:

- preparar matrizes;
- definir testes;
- classificar riscos;
- organizar evidências;
- revisar dependências.

## 10.2. Regime R1 — Somente leitura

Permite:

- listar;
- localizar;
- comparar;
- inspecionar;
- validar sintaxe;
- consultar referências;
- calcular hashes.

## 10.3. Regime R2 — Teste local controlado

Permite, mediante autorização:

- iniciar servidor local;
- carregar páginas;
- testar dados;
- executar verificações não destrutivas;
- observar console;
- testar navegação.

## 10.4. Regime R3 — Correção controlada

Não integra o estado inicial deste ciclo.

Qualquer correção exigirá:

- divergência registrada;
- proposta aprovada;
- impacto analisado;
- plano de retorno;
- autorização específica.

## 10.5. Regime R4 — Reteste

Permite repetir os testes após correção autorizada.

## 10.6. Regime R5 — Certificação

Somente poderá ocorrer após validação humana integral.

---

# 11. Níveis de autorização

| Nível | Operação |
|---|---|
| A0 | Planejamento |
| A1 | Somente leitura |
| A2 | Validação sintática |
| A3 | Teste local |
| A4 | Teste funcional |
| A5 | Teste de acessibilidade |
| A6 | Teste de regressão |
| A7 | Teste de segurança |
| A8 | Correção em cópia de trabalho |
| A9 | Correção em arquivo integrado |
| A10 | Atualização de referência |
| A11 | Commit |
| A12 | Push |
| A13 | Publicação |
| A14 | Ativação |

Nenhum nível será presumido.

---

# 12. Unidades de validação

Cada objeto deverá ser tratado como unidade de validação.

Exemplos:

```text
UNIDADE-DADO

UNIDADE-COMPONENTE

UNIDADE-REFERÊNCIA

UNIDADE-CAMINHO

UNIDADE-IDENTIFICADOR

UNIDADE-RELACIONAMENTO

UNIDADE-PÁGINA

UNIDADE-FUNCIONALIDADE

UNIDADE-SEGURANÇA
```

---

# 13. Identificação das unidades

Padrão:

```text
F5-P6-UNT-NNN-TIPO
```

Exemplos:

```text
F5-P6-UNT-001-DATA
F5-P6-UNT-002-COMPONENT
F5-P6-UNT-003-REFERENCE
F5-P6-UNT-004-PATH
F5-P6-UNT-005-IDENTIFIER
F5-P6-UNT-006-RELATIONSHIP
```

---

# 14. Registro mestre das unidades

| Campo | Valor |
|---|---|
| ID da unidade | A atribuir |
| Tipo | A classificar |
| Caminho | A registrar |
| Objeto | A identificar |
| Origem | A registrar |
| Destino | A registrar |
| Dependências | A vincular |
| Referências | A vincular |
| Criticidade | A classificar |
| Testes aplicáveis | A definir |
| Estado | Pendente |
| Evidência | A vincular |
| Parecer | Pendente |

---

# 15. Validação dos dados integrados

A validação dos dados deverá verificar:

- existência;
- formato;
- codificação;
- sintaxe;
- schema;
- campos obrigatórios;
- tipos;
- valores;
- unicidade;
- integridade;
- completude;
- consistência;
- relacionamentos;
- identificadores;
- temporalidade;
- proveniência;
- compatibilidade histórica.

---

# 16. Dados estruturados prioritários

Deverão ser verificados, quando existentes:

```text
programacao-2026.json
festeiros-2026.json
locais-2026.json
```

Também deverão ser verificados:

- schemas;
- arquivos de configuração;
- dados permanentes;
- dados compartilhados;
- metadados;
- arquivos auxiliares;
- dados incorporados em JavaScript;
- dados incorporados em HTML.

---

# 17. Validação de sintaxe JSON

Quando disponível:

```bash
python -m json.tool CAMINHO_DO_ARQUIVO_JSON
```

Alternativa com `jq`, quando instalado:

```bash
jq empty CAMINHO_DO_ARQUIVO_JSON
```

A ausência de erro sintático não representa aprovação semântica.

---

# 18. Validação da codificação

Comando:

```bash
file CAMINHO_DO_ARQUIVO
```

Deverá ser verificada a compatibilidade com UTF-8.

Nenhuma conversão automática será realizada neste bloco.

---

# 19. Validação dos campos obrigatórios

Cada arquivo deverá ser comparado com:

- schema oficial;
- documentação constitucional;
- edição fundadora;
- contrato técnico;
- inventário de dados.

Exemplo de matriz:

| Campo | Obrigatório | Encontrado | Tipo correto | Estado |
|---|---:|---:|---:|---|
| eventId | Sim | Pendente | Pendente | A validar |
| eventName | Sim | Pendente | Pendente | A validar |
| year | Sim | Pendente | Pendente | A validar |
| activities | Sim | Pendente | Pendente | A validar |

---

# 20. Validação de identificadores de dados

Deverão ser verificados:

- identificadores vazios;
- identificadores duplicados;
- identificadores alterados;
- identificadores órfãos;
- identificadores sem referência;
- identificadores incompatíveis;
- identificadores históricos.

---

# 21. Validação de unicidade

A unicidade deverá ser testada por campo identificado como chave.

Exemplo conceitual:

```text
CADA ATIVIDADE
DEVE POSSUIR
IDENTIFICADOR ÚNICO
```

Resultados duplicados deverão ser registrados como divergência.

---

# 22. Validação de completude

A completude deverá observar:

- registros esperados;
- campos obrigatórios;
- relacionamentos obrigatórios;
- referências;
- datas;
- horários;
- locais;
- responsáveis;
- estados de validação.

---

# 23. Validação de consistência temporal

Deverão ser verificados:

- formato das datas;
- formato dos horários;
- ordem cronológica;
- período preparatório;
- período principal;
- coerência com a edição 2026;
- eventos fora do intervalo;
- datas conflitantes;
- atividades duplicadas.

---

# 24. Validação de consistência geográfica

Deverão ser verificados:

- identificadores de locais;
- nomes;
- referências;
- coordenadas;
- autorização para residências privadas;
- fallback do Google Maps;
- relação entre atividade e local;
- coerência com o inventário oficial.

---

# 25. Validação de dados pessoais

A validação deverá observar:

- necessidade;
- finalidade;
- minimização;
- exposição pública;
- autorização;
- proteção de contatos;
- proteção de residências;
- proteção de menores;
- dados sensíveis;
- conformidade com a LGPD.

---

# 26. Validação dos componentes compartilhados

Deverão ser verificados:

- função;
- escopo;
- reutilização;
- dependências;
- interface;
- estilos;
- scripts;
- acessibilidade;
- compatibilidade entre edições;
- versionamento;
- impacto sobre 2026.

---

# 27. Componentes compartilhados prioritários

Poderão compreender:

- cabeçalho;
- rodapé;
- navegação;
- identidade visual;
- botões;
- cartões;
- filtros;
- mensagens;
- acessibilidade;
- scripts utilitários;
- estilos-base;
- componentes de programação;
- componentes de galeria;
- componentes de mapas.

---

# 28. Critérios de compartilhamento

Um componente somente será validado como compartilhado quando:

- atender mais de uma edição;
- não depender exclusivamente de 2026;
- possuir comportamento estável;
- preservar compatibilidade;
- possuir caminhos válidos;
- possuir referências rastreáveis;
- não alterar o significado histórico;
- não comprometer a edição fundadora.

---

# 29. Matriz de componentes

| ID | Componente | Origem | Uso | Dependências | Estado |
|---|---|---|---|---|---|
| CMP-F5P6-001 | A registrar | A registrar | Permanente ou anual | A mapear | Pendente |

---

# 30. Validação das referências internas

As referências internas poderão incluir:

- `href`;
- `src`;
- `import`;
- `fetch`;
- `url()`;
- links entre páginas;
- referências JSON;
- identificadores de local;
- identificadores de atividade;
- seletores;
- âncoras;
- rotas.

---

# 31. Localização de referências HTML

Exemplo:

```bash
grep -RIn --include='*.html' -E 'href=|src=' CAMINHO_CONFIRMADO
```

A saída deverá ser limitada por diretório quando necessário.

---

# 32. Localização de referências CSS

Exemplo:

```bash
grep -RIn --include='*.css' 'url(' CAMINHO_CONFIRMADO
```

---

# 33. Localização de referências JavaScript

Exemplo:

```bash
grep -RIn --include='*.js' -E 'fetch\(|import |from ' CAMINHO_CONFIRMADO
```

---

# 34. Localização de referências a JSON

Exemplo:

```bash
grep -RIn --exclude-dir=.git '\.json' CAMINHO_CONFIRMADO
```

---

# 35. Matriz de referências

| ID | Arquivo de origem | Referência | Destino esperado | Existência | Estado |
|---|---|---|---|---:|---|
| REF-F5P6-001 | A registrar | A registrar | A registrar | Pendente | A validar |

---

# 36. Classificação das referências

| Código | Classificação |
|---|---|
| REF-OK | Referência válida |
| REF-BRK | Referência quebrada |
| REF-EXT | Referência externa |
| REF-FND | Referência fundadora |
| REF-RED | Referência redirecionada |
| REF-OBS | Referência obsoleta preservada |
| REF-PEN | Referência pendente |
| REF-SEC | Referência sensível |
| REF-ORF | Referência órfã |

---

# 37. Validação dos caminhos

Todo caminho deverá ser validado quanto a:

- existência;
- origem;
- destino;
- capitalização;
- extensão;
- profundidade;
- relatividade;
- compatibilidade com GitHub;
- compatibilidade com servidor local;
- compatibilidade com publicação;
- preservação histórica.

---

# 38. Caminhos relativos

Caminhos relativos deverão ser testados no contexto real da página.

Exemplo:

```text
../shared/assets/logo.svg
```

A mera existência do arquivo não comprova a validade do caminho relativo.

---

# 39. Caminhos absolutos

Caminhos absolutos deverão ser avaliados quanto a:

- domínio;
- ambiente;
- protocolo;
- disponibilidade;
- segurança;
- dependência externa;
- permanência;
- plano alternativo.

---

# 40. Matriz de caminhos

| ID | Origem | Caminho | Tipo | Destino | Estado |
|---|---|---|---|---|---|
| PATH-F5P6-001 | A registrar | A registrar | Relativo ou absoluto | A registrar | Pendente |

---

# 41. Validação dos identificadores

Deverão ser validados:

- IDs HTML;
- classes estruturais;
- chaves JSON;
- identificadores de atividades;
- identificadores de festeiros;
- identificadores de locais;
- identificadores de edição;
- identificadores de componentes;
- identificadores documentais;
- âncoras;
- parâmetros de URL.

---

# 42. Critérios dos identificadores

Cada identificador deverá ser:

- único;
- estável;
- compreensível;
- rastreável;
- compatível;
- não ambíguo;
- preservável;
- relacionado à origem.

---

# 43. Identificadores fundadores

Nenhum identificador fundador poderá ser:

- removido;
- alterado;
- reaproveitado com significado diferente;
- substituído silenciosamente;
- desconectado de sua origem.

---

# 44. Matriz de identificadores

| Identificador | Tipo | Origem | Uso | Duplicado | Estado |
|---|---|---|---|---:|---|
| A registrar | A classificar | A registrar | A identificar | Pendente | A validar |

---

# 45. Validação dos relacionamentos

Deverão ser verificados relacionamentos entre:

- programação e locais;
- programação e festeiros;
- programação e categorias;
- páginas e dados;
- componentes e estilos;
- componentes e scripts;
- identificadores e registros;
- edições e componentes compartilhados;
- documentos e arquivos técnicos.

---

# 46. Integridade referencial

A integridade referencial exige que:

```text
TODA REFERÊNCIA
POSSUA DESTINO VÁLIDO

TODO DESTINO CRÍTICO
POSSUA ORIGEM IDENTIFICADA

TODO IDENTIFICADOR RELACIONADO
SEJA RASTREÁVEL
```

---

# 47. Matriz de relacionamentos

| ID | Entidade de origem | Relação | Entidade de destino | Obrigatória | Estado |
|---|---|---|---|---:|---|
| REL-F5P6-001 | A registrar | A registrar | A registrar | Pendente | A validar |

---

# 48. Compatibilidade estrutural

A compatibilidade estrutural deverá verificar:

- diretórios;
- arquivos;
- hierarquia;
- caminhos;
- nomes;
- extensões;
- distribuição de responsabilidades;
- separação entre permanente e anual;
- separação entre original e derivado;
- componentes compartilhados.

---

# 49. Compatibilidade semântica

A compatibilidade semântica deverá verificar:

- significado dos campos;
- significado dos componentes;
- categorias;
- nomenclaturas;
- taxonomias;
- identificadores;
- relações;
- temporalidade;
- coerência histórica.

---

# 50. Compatibilidade funcional

A compatibilidade funcional deverá verificar:

- carregamento;
- navegação;
- filtros;
- busca;
- compartilhamento;
- mapas;
- links;
- interações;
- comportamento responsivo;
- retorno de erros;
- ausência de falhas críticas.

---

# 51. Compatibilidade visual

Deverão ser verificados:

- identidade visual;
- legibilidade;
- contraste;
- tipografia;
- alinhamento;
- espaçamento;
- imagens;
- ícones;
- componentes;
- estados interativos;
- comportamento móvel.

---

# 52. Testes funcionais

Os testes funcionais deverão abranger:

- inicialização;
- carregamento;
- interação;
- filtros;
- links;
- botões;
- menus;
- seções;
- dados;
- mapas;
- compartilhamento;
- formulários, quando existentes;
- mensagens de erro.

---

# 53. Matriz de testes funcionais

| ID | Funcionalidade | Resultado esperado | Resultado real | Estado |
|---|---|---|---|---|
| FUN-F5P6-001 | Carregar página inicial | Página íntegra | Pendente | A testar |
| FUN-F5P6-002 | Carregar programação | Dados exibidos | Pendente | A testar |
| FUN-F5P6-003 | Filtrar atividades | Resultado coerente | Pendente | A testar |
| FUN-F5P6-004 | Abrir localização | Destino válido | Pendente | A testar |
| FUN-F5P6-005 | Compartilhar no WhatsApp | Texto íntegro | Pendente | A testar |

---

# 54. Testes de carregamento

Deverão verificar:

- carregamento do HTML;
- carregamento do CSS;
- carregamento do JavaScript;
- carregamento dos dados;
- carregamento das imagens;
- carregamento das fontes;
- erros de rede;
- erros de console;
- recursos ausentes;
- tempo de resposta local.

---

# 55. Servidor local

Quando autorizado e tecnicamente disponível:

```bash
python -m http.server 8000
```

O comando deverá ser executado somente no diretório previamente confirmado.

A porta poderá ser alterada caso já esteja ocupada.

---

# 56. Restrições do servidor local

O servidor local:

- não autoriza publicação;
- não altera o repositório;
- não substitui testes em hospedagem;
- não comprova segurança externa;
- não certifica produção;
- serve apenas à validação controlada.

---

# 57. Testes de navegação

Deverão verificar:

- página inicial;
- navegação principal;
- links internos;
- âncoras;
- acesso às edições;
- retorno à página anterior;
- links de dados;
- downloads;
- links externos;
- mapas;
- ausência de ciclos inválidos.

---

# 58. Matriz de navegação

| ID | Origem | Ação | Destino esperado | Resultado |
|---|---|---|---|---|
| NAV-F5P6-001 | Página inicial | Abrir edição 2026 | Edição fundadora | Pendente |
| NAV-F5P6-002 | Programação | Abrir local | Mapa ou busca | Pendente |
| NAV-F5P6-003 | Rodapé | Abrir contato | Canal oficial | Pendente |

---

# 59. Testes de acessibilidade

Deverão verificar:

- contraste;
- foco visível;
- navegação por teclado;
- textos alternativos;
- rótulos;
- hierarquia de títulos;
- semântica;
- leitura por tecnologias assistivas;
- tamanho de toque;
- redimensionamento;
- orientação móvel;
- clareza das mensagens.

---

# 60. Checklist de acessibilidade

- [ ] Existe um único título principal coerente.
- [ ] Os títulos seguem hierarquia lógica.
- [ ] Imagens informativas possuem texto alternativo.
- [ ] Botões possuem nomes acessíveis.
- [ ] Links possuem finalidade compreensível.
- [ ] Elementos interativos aceitam teclado.
- [ ] O foco é visível.
- [ ] O contraste é suficiente.
- [ ] O conteúdo permanece legível com ampliação.
- [ ] A navegação móvel permanece funcional.
- [ ] Erros são apresentados de forma compreensível.
- [ ] Informações não dependem exclusivamente de cor.

---

# 61. Validação responsiva

Deverão ser testados, no mínimo:

- largura móvel pequena;
- largura móvel média;
- tablet;
- desktop;
- orientação retrato;
- orientação paisagem;
- ampliação;
- textos longos;
- tabelas;
- menus;
- imagens.

---

# 62. Testes de regressão

Os testes de regressão deverão comparar:

- estado fundador;
- estado anterior à integração;
- estado integrado;
- estado após correções autorizadas.

---

# 63. Objetos de regressão

Deverão ser verificados:

- conteúdo;
- dados;
- layout;
- estilos;
- scripts;
- filtros;
- links;
- mapas;
- imagens;
- programação;
- festeiros;
- locais;
- identidade;
- acessibilidade;
- responsividade;
- compartilhamento.

---

# 64. Matriz de regressão

| ID | Objeto | Estado anterior | Estado integrado | Divergência |
|---|---|---|---|---|
| REG-F5P6-001 | A registrar | A registrar | A registrar | Pendente |

---

# 65. Estados de regressão

| Código | Estado |
|---|---|
| REG-OK | Sem regressão |
| REG-VIS | Regressão visual |
| REG-FUN | Regressão funcional |
| REG-DAT | Regressão de dados |
| REG-REF | Regressão de referência |
| REG-ACC | Regressão de acessibilidade |
| REG-SEC | Regressão de segurança |
| REG-FND | Regressão fundadora |
| REG-PEN | Pendente |

---

# 66. Validação de segurança

A validação deverá verificar:

- exposição de credenciais;
- exposição de dados pessoais;
- scripts externos;
- links inseguros;
- conteúdo misto;
- permissões;
- entradas não validadas;
- dependências externas;
- arquivos sensíveis;
- dados privados;
- caminhos indevidos;
- possibilidade de alteração não autorizada.

---

# 67. Verificação de credenciais

Exemplo de busca controlada:

```bash
grep -RIn --exclude-dir=.git -E 'api[_-]?key|secret|token|password' CAMINHO_CONFIRMADO
```

O resultado deverá ser tratado com sigilo.

Nenhum valor sensível deverá ser reproduzido na documentação pública.

---

# 68. Validação de links externos

Links externos deverão ser classificados como:

- institucional;
- mapa;
- rede social;
- download;
- referência;
- serviço;
- desconhecido;
- inseguro;
- temporário.

---

# 69. Validação de protocolos

Deverão ser identificados:

- `https://`;
- `http://`;
- protocolos especiais;
- links relativos;
- links inválidos;
- links incompletos.

O uso de HTTP deverá ser analisado como risco.

---

# 70. Registro de divergências

Toda divergência deverá possuir:

- identificador;
- origem;
- objeto;
- descrição;
- evidência;
- impacto;
- criticidade;
- dependências;
- recomendação;
- plano de retorno;
- responsável;
- estado.

---

# 71. Identificação das divergências

Padrão:

```text
F5-P6-DVG-NNN-TIPO
```

Exemplos:

```text
F5-P6-DVG-001-DATA
F5-P6-DVG-002-REFERENCE
F5-P6-DVG-003-PATH
F5-P6-DVG-004-FUNCTIONAL
F5-P6-DVG-005-ACCESSIBILITY
F5-P6-DVG-006-SECURITY
```

---

# 72. Classificação das divergências

| Código | Classificação |
|---|---|
| DVG-INF | Informativa |
| DVG-BAI | Baixa |
| DVG-MOD | Moderada |
| DVG-ALT | Alta |
| DVG-CRI | Crítica |
| DVG-FND | Fundadora |

---

# 73. Estados das divergências

| Código | Estado |
|---|---|
| DVG-AB | Aberta |
| DVG-AN | Em análise |
| DVG-AP | Correção aprovada |
| DVG-CR | Corrigida |
| DVG-RT | Retestada |
| DVG-VA | Validada |
| DVG-AC | Aceita com justificativa |
| DVG-BL | Bloqueada |
| DVG-FN | Bloqueio fundador |

---

# 74. Matriz de divergências

| ID | Objeto | Descrição | Criticidade | Estado |
|---|---|---|---|---|
| F5-P6-DVG-001 | A registrar | A registrar | A classificar | Aberta |

---

# 75. Critérios de correção

Nenhuma divergência será corrigida automaticamente.

Uma correção exigirá:

- divergência registrada;
- causa identificada;
- impacto analisado;
- solução proposta;
- arquivos afetados identificados;
- plano de retorno;
- autorização humana;
- teste posterior;
- evidência;
- parecer.

---

# 76. Plano de retorno

Cada operação de integração ou correção deverá possuir plano de retorno.

O plano deverá registrar:

- objeto;
- estado anterior;
- alteração;
- arquivos afetados;
- dependências;
- procedimento de retorno;
- teste de restauração;
- evidência;
- responsável;
- autorização.

---

# 77. Identificação dos retornos

Padrão:

```text
F5-P6-RTN-NNN
```

---

# 78. Critérios de acionamento do retorno

O retorno deverá ser acionado quando:

- dado deixar de carregar;
- referência quebrar;
- caminho se tornar inválido;
- identificador for perdido;
- relacionamento se romper;
- teste funcional falhar;
- regressão crítica for detectada;
- acessibilidade for comprometida;
- segurança for comprometida;
- a FESTANÇA 2026 for afetada.

---

# 79. Evidências obrigatórias

Deverão ser preservadas evidências de:

- linha de base;
- arquivos validados;
- dados validados;
- componentes validados;
- referências;
- caminhos;
- identificadores;
- relacionamentos;
- testes;
- erros;
- console;
- divergências;
- correções autorizadas;
- retornos;
- pareceres;
- estado do Git.

---

# 80. Identificação das evidências

Padrão:

```text
F5-P6-BLK-NNN-EVD-NNN-TIPO
```

Exemplos:

```text
F5-P6-BLK-001-EVD-001-BASELINE
F5-P6-BLK-002-EVD-001-DATA-VALIDATION
F5-P6-BLK-003-EVD-001-REFERENCE-MAP
F5-P6-BLK-004-EVD-001-FUNCTIONAL-TEST
F5-P6-BLK-005-EVD-001-ACCESSIBILITY
F5-P6-BLK-006-EVD-001-REGRESSION
F5-P6-BLK-007-EVD-001-SECURITY
```

---

# 81. Metadados das evidências

| Campo | Obrigatoriedade |
|---|---|
| Identificador | Obrigatório |
| Fase | Obrigatória |
| Ciclo | Obrigatório |
| Bloco | Obrigatório |
| Unidade | Obrigatória |
| Tipo | Obrigatório |
| Origem | Obrigatória |
| Data | Obrigatória |
| Horário | Obrigatório |
| Responsável | Obrigatório |
| Comando ou procedimento | Obrigatório |
| Resultado | Obrigatório |
| Integridade | Obrigatória |
| Validação humana | Obrigatória |
| Vínculo documental | Obrigatório |
| Cadeia de custódia | Obrigatória |

---

# 82. Cadeia de custódia

```text
OBJETO
↓
IDENTIFICAÇÃO
↓
LINHA DE BASE
↓
VALIDAÇÃO
↓
TESTE
↓
RESULTADO
↓
EVIDÊNCIA
↓
PARECER
↓
ARQUIVAMENTO
↓
PRESERVAÇÃO
```

---

# 83. Blocos operacionais preliminares

```text
BLK-001 — RECONFIRMAÇÃO DA LINHA DE BASE

BLK-002 — VALIDAÇÃO DOS DADOS

BLK-003 — VALIDAÇÃO DOS COMPONENTES

BLK-004 — MAPEAMENTO DAS REFERÊNCIAS

BLK-005 — VALIDAÇÃO DOS CAMINHOS

BLK-006 — VALIDAÇÃO DOS IDENTIFICADORES

BLK-007 — VALIDAÇÃO DOS RELACIONAMENTOS

BLK-008 — TESTES DE CARREGAMENTO

BLK-009 — TESTES FUNCIONAIS

BLK-010 — TESTES DE NAVEGAÇÃO

BLK-011 — TESTES DE ACESSIBILIDADE

BLK-012 — TESTES RESPONSIVOS

BLK-013 — TESTES DE REGRESSÃO

BLK-014 — VALIDAÇÃO DE SEGURANÇA

BLK-015 — REGISTRO DAS DIVERGÊNCIAS

BLK-016 — VALIDAÇÃO DOS PLANOS DE RETORNO

BLK-017 — CONSOLIDAÇÃO DAS EVIDÊNCIAS

BLK-018 — PARECER FINAL
```

---

# 84. Identificação dos blocos

Padrão:

```text
F5-P6-BLK-NNN-TIPO-DESCRICAO
```

Exemplos:

```text
F5-P6-BLK-001-ENV-BASELINE
F5-P6-BLK-002-DATA-VALIDATION
F5-P6-BLK-003-COMPONENT-VALIDATION
F5-P6-BLK-004-REFERENCE-VALIDATION
F5-P6-BLK-005-FUNCTIONAL-TEST
F5-P6-BLK-006-REGRESSION-TEST
F5-P6-BLK-007-SECURITY-VALIDATION
```

---

# 85. Estrutura obrigatória de cada bloco

Cada bloco deverá registrar:

- ID;
- objetivo;
- objeto;
- escopo;
- caminho;
- estado anterior;
- dependências;
- referências;
- identificadores;
- riscos;
- autorização;
- comando ou procedimento;
- resultado esperado;
- resultado real;
- divergência;
- evidência;
- teste;
- plano de retorno;
- parecer;
- estado final.

---

# 86. Primeiro movimento operacional

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

Cada saída deverá ser analisada antes do comando seguinte.

---

# 87. Localização da estrutura permanente

Comando:

```bash
find apps -maxdepth 4 -type d -iname '*festanca*' | sort
```

Objetivo:

- localizar o Portal Permanente;
- localizar a edição fundadora;
- localizar estruturas relacionadas;
- impedir validação em caminho incorreto.

---

# 88. Localização dos dados

Após confirmação do caminho:

```bash
find CAMINHO_CONFIRMADO -type f -name '*.json' | sort
```

---

# 89. Localização dos componentes

Exemplos:

```bash
find CAMINHO_CONFIRMADO -type f -name '*.html' | sort
```

```bash
find CAMINHO_CONFIRMADO -type f -name '*.css' | sort
```

```bash
find CAMINHO_CONFIRMADO -type f -name '*.js' | sort
```

---

# 90. Verificação do estado do Git

Após cada bloco autorizado:

```bash
git status --short
```

O resultado deverá comprovar que:

- nenhuma alteração silenciosa ocorreu;
- apenas objetos autorizados foram afetados;
- o estado do repositório permanece compreendido.

---

# 91. Critérios de interrupção

A execução deverá ser interrompida quando:

- o caminho real divergir;
- a linha de base não for confirmada;
- o corpus fundador não estiver preservado;
- um dado estiver corrompido;
- uma referência estiver quebrada;
- um identificador fundador tiver sido alterado;
- um relacionamento estiver inconsistente;
- o carregamento falhar;
- houver regressão crítica;
- houver falha de acessibilidade crítica;
- houver exposição de credencial;
- houver risco de perda histórica;
- o Git apresentar alteração inesperada;
- a FESTANÇA 2026 puder ser comprometida.

---

# 92. Classificação das interrupções

| Código | Tipo |
|---|---|
| INT-ENV | Ambiente divergente |
| INT-DAT | Dado inválido |
| INT-CMP | Componente incompatível |
| INT-REF | Referência quebrada |
| INT-PAT | Caminho inválido |
| INT-ID | Identificador comprometido |
| INT-REL | Relacionamento rompido |
| INT-FUN | Falha funcional |
| INT-ACC | Falha de acessibilidade |
| INT-REG | Regressão |
| INT-SEC | Falha de segurança |
| INT-GIT | Alteração inesperada |
| INT-FND | Risco fundador |

---

# 93. Matriz de riscos

| ID | Risco | Impacto | Controle |
|---|---|---|---|
| F5P6-RSK-001 | Validar caminho incorreto | Crítico | Reconfirmação da raiz |
| F5P6-RSK-002 | Aprovar dado apenas pela sintaxe | Alto | Validação semântica |
| F5P6-RSK-003 | Referência quebrada | Crítico | Mapeamento e teste |
| F5P6-RSK-004 | Identificador duplicado | Alto | Inventário de IDs |
| F5P6-RSK-005 | Relacionamento inconsistente | Alto | Validação referencial |
| F5P6-RSK-006 | Regressão funcional | Crítico | Testes comparativos |
| F5P6-RSK-007 | Regressão de acessibilidade | Crítico | Checklist e testes |
| F5P6-RSK-008 | Exposição de credencial | Crítico | Validação de segurança |
| F5P6-RSK-009 | Correção silenciosa | Fundador | Proibição e auditoria |
| F5P6-RSK-010 | Comprometimento de 2026 | Fundador | Bloqueio total |

---

# 94. Classificação dos riscos

| Nível | Classificação | Tratamento |
|---|---|---|
| R1 | Informativo | Registrar |
| R2 | Baixo | Monitorar |
| R3 | Moderado | Controlar |
| R4 | Alto | Autorizar expressamente |
| R5 | Crítico | Bloquear |
| RF | Fundador | Bloqueio total |

---

# 95. Proibições absolutas

Não estão autorizados neste ciclo, sem aprovação extraordinária:

```text
rm -rf

git clean

git reset --hard

git restore indiscriminado

git checkout sobre arquivos fundadores

sed -i em massa

substituição automática de identificadores

alteração automática de caminhos

correção automática de dados

migração automática

redirecionamento não testado

exclusão de divergências

ocultação de erros

certificação sem evidência
```

---

# 96. Regras para o Termux

A execução deverá obedecer:

- um comando por bloco;
- comandos curtos;
- saída limitada;
- objetivo único;
- validação antes da continuidade;
- nenhuma alteração silenciosa;
- nenhuma correção em massa;
- nenhuma saída impossível de revisar;
- capturas preservadas;
- interrupção diante de divergência;
- validação humana obrigatória.

---

# 97. Limitação das saídas

Comandos de busca deverão utilizar:

- caminho específico;
- profundidade controlada;
- extensão definida;
- filtros;
- ordenação;
- segmentação.

As saídas não deverão ultrapassar a capacidade segura de leitura, cópia ou registro no Termux e no WhatsApp.

---

# 98. Proteção de dados pessoais

Os testes e evidências não deverão expor:

- dados pessoais desnecessários;
- contatos privados;
- endereços residenciais não autorizados;
- dados de menores;
- informações sensíveis;
- credenciais;
- identificadores privados.

---

# 99. Proteção da edição fundadora

Durante todo o ciclo:

- o caminho original deverá ser preservado;
- os arquivos originais deverão permanecer íntegros;
- os dados mestres não poderão ser sobrescritos;
- os identificadores fundadores deverão permanecer rastreáveis;
- as referências históricas deverão ser preservadas;
- a capacidade de reconstrução deverá ser mantida;
- nenhuma correção silenciosa será admitida.

---

# 100. Teste fundador obrigatório

Todo conjunto de validação deverá responder:

```text
O CAMINHO ORIGINAL PERMANECE PRESERVADO?

OS ARQUIVOS FUNDADORES PERMANECEM ÍNTEGROS?

OS DADOS DE 2026 PERMANECEM COMPLETOS?

OS IDENTIFICADORES PERMANECEM RASTREÁVEIS?

AS REFERÊNCIAS PERMANECEM FUNCIONAIS?

OS RELACIONAMENTOS PERMANECEM CONSISTENTES?

A PROGRAMAÇÃO CONTINUA DISPONÍVEL?

OS FESTEIROS CONTINUAM IDENTIFICADOS?

OS LOCAIS CONTINUAM RELACIONADOS?

A NAVEGAÇÃO CONTINUA FUNCIONAL?

A ACESSIBILIDADE NÃO FOI REDUZIDA?

A EDIÇÃO CONTINUA RECONSTRUÍVEL?

O ESTADO ANTERIOR PODE SER RESTAURADO?

NENHUMA ALTERAÇÃO SILENCIOSA OCORREU?
```

Qualquer resposta negativa bloqueará o ciclo.

---

# 101. Inteligência artificial

A inteligência artificial poderá auxiliar na:

- preparação das matrizes;
- revisão preliminar de dados;
- detecção de duplicidades;
- análise de referências;
- comparação de identificadores;
- identificação de divergências;
- preparação dos testes;
- consolidação das evidências.

A inteligência artificial não poderá:

- alterar dados autonomamente;
- corrigir arquivos sem autorização;
- afirmar que teste foi executado sem evidência;
- ocultar falhas;
- substituir validação humana;
- certificar segurança isoladamente;
- certificar ausência de regressão sem comparação;
- autorizar publicação.

---

# 102. Responsabilidades

## 102.1. Governança institucional

Compete à governança:

- aprovar o plano de validação;
- autorizar testes;
- decidir sobre divergências;
- aprovar correções;
- validar riscos;
- proteger a edição fundadora.

## 102.2. Coordenação técnica

Compete à coordenação técnica:

- preparar os testes;
- executar blocos autorizados;
- registrar resultados;
- mapear referências;
- validar caminhos;
- preservar evidências;
- preparar pareceres.

## 102.3. Curadoria de dados

Compete à curadoria:

- validar significado;
- verificar completude;
- conferir consistência;
- preservar proveniência;
- analisar divergências semânticas.

## 102.4. Curadoria histórica

Compete à curadoria histórica:

- proteger o contexto;
- validar continuidade;
- preservar identificadores;
- verificar autenticidade;
- acompanhar o teste fundador.

## 102.5. Auditoria

Compete à auditoria:

- conferir autorizações;
- revisar comandos;
- validar evidências;
- verificar divergências;
- acompanhar correções;
- conferir planos de retorno;
- emitir parecer independente.

---

# 103. Checklist de entrada

- [ ] F5-P2 concluído.
- [ ] Ambiente técnico validado.
- [ ] F5-P3 concluído.
- [ ] Plano de execução aprovado.
- [ ] F5-P4 concluído.
- [ ] Estrutura permanente confirmada.
- [ ] F5-P5 concluído.
- [ ] Corpus fundador preservado.
- [ ] Inventário fundador consolidado.
- [ ] Dependências mapeadas.
- [ ] Estratégia de integração aprovada.
- [ ] Planos de retorno definidos.
- [ ] Autorização humana registrada.
- [ ] FESTANÇA 2026 protegida.

---

# 104. Checklist dos dados

- [ ] Arquivos JSON localizados.
- [ ] Sintaxe validada.
- [ ] Codificação validada.
- [ ] Campos obrigatórios conferidos.
- [ ] Tipos conferidos.
- [ ] Identificadores conferidos.
- [ ] Duplicidades verificadas.
- [ ] Completude verificada.
- [ ] Temporalidade verificada.
- [ ] Relacionamentos verificados.
- [ ] Dados pessoais avaliados.
- [ ] Proveniência preservada.

---

# 105. Checklist dos componentes

- [ ] Componentes localizados.
- [ ] Funções identificadas.
- [ ] Dependências mapeadas.
- [ ] Escopo permanente ou anual validado.
- [ ] Caminhos conferidos.
- [ ] Estilos carregados.
- [ ] Scripts carregados.
- [ ] Acessibilidade verificada.
- [ ] Compatibilidade entre edições verificada.
- [ ] Impacto sobre 2026 avaliado.

---

# 106. Checklist das referências

- [ ] Referências HTML mapeadas.
- [ ] Referências CSS mapeadas.
- [ ] Referências JavaScript mapeadas.
- [ ] Referências JSON mapeadas.
- [ ] Caminhos relativos testados.
- [ ] Caminhos absolutos avaliados.
- [ ] Links externos classificados.
- [ ] Referências fundadoras preservadas.
- [ ] Referências quebradas registradas.
- [ ] Redirecionamentos testados, quando aplicável.

---

# 107. Checklist funcional

- [ ] Página inicial carrega.
- [ ] CSS carrega.
- [ ] JavaScript carrega.
- [ ] Dados carregam.
- [ ] Imagens carregam.
- [ ] Navegação funciona.
- [ ] Filtros funcionam.
- [ ] Links funcionam.
- [ ] Mapas funcionam.
- [ ] Compartilhamento funciona.
- [ ] Console foi verificado.
- [ ] Erros foram registrados.

---

# 108. Checklist de acessibilidade

- [ ] Hierarquia de títulos coerente.
- [ ] Contraste adequado.
- [ ] Foco visível.
- [ ] Navegação por teclado.
- [ ] Textos alternativos.
- [ ] Rótulos compreensíveis.
- [ ] Botões acessíveis.
- [ ] Links compreensíveis.
- [ ] Ampliação preserva o conteúdo.
- [ ] Layout móvel permanece utilizável.
- [ ] Informação não depende apenas de cor.
- [ ] Mensagens de erro são compreensíveis.

---

# 109. Checklist de regressão

- [ ] Conteúdo comparado.
- [ ] Dados comparados.
- [ ] Layout comparado.
- [ ] Estilos comparados.
- [ ] Scripts comparados.
- [ ] Filtros comparados.
- [ ] Links comparados.
- [ ] Imagens comparadas.
- [ ] Programação comparada.
- [ ] Festeiros comparados.
- [ ] Locais comparados.
- [ ] Acessibilidade comparada.
- [ ] Responsividade comparada.
- [ ] Divergências registradas.

---

# 110. Checklist de segurança

- [ ] Credenciais não expostas.
- [ ] Tokens não expostos.
- [ ] Arquivos sensíveis identificados.
- [ ] Dados pessoais protegidos.
- [ ] Links inseguros avaliados.
- [ ] Scripts externos identificados.
- [ ] Protocolos analisados.
- [ ] Entradas avaliadas.
- [ ] Permissões verificadas.
- [ ] Evidências públicas não expõem segredos.

---

# 111. Critérios de aprovação do ciclo

O F5-P6 somente poderá ser aprovado quando:

- os dados integrados estiverem validados;
- os componentes compartilhados estiverem validados;
- as referências internas estiverem funcionais;
- os caminhos estiverem corretos;
- os identificadores estiverem preservados;
- os relacionamentos estiverem consistentes;
- a compatibilidade estiver comprovada;
- os testes funcionais estiverem aprovados;
- os testes de carregamento estiverem aprovados;
- os testes de navegação estiverem aprovados;
- os testes de acessibilidade estiverem aprovados;
- os testes de regressão estiverem concluídos;
- a validação de segurança estiver concluída;
- as divergências estiverem classificadas;
- os planos de retorno estiverem válidos;
- as evidências estiverem preservadas;
- houver validação humana;
- a FESTANÇA 2026 estiver integralmente protegida.

---

# 112. Classificação final do ciclo

| Código | Estado |
|---|---|
| F5P6-PL | Planejado |
| F5P6-RD | Somente leitura |
| F5P6-TS | Em testes |
| F5P6-DV | Divergências identificadas |
| F5P6-RT | Em reteste |
| F5P6-VA | Validado |
| F5P6-AP | Aprovado |
| F5P6-AO | Aprovado com observações |
| F5P6-AC | Aprovado condicionalmente |
| F5P6-SU | Suspenso |
| F5P6-RV | Retornado |
| F5P6-NC | Não conforme |
| F5P6-BL | Bloqueado |
| F5P6-FN | Bloqueio fundador |

---

# 113. Estado inicial deste documento

| Campo | Valor |
|---|---|
| Documento | data-and-component-integration-validation.md |
| Fase | F5 |
| Ciclo | F5-P6 |
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
| Estrutura permanente | Pendente de confirmação |
| Corpus fundador | Pendente de preservação comprovada |
| Dados integrados | Pendentes de validação |
| Componentes | Pendentes de validação |
| Referências | Pendentes de validação |
| Caminhos | Pendentes de validação |
| Identificadores | Pendentes de validação |
| Relacionamentos | Pendentes de validação |
| Testes funcionais | Pendentes |
| Testes de carregamento | Pendentes |
| Testes de navegação | Pendentes |
| Testes de acessibilidade | Pendentes |
| Testes de regressão | Pendentes |
| Validação de segurança | Pendente |
| Divergências | Pendentes de identificação |
| Correções | Não autorizadas |
| Planos de retorno | Obrigatórios |
| Evidências | Obrigatórias |
| Auditoria | Permanente |
| Validação humana | Obrigatória |
| Rastreabilidade | Integral |
| Proteção fundadora | Máxima |
| Próximo ciclo | F5-P7 |

---

# 114. Vigência

Este documento entra imediatamente em vigor após sua aprovação e publicação no repositório oficial.

Sua vigência será permanente.

Toda revisão deverá:

- preservar versões anteriores;
- registrar justificativa;
- identificar responsáveis;
- apresentar análise de impacto;
- preservar evidências;
- preservar resultados dos testes;
- preservar divergências;
- preservar caminhos históricos;
- preservar identificadores;
- preservar referências;
- manter a cadeia de custódia;
- preservar planos de retorno;
- proteger dados pessoais;
- proteger credenciais;
- proteger conhecimentos tradicionais;
- proteger a edição fundadora;
- assegurar rastreabilidade integral.

---

# 115. Certificação de abertura do ciclo

Com a publicação deste documento, ficam formalmente estabelecidos:

```text
CICLO F5-P6: FORMALMENTE ABERTO

OBJETO:
VALIDAÇÃO DA INTEGRAÇÃO DE DADOS,
COMPONENTES E REFERÊNCIAS

REGIME INICIAL:
PLANEJAMENTO E SOMENTE LEITURA

DADOS INTEGRADOS:
A VALIDAR

COMPONENTES COMPARTILHADOS:
A VALIDAR

REFERÊNCIAS INTERNAS:
A VALIDAR

CAMINHOS:
A VALIDAR

IDENTIFICADORES:
A VALIDAR E PRESERVAR

RELACIONAMENTOS:
A VALIDAR

COMPATIBILIDADE:
A COMPROVAR

TESTES FUNCIONAIS:
OBRIGATÓRIOS

TESTES DE CARREGAMENTO:
OBRIGATÓRIOS

TESTES DE NAVEGAÇÃO:
OBRIGATÓRIOS

TESTES DE ACESSIBILIDADE:
OBRIGATÓRIOS

TESTES DE REGRESSÃO:
OBRIGATÓRIOS

VALIDAÇÃO DE SEGURANÇA:
OBRIGATÓRIA

DIVERGÊNCIAS:
A REGISTRAR

CORREÇÕES AUTOMÁTICAS:
PROIBIDAS

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

# 116. Próximo movimento operacional

O primeiro movimento permanecerá em somente leitura.

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
find CAMINHO_CONFIRMADO -type f -name '*.json' | sort
```

Depois, cada arquivo JSON deverá ser validado individualmente.

Exemplo:

```bash
python -m json.tool CAMINHO_DO_ARQUIVO_JSON
```

Cada saída deverá ser:

1. preservada;
2. analisada;
3. classificada;
4. vinculada ao bloco;
5. comparada com a documentação;
6. validada antes da continuidade.

Nenhuma correção física está autorizada por esta seção.

---

# 117. Certificação de encerramento do ciclo

Após a execução real, poderá ser registrada:

```text
CICLO F5-P6: FORMALMENTE CONCLUÍDO

DADOS INTEGRADOS:
VALIDADOS

COMPONENTES COMPARTILHADOS:
VALIDADOS

REFERÊNCIAS INTERNAS:
VALIDADAS

CAMINHOS:
VALIDADOS

IDENTIFICADORES:
PRESERVADOS

RELACIONAMENTOS:
VALIDADOS

COMPATIBILIDADE ESTRUTURAL:
COMPROVADA

COMPATIBILIDADE SEMÂNTICA:
COMPROVADA

COMPATIBILIDADE FUNCIONAL:
COMPROVADA

TESTES DE CARREGAMENTO:
APROVADOS

TESTES FUNCIONAIS:
APROVADOS

TESTES DE NAVEGAÇÃO:
APROVADOS

TESTES DE ACESSIBILIDADE:
APROVADOS

TESTES DE REGRESSÃO:
APROVADOS

VALIDAÇÃO DE SEGURANÇA:
CONCLUÍDA

DIVERGÊNCIAS:
CLASSIFICADAS

PLANOS DE RETORNO:
VALIDADOS

EVIDÊNCIAS:
PRESERVADAS

ALTERAÇÕES SILENCIOSAS:
NÃO OCORRERAM

FESTANÇA 2026:
INTEGRALMENTE PROTEGIDA
```

Essa certificação somente poderá ser utilizada após validação humana dos resultados reais.

---

# 118. Próximo ciclo oficial

**F5-P7**

Arquivo:

```text
docs/festanca/technical-implementation/local-testing-and-regression-plan.md
```

Denominação oficial:

**Plano Executivo de Testes Locais, Regressão, Compatibilidade e Estabilidade do Portal Permanente da FESTANÇA**

Esse ciclo deverá estabelecer:

- ambiente local de testes;
- matriz de navegadores;
- matriz de dispositivos;
- testes de carregamento;
- testes funcionais;
- testes responsivos;
- testes de acessibilidade;
- testes de compatibilidade;
- testes de regressão;
- testes dos dados;
- testes dos componentes;
- testes das referências;
- testes de segurança local;
- critérios de aprovação;
- registro de falhas;
- evidências;
- planos de retorno;
- preservação integral da FESTANÇA 2026.

O F5-P7 somente poderá iniciar após:

- conclusão real do F5-P2;
- conclusão real do F5-P3;
- conclusão real do F5-P4;
- conclusão real do F5-P5;
- conclusão real do F5-P6;
- validação da integração;
- classificação das divergências;
- autorização humana expressa.

---

# 119. Encerramento institucional

Seguimos juntos, passo a passo.

Com método.

Com segurança.

Com preservação integral da edição fundadora.

**SOMOS TODOS, AVANÇO.**

Ao encontro do futuro.

**AMÉM.**
