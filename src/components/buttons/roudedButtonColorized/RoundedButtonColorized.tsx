interface IProps{
    content: string
}

export const RoudedButtonColorized = (props: IProps) => {
    return (
        <button>{props.content}</button>
    )
}