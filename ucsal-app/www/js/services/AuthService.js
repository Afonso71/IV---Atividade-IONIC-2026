angular.module('ucsalApp')
.factory('AuthService', function($rootScope, AlunoService) {
  var SESSION_KEY = 'ucsal_sessao_aluno';

  var credenciaisMock = [
    { matricula: '20261001', senha: '123456' },
    { matricula: '20261002', senha: 'ucsal2026' }
  ];

  return {
    autenticar: function(matricula, senha) {
      var encontrado = null;
      var matLimpa = String(matricula || '').trim();
      var senhaLimpa = String(senha || '').trim();

      for (var i = 0; i < credenciaisMock.length; i++) {
        if (credenciaisMock[i].matricula === matLimpa &&
            credenciaisMock[i].senha === senhaLimpa) {
          encontrado = AlunoService.buscarPorMatricula(matLimpa);
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
        mensagem: 'Credenciais inválidas. Verifique sua matrícula e senha.'
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
      return AlunoService.buscarPorMatricula('20261001');
    },

    logout: function() {
      $rootScope.alunoLogado = null;
      localStorage.removeItem(SESSION_KEY);
    }
  };
});