# D55-B — Execução Controlada dos Blocos

**Projeto:** FESTANÇA 2026  
**Fase:** F2-P2 — Plano Executivo da Migração  
**Documento:** migration-block-execution.md  
**Versão:** 1.0.0  
**Status:** Procedimento Executivo Controlado  
**Data:** 2026  

---

# 1. Finalidade

Este documento estabelece o procedimento oficial para executar, conferir, validar e registrar cada bloco da migração da Landing Page da FESTANÇA 2026.

A execução deverá ocorrer em unidades pequenas, independentes, verificáveis e reversíveis.

Nenhum bloco poderá ser considerado concluído apenas porque os comandos foram executados.

A conclusão exige:

- resultado visível;
- conferência;
- teste;
- registro;
- validação;
- aprovação para avançar.

---

# 2. Regra Operacional Central

A execução deverá seguir obrigatoriamente o fluxo:

> PREPARAR → REGISTRAR → COPIAR → CONFERIR → TESTAR → VALIDAR → APROVAR → AVANÇAR

Durante a migração inicial, deverá ser priorizada a cópia controlada.

A movimentação definitiva somente poderá ocorrer após comprovação de equivalência entre a estrutura de origem e a nova estrutura.

---

# 3. Princípios Obrigatórios

Toda execução deverá respeitar:

1. preservação integral da edição fundadora;
2. nenhuma exclusão durante a migração inicial;
3. nenhuma sobrescrita sem backup;
4. execução em blocos pequenos;
5. validação obrigatória após cada bloco;
6. registro de todos os comandos executados;
7. reversibilidade de cada operação;
8. interrupção imediata diante de divergência;
9. commit isolado por bloco aprovado;
10. manutenção temporária da estrutura original.

---

# 4. Estados Oficiais dos Blocos

Cada bloco deverá possuir apenas um dos seguintes estados:

- `NÃO INICIADO`
- `PREPARADO`
- `EM EXECUÇÃO`
- `BLOQUEADO`
- `EXECUTADO`
- `EM VALIDAÇÃO`
- `APROVADO`
- `REVERTIDO`

Um bloco somente poderá receber o estado `APROVADO` após o cumprimento integral de seus critérios de saída.

---

# 5. Condições Antes da Execução

Antes de iniciar qualquer bloco, confirmar:

- [ ] repositório correto;
- [ ] branch correta;
- [ ] inventário oficial disponível;
- [ ] matriz de destinos aprovada;
- [ ] ordem de migração aprovada;
- [ ] checklist disponível;
- [ ] validação executiva autorizada;
- [ ] relatório de execução disponível;
- [ ] backup identificado;
- [ ] ponto de reversão registrado;
- [ ] staging do Git vazio;
- [ ] arquivos do bloco listados;
- [ ] destinos do bloco definidos.

Se qualquer item estiver pendente, o bloco permanecerá `BLOQUEADO`.

---

# 6. Estratégia de Execução

A migração deverá ocorrer inicialmente por cópia:
