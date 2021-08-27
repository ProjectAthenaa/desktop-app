import {gql} from 'graphql-request';


export const REFRESH_SESSION = gql`
    subscription RefreshSession($session: SessionInput!) {
        refreshSession(session: $session) {
            ID
            HardwareID
        }
    }
`;
