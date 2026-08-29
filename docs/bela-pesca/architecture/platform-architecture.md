# BELA PESCA DIGITAL
## Arquitetura da Plataforma Permanente

**Código:** BP-F1-P2  
**Arquivo:** `docs/bela-pesca/architecture/platform-architecture.md`  
**Classificação:** Arquitetura / Fundação Permanente  
**Status:** ARQUITETURA OFICIAL  
**Dependência:** BP-F1-P1 — Constituição do BELA PESCA DIGITAL  
**Escopo:** Plataforma permanente, edições, inscrições, competições, módulos e integrações  
**Natureza:** Permanente  
**Versão:** 1.1.0  

---

# 1. PROPÓSITO

Este documento define a arquitetura estrutural do BELA PESCA DIGITAL.

Seu objetivo é transformar os princípios constitucionais estabelecidos no
BP-F1-P1 em uma arquitetura implementável, modular, governável e preparada
para múltiplas edições.

A arquitetura deverá permitir que novas edições sejam criadas
predominantemente pela inclusão de dados, configurações e regras específicas,
sem duplicação estrutural da plataforma.

Princípio central:

    CORE + PLATFORM + EDITION DATA = NOVA EDIÇÃO

E não:

    COPY + MODIFY + COPY + MODIFY

---

# 2. REGRA ARQUITETURAL FUNDAMENTAL

Toda decisão estrutural deverá responder inicialmente:

> ISTO MUDA ENTRE EDIÇÕES?

Se sim:

    DATA / CONFIGURATION

Se não:

    CORE / PLATFORM

Se pertencer exclusivamente a determinado domínio:

    DOMAIN MODULE

Portanto:

> O QUE MUDA VIRA DADO.
> O QUE PERMANECE VIRA NÚCLEO.
> O NÚCLEO GOVERNA AS INSTÂNCIAS.

---

# 3. VISÃO MACRO

A arquitetura do BELA PESCA DIGITAL será organizada em nove domínios
principais:

    CORE
    PLATFORM
    EDITION
    REGISTRATION
    COMPETITION
    ARCHIVE
    TOURISM
    BUSINESS
    DATA

E por camadas transversais:

    GOVERNANCE
    SECURITY
    ACCESSIBILITY
    OBSERVABILITY
    INTEGRATION
    MEDIA
    AI

Representação conceitual:

    +-------------------------------------------------------+
    |                    EXPERIENCE                         |
    | Web / Mobile / PWA / QR / Dashboards / BELA IA      |
    +-------------------------------------------------------+
                              |
                              v
    +-------------------------------------------------------+
    |                     PLATFORM                          |
    +-------------------------------------------------------+
       |          |            |          |         |
       v          v            v          v         v

     EDITION  REGISTRATION  COMPETITION  TOURISM  BUSINESS

                              |
                              v
    +-------------------------------------------------------+
    |                       DATA                            |
    +-------------------------------------------------------+
                              |
                              v
    +-------------------------------------------------------+
    |                       CORE                            |
    | Governance / Contracts / Identity / Provenance      |
    +-------------------------------------------------------+

                              |
                              v
                          ARCHIVE

---

# 4. CAMADA CORE

CORE representa aquilo que deverá permanecer estruturalmente estável entre
as diferentes edições.

Responsabilidades:

- governança;
- proveniência;
- identidade de entidades;
- versionamento;
- contratos estruturais;
- estados;
- validação;
- auditoria;
- publicação;
- autorização;
- políticas;
- eventos internos.

CORE não deverá conter:

- datas específicas da edição;
- programação anual;
- inscrições individuais;
- equipes anuais;
- competidores anuais;
- patrocinadores específicos;
- resultados;
- artes promocionais;
- textos sazonais.

Estrutura conceitual:

    core/
    ├── governance/
    ├── provenance/
    ├── identity/
    ├── validation/
    ├── publication/
    ├── audit/
    ├── permissions/
    ├── versioning/
    └── contracts/

---

# 5. CAMADA PLATFORM

PLATFORM representa as capacidades permanentes oferecidas pela aplicação.

Responsabilidades:

- navegação;
- layout estrutural;
- roteamento;
- edição ativa;
- busca;
- mapas;
- formulários;
- mídia;
- acessibilidade;
- tratamento de erros;
- integração de dados;
- suporte à conectividade limitada;
- componentes reutilizáveis.

Estrutura conceitual:

    platform/
    ├── shell/
    ├── navigation/
    ├── routing/
    ├── search/
    ├── forms/
    ├── maps/
    ├── media/
    ├── accessibility/
    ├── edition-resolution/
    ├── error-handling/
    └── shared-components/

PLATFORM não deverá conter regras específicas das modalidades de competição.

---

# 6. DOMÍNIO EDITION

EDITION representa uma edição específica do Festival.

Exemplo:

    BELA PESCA DIGITAL
        |
        +-- 16ª edição
        +-- 17ª edição
        +-- 18ª edição
        +-- ...

Cada edição deverá possuir identificador estável próprio.

Estrutura conceitual:

    data/
    └── editions/
        ├── 16/
        ├── 17/
        ├── 18/
        └── ...

Uma edição poderá possuir:

    edition.json
    program.json
    locations.json
    modalities.json
    registrations.json
    regulations.json
    partners.json
    media.json
    notices.json

---

# 7. EDIÇÃO ATIVA

A aplicação deverá possuir mecanismo explícito para determinar a edição
corrente.

Exemplo:

    {
      "currentEdition": "16"
    }

Não deverá haver dependência estrutural de condicionais como:

    if edition == 16

A nova edição deverá ser ativada por dados e configuração.

---

# 8. DOMÍNIO REGISTRATION

REGISTRATION será responsável pelos processos de inscrição relacionados às
competições e demais atividades que futuramente utilizem cadastro digital.

A arquitetura deverá estar preparada para que inscrições possam ocorrer
diretamente através do BELA PESCA DIGITAL, quando formalmente autorizado
pela organização.

Responsabilidades possíveis:

- abertura de inscrições;
- encerramento;
- formulário;
- participante;
- equipe;
- responsável legal;
- modalidade;
- categoria;
- documentos;
- declarações;
- consentimentos;
- validação;
- pagamento, quando aplicável;
- protocolo;
- confirmação;
- cancelamento;
- lista de inscritos.

Estrutura conceitual:

    registration/
    ├── forms/
    ├── participants/
    ├── teams/
    ├── guardians/
    ├── documents/
    ├── consent/
    ├── validation/
    ├── confirmation/
    └── protocols/

---

# 9. INSCRIÇÃO DIGITAL

A plataforma deverá ser preparada para suportar:

    VISITANTE
        |
        v
    ESCOLHA DA MODALIDADE
        |
        v
    FORMULÁRIO
        |
        v
    VALIDAÇÃO
        |
        v
    ENVIO
        |
        v
    PROTOCOLO
        |
        v
    ANÁLISE DA ORGANIZAÇÃO
        |
        v
    CONFIRMAÇÃO

O simples envio do formulário não deverá significar homologação automática
da inscrição.

---

# 10. JANELA DE INSCRIÇÃO

A arquitetura não deverá fixar em código a antecedência máxima ou mínima das
inscrições.

Deverá existir configuração própria.

Exemplo conceitual:

    registrationOpensAt
    registrationClosesAt

Isso permitirá que determinada modalidade aceite inscrições até:

- dias antes;
- horas antes;
- véspera;
- outro período definido oficialmente.

A regra pertence à edição e/ou modalidade.

Não ao núcleo.

---

# 11. STATUS DA INSCRIÇÃO

Estados possíveis:

    DRAFT
       |
    SUBMITTED
       |
    UNDER_REVIEW
       |
    APPROVED
       |
    CONFIRMED

Também poderão existir:

    REJECTED
    CANCELLED
    WITHDRAWN
    WAITLISTED

Os estados definitivos serão formalizados no schema correspondente.

---

# 12. MODALIDADES

A arquitetura não poderá pressupor que todas as modalidades do Festival
possuem as mesmas regras.

Cada modalidade deverá ser entidade própria.

Exemplo:

    modality
      id
      name
      type
      location
      ageRules
      teamRules
      boatRequired
      registrationRules
      scoringRules
      regulationReference

Assim, diferenças entre modalidades tornam-se dados e regras configuráveis.

---

# 13. MODALIDADE INFANTIL

A arquitetura deverá suportar modalidade infantil distinta das modalidades
realizadas com embarcações.

Informação preliminar da FASE 0:

    MODALIDADE INFANTIL
    LOCAL: ORLA
    EMBARCAÇÃO: NÃO
    STATUS DA INFORMAÇÃO: EM VALIDAÇÃO OFICIAL

A modalidade infantil deverá possuir capacidade para regras específicas de:

- faixa etária;
- local;
- duração;
- acompanhamento;
- responsável legal;
- segurança;
- inscrição;
- equipamento;
- pontuação;
- premiação;
- autorização de imagem;
- consentimentos aplicáveis.

Nenhuma dessas regras deverá ser presumida antes do recebimento do
regulamento oficial.

---

# 14. RESPONSÁVEL LEGAL

Quando a participação envolver menor de idade, a arquitetura deverá estar
preparada para relacionar:

    PARTICIPANT
        |
        v
    LEGAL GUARDIAN

O sistema deverá poder registrar, conforme necessidade e base jurídica:

- responsável;
- autorização;
- consentimento;
- termos;
- contato;
- situação da autorização.

Os dados efetivamente exigidos serão definidos posteriormente segundo
regulamento oficial, necessidade operacional e legislação aplicável.

---

# 15. MODALIDADE NÃO DEFINE EMBARCAÇÃO

A embarcação não será atributo obrigatório universal de competição.

Regra arquitetural:

    boatRequired = true | false

Isso permite coexistirem modalidades:

    COM EMBARCAÇÃO

e:

    SEM EMBARCAÇÃO

sem criação de sistemas separados.

---

# 16. LOCAL POR MODALIDADE

Cada modalidade poderá possuir seu próprio local.

Exemplo:

    ADULTA
       -> área de competição definida

    INFANTIL
       -> Orla

O local deverá ser referenciado por identificador.

Não apenas armazenado como texto livre.

---

# 17. DOMÍNIO COMPETITION

COMPETITION será domínio específico do BELA PESCA DIGITAL.

Responsabilidades:

- modalidades;
- categorias;
- equipes;
- competidores;
- embarcações quando aplicável;
- capturas;
- medições;
- pontuação;
- penalidades;
- classificação;
- ranking;
- homologação;
- resultados;
- recordes.

Estrutura:

    competition/
    ├── modalities/
    ├── categories/
    ├── teams/
    ├── participants/
    ├── boats/
    ├── catches/
    ├── scoring/
    ├── penalties/
    ├── rankings/
    ├── results/
    └── homologation/

---

# 18. RELAÇÃO REGISTRATION × COMPETITION

REGISTRATION e COMPETITION deverão permanecer desacoplados.

REGISTRATION responde:

> QUEM SOLICITOU PARTICIPAÇÃO?

COMPETITION responde:

> QUEM ESTÁ EFETIVAMENTE COMPETINDO E QUAL SEU RESULTADO?

Fluxo:

    REGISTRATION
        |
    APPROVAL
        |
    COMPETITION ENTRY

Isso permitirá corrigir, rejeitar ou cancelar inscrição sem corromper dados
competitivos.

---

# 19. RESULTADOS

Resultados deverão possuir estados explícitos.

Fluxo recomendado:

    DRAFT
      |
    RECEIVED
      |
    VALIDATED
      |
    PROVISIONAL
      |
    HOMOLOGATED
      |
    OFFICIAL
      |
    ARCHIVED

Nenhum cálculo automático transforma sozinho resultado em oficial.

---

# 20. MOTOR DE PONTUAÇÃO

O cálculo deverá ser separado da homologação.

    INPUT
      |
    SCORING ENGINE
      |
    CALCULATED RESULT
      |
    VALIDATION
      |
    HOMOLOGATION
      |
    OFFICIAL RESULT

Princípio:

> O SISTEMA CALCULA.
> A GOVERNANÇA HOMOLOGA.

As regras de pontuação deverão ser versionáveis.

---

# 21. REGRAS POR MODALIDADE

Cada modalidade poderá possuir regras próprias.

Exemplo:

    scoringRuleId
    regulationId
    modalityId

Assim, o sistema não deverá assumir que a mesma fórmula de pontuação é
universal.

---

# 22. REGULAMENTOS

Cada edição poderá possuir um ou mais regulamentos.

Cada modalidade deverá poder referenciar o regulamento aplicável.

Exemplo:

    modality.regulationId

Versões deverão ser preservadas.

---

# 23. DOMÍNIO ARCHIVE

ARCHIVE preservará edições encerradas.

Responsabilidades:

- programação;
- modalidades;
- inscrições públicas permitidas;
- resultados;
- regulamentos;
- patrocinadores;
- mídia;
- documentos;
- registros históricos.

Estrutura:

    archive/
    ├── 16/
    ├── 17/
    ├── 18/
    └── ...

---

# 24. ARQUIVAMENTO NÃO É APAGAMENTO

Estados:

    ACTIVE
      |
    CLOSED
      |
    ARCHIVED

ARCHIVED significa:

- preservado;
- histórico;
- protegido;
- navegável.

Não significa eliminado.

---

# 25. DOMÍNIO TOURISM

TOURISM conectará o Festival ao território.

Poderá compreender:

- atrativos;
- patrimônio;
- natureza;
- roteiros;
- gastronomia;
- hospedagem;
- guias;
- transporte;
- mapas;
- serviços.

Estrutura:

    tourism/
    ├── attractions/
    ├── routes/
    ├── heritage/
    ├── nature/
    ├── gastronomy/
    ├── lodging/
    ├── guides/
    ├── transport/
    └── maps/

Princípio:

> O VISITANTE NÃO DEVERÁ APENAS ENCONTRAR O FESTIVAL.
> DEVERÁ ENCONTRAR VILA BELA.

---

# 26. DOMÍNIO BUSINESS

BUSINESS será responsável pela camada econômica e institucional.

Poderá compreender:

- patrocinadores;
- apoiadores;
- parceiros;
- expositores;
- comércio;
- prestadores;
- oportunidades.

Tipos deverão ser diferenciados.

Exemplo:

    INSTITUTIONAL_PARTNER
    SPONSOR
    SUPPORTER
    EXHIBITOR
    SERVICE_PROVIDER

---

# 27. DOMÍNIO DATA

DATA funcionará como fonte canônica de informação.

Estrutura conceitual:

    data/
    ├── schemas/
    ├── editions/
    ├── registrations/
    ├── competition/
    ├── tourism/
    ├── business/
    ├── archive/
    └── migrations/

---

# 28. FONTE ÚNICA DE VERDADE

Um mesmo dado oficial não deverá ser mantido manualmente em múltiplas
interfaces.

Exemplo:

    program.json
        |
        +--> home
        +--> programação
        +--> busca
        +--> PWA
        +--> BELA IA

---

# 29. IDS ESTÁVEIS

Entidades deverão possuir identificadores estáveis.

Exemplos:

    edition-16
    modality-kids
    team-001
    participant-001
    location-orla
    program-016-001

Nomes poderão mudar.

IDs deverão permanecer estáveis sempre que possível.

---

# 30. PROVENIÊNCIA

Dados relevantes deverão possuir origem identificável.

Exemplo:

    source: {
      type: "official",
      status: "validated",
      receivedAt: "...",
      documentId: "..."
    }

Informações ainda não oficializadas deverão poder receber:

    status: "pending-validation"

---

# 31. FASE 0 — DESCOBERTA

Antes da implementação operacional da 16ª edição, deverão ser reunidas e
validadas informações oficiais sobre:

- identidade;
- organização;
- datas;
- programação;
- regulamento;
- modalidades;
- categorias;
- inscrições;
- prazos;
- locais;
- patrocinadores;
- apoiadores;
- premiações;
- materiais gráficos;
- responsáveis;
- contatos oficiais.

---

# 32. MATRIZ DE DESCOBERTA

Cada informação da FASE 0 deverá assumir estado.

Estados recomendados:

    UNKNOWN
    REQUESTED
    RECEIVED
    UNDER_VALIDATION
    VALIDATED
    OFFICIAL

Não preencher lacunas com suposição.

---

# 33. INFORMAÇÕES PRELIMINARES ATUAIS

Até a consolidação documental da FASE 0, ficam registrados como elementos
preliminares:

### Inscrições

Existe possibilidade operacional de que as inscrições permaneçam abertas
até a véspera de determinadas competições.

Existe também possibilidade estratégica de realização das inscrições
diretamente através do BELA PESCA DIGITAL.

Status:

    EM VALIDAÇÃO

### Modalidade infantil

Está prevista modalidade infantil.

Características preliminares:

    realização na Orla;
    participação sem embarcações;
    regras específicas próprias.

Status:

    EM VALIDAÇÃO OFICIAL

Essas informações orientam a preparação arquitetural.

Não substituem o regulamento oficial.

---

# 34. PRINCÍPIO DA DESCOBERTA

A arquitetura poderá antecipar capacidade.

Os dados não poderão antecipar fatos.

Portanto:

> PREPARAMOS O SISTEMA PARA O QUE PODE EXISTIR.
> PUBLICAMOS SOMENTE O QUE FOI VALIDADO.

---

# 35. GOVERNANÇA

Fluxo geral:

    SOURCE
      |
    INGESTION
      |
    VALIDATION
      |
    GOVERNANCE
      |
    CANONICAL DATA
      |
    PUBLICATION

---

# 36. SEGURANÇA

A camada SECURITY deverá atuar transversalmente.

Princípios:

- least privilege;
- secure by default;
- validation;
- audit;
- secrets isolation;
- separation of duties.

Perfis futuros poderão incluir:

    PUBLIC
    PARTICIPANT
    GUARDIAN
    EDITOR
    REVIEWER
    COMPETITION_OPERATOR
    APPROVER
    ADMIN

---

# 37. DADOS PESSOAIS

Inscrição digital poderá envolver dados pessoais.

Consequentemente, sua implantação deverá observar:

- finalidade;
- minimização;
- necessidade;
- transparência;
- segurança;
- retenção;
- base legal;
- direitos dos titulares.

Dados de menores exigirão tratamento especialmente cuidadoso.

---

# 38. DADOS PÚBLICOS × DADOS PRIVADOS

O sistema deverá distinguir explicitamente:

    PUBLIC DATA

de:

    PRIVATE DATA

Exemplo:

O nome de uma equipe poderá ser público.

Dados pessoais de contato de seus participantes poderão permanecer privados.

---

# 39. ACESSIBILIDADE

ACCESSIBILITY será requisito transversal.

Aplicável a:

- navegação;
- formulários;
- inscrições;
- mapas;
- rankings;
- resultados;
- regulamentos;
- mídia.

Inscrição digital deverá ser igualmente acessível.

---

# 40. MOBILE FIRST

A plataforma será concebida prioritariamente para smartphones.

Isso é especialmente relevante para:

- inscrições;
- QR Codes;
- consulta de programação;
- mapas;
- resultados;
- alertas;
- turismo.

---

# 41. CONECTIVIDADE LIMITADA

A arquitetura deverá considerar condições móveis reais.

Conteúdos prioritários para cache futuro:

- programação;
- locais;
- regulamento;
- mapas essenciais;
- informações institucionais.

Dados de inscrição exigirão confirmação explícita de envio bem-sucedido.

---

# 42. PROTOCOLO DE INSCRIÇÃO

Toda inscrição efetivamente recebida pela plataforma deverá possuir
identificador ou protocolo inequívoco.

Exemplo conceitual:

    BP16-REG-000001

O protocolo confirma recebimento.

Não necessariamente homologação.

---

# 43. DUPLICIDADE

A arquitetura deverá ser preparada para identificar possíveis inscrições
duplicadas.

A estratégia definitiva dependerá dos campos oficialmente exigidos.

---

# 44. PAGAMENTOS

A arquitetura não deverá presumir que inscrição será gratuita ou paga.

Caso pagamento venha a existir, deverá constituir integração separada.

    REGISTRATION
        |
    PAYMENT ADAPTER
        |
    PAYMENT PROVIDER

Nenhum fornecedor deverá ser incorporado diretamente ao núcleo.

---

# 45. MAPAS

A plataforma deverá relacionar locais estruturados a:

- programação;
- competição;
- modalidade;
- turismo;
- serviços.

A Orla deverá futuramente possuir entidade própria caso confirmada como
local oficial da modalidade infantil.

---

# 46. MEDIA

MEDIA gerenciará:

- imagens;
- vídeos;
- documentos;
- áudios;
- metadados;
- textos alternativos;
- versões.

---

# 47. OBSERVABILIDADE

A plataforma deverá registrar:

- erros;
- falhas de validação;
- falhas de inscrição;
- atualizações;
- disponibilidade;
- performance;
- processos críticos.

Analytics e logs técnicos deverão ser separados.

---

# 48. EXPERIÊNCIA PÚBLICA

Rotas conceituais possíveis:

    /
    /festival
    /programacao
    /inscricoes
    /competicao
    /resultados
    /turismo
    /mapa
    /parceiros
    /arquivo
    /sobre

Rotas definitivas serão estabelecidas posteriormente.

---

# 49. EXPERIÊNCIA DE INSCRIÇÃO

A inscrição deverá evitar formulários desnecessariamente extensos.

Princípio:

> PEDIR SOMENTE O NECESSÁRIO.

A experiência deverá indicar claramente:

- modalidade;
- prazo;
- requisitos;
- documentos;
- status;
- confirmação.

---

# 50. PWA

A arquitetura permanecerá preparada para PWA.

Possíveis capacidades futuras:

- instalação;
- cache;
- informações offline;
- notificações;
- acesso rápido.

Não constitui obrigação do primeiro MVP.

---

# 51. API

A arquitetura deverá permanecer preparada para APIs.

Exemplos futuros:

    GET /api/editions
    GET /api/modalities
    GET /api/program
    GET /api/results

E, com autenticação adequada:

    POST /api/registrations

---

# 52. BELA IA

BELA IA deverá consumir dados governados.

Poderá futuramente responder:

- quando começa determinada modalidade;
- onde será realizada;
- quem pode participar;
- quando termina a inscrição;
- qual o regulamento;
- qual o resultado oficial.

Nunca deverá inventar informações ausentes.

---

# 53. FRONTEIRA COM FESTANÇA DIGITAL

BELA PESCA DIGITAL e FESTANÇA DIGITAL poderão compartilhar padrões realmente
genéricos.

Possíveis componentes:

    governance
    provenance
    edition
    publication
    archive
    accessibility
    media
    validation
    analytics
    error handling

Não deverão compartilhar regras específicas de domínio.

BELA PESCA:

    fishing modalities
    catches
    boats
    scoring
    rankings

FESTANÇA:

    ritos
    festeiros
    Congo
    Rezas Cantadas
    estruturas religiosas e culturais específicas

Princípio:

> COMPARTILHAR O GENÉRICO.
> PRESERVAR O ESPECÍFICO.

---

# 54. PROIBIÇÃO DE ACOPLAMENTO

BELA PESCA DIGITAL não deverá depender diretamente de implementações internas
da FESTANÇA DIGITAL.

Evitar:

    import FestancaEditionService

Preferir futuramente:

    import EditionService

quando e somente quando houver abstração comprovadamente compartilhável.

---

# 55. REGRA DAS DUAS IMPLEMENTAÇÕES

A existência de uma solução na FESTANÇA DIGITAL não a transforma
automaticamente em Shared Core.

Processo recomendado:

    implementação 1
          |
       observar
          |
    implementação 2
          |
       comparar
          |
    padrão comprovado
          |
       extrair

---

# 56. SHARED CORE

Somente componentes verdadeiramente genéricos poderão migrar para futuro:

    event-core/
    ├── edition/
    ├── publication/
    ├── archive/
    ├── governance/
    ├── provenance/
    ├── accessibility/
    └── media/

---

# 57. MOTOR DIGITAL DE EVENTOS

A experiência acumulada poderá originar futuramente um Motor Digital de
Eventos.

Ele deverá emergir dos padrões comprovados.

Não de generalização prematura.

---

# 58. INDEPENDÊNCIA DAS INSTÂNCIAS

FESTANÇA DIGITAL e BELA PESCA DIGITAL deverão possuir ciclos de evolução e
deploy independentes.

Compartilhar arquitetura não significa criar dependência operacional.

---

# 59. CONFIGURAÇÃO

Informações variáveis deverão residir preferencialmente em dados ou
configuração.

Exemplos:

    currentEdition
    registrationPeriod
    modalities
    locations
    dates
    theme
    contacts
    socialLinks
    features

---

# 60. FEATURE FLAGS

Funcionalidades poderão ser ativadas progressivamente.

Exemplo:

    {
      "registration": false,
      "liveRanking": false,
      "pwa": false,
      "aiAssistant": false
    }

Assim, a existência arquitetural da inscrição digital não obriga sua
ativação antes da autorização oficial.

---

# 61. ESTRUTURA DE DIRETÓRIOS

Estrutura conceitual:

    bela-pesca/
    ├── docs/
    │   └── bela-pesca/
    │       ├── constitution/
    │       ├── architecture/
    │       ├── governance/
    │       ├── discovery/
    │       ├── data/
    │       ├── registration/
    │       ├── competition/
    │       ├── experience/
    │       ├── archive/
    │       └── adr/
    │
    ├── src/
    │   ├── core/
    │   ├── platform/
    │   ├── domains/
    │   │   ├── edition/
    │   │   ├── registration/
    │   │   ├── competition/
    │   │   ├── archive/
    │   │   ├── tourism/
    │   │   └── business/
    │   ├── shared/
    │   └── app/
    │
    ├── data/
    │   ├── editions/
    │   ├── registrations/
    │   ├── competition/
    │   ├── tourism/
    │   └── business/
    │
    ├── public/
    │   └── media/
    │
    └── config/

---

# 62. DEPENDÊNCIAS

Fluxo preferencial:

    EXPERIENCE
        |
    PLATFORM
        |
    DOMAINS
        |
    CORE

Dados deverão ser consumidos através de contratos conhecidos.

---

# 63. DEPENDÊNCIAS PROIBIDAS

Evitar:

    CORE -> UI
    CORE -> edition-specific data
    CORE -> Festança-specific modules
    ARCHIVE -> active competition logic
    TOURISM -> scoring
    REGISTRATION -> UI-specific implementation

---

# 64. IMPORTAÇÃO DE DADOS

Fluxo:

    RAW DATA
       |
    IMPORTER
       |
    SCHEMA VALIDATION
       |
    DOMAIN VALIDATION
       |
    GOVERNANCE
       |
    CANONICAL DATA

---

# 65. MIGRAÇÕES

Mudanças estruturais deverão possuir mecanismos de migração quando
necessário.

Exemplo:

    data/migrations/

Dados históricos não deverão ser silenciosamente descartados.

---

# 66. BACKUP

A plataforma deverá prever preservação de:

- código;
- dados;
- documentos;
- mídia;
- configurações;
- registros históricos.

---

# 67. AMBIENTES

A evolução poderá possuir:

    DEVELOPMENT
    STAGING
    PRODUCTION

Inscrições reais deverão ocorrer exclusivamente no ambiente autorizado.

---

# 68. PUBLICAÇÃO CONTROLADA

Fluxo:

    CHANGE
       |
    REVIEW
       |
    VALIDATION
       |
    APPROVAL
       |
    DEPLOY

---

# 69. TESTES

A arquitetura deverá permitir:

- testes unitários;
- schemas;
- integração;
- formulários;
- inscrição;
- competição;
- acessibilidade;
- regressão;
- performance.

---

# 70. FAIL SAFE

Em caso de falha:

- inscrição não deverá aparentar sucesso quando não foi recebida;
- resultado inválido não deverá ser publicado;
- dados oficiais deverão ser preservados;
- falhas deverão ser registradas.

---

# 71. DATA FRESHNESS

Informações dinâmicas poderão exibir:

    Atualizado em:

Isso será especialmente importante para:

- programação;
- inscrições;
- alertas;
- ranking;
- resultados.

---

# 72. INTEGRAÇÕES

Integrações externas deverão utilizar adaptadores.

    DOMAIN
       |
    INTERFACE
       |
    ADAPTER
       |
    EXTERNAL SERVICE

---

# 73. VENDOR INDEPENDENCE

Dados institucionais não deverão ficar aprisionados a fornecedor específico.

A troca de serviço externo deverá ser possível sem destruição do patrimônio
digital.

---

# 74. DESIGN SYSTEM

Separação recomendada:

    EVENT CORE UI
    BELA PESCA BRAND
    EDITION THEME

Marca permanente e tema da edição são conceitos distintos.

---

# 75. ROTEAMENTO HISTÓRICO

Edições antigas deverão permanecer acessíveis.

Exemplo:

    /arquivo/16
    /arquivo/17

A edição atual poderá ocupar as rotas principais.

---

# 76. QR CODES

QR Codes deverão apontar preferencialmente para rotas estáveis.

Exemplo:

    /inscricoes
    /programacao
    /mapa
    /resultados

---

# 77. CLASSIFICAÇÃO DE CONTEÚDO

Conteúdos poderão ser classificados:

    PERMANENT
    EDITION
    LIVE
    HISTORICAL
    EMERGENCY
    PROMOTIONAL

---

# 78. CONTEÚDO EMERGENCIAL

Informações relacionadas a:

- segurança;
- alteração de programação;
- condições meteorológicas;
- interdições;
- emergência;

deverão possuir prioridade sobre conteúdo promocional.

---

# 79. PRIORIDADE DA VERDADE

Em conflito entre:

    ESTÉTICA
       e
    CLAREZA

prevalece clareza.

Em conflito entre:

    VELOCIDADE
       e
    VERACIDADE

prevalece veracidade.

---

# 80. MVP

A primeira implementação poderá evoluir em camadas:

    1. shell
    2. edição
    3. programação
    4. locais
    5. regulamento
    6. modalidades
    7. inscrições
    8. competição
    9. resultados
    10. turismo
    11. parceiros
    12. arquivo

A ordem definitiva dependerá da FASE 0.

---

# 81. CRITÉRIO DE PRONTIDÃO

Um módulo estará arquiteturalmente pronto quando possuir:

- responsabilidade;
- fronteira;
- input;
- output;
- dados;
- estados;
- validação;
- governança;
- erros;
- testes;
- documentação.

---

# 82. CRITÉRIO DE SHARED CORE

Um componente poderá migrar para o núcleo compartilhado quando:

1. existir em múltiplas instâncias;
2. possuir comportamento equivalente;
3. não carregar regra específica;
4. possuir contrato estável;
5. reduzir duplicação real;
6. não criar acoplamento indevido.

---

# 83. MODELO HIPO

Visão estrutural:

    INPUT
      |
    DATA + EVIDENCE
      |
    VALIDATION
      |
    DOMAIN PROCESS
      |
    GOVERNANCE
      |
    PUBLIC OUTPUT
      |
    ARCHIVE

---

# 84. MODELO DE INSCRIÇÃO HIPO

    INPUT

    Dados enviados pelo participante

        |
        v

    PROCESS

    Validação
    + análise
    + governança

        |
        v

    OUTPUT

    Inscrição confirmada
    ou status correspondente

---

# 85. MODELO COGNITIVO

A plataforma deverá suportar:

    OBSERVAR
       |
    ESTRUTURAR
       |
    VALIDAR
       |
    DECIDIR
       |
    PUBLICAR
       |
    MEDIR
       |
    APRENDER
       |
    EVOLUIR

---

# 86. EDIÇÃO COMO INSTÂNCIA

Cada edição deverá ser instanciada.

Não clonada.

    PLATFORM
       |
       +-- edition 16
       +-- edition 17
       +-- edition 18

---

# 87. PRIMEIRO PRINCÍPIO DE DESACOPLAMENTO

O domínio conhece contratos.

Não implementações.

---

# 88. SEGUNDO PRINCÍPIO DE DESACOPLAMENTO

A edição fornece dados.

Não altera a arquitetura.

---

# 89. TERCEIRO PRINCÍPIO DE DESACOPLAMENTO

A interface apresenta estado.

Não inventa estado.

---

# 90. QUARTO PRINCÍPIO DE DESACOPLAMENTO

A automação verifica.

A governança admite.

---

# 91. QUINTO PRINCÍPIO DE DESACOPLAMENTO

O acervo registra o passado.

Não governa o presente.

---

# 92. SEXTO PRINCÍPIO DE DESACOPLAMENTO

Integrações podem mudar.

O núcleo permanece.

---

# 93. REGRA DA INSCRIÇÃO

A inscrição é um processo.

Não apenas um formulário.

Ela possui:

    ABERTURA
    IDENTIFICAÇÃO
    REGRAS
    ENVIO
    PROTOCOLO
    VALIDAÇÃO
    DECISÃO
    CONFIRMAÇÃO
    HISTÓRICO

---

# 94. REGRA DA MODALIDADE

Modalidades não deverão ser implementadas através de páginas independentes
com regras codificadas manualmente.

Preferir:

    MODALITY DEFINITION
          +
    MODALITY RULES
          +
    EDITION DATA

---

# 95. REGRA DO MENOR

Participação infantil deverá receber modelagem própria sempre que houver
obrigações específicas.

Não deverá ser tratada simplesmente como:

    adulto com idade menor

O domínio deverá ser capaz de representar adequadamente particularidades
determinadas pelo regulamento oficial.

---

# 96. ARQUITETURA × DESCOBERTA

A FASE 0 poderá modificar:

- dados;
- configurações;
- campos;
- regras específicas;
- prioridades do MVP.

Ela não deverá obrigar reconstrução do núcleo.

Esse é um dos testes fundamentais desta arquitetura.

---

# 97. MATRIZ DE RESPONSABILIDADES

| Domínio | Permanente | Por edição | Compartilhável |
|---|---|---|---|
| CORE | Sim | Não | Sim |
| PLATFORM | Sim | Parcial | Parcial |
| EDITION | Estrutura | Sim | Estrutura |
| REGISTRATION | Estrutura | Sim | Parcial |
| COMPETITION | Estrutura | Sim | Não com Festança |
| ARCHIVE | Estrutura | Conteúdo | Sim |
| TOURISM | Parcial | Parcial | Potencial |
| BUSINESS | Estrutura | Sim | Potencial |
| DATA | Contratos | Conteúdo | Parcial |
| ACCESSIBILITY | Sim | Não | Sim |
| GOVERNANCE | Sim | Não | Sim |

---

# 98. REGRA DO NÚCLEO

O núcleo não será medido pela quantidade de código compartilhado.

Será medido pela estabilidade dos contratos.

Um núcleo pequeno e correto é melhor que um núcleo grande e acoplado.

---

# 99. RESULTADO DO BP-F1-P2

Este documento estabelece formalmente:

- arquitetura em camadas;
- nove domínios principais;
- separação entre núcleo e edição;
- domínio independente de inscrições;
- domínio independente de competição;
- suporte a modalidades heterogêneas;
- modalidades com ou sem embarcação;
- preparação para modalidade infantil;
- relacionamento com responsável legal;
- governança da inscrição;
- homologação separada de cálculo;
- fonte única de verdade;
- arquivamento permanente;
- interoperabilidade;
- relação desacoplada com FESTANÇA DIGITAL;
- preparação para futuro Shared Core;
- integração da FASE 0 à arquitetura.

---

# 100. PRÓXIMA DEPENDÊNCIA

Antes da implementação do schema definitivo da edição, a FASE 0 deverá
continuar recebendo informações institucionais da 16ª edição.

Documento técnico seguinte previsto:

    BP-F1-P3
    docs/bela-pesca/data/edition-schema.md

Entretanto, seu conteúdo deverá incorporar tudo aquilo que a FASE 0 conseguir
confirmar oficialmente sobre:

- edição;
- período;
- programação;
- modalidades;
- locais;
- inscrições;
- regulamentos;
- responsáveis;
- parceiros.

---

# 101. REGRA DE ESPERA INTELIGENTE

A ausência temporária de informações oficiais não deverá paralisar o projeto.

Enquanto documentos são obtidos:

    ARQUITETURA AVANÇA

Mas:

    DADOS OFICIAIS NÃO SÃO INVENTADOS

Portanto:

> ESTRUTURAMOS ANTES.
> VALIDAMOS QUANDO A EVIDÊNCIA CHEGA.
> PUBLICAMOS DEPOIS DA ADMISSÃO.

---

# 102. DECLARAÇÃO FINAL

O BELA PESCA DIGITAL não será reconstruído a cada edição.

Será instanciado.

Não dependerá de cópias.

Dependerá de contratos.

Não tratará todas as competições como iguais.

As modalidades serão governadas por dados e regras próprias.

Não tratará inscrição como simples formulário.

Inscrição será processo governado.

Não confundirá cálculo com resultado oficial.

Não confundirá informação preliminar com informação oficial.

Não confundirá automação com autoridade.

A plataforma permanece.

As edições se sucedem.

As modalidades evoluem.

O acervo cresce.

O núcleo amadurece.

---

# 103. PRINCÍPIO CONSTITUCIONAL APLICADO

> O EVENTO PASSA.
> A EDIÇÃO É PRESERVADA.
> O DADO PERMANECE.
> O NÚCLEO EVOLUI.

> O QUE MUDA VIRA DADO.
> O QUE PERMANECE VIRA NÚCLEO.
> O NÚCLEO GOVERNA AS INSTÂNCIAS.

---

# 104. PRINCÍPIO SUPERIOR

> UM NÚCLEO.
> MÚLTIPLAS INSTÂNCIAS.
> UMA GOVERNANÇA.

---

# 105. PRINCÍPIO OPERACIONAL

> UM COMANDO.
> UM RESULTADO.
> UMA DECISÃO POR VEZ.

---

**BELA PESCA DIGITAL**  
Vila Bela da Santíssima Trindade — Mato Grosso — Brasil

**O EVENTO PASSA.  
A EDIÇÃO É PRESERVADA.  
O DADO PERMANECE.  
O NÚCLEO EVOLUI.**

**UM NÚCLEO. MÚLTIPLAS INSTÂNCIAS. UMA GOVERNANÇA.**

**UM COMANDO. UM RESULTADO. UMA DECISÃO POR VEZ.**

**SOMOS TODOS, AVANÇO.  
Ao encontro do futuro. 🚀**
