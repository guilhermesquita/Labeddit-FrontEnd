import { Box, CircularProgress } from "@mui/material";
import Logo from "../../assets/logo/logo2.svg";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../store/AuthContext/AuthContext";
import { Fonts } from "../../fonts";
import { useGetUserById } from "../../hooks/getUserById";
import { idUser } from "../../service/api";

export const Header = () => {
  const auth = useContext(Context);
  const exitUser = () => {
    auth?.setAuthenticated(false);
    localStorage.removeItem("token");
  };

  const [getUserById] = useGetUserById();

  const [nameUser, setNameUser] = useState();

  useEffect(() => {
    const getUser = async () => {
      if (auth?.authenticated) {
        const user = await getUserById(idUser as string);
        setNameUser(user.name);
      }
    };
    getUser();
  });

  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "secondary.main",
        paddingTop: "15px",
        paddingBottom: "15px",
        paddingLeft: "40px",
        paddingRight: "40px",
        maxHeight: "80px",
      }}
    >
      <Box
        component="p"
        sx={{
          maxWidth: "5%",
          fontFamily: Fonts ? Fonts.NotoSans : "sans-serif",
          cursor: "pointer",
          fontWeight: "500",
        }}
      >
        {nameUser}
      </Box>
      <a href="/">
        <img src={Logo} height="50px" />
      </a>
      <Box
        component="button"
        onClick={exitUser}
        sx={{
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
          color: "#4088CB",
          transition: "0.5s",
          fontWeight: "600",
          fontFamily: Fonts ? Fonts.NotoSans : "sans-serif",
          ":hover": {
            color: "#22639E",
          },
        }}
      >
        Logout
      </Box>
    </Box>
  );
};
