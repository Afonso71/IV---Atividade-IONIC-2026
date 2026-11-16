angular.module('ucsalApp')
.controller('LoginCtrl', function($scope, $state, AuthService) {
  $scope.credenciais = {
    matricula: '20261001',
    senha: '123456'
  };
  $scope.erroLogin = '';

  $scope.fazerLogin = function() {
    $scope.erroLogin = '';

    if (!$scope.credenciais.matricula || !$scope.credenciais.senha) {
      $scope.erroLogin = 'Por favor, preencha a Matrícula e a Senha para entrar.';
      return;
    }

    var resultado = AuthService.autenticar(
      $scope.credenciais.matricula,
      $scope.credenciais.senha
    );

    if (resultado.sucesso) {
      $state.go('app.noticias');
    } else {
      $scope.erroLogin = resultado.mensagem;
    }
  };
});