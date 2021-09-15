import {gql} from 'graphql-request';
import {integrationClient} from '../../index';

const DELETE_PROXY_LIST = gql`
    mutation DeleteProxyList($proxyListID: UUID!){
        deleteProxyList(proxyListID: $proxyListID)
    }
`;

const deleteProxyList = async (proxyListId: string): Promise<boolean> => {
  const response = await integrationClient().request<{ deleteProxyList: boolean }>(DELETE_PROXY_LIST, {
    proxyListID: proxyListId,
  });

  return response.deleteProxyList;
};

export default deleteProxyList;

