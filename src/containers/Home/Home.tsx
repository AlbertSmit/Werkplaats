import { m } from 'framer-motion'

import styles from './Home.module.scss'

// Destructure the styles.
const { article } = styles

function Home(): JSX.Element {
    return (
        <article className={article}>
            <m.h1 layout>Werkplaats.</m.h1>
        </article>
    )
}

export default Home
