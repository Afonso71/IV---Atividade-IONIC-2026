angular.module('ucsalApp', ['ionic'])

.run(function($ionicPlatform, $rootScope, $templateCache, AuthService) {
  $ionicPlatform.ready(function() {
    if (window.StatusBar) {
      StatusBar.styleLightContent();
    }
  });

  $rootScope.alunoLogado = AuthService.getUsuarioLogado();

  $templateCache.put('templates/financeiro-seguro.html',
    '<ion-view view-title="Consulta Financeira">' +
      '<ion-content>' +
        '<div class="portal-container">' +
          '<div class="page-header-block">' +
            '<div>' +
              '<span class="page-eyebrow">Tesouraria Acadêmica • Demonstrativo de Mensalidades</span>' +
              '<h2 class="page-title">Extrato Financeiro por Semestre</h2>' +
            '</div>' +
            '<button type="button" class="button btn-ucsal-outline" ng-click="voltarAoMural()">' +
              '<i class="icon ion-arrow-left-c"></i> <span>Voltar ao Mural</span>' +
            '</button>' +
          '</div>' +
          '<div class="finance-toolbar">' +
            '<div>' +
              '<label class="field-label">Semestre Letivo</label>' +
              '<select class="select-control mono-code" ng-model="filtro.semestreSelecionado" ng-options="sem for sem in semestresDisponiveis" ng-change="carregarMensalidades()"></select>' +
            '</div>' +
            '<div>' +
              '<label class="field-label">Filtrar por Situação</label>' +
              '<select class="select-control" ng-model="filtro.statusBusca">' +
                '<option value="">Todas as Parcelas</option>' +
                '<option value="Paga">Somente Pagas</option>' +
                '<option value="A Pagar">Somente A Pagar</option>' +
              '</select>' +
            '</div>' +
          '</div>' +
          '<div class="invoice-list">' +
            '<div class="invoice-card" ng-repeat="parcela in mensalidades | filter:{ status: filtro.statusBusca }:compararStatusExato" ng-if="!filtro.statusBusca || parcela.status === filtro.statusBusca" ng-class="parcela.status === \'Paga\' ? \'invoice-paid\' : \'invoice-pending\'">' +
              '<div class="invoice-main-row">' +
                '<div>' +
                  '<h3 class="invoice-month">{{ parcela.mes }}</h3>' +
                  '<p class="invoice-due">Vencimento: <span class="mono-code">{{ parcela.vencimento }}</span></p>' +
                '</div>' +
                '<div class="invoice-right-col">' +
                  '<span class="invoice-amount">{{ parcela.valor | currency:"R$ " }}</span>' +
                  '<span class="status-badge" ng-class="parcela.status === \'Paga\' ? \'status-paga\' : \'status-apagar\'">{{ parcela.status }}</span>' +
                '</div>' +
              '</div>' +
              '<div class="invoice-barcode-Drawer" ng-if="parcela.status === \'A Pagar\'">' +
                '<span class="barcode-preview">{{ parcela.codigoBarras }}</span>' +
                '<button type="button" class="button btn-ucsal-outline" ng-click="copiarCodigoBarras(parcela)">' +
                  '<i class="icon ion-ios-barcode-outline"></i> <span>Copiar Código de Barras</span>' +
                '</button>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</ion-content>' +
    '</ion-view>'
  );
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
    })

    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'MenuCtrl'
    })

    .state('app.noticias', {
      url: '/noticias',
      views: {
        'menuContent': {
          templateUrl: 'templates/noticias.html',
          controller: 'NoticiasCtrl'
        }
      }
    })

    .state('app.noticia-detalhe', {
      url: '/noticias/:id',
      views: {
        'menuContent': {
          templateUrl: 'templates/noticia-detalhe.html',
          controller: 'NoticiaDetalheCtrl'
        }
      }
    })

    .state('app.perfil', {
      url: '/perfil',
      views: {
        'menuContent': {
          templateUrl: 'templates/perfil.html',
          controller: 'PerfilCtrl'
        }
      }
    })

    .state('app.financeiro', {
      url: '/financeiro',
      views: {
        'menuContent': {
          templateUrl: 'templates/financeiro-seguro.html',
          controller: 'FinanceiroCtrl'
        }
      }
    });

  $urlRouterProvider.otherwise('/login');
})

.factory('FinanceiroService', function() {
  var mensalidadesPorSemestre = {
    '2025.2': [
      { id: 101, mes: 'Julho / 2025', vencimento: '10/07/2025', valor: 1180.00, status: 'Paga', codigoBarras: '' },
      { id: 102, mes: 'Agosto / 2025', vencimento: '10/08/2025', valor: 1180.00, status: 'Paga', codigoBarras: '' },
      { id: 103, mes: 'Setembro / 2025', vencimento: '10/09/2025', valor: 1180.00, status: 'Paga', codigoBarras: '' },
      { id: 104, mes: 'Outubro / 2025', vencimento: '10/10/2025', valor: 1180.00, status: 'Paga', codigoBarras: '' },
      { id: 105, mes: 'Novembro / 2025', vencimento: '10/11/2025', valor: 1180.00, status: 'Paga', codigoBarras: '' },
      { id: 106, mes: 'Dezembro / 2025', vencimento: '10/12/2025', valor: 1180.00, status: 'Paga', codigoBarras: '' }
    ],
    '2026.1': [
      { id: 201, mes: 'Janeiro / 2026', vencimento: '10/01/2026', valor: 1245.50, status: 'Paga', codigoBarras: '' },
      { id: 202, mes: 'Fevereiro / 2026', vencimento: '10/02/2026', valor: 1245.50, status: 'Paga', codigoBarras: '' },
      { id: 203, mes: 'Março / 2026', vencimento: '10/03/2026', valor: 1245.50, status: 'Paga', codigoBarras: '' },
      { id: 204, mes: 'Abril / 2026', vencimento: '10/04/2026', valor: 1245.50, status: 'Paga', codigoBarras: '' },
      { id: 205, mes: 'Maio / 2026', vencimento: '10/05/2026', valor: 1245.50, status: 'Paga', codigoBarras: '' },
      { id: 206, mes: 'Junho / 2026', vencimento: '10/06/2026', valor: 1245.50, status: 'Paga', codigoBarras: '' }
    ],
    '2026.2': [
      { id: 301, mes: 'Julho / 2026', vencimento: '10/07/2026', valor: 1290.00, status: 'Paga', codigoBarras: '' },
      { id: 302, mes: 'Agosto / 2026', vencimento: '10/08/2026', valor: 1290.00, status: 'Paga', codigoBarras: '' },
      { id: 303, mes: 'Setembro / 2026', vencimento: '10/09/2026', valor: 1290.00, status: 'Paga', codigoBarras: '' },
      { id: 304, mes: 'Outubro / 2026', vencimento: '10/10/2026', valor: 1290.00, status: 'A Pagar', codigoBarras: '03399.85301 29400.000204 26100.101028 8 98650000129000' },
      { id: 305, mes: 'Novembro / 2026', vencimento: '10/11/2026', valor: 1290.00, status: 'A Pagar', codigoBarras: '03399.85301 29400.000205 26110.101028 4 98960000129000' },
      { id: 306, mes: 'Dezembro / 2026', vencimento: '10/12/2026', valor: 1290.00, status: 'A Pagar', codigoBarras: '03399.85301 29400.000206 26120.101028 1 99260000129000' }
    ]
  };

  return {
    listarSemestres: function() {
      return ['2026.2', '2026.1', '2025.2'];
    },
    buscarPorSemestre: function(semestre) {
      return angular.copy(mensalidadesPorSemestre[semestre] || []);
    }
  };
})

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
})

.controller('MenuCtrl', function($scope, $rootScope, $state, $ionicHistory, $ionicSideMenuDelegate, AuthService) {
  $scope.$on('$ionicView.beforeEnter', function() {
    $scope.aluno = $rootScope.alunoLogado || AuthService.getUsuarioLogado();
  });

  $scope.navegarPara = function(rota) {
    $ionicSideMenuDelegate.toggleLeft(false);
    $ionicHistory.nextViewOptions({ historyRoot: false });
    $state.go(rota);
  };

  $scope.voltarAoMural = function() {
    if ($ionicHistory.backView()) {
      $ionicHistory.goBack();
    } else {
      $state.go('app.noticias');
    }
  };

  $scope.sair = function() {
    $ionicSideMenuDelegate.toggleLeft(false);
    AuthService.logout();
    $rootScope.alunoLogado = null;
    $state.go('login');
  };
});