import createProxyListRequest from '../../../../../graphql/integration/handlers/proxies/create-proxy-list';
import {NewProxyList, ProxyList} from '../../../../../types/proxy';

const createProxyList = async (event: Electron.IpcMainInvokeEvent, proxyList: NewProxyList): Promise<ProxyList> => {
  return await createProxyListRequest(proxyList);
};

export default createProxyList;
