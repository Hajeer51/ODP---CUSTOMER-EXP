import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import type { EChartsType } from 'echarts';

const AccessSourceChart = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let chartInstance: EChartsType | null = null;

    if (chartRef.current) {
      chartInstance = echarts.init(chartRef.current);

      const option = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            padAngle: 5,
            itemStyle: {
              borderRadius: 10
            },
            label: {
              show: true,
              formatter: '{d}%',
              position: 'outer',
              alignTo: 'labelLine',
              bleedMargin: 5,
              fontSize: 14,
              fontWeight: 'bold',
              color: '#333'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 40,
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: true
            },
            data: [
              { value: 65, name: 'Health' },
              { value: 35, name: 'Other' }
            ],
            color: ['#388e3c', '#9e9e9e']
          }
        ]
      };

      chartInstance.setOption(option);
    }

    return () => {
      chartInstance?.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: '100%', height: '250px' }}></div>;
};

export default AccessSourceChart; 