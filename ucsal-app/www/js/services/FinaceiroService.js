angular.module('ucsalApp')
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
      {
        id: 301,
        mes: 'Julho / 2026',
        vencimento: '10/07/2026',
        valor: 1290.00,
        status: 'Paga',
        codigoBarras: ''
      },
      {
        id: 302,
        mes: 'Agosto / 2026',
        vencimento: '10/08/2026',
        valor: 1290.00,
        status: 'Paga',
        codigoBarras: ''
      },
      {
        id: 303,
        mes: 'Setembro / 2026',
        vencimento: '10/09/2026',
        valor: 1290.00,
        status: 'Paga',
        codigoBarras: ''
      },
      {
        id: 304,
        mes: 'Outubro / 2026',
        vencimento: '10/10/2026',
        valor: 1290.00,
        status: 'A Pagar',
        codigoBarras: '03399.85301 29400.000204 26100.101028 8 98650000129000'
      },
      {
        id: 305,
        mes: 'Novembro / 2026',
        vencimento: '10/11/2026',
        valor: 1290.00,
        status: 'A Pagar',
        codigoBarras: '03399.85301 29400.000205 26110.101028 4 98960000129000'
      },
      {
        id: 306,
        mes: 'Dezembro / 2026',
        vencimento: '10/12/2026',
        valor: 1290.00,
        status: 'A Pagar',
        codigoBarras: '03399.85301 29400.000206 26120.101028 1 99260000129000'
      }
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
});