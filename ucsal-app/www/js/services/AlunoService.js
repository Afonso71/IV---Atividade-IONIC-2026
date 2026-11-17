angular.module('ucsalApp')
.factory('AlunoService', function($rootScope) {
  var STORAGE_KEY = 'ucsal_alunos_mock';

  var alunosPadrao = [
    {
      matricula: '20261001',
      nome: 'Afonso de Menezes Alves Neto',
      curso: 'Engenharia de Software',
      campus: 'Campus Pituaçu',
      email: 'afonso.menezes@ucsal.edu.br',
      telefone: '(71) 99876-5432',
      endereco: {
        cep: '41740-090',
        rua: 'Av. Prof. Pinto de Aguiar, 2589',
        bairro: 'Pituaçu',
        cidade: 'Salvador - BA'
      }
    },
    {
      matricula: '20261002',
      nome: 'Maria Clara Oliveira',
      curso: 'Engenharia de Software',
      campus: 'Campus Federação',
      email: 'maria.oliveira@ucsal.edu.br',
      telefone: '(71) 98765-1234',
      endereco: {
        cep: '40231-902',
        rua: 'Av. Cardeal da Silva, 205',
        bairro: 'Federação',
        cidade: 'Salvador - BA'
      }
    }
  ];

  function carregarAlunos() {
    var salvos = localStorage.getItem(STORAGE_KEY);
    return salvos ? JSON.parse(salvos) : angular.copy(alunosPadrao);
  }

  var listaAlunos = carregarAlunos();

  return {
    buscarPorMatricula: function(matricula) {
      listaAlunos = carregarAlunos();
      for (var i = 0; i < listaAlunos.length; i++) {
        if (listaAlunos[i].matricula === matricula) {
          return angular.copy(listaAlunos[i]);
        }
      }
      return angular.copy(alunosPadrao[0]);
    },

    atualizarCadastro: function(dadosAtualizados) {
      for (var i = 0; i < listaAlunos.length; i++) {
        if (listaAlunos[i].matricula === dadosAtualizados.matricula) {
          listaAlunos[i].email = dadosAtualizados.email;
          listaAlunos[i].telefone = dadosAtualizados.telefone;
          listaAlunos[i].endereco = angular.copy(dadosAtualizados.endereco);

          localStorage.setItem(STORAGE_KEY, JSON.stringify(listaAlunos));
          localStorage.setItem('ucsal_sessao_aluno', JSON.stringify(listaAlunos[i]));
          $rootScope.alunoLogado = angular.copy(listaAlunos[i]);
          return angular.copy(listaAlunos[i]);
        }
      }
      return null;
    }
  };
});