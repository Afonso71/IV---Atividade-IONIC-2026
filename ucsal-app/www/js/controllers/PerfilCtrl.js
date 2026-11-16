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
        template: 'Preencha o e-mail, telefone e os dados de endereço antes de guardar.',
        okType: 'button-ucsal'
      });
      return;
    }

    AlunoService.atualizarCadastro($scope.aluno);

    $ionicPopup.alert({
      title: 'Cadastro Atualizado',
      template: 'Os seus dados de contacto e endereço foram atualizados com sucesso no Portal UCSal!',
      okType: 'button-ucsal'
    });
  };
});