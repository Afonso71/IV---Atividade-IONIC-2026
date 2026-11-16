angular.module('ucsalApp')
.controller('FinanceiroCtrl', function($scope, $ionicPopup, FinanceiroService) {
  $scope.semestresDisponiveis = FinanceiroService.listarSemestres();
  $scope.filtro = {
    semestreSelecionado: '2026.2',
    statusBusca: ''
  };

  $scope.carregarMensalidades = function() {
    $scope.mensalidades = FinanceiroService.buscarPorSemestre(
      $scope.filtro.semestreSelecionado
    );
  };

  $scope.carregarMensalidades();

  $scope.copiarCodigoBarras = function(parcela) {
    if (navigator.clipboard && parcela.codigoBarras) {
      navigator.clipboard.writeText(parcela.codigoBarras);
    }

    $ionicPopup.alert({
      title: 'Código de Barras Copiado!',
      template: '<strong>Referência:</strong> ' + parcela.mes + '<br><br>' +
                '<strong>Linha Digitável:</strong><br>' +
                '<code style="font-size:11px; word-break:break-all;">' +
                parcela.codigoBarras + '</code>',
      okText: 'Fechar',
      okType: 'button-ucsal'
    });
  };
});