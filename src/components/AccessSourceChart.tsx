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
          trigger: 'item'
        },
        legend: {
          orient: 'horizontal',
          bottom: '0',
          left: 'center',
          data: ['Health', 'Other'],
          textStyle: {
            color: '#333',
            fontSize: 14
          }
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            center: ['50%', '70%'],
            startAngle: 180,
            endAngle: 0,
            avoidLabelOverlap: false,
            itemStyle: {
              borderWidth: 0
            },
            label: {
              show: true,
              position: 'outside',
              formatter: '{d}%'
            },
            emphasis: {
              label: {
                show: false,
                fontSize: 40,
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: true
            },
            data: [
              { value: healthScore, name: 'Health', itemStyle: { color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: '#4CAF50' }, { offset: 1, color: '#00796b' }]) } },
              { value: 100 - healthScore, name: 'Other', itemStyle: { color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: '#bdbdbd' }, { offset: 1, color: '#8d8d8d' }]) } }
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