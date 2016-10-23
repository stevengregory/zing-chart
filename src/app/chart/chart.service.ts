module zing {
  'use strict';

  angular
    .module('zing')
    .service('chartService', chartService);

  function chartService() {
    let service = {
      getCharts: getCharts
    };
    return service;

    function getCharts() {
      return {
        layout: 'x7',
        graphset: [{
          type: 'vline',
          plotarea: {
            marginTop: '10%'
          },
          backgroundColor: '#000',
          legend: {
            visible: false
          },
          scaleX: {
            lineColor: '#7aabb7',
            mirrored: true,
            minValue: 0,
            maxValue: 90,
            step: 10,
            values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90],
            tick: {
              lineColor: '#7aabb7'
            },
            item: {
              fontColor: '#7aabb7'
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
          plotarea: {
            marginTop: '10%'
          },
          backgroundColor: '#000',
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
          plotarea: {
            marginTop: '10%'
          },
          backgroundColor: '#000',
          legend: {
            backgroundColor: '#333',
            borderColor: '#222',
            visible: true,
            item: {
              fontColor: '#fff'
            },
            x: '25%',
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
            values: [7, 37, 82, 7, 59, 38, 97, 93, 31, 88]
          }]
        }, {
          type: 'vline',
          plotarea: {
            marginTop: '10%'
          },
          backgroundColor: '#000',
          legend: {
            backgroundColor: '#333',
            borderColor: '#222',
            visible: true,
            item: {
              fontColor: '#fff'
            },
            x: '25%',
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
            values: [2, 37, 82, 53, 8, 38, 97, 48, 31, 99]
          }]
        }, {
          type: 'vline',
          plotarea: {
            marginTop: '10%'
          },
          backgroundColor: '#000',
          legend: {
            backgroundColor: '#333',
            borderColor: '#222',
            visible: true,
            item: {
              fontColor: '#fff'
            },
            x: '25%',
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
            values: [59, 3, 82, 77, 13, 38, 97, 93, 31, 26]
          }]
        }, {
          type: 'vline',
          plotarea: {
            marginTop: '10%'
          },
          backgroundColor: '#000',
          legend: {
            backgroundColor: '#333',
            borderColor: '#222',
            visible: true,
            item: {
              fontColor: '#fff'
            },
            x: '25%',
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
            values: [59, 37, 82, 21, 59, 56, 97, 93, 31, 11]
          }]
        }, {
          type: 'vline',
          plotarea: {
            marginTop: '10%'
          },
          backgroundColor: '#000',
          legend: {
            backgroundColor: '#333',
            borderColor: '#222',
            visible: true,
            item: {
              fontColor: '#fff'
            },
            x: '25%',
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
            values: [59, 37, 82, 1, 59, 14, 97, 93, 31, 99]
          }]
        }]
      };
    }
  }
}