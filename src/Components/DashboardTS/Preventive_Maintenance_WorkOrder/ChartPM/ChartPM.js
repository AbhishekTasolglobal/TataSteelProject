// ** Third Party Components
import Chart from 'react-apexcharts'
import Flatpickr from 'react-flatpickr'
import { Calendar } from 'react-feather'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'
import '@styles/react/libs/flatpickr/flatpickr.scss'

const ChartPM = ({ direction }) => {
  const columnColors = {
    open: '#D3D3D3',
    series2: '#5A5A5A',
    bg: '#ff5733'
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
        columnWidth: '35%',
        colors: {
        //   backgroundBarColors: [columnColors.bg, columnColors.bg, columnColors.bg, columnColors.bg, columnColors.bg],
          // backgroundBarRadius: 10
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
    colors: [columnColors.open, columnColors.series2],
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
  const open = [
    {
      name: 'Open',
      data: [5, 10, 12, 4, 3, 7,9]
    },
    {
      name: 'Closed',
      data: [7,5, 10, 8, 6, 3,2]
    }
  ]

  return (
    <Card style={{ height: "11rem" }}>
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
        <Chart options={options} series={open} type='bar' width={400} height={150} />
      </CardBody>
    </Card>
  )
}

export default ChartPM


