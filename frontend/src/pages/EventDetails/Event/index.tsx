import React from 'react'
import { useFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { Event_event$key } from './__generated__/Event_event.graphql'

import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import { Typography, Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

type EventProps = {
  event: Event_event$key
}
const Event: React.FC<EventProps> = props => {
  const event = useFragment(
    graphql`
      fragment Event_event on Event {
        title
        time
        image
        location {
          city
          state
          country
        }
        availableSeats {
          id
        }
      }
    `,
    props.event
  )

  const { city, state, country } = event.location
  const eventAddress = React.useMemo(() => {
    return `${city}, ${state}, ${country}`
  }, [city, state, country])

  const { push } = useHistory()
  const handleGoBack = () => push('/')

  return (
    <>
      <Button onClick={handleGoBack}>
        Go back
      </Button>
      <Card>
        <CardHeader
          title={event.title}
          subheader={
            <>
              {new Date(event.time).toLocaleDateString()}
              {' - '}
              {event.availableSeats.length} {event.availableSeats.length > 1 ? 'seats' : 'seat'} left
            </>
          }
        />
        <CardMedia
          image={event.image}
          title={event.title}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            When: {new Date(event.time).toLocaleDateString()}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Where: {eventAddress}
          </Typography>
        </CardContent>
      </Card>
    </>
  )
}

export default Event