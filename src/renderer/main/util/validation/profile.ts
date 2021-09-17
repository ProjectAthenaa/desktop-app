import * as yup from 'yup';
import cardTest from 'card-validator';


export const createProfileSchema = yup.object().shape({
  StartTime: yup.string().notRequired().label('Start Time'),
});

