import '@fontsource/inter'
import 'the-new-css-reset/css/reset.css'

import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Home } from '../routes'

function App() {
    return (
        <Routes>
            <Route index element={<React.Suspense children={<Home />} />} />
        </Routes>
    )
}

export default App
