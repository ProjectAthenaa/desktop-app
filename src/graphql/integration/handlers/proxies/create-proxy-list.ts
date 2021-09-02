import {ProfileGroupCreation} from '../../../../types/profile';
import {gql} from 'graphql-request';
import {integrationClient} from '../../index';
import {NewProxyList, ProxyList} from '../../../../types/proxy';

const CREATE_PROXY_LIST = gql`
    mutation CreateProxyList($proxyList: NewProxyList!){
        createProxyList(proxyList: $proxyList) {
            ID
            Name
            Proxies {
                ID
                IP
                Password
                Username
                Port
            }
        }
    }
`;

export const createProxyList = async (proxyList: NewProxyList): Promise<ProxyList> => {
  const response = await integrationClient()
    .request<{ createProxyList: ProxyList }>(CREATE_PROXY_LIST, {
      proxyList: proxyList
    });

  return response.createProxyList;
};

export default createProxyList;
