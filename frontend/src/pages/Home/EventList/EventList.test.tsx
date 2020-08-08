import React from 'react'
import { render, cleanup, waitFor } from '@testing-library/react'
import { createMockEnvironment, MockPayloadGenerator } from 'relay-test-utils'
import { RelayEnvironmentProvider } from 'react-relay/hooks'

import EventList from '.'
import { BrowserRouter } from 'react-router-dom'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'

afterEach(cleanup)

describe('<EventList />', () => {
  it('should reject query and catched by error boundary', async () => {
    const environment = createMockEnvironment()
    const { getByText } = render(
      <RelayEnvironmentProvider environment={environment}>
        <BrowserRouter>
          <EventList />
        </BrowserRouter>
      </RelayEnvironmentProvider>
    )

    environment.mock.rejectMostRecentOperation(operation => new Error(`Some error`))
    await waitFor(() => expect(getByText('Something went wrong:')).toBeTruthy())
  })
  it('should render loading then render EventList', async () => {
    const environment = createMockEnvironment()
    const { getByText, findByText, container } = render(
      <RelayEnvironmentProvider environment={environment}>
        <BrowserRouter>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <EventList />
          </MuiPickersUtilsProvider>
        </BrowserRouter>
      </RelayEnvironmentProvider>
    )

    expect(getByText('Loading events...')).toBeTruthy()

    environment.mock.resolveMostRecentOperation(operation => {
      return MockPayloadGenerator.generate(operation, {
        PageInfo() {
          return {
            "hasNextPage": true,
            "hasPreviousPage": false,
            "startCursor": "YXJyYXljb25uZWN0aW9uOjA=",
            "endCursor": "YXJyYXljb25uZWN0aW9uOjE="
          }
        },
        WorldEdge() {
          return [
            {
              "cursor": "YXJyYXljb25uZWN0aW9uOjA=",
              "node": {
                "id": "RXZlbnQ6Y2tkbGRmZnc2MDAxOHJzeGFkN3UwYTg3Yg==",
                "title": "Place 1",
                "time": "2018-07-22T02:30:00.000Z",
                "image": "http://example.com/image.png",
                "location": {
                  "city": "Brisbane",
                  "state": "Queensland",
                  "country": "Australia"
                },
                "availableSeats": []
              }
            },
            {
              "cursor": "YXJyYXljb25uZWN0aW9uOjE=",
              "node": {
                "id": "RXZlbnQ6Y2tkbGRmZzFwMDAyNHJzeGE2N3pjcWs3eg==",
                "title": "Place 2",
                "time": "2018-07-24T02:30:00.000Z",
                "image": "http://example.com/image.png",
                "location": {
                  "city": "Cairns",
                  "state": "Queensland",
                  "country": "Australia"
                },
                "availableSeats": [
                  {
                    "id": "U2VhdDpCMjk="
                  },
                  {
                    "id": "U2VhdDpXMjU="
                  }
                ]
              }
            }
          ]
        },
      })
    })

    await findByText(/Keywords/)
    expect(container).toMatchSnapshot()
  })
})