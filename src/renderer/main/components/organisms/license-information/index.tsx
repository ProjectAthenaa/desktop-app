import React from 'react';
import './styles.scss';

const licenseTypes: Record<string, any> = {
  beta: 'Beta License'
};

type Props = {
  type: string;
  licenseKey: string;
};

function License({ licenseKey, type }: Props) {

  const openPortal = async () => {

  };

  return (
    <div className={'license'}>
      <div className="license-information">
        <h3>{ licenseTypes[type] }</h3>
        <div className="license-key">
          { licenseKey }
        </div>
      </div>
      <button
        onClick={openPortal}
        className="button">
        Manage Subscription
      </button>
    </div>
  );
}

export default License;
