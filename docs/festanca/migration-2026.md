FESTANÇA DE VILA BELA


Plano Oficial de Migração da Edição 2026


Arquivo: docs/festanca/migration-2026.md
Fase: F1 — Portal Oficial
Etapa: F1-P3 — Migração da Edição Fundadora
Versão: 1.0.0
Status: Documento Constitucional Inicial
Projeto-piloto: Festança 2026
Local: Vila Bela da Santíssima Trindade — Mato Grosso — Brasil



1. Finalidade


Este documento estabelece o plano oficial para migrar a edição fundadora da Festança 2026 da estrutura inicial da Landing Page para a arquitetura permanente do Portal Oficial da Festança de Vila Bela.


A migração deverá:




preservar integralmente o conteúdo validado de 2026;


separar a estrutura permanente dos dados anuais;


transformar 2026 em acervo histórico consultável;


preparar a abertura das edições de 2027 e posteriores;


evitar reconstruções anuais do Portal;


manter rastreabilidade, autoria, fontes e histórico de alterações;


impedir perda, duplicação ou publicação indevida;


permitir reversão segura em caso de falha.





2. Princípio Constitucional


A edição 2026 será tratada como edição fundadora do Portal Oficial.


Nenhum dado validado poderá ser apagado, sobrescrito ou descaracterizado durante a migração.


A regra central será:




MIGRAR SEM APAGAR — VALIDAR ANTES DE PUBLICAR — PRESERVAR ANTES DE ALTERAR.




A migração somente será considerada concluída quando:




o conteúdo de 2026 estiver preservado;


os arquivos estiverem classificados;


os caminhos estiverem normalizados;


os vínculos internos estiverem funcionando;


a edição 2026 estiver acessível como acervo;


a estrutura aceitar uma nova edição sem reconstrução;


houver cópia de segurança e plano de reversão;


a auditoria final estiver registrada.





3. Escopo


A migração abrange:




páginas HTML;


estilos CSS;


scripts JavaScript;


imagens;


ícones;


arquivos sociais;


dados JSON;


programação oficial;


festeiros e autoridades;


locais e referências geográficas;


documentos institucionais;


metadados;


SEO;


acessibilidade;


links externos;


integração com WhatsApp;


registros de validação;


histórico de publicação;


inventário de fontes;


arquivo anual da edição 2026.




Não fazem parte da migração automática:




informações sem fonte;


dados ainda não conferidos;


imagens sem autorização;


endereços privados sem consentimento;


links quebrados;


conteúdos divergentes;


materiais incompatíveis com a edição de 2026;


registros que ofereçam risco jurídico ou institucional.




Esses itens deverão ser encaminhados para revisão manual.



4. Estrutura Atual de Origem


A estrutura inicial considerada para a edição 2026 é:


apps/festanca-2026/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── icons/
│   ├── images/
│   └── social/
└── data/
    ├── README.md
    ├── programacao-2026.json
    ├── festeiros-2026.json
    └── locais-2026.json



Antes da migração, essa estrutura deverá ser inventariada e comparada com os arquivos reais existentes no repositório.



5. Estrutura Permanente de Destino


A arquitetura recomendada para o Portal é:


apps/festanca/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── app.js
│   ├── edition-loader.js
│   └── filters.js
├── assets/
│   ├── permanent/
│   │   ├── icons/
│   │   ├── logos/
│   │   └── interface/
│   └── editions/
│       └── 2026/
│           ├── images/
│           └── social/
├── data/
│   ├── editions.json
│   └── editions/
│       └── 2026/
│           ├── edition.json
│           ├── programacao.json
│           ├── festeiros.json
│           └── locais.json
└── archive/
    └── 2026/
        └── README.md



A estrutura poderá evoluir, desde que preserve os princípios definidos em:




docs/festanca/portal-architecture.md;


docs/festanca/edition-schema.md;


docs/festanca/publication-workflow.md;


docs/festanca/migration-2026.md.





6. Classificação dos Arquivos


Cada arquivo existente deverá receber uma das seguintes classificações:


6.1 Permanente


Arquivo reutilizado por todas as edições.


Exemplos:




estrutura principal do Portal;


navegação;


componentes visuais;


sistema de filtros;


carregador de edições;


acessibilidade;


identidade institucional;


favicon permanente;


regras gerais de SEO.




6.2 Anual


Arquivo exclusivo da edição 2026.


Exemplos:




programação;


festeiros;


autoridades;


locais;


imagens oficiais da edição;


cartazes;


mídia social;


textos específicos de 2026.




6.3 Compartilhado


Arquivo utilizável em mais de uma edição, mas que exige controle de versão.


Exemplos:




imagens históricas;


textos institucionais;


mapas;


biografias;


referências culturais;


documentos de memória.




6.4 Pendente


Arquivo que ainda exige:




conferência;


validação;


autorização;


correção;


identificação da fonte;


definição de destino.




6.5 Descartável


Arquivo técnico temporário sem valor institucional ou histórico.


Mesmo os arquivos descartáveis somente poderão ser removidos após:




registro no inventário;


confirmação de que não são utilizados;


criação de cópia de segurança;


aprovação do responsável técnico.





7. Inventário Obrigatório


Antes de qualquer alteração, deverá ser criado um inventário com, no mínimo:

CampoDescriçãocaminhoAtualCaminho originalnomeArquivoNome do arquivotipoHTML, CSS, JS, JSON, imagem ou documentoclassificaçãoPermanente, anual, compartilhado, pendente ou descartávelediçãoAno relacionadoorigemQuem forneceudataRecebimentoData de recebimentofonteDocumento, pessoa ou instituiçãovalidaçãoSituação da conferênciaautorizaçãoSituação de usodestinoNovo caminhoaçãoCopiar, mover, renomear, corrigir, preservar ou excluirresponsávelResponsável pela açãoobservaçõesRiscos, dependências e justificativas

O inventário será o registro-mestre da migração.



8. Padronização dos Dados de 2026


Os arquivos anuais deverão ser normalizados para o padrão definido no contrato das edições.


8.1 Identificador da edição


{
  "editionId": "festanca-vila-bela-2026",
  "year": 2026,
  "status": "archived",
  "isFoundingEdition": true
}



8.2 Caminhos anuais


Os nomes poderão ser simplificados dentro da pasta anual:


data/editions/2026/programacao.json
data/editions/2026/festeiros.json
data/editions/2026/locais.json



A pasta já identifica o ano. Portanto, não será obrigatório repetir -2026 em todos os arquivos internos.


8.3 Relacionamentos


Os vínculos deverão utilizar identificadores estáveis:




editionId;


activityId;


locationId;


participantId;


sourceId;


organizationId;


mediaId.




Nenhum relacionamento deverá depender apenas de texto livre.



9. Preservação da Programação Oficial


A programação de 2026 deverá:




conservar datas, horários e descrições validadas;


manter a classificação por irmandade;


preservar categorias;


registrar local e locationId;


vincular festeiros e participantes;


identificar a fonte oficial;


manter o status de validação;


registrar correções posteriores sem apagar o valor anterior;


distinguir evento realizado, cancelado, alterado ou não confirmado.




Quando houver correção, o registro deverá manter:


{
  "revision": {
    "changedAt": "AAAA-MM-DD",
    "changedBy": "responsável",
    "reason": "motivo da alteração",
    "previousValue": "valor anterior",
    "newValue": "novo valor"
  }
}




10. Preservação dos Festeiros e Autoridades


O arquivo de festeiros de 2026 deverá conservar:




título ou cargo;


nome completo;


irmandade;


função na edição;


período de atuação;


fonte;


validação;


observações autorizadas.




A grafia validada deverá prevalecer.


Correções de nome não deverão apagar o registro da correção. O histórico deverá indicar:




grafia anterior;


grafia correta;


data da correção;


responsável pela conferência;


fonte utilizada.





11. Preservação dos Locais


O arquivo de locais deverá observar:




nome oficial ou nome de referência;


tipo do local;


natureza pública ou privada;


endereço autorizado;


coordenadas verificadas;


link de rota;


nível de precisão;


fonte;


validação;


restrições de privacidade.




11.1 Residências privadas


O endereço exato de residência privada somente poderá ser publicado quando houver autorização.


Sem autorização, deverá ser utilizado:




nome de referência;


bairro ou região;


ponto de encontro;


consulta por Google Maps;


orientação institucional autorizada.




11.2 Coordenadas


Nenhuma coordenada será considerada oficial sem verificação.



12. Migração das Imagens


Cada imagem deverá possuir:




nome descritivo;


edição correspondente;


origem;


autoria, quando conhecida;


autorização de uso;


texto alternativo;


legenda;


data aproximada;


classificação;


destino;


versão otimizada para web.




Padrão recomendado:


assets/editions/2026/images/
├── programacao/
├── festeiros/
├── grupos-culturais/
├── locais/
├── memoria/
└── institucional/



Imagens sem autorização permanecerão fora da publicação pública.



13. Migração do HTML


O index.html permanente não deverá conter dados anuais fixos que obriguem reconstrução.


O conteúdo anual deverá ser carregado por:




editionId;


arquivo de configuração;


parâmetro de URL;


edição vigente definida em editions.json.




Exemplo:


{
  "currentEdition": 2027,
  "availableEditions": [2026, 2027]
}



A edição 2026 poderá ser acessada por endereço próprio, por exemplo:


/festanca/?edicao=2026



ou:


/festanca/edicoes/2026/



A decisão final deverá respeitar a arquitetura implementada e a compatibilidade com o GitHub Pages.



14. Migração do CSS


O CSS deverá ser dividido conceitualmente entre:




identidade permanente;


componentes;


acessibilidade;


responsividade;


ajustes específicos de edição.




Regras anuais deverão ser evitadas.


Quando indispensáveis, deverão estar claramente identificadas:


[data-edition="2026"] {
  /* ajuste exclusivo da edição fundadora */
}



Nenhum ajuste anual poderá comprometer outras edições.



15. Migração do JavaScript


O JavaScript deverá:




carregar a edição vigente;


permitir consulta às edições arquivadas;


validar existência dos arquivos;


tratar falhas sem quebrar a página;


preservar filtros;


manter links compartilháveis;


informar quando um dado não estiver disponível;


impedir mistura acidental entre edições.




Fluxo mínimo:


LER CONFIGURAÇÃO
→ IDENTIFICAR EDIÇÃO
→ CARREGAR METADADOS
→ CARREGAR DADOS
→ VALIDAR RELACIONAMENTOS
→ RENDERIZAR
→ REGISTRAR FALHAS




16. Compatibilidade de Links


Durante a migração, todos os links existentes deverão ser testados.


Devem ser verificados:




navegação interna;


âncoras;


imagens;


scripts;


folhas de estilo;


arquivos JSON;


Google Maps;


WhatsApp;


redes sociais;


documentos;


páginas compartilhadas.




Quando um caminho antigo deixar de existir, deverá ser criado:




redirecionamento, quando tecnicamente possível;


compatibilidade temporária;


aviso de mudança;


registro da alteração.




Nenhum link importante deverá desaparecer silenciosamente.



17. Cópia de Segurança


Antes da migração deverá existir uma cópia integral da edição 2026.


Padrão recomendado:


backups/festanca/2026/pre-migration/



A cópia deverá conter:




todos os arquivos;


estrutura original;


data;


referência do commit;


responsável;


checksum, quando possível;


observações.




Também deverá ser criada uma tag de controle no Git:


festanca-2026-pre-migration




18. Estratégia de Migração


A migração será executada em etapas.


Etapa 1 — Congelamento controlado




suspender alterações não essenciais;


registrar o último estado válido;


identificar pendências;


criar backup;


criar tag de segurança.




Etapa 2 — Inventário




listar arquivos;


classificar;


localizar dependências;


identificar duplicidades;


registrar fontes e autorizações.




Etapa 3 — Criação da nova estrutura




criar pastas permanentes;


criar pasta da edição 2026;


criar configuração das edições;


preparar carregador dinâmico.




Etapa 4 — Migração dos dados




copiar JSON;


normalizar campos;


corrigir relacionamentos;


validar identificadores;


preservar histórico.




Etapa 5 — Migração das mídias




copiar imagens autorizadas;


renomear;


otimizar;


adicionar texto alternativo;


atualizar caminhos.




Etapa 6 — Migração da interface




separar conteúdo fixo e anual;


adaptar HTML;


adaptar CSS;


adaptar JavaScript;


preservar responsividade.




Etapa 7 — Testes




testar desktop;


testar celular;


testar diferentes larguras;


testar filtros;


testar links;


testar edição 2026;


simular edição 2027;


testar ausência de dados;


testar reversão.




Etapa 8 — Publicação controlada




publicar em ambiente de teste;


validar institucionalmente;


corrigir pendências;


publicar em produção;


registrar commit e data.




Etapa 9 — Arquivamento




marcar 2026 como edição arquivada e consultável;


manter arquivos de origem;


registrar relatório final;


liberar abertura de 2027.





19. Teste de Equivalência


A nova estrutura deverá apresentar o mesmo conteúdo público válido da versão anterior.


A equivalência deverá verificar:




títulos;


textos;


programação;


nomes;


datas;


horários;


locais;


imagens;


filtros;


contatos;


links;


acessibilidade;


responsividade;


metadados.




Diferenças somente serão aceitas quando forem:




correções validadas;


melhorias técnicas;


ajustes de acessibilidade;


reorganizações sem perda de conteúdo;


alterações aprovadas e documentadas.





20. Simulação da Edição 2027


Antes de encerrar a migração, deverá ser criada uma edição fictícia de teste, sem publicação oficial.


Exemplo:


data/editions/2027-test/



A simulação deverá confirmar que é possível:




criar nova edição;


definir novos festeiros;


inserir nova programação;


cadastrar novos locais;


adicionar novas imagens;


escolher a edição vigente;


manter 2026 consultável;


evitar mistura entre anos.




Após o teste, os dados fictícios deverão ser removidos ou mantidos exclusivamente em ambiente de desenvolvimento.



21. Plano de Reversão


Se ocorrer falha grave, a migração deverá ser revertida.


Constituem falhas graves:




perda de conteúdo;


quebra generalizada da página;


mistura entre edições;


exposição de endereço privado;


publicação de informação não validada;


desaparecimento da programação;


quebra dos filtros;


perda de imagens oficiais;


falha de acessibilidade crítica;


incompatibilidade relevante com celular.




Procedimento de reversão:




interromper a publicação;


registrar a falha;


restaurar a tag anterior;


validar a versão restaurada;


comunicar os responsáveis;


corrigir a migração em ambiente separado;


repetir os testes antes de nova publicação.





22. Critérios de Aprovação


A migração somente será aprovada quando todos os itens críticos estiverem concluídos.


Obrigatórios




 Backup criado


 Tag de segurança criada


 Inventário concluído


 Arquivos classificados


 Dados de 2026 preservados


 Fontes registradas


 Autorizações verificadas


 Caminhos atualizados


 Links testados


 Filtros funcionando


 Responsividade validada


 Acessibilidade validada


 Privacidade validada


 Edição 2026 consultável


 Simulação de 2027 aprovada


 Plano de reversão testado


 Auditoria registrada


 Aprovação institucional registrada





23. Registro da Auditoria


A auditoria final deverá responder:




quem executou;


quem conferiu;


quem validou;


quem aprovou;


quando começou;


quando terminou;


qual commit iniciou;


qual commit concluiu;


quais arquivos foram movidos;


quais arquivos foram renomeados;


quais conteúdos foram corrigidos;


quais pendências permaneceram;


quais riscos foram identificados;


qual versão foi publicada;


onde está o backup;


como reverter.





24. Relatório Final de Migração


Ao concluir, deverá ser criado:


docs/festanca/migration-2026-report.md



O relatório deverá conter:




resumo executivo;


estrutura anterior;


estrutura final;


arquivos migrados;


arquivos preservados;


arquivos pendentes;


correções realizadas;


testes executados;


falhas encontradas;


soluções aplicadas;


resultado da simulação de 2027;


aprovação final;


data de encerramento.





25. Estado Final da Edição 2026


Após a migração, a edição 2026 deverá permanecer:




pública, quando autorizada;


consultável;


identificada como edição fundadora;


preservada;


rastreável;


versionada;


separada das edições posteriores;


protegida contra sobrescrita;


disponível para pesquisa histórica;


integrada ao Portal permanente.




Seu status recomendado será:


{
  "year": 2026,
  "status": "archived",
  "visibility": "public",
  "isFoundingEdition": true,
  "isCurrentEdition": false
}




26. Abertura da Edição 2027


A edição 2027 somente deverá ser aberta após a aprovação da migração de 2026.


A abertura deverá ocorrer por criação de novos arquivos anuais, sem alteração estrutural do Portal:


data/editions/2027/
assets/editions/2027/



A nova edição deverá herdar:




esquema de dados;


fluxo de publicação;


regras de validação;


política de localização;


critérios de acessibilidade;


rastreabilidade;


preservação histórica.




Não deverá herdar automaticamente:




nomes;


cargos;


programação;


datas;


locais privados;


imagens;


autorizações;


links anuais;


informações específicas de 2026.





27. Indicadores da Migração


Poderão ser acompanhados:




total de arquivos inventariados;


total de arquivos migrados;


total de arquivos preservados;


total de arquivos pendentes;


total de links testados;


total de links corrigidos;


total de imagens autorizadas;


total de imagens pendentes;


total de registros validados;


total de registros corrigidos;


percentual de equivalência;


percentual de conclusão;


número de falhas críticas;


número de reversões;


tempo total da migração.





28. Riscos Principais

RiscoPrevençãoPerda de conteúdoBackup e tag de segurançaMistura entre ediçõesSeparação por ano e editionIdQuebra de caminhosTeste automatizado e manualDuplicidadeInventário e identificadores únicosPublicação indevidaFluxo de aprovaçãoExposição de endereço privadoPolítica de autorizaçãoImagem sem permissãoRegistro de autoria e licençaDados divergentesValidação institucionalFalha no celularTestes responsivosImpossibilidade de voltarPlano de reversão


29. Regra de Imutabilidade Histórica


Após o encerramento e arquivamento, a edição 2026 não deverá ser alterada como se o novo conteúdo sempre tivesse existido.


Toda alteração posterior deverá ser classificada como:




correção factual;


atualização técnica;


complemento documental;


remoção jurídica;


proteção de privacidade;


correção de acessibilidade.




Cada alteração deverá possuir justificativa, data, responsável e histórico.



30. Princípio de Continuidade


A migração não encerra a edição 2026.


Ela transforma 2026 em memória institucional permanente e prepara o Portal para continuar vivo.


A partir de então:


2026 permanece consultável
2027 torna-se edição vigente
2028 entra em planejamento
as demais edições seguem o mesmo contrato



O Portal continuará único.


As edições serão anuais.


A memória será permanente.



31. Regra Constitucional da Migração


Nenhum arquivo será movido sem inventário.


Nenhum dado será alterado sem justificativa.


Nenhum conteúdo será publicado sem validação.


Nenhuma imagem será utilizada sem autorização.


Nenhum endereço privado será exposto sem consentimento.


Nenhuma edição será sobrescrita por outra.


Nenhuma migração será encerrada sem backup, teste, auditoria e possibilidade de reversão.



32. Consolidação da Fase F1


Com este documento, a Fase F1 da arquitetura estrutural do Portal passa a possuir quatro fundamentos:




portal-architecture.md — Constituição da arquitetura;


edition-schema.md — Contrato técnico das edições;


publication-workflow.md — Fluxo oficial de publicação;


migration-2026.md — Plano de transição da edição fundadora.




Esses documentos formam a base para que o Portal Oficial da Festança evolua continuamente sem perder sua memória, sua identidade, sua rastreabilidade e sua integridade institucional.



33. Próximo Documento Recomendado


docs/festanca/migration-2026-checklist.md



Esse documento deverá transformar o presente plano em uma sequência operacional curta, verificável e executável no GitHub e no Termux.



FESTANÇA DE VILA BELA
Portal Oficial Permanente — Edições Anuais — Memória Histórica Preservada
