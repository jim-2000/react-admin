import { Chart } from "chart.js";
import ReactApexChart from "react-apexcharts";

 

const data = [
    { name: 'Dhaka', value: 400 },
    { name: 'Chittagong', value: 300 },
    { name: 'Borisal', value: 300 },
    { name: 'Sylhet', value: 200 },
  ];
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  
  const RADIAN = Math.PI / 180;
 
function PieChartSales() {
    const chartLabels = data.map((i) => i.name);

    const chartSeries = data.map((i) => i.value);
    const chartOptions  ={
        colors:COLORS,
        chart: {
            width: 380,
            type: 'pie',
          },
        labels:chartLabels,
        legend: { floating: false, horizontalAlign: 'center',position:'bottom' },
        responsive: [{
            breakpoint: 576,
            options: {
              chart: {
                width: 380
              },
              legend: {
                position: 'bottom'
              }
            }
        },{
            breakpoint: 768,
            options: {
              chart: {
                width: 500
              },
              legend: {
                position: 'bottom'
              }
            }
        }],
        plotOptions: {
            pie: { donut: { labels: { show: false } } },
        },
    }
    return (
    <> 
        <ReactApexChart 
        options={chartOptions}
        height={340}
        series={chartSeries}
        type="pie"
        /> 
    </>
    );
}

export default PieChartSales