module zing {
  'use strict';

  let chart = {
    templateUrl: 'app/chart/chart.component.html',
    controllerAs: 'vm',
    controller: 'ChartController'
  };

  angular
    .module('zing')
    .component('chart', chart);
}