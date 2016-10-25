module zing {
  'use strict';

  angular
    .module('zing')
    .controller('ChartController', ChartController);

  ChartController.$inject = ['config', 'chartService'];

  function ChartController(config: { plotNames: Array<string> }, chartService: { getCharts: any }): void {
    let vm = this;
    vm.addPlot = addPlot;
    vm.resetPlots = resetPlots;
    vm.myJson = chartService.getCharts();

    function generatePlots(): Array<number> {
      let arr: Array<number> = [];
      for (let i = 0; i < 10; i++) {
        arr.push(Math.floor((Math.random() * 100)));
      }
      return arr;
    }

    function generatePlotName(): string {
      let plotNames = config.plotNames;
      return plotNames[Math.floor(Math.random() * plotNames.length)];
    }

    function addPlot(): void {
      for (let i = 2; i < 7; i++) {
        let plotValues = generatePlots();
        let plotName = generatePlotName();
        let plot = {
          text: plotName,
          values: plotValues
        };
        vm.myJson.graphset[i].series.push(plot);
      }
    }

    function resetPlots(): void {
      for (let i = 2; i < 7; i++) {
        vm.myJson.graphset[i].series = [];
      }
    }
  }
}