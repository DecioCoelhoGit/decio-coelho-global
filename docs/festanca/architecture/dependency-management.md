# Modelo Constitucional de Gestão de Dependências do Portal Permanente da FESTANÇA

> Constituição destinada a regulamentar a identificação, a classificação, o controle, o versionamento, a atualização, a substituição, a auditoria, a contingência, a preservação e a evolução das dependências utilizadas pelo Portal Permanente da FESTANÇA de Vila Bela da Santíssima Trindade — Mato Grosso — Brasil.

---

## 1. Identificação do documento

| Campo | Conteúdo |
|---|---|
| Documento | Modelo Constitucional de Gestão de Dependências do Portal Permanente da FESTANÇA |
| Caminho oficial | `docs/festanca/architecture/dependency-management.md` |
| Classificação | Documento constitucional de arquitetura |
| Domínio | Gestão de dependências tecnológicas |
| Regime | Permanente |
| Criticidade | Máxima |
| Mutabilidade | Estritamente controlada |
| Preservação | Integral, auditável, versionada e recuperável |
| Edição fundadora | FESTANÇA 2026 |
| Situação | Constituição arquitetural permanente |
| Versão inicial | `1.0.0` |
| Aplicabilidade | Portal Permanente e edições anuais |
| Vigência | Permanente |
| Documento superior | `docs/festanca/architecture/architecture-principles.md` |
| Documentos complementares | `repository-structure.md`, `component-architecture.md`, `integration-architecture.md` e `infrastructure-architecture.md` |

---

## 2. Finalidade

Este documento estabelece o regime oficial de gestão das dependências utilizadas pelo Portal Permanente da FESTANÇA.

Sua finalidade é assegurar que toda dependência seja:

- necessária;
- identificável;
- documentada;
- classificada;
- licenciada;
- versionada;
- segura;
- monitorada;
- atualizável;
- substituível;
- auditável;
- recuperável;
- compatível com a preservação histórica;
- subordinada à continuidade institucional.

Nenhuma dependência deverá ser incorporada apenas por conveniência momentânea, preferência individual ou tendência tecnológica.

---

## 3. Objetivos estratégicos

São objetivos permanentes deste Modelo:

1. assegurar a estabilidade do Portal;

2. reduzir riscos tecnológicos;

3. evitar dependências invisíveis;

4. impedir aprisionamento tecnológico irreversível;

5. preservar a compatibilidade entre versões;

6. controlar vulnerabilidades;

7. assegurar a legalidade das licenças;

8. permitir substituições controladas;

9. manter alternativas de contingência;

10. preservar a edição fundadora;

11. assegurar a rastreabilidade histórica;

12. proteger a continuidade das futuras edições.

---

## 4. Princípios fundamentais

Toda gestão de dependências deverá observar:

- necessidade;
- legitimidade;
- simplicidade;
- proporcionalidade;
- segurança;
- transparência;
- rastreabilidade;
- reversibilidade;
- interoperabilidade;
- portabilidade;
- sustentabilidade;
- continuidade;
- preservação histórica;
- independência tecnológica.

---

## 5. Conceito de dependência

Considera-se dependência todo componente, recurso, serviço, biblioteca, plataforma, integração, infraestrutura ou conhecimento externo ou interno necessário ao funcionamento, à manutenção, à publicação, à segurança ou à preservação do Portal.

Uma dependência poderá ser:

- técnica;
- documental;
- operacional;
- institucional;
- contratual;
- humana;
- financeira;
- tecnológica;
- informacional;
- cultural.

---

## 6. Estrutura geral

```text
PORTAL PERMANENTE
        │
        ├── Dependências internas
        ├── Dependências externas
        ├── Bibliotecas
        ├── Serviços
        ├── Plataformas
        ├── Integrações
        ├── Infraestrutura
        ├── Dependências humanas
        └── Dependências documentais
```

---

## 7. Classificação principal

As dependências serão classificadas como:

| Categoria | Definição |
|---|---|
| Interna | Desenvolvida ou mantida dentro do repositório |
| Externa | Fornecida por terceiro, plataforma ou serviço externo |
| Permanente | Necessária ao núcleo permanente |
| Anual | Vinculada a uma edição específica |
| Compartilhada | Utilizada por múltiplos módulos ou edições |
| Temporária | Utilizada por período limitado |
| Experimental | Avaliada em ambiente controlado |
| Crítica | Indispensável à operação ou preservação |
| Suplementar | Útil, mas não indispensável |
| Arquivística | Necessária à preservação ou recuperação histórica |

---

## 8. Dependências internas

São exemplos de dependências internas:

- componentes próprios;
- módulos JavaScript;
- folhas de estilo;
- arquivos de configuração;
- esquemas de dados;
- validadores;
- scripts de publicação;
- scripts de auditoria;
- documentos constitucionais;
- mecanismos de preservação;
- padrões institucionais;
- convenções do repositório.

---

## 9. Dependências externas

São exemplos de dependências externas:

- bibliotecas públicas;
- frameworks;
- APIs;
- serviços de mapas;
- plataformas de hospedagem;
- redes sociais;
- serviços de armazenamento;
- serviços de autenticação;
- ferramentas de monitoramento;
- provedores de domínio;
- certificados digitais;
- serviços de comunicação;
- plataformas audiovisuais.

---

## 10. Dependências permanentes

Uma dependência será considerada permanente quando:

- servir ao núcleo institucional;
- possuir finalidade contínua;
- atender múltiplas edições;
- possuir documentação própria;
- apresentar estabilidade suficiente;
- possuir estratégia de substituição;
- preservar compatibilidade histórica.

---

## 11. Dependências anuais

Uma dependência será considerada anual quando:

- atender edição específica;
- utilizar dados delimitados por ano;
- possuir início e encerramento definidos;
- preservar registros após sua desativação;
- não comprometer o núcleo permanente;
- permanecer identificada no acervo histórico.

---

## 12. Dependências compartilhadas

Toda dependência compartilhada deverá:

- possuir responsabilidade central;
- evitar duplicação;
- manter contrato estável;
- preservar compatibilidade;
- possuir documentação comum;
- permitir atualização controlada;
- atender mais de uma edição ou componente.

---

## 13. Dependências temporárias

Dependências temporárias deverão possuir:

- finalidade delimitada;
- prazo previsto;
- responsável;
- critérios de encerramento;
- estratégia de remoção;
- preservação das evidências produzidas;
- avaliação de impacto sobre o acervo.

---

## 14. Dependências experimentais

Toda dependência experimental deverá:

- permanecer fora da produção oficial;
- utilizar ambiente controlado;
- possuir hipótese de uso;
- possuir prazo de avaliação;
- registrar resultados;
- impedir acesso indevido a dados reais;
- ser aprovada antes de qualquer incorporação definitiva.

---

## 15. Dependências críticas

São críticas as dependências cuja indisponibilidade possa afetar:

- o acesso público;
- a programação oficial;
- os documentos;
- os dados;
- a segurança;
- a publicação;
- o acervo histórico;
- a recuperação;
- a edição fundadora;
- a continuidade institucional.

---

## 16. Critérios de adoção

Antes da adoção de uma dependência, deverão ser avaliados:

- finalidade;
- necessidade;
- maturidade;
- manutenção;
- documentação;
- compatibilidade;
- segurança;
- licença;
- custo;
- portabilidade;
- comunidade;
- possibilidade de exportação;
- risco de descontinuidade;
- estratégia de substituição;
- impacto cultural e histórico.

---

## 17. Critérios de rejeição

Uma dependência deverá ser rejeitada quando apresentar:

- finalidade indefinida;
- licença incompatível;
- vulnerabilidade grave não tratada;
- ausência de documentação;
- abandono evidente;
- dependência irreversível;
- impossibilidade de exportação;
- incompatibilidade estrutural;
- risco jurídico elevado;
- coleta excessiva de dados;
- ausência de estratégia de saída;
- ameaça à preservação histórica.

---

## 18. Inventário oficial

Toda dependência deverá constar em inventário contendo, no mínimo:

| Campo | Obrigatoriedade |
|---|---|
| Identificador | Obrigatório |
| Nome | Obrigatório |
| Categoria | Obrigatório |
| Origem | Obrigatório |
| Finalidade | Obrigatório |
| Versão | Obrigatório |
| Licença | Obrigatório |
| Responsável | Obrigatório |
| Criticidade | Obrigatório |
| Ambiente | Obrigatório |
| Data de adoção | Obrigatório |
| Última revisão | Obrigatório |
| Estratégia de substituição | Para dependências relevantes |
| Plano de contingência | Para dependências críticas |
| Estado | Obrigatório |

---

## 19. Estados possíveis

Uma dependência poderá assumir os estados:

```text
PROPOSTA
EM AVALIAÇÃO
APROVADA
ATIVA
RESTRITA
EM ATUALIZAÇÃO
EM SUBSTITUIÇÃO
OBSOLETA
DESCONTINUADA
ARQUIVADA
```

---

## 20. Identificação única

Toda dependência deverá possuir identificador estável.

Exemplo:

```text
DEP-EXT-MAPS-001
DEP-INT-VALIDATOR-001
DEP-SHARED-ACCESSIBILITY-001
```

Nenhum identificador histórico deverá ser reutilizado para dependência diferente.

---

## 21. Gestão de bibliotecas

Toda biblioteca deverá possuir:

- nome oficial;
- origem;
- versão;
- licença;
- finalidade;
- responsável;
- histórico de atualização;
- riscos conhecidos;
- compatibilidade;
- estratégia de substituição.

---

## 22. Gestão de serviços

Todo serviço deverá ser avaliado quanto a:

- disponibilidade;
- estabilidade;
- custo;
- segurança;
- privacidade;
- continuidade;
- portabilidade;
- exportação;
- suporte;
- dependência contratual;
- possibilidade de encerramento.

---

## 23. Gestão de plataformas

Nenhuma plataforma deverá ser considerada insubstituível.

Toda plataforma crítica deverá possuir:

- inventário dos ativos;
- cópia institucional;
- exportação disponível;
- responsável;
- credenciais institucionais;
- plano de migração;
- estratégia de encerramento;
- preservação dos registros históricos.

---

## 24. Gestão de versões

O versionamento deverá observar, sempre que aplicável:

```text
MAJOR.MINOR.PATCH
```

Exemplos:

```text
1.0.0
1.1.0
1.1.1
2.0.0
```

---

## 25. Tipos de alteração

| Alteração | Classificação |
|---|---|
| Correção compatível | PATCH |
| Inclusão compatível | MINOR |
| Alteração incompatível | MAJOR |
| Correção emergencial | HOTFIX |
| Versão experimental | PRERELEASE |

---

## 26. Fixação de versões

Dependências críticas deverão utilizar versões identificadas e controladas.

Deverão ser evitadas referências genéricas que possam alterar o comportamento sem validação.

Exemplo inadequado:

```text
latest
```

Exemplo controlado:

```text
1.4.2
```

---

## 27. Compatibilidade

Toda atualização deverá avaliar compatibilidade com:

- código existente;
- dados;
- documentos;
- navegadores;
- dispositivos móveis;
- acessibilidade;
- integrações;
- infraestrutura;
- edição fundadora;
- futuras edições;
- mecanismos de preservação.

---

## 28. Compatibilidade retroativa

A compatibilidade retroativa deverá ser preservada sempre que tecnicamente possível.

Quando não for possível, deverão existir:

- justificativa;
- análise de impacto;
- plano de migração;
- testes;
- plano de reversão;
- preservação da versão anterior;
- aprovação institucional.

---

## 29. Atualizações programadas

Toda atualização programada deverá seguir:

```text
IDENTIFICAÇÃO
      ↓
ANÁLISE
      ↓
CLASSIFICAÇÃO DE RISCO
      ↓
TESTES
      ↓
APROVAÇÃO
      ↓
IMPLEMENTAÇÃO
      ↓
VALIDAÇÃO
      ↓
MONITORAMENTO
      ↓
REGISTRO HISTÓRICO
```

---

## 30. Atualizações emergenciais

Atualizações emergenciais poderão ocorrer diante de:

- vulnerabilidade crítica;
- falha de segurança;
- indisponibilidade grave;
- corrupção de dados;
- incompatibilidade impeditiva;
- risco de perda patrimonial.

Mesmo em emergência, deverão ser registrados:

- motivo;
- responsável;
- versão anterior;
- versão aplicada;
- impacto;
- resultado;
- providências posteriores.

---

## 31. Vulnerabilidades

Toda vulnerabilidade deverá ser:

1. identificada;

2. registrada;

3. classificada;

4. analisada;

5. priorizada;

6. tratada;

7. validada;

8. monitorada;

9. preservada como evidência técnica.

---

## 32. Classificação de vulnerabilidades

| Nível | Tratamento |
|---|---|
| Crítico | Tratamento imediato |
| Alto | Tratamento prioritário |
| Médio | Tratamento programado |
| Baixo | Monitoramento e correção planejada |
| Informativo | Registro e acompanhamento |

---

## 33. Fontes de vulnerabilidades

As informações poderão ser obtidas por:

- documentação oficial;
- repositórios dos mantenedores;
- avisos de segurança;
- auditorias internas;
- testes técnicos;
- ferramentas de análise;
- incidentes observados;
- fontes institucionais confiáveis.

---

## 34. Licenciamento

Toda dependência deverá possuir licença conhecida.

Deverão ser avaliados:

- direito de uso;
- direito de modificação;
- direito de distribuição;
- exigência de atribuição;
- obrigação de compartilhamento;
- restrições comerciais;
- compatibilidade com o projeto;
- preservação dos avisos legais.

---

## 35. Licenças desconhecidas

Dependências sem licença identificável não deverão ser incorporadas ao Portal oficial.

Quando já existentes, deverão ser:

- inventariadas;
- isoladas;
- analisadas;
- substituídas quando necessário;
- preservadas apenas como evidência histórica, se legítimo.

---

## 36. Atribuição

Toda obrigação de atribuição deverá ser:

- identificada;
- documentada;
- preservada;
- publicada quando exigida;
- vinculada à dependência correspondente.

---

## 37. Dependências gratuitas

A gratuidade não elimina a necessidade de análise.

Dependências gratuitas deverão ser avaliadas quanto a:

- condições de uso;
- coleta de dados;
- continuidade;
- limites;
- publicidade;
- alterações futuras;
- possibilidade de suspensão;
- dependência institucional.

---

## 38. Dependências pagas

Toda dependência paga deverá possuir:

- finalidade;
- responsável;
- custo;
- periodicidade;
- fonte de pagamento;
- data de renovação;
- possibilidade de cancelamento;
- plano de substituição;
- preservação dos registros contratuais.

---

## 39. Dependências humanas

São dependências humanas:

- administradores;
- desenvolvedores;
- curadores;
- responsáveis por domínios;
- responsáveis por credenciais;
- revisores;
- operadores;
- responsáveis por publicação;
- responsáveis por preservação.

Nenhuma função crítica deverá depender exclusivamente de uma única pessoa sem documentação e sucessão.

---

## 40. Sucessão de responsabilidades

Toda responsabilidade crítica deverá possuir:

- titular;
- substituto;
- documentação;
- acesso institucional;
- procedimento de transferência;
- registro de transição;
- revogação dos acessos anteriores quando aplicável.

---

## 41. Dependências documentais

São dependências documentais:

- políticas;
- contratos;
- inventários;
- esquemas;
- manuais;
- procedimentos;
- relatórios;
- pareceres;
- registros de certificação;
- documentos constitucionais.

---

## 42. Dependências de dados

Toda dependência de dados deverá possuir:

- fonte oficial;
- origem;
- formato;
- responsável;
- periodicidade;
- validação;
- classificação;
- política de retenção;
- mecanismo de recuperação.

---

## 43. Dependências de integração

Toda dependência de integração deverá observar:

- contrato técnico;
- origem;
- destino;
- autenticação;
- autorização;
- versão;
- tratamento de erros;
- contingência;
- monitoramento;
- preservação histórica.

---

## 44. Dependências de infraestrutura

Toda dependência de infraestrutura deverá registrar:

- ambiente;
- fornecedor;
- serviço;
- finalidade;
- configuração;
- responsável;
- criticidade;
- redundância;
- recuperação;
- estratégia de saída.

---

## 45. Dependências de conectividade

A arquitetura deverá considerar:

- disponibilidade regional;
- limitações de banda;
- acesso móvel;
- falhas de conexão;
- custo de dados;
- alternativas offline;
- páginas leves;
- conteúdo estático;
- materiais para impressão e compartilhamento.

---

## 46. Dependências de segurança

São dependências de segurança:

- certificados;
- autenticação;
- controle de acesso;
- registros de auditoria;
- monitoramento;
- ferramentas de análise;
- mecanismos de cópia;
- serviços de proteção.

---

## 47. Credenciais

Credenciais não deverão ser tratadas como dependências comuns.

Toda credencial deverá:

- permanecer protegida;
- possuir responsável;
- ser revogável;
- possuir validade;
- ser rotacionada;
- permanecer fora do código público;
- constar em inventário seguro.

---

## 48. Criticidade

A criticidade será classificada como:

| Nível | Definição |
|---|---|
| Máxima | Falha compromete memória, segurança ou operação essencial |
| Alta | Falha produz impacto operacional relevante |
| Média | Falha afeta função substituível |
| Baixa | Falha produz impacto limitado |
| Experimental | Utilização restrita e controlada |

---

## 49. Avaliação de impacto

A avaliação deverá considerar impactos:

- institucionais;
- culturais;
- históricos;
- documentais;
- técnicos;
- operacionais;
- jurídicos;
- financeiros;
- reputacionais;
- patrimoniais;
- de segurança;
- de privacidade.

---

## 50. Dependência exclusiva

Uma dependência será considerada exclusiva quando não possuir alternativa viável imediata.

Toda dependência exclusiva deverá:

- ser formalmente identificada;
- possuir criticidade elevada;
- possuir plano de redução;
- manter documentação completa;
- possuir estratégia de contingência;
- ser revisada periodicamente.

---

## 51. Aprisionamento tecnológico

Considera-se aprisionamento tecnológico a situação em que a substituição se torna excessivamente difícil por:

- formato proprietário;
- ausência de exportação;
- dependência contratual;
- configuração inacessível;
- dados não portáveis;
- credenciais pessoais;
- falta de documentação;
- integração exclusiva.

---

## 52. Prevenção do aprisionamento

Deverão ser priorizados:

- formatos abertos;
- dados exportáveis;
- documentação própria;
- interfaces padronizadas;
- identificadores estáveis;
- separação entre dados e aplicação;
- cópias institucionais;
- serviços substituíveis.

---

## 53. Estratégia de substituição

Toda dependência relevante deverá possuir estratégia de substituição contendo:

- motivo possível;
- alternativa;
- requisitos;
- riscos;
- dados envolvidos;
- compatibilidade;
- procedimento;
- reversão;
- responsável;
- preservação histórica.

---

## 54. Processo de substituição

```text
DIAGNÓSTICO
     ↓
INVENTÁRIO
     ↓
SELEÇÃO DA ALTERNATIVA
     ↓
TESTES
     ↓
MIGRAÇÃO CONTROLADA
     ↓
VALIDAÇÃO
     ↓
HOMOLOGAÇÃO
     ↓
DESATIVAÇÃO
     ↓
PRESERVAÇÃO HISTÓRICA
```

---

## 55. Contingência

Toda dependência crítica deverá possuir:

- alternativa técnica;
- procedimento manual quando possível;
- cópia dos dados;
- responsável;
- prazo de recuperação;
- critérios de ativação;
- procedimento de retorno;
- registro da ocorrência.

---

## 56. Degradação controlada

Na indisponibilidade de uma dependência, o Portal deverá, sempre que possível:

- permanecer acessível;
- preservar o conteúdo principal;
- impedir perda de dados;
- informar a limitação;
- utilizar alternativa segura;
- evitar falha em cadeia;
- registrar o incidente.

---

## 57. Obsolescência

Uma dependência poderá ser considerada obsoleta quando:

- perder suporte;
- deixar de receber atualizações;
- tornar-se incompatível;
- apresentar riscos permanentes;
- ser substituída por solução superior;
- não atender requisitos de acessibilidade;
- comprometer a preservação histórica.

---

## 58. Gestão da obsolescência

A gestão deverá incluir:

- monitoramento;
- classificação;
- prazo de substituição;
- análise de impacto;
- preservação da versão anterior;
- migração;
- validação;
- encerramento documentado.

---

## 59. Descontinuidade externa

Quando terceiro anunciar descontinuidade, deverá ocorrer:

1. registro do anúncio;

2. avaliação do impacto;

3. inventário dos dados;

4. exportação;

5. seleção de alternativa;

6. planejamento da migração;

7. preservação das evidências;

8. encerramento controlado.

---

## 60. Remoção de dependências

Nenhuma dependência deverá ser removida sem:

- justificativa;
- análise de impacto;
- identificação de consumidores;
- testes;
- preservação de evidências;
- atualização documental;
- validação;
- registro da remoção.

---

## 61. Dependências não utilizadas

Dependências sem utilização deverão ser:

- identificadas;
- confirmadas;
- classificadas;
- removidas de forma controlada;
- preservadas quando possuírem valor histórico;
- retiradas do inventário ativo;
- registradas no histórico.

---

## 62. Dependências duplicadas

Dependências duplicadas deverão ser avaliadas quanto a:

- finalidade;
- versão;
- origem;
- compatibilidade;
- risco;
- possibilidade de consolidação;
- impacto sobre a edição fundadora.

---

## 63. Atualização automática

Atualizações automáticas somente poderão ser utilizadas quando:

- o risco for aceitável;
- houver controle de versão;
- existirem testes;
- existir reversão;
- houver monitoramento;
- não houver impacto silencioso sobre a produção.

Dependências críticas não deverão sofrer atualização automática irrestrita.

---

## 64. Validação

Toda alteração de dependência deverá passar por:

- validação estrutural;
- validação funcional;
- validação de segurança;
- validação de dados;
- validação de acessibilidade;
- validação de integração;
- validação histórica;
- aprovação institucional proporcional ao risco.

---

## 65. Homologação

A homologação deverá confirmar:

- funcionamento;
- compatibilidade;
- estabilidade;
- ausência de regressão;
- integridade dos dados;
- segurança;
- reversibilidade;
- preservação da edição fundadora.

---

## 66. Monitoramento

O monitoramento deverá abranger:

- disponibilidade;
- novas versões;
- vulnerabilidades;
- alterações de licença;
- descontinuidade;
- falhas;
- desempenho;
- incompatibilidades;
- dependência excessiva;
- custo;
- obsolescência.

---

## 67. Auditoria

A auditoria deverá verificar:

- inventário;
- versões;
- licenças;
- responsáveis;
- vulnerabilidades;
- criticidade;
- contingência;
- documentação;
- rastreabilidade;
- preservação histórica.

---

## 68. Evidências mínimas

Deverão ser preservados:

- inventários;
- relatórios;
- versões;
- licenças;
- avisos de segurança;
- testes;
- aprovações;
- registros de implantação;
- registros de falhas;
- decisões de substituição;
- registros de descontinuidade;
- relatórios de encerramento.

---

## 69. Rastreabilidade

A rastreabilidade deverá permitir responder:

- qual dependência foi utilizada;
- por qual motivo;
- em qual versão;
- por quem foi aprovada;
- quando foi incorporada;
- onde foi utilizada;
- quais atualizações recebeu;
- quais incidentes produziu;
- quando foi substituída;
- onde estão os registros históricos.

---

## 70. Proteção da edição fundadora

As dependências relacionadas à FESTANÇA 2026 deverão permanecer:

- inventariadas;
- identificadas;
- documentadas;
- versionadas;
- contextualizadas;
- auditáveis;
- recuperáveis;
- preservadas como parte da arquitetura fundadora.

Nenhuma atualização futura deverá apagar silenciosamente o registro das dependências de 2026.

---

## 71. Preservação de versões históricas

Versões antigas poderão ser preservadas quando possuírem:

- valor histórico;
- valor documental;
- valor técnico;
- relação com publicação oficial;
- relação com incidente;
- relação com a edição fundadora;
- importância para recuperação.

---

## 72. Repositório de preservação

As evidências poderão ser organizadas em:

```text
archives/
└── dependencies/
    ├── inventories/
    ├── licenses/
    ├── manifests/
    ├── reports/
    ├── security-advisories/
    ├── historical-versions/
    └── retirement-records/
```

---

## 73. Manifestos de dependências

Quando tecnicamente aplicável, deverão ser utilizados manifestos contendo:

- nomes;
- versões;
- origem;
- integridade;
- ambiente;
- finalidade;
- dependências transitivas.

---

## 74. Dependências transitivas

Dependências transitivas são aquelas incorporadas por outras dependências.

Elas deverão ser consideradas nas avaliações de:

- segurança;
- licença;
- compatibilidade;
- obsolescência;
- continuidade;
- vulnerabilidade;
- impacto de atualização.

---

## 75. Árvore de dependências

Toda dependência crítica deverá permitir a identificação de sua árvore:

```text
COMPONENTE PRINCIPAL
        │
        ├── Dependência direta
        │      ├── Dependência transitiva
        │      └── Dependência transitiva
        │
        └── Dependência direta
               └── Dependência transitiva
```

---

## 76. Dependências circulares

Dependências circulares deverão ser evitadas.

Quando existentes, deverão ser:

- identificadas;
- documentadas;
- avaliadas;
- reduzidas;
- removidas progressivamente;
- monitoradas quanto ao impacto.

---

## 77. Baixo acoplamento

A gestão deverá favorecer:

- interfaces claras;
- componentes substituíveis;
- contratos estáveis;
- separação de responsabilidades;
- redução de dependências cruzadas;
- autonomia entre edições.

---

## 78. Alta coesão

Cada componente deverá depender apenas do necessário à sua finalidade.

Dependências não relacionadas deverão ser removidas ou separadas.

---

## 79. Dependências de inteligência artificial

Toda dependência de inteligência artificial deverá possuir:

- finalidade legítima;
- supervisão humana;
- identificação do serviço;
- classificação de risco;
- proteção dos dados;
- registro das saídas relevantes;
- possibilidade de desligamento;
- preservação da soberania cultural.

---

## 80. Limites da inteligência artificial

Nenhuma dependência de inteligência artificial poderá:

- assumir autoridade cultural;
- alterar registros históricos autonomamente;
- publicar conteúdo crítico sem validação;
- excluir evidências;
- substituir curadoria humana obrigatória;
- utilizar dados para finalidade não autorizada;
- prevalecer sobre a memória institucional.

---

## 81. Dependências de terceiros

Toda dependência fornecida por terceiro deverá observar:

- contrato;
- finalidade;
- responsabilidade;
- segurança;
- privacidade;
- propriedade intelectual;
- acesso;
- continuidade;
- encerramento;
- preservação dos registros.

---

## 82. Alterações de contrato

Mudanças relevantes em termos, licenças ou contratos deverão ser:

- identificadas;
- registradas;
- avaliadas;
- comunicadas;
- aprovadas;
- tratadas antes da continuidade do uso.

---

## 83. Cadeia de responsabilidade

```text
AUTORIDADE INSTITUCIONAL
          ↓
GOVERNANÇA RESPONSÁVEL
          ↓
CURADORIA CULTURAL
          ↓
CURADORIA EDITORIAL
          ↓
CURADORIA TÉCNICA
          ↓
SEGURANÇA E CONFORMIDADE
          ↓
IMPLEMENTAÇÃO AUTORIZADA
          ↓
AUDITORIA E PRESERVAÇÃO
```

---

## 84. Matriz mínima de responsabilidade

| Atividade | Responsabilidade principal |
|---|---|
| Proposição | Área interessada |
| Inventário | Curadoria técnica |
| Avaliação cultural | Curadoria cultural |
| Avaliação editorial | Curadoria editorial |
| Avaliação técnica | Curadoria técnica |
| Avaliação de segurança | Segurança e auditoria |
| Avaliação de licença | Governança e apoio jurídico |
| Aprovação | Autoridade competente |
| Implementação | Responsável autorizado |
| Monitoramento | Operação técnica |
| Auditoria | Auditoria e preservação |
| Encerramento | Governança responsável |

---

## 85. Processo de adoção

```text
PROPOSTA
   ↓
IDENTIFICAÇÃO
   ↓
ANÁLISE DE NECESSIDADE
   ↓
AVALIAÇÃO DE RISCO
   ↓
AVALIAÇÃO DE LICENÇA
   ↓
TESTES
   ↓
APROVAÇÃO
   ↓
IMPLEMENTAÇÃO
   ↓
VALIDAÇÃO
   ↓
INVENTÁRIO
   ↓
MONITORAMENTO
```

---

## 86. Processo de atualização

```text
DETECÇÃO DE NOVA VERSÃO
          ↓
ANÁLISE DE ALTERAÇÕES
          ↓
AVALIAÇÃO DE IMPACTO
          ↓
TESTES
          ↓
APROVAÇÃO
          ↓
ATUALIZAÇÃO
          ↓
VALIDAÇÃO
          ↓
MONITORAMENTO
          ↓
REGISTRO HISTÓRICO
```

---

## 87. Processo de encerramento

```text
JUSTIFICATIVA
     ↓
INVENTÁRIO
     ↓
PRESERVAÇÃO
     ↓
SUBSTITUIÇÃO
     ↓
VALIDAÇÃO
     ↓
REMOÇÃO
     ↓
ATUALIZAÇÃO DOCUMENTAL
     ↓
CERTIFICAÇÃO DO ENCERRAMENTO
```

---

## 88. Indicadores mínimos

Deverão ser monitorados:

- número total de dependências;
- dependências críticas;
- dependências externas;
- dependências sem responsável;
- dependências sem licença;
- dependências vulneráveis;
- dependências obsoletas;
- dependências sem contingência;
- dependências exclusivas;
- atualizações pendentes;
- falhas associadas;
- tempo de substituição.

---

## 89. Lista mínima de verificação

Antes da adoção ou atualização, deverá ser confirmado:

- [ ] finalidade definida;
- [ ] necessidade comprovada;
- [ ] origem identificada;
- [ ] responsável identificado;
- [ ] categoria definida;
- [ ] criticidade definida;
- [ ] versão registrada;
- [ ] licença verificada;
- [ ] segurança avaliada;
- [ ] privacidade avaliada;
- [ ] compatibilidade testada;
- [ ] dependências transitivas analisadas;
- [ ] estratégia de substituição registrada;
- [ ] contingência definida, quando necessária;
- [ ] preservação histórica prevista;
- [ ] aprovação registrada;
- [ ] inventário atualizado.

---

## 90. Não conformidades

Serão consideradas não conformidades:

- dependência não inventariada;
- versão desconhecida;
- licença não identificada;
- vulnerabilidade não tratada;
- dependência crítica sem contingência;
- atualização não autorizada;
- remoção sem registro;
- uso de versão obsoleta sem justificativa;
- credencial incorporada ao código;
- serviço externo sem estratégia de saída;
- dependência exclusiva não declarada;
- apagamento de evidências históricas.

---

## 91. Tratamento das não conformidades

Toda não conformidade deverá ser:

1. identificada;

2. registrada;

3. classificada;

4. contida;

5. comunicada;

6. corrigida;

7. validada;

8. auditada;

9. preservada como evidência institucional.

---

## 92. Critérios mínimos de aprovação

Uma dependência somente poderá ser aprovada quando apresentar:

- finalidade legítima;
- necessidade comprovada;
- documentação suficiente;
- licença compatível;
- risco aceitável;
- segurança proporcional;
- compatibilidade arquitetural;
- rastreabilidade;
- possibilidade de substituição;
- proteção da edição fundadora;
- preservação da continuidade histórica.

---

## 93. Declaração constitucional

Este documento declara que:

1. nenhuma dependência será incorporada sem finalidade;

2. nenhuma versão será alterada silenciosamente;

3. nenhuma licença será ignorada;

4. nenhuma vulnerabilidade crítica será tratada como conveniência;

5. nenhuma dependência externa será considerada infalível;

6. nenhuma plataforma será considerada insubstituível;

7. nenhuma credencial será registrada em código público;

8. nenhuma atualização apagará a versão anterior relevante;

9. nenhuma descontinuidade ocorrerá sem preservação;

10. nenhuma futura edição apagará as dependências da edição fundadora;

11. toda dependência deverá ser identificável, verificável e auditável;

12. toda evolução deverá preservar a continuidade histórica.

---

## 94. Princípio maior

**IDENTIFICAR ANTES DE UTILIZAR.**

**CLASSIFICAR ANTES DE INCORPORAR.**

**VERIFICAR ANTES DE CONFIAR.**

**LICENCIAR ANTES DE PUBLICAR.**

**TESTAR ANTES DE ATUALIZAR.**

**COPIAR ANTES DE SUBSTITUIR.**

**PLANEJAR ANTES DE DESCONTINUAR.**

**PRESERVAR ANTES DE REMOVER.**

**EVOLUIR SEM ROMPER A MEMÓRIA.**

---

## 95. Compromisso permanente

Toda gestão de dependências deverá proteger simultaneamente:

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
- os documentos;
- os dados;
- os registros;
- as imagens;
- as vozes;
- os sistemas;
- os serviços;
- as integrações;
- as credenciais;
- a governança;
- a edição fundadora;
- as futuras edições;
- a continuidade;
- o patrimônio;
- o futuro.

---

## 96. Referências institucionais essenciais

Este documento deverá ser interpretado em conjunto com:

- `docs/festanca/portal-architecture.md`;
- `docs/festanca/edition-schema.md`;
- `docs/festanca/publication-workflow.md`;
- `docs/festanca/architecture/architecture-principles.md`;
- `docs/festanca/architecture/repository-structure.md`;
- `docs/festanca/architecture/component-architecture.md`;
- `docs/festanca/architecture/integration-architecture.md`;
- `docs/festanca/architecture/infrastructure-architecture.md`;
- `docs/festanca/governance/change-control-policy.md`;
- `docs/festanca/governance/audit-and-compliance-policy.md`;
- `docs/festanca/governance/information-security-and-cybersecurity-policy.md`;
- `docs/festanca/governance/risk-management-and-resilience-policy.md`;
- `docs/festanca/governance/business-continuity-policy.md`;
- `docs/festanca/governance/digital-preservation-policy.md`;
- `docs/festanca/governance/intellectual-property-and-licensing-policy.md`;
- `docs/festanca/governance/third-party-and-partnerships-policy.md`;
- `docs/festanca/governance/artificial-intelligence-and-automation-policy.md`;
- `docs/festanca/governance/technology-architecture-and-interoperability-policy.md`.

---

## 97. Estado inicial deste documento

```text
DOCUMENTO: dependency-management.md
FUNÇÃO: Gestão constitucional de dependências
REGIME: Permanente
EDIÇÃO FUNDADORA: FESTANÇA 2026
CRITICIDADE: Máxima
MUTABILIDADE: Estritamente controlada
PRESERVAÇÃO: Integral
VERSIONAMENTO: Obrigatório
RASTREABILIDADE: Permanente
APLICABILIDADE: Portal Permanente e edições anuais
```

---

## 98. Vigência

Este documento entra em vigor a partir de sua aprovação e publicação no repositório oficial.

Sua vigência será permanente.

Toda revisão deverá:

- preservar as versões anteriores;
- registrar justificativas;
- identificar responsáveis;
- apresentar análise de impacto;
- manter compatibilidade histórica;
- proteger a edição fundadora;
- preservar o inventário das dependências;
- respeitar a Constituição de Governança.

---

## 99. Encerramento institucional

Seguimos juntos, passo a passo.

Com método.

Com segurança.

Com preservação integral da edição fundadora.

**SOMOS TODOS, AVANÇO.**

Ao encontro do futuro.

**AMÉM.**
