FESTANÇA DE VILA BELA


Checklist Operacional da Migração da Edição 2026


Arquivo: docs/festanca/migration-2026-checklist.md
Fase: F1 — Portal Oficial
Etapa: F1-P3.1 — Execução Operacional da Migração
Versão: 1.0.0
Status: Checklist Operacional Inicial
Documento-base: docs/festanca/migration-2026.md
Projeto-piloto: Festança 2026
Local: Vila Bela da Santíssima Trindade — Mato Grosso — Brasil



1. Finalidade


Este checklist transforma o Plano Oficial de Migração da Edição 2026 em uma sequência curta, verificável e executável no GitHub, no Termux e no fluxo de conferência institucional.


A regra operacional será:




EXECUTAR EM PEQUENOS BLOCOS — CONFERIR CADA RESULTADO — NÃO AVANÇAR COM ERRO.




Nenhuma etapa deverá ser considerada concluída apenas porque o comando foi executado.


Cada etapa exige:




resultado visível;


conferência;


registro;


correção de erro, quando houver;


confirmação antes do avanço.





2. Regras de Segurança


Antes de começar:




 Confirmar que o repositório correto está aberto


 Confirmar que a branch correta está selecionada


 Confirmar que não há alterações desconhecidas


 Não excluir arquivos diretamente


 Não sobrescrever dados de 2026


 Não publicar dados ainda não validados


 Não mover imagens sem conferir os caminhos


 Não divulgar endereços privados sem autorização


 Executar apenas um bloco de comandos por vez


 Ler o resultado completo antes de continuar


 Parar imediatamente se aparecer erro





3. Estado Inicial


3.1 Entrar no repositório


cd ~/decio-coelho-global
pwd



Resultado esperado


/data/data/com.termux/files/home/decio-coelho-global





 Caminho confirmado




3.2 Verificar a branch


git branch --show-current





 Branch correta confirmada




3.3 Verificar o estado do Git


git status --short



Resultado esperado


Nenhuma saída, ou somente arquivos conhecidos e autorizados.




 Estado conferido


 Alterações desconhecidas investigadas


 É seguro continuar





4. Registrar o Ponto de Partida


git log -1 --oneline



Anotar:


COMMIT INICIAL:
DATA:
RESPONSÁVEL:
OBSERVAÇÃO:





 Commit inicial registrado





5. Criar a Tag de Segurança


5.1 Verificar se a tag já existe


git tag --list "festanca-2026-pre-migration"



5.2 Criar a tag, caso ainda não exista


git tag -a festanca-2026-pre-migration -m "Estado anterior à migração estrutural da Festança 2026"



5.3 Conferir


git show festanca-2026-pre-migration --stat





 Tag criada


 Tag conferida


 Commit correto associado





6. Criar a Cópia de Segurança Local


mkdir -p backups/festanca/2026/pre-migration



Copiar a estrutura atual:


cp -a apps/festanca-2026/. backups/festanca/2026/pre-migration/



Conferir:


find backups/festanca/2026/pre-migration -maxdepth 3 -type f | sort





 Pasta de backup criada


 Arquivos copiados


 Estrutura conferida


 Nenhum arquivo original removido





7. Registrar o Inventário Inicial


Criar a pasta de controle:


mkdir -p docs/festanca/migration



Gerar lista dos arquivos atuais:


find apps/festanca-2026 -type f | sort > docs/festanca/migration/inventory-2026-before.txt



Conferir:


cat docs/festanca/migration/inventory-2026-before.txt



Contar:


wc -l docs/festanca/migration/inventory-2026-before.txt



Anotar:


TOTAL DE ARQUIVOS ANTES DA MIGRAÇÃO:





 Inventário inicial criado


 Total registrado


 Lista conferida





8. Criar a Estrutura Permanente


Executar:


mkdir -p apps/festanca/css
mkdir -p apps/festanca/js
mkdir -p apps/festanca/assets/permanent/icons
mkdir -p apps/festanca/assets/permanent/logos
mkdir -p apps/festanca/assets/permanent/interface
mkdir -p apps/festanca/assets/editions/2026/images
mkdir -p apps/festanca/assets/editions/2026/social
mkdir -p apps/festanca/data/editions/2026
mkdir -p apps/festanca/archive/2026



Conferir:


find apps/festanca -type d | sort





 Estrutura criada


 Pastas conferidas


 Nenhum erro apresentado





9. Copiar os Arquivos Permanentes


9.1 HTML


cp apps/festanca-2026/index.html apps/festanca/index.html



9.2 CSS


cp apps/festanca-2026/css/style.css apps/festanca/css/style.css



9.3 JavaScript


cp apps/festanca-2026/js/script.js apps/festanca/js/app.js



9.4 Ícones


cp -a apps/festanca-2026/assets/icons/. apps/festanca/assets/permanent/icons/



Conferir:


find apps/festanca -maxdepth 4 -type f | sort





 HTML copiado


 CSS copiado


 JavaScript copiado


 Ícones copiados


 Originais preservados





10. Copiar os Dados Anuais


10.1 Programação


cp apps/festanca-2026/data/programacao-2026.json apps/festanca/data/editions/2026/programacao.json



10.2 Festeiros


cp apps/festanca-2026/data/festeiros-2026.json apps/festanca/data/editions/2026/festeiros.json



10.3 Locais


cp apps/festanca-2026/data/locais-2026.json apps/festanca/data/editions/2026/locais.json



10.4 Documentação da edição


cp apps/festanca-2026/data/README.md apps/festanca/archive/2026/README.md



Conferir:


find apps/festanca/data/editions/2026 -type f -maxdepth 1 -print





 Programação copiada


 Festeiros copiados


 Locais copiados


 README preservado


 Arquivos originais mantidos





11. Copiar as Mídias Anuais


11.1 Imagens


cp -a apps/festanca-2026/assets/images/. apps/festanca/assets/editions/2026/images/



11.2 Arquivos sociais


cp -a apps/festanca-2026/assets/social/. apps/festanca/assets/editions/2026/social/



Conferir:


find apps/festanca/assets/editions/2026 -type f | sort





 Imagens copiadas


 Arquivos sociais copiados


 Nomes conferidos


 Autorizações pendentes identificadas


 Nenhuma mídia não autorizada publicada





12. Criar o Registro das Edições


Criar:


cat > apps/festanca/data/editions.json <<'EOF'
{
  "schemaVersion": "1.0.0",
  "currentEdition": 2026,
  "availableEditions": [
    {
      "year": 2026,
      "editionId": "festanca-vila-bela-2026",
      "status": "current",
      "visibility": "public",
      "isFoundingEdition": true,
      "dataPath": "data/editions/2026/"
    }
  ]
}
EOF



Validar visualmente:


cat apps/festanca/data/editions.json





 Arquivo criado


 Ano correto


 editionId correto


 Caminho correto


 Estado inicial correto





13. Criar os Metadados da Edição 2026


cat > apps/festanca/data/editions/2026/edition.json <<'EOF'
{
  "schemaVersion": "1.0.0",
  "editionId": "festanca-vila-bela-2026",
  "year": 2026,
  "eventName": "Festança de Vila Bela 2026",
  "city": "Vila Bela da Santíssima Trindade",
  "state": "Mato Grosso",
  "country": "Brasil",
  "status": "current",
  "visibility": "public",
  "isFoundingEdition": true,
  "isCurrentEdition": true,
  "sourceStatus": "documentado",
  "validationStatus": "aguardando-conferencia-institucional-final"
}
EOF



Conferir:


cat apps/festanca/data/editions/2026/edition.json





 Metadados criados


 Nome da edição correto


 Local correto


 Status coerente


 Validação não declarada indevidamente como concluída





14. Validar os Arquivos JSON


Se o comando jq estiver instalado:


jq empty apps/festanca/data/editions.json
jq empty apps/festanca/data/editions/2026/edition.json
jq empty apps/festanca/data/editions/2026/programacao.json
jq empty apps/festanca/data/editions/2026/festeiros.json
jq empty apps/festanca/data/editions/2026/locais.json



Resultado esperado: nenhuma mensagem de erro.


Se jq não estiver instalado:


python -m json.tool apps/festanca/data/editions.json > /dev/null
python -m json.tool apps/festanca/data/editions/2026/edition.json > /dev/null
python -m json.tool apps/festanca/data/editions/2026/programacao.json > /dev/null
python -m json.tool apps/festanca/data/editions/2026/festeiros.json > /dev/null
python -m json.tool apps/festanca/data/editions/2026/locais.json > /dev/null





 editions.json válido


 edition.json válido


 programacao.json válido


 festeiros.json válido


 locais.json válido





15. Conferir Informações Críticas


Pesquisar a Coordenação-Geral:


grep -Rni "Nazário Frazão de Almeida" apps/festanca/data/editions/2026



Pesquisar grafia incorreta:


grep -Rni "Nazári Frazão de Almeida" apps/festanca || true



Conferir os períodos oficiais:


grep -RniE "05/04/2026|31/05/2026|15/07/2026|27/07/2026" apps/festanca/data/editions/2026





 Nome correto encontrado


 Grafia incorreta ausente ou registrada apenas em histórico


 Período preparatório conferido


 Período principal conferido





16. Conferir Regras de Localização


Pesquisar locationId:


grep -Rni '"locationId"' apps/festanca/data/editions/2026



Pesquisar coordenadas:


grep -RniE '"latitude"|"longitude"|"coordinates"' apps/festanca/data/editions/2026



Pesquisar endereços privados:


grep -RniE '"address"|"endereco"|"endereço"' apps/festanca/data/editions/2026





 locationId conferido


 Coordenadas verificadas


 Endereços privados revisados


 Autorizações registradas


 Nenhum endereço privado exposto indevidamente





17. Atualizar os Caminhos no HTML


Antes de alterar:


grep -nE "festanca-2026|data/|assets/" apps/festanca/index.html



Substituições deverão ser realizadas com cuidado.


Exemplos de novos caminhos:


data/editions/2026/programacao.json
data/editions/2026/festeiros.json
data/editions/2026/locais.json
assets/editions/2026/images/
assets/editions/2026/social/
assets/permanent/icons/



Após a edição:


grep -nE "festanca-2026|programacao-2026|festeiros-2026|locais-2026" apps/festanca/index.html





 Caminhos antigos identificados


 Caminhos novos inseridos


 Nenhuma substituição automática insegura executada


 HTML revisado manualmente





18. Atualizar os Caminhos no JavaScript


Pesquisar referências antigas:


grep -nE "programacao-2026|festeiros-2026|locais-2026|festanca-2026" apps/festanca/js/app.js



Atualizar para:


data/editions/2026/programacao.json
data/editions/2026/festeiros.json
data/editions/2026/locais.json



Conferir:


grep -nE "data/editions/2026|assets/editions/2026" apps/festanca/js/app.js





 Referências antigas revisadas


 Novos caminhos inseridos


 Filtros preservados


 Tratamento de erro preservado


 Nenhum dado de 2026 misturado com estrutura permanente





19. Criar o Carregador de Edições


Criar o arquivo:


touch apps/festanca/js/edition-loader.js



O arquivo deverá futuramente:




ler data/editions.json;


identificar a edição solicitada;


usar 2026 como edição padrão inicial;


validar se a edição existe;


carregar edition.json;


carregar programação, festeiros e locais;


informar erro sem quebrar a página.


 Arquivo criado


 Responsabilidade definida


 Implementação separada do app.js





20. Registrar o Carregador no HTML


Conferir o final do HTML:


tail -n 30 apps/festanca/index.html



Registrar os scripts na ordem correta:


<script src="js/edition-loader.js"></script>
<script src="js/app.js"></script>





 Ordem dos scripts conferida


 Caminhos corretos


 Nenhum script duplicado





21. Conferir o CSS


Pesquisar caminhos de imagens:


grep -nE "url\(|assets/|festanca-2026" apps/festanca/css/style.css



Verificar regras exclusivas de 2026:


grep -n "2026" apps/festanca/css/style.css





 Caminhos de imagens corrigidos


 Regras permanentes preservadas


 Ajustes anuais identificados


 Nenhuma regra de 2026 afeta edições futuras sem necessidade





22. Teste Local Básico


Entrar na pasta:


cd ~/decio-coelho-global/apps/festanca



Iniciar servidor:


python -m http.server 8080



Abrir no navegador:


http://localhost:8080



Testar:




 Página abre


 CSS carrega


 JavaScript carrega


 Imagens aparecem


 Programação aparece


 Festeiros aparecem


 Locais aparecem


 Filtros funcionam


 WhatsApp funciona


 Não há erro visual grave




Para encerrar o servidor:


CTRL + C




23. Teste Responsivo


Verificar no celular:




 Largura de 320 px


 Largura de 360 px


 Largura de 390 px


 Largura de 412 px


 Largura de 480 px


 Menu acessível


 Textos legíveis


 Cards sem corte


 Imagens proporcionais


 Botões utilizáveis


 Rolagem sem travamento


 Rodapé íntegro





24. Teste de Acessibilidade




 Contraste suficiente


 Fonte legível


 Imagens com texto alternativo


 Botões com nomes compreensíveis


 Links identificáveis


 Foco de teclado visível


 Hierarquia correta de títulos


 Conteúdo compreensível sem depender apenas de cor


 Zoom não quebra a página


 Informações importantes não estão apenas em imagens





25. Teste de Links


Pesquisar links:


grep -RnioE 'https?://[^" )]+' apps/festanca | sort -u



Conferir manualmente:




 Google Maps


 WhatsApp


 Redes sociais


 Links institucionais


 Imagens externas


 Documentos


 Âncoras internas


 Navegação entre seções





26. Teste de Equivalência


Comparar a versão original e a migrada.


Original


apps/festanca-2026/



Migrada


apps/festanca/



Conferir:




 Mesmo conteúdo validado


 Mesmos nomes corretos


 Mesmas datas


 Mesmos horários


 Mesmos locais autorizados


 Mesmas imagens autorizadas


 Mesmos filtros


 Mesmos contatos


 Nenhuma informação perdida


 Nenhuma informação nova publicada sem validação





27. Simular a Edição 2027


Criar apenas para teste:


mkdir -p apps/festanca/data/editions/2027-test
mkdir -p apps/festanca/assets/editions/2027-test/images



Copiar apenas a estrutura mínima:


cp apps/festanca/data/editions/2026/edition.json apps/festanca/data/editions/2027-test/edition.json



Editar o arquivo de teste sem usar dados reais não confirmados.


Validar:




 O Portal identifica outra edição


 2026 continua intacta


 Não ocorre mistura de dados


 Ausência de programação é tratada corretamente


 A estrutura aceita um novo ano




Após o teste:


rm -rf apps/festanca/data/editions/2027-test
rm -rf apps/festanca/assets/editions/2027-test



Antes de remover:




 Confirmar que o caminho contém 2027-test


 Confirmar que nenhum dado oficial está na pasta


 Confirmar que a remoção foi autorizada





28. Gerar o Inventário Final


find apps/festanca -type f | sort > docs/festanca/migration/inventory-2026-after.txt



Conferir:


cat docs/festanca/migration/inventory-2026-after.txt



Contar:


wc -l docs/festanca/migration/inventory-2026-after.txt



Anotar:


TOTAL DE ARQUIVOS DEPOIS DA MIGRAÇÃO:





 Inventário final criado


 Total registrado


 Estrutura final conferida





29. Conferir o Git Antes do Commit


Voltar à raiz:


cd ~/decio-coelho-global



Ver alterações:


git status --short



Ver resumo:


git diff --stat



Ver diferenças importantes:


git diff -- apps/festanca docs/festanca





 Todos os arquivos são esperados


 Nenhum arquivo sensível incluído


 Nenhum endereço privado exposto


 Nenhuma chave ou credencial incluída


 Nenhum arquivo original removido por engano





30. Critérios para Interromper


Não realizar commit quando houver:




 JSON inválido


 Página quebrada


 CSS não carregando


 JavaScript com erro


 Imagem ausente


 Programação incompleta


 Nome divergente


 Endereço privado exposto


 Conteúdo sem fonte


 Arquivo removido sem autorização


 Falha nos filtros


 Impossibilidade de consultar 2026


 Dúvida institucional relevante




Quando houver qualquer item acima:


PARAR → REGISTRAR → CORRIGIR → TESTAR NOVAMENTE




31. Commit da Migração


Adicionar somente os arquivos conferidos:


git add apps/festanca docs/festanca backups/festanca/2026/pre-migration



Conferir a área preparada:


git diff --cached --stat



Realizar o commit:


git commit -m "feat(festanca): migrate founding 2026 edition to permanent portal architecture"





 Arquivos adicionados


 Conteúdo conferido


 Commit criado


 Hash do commit registrado




Registrar:


git log -1 --oneline



COMMIT FINAL:
DATA:
RESPONSÁVEL:




32. Enviar ao GitHub


Antes:


git status



Enviar:


git push origin main



Caso a branch não seja main, utilizar a branch correta previamente confirmada.




 Push concluído


 Repositório remoto atualizado


 Arquivos visíveis no GitHub


 Documento renderizado corretamente


 Nenhum erro de publicação





33. Validação no GitHub Pages


Após a atualização:




 Página abre no endereço oficial


 Cache atualizado


 HTML correto


 CSS correto


 JavaScript correto


 JSON acessível


 Imagens acessíveis


 Programação carregada


 Filtros funcionando


 WhatsApp funcionando


 Navegação móvel aprovada





34. Procedimento de Reversão


Em caso de falha grave:


git status
git log --oneline -5
git show festanca-2026-pre-migration --stat



Não executar restauração destrutiva sem conferir o estado atual.


Opção segura recomendada:


git checkout -b recovery/festanca-2026 festanca-2026-pre-migration



Isso cria uma branch de recuperação sem apagar a branch atual.




 Falha registrada


 Publicação interrompida


 Tag conferida


 Branch de recuperação criada


 Versão anterior validada


 Correção preparada separadamente





35. Encerramento da Migração


A migração somente será encerrada quando:




 Backup existir


 Tag existir


 Inventário inicial existir


 Inventário final existir


 Arquivos permanentes estiverem separados


 Dados de 2026 estiverem preservados


 Mídias estiverem organizadas


 JSON estiver válido


 Links estiverem funcionando


 Responsividade estiver aprovada


 Acessibilidade estiver aprovada


 Privacidade estiver aprovada


 Teste de equivalência estiver aprovado


 Simulação de 2027 estiver aprovada


 Commit estiver registrado


 GitHub estiver atualizado


 GitHub Pages estiver validado


 Aprovação institucional estiver registrada





36. Registro Final


MIGRAÇÃO INICIADA EM:

MIGRAÇÃO CONCLUÍDA EM:

EXECUTADA POR:

CONFERIDA POR:

VALIDADA POR:

APROVADA POR:

COMMIT INICIAL:

COMMIT FINAL:

TAG DE SEGURANÇA:

TOTAL DE ARQUIVOS ANTES:

TOTAL DE ARQUIVOS DEPOIS:

PENDÊNCIAS:

OBSERVAÇÕES:




37. Status Operacional


Utilizar apenas um status por etapa:


[ ] NÃO INICIADO
[~] EM EXECUÇÃO
[!] BLOQUEADO
[x] CONCLUÍDO



Nenhuma etapa bloqueada poderá ser marcada como concluída.



38. Regra Final




NÃO APAGAR A EDIÇÃO FUNDADORA.
NÃO MISTURAR EDIÇÕES.
NÃO PUBLICAR SEM VALIDAÇÃO.
NÃO AVANÇAR COM ERRO.
PRESERVAR, TESTAR, AUDITAR E SOMENTE ENTÃO PUBLICAR.





39. Próximo Passo Recomendado


Após a aprovação deste checklist:


F2-P1 — execução controlada da migração



A execução deverá começar pelo diagnóstico real do repositório e pelo bloco:


D51 — Inventário Pré-Migração da Festança 2026



O D51 deverá apenas ler, listar e diagnosticar.


Não deverá mover, renomear, excluir ou sobrescrever arquivos.



FESTANÇA DE VILA BELA
Portal Oficial Permanente — Edições Anuais — Memória Histórica Preservada
