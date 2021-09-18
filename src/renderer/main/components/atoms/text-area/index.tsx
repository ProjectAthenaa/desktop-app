import React, {DetailedHTMLProps, TextareaHTMLAttributes} from 'react';
import './styles.scss';

const TextArea: React.FC<DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>> = ({ ...rest }) => {
  return (
    <textarea {...rest} className={`text-area ${rest.className ? rest.className : ''}`} />
  );
}

export default TextArea;
