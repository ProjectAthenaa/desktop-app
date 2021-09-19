import getUserDataRequest from '../../../../../graphql/integration/handlers/user/get-user-data';
import {User} from '../../../../../types/user';

const getUserData = async (): Promise<User> => {
  return await getUserDataRequest();
};

export default getUserData;



