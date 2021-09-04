import React, {DetailedHTMLProps, SelectHTMLAttributes} from 'react';
import './styles.scss';

const Select: React.FC<DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>> = ({ children, ...rest }) => {
  return (
    <select {...rest} className={'select'}>
      { children }
    </select>
  );
}

export default Select;
