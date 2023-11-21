import { Alert, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box/Box";
import Input from "../../components/input";
import { useNavigate } from "react-router-dom";
import "../signUp/SignUp.css";
import { useForm } from "react-hook-form";
import Loading from "../../components/loading";
import { useState } from "react";
import { LoginProps } from "../../components/interface/index";
import { LoginValidation } from "../../components/schemaValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../components/button";
import Google from "../../assets/Google.svg";
import Facebook from "../../assets/Facebook.svg";

const Login = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>({
    resolver: zodResolver(LoginValidation),
  });
  const handleLogin = async (data: LoginProps) => {
    try {
      setLoading(true);
      const firstName = await sessionStorage.getItem("firstName");
      setLoading(false);

      if (firstName === data.firstName) {
        navigate("/account-info");
      } else {
        setError(true);
      }
    } catch (error: any) {
      return error?.results.data;
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        justifyItems: "center",
      }}
    >
      <Box sx={{ width: "50%", margin: "5% 10% 0% 10%" }}>
        {error && (
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert severity="error">
              You don't have an account, create account
            </Alert>
          </Stack>
        )}

        <Typography
          sx={{
            color: "#0C1421",
            fontSize: "30px",

            fontWeight: 700,
          }}
        >
          Welcome to
        </Typography>
        <Typography
          sx={{
            color: "#0C1421",
            fontSize: "14px",
          }}
        >
          Semako Thrifting Union! Please enter your details.
        </Typography>

        <form onSubmit={handleSubmit(handleLogin)}>
          <Input
            placeholder={"Enter First Name"}
            type={"text"}
            label={"First Name"}
            register={{ ...register("firstName") }}
            border={errors?.firstName?.message ? "#DF1111 solid 1px" : ""}
          />

          <Input
            placeholder={"Enter Password"}
            type={"password"}
            label={"Password"}
            register={{ ...register("password") }}
            border={errors?.password?.message ? "#DF1111 solid 1px" : ""}
          />
          <Typography
            sx={{
              color: "#1E4AE9",
              fontSize: "14px",
              textAlign: "right",
              mt: 1,
              cursor: "pointer",
            }}
          >
            Forget password
          </Typography>
          <Box sx={{ marginTop: "15px", marginBottom: "15px" }}>
            <Button type="submit" variant="contained">
              {loading ? <Loading /> : "Login"}
            </Button>
          </Box>
        </form>

        <Typography
          sx={{
            marginTop: "30px",
            textAlign: "center",
            fontSize: "14px",
          }}
        >
          don't have an account?{" "}
          <span
            style={{ cursor: "pointer", textDecoration: "underline" }}
            onClick={() => navigate("/signup")}
          >
            Create account
          </span>
        </Typography>

        <Box
          sx={{
            marginTop: "15px",
            marginBottom: "15px",
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <Button type={"submit"} variant="outlined" background="#313957">
            <img src={Google} alt="google" />{" "}
            <span style={{ marginLeft: "10px" }}>Sign in with Google</span>
          </Button>
          <Button type={"submit"} variant="outlined" background="#313957">
            <img src={Facebook} alt="google" />{" "}
            <span style={{ marginLeft: "10px" }}>Sign in with Facebook</span>
          </Button>
        </Box>
      </Box>

      <div className="heroSection"></div>
    </Box>
  );
};

export default Login;
