angular.module('ucsalApp')
.controller('NoticiasCtrl', function($scope, $state, NoticiasService) {
  $scope.publicacoes = NoticiasService.listarTodas();
  $scope.filtroCategoria = ''; 

  $scope.selecionarCategoria = function(categoria) {
    $scope.filtroCategoria = categoria;
  };

  $scope.abrirDetalhe = function(id) {
    $state.go('app.noticia-detalhe', { id: id });
  };
})

.controller('NoticiaDetalheCtrl', function($scope, $stateParams, NoticiasService) {
  $scope.publicacao = NoticiasService.buscarPorId($stateParams.id);
});