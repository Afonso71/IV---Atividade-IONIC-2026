angular.module('ucsalApp')
.factory('NoticiasService', function() {
  var publicacoes = [
    {
      id: 1,
      titulo: 'Inscrições abertas para a SEMOC 2026 no Campus Pituaçu',
      data: '18/10/2026',
      categoria: 'Evento',
      campus: 'Campus Pituaçu',
      imagem: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80',
      resumo: 'Semana de Mobilização Científica reúne sessões técnicas de Engenharia de Software, pesquisa aplicada e certificação de horas.',
      conteudo: 'A Universidade Católica do Salvador (UCSal) convida os estudantes dos campi Pituaçu e Federação para integrar as atividades da SEMOC 2026. A programação contempla mesas-redondas sobre arquitetura de software, inteligência artificial aplicada e apresentação de trabalhos de conclusão de curso.'
    },
    {
      id: 2,
      titulo: 'Cronograma Oficial de Rematrícula 2026.2 e Ajuste de Grade',
      data: '12/10/2026',
      categoria: 'Notícia',
      campus: 'Pituaçu e Federação',
      imagem: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=80',
      resumo: 'Prazos para renovação de vínculo acadêmico e requerimento de disciplinas optativas pelo autoatendimento.',
      conteudo: 'A Secretaria Geral de Cursos comunica que o calendário de renovação de matrícula para o semestre 2026.2 está aberto. O estudante deve consultar sua situação financeira no módulo de Consulta Financeira e validar a matriz curricular proposta diretamente pelo portal.'
    },
    {
      id: 3,
      titulo: 'Maratona de Programação UCSal & Laboratório de Aplicações Mobile',
      data: '25/10/2026',
      categoria: 'Evento',
      campus: 'Campus Pituaçu • Bloco B',
      imagem: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=80',
      resumo: 'Desafio prático entre equipes da Escola de Tecnologias focado em prototipação ágil e resolução de algoritmos.',
      conteudo: 'Realizada nos laboratórios de informática do Bloco B em Pituaçu, a maratona reúne estudantes de Engenharia de Software para desenvolver soluções voltadas à comunidade acadêmica utilizando arquiteturas SPA e frameworks móveis.'
    },
    {
      id: 4,
      titulo: 'Edital PIBIC/UCSal: Seleção de Bolsistas de Iniciação Científica',
      data: '05/10/2026',
      categoria: 'Notícia',
      campus: 'Campus Federação e Pituaçu',
      imagem: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80',
      resumo: 'Abertura de vagas para grupos de pesquisa em Engenharia de Software, Banco de Dados e Sistemas Distribuídos.',
      conteudo: 'Os alunos regularmente matriculados a partir do 3º semestre podem submeter planos de trabalho junto aos professores orientadores da Escola de Tecnologias. A bolsa tem vigência de 12 meses com dedicação de 20 horas semanais.'
    }
  ];

  return {
    listarTodas: function() {
      return angular.copy(publicacoes);
    },

    buscarPorId: function(id) {
      var idNumerico = parseInt(id, 10);
      for (var i = 0; i < publicacoes.length; i++) {
        if (publicacoes[i].id === idNumerico) {
          return angular.copy(publicacoes[i]);
        }
      }
      return null;
    }
  };
});