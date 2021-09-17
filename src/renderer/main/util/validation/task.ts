import * as yup from 'yup';
const LookupTypes = ['Keywords', 'Link', 'Other'];
const Sites = ['FinishLine', 'JD_Sports', 'YeezySupply', 'Supreme', 'Eastbay_US', 'Champs_US', 'Footaction_US', 'Footlocker_US', 'Bestbuy', 'Pokemon_Center', 'Panini_US', 'Topss', 'Nordstorm', 'End', 'Target', 'Amazon', 'Solebox', 'Onygo', 'Snipes', 'Ssense', 'Walmart', 'Hibbet', 'NewBalance'];

export const productSchema = yup.object().shape({
  Name: yup.string().required(),
  Image: yup.string().notRequired(),
  LookupType: yup.string().oneOf(LookupTypes).required().label('Lookup Type'),
  PositiveKeywords: yup.array().of(yup.string()).ensure().label('Positive Keywords'),
  NegativeKeywords: yup.array().of(yup.string()).ensure().label('Negative Keywords'),
  Link: yup.string().notRequired(),
  Quantity: yup.number().integer().notRequired(),
  Sizes: yup.array().of(yup.string()).ensure(),
  Colors: yup.array().of(yup.string()).ensure(),
  Site: yup.string().oneOf(Sites).required(),
  Metadata: yup.object().notRequired(),
});

export const createTaskSchema = yup.object().shape({
  StartTime: yup.string().notRequired().label('Start Time'),
  Product: productSchema.required(),
  ProxyListID: yup.string().uuid().required(),
  ProfileGroupID: yup.string().uuid().required(),
  TaskGroupID: yup.string().uuid().required(),
});

export const updateTaskSchema = yup.object().shape({
  StartTime: yup.string().notRequired().label('Start Time'),
  ProductID: yup.string().uuid().notRequired(),
  ProxyListID: yup.string().uuid().notRequired(),
  ProfileGroupID: yup.string().uuid().notRequired(),
  TaskGroupID: yup.string().uuid().notRequired(),
});

export const createTaskGroupSchema = yup.object().shape({
  Name: yup.string().min(3).max(25).required(),
});

export const updateTaskGroupSchema = yup.object().shape({
  Name: yup.string().min(3).max(25).required(),
});
