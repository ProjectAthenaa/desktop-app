import React from 'react';
import './styles.scss';

type Props = {
  name: string;
  tag: string;
  image: string;
}

const Profile: React.FC<Props> = ({ name, tag, image }) => {
  return (
    <div className={'profile'}>
      <div className="image" style={{ backgroundImage: `url(${image})`}}/>
      <p>
        {name}<br/>
        <b>#{tag}</b>
      </p>
    </div>
  );
};

export default Profile;
