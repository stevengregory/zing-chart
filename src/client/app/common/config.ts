module zing {
  'use strict';

  let plotNames = ['XO', 'TOL', 'PV', 'TD', 'PD', 'RSS', 'RKB', 'BR', 'FV', 'KOP', 'LCM', 'LOT', 'FIT', 'HD', 'LCM'];

  let config = {
    plotNames: plotNames
  };

  angular
    .module('zing')
    .value('config', config);
}