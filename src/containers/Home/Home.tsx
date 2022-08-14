import image from '@assets/me.png'
import { exampleValue } from '@constants'

import styles from './Home.module.scss'

// Destructure the styles.
const { heroImage, article, header, subheader } = styles

// Animation
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 0.5,
        },
    },
}

function Home(): JSX.Element {
    return (
        <article className={article}>
            <img className={heroImage} src={image} />
            <h1 className={header}>
                Welcome to the {import.meta.env.VITE_PROJECT_NAME}!
            </h1>
            <h2 className={subheader}>
                Grab a {exampleValue}, and start building.
            </h2>
        </article>
    )
}

export default Home
