import React from 'react';
import FormItem from '../../components/atoms/form-item';
import Label from '../../components/atoms/label';
import Input from '../../components/atoms/input';
import DatePicker from '../../components/atoms/date-picker';
import Select from '../../components/atoms/select';
import {FieldType, ModuleField, ModuleInformation, ModuleStatus} from '../../../../types/modules';
import {useFormContext} from 'react-hook-form';
import {TaskCreation} from '../../../../types/task';
import {ProxyList} from '../../../../types/proxy';
import TagInput from '../../components/atoms/tag-input';
import {Tag} from 'react-tag-input';
import {FetchedProfileGroups} from '../../../../graphql/integration/handlers/profiles/get-profile-groups';

type Props = {
  skippingTime: boolean;
  setSkippingTime: (e: boolean) => void;
  setStart: (e: string) => void;
  proxyLists: ProxyList[];
  profileGroups: FetchedProfileGroups;
  selectedModule: number;
  setSelectedModule: (e: number) => void;
  moduleInformation: ModuleInformation[];
  positiveKeywords: Tag[];
  negativeKeywords: Tag[];
  setPositiveKeywords: React.Dispatch<React.SetStateAction<Tag[]>>;
  setNegativeKeywords: React.Dispatch<React.SetStateAction<Tag[]>>;
}

const TaskForm: React.FC<Props> = ({ negativeKeywords, setNegativeKeywords, positiveKeywords, setPositiveKeywords, skippingTime, setStart, setSkippingTime, proxyLists, profileGroups, setSelectedModule, moduleInformation, selectedModule }) => {
  const taskFormMethods = useFormContext<TaskCreation>();

  const getFieldFor = (field: ModuleField) => {
    const type = field.Type;
    if (type === FieldType.DROPDOWN) return (
      <FormItem>
        <Label htmlFor={field.FieldKey}>{field.Label}</Label>
        <Select id={field.FieldKey} {...taskFormMethods.register(`Product.Metadata.${field.FieldKey}`)}>
          {field.DropdownValues && field.DropdownValues.map((dropdownValue, index) => (
            <option value={dropdownValue} key={`${index}-${dropdownValue}`}>{dropdownValue}</option>
          ))}
        </Select>
      </FormItem>
    );
    if (type === FieldType.KEYWORDS) return (
      <FormItem>
        <Label htmlFor={field.FieldKey}>{field.Label}</Label>
        <TagInput
          type={'positive'}
          tags={positiveKeywords}
          handleAddition={e => setPositiveKeywords([...positiveKeywords, e])}
          handleDelete={e => setPositiveKeywords(positiveKeywords.filter((k, i) => e !== i))}
          placeholder={'Positive Keywords'}
        />
        <br />
        <TagInput
          type={'negative'}
          tags={negativeKeywords}
          handleAddition={e => setNegativeKeywords([...negativeKeywords, e])}
          handleDelete={e => setNegativeKeywords(negativeKeywords.filter((k, i) => e !== i))}
          placeholder={'Negative Keywords'}
        />
      </FormItem>
    );
    if (type === FieldType.NUMBER) return (
      <FormItem>
        <Label htmlFor={field.FieldKey}>{field.Label}</Label>
        <input type="number" {...taskFormMethods.register(`Product.Metadata.${field.FieldKey}`)} />
      </FormItem>
    );

    return (
      <FormItem>
        <Label htmlFor={field.FieldKey}>{field.Label}</Label>
        <Input type="text" {...taskFormMethods.register(`Product.Metadata.${field.FieldKey}`)}/>
      </FormItem>
    )
  };

  return (
    <>
      <FormItem>
        <Label htmlFor={'site'}>Product Name</Label>
        <Input type={'text'} {...taskFormMethods.register('Product.Name')}/>
      </FormItem>
      <FormItem>
        <Label htmlFor={'site'}>Start Time</Label>
        {!skippingTime && (
          <DatePicker onChange={e => setStart(e)} />
        )}
        <br/><br/>
        <Label htmlFor={'skip-time'}>
          <input
            id={'skip-time'}
            type={'checkbox'}
            checked={skippingTime}
            onChange={e => setSkippingTime(e.target.checked)}
          />{' '}
          {skippingTime ? 'Skipped' : 'Skip?'}
        </Label>
      </FormItem>
      <FormItem>
        <Label htmlFor={'site'}>Image Url</Label>
        <Input type={'text'} {...taskFormMethods.register('Product.Image')}/>
      </FormItem>
      <hr/>
      <h3>Configuration</h3>
      <FormItem>
        <Label htmlFor={'site'}>Proxy List</Label>
        <Select name={`ProxyListID`} {...taskFormMethods.register('ProxyListID')}>
          {proxyLists.map(proxyList => (
            <option value={proxyList.ID} key={proxyList.ID}>{proxyList.Name}</option>
          ))}
        </Select>
      </FormItem>
      <FormItem>
        <Label htmlFor={'site'}>Profile Group</Label>
        <Select name={`ProfileGroupID`} {...taskFormMethods.register('ProfileGroupID')}>
          {profileGroups.map(profileGroup => (
            <option value={profileGroup.ID} key={profileGroup.ID}>{profileGroup.Name}</option>
          ))}
        </Select>
      </FormItem>
      <hr/>
      <h3>Site Selection</h3>
      <FormItem>
        <Label htmlFor={'site'}>Site</Label>
        <Select
          defaultValue={0}
          onChange={e => setSelectedModule(parseInt(e.target.value))}
          id={'module'}>
          {moduleInformation.map((module, index) => (
            <option value={index} disabled={module.Status === ModuleStatus.DOWN} key={module.Name}>{ module.Name }</option>
          ))}
        </Select>
      </FormItem>
      <hr/>
      <h3>{moduleInformation[selectedModule].Name}</h3>
      {moduleInformation[selectedModule].Fields.map(field => (
        <div key={field.FieldKey}>
          {getFieldFor(field)}
        </div>
      ))}
    </>
  );
}

export default TaskForm;
