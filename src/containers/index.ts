import * as React from 'react'

import * as Application from './App/App'

export const App = Application.default
export const Home = React.lazy(() => import('./Home/Home.js'))
