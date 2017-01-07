module zing {
  'use strict';

  const plotNames = ['XO', 'TOL', 'PV', 'TD', 'PD', 'RSS', 'RKB', 'BR', 'FV', 'KOP', 'LCM', 'LOT', 'FIT', 'HD', 'LCM', 'WOB', 'BLOCK', 'MSE', 'SURF RPM', 'SPM2'];

  const config = {
    plotNames: plotNames
  };

  angular
    .module('zing')
    .value('config', config);
}