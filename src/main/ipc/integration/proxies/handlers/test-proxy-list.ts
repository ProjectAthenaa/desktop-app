import testProxyListRequest, {ProxyTest} from '../../../../../graphql/integration/handlers/proxies/test-proxy-list';

const testProxyList = async (event: Electron.IpcMainInvokeEvent, proxyListId: string): Promise<ProxyTest[]> => {
  return await testProxyListRequest(proxyListId);
};

export default testProxyList;



