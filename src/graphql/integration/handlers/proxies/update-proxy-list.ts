import {AccountGroup} from '../../../../types/account';
import {gql} from 'graphql-request';
import {integrationClient} from '../../index';
import {NewProxyList, ProxyList} from '../../../../types/proxy';

const UPDATE_PROXY_LIST = gql`
    mutation UpdateProxyList($proxyListID: UUID!, $proxyList: NewProxyList!) {
        updateProxyList(proxyListID: $proxyListID, proxyList: $proxyList) {
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
`;

const updateProxyList = async (proxyListID: string, proxyList: NewProxyList): Promise<ProxyList> => {
  const response = await (await integrationClient()).request<{ updateProxyList: ProxyList }>(UPDATE_PROXY_LIST, {
    proxyListID: proxyListID,
    proxyList
  });

  return response.updateProxyList;
};

export default updateProxyList;
