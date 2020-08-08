import React from 'react'

import { usePaginationFragment, useLazyLoadQuery } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { EventListPaginationQuery } from './__generated__/EventListPaginationQuery.graphql'
import { EventList_query$key } from './__generated__/EventList_query.graphql'
import { EventListQuery } from './__generated__/EventListQuery.graphql'

import { List, ListItem } from '@material-ui/core'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorBoundaryWithRetry from 'components/ErrorBoundaryWithRetry'
import EventListItem from '../EventListItem'

type EventListPaginationProps = {
  query: EventList_query$key
}
const EventListPagination: React.FC<EventListPaginationProps> = props => {
  const { data, hasNext, isLoadingNext, loadNext } = usePaginationFragment<EventListPaginationQuery, EventList_query$key>(
    graphql`
      fragment EventList_query on Query
      @argumentDefinitions(
        count: { type: "Int", defaultValue: 5 }
        cursor: { type: "String" }
      )
      @refetchable(queryName: "EventListPaginationQuery")
      {
        eventConnection(first: $count, after: $cursor, where: $where)
        @connection(key: "EventList_eventConnection")
        {
          edges {
            cursor
            node {
              ...EventListItem_event
            }
          }
        }
      }
    `,
    props.query
  )

  return (
    <List>
      {data.eventConnection?.edges?.map(edge => {
        if(!edge?.node) return null

        return <EventListItem key={edge.cursor} event={edge.node} />
      })}
      {hasNext && (
        <ListItem
          button
          disabled={isLoadingNext}
          onClick={() => loadNext(5)}
        >
          Load more
        </ListItem>
      )}
    </List>
  )
}

const EventListLazyLoad: React.FC = () => {
  const query = useLazyLoadQuery<EventListQuery>(
    graphql`
      query EventListQuery($where: EventConnectionWhereInput) {
        ...EventList_query
      }
    `,
    {
      // where: {
      //   keywords: '',
      //   time: '',
      //   city: '',
      //   state: '',
      //   country: '',
      // }
    },
  )
    
  return <EventListPagination query={query} />
}

const EventList: React.FC = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorBoundaryWithRetry}>
      <React.Suspense fallback='Loading events...'>
        <EventListLazyLoad />
      </React.Suspense>
    </ErrorBoundary>
  )
}
export default EventList