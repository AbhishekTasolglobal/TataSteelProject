// ** Third Party Components
import Chart from 'react-apexcharts'
import Flatpickr from 'react-flatpickr'
import { Calendar } from 'react-feather'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'
import '@styles/react/libs/flatpickr/flatpickr.scss'

const NWOChart = ({ direction }) => {
  const columnColors = {
    series1: '#826af9',
    series2: '#d2b0ff',
    bg: '#f8d3ff'
  }

  // ** Chart Options
  const options = {
    chart: {
      // width:50,
      height: 10,
      type: 'bar',
      // stacked: true,
      parentHeightOffset: 0,
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '30%',
        colors: {
        //   backgroundBarColors: [columnColors.bg, columnColors.bg, columnColors.bg, columnColors.bg, columnColors.bg],
        //   backgroundBarRadius: 10
        }
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      // position: '',
      horizontalAlign: 'start'
    },
    // colors: [columnColors.series1, columnColors.series2],
    stroke: {
      // show: true,
      colors: ['transparent']
    },
    grid: {
      xaxis: {
        // lines: {
        //   show: true
        // }
      }
    },
    xaxis: {
      categories: ['7/12', '8/12', '9/12', '10/12', '11/12', '12/12','13/12']
    },
    fill: {
      opacity: 1
    },
    yaxis: {
      opposite: direction === 'rtl'
    }
  }

  // ** Chart Series
  const series = [
    {
      name: 'New Work Order',
      data: [5, 10, 12, 4, 3, 7,9]
    },
    // {
    //   // name: 'Samsung',
    //   data: [5, 10, 8, 6, 3]
    // }
  ]

  return (
    <Card>
      <CardHeader className='d-flex flex-md-row flex-column justify-content-md-between justify-content-start align-items-md-center align-items-start'>
        {/* <CardTitle tag='h4'>Data Science</CardTitle> */}
        <div className='d-flex align-items-center mt-md-0 mt-1'>
          {/* <Calendar size={17} /> */}
          {/* <Flatpickr
            className='form-control flat-picker bg-transparent border-0 shadow-none'
            options={{
              // mode: 'range',
              // eslint-disable-next-line no-mixed-operators
              defaultDate: [new Date(), new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000)]
            }}
          /> */}
        </div>
      </CardHeader>
      <CardBody>
        <Chart options={options} series={series} type='bar' width={500} height={150} />
      </CardBody>
    </Card>
  )
}

export default NWOChart

