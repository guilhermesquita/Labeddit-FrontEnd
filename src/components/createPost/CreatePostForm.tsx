import { Box, Button, Divider, TextField } from "@mui/material";
import { Fonts } from "../../fonts";

export const NewPostForm = () => {
  return (
    <Box
      sx={{
        width: "30%",
        display: "flex",
        gap: "10px",
        flexDirection: "column",
      }}
    >
      <TextField
        multiline
        rows={5}
        fullWidth
        placeholder="Escreva seu post..."
        sx={{
          backgroundColor: "secondary.main",
          borderRadius: "10px",
        }}
      />

      <Button
        variant="contained"
        // onClick={() => handleSubmit(onSubmit)()}
        sx={{
          color: "white",
          width: { xs: "90%", md: "280px", lg: "100%" },
          fontFamily: Fonts ? Fonts.NotoSans : "sans-serif",
          borderRadius: "10px",
          fontSize: "15px",
          fontWeight: "bold",
          transition: "0.4s",
        }}
      >
        {/* {isSubmitting ? <CircularProgress color="secondary" size={25} /> : 'Entrar'} */}
        Postar
      </Button>

      <Box
        component="div"
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Divider
          sx={{

            borderBottomWidth: 2,
            marginTop: "20px",
            marginBottom: "20px",
            borderColor: "primary.main",
            width: "100%",
          }}
        ></Divider>
      </Box>
    </Box>
  );
};
