import React from 'react';
import './styles.scss';
import {useTable} from 'react-table';

export enum ActionColor {
  RED = 'red',
  GREEN = 'green'
}

export type Action = {
  onClick: (id?: string) => void;
  icon: JSX.Element;
  color?: ActionColor;
}

type Props = {
  columns: { Header: string; accessor: string }[];
  data: Record<string, unknown>[];
  actions: Action[];
}

const FloatingHeaderTable: React.FC<Props> = ({columns, data, actions}) => {
  const table = useTable({columns, data});
  const {headerGroups, rows, prepareRow} = table;

  return (
    <table className={'floating-header-table'}>
      <thead>
      {headerGroups.map(headerGroup => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column => (
            <th {...column.getHeaderProps()}>
              {column.render('Header')}
            </th>
          ))}
          <th className={`actions count-${actions.length}`}>
            <div className="actions-layout">
              {actions.map((action, index) => (
                <button
                  key={index}
                  className={action.color ? action.color : ''}
                  onClick={() => action.onClick()}>
                  {action.icon}
                </button>
              ))}
            </div>
          </th>
        </tr>
      ))}
      </thead>
      <tbody>
      {rows.map((row, rowIndex) => {
        prepareRow(row);
        return (
          <tr {...row.getRowProps()}>
            {row.cells.map(cell => (
              <td {...cell.getCellProps()}>
                {cell.render('Cell')}
              </td>
            ))}
            <td className={`actions count-${actions.length}`}>
              <div className="actions-layout">
                {actions.map((action, index) => (
                  <button
                    key={index}
                    className={action.color ? action.color : ''}
                    onClick={() => action.onClick(data[rowIndex].id as string)}>
                    {action.icon}
                  </button>
                ))}
              </div>
            </td>
          </tr>
        );
      })}
      </tbody>
    </table>
  );
};

export default FloatingHeaderTable;
