import React, {useState} from 'react';
import './styles.scss';
import {useTable} from 'react-table';
import LogoLoadingIndicator from '../../atoms/logo-loading-indicator';
import TextTransition, {presets} from 'react-text-transition';

export enum ActionColor {
  RED = 'red',
  GREEN = 'green'
}

export type Action = {
  onClick: (id?: string) => void;
  icon: JSX.Element;
  color?: ActionColor;
  hideHead?: boolean;
  hideBody?: boolean;
}

type Props = {
  columns: { Header: string; accessor: string }[];
  data: Record<string, unknown>[];
  actions: Action[];
  loadingContent: boolean;
}

const FloatingHeaderTable: React.FC<Props> = ({columns, data, actions, loadingContent}) => {
  const table = useTable({columns, data});
  const [hiddenShown, setHiddenShown] = useState(false);
  const {headerGroups, rows, prepareRow} = table;

  if (loadingContent) return (
    <div className={'table-loader'}>
      <LogoLoadingIndicator/>
    </div>
  )

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
              {actions
                .filter(action => !action.hideHead)
                .map((action, index) => (
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
            {row.cells.map((cell, index) => (
              <td {...cell.getCellProps()} className={columns[index].accessor === 'Password' ? `hidden ${hiddenShown ? 'shown' : ''}` : ''}>
                <span
                  onClick={() => {
                    if (columns[index].accessor === 'Password') setHiddenShown(!hiddenShown)
                  }}
                >{ cell.value }</span>
                {/*<TextTransition*/}
                {/*  text={cell.value ? cell.value : ''}*/}
                {/*  inline*/}
                {/*  noOverflow*/}
                {/*  springConfig={presets.wobbly}/>*/}
              </td>
            ))}
            <td className={`actions count-${actions.length}`}>
              <div className="actions-layout">
                {actions
                  .filter(action => !action.hideBody)
                  .map((action, index) => (
                  <button
                    key={index}
                    className={action.color ? action.color : ''}
                    onClick={() => action.onClick(data[rowIndex].ID as string)}>
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
