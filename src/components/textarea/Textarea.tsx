import './Textarea.css'

export type TextareaProps = React.ComponentPropsWithRef<'textarea'>

export function Textarea(props: TextareaProps) {
    return (
        <textarea
            {...props}
            name={props.id || props.placeholder || ''}
            id={props.name || props.id || ''}
            className={`textarea ${props.className || ''}`}
            />
    )
}