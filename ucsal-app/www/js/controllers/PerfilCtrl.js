angular.module('ucsalApp')
.controller('PerfilCtrl', function($scope, $ionicPopup, AuthService, AlunoService) {
  $scope.$on('$ionicView.beforeEnter', function() {
    var logado = AuthService.getUsuarioLogado();
    if (logado) {
      $scope.aluno = AlunoService.buscarPorMatricula(logado.matricula);
    }
  });

  $scope.salvarCadastro = function() {
    if (!$scope.aluno.email || !$scope.aluno.telefone ||
        !$scope.aluno.endereco.cep || !$scope.aluno.endereco.rua) {
      $ionicPopup.alert({
        title: 'Campos Obrigatórios',
        template: 'Preencha o e-mail, telefone e endereço completo antes de salvar.',
        okType: 'btn-ucsal-primary'
      });
      return;
    }

    AlunoService.atualizarCadastro($scope.aluno);

    $ionicPopup.alert({
      title: 'Dados Atualizados',
      template: 'Suas informações de contato e endereço foram salvas no registro acadêmico.',
      okText: 'Confirmar',
      okType: 'btn-ucsal-primary'
    });
  };
});