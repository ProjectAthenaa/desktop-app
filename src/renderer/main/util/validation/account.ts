import * as yup from 'yup';
import {Sites} from './task';

export const createAccountGroupSchema = yup.object().shape({
  Name: yup.string().min(3).max(25).required(),
  Site: yup.string().equals(Sites).required(),
});

export const updateAccountGroupSchema = yup.object().shape({
  Name: yup.string().min(3).max(25).required(),
  Site: yup.string().equals(Sites).required(),
});
