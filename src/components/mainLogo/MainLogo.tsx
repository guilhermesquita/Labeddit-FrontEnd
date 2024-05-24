import { Box } from "@mui/material"
import { Fonts } from "../../fonts"
import Logo from '../../assets/logo/logo.png'

export const MainLogo = () => {
    return (
        <Box component='section' sx={{
            display: "flex",
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            mt: { xs: '50px', md: '100px' },
            flexGrow: 0,
            fontFamily: Fonts ? Fonts.NotoSans : 'sans-serif',
            color: '#373737',
            fontSize: { xs: '16px', md: '20px' }
        }}>
            <img src={Logo} alt="LabEddit Logo" style={{ height: '5%' }} />
            <h1 style={{cursor: "pointer"}}>LabEddit</h1>
        </Box>
    )
}