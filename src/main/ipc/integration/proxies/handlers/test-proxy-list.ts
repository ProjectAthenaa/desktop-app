import testProxyListRequest from '../../../../../graphql/integration/handlers/proxies/test-proxy-list';
import {ProxyTest} from '../../../../../types/proxy';

const testProxyList = async (event: Electron.IpcMainInvokeEvent, proxyListId: string): Promise<ProxyTest[]> => {
  return await testProxyListRequest(proxyListId);
};

export default testProxyList;



