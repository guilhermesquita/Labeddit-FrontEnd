interface IProps{
    content: string;
    type: string
}

export const Input = (props: IProps) => {
    return (
        <input type={props.type} placeholder={props.content}/>
    )
}