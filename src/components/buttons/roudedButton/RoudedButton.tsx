interface IProps{
    content: string
}

export const RoudedButton = (props: IProps) => {
    return (
        <button>{props.content}</button>
    )
}