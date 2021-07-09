import {DateTime} from 'luxon';

type Notification = {
  type: 'checkout-success' | 'card-decline' | 'update' | 'announcement';
  title: string;
  timestamp: DateTime;
}

export default Notification;
