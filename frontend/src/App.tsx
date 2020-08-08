import React from 'react';

import { RelayEnvironmentProvider } from 'react-relay/hooks'
import environment from 'providers/relay/environment'

import { ThemeProvider, CssBaseline } from '@material-ui/core'
import theme from 'providers/theme'

import { ErrorBoundary } from 'react-error-boundary'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
const Home = React.lazy(() => import('pages/Home'))
const EventDetails = React.lazy(() => import('pages/EventDetails'))

const App = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ErrorBoundary fallback={<>Routing error</>}>
          <React.Suspense fallback='Loading page...'>
            <Router>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/event/:eventId' component={EventDetails} />
              </Switch>
            </Router>
          </React.Suspense>
        </ErrorBoundary>
      </ThemeProvider>
    </RelayEnvironmentProvider>
  )
}

export default App
