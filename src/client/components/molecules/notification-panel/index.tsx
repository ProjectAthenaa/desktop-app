import React, {useState} from 'react';
import './styles.scss';
import Marquee from 'react-fast-marquee';
import NotificationBellImage from '../../../assets/images/icons/notification';
import CheckoutIcon from '../../../assets/images/icons/checkout';
import DeclineIcon from '../../../assets/images/icons/decline';

const NotificationPanel: React.FC = () => {
  const [isShown, setIsShown] = useState(false);
  const [notifications, setNotifications] = useState(['test']);

  const clearAllNotifications = () => {
    // Make call to clear notifications. Assuming all went well, update notifications state
    setNotifications([]);
  };

  const toggleShown = () => setIsShown(!isShown);
  const hasNoNotifications = notifications.length === 0;

  return (
    <div className={'notification-panel'}>
      <button className={`bell-button${hasNoNotifications ? ' no-notifications' : ''}`} onClick={toggleShown}>
        {NotificationBellImage}
      </button>
      <div className={`notification-drop${isShown ? ' shown' : ''}`}>
        <div className="head">
          <h2>Notifications</h2>
          <button className={'heading-button'} onClick={clearAllNotifications}>Clear All</button>
        </div>
        <div className="list">
          <div className="notification">
            {CheckoutIcon}
            <div className={'meta'}>
              <h3>Checkout Success</h3>
              <Marquee pauseOnHover gradientWidth={'5px'} speed={10}>
                <p>5/24/21 10:05 AM - Jordan 1 Retro High Travis Scott</p>
              </Marquee>
            </div>
          </div>
          <div className="notification">
            {DeclineIcon}
            <div className={'meta'}>
              <h3>Card Decline</h3>
              <p>Your card on Task #1291 has been declined.</p>
            </div>
          </div>
          <div className="notification">
            {CheckoutIcon}
            <div className={'meta'}>
              <h3>Checkout Success</h3>
              <Marquee pauseOnHover gradientWidth={'5px'} speed={10}>
                <p>5/24/21 10:03 AM - Jordan 1 Retro High Travis Scott</p>
              </Marquee>
            </div>
          </div>
          <div className="notification">
            {CheckoutIcon}
            <div className={'meta'}>
              <h3>Checkout Success</h3>
              <Marquee pauseOnHover gradientWidth={'5px'} speed={10}>
                <p>5/24/21 10:02 AM - Jordan 1 Retro High Travis Scott</p>
              </Marquee>
            </div>
          </div>
          <div className="notification">
            {CheckoutIcon}
            <div className={'meta'}>
              <h3>Checkout Success</h3>
              <Marquee pauseOnHover gradientWidth={'5px'} speed={10}>
                <p>5/24/21 10:01 AM - Jordan 1 Retro High Travis Scott</p>
              </Marquee>
            </div>
          </div>
          <div className="notification">
            {DeclineIcon}
            <div className={'meta'}>
              <h3>Card Decline</h3>
              <p>Your card on Task #1291 has been declined.</p>
            </div>
          </div>
          <div className="notification">
            {CheckoutIcon}
            <div className={'meta'}>
              <h3>Checkout Success</h3>
              <Marquee pauseOnHover gradientWidth={'5px'} speed={10}>
                <p>5/24/21 10:03 AM - Jordan 1 Retro High Travis Scott</p>
              </Marquee>
            </div>
          </div>
          <div className="notification">
            {CheckoutIcon}
            <div className={'meta'}>
              <h3>Checkout Success</h3>
              <Marquee pauseOnHover gradientWidth={'5px'} speed={10}>
                <p>5/24/21 10:02 AM - Jordan 1 Retro High Travis Scott</p>
              </Marquee>
            </div>
          </div>
          <div className="notification">
            {CheckoutIcon}
            <div className={'meta'}>
              <h3>Checkout Success</h3>
              <Marquee pauseOnHover gradientWidth={'5px'} speed={10}>
                <p>5/24/21 10:01 AM - Jordan 1 Retro High Travis Scott</p>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationPanel;
