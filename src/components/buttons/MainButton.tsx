import Button from '@mui/material/Button';
import { Id } from 'react-toastify';

interface IProps {
    content: string | JSX.Element;
    font: string;
    width: TWidth; 
    radius: string;
    onClick?: () => void; 
}

export type TWidth = { xs?: string, sm?: string, md?: string, lg?: string }


export const MainButton = (props: IProps) => {
    return (
        <Button 
        onClick={props.onClick}
        variant="contained" sx={{
            color: 'white',
            width: props.width,
            fontFamily: props.font,
            borderRadius: props.radius,
            transition: '0.4s',
        }}>{props.content}</Button>
    );
};
