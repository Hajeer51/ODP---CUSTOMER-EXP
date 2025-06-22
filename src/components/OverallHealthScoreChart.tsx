import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

interface OverallHealthScoreChartProps {
  healthScore?: number;
}

const OverallHealthScoreChart: React.FC<OverallHealthScoreChartProps> = ({ healthScore = 92 }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let chartInstance: echarts.ECharts | undefined;
    if (chartRef.current) {
      chartInstance = echarts.init(chartRef.current);
      const option = {
        title: {
          text: `${healthScore.toFixed(0)}`,
          subtext: 'Health',
          left: 'center',
          top: '40%',
          textStyle: {
            fontSize: 36,
            fontWeight: 'bold',
            color: '#333'
          },
          subtextStyle: {
            fontSize: 14,
            color: '#666'
          }
        },
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
            radius: ['60%', '80%'],
            center: ['50%', '50%'],
            startAngle: 180,
            endAngle: 360,
            avoidLabelOverlap: false,
            itemStyle: {
              borderWidth: 0
            },
            label: {
              show: false
            },
            emphasis: {
              scale: false
            },
            labelLine: {
              show: false
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

export default OverallHealthScoreChart; 