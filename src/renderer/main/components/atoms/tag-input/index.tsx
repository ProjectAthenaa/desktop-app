import React from 'react';
import './styles.scss';
import {WithContext as ReactTags, ReactTagsProps} from 'react-tag-input';

interface Props extends ReactTagsProps {
  type: 'positive' | 'negative'
}

const TagInput: React.FC<Props> = ({ type, ...rest}) => {
  return (
    <div className={`tag-input ${type}`}>
      <ReactTags {...rest} />
    </div>
  );
}

export default TagInput;
