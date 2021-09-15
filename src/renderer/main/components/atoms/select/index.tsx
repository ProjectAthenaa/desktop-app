import React, {DetailedHTMLProps, SelectHTMLAttributes} from 'react';
import './styles.scss';
import {useFormContext} from 'react-hook-form';
import {ProfileCreation} from '../../../../../types/profile';

// const Select: React.FC<DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>> = ({ children, ...rest }) => {
const Select = React.forwardRef<HTMLSelectElement, DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>>(({ children, ...rest}, ref) => (
    <select {...rest} className={`select ${rest.className}`} ref={ref}>
      { children }
    </select>
));

export default Select;
