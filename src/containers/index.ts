import * as Application from '@containers/App/App'
import * as React from 'react'

export const App = Application.default
export const Home = React.lazy(() => import('./Home/Home.js'))
