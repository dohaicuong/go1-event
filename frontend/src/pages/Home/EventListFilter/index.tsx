import React from 'react'
import { EventConnectionWhereInput } from '../EventList/__generated__/EventListQuery.graphql'
import { ListItem, Grid, TextField, MenuItem, InputAdornment, Button } from '@material-ui/core'

type EventListFilterProps = {
  where?: EventConnectionWhereInput
  setWhere: (data: EventConnectionWhereInput) => void
}
const EventListFilter: React.FC<EventListFilterProps> = ({ where, setWhere }) => {
  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWhere({
      ...where,
      city: event.target.value || undefined
    })
  }

  const [keywords, setKeywords] = React.useState('')
  const handleKeywordsChange = () => {
    setWhere({
      ...where,
      keywords
    })
  }

  return (
    <ListItem>
      <Grid container spacing={2}>
        <Grid item xs>
          <TextField
            label="Keywords"
            value={keywords}
            onChange={e => setKeywords(e.target.value)}
            onKeyPress={e => {
              if (e.key === 'Enter') handleKeywordsChange()
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    variant="contained"
                    onClick={handleKeywordsChange}
                  >
                    Go
                  </Button>
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item xs>
          <TextField label="Time" />
        </Grid>
        <Grid item xs>
          <TextField
            label="City"
            select
            fullWidth
            value={where?.city}
            onChange={handleCityChange}
          >
            <MenuItem value=''>
              All
            </MenuItem>
            {cities.map(city => (
              <MenuItem key={city} value={city}>
                {city}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
    </ListItem>
  )
}
export default EventListFilter

const cities = ['Brisbane', 'Cairns', 'Gold Coast']