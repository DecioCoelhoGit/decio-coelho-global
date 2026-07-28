# D53 — Matriz de Destinos e Ordem de Migração

**Projeto:** FESTANÇA 2026  
**Fase:** F2-P2 — Plano Executivo da Migração  
**Documento:** migration-destination-matrix.md  
**Versão:** 1.0.0  
**Status:** Planejamento Executivo  
**Data:** 2026

---

# Objetivo

Este documento estabelece oficialmente a matriz de destinos da migração da Landing Page da FESTANÇA 2026.

Nenhuma movimentação física de arquivos é autorizada por este documento.

Seu objetivo é definir previamente:

- origem;
- destino definitivo;
- dependências;
- prioridade;
- ordem de execução;
- critérios de validação.

Toda movimentação ocorrerá apenas nas fases executivas posteriores.

---

# Princípios

A migração deverá obedecer obrigatoriamente aos seguintes princípios:

1. preservação integral da edição fundadora;
2. nenhuma exclusão de arquivos;
3. nenhuma movimentação sem destino definido;
4. rastreabilidade completa;
5. reversibilidade;
6. validação após cada etapa;
7. documentação permanente.

---

# Classificações Oficiais

Os arquivos poderão possuir uma das seguintes classificações:

- PERMANENTE
- ANUAL
- COMPARTILHADO
- DADOS
- TÉCNICO
- HISTÓRICO
- TEMPORÁRIO
- PENDENTE DE REVISÃO

---

# Estrutura da Matriz

Cada registro deverá conter:

| Campo | Descrição |
|--------|-----------|
| ID | Identificador único |
| Arquivo | Caminho atual |
| Categoria | Classificação oficial |
| Destino Definitivo | Caminho final |
| Dependências | Arquivos relacionados |
| Método | Copiar, Mover, Preservar |
| Ordem | Sequência de execução |
| Prioridade | 1, 2 ou 3 |
| Risco | Alto, Médio ou Baixo |
| Validação | Critério obrigatório |
| Status | Planejado / Executando / Concluído |

---

# Ordem Oficial da Migração

## Bloco 1

Documentação

docs/

---

## Bloco 2

Dados

data/

---

## Bloco 3

JavaScript

js/

---

## Bloco 4

CSS

css/

---

## Bloco 5

HTML

index.html

---

## Bloco 6

Assets

assets/

---

## Bloco 7

Backups

*.bak

patches/

audit/

inventories/

reports/

---

## Bloco 8

Validação Geral

- links
- imports
- imagens
- navegação
- Git
- inventário
- documentação

---

# Critérios de Prioridade

## Prioridade 1

Arquivos indispensáveis para funcionamento da Landing.

## Prioridade 2

Arquivos compartilhados e estruturais.

## Prioridade 3

Arquivos históricos, backups, auditorias e documentação auxiliar.

---

# Critérios de Validação

Cada movimentação deverá confirmar:

- arquivo localizado;
- destino correto;
- links válidos;
- imports válidos;
- imagens carregando;
- Git íntegro;
- documentação atualizada.

---

# Critérios de Risco

## Alto

Interrompe a execução da Landing.

## Médio

Afeta manutenção ou organização.

## Baixo

Afeta apenas documentação auxiliar.

---

# Regras Gerais

É proibido:

- excluir arquivos;
- sobrescrever versões históricas;
- alterar inventários aprovados;
- modificar documentos classificados como permanentes sem nova auditoria.

---

# Dependências

Este documento depende de:

- inventory-classified-2026.md
- publication-inventory.md
- landing-architecture.md
- edition-schema.md
- portal-architecture.md
- publication-workflow.md

---

# Próximas Etapas

Após aprovação desta matriz serão iniciadas:

- D54 — Sequenciamento Executivo da Migração
- D55 — Migração Controlada por Blocos
- D56 — Auditoria Pós-Migração
- D57 — Homologação da Nova Estrutura

---

# Encerramento

Esta matriz representa o plano executivo oficial da migração da Landing Page da FESTANÇA 2026.

Toda execução deverá respeitar rigorosamente este documento, garantindo preservação histórica, rastreabilidade técnica e continuidade arquitetural.

---

**Status:** Documento Constitucional de Planejamento Executivo

**Aprovação:** F2-P2 — D53
