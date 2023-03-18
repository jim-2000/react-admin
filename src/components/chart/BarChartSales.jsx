import ReactApexChart from "react-apexcharts";

 
  const BarChartSales = () => {
   const state = {          
      series: [{
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
      }],
      options: {
        chart: {
          type: 'bar',
          height: 350,
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: false,
            columnWidth:'26%',
            colors: {
              ranges: [
                {
                  from: 0,
                  to: 700,
                  color: '#FD3D57'
                },
                {
                  from: 700,
                  to: 1200,
                  color: '#0694A2'
                },
                {
                  from: 1200,
                  to: 2000,
                  color: '#0a91A2'
                },               
              ],
              backgroundBarColors: [],
              backgroundBarOpacity: 1,
              backgroundBarRadius: 0,
            },
          },
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
      },
    
    
    };
  


    return (
      <>
      <ReactApexChart options={state.options} series={state.series} type="bar" height={350} />
      </>
    );
  }
  
  export default BarChartSales