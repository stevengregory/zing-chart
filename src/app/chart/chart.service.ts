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

    function getCharts(): Object {
      function test() {
        return 'test';
      }
      return {
        layout: 'x7',
        graphset: [{
          type: 'vline',
          plotarea: {
            marginTop: '12%'
          },
          backgroundColor: '#000',
          legend: {
            width: '55px',
            backgroundColor: '#222',
            borderTop: 'red',
            item: {
              fontColor: '#fff',
              height: '60px',
              x: '-12%'
            },
            marker: {
              visible: 'false'
            },
            x: '0%',
            y: '0%'
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
          series: [{
            text: 'MD',
          }]
        }, {
          type: 'vline',
          plotarea: {
            marginTop: '12%'
          },
          backgroundColor: '#000',
          legend: {
            backgroundColor: '#222',
            borderTop: 'red',
            item: {
              fontColor: '#fff',
              marginRight: '-25px',
              height: '60px'
            },
            marker: {
              visible: 'false'
            },
            x: '-32%',
            y: '0%'
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
          series: [{
            text: 'Date-Time',
          }]
        }, {
          type: 'vline',
          id: 'ninja',
          'dnd-list': '',
          'dnd-drop': function dropCallback() {
            console.log('drop');
          },
          plotarea: {
            marginTop: '10%',
            marginLeft: '15%',
            marginRight: '15%',
            x: '-20%',
            y: '12%'
          },
          backgroundColor: '#000',
          legend: {
            header: {
              backgroundColor: '#222',
              borderLeft: '2px solid #111',
              borderRight: '2px solid #111',
              borderTop: '2px solid #111',
              borderBottom: '2px solid #111',
              color: '#fff',
              fontSize: '12px',
              height: '30px',
              paddingBottom: '10px',
              text: 'Track 1'
            },
            maxItems: 2,
            overflow: 'scroll',
            scroll: {
              bar: {
                backgroundColor: '#444',
                borderLeft: '1px solid #222',
                borderRight: '1px solid #222',
                borderTop: '1px solid #222',
                borderBottom: '1px solid #222',
              },
              handle: {
                backgroundColor: '#333',
                borderLeft: '2px solid #222',
                borderRight: '2px solid #222',
                borderTop: '2px solid #222',
                borderBottom: '2px solid #222',
                borderRadius: '15px'
              }
            },
            backgroundColor: '#000',
            borderColor: '#111',
            visible: true,
            item: {
              fontColor: '#fff',
              height: '15px'
            },
            width: '73%',
            x: '-20%',
            y: '0%'
          },
          scaleX: {
            mirrored: true,
            minValue: 0,
            maxValue: 90,
            step: 10,
            values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90],
            visible: true,
            zooming: true,
            guide: {
              visible: true,
              lineColor: '#7aabb7',
              lineStyle: 'dotted',
              lineGapSize: '4px'
            },
            lineColor: '#7aabb7',
            lineStyle: 'dotted',
            lineGapSize: '4px',
            tick: {
              lineColor: '#000'
            },
            item: {
              fontColor: '#000'
            }
          },
          scaleY: {
            visible: true,
            guide: {
              visible: true,
              lineColor: '#7aabb7',
              lineStyle: 'dotted',
              lineGapSize: '4px'
            },
            lineColor: '#7aabb7',
            lineStyle: 'dotted',
            lineGapSize: '4px',
            tick: {
              lineColor: '#000'
            },
            item: {
              fontColor: '#000'
            }
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
            marginTop: '10%',
            marginLeft: '15%',
            marginRight: '15%',
            x: '-20%',
            y: '12%'
          },
          backgroundColor: '#000',
          legend: {
            header: {
              backgroundColor: '#222',
              borderLeft: '2px solid #111',
              borderRight: '2px solid #111',
              borderTop: '2px solid #111',
              borderBottom: '2px solid #111',
              color: '#fff',
              fontSize: '12px',
              height: '30px',
              paddingBottom: '10px',
              text: 'Track 2'
            },
            maxItems: 2,
            overflow: 'scroll',
            scroll: {
              bar: {
                backgroundColor: '#444',
                borderLeft: '1px solid #222',
                borderRight: '1px solid #222',
                borderTop: '1px solid #222',
                borderBottom: '1px solid #222',
              },
              handle: {
                backgroundColor: '#333',
                borderLeft: '2px solid #222',
                borderRight: '2px solid #222',
                borderTop: '2px solid #222',
                borderBottom: '2px solid #222',
                borderRadius: '15px'
              }
            },
            backgroundColor: '#000',
            borderColor: '#111',
            visible: true,
            item: {
              fontColor: '#fff',
              height: '15px'
            },
            width: '73%',
            x: '-20%',
            y: '0%'
          },
          scaleX: {
            mirrored: true,
            minValue: 0,
            maxValue: 90,
            step: 10,
            values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90],
            visible: true,
            zooming: true,
            guide: {
              visible: true,
              lineColor: '#7aabb7',
              lineStyle: 'dotted',
              lineGapSize: '4px'
            },
            lineColor: '#7aabb7',
            lineStyle: 'dotted',
            lineGapSize: '4px',
            tick: {
              lineColor: '#000'
            },
            item: {
              fontColor: '#000'
            }
          },
          scaleY: {
            visible: true,
            guide: {
              visible: true,
              lineColor: '#7aabb7',
              lineStyle: 'dotted',
              lineGapSize: '4px'
            },
            lineColor: '#7aabb7',
            lineStyle: 'dotted',
            lineGapSize: '4px',
            tick: {
              lineColor: '#000'
            },
            item: {
              fontColor: '#000'
            }
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
            marginTop: '10%',
            marginLeft: '15%',
            marginRight: '15%',
            x: '-20%',
            y: '12%'
          },
          backgroundColor: '#000',
          legend: {
            header: {
              backgroundColor: '#222',
              borderLeft: '2px solid #111',
              borderRight: '2px solid #111',
              borderTop: '2px solid #111',
              borderBottom: '2px solid #111',
              color: '#fff',
              fontSize: '12px',
              height: '30px',
              paddingBottom: '10px',
              text: 'Track 3'
            },
            maxItems: 2,
            overflow: 'scroll',
            scroll: {
              bar: {
                backgroundColor: '#444',
                borderLeft: '1px solid #222',
                borderRight: '1px solid #222',
                borderTop: '1px solid #222',
                borderBottom: '1px solid #222',
              },
              handle: {
                backgroundColor: '#333',
                borderLeft: '2px solid #222',
                borderRight: '2px solid #222',
                borderTop: '2px solid #222',
                borderBottom: '2px solid #222',
                borderRadius: '15px'
              }
            },
            backgroundColor: '#000',
            borderColor: '#111',
            visible: true,
            item: {
              fontColor: '#fff',
              height: '15px'
            },
            width: '73%',
            x: '-20%',
            y: '0%'
          },
          scaleX: {
            mirrored: true,
            minValue: 0,
            maxValue: 90,
            step: 10,
            values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90],
            visible: true,
            zooming: true,
            guide: {
              visible: true,
              lineColor: '#7aabb7',
              lineStyle: 'dotted',
              lineGapSize: '4px'
            },
            lineColor: '#7aabb7',
            lineStyle: 'dotted',
            lineGapSize: '4px',
            tick: {
              lineColor: '#000'
            },
            item: {
              fontColor: '#000'
            }
          },
          scaleY: {
            visible: true,
            guide: {
              visible: true,
              lineColor: '#7aabb7',
              lineStyle: 'dotted',
              lineGapSize: '4px'
            },
            lineColor: '#7aabb7',
            lineStyle: 'dotted',
            lineGapSize: '4px',
            tick: {
              lineColor: '#000'
            },
            item: {
              fontColor: '#000'
            }
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
            marginTop: '10%',
            marginLeft: '15%',
            marginRight: '15%',
            x: '-20%',
            y: '12%'
          },
          backgroundColor: '#000',
          legend: {
            header: {
              backgroundColor: '#222',
              borderLeft: '2px solid #111',
              borderRight: '2px solid #111',
              borderTop: '2px solid #111',
              borderBottom: '2px solid #111',
              color: '#fff',
              fontSize: '12px',
              height: '30px',
              paddingBottom: '10px',
              text: 'Track 4'
            },
            maxItems: 2,
            overflow: 'scroll',
            scroll: {
              bar: {
                backgroundColor: '#444',
                borderLeft: '1px solid #222',
                borderRight: '1px solid #222',
                borderTop: '1px solid #222',
                borderBottom: '1px solid #222',
              },
              handle: {
                backgroundColor: '#333',
                borderLeft: '2px solid #222',
                borderRight: '2px solid #222',
                borderTop: '2px solid #222',
                borderBottom: '2px solid #222',
                borderRadius: '15px'
              }
            },
            backgroundColor: '#000',
            borderColor: '#111',
            visible: true,
            item: {
              fontColor: '#fff',
              height: '15px'
            },
            width: '73%',
            x: '-20%',
            y: '0%'
          },
          scaleX: {
            mirrored: true,
            minValue: 0,
            maxValue: 90,
            step: 10,
            values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90],
            visible: true,
            zooming: true,
            guide: {
              visible: true,
              lineColor: '#7aabb7',
              lineStyle: 'dotted',
              lineGapSize: '4px'
            },
            lineColor: '#7aabb7',
            lineStyle: 'dotted',
            lineGapSize: '4px',
            tick: {
              lineColor: '#000'
            },
            item: {
              fontColor: '#000'
            }
          },
          scaleY: {
            visible: true,
            guide: {
              visible: true,
              lineColor: '#7aabb7',
              lineStyle: 'dotted',
              lineGapSize: '4px'
            },
            lineColor: '#7aabb7',
            lineStyle: 'dotted',
            lineGapSize: '4px',
            tick: {
              lineColor: '#000'
            },
            item: {
              fontColor: '#000'
            }
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
            marginTop: '10%',
            marginLeft: '15%',
            marginRight: '15%',
            x: '-20%',
            y: '12%'
          },
          backgroundColor: '#000',
          legend: {
            header: {
              backgroundColor: '#222',
              borderLeft: '2px solid #111',
              borderRight: '2px solid #111',
              borderTop: '2px solid #111',
              borderBottom: '2px solid #111',
              color: '#fff',
              fontSize: '12px',
              height: '30px',
              paddingBottom: '10px',
              text: 'Track 5'
            },
            maxItems: 2,
            overflow: 'scroll',
            scroll: {
              bar: {
                backgroundColor: '#444',
                borderLeft: '1px solid #222',
                borderRight: '1px solid #222',
                borderTop: '1px solid #222',
                borderBottom: '1px solid #222',
              },
              handle: {
                backgroundColor: '#333',
                borderLeft: '2px solid #222',
                borderRight: '2px solid #222',
                borderTop: '2px solid #222',
                borderBottom: '2px solid #222',
                borderRadius: '15px'
              }
            },
            backgroundColor: '#000',
            borderColor: '#111',
            visible: true,
            item: {
              fontColor: '#fff',
              height: '15px'
            },
            width: '73%',
            x: '-20%',
            y: '0%'
          },
          scaleX: {
            mirrored: true,
            minValue: 0,
            maxValue: 90,
            step: 10,
            values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90],
            visible: true,
            zooming: true,
            guide: {
              visible: true,
              lineColor: '#7aabb7',
              lineStyle: 'dotted',
              lineGapSize: '4px'
            },
            lineColor: '#7aabb7',
            lineStyle: 'dotted',
            lineGapSize: '4px',
            tick: {
              lineColor: '#000'
            },
            item: {
              fontColor: '#000'
            }
          },
          scaleY: {
            visible: true,
            guide: {
              visible: true,
              lineColor: '#7aabb7',
              lineStyle: 'dotted',
              lineGapSize: '4px'
            },
            lineColor: '#7aabb7',
            lineStyle: 'dotted',
            lineGapSize: '4px',
            tick: {
              lineColor: '#000'
            },
            item: {
              fontColor: '#000'
            }
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