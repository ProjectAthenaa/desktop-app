import React from 'react';
import './styles.scss';
import CheckoutsIcon from '../../../assets/images/icons/checkouts.icon.svg';
import DeclinesIcon from '../../../assets/images/icons/declines.icon.svg';
import SpentIcon from '../../../assets/images/icons/spent.icon.svg';
import TasksIcon from '../../../assets/images/icons/tasks.icon.svg';

const statisticTypes = {
  checkouts: {
    title: "Checkouts",
    icon: CheckoutsIcon
  },
  declines: {
    title: "Declines",
    icon: DeclinesIcon
  },
  spent: {
    title: "Spent",
    icon: SpentIcon
  },
  tasks: {
    title: "Tasks Ran",
    icon: TasksIcon
  }
};

export enum StatisticType {
  CHECKOUTS = 'checkouts',
  DECLINES = 'declines',
  SPENT = 'spent',
  TASKS = 'tasks',
}

export type Statistic = {
  type: StatisticType;
  value: string;
}


type Props = {
  statistic: Statistic
}

const Stat: React.FC<Props> = ({ statistic }) => {
  return (
    <div className={'statistic'}>
      <img src={statisticTypes[statistic.type].icon} />
      <div>
        <h3>{ statisticTypes[statistic.type].title }</h3>
        <p>{ statistic.value }</p>
      </div>
    </div>
  )
};

export default Stat;
