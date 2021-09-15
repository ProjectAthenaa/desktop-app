import React, {DetailedHTMLProps, InputHTMLAttributes, forwardRef} from 'react';
import './styles.scss';

// const Select = React.forwardRef<HTMLSelectElement, DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>>(({ children, ...rest}, ref) => (
const Input = forwardRef<HTMLInputElement, DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>>(({ ...rest}, ref) => (
  <input
    {...rest}
    className={`input-text ${rest.className}`}
    ref={ref}
  />
));

export default Input;
