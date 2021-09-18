import * as yup from 'yup';

const ProxyListType = ['Residential', 'Datacenter', 'ISP'];

export const createProxyListSchema = yup.object().shape({
  Name: yup.string().min(3).max(25).required(),
  Type: yup.string().equals(ProxyListType).required(),
});

export const updateProxyListSchema = yup.object().shape({
  Name: yup.string().min(3).max(25).required(),
  Type: yup.string().equals(ProxyListType).required(),
});
