module zing {
  'use strict';

  const chart = {
    templateUrl: 'app/chart/chart.component.html',
    controllerAs: 'vm',
    controller: 'ChartController'
  };

  angular
    .module('zing')
    .component('chart', chart);
}