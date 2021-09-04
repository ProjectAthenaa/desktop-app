import React, {useState} from 'react';
import './styles.scss';
import Select from '../../components/atoms/select';
import Label from '../../components/atoms/label';
import FormItem from '../../components/atoms/form-item';
import TagInput from '../../components/atoms/tag-input';

const Dashboard: React.FC = () => {
  const [tags, setTags] = useState([]);
  const KeyCodes = {
    comma: 188,
    enter: [10, 13],
  };
  const delimiters = [...KeyCodes.enter, KeyCodes.comma];
  return (
    <>
      <FormItem>
        <Label htmlFor={'select'}>Select</Label>
        <Select id={'select'}>
          <option>Test1</option>
          <option>Test1</option>
          <option>Test1</option>
          <option>Test1</option>
        </Select>
      </FormItem>
      <FormItem>
        <Label htmlFor={'select'}>Select</Label>
        <Select id={'select'}>
          <option>Test1</option>
          <option>Test1</option>
          <option>Test1</option>
          <option>Test1</option>
        </Select>
      </FormItem>
      <TagInput
        type={'positive'}
        tags={tags}
        handleDelete={e => setTags(prev => prev.filter((t, i) => i !== e))}
        handleAddition={e => setTags(prev => ([...prev, e]))}
        allowDragDrop={false}
        delimiters={delimiters}
        placeholder={'Positive Tags'}
        inputFieldPosition="inline"
      />
    </>
  );
};

export default Dashboard;
