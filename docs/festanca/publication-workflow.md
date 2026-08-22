FESTANÇA DE VILA BELA


Fluxo Oficial de Publicação das Edições Anuais


Arquivo: docs/festanca/publication-workflow.md
Fase: F1 — Portal Oficial
Etapa: F1-P3 — Fluxo de Publicação
Versão: 1.0.0
Status: Documento Operacional Inicial
Projeto-piloto: Festança 2026
Local: Vila Bela da Santíssima Trindade — Mato Grosso — Brasil  



1. Finalidade


Este documento estabelece o fluxo oficial para recebimento, conferência, validação, aprovação, publicação, correção, retirada, encerramento e arquivamento das informações de cada edição anual da Festança de Vila Bela.


Seu objetivo é garantir que toda informação publicada no Portal Oficial seja:




verificável;


rastreável;


aprovada;


atualizada;


acessível;


preservada;


compatível com a arquitetura permanente + anual;


protegida contra perda, duplicidade ou publicação indevida.





2. Princípio Operacional


Nenhum conteúdo anual deverá ser publicado diretamente sem passar por um fluxo mínimo de controle.


O fluxo oficial será:


RECEBER
→ REGISTRAR
→ CONFERIR
→ VALIDAR
→ APROVAR
→ PUBLICAR
→ MONITORAR
→ CORRIGIR, SE NECESSÁRIO
→ ENCERRAR
→ ARQUIVAR




3. Escopo


Este fluxo se aplica a:




programação oficial;


festeiros;


coordenação;


autoridades;


locais;


mapas;


patrocinadores;


apoiadores;


parceiros;


notícias;


comunicados;


fotografias;


vídeos;


documentos;


downloads;


cartazes;


peças de redes sociais;


alterações emergenciais;


relatórios;


registros históricos da edição.





4. Papéis e Responsabilidades


4.1 Coordenação-Geral


Compete à Coordenação-Geral:




fornecer informações oficiais;


confirmar nomes e cargos;


aprovar programação;


validar alterações relevantes;


autorizar publicação institucional;


informar cancelamentos, mudanças e correções;


aprovar o encerramento editorial da edição.




4.2 Curadoria de Conteúdo


Compete à Curadoria:




organizar os materiais recebidos;


classificar o conteúdo;


registrar fontes;


verificar coerência histórica;


identificar lacunas;


preservar o acervo;


manter rastreabilidade;


preparar conteúdo para validação.




4.3 Desenvolvimento


Compete ao Desenvolvimento:




manter a estrutura técnica;


validar JSON;


testar relacionamentos;


verificar links;


testar responsividade;


testar acessibilidade;


publicar versões aprovadas;


manter backup;


registrar alterações técnicas.




4.4 Comunicação


Compete à Comunicação:




adaptar conteúdo para divulgação;


preparar peças visuais;


revisar linguagem pública;


organizar campanhas;


publicar notícias;


manter consistência visual;


respeitar aprovações e fontes.




4.5 Responsável pela Aprovação


Deverá ser identificado em cada edição.


Exemplo:


{
  "approvedBy": "Coordenação-Geral",
  "approvedAt": "2026-07-11T18:00:00-04:00"
}




5. Estados do Fluxo


Cada item poderá assumir um dos seguintes status:


nao-recebido
recebido
registrado
em-conferencia
precisa-ajustar
aguardando-validacao
validado
aguardando-aprovacao
aprovado
pronto-para-publicar
publicado
corrigido
suspenso
retirado
encerrado
arquivado



5.1 Fluxo normal


recebido
→ registrado
→ em-conferencia
→ aguardando-validacao
→ validado
→ aguardando-aprovacao
→ aprovado
→ pronto-para-publicar
→ publicado



5.2 Fluxo com correção


em-conferencia
→ precisa-ajustar
→ registrado
→ em-conferencia



5.3 Fluxo pós-publicação


publicado
→ corrigido
→ publicado



5.4 Fluxo de retirada


publicado
→ suspenso
→ retirado




6. Etapa 1 — Recebimento


Todo material recebido deverá ser identificado.


6.1 Dados mínimos


Registrar:




tipo de conteúdo;


título;


ano da edição;


origem;


remetente;


data de recebimento;


canal de recebimento;


responsável pelo registro;


observações;


arquivos anexos;


status inicial.




6.2 Exemplo


{
  "itemId": "programacao-oficial-2026",
  "type": "programacao",
  "editionYear": 2026,
  "receivedFrom": "Coordenação-Geral",
  "receivedAt": "2026-07-11",
  "channel": "WhatsApp",
  "status": "recebido"
}



6.3 Canais possíveis


documento-oficial
e-mail
WhatsApp
reuniao
entrevista
formulario
arquivo-fisico
registro-fotografico
registro-de-audio
registro-de-video
outro




7. Etapa 2 — Registro


Após o recebimento, o material deverá ser incorporado ao controle editorial.


7.1 Ações




gerar identificador;


definir categoria;


salvar cópia original;


registrar fonte;


nomear arquivo corretamente;


vincular à edição;


registrar data;


definir responsável;


criar status;


impedir perda do original.




7.2 Regra de preservação


O arquivo original recebido não deverá ser sobrescrito.


Versões tratadas deverão receber novo nome ou versão.


Exemplo:


programacao-oficial-2026-original.pdf
programacao-oficial-2026-v1.pdf
programacao-oficial-2026-v2.pdf




8. Etapa 3 — Conferência


A conferência verifica consistência básica.


8.1 Programação


Conferir:




datas;


horários;


títulos;


categorias;


irmandades;


participantes;


festeiros;


locais;


sequência cronológica;


conflitos;


duplicidades;


atividades sem local;


atividades sem confirmação.




8.2 Pessoas


Conferir:




grafia;


cargo;


vínculo;


duplicidade;


autorização de imagem;


contato público;


status de confirmação.




8.3 Locais


Conferir:




nome;


tipo;


endereço;


referência;


coordenadas;


autorização para pino;


compatibilidade com a atividade.




8.4 Imagens


Conferir:




qualidade;


formato;


proporção;


autoria;


crédito;


autorização;


texto alternativo;


correspondência com a edição.




8.5 Documentos


Conferir:




legibilidade;


versão;


data;


assinatura;


origem;


integridade;


adequação para publicação.





9. Etapa 4 — Validação


A validação confirma que o conteúdo pode ser considerado tecnicamente e editorialmente consistente.


9.1 Tipos de validação


tecnica
editorial
institucional
historica
geografica
visual
juridica
acessibilidade
privacidade



9.2 Critérios


Um item poderá ser validado quando:




possuir fonte;


não apresentar divergência crítica;


cumprir o schema;


possuir campos obrigatórios;


não expor dado privado indevido;


possuir autorização quando necessária;


estar compatível com a edição;


possuir formato publicável.




9.3 Resultado


{
  "validation": {
    "status": "validado",
    "validatedBy": "Responsável",
    "validatedAt": "2026-07-11T19:00:00-04:00",
    "notes": []
  }
}




10. Etapa 5 — Aprovação


A aprovação é institucional.


10.1 Conteúdos que exigem aprovação




programação;


festeiros;


coordenação;


patrocinadores;


parceiros;


cartaz oficial;


identidade visual;


comunicados;


alterações;


cancelamentos;


documentos oficiais;


conteúdos sensíveis.




10.2 Regra


Validação técnica não substitui aprovação institucional.


10.3 Registro


{
  "approval": {
    "status": "aprovado",
    "approvedBy": "Coordenação-Geral",
    "approvedAt": "2026-07-11T20:00:00-04:00",
    "version": "1.0.0"
  }
}




11. Etapa 6 — Preparação para Publicação


Antes da publicação:




mover arquivos aprovados para a estrutura correta;


atualizar JSON;


validar caminhos;


verificar referências;


otimizar imagens;


gerar versões de compartilhamento;


revisar textos;


revisar acessibilidade;


testar mobile;


testar links;


criar backup;


atualizar publication-status.json.




11.1 Status obrigatório


pronto-para-publicar




12. Etapa 7 — Publicação


A publicação deverá ser controlada.


12.1 Procedimento




confirmar versão;


confirmar aprovação;


gerar backup;


publicar arquivos;


validar carregamento;


testar página;


testar mobile;


testar links;


testar downloads;


testar compartilhamento;


registrar data e responsável;


atualizar status para publicado.




12.2 Registro


{
  "publication": {
    "status": "publicado",
    "publishedBy": "Equipe Técnica",
    "publishedAt": "2026-07-11T21:00:00-04:00",
    "version": "1.0.0"
  }
}




13. Etapa 8 — Monitoramento Pós-Publicação


Após publicar, deverá haver conferência real.


13.1 Verificações




conteúdo carregando;


programação exibida;


imagens corretas;


filtros funcionando;


links válidos;


mapas funcionando;


WhatsApp funcionando;


textos legíveis;


responsividade;


acessibilidade;


ausência de erros no console;


ausência de arquivos faltantes.




13.2 Janela crítica


Recomenda-se revisão imediata após publicação e nova revisão após atualização relevante.



14. Etapa 9 — Correção


Correções podem ocorrer antes ou depois da publicação.


14.1 Correção simples


Exemplos:




grafia;


pontuação;


texto alternativo;


link;


descrição.




14.2 Correção relevante


Exemplos:




data;


horário;


local;


cargo;


participante;


cancelamento;


patrocinador;


coordenada.




14.3 Regra


Correção relevante deverá:




registrar valor anterior;


registrar valor novo;


informar motivo;


identificar solicitante;


registrar aprovação;


gerar nova versão;


preservar histórico.




14.4 Exemplo


{
  "changeId": "chg-2026-0001",
  "field": "startTime",
  "oldValue": "20:00",
  "newValue": "21:00",
  "reason": "Alteração oficial da programação",
  "requestedBy": "Coordenação-Geral",
  "changedAt": "2026-07-12T10:00:00-04:00",
  "status": "corrigido"
}




15. Etapa 10 — Retirada ou Suspensão


Um conteúdo poderá ser suspenso quando:




houver dúvida sobre autenticidade;


faltar autorização;


existir risco de privacidade;


houver erro grave;


houver solicitação institucional;


houver conteúdo desatualizado com potencial de dano.




15.1 Suspensão


O conteúdo fica temporariamente indisponível.


15.2 Retirada


O conteúdo deixa de ser publicado, mas permanece preservado internamente.


15.3 Regra


Retirar da publicação não significa apagar do acervo.



16. Etapa 11 — Encerramento da Edição


Após o término da Festança:




consolidar programação executada;


registrar alterações ocorridas;


marcar atividades realizadas;


organizar galeria;


reunir vídeos;


consolidar notícias;


registrar parceiros;


reunir documentos;


elaborar relatório;


atualizar status da edição;


preparar arquivamento.




16.1 Status


encerrado




17. Etapa 12 — Arquivamento


O arquivamento transforma a edição em memória permanente.


17.1 Itens obrigatórios




edition.json;


programação final;


festeiros;


coordenação;


locais;


notícias;


galeria;


parceiros;


downloads;


relatório de encerramento;


histórico de alterações;


data de arquivamento;


responsável.




17.2 Status


arquivado



17.3 Regra de imutabilidade


Após arquivamento:




não sobrescrever arquivos;


não apagar;


não reutilizar IDs;


não alterar sem justificativa;


registrar toda correção histórica;


preservar versão anterior.





18. Fluxo Emergencial


Alterações urgentes poderão usar fluxo reduzido.


Exemplos:




cancelamento;


mudança de local;


mudança de horário;


alerta de segurança;


comunicado urgente.




18.1 Fluxo reduzido


SOLICITAÇÃO OFICIAL
→ CONFERÊNCIA RÁPIDA
→ APROVAÇÃO
→ PUBLICAÇÃO
→ REGISTRO



18.2 Regra


Urgência não elimina rastreabilidade.



19. Controle de Versões


Cada publicação relevante deverá possuir versão.


Exemplo:


1.0.0 — publicação inicial
1.0.1 — correção textual
1.1.0 — inclusão de nova programação
2.0.0 — alteração estrutural relevante




20. Registro de Alterações


Recomenda-se arquivo:


data/editions/2026/changelog.json



Exemplo:


{
  "schemaVersion": "1.0.0",
  "editionYear": 2026,
  "changes": [
    {
      "id": "chg-2026-0001",
      "version": "1.0.1",
      "date": "2026-07-12",
      "type": "correcao",
      "description": "Correção de horário",
      "approvedBy": "Coordenação-Geral"
    }
  ]
}




21. Checklist Operacional — Recebimento


[ ] Material recebido
[ ] Origem identificada
[ ] Data registrada
[ ] Remetente registrado
[ ] Canal registrado
[ ] Arquivo original preservado
[ ] ID criado
[ ] Edição vinculada
[ ] Status definido




22. Checklist Operacional — Conferência


[ ] Grafia conferida
[ ] Datas conferidas
[ ] Horários conferidos
[ ] Locais conferidos
[ ] Pessoas conferidas
[ ] Cargos conferidos
[ ] Duplicidades verificadas
[ ] Fonte registrada
[ ] Privacidade verificada
[ ] Autorizações verificadas




23. Checklist Operacional — Publicação


[ ] Conteúdo validado
[ ] Conteúdo aprovado
[ ] JSON válido
[ ] Relacionamentos válidos
[ ] Imagens presentes
[ ] Links testados
[ ] Downloads testados
[ ] Mobile testado
[ ] Acessibilidade testada
[ ] Backup criado
[ ] Status pronto-para-publicar
[ ] Publicação executada
[ ] Pós-publicação conferida




24. Checklist Operacional — Encerramento


[ ] Programação final consolidada
[ ] Atividades realizadas marcadas
[ ] Alterações registradas
[ ] Galeria organizada
[ ] Notícias consolidadas
[ ] Parceiros registrados
[ ] Documentos reunidos
[ ] Relatório elaborado
[ ] Edição encerrada
[ ] Arquivamento preparado




25. Checklist Operacional — Arquivamento


[ ] Todos os JSON preservados
[ ] Todos os ativos preservados
[ ] Histórico de alterações incluído
[ ] Relatório final incluído
[ ] Data de arquivamento registrada
[ ] Responsável registrado
[ ] Status arquivado
[ ] Backup final concluído
[ ] Consulta histórica testada




26. Critérios para Publicação Segura


Nenhum item deverá ser publicado quando:




não possuir fonte;


contiver divergência grave;


expuser endereço privado sem autorização;


utilizar imagem sem permissão;


tiver link quebrado;


possuir JSON inválido;


estiver sem aprovação necessária;


apresentar risco institucional;


não corresponder à edição;


contiver nome ou cargo não confirmado.





27. Auditoria


Cada edição deverá permitir responder:




quem forneceu;


quando foi recebido;


quem conferiu;


quem validou;


quem aprovou;


quem publicou;


quando foi alterado;


o que mudou;


por que mudou;


qual versão está vigente;


quando foi arquivado.





28. Indicadores Operacionais


Poderão ser acompanhados:




itens recebidos;


itens pendentes;


itens validados;


itens aprovados;


itens publicados;


correções realizadas;


links quebrados;


imagens sem autorização;


locais sem validação;


tempo médio entre recebimento e publicação;


percentual de conclusão da edição.





29. Princípio de Continuidade


O encerramento de uma edição não encerra o Portal.


Após o arquivamento:


2026 permanece consultável
2027 torna-se ativa
2028 entra em planejamento




30. Regra Constitucional do Fluxo




Nenhuma informação oficial deve surgir sem origem.
Nenhuma publicação deve ocorrer sem controle.
Nenhuma edição deve desaparecer após o encerramento.





31. Próximo Documento Recomendado


docs/festanca/migration-2026.md



Esse documento deverá definir:




inventário da estrutura atual;


origem e destino de cada arquivo;


ordem de migração;


cópia de segurança;


critérios de classificação;


ajustes de caminhos;


testes de equivalência;


plano de reversão;


checklist final da migração.





FESTANÇA DE VILA BELA
Portal Oficial Permanente
Fluxo Oficial de Publicação das Edições Anuais
