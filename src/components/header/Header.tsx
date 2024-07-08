import { Box } from "@mui/material"
import Logo  from "../../assets/logo/logo2.svg"
import { useContext } from "react"
import { Context } from "../../store/AuthContext/AuthContext"
import { Fonts } from "../../fonts"

export const Header = () => {

    const auth = useContext(Context)
    const exitUser = () => {
        auth?.setAuthenticated(false)
        localStorage.removeItem('token')
    }

    return(
        <Box component='header' sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "secondary.main",
            // color: "white",
            paddingTop: "15px",
            paddingBottom: "15px",
            paddingLeft: "40px",
            paddingRight: "40px",
            maxHeight: "80px"
        }}>
            <Box component='p' sx={{
                // border: "1px solid black",
                maxWidth: "5%",
                fontFamily: Fonts ? Fonts.NotoSans : 'sans-serif',
            }}>
                geovanio
            </Box>
            <a href="/">
                <img src={Logo} height='50px'/>
            </a>
            <Box component='button' onClick={exitUser} sx={{
                backgroundColor: "transparent",
                border: 'none',
                cursor: "pointer",
                color: '#4088CB',
                transition: "0.5s",
                fontFamily: Fonts ? Fonts.NotoSans : 'sans-serif',
                ":hover": {
                    color: '#22639E'
                }
                // border: "1px solid black"
            }}>
                Logout
            </Box>
        </Box>
    )
}