import image from '@assets/me.png'
import { exampleValue } from '@constants'
import { m } from 'framer-motion'

import styles from './Home.module.scss'

// Destructure the styles.
const { heroImage, article, header, subheader } = styles

function Home(): JSX.Element {
    return (
        <article className={article}>
            <img className={heroImage} src={image} />
            <m.h1 layout className={header}>
                Welcome to the {import.meta.env.VITE_PROJECT_NAME}!
            </m.h1>
            <m.h2 layout className={subheader}>
                Grab a {exampleValue}, and start building.
            </m.h2>
        </article>
    )
}

export default Home
