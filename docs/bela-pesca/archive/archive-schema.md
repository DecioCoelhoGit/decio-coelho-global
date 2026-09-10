# BELA PESCA DIGITAL — Archive Schema

**Código:** BP-ARCHIVE
**Domínio:** ARCHIVE
**Versão:** 1.0.0
**Status:** Documento Estrutural Inicial
**Projeto-piloto:** Bela Pesca 2026

---

## 1. Finalidade

ARCHIVE é o domínio responsável pela preservação histórica das edições encerradas do Bela Pesca Digital.

Seu objetivo é garantir que uma edição arquivada permaneça:

- preservada;
- histórica;
- protegida;
- navegável;
- reproduzível;
- auditável.

ARCHIVE não significa eliminação.

---

## 2. Princípio estrutural

ARCHIVE não deverá reconstruir, reinterpretar ou duplicar silenciosamente dados oficiais.

Cada domínio continuará responsável pela verdade canônica que produz.

ARCHIVE preservará o estado historicamente admitido dessa verdade.

Princípio:

> ARCHIVE PRESERVA.
> EDITION REPRESENTA.
> DATA REFERENCIA.
> GOVERNANCE CONTROLA.

---

## 3. Ciclo de vida

Estados mínimos:

    ACTIVE
      |
    CLOSED
      |
    ARCHIVED

Uma edição somente poderá alcançar `ARCHIVED` após permanecer formalmente identificada e encerrada.

O arquivamento não deverá apagar registros anteriores nem alterar retroativamente seu significado.

---


### 3.1. Contrato de transição de estados

Transições permitidas:

    ACTIVE  -> CLOSED
    CLOSED  -> ARCHIVED

Transições não permitidas:

    ACTIVE   -X-> ARCHIVED
    ARCHIVED -X-> CLOSED
    ARCHIVED -X-> ACTIVE

A transição de CLOSED para ARCHIVED somente poderá ocorrer quando:

- a edição estiver inequivocamente identificada;
- o encerramento estiver formalmente registrado;
- os dados históricos admitidos estiverem preservados ou referenciados;
- a proveniência aplicável estiver preservada;
- as evidências aplicáveis estiverem referenciadas;
- o manifesto de arquivamento puder ser constituído.

ARCHIVED será tratado como estado histórico terminal.

Correções posteriores não reabrirão silenciosamente a edição.

Quando necessárias, deverão ocorrer por mecanismo auditável de correção histórica.

---

## 4. Responsabilidades

ARCHIVE poderá preservar referências relativas a:

- programação;
- modalidades;
- inscrições públicas permitidas;
- competições;
- resultados;
- regulamentos;
- patrocinadores;
- parceiros;
- mídia;
- documentos;
- comunicados;
- registros históricos;
- evidências;
- proveniência;
- auditoria.

A existência dessa responsabilidade não transfere para ARCHIVE a autoria dos dados pertencentes aos demais domínios.

---

## 5. Fonte única de verdade

ARCHIVE não deverá manter cópias divergentes dos dados canônicos.

Quando possível, deverá preservar:

- identificadores estáveis;
- versões;
- referências aos contratos originais;
- referências às evidências;
- referências de proveniência;
- informações de validação;
- informações de publicação;
- informações de encerramento;
- informações de arquivamento.

ARCHIVE preserva o estado histórico admitido.

Não cria uma segunda verdade.

---

## 6. Imutabilidade histórica

Uma edição arquivada não deverá ser silenciosamente reescrita.

Correções posteriores deverão preservar, quando aplicável:

- valor anterior;
- novo valor;
- motivo da alteração;
- autoridade responsável;
- data da alteração;
- referência documental;
- trilha de auditoria.

Nenhuma evolução futura do schema deverá destruir a legibilidade histórica das edições anteriores.

Princípio:

> O DADO PODE SER CORRIGIDO.
> A HISTÓRIA DA CORREÇÃO DEVE PERMANECER.

---

## 7. Proveniência

Todo dado relevante preservado pelo ARCHIVE deverá manter origem identificável sempre que aplicável.

A proveniência poderá referenciar:

- fonte oficial;
- documento de origem;
- autoridade responsável;
- data de recebimento;
- data de validação;
- evidência associada;
- identificador ou hash, quando aplicável.

ARCHIVE preservará a proveniência admitida historicamente.

Não substituirá a validação institucional.

---

## 8. Evidências

Evidências originais deverão ser preservadas sem alteração destinada a adequá-las ao modelo de dados.

Poderão compreender:

- fotografias;
- vídeos;
- documentos;
- regulamentos;
- súmulas;
- atas;
- comunicados;
- registros de campo;
- materiais oficiais.

Quando tecnicamente aplicável, a evidência deverá possuir referência de integridade.

Princípio:

> A EVIDÊNCIA É PRESERVADA.
> A INTERPRETAÇÃO PODE EVOLUIR.

---

## 9. Integridade

Artefatos históricos relevantes poderão possuir mecanismo de verificação de integridade.

Exemplo conceitual:

    algorithm: SHA-256
    hash: "<valor>"

A verificação técnica de integridade não substitui:

- validação institucional;
- proveniência;
- autoridade da fonte;
- cadeia de auditoria.

O hash demonstra integridade do artefato verificado, não sua veracidade institucional.

---

## 10. Manifesto de arquivamento

Cada edição que alcançar o estado ARCHIVED deverá possuir manifesto de preservação.

O manifesto deverá registrar, quando aplicável:

- editionId;
- archiveVersion;
- archivedAt;
- archivedBy;
- estado final da edição;
- versões dos contratos preservados;
- referências às evidências;
- referências de proveniência;
- referências de integridade;
- informações de encerramento.

O manifesto não duplicará integralmente os contratos canônicos.

Sua função será identificar o conjunto histórico preservado e permitir sua localização, verificação e navegação.

Princípio:

> O MANIFESTO IDENTIFICA.
> O ARCHIVE PRESERVA.
> A FONTE CANÔNICA PERMANECE REFERENCIADA.

---

## 11. Navegabilidade histórica

ARCHIVE deverá permanecer navegável.

A camada pública poderá permitir consulta histórica por:

- edição;
- ano;
- modalidade;
- competição;
- resultado;
- participante, quando publicável;
- programação;
- mídia;
- documentos;
- comunicados.

Navegabilidade não implica mutabilidade.

Restrições legais, institucionais e de privacidade prevalecerão sobre a disponibilidade pública dos registros.

---
