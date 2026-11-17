angular.module('ucsalApp')
.controller('FinanceiroCtrl', function($scope, $state, $ionicHistory, $ionicPopup, FinanceiroService) {
  $scope.semestresDisponiveis = FinanceiroService.listarSemestres();
  $scope.filtro = {
    semestreSelecionado: '2026.2',
    statusBusca: ''
  };

  $scope.compararStatusExato = function(valorReal, valorBuscado) {
    if (!valorBuscado) {
      return true;
    }
    return valorReal === valorBuscado;
  };

  $scope.carregarMensalidades = function() {
    $scope.mensalidades = FinanceiroService.buscarPorSemestre(
      $scope.filtro.semestreSelecionado
    );
  };

  $scope.carregarMensalidades();

  $scope.voltarAoMural = function() {
    $ionicHistory.nextViewOptions({ disableBack: true });
    $state.go('app.noticias');
  };

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