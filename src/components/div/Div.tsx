import './Div.css'

export type DivProps = React.ComponentPropsWithRef<'div'>

export function Div(props: DivProps) {
    return (
        <div
            {...props}
            className={`div ${props.className || ''}`}
            />
    )
}