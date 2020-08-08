import React from 'react'
import { useParams } from 'react-router-dom'
import { useLazyLoadQuery } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { EventDetailsQuery } from './__generated__/EventDetailsQuery.graphql'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorBoundaryWithRetry from 'components/ErrorBoundaryWithRetry'
import Event from './Event'
import { Container } from '@material-ui/core'

const EventDetailsLazyLoad: React.FC = () => {
  const { eventId } = useParams<{ eventId: string }>()

  const event = useLazyLoadQuery<EventDetailsQuery>(
    graphql`
      query EventDetailsQuery($eventId: ID!) {
        node(id: $eventId) {
          id
          ... on Event {
            ...Event_event
          }
        }
      }
    `,
    { eventId }
  )
  if (!event.node) return <>Unable to find the event!</>

  return <Event event={event.node} />
}

const EventDetails = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorBoundaryWithRetry}>
      <React.Suspense fallback='Loading event...'>
        <Container maxWidth='sm'>
          <EventDetailsLazyLoad />
        </Container>
      </React.Suspense>
    </ErrorBoundary>
  )
}
export default EventDetails