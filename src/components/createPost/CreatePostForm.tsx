import { Box, Button, Divider, FormControl, TextField } from "@mui/material";
import { Fonts } from "../../fonts";
import { useForm } from "react-hook-form";
import { useCreatePost } from "../../hooks/createPost";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export const NewPostForm = () => {
  const { register, handleSubmit, formState, reset } = useForm();
  // const { isSubmitting } = formState

  const [createNewPost] = useCreatePost();

  const onSubmit = async (data: any) => {
    const createPost = await createNewPost(data.content);
    if (createPost.status === 500) {
      return toast.error(
        "Não foi possível fazer a postagem. Tente novamente mais tarde!"
      );
    }
    reset();
    window.location.reload();
  };

  return (
    <FormControl
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
        {...register("content", { required: true })}
        placeholder="Escreva seu post..."
        sx={{
          backgroundColor: "secondary.main",
          borderRadius: "10px",
        }}
      />

      <Button
        variant="contained"
        onClick={() => handleSubmit(onSubmit)()}
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
    </FormControl>
  );
};
