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
      title: 'Linha Digitável Copiada',
      template: '<strong>Competência:</strong> ' + parcela.mes + '<br>' +
                '<strong>Vencimento:</strong> ' + parcela.vencimento + '<br><br>' +
                '<div class="barcode-preview">' + parcela.codigoBarras + '</div>',
      okText: 'Fechar',
      okType: 'btn-ucsal-primary'
    });
  };
});