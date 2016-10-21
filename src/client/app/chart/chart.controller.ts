module zing {
  'use strict';

  angular
    .module('zing')
    .controller('ChartController', ChartController);

  ChartController.$inject = ['$scope'];

  function ChartController($scope: any): void {
    var vm = this;
    vm.addPlot = addPlot;

    $scope.myJson2 = {
      layout: 'x7',
      graphset: [{
        backgroundColor: '#000',
        type: 'vline',
        legend: {
          visible: false
        },
        scaleX: {
          mirrored: true,
          minValue: 0,
          maxValue: 90,
          step: 10,
          values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
        },
        scaleY: {
          visible: false
        },
        zoom: {
          shared: true
        },
        series: [{}]
      }, {
        backgroundColor: '#000',
        type: 'vline',
        legend: {
          visible: false
        },
        scaleX: {
          mirrored: true,
          values: [1244397600000, 1244397610000, 1244397620000, 1244397630000, 1244397640000, 1244397650000, 1244397660000, 1244397670000, 1244397680000, 1244397690000],
          transform: {
            type: 'date',
            all: '%M %d %h:%i:%s'
          }
        },
        scaleY: {
          visible: false
        },
        zoom: {
          shared: true
        },
        series: [{}]
      }, {
        type: 'vline',
        backgroundColor: '#000',
        legend: {
          backgroundColor: '#333',
          borderColor: '#222',
          visible: true,
          item: {
            fontColor: '#fff'
          },
          x: '50%',
          y: '0%'
        },
        scaleX: {
          mirrored: true,
          minValue: 0,
          maxValue: 90,
          step: 10,
          values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90],
          visible: false,
          zooming: true
        },
        scaleY: {
          visible: false
        },
        zoom: {
          shared: true
        },
        series: [{
          text: 'TQ',
          values: [59, 37, 82, 77, 59, 38, 97, 93, 31, 99]
        }, {
          text: 'WOB',
          values: [81, 100, 96, 4, 39, 28, 78, 9, 7, 73]
        }]
      }, {
        type: 'vline',
        backgroundColor: '#000',
        legend: {
          backgroundColor: '#333',
          borderColor: '#222',
          visible: true,
          item: {
            fontColor: '#fff'
          },
          x: '50%',
          y: '0%'
        },
        scaleX: {
          mirrored: true,
          minValue: 0,
          maxValue: 90,
          step: 10,
          values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90],
          visible: false,
          zooming: true
        },
        scaleY: {
          visible: false
        },
        zoom: {
          shared: true
        },
        series: [{
          text: 'BD',
          values: [59, 37, 82, 77, 59, 38, 97, 93, 31, 99]
        }, {
          text: 'BLOCK',
          values: [81, 100, 96, 4, 39, 28, 78, 9, 7, 73]
        }]
      }, {
        type: 'vline',
        backgroundColor: '#000',
        legend: {
          backgroundColor: '#333',
          borderColor: '#222',
          visible: true,
          item: {
            fontColor: '#fff'
          },
          x: '50%',
          y: '0%'
        },
        scaleX: {
          mirrored: true,
          minValue: 0,
          maxValue: 90,
          step: 10,
          values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90],
          visible: false,
          zooming: true
        },
        scaleY: {
          visible: false
        },
        zoom: {
          shared: true
        },
        series: [{
          text: 'MD',
          values: [59, 37, 82, 77, 59, 38, 97, 93, 31, 26]
        }, {
          text: 'MSE',
          values: [81, 100, 96, 4, 39, 28, 78, 9, 7, 73]
        }]
      }, {
        type: 'vline',
        backgroundColor: '#000',
        legend: {
          backgroundColor: '#333',
          borderColor: '#222',
          visible: true,
          item: {
            fontColor: '#fff'
          },
          x: '50%',
          y: '0%'
        },
        scaleX: {
          mirrored: true,
          minValue: 0,
          maxValue: 90,
          step: 10,
          values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90],
          visible: false,
          zooming: true
        },
        scaleY: {
          visible: false
        },
        zoom: {
          shared: true
        },
        series: [{
          text: 'ROPA',
          values: [59, 37, 82, 77, 59, 38, 97, 93, 31, 26]
        }, {
          text: 'SURF RPM',
          values: [81, 100, 96, 4, 39, 28, 78, 9, 7, 73]
        }]
      }, {
        type: 'vline',
        backgroundColor: '#000',
        legend: {
          backgroundColor: '#333',
          borderColor: '#222',
          visible: true,
          item: {
            fontColor: '#fff'
          },
          x: '50%',
          y: '0%'
        },
        scaleX: {
          mirrored: true,
          minValue: 0,
          maxValue: 90,
          step: 10,
          values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90],
          visible: false,
          zooming: true
        },
        scaleY: {
          visible: false
        },
        zoom: {
          shared: true
        },
        series: [{
          text: 'SPM1',
          values: [59, 37, 82, 77, 59, 38, 97, 93, 31, 26]
        }, {
          text: 'SPM2',
          values: [81, 100, 96, 4, 39, 28, 78, 9, 7, 73]
        }]
      }]
    };

    function generatePlots() {
      var arr: Array < any > = [];
      for (var i = 0; i < 10; i++) {
        arr.push(Math.floor((Math.random() * 100)));
      }
      return arr;
    }

    function addPlot() {
      var plot = generatePlots();
      var test = {
        text: 'SPM1',
        values: plot
      };
      $scope.myJson2.graphset[2].series.push(test);
    }
  }
}