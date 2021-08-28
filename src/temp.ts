// // import ws from 'ws'    ; // yarn add ws
// // import { createClient } from 'graphql-ws';
// // import { v4 as uuid } from 'uuid';
// //
// import {WebSocketLink} from "@apollo/client/link/ws/ws.cjs.js";
//
const SERVICE_WS_ENDPOINT = 'wss://api.athenabot.com/auth';
// // const client = createClient({
// //   url: SERVICE_WS_ENDPOINT,
// //   webSocketImpl: ws,
// //   generateID: () => uuid(),
// // });
// //
// // client.subscribe(
// //   {
// //     query: `
// //       subscription {
// //           refreshSession(session: {
// //             ID: "ce3fb218-8ebc-4393-a17d-9cf512d5d6e9",
// //             HardwareID: "fucking"
// //           }) {
// //               ID
// //               HardwareID
// //           }
// //       }
// //     `
// //   },
// //   {
// //     next: (d) => console.log(d),
// //     error: (e) => console.log(e),
// //     complete: () => console.log('done'),
// //   }
// // );
// //
// // client.on('error', error => {
// //   console.log(error);
// // });
// //
// // client.on('connected', () => {
// //   console.log('conn');
// // });
//
// import { SubscriptionClient } from 'subscriptions-transport-ws';
// import ApolloClient from "apollo-client";
// // import { WebSocketLink } from "@apollo/client";
// import ws from 'ws';
//
// const link = new WebSocketLink({
//   uri: SERVICE_WS_ENDPOINT,
//   options: {
//     reconnect: true
//   },
//   webSocketImpl: ws
// });
// const client = new SubscriptionClient(SERVICE_WS_ENDPOINT, {
//   reconnect: true,
// });
//
// const apolloClient = new ApolloClient({
//   networkInterface: client,
//   link
// });
//
// apolloClient.subscribe({
//   query: `
//       subscription {
//           refreshSession(session: {
//             ID: "1bfc54ed-d1ee-47cd-880f-17c2c869bb16",
//             HardwareID: "fucking"
//           }) {
//               ID
//               HardwareID
//           }
//       }
//   `,
// }).subscribe({
//   next(value) {
//     console.log(value);
//   }
// });


const { execute } = require('apollo-link');
const { WebSocketLink } = require('apollo-link-ws');
const { SubscriptionClient } = require('subscriptions-transport-ws');
const ws = require('ws');

const getWsClient = function(wsurl) {
  return new SubscriptionClient(
    wsurl, {reconnect: true}, ws
  );
};

const createSubscriptionObservable = (wsurl, query, variables) => {
  const link = new WebSocketLink(getWsClient(wsurl));
  return execute(link, {query: query, variables: variables});
};


const subscriptionClient = createSubscriptionObservable(
  SERVICE_WS_ENDPOINT, // GraphQL endpoint
  `
    subscription {
      refreshSession(session: {
        ID: "ebebcdd9-0146-4eac-9361-a5229012474c",
        HardwareID: "fucking"
      }) {
        ID
        HardwareID
      }
    }
  `
);
const consumer = subscriptionClient.subscribe(eventData => {
  // Do something on receipt of the event
  console.log("Received event: ");
  console.log(JSON.stringify(eventData, null, 2));
}, (err) => {
  console.log('Err');
  console.log(err);
});
