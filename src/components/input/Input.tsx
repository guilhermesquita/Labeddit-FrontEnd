import { TextField, TextFieldVariants } from "@mui/material";

interface IProps{
    content: string;
    type: string;
    width: string;
    color: string;
    multiline: boolean;
    backgroundColor?: string;
    variant: TextFieldVariants;
}

export const InputText = (props: IProps) => {
    return (
        <TextField type={props.type} multiline={props.multiline} variant={props.variant} 
        size="medium" label={props.content} 
        placeholder={props.content} 
        sx={{
                transition: '0.4s',
                width: props.width,
                m: 1,
                color: props.color,
                backgroundColor: props.backgroundColor
            }
        }/>
    )
}