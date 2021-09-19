import React, {useState} from 'react';
import './styles.scss';
import Marquee from 'react-fast-marquee';
import NotificationBellImage from '../../../assets/images/icons/notification';
import CheckoutIcon from '../../../assets/images/icons/checkout';
import DeclineIcon from '../../../assets/images/icons/decline';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../store';
import {clearNotifications, Notification, sawNotifications} from '../../../store/notifications';
import {Status} from '../../../../../types/task';
import statusFormatter from '../../../util/status-formatter';

const NotificationPanel: React.FC = () => {
  const notifications = useSelector((state: RootState) => state.notifications.notifications);
  const seen = useSelector<RootState>(state => state.notifications.seen);
  const dispatch = useDispatch();
  const [isShown, setIsShown] = useState(false);
  // const [notifications, setNotifications] = useState(['test']);

  const clearAllNotifications = () => {
    dispatch(clearNotifications())
  };

  const toggleShown = () => {
    if (!isShown) dispatch(sawNotifications())
    setIsShown(!isShown);
  }

  return (
    <div className={'notification-panel'}>
      <button className={`bell-button${seen ? ' no-notifications' : ''}`} onClick={toggleShown}>
        {NotificationBellImage}
      </button>
      <div className={`notification-drop${isShown ? ' shown' : ''}`}>
        <div className="head">
          <h2>Notifications</h2>
          <button className={'heading-button'} onClick={clearAllNotifications}>Clear All</button>
        </div>
        <div className="list">
          {notifications.map(notification => (
            <div className="notification" key={notification.ID}>
              {notification.Status === Status.CHECKED_OUT
                ? CheckoutIcon
                : DeclineIcon
              }
              <div className={'meta'}>
                <h3>{ statusFormatter(notification.Status) }</h3>
                <Marquee pauseOnHover gradientWidth={'5px'} speed={10}>
                  <p>{ notification.Message }</p>
                </Marquee>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationPanel;
