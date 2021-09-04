import React, {DetailedHTMLProps, LabelHTMLAttributes} from 'react';
import './styles.scss';

const Label: React.FC<DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>> = ({ children, ...rest}) => {
  return (
    <label className={'label'} {...rest}>
      { children }
    </label>
  );
};

export default Label;
