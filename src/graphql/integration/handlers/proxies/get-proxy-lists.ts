import {gql} from 'graphql-request';
import {integrationClient} from '../../index';
import {ProxyList} from '../../../../types/proxy';

const GET_PROXY_LISTS = gql`
    {
        getAllProxyLists {
            ID
            Name
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

const getProxyLists = async (): Promise<ProxyList[]> => {
  const response = await integrationClient()
    .request<{ getAllProxyLists: ProxyList[] }>(GET_PROXY_LISTS);

  return response.getAllProxyLists;
};

export default getProxyLists;



