import getProxyListsRequest from '../../../../../graphql/integration/handlers/proxies/get-proxy-lists';
import {ProxyList} from '../../../../../types/proxy';

const getProxyLists = async (event: Electron.IpcMainInvokeEvent): Promise<ProxyList[]> => {
  return await getProxyListsRequest();
};

export default getProxyLists;



