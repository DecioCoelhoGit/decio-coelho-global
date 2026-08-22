FESTANÇA DE VILA BELA


Documento Constitucional da Arquitetura do Portal Oficial


Arquivo: docs/festanca/portal-architecture.md
Fase: F1 — Portal Oficial
Etapa: F1-P1 — Constituição Arquitetural
Versão: 1.0.0
Status: Documento Estrutural Inicial
Projeto-piloto: Festança 2026
Local: Vila Bela da Santíssima Trindade — Mato Grosso — Brasil



1. Finalidade


Este documento estabelece a arquitetura oficial, permanente e evolutiva do Portal da Festança de Vila Bela.


Seu objetivo é separar, de forma clara e controlada:




o conteúdo institucional e histórico que permanece entre as edições;


o conteúdo anual que muda a cada exercício;


os ativos visuais permanentes;


os ativos específicos de cada edição;


os dados oficiais;


as regras de publicação;


os procedimentos de preservação da memória;


os critérios de migração da Festança 2026 para o novo modelo.




A Festança 2026 será considerada a primeira edição integralmente estruturada dentro desta arquitetura.



2. Princípio Fundamental


O projeto deixa de ser compreendido apenas como uma Landing Page anual e passa a ser organizado como:




Portal Oficial Permanente da Festança de Vila Bela + Edições Anuais Versionadas




A arquitetura será orientada por dois grandes núcleos:


NÚCLEO PERMANENTE
+
NÚCLEO ANUAL



O Núcleo Permanente preserva a identidade histórica, cultural, institucional e tecnológica da Festança.


O Núcleo Anual registra os dados, a programação, as pessoas, os documentos, os parceiros, as notícias e os ativos específicos de cada edição.



3. Objetivos Arquiteturais


A arquitetura deverá:




reduzir a necessidade de reconstrução anual;


preservar a memória de cada edição;


permitir atualização segura e gradual;


evitar perda de arquivos históricos;


separar conteúdo institucional de conteúdo temporário;


facilitar auditoria e manutenção;


permitir expansão futura para sistema de gestão;


preparar o Portal para múltiplos idiomas;


garantir acessibilidade;


permitir integração com mapas, galerias, vídeos e redes sociais;


manter compatibilidade com publicação estática;


favorecer futura integração com banco de dados e painel administrativo.





4. Estrutura Oficial do Portal


apps/
└── festanca/
    ├── index.html
    ├── css/
    │   └── style.css
    ├── js/
    │   ├── portal.js
    │   ├── edition-loader.js
    │   ├── gallery.js
    │   ├── news.js
    │   └── accessibility.js
    ├── data/
    │   ├── active-edition.json
    │   ├── permanent/
    │   │   ├── history.json
    │   │   ├── identity.json
    │   │   ├── groups.json
    │   │   ├── contacts.json
    │   │   ├── locations.json
    │   │   ├── downloads.json
    │   │   └── governance.json
    │   └── editions/
    │       └── 2026/
    │           ├── edition.json
    │           ├── programacao.json
    │           ├── festeiros.json
    │           ├── coordenacao.json
    │           ├── locais.json
    │           ├── news.json
    │           ├── gallery.json
    │           ├── partners.json
    │           ├── downloads.json
    │           └── publication-status.json
    ├── assets/
    │   ├── permanent/
    │   │   ├── brand/
    │   │   ├── history/
    │   │   ├── groups/
    │   │   ├── icons/
    │   │   └── documents/
    │   └── editions/
    │       └── 2026/
    │           ├── brand/
    │           ├── gallery/
    │           ├── social-media/
    │           ├── partners/
    │           ├── downloads/
    │           └── videos/
    └── docs/
        └── festanca/
            ├── portal-architecture.md
            ├── edition-schema.md
            ├── publication-workflow.md
            └── migration-2026.md




5. Núcleo Permanente


O Núcleo Permanente reúne tudo o que deve continuar válido entre uma edição e outra.


5.1 Conteúdos permanentes


Integram o Núcleo Permanente:




história da Festança;


história de Vila Bela da Santíssima Trindade;


patrimônio histórico e cultural;


apresentação institucional;


grupos culturais permanentes;


Grupo do Congo;


Conguinho;


Chorado;


Choradinho;


locais históricos e espaços públicos permanentes;


contatos institucionais;


documentos fundadores;


linha do tempo histórica;


galeria histórica;


identidade-base do Portal;


regras de acessibilidade;


estrutura técnica;


política de preservação da memória;


governança dos dados;


política de localização e georreferenciamento.




5.2 Regra de estabilidade


Um conteúdo só poderá ser classificado como permanente quando:




não depender de uma edição específica;


possuir valor histórico, institucional ou cultural duradouro;


puder ser reutilizado em mais de um exercício;


não contiver datas, cargos temporários ou programação anual sem contextualização histórica.




5.3 Atualização de conteúdo permanente


Conteúdos permanentes podem ser atualizados quando houver:




correção histórica;


nova documentação;


inclusão de memória recuperada;


revisão institucional;


ampliação de informações;


correção de grafia;


atualização de contatos;


aprimoramento de acessibilidade;


validação por fonte oficial.




Toda alteração relevante deverá ser registrada em histórico de versão.



6. Núcleo Anual


O Núcleo Anual reúne informações exclusivas de uma edição.


6.1 Conteúdos anuais


Integram o Núcleo Anual:




ano da edição;


tema ou lema;


identidade visual anual;


programação oficial;


festeiros;


coordenação;


autoridades;


patrocinadores;


parceiros;


apoiadores;


colaboradores;


notícias;


galeria da edição;


vídeos;


cartazes;


peças de redes sociais;


documentos para download;


mapas temporários;


locais de atividades específicas;


comunicados;


alterações de programação;


registros pós-evento;


relatório final;


prestação de contas, quando aplicável.




6.2 Isolamento por edição


Cada edição deve possuir pasta própria:


data/editions/2026/
assets/editions/2026/



Em 2027:


data/editions/2027/
assets/editions/2027/



Nenhum arquivo de uma nova edição poderá substituir diretamente os arquivos de uma edição encerrada.



7. Edição Ativa


A edição exibida como principal será definida em:


data/active-edition.json



Estrutura mínima:


{
  "activeEdition": 2026,
  "status": "publicada",
  "updatedAt": "2026-07-27",
  "source": "Coordenação-Geral"
}



7.1 Função


O arquivo deverá informar ao Portal:




qual edição carregar;


qual programação exibir;


qual identidade visual anual utilizar;


quais notícias priorizar;


quais festeiros apresentar;


quais downloads liberar;


qual galeria carregar;


qual conjunto de parceiros mostrar.




7.2 Mudança de exercício


Para ativar uma nova edição:




criar a pasta do novo ano;


validar os arquivos obrigatórios;


revisar os dados;


publicar os ativos;


atualizar active-edition.json;


executar auditoria;


registrar a publicação.





8. Carregamento das Edições


O carregamento seguirá esta ordem:


1. Carregar configuração permanente
2. Ler active-edition.json
3. Identificar a edição ativa
4. Carregar edition.json
5. Carregar programação
6. Carregar festeiros e coordenação
7. Carregar notícias
8. Carregar galeria
9. Carregar parceiros
10. Carregar downloads
11. Aplicar identidade visual anual
12. Validar conteúdo
13. Exibir fallback quando necessário



8.1 Fallback


Quando um dado anual não estiver disponível, o Portal deverá:




evitar quebra visual;


ocultar a seção vazia;


exibir mensagem institucional adequada;


manter o conteúdo permanente disponível;


registrar o erro no console de desenvolvimento;


jamais inventar informação.




Exemplo:


Programação oficial em atualização.




9. Preservação do Acervo Histórico


Cada edição encerrada deverá ser preservada como registro histórico.


9.1 Regra de imutabilidade histórica


Após o encerramento editorial de uma edição:




os arquivos não deverão ser apagados;


os documentos não deverão ser sobrescritos;


imagens não deverão ser substituídas sem registro;


alterações posteriores deverão ser justificadas;


correções deverão gerar nova versão;


o conteúdo deverá permanecer consultável.




9.2 Estados possíveis de uma edição


planejamento
em-validacao
publicada
em-execucao
encerrada
arquivada



9.3 Arquivamento


Ao final de cada edição, deverão ser reunidos:




programação final executada;


galeria oficial;


vídeos;


notícias;


cartazes;


patrocinadores;


parceiros;


coordenação;


festeiros;


documentos;


correções;


relatório de encerramento;


registro da data de arquivamento.





10. Migração da Festança 2026


A migração da estrutura atual deverá ser gradual, auditável e reversível.


10.1 Regra de segurança


Nenhum arquivo original deverá ser excluído antes da conclusão da migração e da validação final.


10.2 Mapeamento inicial


Estrutura atual:


apps/festanca-2026/



Estrutura futura:


apps/festanca/



10.3 Migração dos dados


data/programacao-2026.json
→
data/editions/2026/programacao.json



data/festeiros-2026.json
→
data/editions/2026/festeiros.json



data/locais-2026.json
→
data/editions/2026/locais.json



10.4 Migração dos ativos


assets/images/
→
assets/editions/2026/gallery/



assets/social/
→
assets/editions/2026/social-media/



assets/icons/
→
assets/permanent/icons/



A classificação definitiva dependerá da natureza de cada arquivo.


10.5 Procedimento de migração




criar a nova estrutura;


copiar os arquivos;


manter os originais intactos;


ajustar caminhos relativos;


validar os JSON;


testar carregamento;


comparar a versão antiga com a nova;


gerar relatório de diferenças;


corrigir inconsistências;


ativar a nova arquitetura;


manter backup da estrutura anterior.





11. Governança dos Dados


11.1 Fontes


Cada dado deverá possuir, sempre que possível:




origem;


responsável pelo fornecimento;


data de recebimento;


status de validação;


data da última atualização;


observação;


nível de confiabilidade.




11.2 Status de validação


rascunho
recebido
em-conferencia
validado
documentado
publicado
corrigido
arquivado



11.3 Proibição de inferência editorial


O Portal não deverá publicar como oficial:




nomes presumidos;


horários não confirmados;


locais sem validação;


patrocinadores não autorizados;


cargos sem confirmação;


coordenadas não verificadas;


informações obtidas apenas por rumor;


imagens sem autorização quando necessária.





12. Política de Localização


12.1 Rezas Cantadas


Todas as Rezas Cantadas serão vinculadas à residência do respectivo festeiro ou festeira.


12.2 Atividades litúrgicas


Missas e celebrações litúrgicas serão vinculadas a igrejas, centros paroquiais, espaços religiosos ou locais oficialmente definidos na programação.


12.3 Residências privadas


O pino exato de uma residência privada só poderá ser publicado com autorização.


Quando não houver autorização, o sistema deverá utilizar referência aproximada, ponto de encontro, busca textual, orientação institucional ou fallback do Google Maps.


12.4 Coordenadas


Coordenadas só poderão ser consideradas oficiais quando verificadas.



13. Nomenclatura de Pastas


As pastas deverão:




usar letras minúsculas;


usar hífen em nomes compostos;


evitar espaços;


evitar acentos;


evitar caracteres especiais;


possuir significado claro;


representar a função real do conteúdo.




Exemplos corretos:


social-media
active-edition
publication-status
historical-gallery




14. Nomenclatura de Arquivos


14.1 Regra geral


festanca-[ano]-[tipo]-[descricao]-v[versao].[extensao]



Exemplos:


festanca-2026-cartaz-oficial-v1.png
festanca-2026-programacao-oficial-v2.pdf
festanca-2026-instagram-post-carrossel-01.png



14.2 Arquivos permanentes


festanca-historia-oficial.md
festanca-identidade-base.json
festanca-grupo-congo-historico.json



14.3 Proibições


Evitar:


final.png
final-final.png
novo.pdf
teste2.jpg
imagem-certa-agora.png




15. Versionamento


Versões de documentos e dados devem seguir, preferencialmente:


MAJOR.MINOR.PATCH



Exemplo:


1.0.0





MAJOR: alteração estrutural;


MINOR: inclusão relevante;


PATCH: correção pontual.





16. Critérios para Publicação de Nova Edição


Uma edição só poderá ser ativada quando possuir, no mínimo:




pasta anual criada;


edition.json;


programação oficial ou status de atualização;


coordenação identificada;


festeiros cadastrados, quando aplicável;


contatos institucionais;


identidade visual mínima;


locais validados;


política de privacidade aplicada;


auditoria de links;


auditoria de acessibilidade;


auditoria de imagens;


validação dos JSON;


aprovação editorial;


backup;


registro da publicação.




16.1 Checklist de publicação


[ ] Estrutura criada
[ ] Dados recebidos
[ ] Dados validados
[ ] Programação revisada
[ ] Nomes conferidos
[ ] Horários conferidos
[ ] Locais conferidos
[ ] Coordenadas verificadas
[ ] Imagens catalogadas
[ ] Direitos de uso verificados
[ ] Links testados
[ ] Mobile testado
[ ] Acessibilidade testada
[ ] active-edition.json atualizado
[ ] Publicação aprovada
[ ] Backup concluído




17. Critérios de Qualidade


A nova edição deverá cumprir:




clareza editorial;


consistência visual;


responsividade;


acessibilidade;


alto contraste;


boa leitura em dispositivos móveis;


carregamento eficiente;


imagens otimizadas;


ausência de links quebrados;


ausência de dados inventados;


identificação da fonte;


preservação do conteúdo histórico;


compatibilidade com compartilhamento via WhatsApp.





18. Identidade Visual


A arquitetura visual será composta por duas camadas.


18.1 Identidade-base permanente


Inclui marca institucional do Portal, tipografia-base, padrões de acessibilidade, estrutura de navegação, estilos de cards, componentes de rodapé, padrões de botões e ícones institucionais.


18.2 Identidade anual


Inclui selo da edição, cores complementares, cartaz, campanha, peças de redes sociais, fotografias oficiais, patrocinadores e slogan anual.


A identidade anual não poderá comprometer a legibilidade nem substituir integralmente os padrões permanentes de acessibilidade.



19. Acessibilidade


O Portal deverá priorizar:




alto contraste;


textos legíveis;


navegação por teclado;


textos alternativos;


títulos hierárquicos;


foco visível;


botões com rótulos claros;


fontes redimensionáveis;


suporte a leitores de tela;


descrição de imagens;


linguagem clara;


compatibilidade com dispositivos móveis.





20. Segurança Editorial


Antes da publicação, deverão ser verificados dados pessoais, endereços privados, autorizações de imagem, telefones, e-mails, documentos, coordenadas, links externos e arquivos para download.


Nenhuma informação sensível deverá ser publicada sem finalidade legítima e autorização adequada.



21. Responsabilidades


Coordenação-Geral




fornecer ou validar informações oficiais;


aprovar programação;


confirmar nomes e cargos;


validar alterações relevantes.




Curadoria e Conteúdo




organizar o acervo;


classificar conteúdos;


verificar coerência histórica;


registrar fontes;


preservar a memória.




Desenvolvimento




manter a arquitetura;


implementar carregamento;


validar arquivos;


realizar auditorias;


garantir responsividade e acessibilidade.




Comunicação




preparar peças;


publicar notícias;


manter consistência visual;


validar campanhas.





22. Princípio da Reversibilidade


Toda alteração estrutural deverá permitir retorno seguro à versão anterior.


Para isso:




manter backups;


evitar exclusão imediata;


registrar migrações;


usar versionamento;


testar antes da publicação;


preservar cópias dos arquivos de origem.





23. Princípio da Continuidade


A troca de exercício não representa o encerramento do Portal.


Representa apenas a ativação de uma nova edição.


2026 permanece disponível
2027 torna-se a edição ativa
2028 será preparada sem apagar 2026 e 2027




24. Evolução Futura


Esta arquitetura deverá permitir, futuramente:




painel administrativo;


banco de dados;


cadastro de membros;


credenciamento;


gestão de voluntários;


museu virtual;


linha do tempo interativa;


mapa cultural;


roteiros turísticos;


integração com agenda;


notificações;


múltiplos idiomas;


API pública;


aplicação móvel;


relatórios;


preservação digital de longo prazo.





25. Regra Constitucional Final


Toda decisão técnica, editorial ou visual deverá respeitar três compromissos:




Preservar a memória.
Facilitar a edição anual.
Garantir a continuidade histórica do Portal.




A Festança não será tratada como uma publicação efêmera.


Será tratada como um patrimônio cultural vivo, documentado e acumulativo.



26. Aprovação e Vigência


Este documento entra em vigor como referência estrutural inicial da Fase 1 do Portal Oficial da Festança.


Qualquer alteração futura deverá:




manter compatibilidade com o princípio permanente + anual;


ser documentada;


possuir versão;


justificar impactos;


preservar o acervo existente;


respeitar a governança dos dados.





27. Próximo Documento Recomendado


docs/festanca/edition-schema.md



Esse documento deverá definir tecnicamente:




campos obrigatórios;


tipos de dados;


estrutura dos JSON;


relacionamentos;


regras de validação;


status editoriais;


campos de origem e confiabilidade;


padrão mínimo de uma nova edição.





FESTANÇA DE VILA BELA
Portal Oficial Permanente
Memória, Cultura, Fé, Identidade e Continuidade
