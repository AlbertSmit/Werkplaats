type Props = {
    children?: JSX.Element
}

const Button: React.FC<Props> = ({ children }) => {
    return <button>{children}</button>
}

export default Button
