import updateProxyListRequest from '../../../../../graphql/integration/handlers/proxies/update-proxy-list';
import {NewProxyList, ProxyList} from '../../../../../types/proxy';

const updateProxyList = async (event: Electron.IpcMainInvokeEvent, proxyListID: string, proxyList: NewProxyList): Promise<ProxyList> => {
  return await updateProxyListRequest(proxyListID, proxyList);
};

export default updateProxyList;
