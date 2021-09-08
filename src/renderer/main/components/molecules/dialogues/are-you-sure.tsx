import React from 'react';
import './styles.scss';
import Button from '../../atoms/button';

type Props = {
  yesCallback: () => void;
  closeToast?: () => void;
  doThis: string;
};

const AreYouSure: React.FC<Props> = ({ closeToast, yesCallback, doThis }) => {
  const handleYes = () => {
    yesCallback();
    closeToast();
  };

  return (
    <div>
      Are you sure you want to {doThis}?
      <div className="buttons">
        <Button secondary>Cancel</Button>
        <Button onClick={handleYes}>Yes</Button>
      </div>
    </div>
  );
}

export default AreYouSure;
