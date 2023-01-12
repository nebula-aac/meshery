/**
 * @generated SignedSource<<4dae48127a5efbde1ff993fd8e1d5efd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "k8scontextIDs"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "k8scontextIDs",
        "variableName": "k8scontextIDs"
      }
    ],
    "concreteType": "MeshSyncEvent",
    "kind": "LinkedField",
    "name": "subscribeMeshSyncEvents",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "type",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "object",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "contextId",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "MeshSyncEventsSubscription",
    "selections": (v1/*: any*/),
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MeshSyncEventsSubscription",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "519cd56d2c2174db537e8a5984e81714",
    "id": null,
    "metadata": {},
    "name": "MeshSyncEventsSubscription",
    "operationKind": "subscription",
    "text": "subscription MeshSyncEventsSubscription(\n  $k8scontextIDs: [String!]\n) {\n  subscribeMeshSyncEvents(k8scontextIDs: $k8scontextIDs) {\n    type\n    object\n    contextId\n  }\n}\n"
  }
};
})();

node.hash = "8c1304c7cd0a5eb6db288eb62104de62";

module.exports = node;
