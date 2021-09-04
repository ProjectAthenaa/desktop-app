import React from 'react';
import './styles.scss';

const FormItem: React.FC = ({ children}) => {
  return (
    <div className={'form-item'}>
      { children }
    </div>
  );
};

export default FormItem;
