import React, {useState} from 'react';
import './styles.scss';
import SideModalHeader from '../../components/molecules/side-modal-header';
import ChangeLogItem from '../../components/molecules/change-log-item';
import {DateTime} from 'luxon';
import License from '../../components/organisms/license-information';
import FormItem from '../../components/atoms/form-item';
import Radio from '../../components/atoms/radio';
import Label from '../../components/atoms/label';
import Input from '../../components/atoms/input';
import Button from '../../components/atoms/button';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import {setDelayRequest} from '../../store/settings/reducers/set-delay';
import {DelayType} from '../../../../types/settings'

const CheckoutDelay = () => {
  const delay = useSelector((state: RootState) => state.settings.CheckoutDelay);
  const dispatch = useDispatch();
  const [delayValue, setDelayValue] = useState<number>(delay);

  const saveDelay = () => {
    dispatch(setDelayRequest({ type: DelayType.CHECKOUT, value: delayValue }));
  };

  return (
    <div className="setting">
      <FormItem>
        <Label>Checkout Delay</Label>
        <div className="horizontal-form">
          <Input
            type={'number'}
            min={0}
            value={delayValue}
            onChange={e => setDelayValue(parseInt(e.target.value))}
          />
          <Button onClick={saveDelay}>Save</Button>
        </div>
      </FormItem>
    </div>
  );
}

const Settings: React.FC = () => {
  return (
    <div className={'settings-page'}>
      <section>
        <SideModalHeader>Settings</SideModalHeader>
        <div className="body">
          <License type={'beta'} licenseKey={'ATNA-3289-3289-3278'} />
          <div className="setting" style={{ marginTop: '30px' }}>
            <FormItem>
              <Label>Theme Settings <span>Coming Soon</span></Label>
              <div className="radio-group">
                <Radio checked>Light (Default)</Radio>
                <Radio>Dark</Radio>
                <Radio>Material</Radio>
                <Radio>Zen</Radio>
                <Radio>Pale</Radio>
              </div>
            </FormItem>
          </div>
          <div className="setting">
            <FormItem>
              <Label>Checkout Webhook URL</Label>
              <div className="horizontal-form">
                <Input placeholder={'https://discord.com/api/webhooks/.../...'} />
                <Button>Save</Button>
                <Button secondary>Test</Button>
              </div>
            </FormItem>
          </div>
          <div className="setting">
            <FormItem>
              <Label>Decline Webhook URL</Label>
              <div className="horizontal-form">
                <Input placeholder={'https://discord.com/api/webhooks/.../...'} />
                <Button>Save</Button>
                <Button secondary>Test</Button>
              </div>
            </FormItem>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: '30px' }}>
            <div className="setting">
              <FormItem>
                <Label>Add to Cart Delay</Label>
                <div className="horizontal-form">
                  <Input type={'number'} min={0} />
                  <Button>Save</Button>
                </div>
              </FormItem>
            </div>

            <div className="setting">
              <FormItem>
                <Label>Miscellaneous</Label>
                <div className="horizontal-form right">
                  <Button secondary>Billing Details</Button>
                  <Button secondary>Website</Button>
                  <Button secondary>Twitter</Button>
                  <Button secondary>Status Page</Button>
                </div>
              </FormItem>
            </div>
          </div>
        </div>
      </section>
      <section>
        <SideModalHeader>Change Log</SideModalHeader>
        <div>
          <ChangeLogItem title={'v1.2.1 - Some fix'} timestamp={DateTime.now().toISO()} tag={'fix'} />
          <ChangeLogItem title={'v1.2 - Some feature release'} timestamp={DateTime.now().toISO()} tag={'feature'} />
          <ChangeLogItem title={'v1.1.3 - Some fix'} timestamp={DateTime.now().toISO()} tag={'fix'} />
          <ChangeLogItem title={'v1.1.2 - Some fix'} timestamp={DateTime.now().toISO()} tag={'fix'} />
          <ChangeLogItem title={'v1.1.1 - Some feature release'} timestamp={DateTime.now().toISO()} tag={'feature'} />
        </div>
      </section>
    </div>
  );
};

export default Settings;
