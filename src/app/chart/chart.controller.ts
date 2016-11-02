module zing {
  'use strict';

  angular
    .module('zing')
    .controller('ChartController', ChartController);

  ChartController.$inject = ['config', 'chartService'];

  function ChartController(config: {
    plotNames: Array < string >
  }, chartService: {
    getCharts: any
  }): void {
    let vm = this;
    vm.addPlot = addPlot;
    vm.myJson = chartService.getCharts();
    vm.dropCallback = dropCallback;
    vm.dragCallback = dragCallback;
    vm.plots = config.plotNames;
    vm.zoomIn = zoomIn;
    vm.zoomOut = zoomOut;

    function randomPlot(): Object {
      let plot = {
        text: generatePlotName(),
        values: generatePlots()
      };
      return plot;
    }

    function dragCallback(plotName: string): string {
      vm.plotName = plotName;
      return vm.plotName;
    }

    function dropCallback(chartId: number): void {
      let plot = {
        text: vm.plotName,
        values: generatePlots()
      };
      vm.myJson.graphset[chartId].series.push(plot);
    }

    function generatePlots(): Array < number > {
      let arr: Array < number > = [];
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
        let plot = randomPlot();
        vm.myJson.graphset[i].series.push(plot);
      }
    }

    function zoomIn(): void {
      zingchart.exec('myChart', 'zoomin', {
        graphid: 2,
        zoomx: true,
        zoomy: true
      });
    }

    function zoomOut(): void {
      zingchart.exec('myChart', 'zoomout', {
        graphid: 2,
        zoomx: true,
        zoomy: true
      });
    }
  }
}