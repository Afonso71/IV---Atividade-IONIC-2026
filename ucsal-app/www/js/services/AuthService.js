angular.module('ucsalApp')
.factory('AuthService', function($rootScope, AlunoService) {
  var SESSION_KEY = 'ucsal_sessao_aluno';

  var credenciaisMock = [
    {
      matricula: '20261001',
      senha: '123456'
    },
    {
      matricula: '20261002',
      senha: 'ucsal2026'
    }
  ];

  return {
    autenticar: function(matricula, senha) {
      var encontrado = null;

      for (var i = 0; i < credenciaisMock.length; i++) {
        if (credenciaisMock[i].matricula === String(matricula).trim() &&
            credenciaisMock[i].senha === String(senha).trim()) {
          encontrado = AlunoService.buscarPorMatricula(credenciaisMock[i].matricula);
          break;
        }
      }

      if (encontrado) {
        $rootScope.alunoLogado = encontrado;
        localStorage.setItem(SESSION_KEY, JSON.stringify(encontrado));
        return { sucesso: true, aluno: encontrado };
      }

      return {
        sucesso: false,
        mensagem: 'Matrícula ou senha inválidas. Tente 20261001 / 123456.'
      };
    },

    getUsuarioLogado: function() {
      if ($rootScope.alunoLogado) {
        return $rootScope.alunoLogado;
      }
      var salvo = localStorage.getItem(SESSION_KEY);
      if (salvo) {
        $rootScope.alunoLogado = JSON.parse(salvo);
        return $rootScope.alunoLogado;
      }
      return null;
    },

    logout: function() {
      $rootScope.alunoLogado = null;
      localStorage.removeItem(SESSION_KEY);
    }
  };
});