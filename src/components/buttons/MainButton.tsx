import Button from '@mui/material/Button';

interface IProps {
    content: string
    font: string
    width: string
    radius: string
}

export const MainButton = (props: IProps) => {
    return (
        <Button variant="contained" sx={
            {
                color: 'white',
                width: props.width,
                fontFamily: props.font,
                borderRadius: props.radius,
                transition: '0.4s',
            }
        }>{props.content}</Button>
    )
}