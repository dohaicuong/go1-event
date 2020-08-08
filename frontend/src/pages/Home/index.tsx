import React from 'react'
import { Container, Typography, Paper } from '@material-ui/core'
import EventList from './EventList'

const Home: React.FC = () => {
  return (
    <Container maxWidth='md'>
      <Typography variant='h4' gutterBottom>
        Event list
      </Typography>
      <Paper>
        <EventList />
      </Paper>
    </Container>
  )
}
export default Home