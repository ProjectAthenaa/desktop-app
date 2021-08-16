import {IpcMainInvokeEvent} from 'electron';
import * as yup from 'yup';
import validationMessages from '../../util/validation-messages';
import respond, {Response} from '../../util/respond';
import {authenticate} from '../../clients';
import store from '../../util/store';

type Body = {
  token: string;
};

const bodySchema = yup.object().shape({
  token: yup.string()
    .uuid(validationMessages.validToken)
    .required(validationMessages.required('Token')),
});

const login = async (event: IpcMainInvokeEvent, body: Body): Promise<Response> => {
  // Validate the body of the event
  try {
    await bodySchema.validate(body);
  } catch (error) {
    return respond(false, (error.errors[0] as string));
  }

  // Make request to authenticate
  try {
    const loginResponse = await authenticate(body.token);

    store.set('token', body.token);
    store.set('sessionId', loginResponse.getSessionid());

    return respond(true, 'Login Success.',  {
      isFirstLogin: loginResponse.getIsfirstlogin(),
      sessionId: loginResponse.getSessionid(),
      theme: loginResponse.getTheme(),
    });
  } catch (error) {
    return respond(false, error.message);
  }
};

export default login;
