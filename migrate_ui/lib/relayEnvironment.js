import { createClient } from 'graphql-ws';
import { Environment, Network, Store, RecordSource } from 'relay-runtime'
import { promisifiedDataFetch } from './dataFetch'

/*
const graphqlWS = createClient({ urll: "ws://localhost:3000/api/system/graphql/query" })

function fetchQuery(operation, variables) {
    return promisifiedDataFetch("/api/system/graphql/query", {
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
        method: "POST",
        body: JSON.stringify({
            query: operation.text,
            variables,
        }),
    })
}

function setupSubscription(config, variables) {
    return graphqlWS.subscribe(config.text, variables, (error, data) => {
        if (error) {
            throw error;
        }
        return data;
    });
}

const environment = new Environment({
    network: Network.create(fetchQuery, setupSubscription),
    store: new Store(new RecordSource()),
});

export default environment;
*/