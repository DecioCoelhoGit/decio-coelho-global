# Portal Documental Permanente da FESTANÇA

> Núcleo institucional, arquitetural, histórico e normativo do Portal Permanente da FESTANÇA de Vila Bela da Santíssima Trindade — Mato Grosso — Brasil.

---

## 1. Identificação do documento

| Campo | Valor |
|---|---|
| Documento | Portal Documental Permanente da FESTANÇA |
| Caminho oficial | `docs/festanca/README.md` |
| Classificação | Documento constitucional de entrada |
| Domínio | Portal Permanente da FESTANÇA |
| Regime | Permanente |
| Criticidade | Alta |
| Mutabilidade | Controlada |
| Preservação | Integral e versionada |
| Edição fundadora | FESTANÇA 2026 |
| Situação | Fundação documental permanente |
| Versão inicial | `1.0.0` |

---

## 2. Finalidade

O diretório `docs/festanca/` constitui o Portal Documental Principal da Arquitetura Permanente da FESTANÇA.

Sua finalidade é organizar, regulamentar, documentar, certificar e preservar a evolução do Portal, garantindo que as futuras edições anuais sejam criadas sem reconstrução integral da plataforma e sem perda da memória histórica produzida pela edição fundadora de 2026.

---

## 3. Missão do Portal Documental

Este núcleo deverá:

- preservar a memória institucional, cultural e tecnológica;
- distinguir estruturas permanentes de conteúdos anuais;
- orientar futuras edições;
- manter rastreabilidade das decisões;
- proteger os registros da edição fundadora;
- regulamentar publicação, correção e arquivamento;
- certificar a integridade da arquitetura;
- garantir continuidade operacional.

---

## 4. Princípios fundamentais

### 4.1 Preservação integral

Nenhuma evolução estrutural poderá apagar, sobrescrever ou descaracterizar registros históricos consolidados.

### 4.2 Separação arquitetural

O Portal Permanente e as Edições Anuais deverão possuir responsabilidades distintas.

### 4.3 Rastreabilidade

Toda decisão, correção, publicação, migração ou alteração relevante deverá possuir origem, justificativa, data e responsável identificáveis.

### 4.4 Compatibilidade histórica

Novas implementações deverão preservar a leitura e a recuperação das edições anteriores.

### 4.5 Evolução controlada

Alterações estruturais exigem análise de impacto, validação e possibilidade de reversão.

### 4.6 Integridade cultural

A tecnologia deverá preservar e difundir a FESTANÇA sem redefinir seus significados culturais, religiosos ou comunitários.

### 4.7 Segurança documental

Arquivos constitucionais, contratos de dados, registros históricos e certificações deverão possuir versionamento e mecanismos de integridade.

### 4.8 Continuidade institucional

A estrutura deverá permanecer compreensível mesmo com mudanças de equipe, gestão, tecnologia ou edição anual.

---

## 5. A Grande Separação Arquitetural

A arquitetura oficial é formada por dois domínios:

```text
PORTAL PERMANENTE
        +
EDIÇÕES ANUAIS
```

### 5.1 Portal Permanente

Concentra identidade institucional, história, memória, governança, políticas, arquitetura, contratos reutilizáveis, certificações e catálogo das edições.

### 5.2 Edições Anuais

Cada edição anual possui programação, festeiros, grupos tradicionais, locais, mapas, curadoria, notícias, galerias, divulgação, relatórios e manifesto de preservação próprios.

Exemplos:

```text
apps/festanca-2026/
apps/festanca-2027/
apps/festanca-2028/
```

---

## 6. Edição Fundadora

A FESTANÇA 2026 constitui a Edição Fundadora da Arquitetura Digital Permanente.

Diretório oficial:

```text
apps/festanca-2026/
```

Regra de preservação:

```text
A EDIÇÃO FUNDADORA NÃO SERÁ RECONSTRUÍDA,
SOBRESCRITA OU DESCARACTERIZADA.
```

Qualquer migração deverá preservar sua existência, histórico Git, contratos, estrutura original e capacidade de recuperação.

---

## 7. Estrutura documental oficial

```text
docs/festanca/
├── README.md
├── architecture/
├── governance/
├── curation/
├── archive/
├── certification/
├── editions/
└── migration/
```

### 7.1 Arquitetura

Define o Portal Permanente, os limites entre estruturas permanentes e anuais, o núcleo compartilhado, dependências, compatibilidade e ativos reutilizáveis.

### 7.2 Governança

Estabelece autoridades, responsabilidades, níveis de decisão, aprovação de mudanças, preservação e governança de publicação.

### 7.3 Curadoria

Protege a integridade histórica, a identidade cultural, a proveniência, a padronização editorial e os processos de correção.

### 7.4 Arquivo e Memória

Cataloga edições, preserva a memória institucional e conserva registros históricos e manifestos anuais.

### 7.5 Certificação

Armazena pareceres formais sobre arquitetura, contratos de dados, migração, preservação, continuidade e integridade técnica.

### 7.6 Edições

Regulamenta criação, validação, publicação, encerramento e arquivamento das edições anuais.

### 7.7 Migração

Documenta a transformação controlada da edição fundadora em arquitetura permanente.

---

## 8. Documentos constitucionais

Documentos centrais:

```text
docs/festanca/portal-architecture.md
docs/festanca/edition-schema.md
docs/festanca/publication-workflow.md
```

Hierarquia normativa:

```text
DOCUMENTO CONSTITUCIONAL
        ↓
POLÍTICA PERMANENTE
        ↓
PROTOCOLO
        ↓
PLANO
        ↓
CHECKLIST
        ↓
REGISTRO OPERACIONAL
```

---

## 9. Estado atual da arquitetura

```text
EDIÇÃO FUNDADORA: PRESERVADA
ARQUITETURA PERMANENTE: EM CONSOLIDAÇÃO
MIGRAÇÃO ESTRUTURAL: CONTROLADA
DOCUMENTAÇÃO CONSTITUCIONAL: ATIVA
FUTURAS EDIÇÕES: REGULAMENTAÇÃO EM CURSO
```

---

## 10. Artefatos centrais da edição fundadora

```text
apps/festanca-2026/index.html
apps/festanca-2026/css/style.css
apps/festanca-2026/js/script.js
apps/festanca-2026/js/data-loader.js
apps/festanca-2026/js/location-engine.js
apps/festanca-2026/js/curation-engine.js
```

Contratos centrais:

```text
apps/festanca-2026/data/location-schema.json
apps/festanca-2026/data/programacao-2026.json
apps/festanca-2026/data/locais-2026.json
apps/festanca-2026/data/festeiros-2026.json
apps/festanca-2026/data/grupos-tradicionais-2026.json
```

---

## 11. Modelo de relacionamento

```text
docs/festanca/
        │
        ├── regulamenta
        ├── governa
        ├── documenta
        ├── orienta
        ├── certifica
        └── preserva
                │
                ▼
        apps/festanca-2026/
```

---

## 12. Orientação para novos colaboradores

A leitura deverá começar por este `README.md` e seguir para o domínio correspondente:

- arquitetura e desenvolvimento: `architecture/` e `migration/`;
- gestão e decisão: `governance/`;
- conteúdo, história e cultura: `curation/` e `archive/`;
- criação de novas edições: `editions/`;
- auditoria e certificação: `certification/`;
- edição fundadora: `apps/festanca-2026/`.

---

## 13. Regras para novos colaboradores

Antes de alterar um arquivo, deverá ser verificada sua classificação, o documento constitucional aplicável, o histórico Git, suas dependências, o impacto sobre a edição fundadora e a possibilidade de reversão.

É vedado sobrescrever uma edição encerrada, apagar rastros de correção, excluir contratos utilizados, mover arquivos críticos sem matriz de destino ou publicar dados sem origem validada.

---

## 14. Regimes documentais

| Regime | Definição |
|---|---|
| Permanente | Integra duradouramente a arquitetura |
| Anual | Pertence exclusivamente a uma edição |
| Compartilhado | Utilizado por várias edições |
| Operacional | Necessário à execução corrente |
| Transitório | Criado para diagnóstico ou migração |
| Histórico | Preservado como evidência |
| Imutável | Não pode ser alterado após emissão |
| Evolutivo | Pode ser aperfeiçoado sob controle |
| Substituído | Inativo, mas rastreável |
| Descontinuado | Retirado mediante decisão formal |
| Órfão | Sem função comprovada |
| Pendente | Aguarda classificação |

---

## 15. Preservação e versionamento

Todo documento permanente deverá possuir caminho oficial, finalidade, classificação, versão, histórico Git, responsável, datas, estado de aprovação e relação com outros documentos.

Ativos críticos deverão possuir hash, commit de referência, dependências, evidência de recuperabilidade, criticidade e regra de restauração.

---

## 16. Certificações

As certificações serão mantidas em:

```text
docs/festanca/certification/
```

Categorias:

```text
CERTIFICAÇÃO DE ARQUITETURA
CERTIFICAÇÃO DOS CONTRATOS DE DADOS
CERTIFICAÇÃO DE MIGRAÇÃO
CERTIFICAÇÃO DE PRESERVAÇÃO
CERTIFICAÇÃO DE CONTINUIDADE
CERTIFICAÇÃO DE ENCERRAMENTO DE EDIÇÃO
```

---

## 17. Ciclo de vida de uma edição

```text
PLANEJAMENTO
      ↓
ABERTURA
      ↓
RECEBIMENTO
      ↓
CONFERÊNCIA
      ↓
VALIDAÇÃO
      ↓
PUBLICAÇÃO
      ↓
ATUALIZAÇÃO CONTROLADA
      ↓
ENCERRAMENTO
      ↓
CERTIFICAÇÃO
      ↓
ARQUIVAMENTO
```

---

## 18. Imutabilidade das edições encerradas

Após encerramento e certificação:

```text
A EDIÇÃO TORNA-SE HISTÓRICA.
```

Correções posteriores deverão gerar errata, nova versão, justificativa, data, responsável e registro do conteúdo anterior e corrigido.

---

## 19. Compatibilidade com futuras edições

As futuras edições serão criadas por extensão da arquitetura, e não pela destruição das anteriores.

```text
FESTANÇA 2026 — edição fundadora preservada
FESTANÇA 2027 — nova edição baseada no contrato permanente
FESTANÇA 2028 — nova edição compatível com o acervo
FESTANÇA 2029+ — continuidade histórica e tecnológica
```

Mudanças incompatíveis exigirão documentação de migração.

---

## 20. Segurança cultural e privacidade

A publicação deverá respeitar autorização para dados pessoais, proteção de residências privadas, validação de coordenadas, preservação de locais sensíveis, consentimento para imagens, origem das informações e correção de nomes e títulos.

Residências privadas somente deverão possuir localização exata quando houver autorização adequada.

---

## 21. Governança da documentação

```text
PROPOSTA
   ↓
ANÁLISE
   ↓
VALIDAÇÃO
   ↓
APROVAÇÃO
   ↓
VERSIONAMENTO
   ↓
PUBLICAÇÃO
   ↓
REVISÃO CONTROLADA
```

Documentos constitucionais não deverão ser alterados por edição silenciosa.

---

## 22. Histórico de evolução

Marcos fundadores:

- criação da Landing Page da FESTANÇA 2026;
- organização dos contratos JSON;
- implantação dos mecanismos de carregamento;
- estruturação dos locais;
- implantação da curadoria histórica;
- inventário e classificação dos arquivos;
- análise de dependências e criticidade;
- identificação dos pontos únicos de falha;
- validação da recuperabilidade;
- certificação da arquitetura permanente;
- abertura do núcleo `docs/festanca/`.

---

## 23. Situação deste documento

```text
DOCUMENTO: docs/festanca/README.md
FUNÇÃO: Portal Documental Principal
REGIME: Permanente
EDIÇÃO RELACIONADA: FESTANÇA 2026
ESTADO: Documento fundador
PRESERVAÇÃO: Integral
VERSIONAMENTO: Obrigatório
ALTERAÇÃO: Controlada
```

---

## 24. Declaração constitucional

Este documento declara que:

1. a FESTANÇA possui arquitetura documental permanente;
2. a edição de 2026 é a edição fundadora;
3. futuras edições deverão preservar a continuidade histórica;
4. a documentação permanente prevalecerá sobre práticas informais;
5. nenhuma evolução técnica justificará perda de memória;
6. toda edição deverá ser identificável, recuperável e auditável;
7. a tecnologia será instrumento de preservação cultural;
8. o acervo será tratado como patrimônio institucional e histórico.

---

## 25. Princípio maior

```text
PRESERVAR O PASSADO.
ORGANIZAR O PRESENTE.
ESTRUTURAR O FUTURO.
```

A arquitetura permanente deverá evoluir sem romper a memória, as tradições, a identidade e a origem comunitária da FESTANÇA.

---

## 26. Encerramento institucional

Seguimos juntos, passo a passo.

Com método.

Com segurança.

Com preservação integral da edição fundadora.

**SOMOS TODOS, AVANÇO.**

Ao encontro do futuro.

**AMÉM.**
