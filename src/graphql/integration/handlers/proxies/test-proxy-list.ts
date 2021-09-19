import {gql} from 'graphql-request';
import {integrationClient} from '../../index';
import {ProxyTest} from '../../../../types/proxy';

const GET_PROXY_LIST = gql`
    query GetProxyList ($proxyListID: UUID!){
        testProxyList(proxyListID: $proxyListID) {
            Latency
            ProxyID
            Status
        }
    }
`

const testProxyList = async (proxyListId: string): Promise<ProxyTest[]> => {
  const response = await (await integrationClient()).request<{ testProxyList: ProxyTest[] }>(GET_PROXY_LIST, {
    proxyListID: proxyListId
  });

  return response.testProxyList;
};

export default testProxyList;



