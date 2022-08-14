import { Home } from '@containers'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

import styles from './App.module.scss'

// Destructure the styles.
const { layout } = styles

function App(): JSX.Element {
    return (
        <section className={layout}>
            <Routes>
                <Route index element={<React.Suspense children={<Home />} />} />
            </Routes>
        </section>
    )
}

export default App
