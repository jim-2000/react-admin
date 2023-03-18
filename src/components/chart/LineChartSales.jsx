import React from 'react'
import ReactApexChart from 'react-apexcharts';

const LineChartSales = () => {
    const COLORS = ['#FD3D57', '#0088FE', '#FFBB28', '#FF8042','#00C49F',];
    const chartoptions ={          
        series: [{
            name: "Stack shop 2023",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }],
        options: {
          chart: {
            height: 350,
            type: 'line',
            zoom: {
              enabled: false
            }
          },
          colors: ["#00C49F", "#247BA0"],
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth',
          },
          title: {
            text: '',
            align: 'left'
          },
          grid: {
            row: {
              colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
            },
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
          },
          markers: {
            size: 6,
            colors: ['#FF8042'],
            strokeColors: '#fff',
            strokeWidth: 2,
            strokeOpacity: 0.9,
            strokeDashArray: 0,
            fillOpacity: 1,
            discrete: [],
            shape: "circle",
            radius: 2,
            offsetX: 0,
            offsetY: 0,
            onClick: undefined,
            onDblClick: undefined,
            showNullDataPoints: true,
            hover: {
              size: 7,
              sizeOffset: 3
            }
        }
        },
      };
    
  
              
      return(
        <>
          <ReactApexChart options={chartoptions.options} series={chartoptions.series} type="line" height={350} />
        </ >
      );
}

export default LineChartSales