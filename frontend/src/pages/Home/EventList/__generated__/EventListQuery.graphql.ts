/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type EventConnectionWhereInput = {
    keywords?: string | null;
    time?: string | null;
    city?: string | null;
    state?: string | null;
    country?: string | null;
};
export type EventListQueryVariables = {
    where?: EventConnectionWhereInput | null;
};
export type EventListQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"EventList_query">;
};
export type EventListQuery = {
    readonly response: EventListQueryResponse;
    readonly variables: EventListQueryVariables;
};



/*
query EventListQuery(
  $where: EventConnectionWhereInput
) {
  ...EventList_query
}

fragment EventListItem_event on Event {
  id
  title
  time
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

fragment EventList_query on Query {
  eventConnection(first: 5, where: $where) {
    edges {
      cursor
      node {
        ...EventListItem_event
        id
        __typename
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "where"
  }
],
v1 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 5
  },
  {
    "kind": "Variable",
    "name": "where",
    "variableName": "where"
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
    "name": "EventListQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "EventList_query"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "EventListQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "EventConnection",
        "kind": "LinkedField",
        "name": "eventConnection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "EventEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Event",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
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
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "filters": [
          "where"
        ],
        "handle": "connection",
        "key": "EventList_eventConnection",
        "kind": "LinkedHandle",
        "name": "eventConnection"
      }
    ]
  },
  "params": {
    "cacheID": "6d7f19f6c1fdf1406a1802c7f9eeed45",
    "id": null,
    "metadata": {},
    "name": "EventListQuery",
    "operationKind": "query",
    "text": "query EventListQuery(\n  $where: EventConnectionWhereInput\n) {\n  ...EventList_query\n}\n\nfragment EventListItem_event on Event {\n  id\n  title\n  time\n  location {\n    city\n    state\n    country\n    id\n  }\n  availableSeats {\n    id\n  }\n}\n\nfragment EventList_query on Query {\n  eventConnection(first: 5, where: $where) {\n    edges {\n      cursor\n      node {\n        ...EventListItem_event\n        id\n        __typename\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '925057daf052cb1f17411589bc54df3c';
export default node;
