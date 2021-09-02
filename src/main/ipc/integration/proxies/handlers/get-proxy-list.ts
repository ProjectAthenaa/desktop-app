import getProxyListRequest from '../../../../../graphql/integration/handlers/proxies/get-proxy-list';
import {ProxyList} from '../../../../../types/proxy';


const getProxyList = async (event: Electron.IpcMainInvokeEvent, proxyListId: string): Promise<ProxyList> => {
  return await getProxyListRequest(proxyListId)
};

export default getProxyList;



