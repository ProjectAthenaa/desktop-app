import deleteProxyListRequest from '../../../../../graphql/integration/handlers/proxies/delete-proxy-list';

const deleteProxyList = async (event: Electron.IpcMainInvokeEvent, proxyListId: string): Promise<boolean> => {
  return await deleteProxyListRequest(proxyListId);
};

export default deleteProxyList;

