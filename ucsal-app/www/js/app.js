angular.module('ucsalApp', ['ionic'])

.run(function($ionicPlatform, $rootScope, AuthService) {
  $ionicPlatform.ready(function() {
    if (window.StatusBar) {
      StatusBar.styleLightContent();
    }
  });

  $rootScope.alunoLogado = AuthService.getUsuarioLogado();
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
          templateUrl: 'templates/financeiro.html',
          controller: 'FinanceiroCtrl'
        }
      }
    });

  $urlRouterProvider.otherwise('/login');
})

.controller('MenuCtrl', function($scope, $rootScope, $state, $ionicSideMenuDelegate, AuthService) {
  $scope.$on('$ionicView.beforeEnter', function() {
    $scope.aluno = $rootScope.alunoLogado || AuthService.getUsuarioLogado();
  });

  $scope.navegarPara = function(rota) {
    $ionicSideMenuDelegate.toggleLeft(false);
    $state.go(rota);
  };

  $scope.sair = function() {
    $ionicSideMenuDelegate.toggleLeft(false);
    AuthService.logout();
    $rootScope.alunoLogado = null;
    $state.go('login');
  };
});