/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type EventDetailsQueryVariables = {
    eventId: string;
};
export type EventDetailsQueryResponse = {
    readonly node: {
        readonly id: string;
        readonly " $fragmentRefs": FragmentRefs<"Event_event">;
    } | null;
};
export type EventDetailsQuery = {
    readonly response: EventDetailsQueryResponse;
    readonly variables: EventDetailsQueryVariables;
};



/*
query EventDetailsQuery(
  $eventId: ID!
) {
  node(id: $eventId) {
    __typename
    id
    ... on Event {
      ...Event_event
    }
  }
}

fragment Event_event on Event {
  title
  time
  image
  location {
    city
    state
    country
    id
  }
  availableSeats {
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "eventId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "eventId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "EventDetailsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "Event_event"
              }
            ],
            "type": "Event",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "EventDetailsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          (v2/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "title",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "time",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "image",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Location",
                "kind": "LinkedField",
                "name": "location",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "city",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "state",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "country",
                    "storageKey": null
                  },
                  (v2/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Seat",
                "kind": "LinkedField",
                "name": "availableSeats",
                "plural": true,
                "selections": [
                  (v2/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "type": "Event",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "94573b35902f12b277561ccba90cc82e",
    "id": null,
    "metadata": {},
    "name": "EventDetailsQuery",
    "operationKind": "query",
    "text": "query EventDetailsQuery(\n  $eventId: ID!\n) {\n  node(id: $eventId) {\n    __typename\n    id\n    ... on Event {\n      ...Event_event\n    }\n  }\n}\n\nfragment Event_event on Event {\n  title\n  time\n  image\n  location {\n    city\n    state\n    country\n    id\n  }\n  availableSeats {\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '90e1ccf01a8105bcca39564fa87ca86e';
export default node;
