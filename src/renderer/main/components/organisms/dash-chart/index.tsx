import React from 'react';
import Chart  from 'react-apexcharts';
import './styles.scss';
import Select from '../../atoms/select';

const DashChart: React.FC = () => (
  <div className={'dash-chart'}>
    <div className="chart-menu">
      <Select>
        <option value="">All Time</option>
      </Select>

      <div className={'legend'}>
        <div className="legend-item green">
          <div className="indicator" />
          <p>Checkouts</p>
        </div>
        <div className="legend-item">
          <div className="indicator" />
          <p>Declines</p>
        </div>
        <div className="legend-item green">
          <div className="indicator" />
          <p>Checkouts</p>
        </div>
        <div className="legend-item blue">
          <div className="indicator" />
          <p>Checkouts</p>
        </div>
      </div>
    </div>
    <Chart
      options={{
        legend: {
          show: false,
        },
        chart: {
          height: 350,
          type: 'area',
          stacked: true,
          toolbar: {
            show: false,
          },
        },
        colors: ['#5ba75b', '#a75b5b'],
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth',
          width: 2
        },
        xaxis: {
          type: 'datetime',
          categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
      }}
      series={[{
        name: 'Checkouts',
        data: [31, 40, 28, 51, 42, 109, 100],
      }, {
        name: 'Declines',
        data: [11, 32, 45, 32, 34, 52, 41]
      }]}
      type="area"
      height={250} />
  </div>
);

export default DashChart;
