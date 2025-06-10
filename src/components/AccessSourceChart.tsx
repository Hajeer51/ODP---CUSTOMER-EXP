import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

interface AccessSourceChartProps {
  healthScore?: number;
}

const AccessSourceChart: React.FC<AccessSourceChartProps> = ({ healthScore = 92 }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let chartInstance: echarts.ECharts | undefined;
    if (chartRef.current) {
      chartInstance = echarts.init(chartRef.current);
      const option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          top: 'center',
          right: 'right',
          data: ['Health', 'Other'],
          textStyle: {
            color: '#333'
          }
        },
        series: [
          {
            name: 'Health Score',
            type: 'pie',
            radius: ['45%', '75%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: false,
                fontSize: 40,
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: healthScore, name: 'Health', itemStyle: { color: '#00796b' } },
              { value: 100 - healthScore, name: 'Other', itemStyle: { color: '#cccccc' } }
            ]
          }
        ]
      };
      chartInstance.setOption(option);

      const handleResize = () => {
        chartInstance?.resize();
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        if (chartInstance) {
          chartInstance.dispose();
        }
      };
    }

    return () => {
      if (chartInstance) {
        chartInstance.dispose();
      }
    };
  }, [healthScore]);

  return (
    <div style={{ width: '100%', height: '200px' }} ref={chartRef}></div>
  );
};

export default AccessSourceChart; 