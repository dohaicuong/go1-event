import React from 'react'

import { graphql } from 'babel-plugin-relay/macro'
import { useFragment } from 'react-relay/hooks'
import { EventListItem_event$key } from './__generated__/EventListItem_event.graphql'
import { ListItem, ListItemText, Typography } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

type EventListItemProps = {
  event: EventListItem_event$key
}
const EventListItem: React.FC<EventListItemProps> = props => {
  const event = useFragment(
    graphql`
      fragment EventListItem_event on Event {
        id
        title
        time
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

  const seatAvailable = event.availableSeats.length

  const { push } = useHistory()
  const handleItemClick = () => {
    push(`/event/${event.id}`)
  }

  return (
    <ListItem button onClick={handleItemClick}>
      <ListItemText
        primary={event.title}
        secondary={
          <>
            <Typography variant="body2" color="textPrimary">
              {eventAddress}
            </Typography>
            <div>{new Date(event.time).toLocaleDateString()}</div>
            {seatAvailable} {seatAvailable > 1 ? 'seats' : 'seat' } left
          </>
        }
      />
    </ListItem>
  )
}
export default EventListItem