import { Box } from "@mui/material"
import { Fonts } from "../../fonts"

interface IProps {
    content: string,
    contentStrong?: string,
    link: string
}

export const Footer = ({ content, contentStrong, link }: IProps) => {
    return (
        <Box component='footer' sx={{
            display: "flex",
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            padding: '20px 0',
            backgroundColor: '#f9f9f9',
            fontFamily: Fonts ? Fonts.IbmPlexSans : 'sans-serif',
            fontSize: { xs: '14px', md: '16px' },
            color: '#000',
            borderTop: '1px solid #ddd'
        }}>
            <Box component='a' sx={{
                textDecoration: 'none',
                fontFamily: Fonts ? Fonts.NotoSans : 'sans-serif',
                color: 'black',
                '&:hover': {
                    textDecoration: 'underline'
                }
            }} href={link}>{content} {contentStrong && <strong>{contentStrong}</strong>}

            </Box>
        </Box>
    )
}

<strong>Cadastro</strong>