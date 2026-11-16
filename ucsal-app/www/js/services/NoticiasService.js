angular.module('ucsalApp')
.factory('NoticiasService', function() {
  var publicacoes = [
    {
      id: 1,
      titulo: 'Abertas as inscrições para a SEMOC 2026 no Campus Pituaçu',
      data: '18/10/2026',
      categoria: 'Evento',
      campus: 'Campus Pituaçu',
      imagem: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80',
      resumo: 'A Semana de Mobilização Científica reúne palestras de Engenharia de Software, IA e submissão de artigos.',
      conteudo: 'A Universidade Católica do Salvador (UCSal) convida todos os estudantes dos campi Pituaçu e Federação para participar na SEMOC 2026. Os alunos de Engenharia de Software poderão submeter trabalhos de conclusão, assistir a painéis técnicos e garantir horas complementares certificadas.'
    },
    {
      id: 2,
      titulo: 'Calendário de Rematrícula 2026.2 e Ajuste de Grade Horária',
      data: '12/10/2026',
      categoria: 'Notícia',
      campus: 'Pituaçu e Federação',
      imagem: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=80',
      resumo: 'Confira os prazos oficiais para renovação de matrícula e inclusão de disciplinas optativas pelo Portal.',
      conteudo: 'A Secretaria Geral de Cursos informa que o período de rematrícula para o semestre letivo 2026.2 já se encontra disponível. Para efetivar a renovação automática, o estudante deve estar com a situação financeira regularizada e confirmar o plano de estudos no autoatendimento.'
    },
    {
      id: 3,
      titulo: 'Maratona de Programação UCSal Tech & Desafio Mobile Ionic',
      data: '25/10/2026',
      categoria: 'Evento',
      campus: 'Campus Pituaçu - Bloco B',
      imagem: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=80',
      resumo: 'Competição prática de desenvolvimento de aplicações móveis multiplataforma e algoritmos.',
      conteudo: 'A Escola de Tecnologias promove a Maratona UCSal Tech nos laboratórios do Bloco B em Pituaçu. As equipas desenvolverão protótipos funcionais resolvendo desafios reais de atendimento académico utilizando arquiteturas SPA modernas.'
    },
    {
      id: 4,
      titulo: 'Edital PIBIC/UCSal: Bolsas de Iniciação Científica em Tecnologia',
      data: '05/10/2026',
      categoria: 'Notícia',
      campus: 'Campus Federação e Pituaçu',
      imagem: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80',
      resumo: 'Estudantes a partir do 3.º semestre podem candidatar-se a bolsas de investigação em Engenharia de Software.',
      conteudo: 'Estão abertas as candidaturas para o Programa Institucional de Bolsas de Iniciação Científica. As linhas de investigação abrangem sistemas distribuídos, arquitetura front-end, inteligência artificial aplicada à saúde e engenharia de requisitos.'
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