# Política Constitucional de Governança e Preservação de Backups

## Portal Permanente da FESTANÇA

Versão: 1.0.0

Status: oficial

Classificação: permanente

---

## 1. Finalidade

Este documento estabelece as normas permanentes de criação, catalogação, armazenamento, validação, preservação, auditoria e recuperação dos arquivos de backup relacionados ao ecossistema digital da FESTANÇA.

---

## 2. Princípios fundamentais

São princípios fundamentais desta política:

- autenticidade;
- integridade;
- rastreabilidade;
- reversibilidade;
- auditabilidade;
- preservação histórica;
- continuidade institucional;
- transparência documental.

---

## 3. Objetivos

Esta política possui os seguintes objetivos:

- impedir perdas acidentais;
- preservar a cronologia das intervenções;
- registrar a evolução histórica do sistema;
- manter evidências técnicas;
- assegurar a recuperação dos arquivos.

---

## 4. Estrutura oficial

```text
docs/festanca/backups/
├── css/
│   ├── historical/
│   └── repair/
│
├── html/
│   └── historical/
│
└── manifests/
```

---

## 5. Classificação dos backups

### 5.1 Histórico

Registra versões estáveis e marcos evolutivos.

Exemplos:

- style.css.D48.bkp
- style.css.D49.bkp
- index.html.D50.bkp
- index.html.D52-20260725-201714.bkp

---

### 5.2 Reparação

Registra procedimentos corretivos.

Exemplos:

- style.css.patch016d4-pre-repair.bak
- style.css.patch016d4.bak

---

### 5.3 Temporário

Arquivos intermediários utilizados apenas durante a execução das atividades.

---

## 6. Cadeia de custódia

Cada artefato deverá conter:

- origem;
- data;
- finalidade;
- autor;
- etapa correspondente;
- hash SHA-256;
- classificação.

---

## 7. Registro de integridade

### CSS — histórico

| Arquivo | Hash |
|----------|------|
| style.css.D48.bkp | 1986...fa5d |
| style.css.D49.bkp | 1986...fa5d |

---

### CSS — reparação

| Arquivo | Hash |
|----------|------|
| style.css.patch016d4-pre-repair.bak | 1986...fa5d |
| style.css.patch016d4.bak | 1986...fa5d |

---

### HTML — histórico

| Arquivo | Hash |
|----------|------|
| index.html.D50.bkp | 4912...a9ed |
| index.html.D52-20260725-201714.bkp | 6be7...d917 |

---

## 8. Política de restauração

A restauração deverá obedecer aos seguintes princípios:

- preservação do original;
- reversibilidade completa;
- validação prévia;
- documentação obrigatória;
- verificação de integridade.

---

## 9. Restrições

Ficam proibidas:

- exclusões não documentadas;
- substituições silenciosas;
- alterações sem registro;
- sobrescritas irreversíveis;
- descarte prematuro.

---

## 10. Preservação da edição fundadora

A edição de 2026 constitui o acervo fundador do Portal Permanente da FESTANÇA e deverá permanecer integralmente preservada.

---

## 11. Declaração permanente

A memória técnica constitui parte inseparável da memória histórica, cultural e institucional da FESTANÇA.

---

## 12. Vigência

Esta política entra em vigor imediatamente após a sua aprovação institucional.

---

Portal Permanente da FESTANÇA

Vila Bela da Santíssima Trindade — Mato Grosso — Brasil
