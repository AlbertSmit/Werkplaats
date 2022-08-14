type Props = {
    children?: JSX.Element
}

const Example: React.FC<Props> = ({ children }) => {
    return <button>{children}</button>
}

export default Example
