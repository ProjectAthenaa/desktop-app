import {gql} from 'graphql-request';
import {integrationClient} from '../../index';
import {ProxyList} from '../../../../types/proxy';

const GET_PROXY_LIST = gql`
    query GetProxyList ($proxyListID: UUID!){
        getProxyList(proxyListID: $proxyListID) {
            ID
            Name
            Type
            Proxies {
                ID
                IP
                Username
                Password
                Port
            }
        }
    }
`

const getProxyList = async (proxyListId: string): Promise<ProxyList> => {
  const response = await (await integrationClient()).request<{ getProxyList: ProxyList }>(GET_PROXY_LIST, {
    proxyListID: proxyListId
  });

  return response.getProxyList;
};

export default getProxyList;



