import React from 'react';
import './styles.scss';
import DashChart from '../../components/organisms/dash-chart';
import Stat, {StatisticType} from '../../components/molecules/stat';

const Dashboard: React.FC = () => {
  return (
    <div className={'dashboard-page'}>
      <div className="stats">
        <div className={'stat-grid'}>
          <Stat
            statistic={{
              type: StatisticType.CHECKOUTS,
              value: '2021'
            }}
          />
          <Stat
            statistic={{
              type: StatisticType.DECLINES,
              value: '2021'
            }}
          />
          <Stat
            statistic={{
              type: StatisticType.TASKS,
              value: '4042'
            }}
          />
          <Stat
            statistic={{
              type: StatisticType.SPENT,
              value: '$22,021'
            }}
          />
        </div>
        <DashChart />
        <div style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h2>This is a light preview of the dashboard. The data is static and won't update, for now.</h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
