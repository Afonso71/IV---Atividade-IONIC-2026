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
      $scope.erroLogin = 'Informe sua Matrícula e Senha para autenticar.';
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