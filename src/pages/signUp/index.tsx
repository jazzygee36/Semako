import { Typography } from "@mui/material";
import Box from "@mui/material/Box/Box";
import Input from "../../components/input";
import Button from "../../components/button";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import { useForm } from "react-hook-form";
import Loading from "../../components/loading";
import { useState } from "react";
import { SignUpProps } from "../../components/interface/index";
import { SignUpValidation } from "../../components/schemaValidation";
import { zodResolver } from "@hookform/resolvers/zod";

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpProps>({
    resolver: zodResolver(SignUpValidation),
  });
  const handleSignUp = (data: SignUpProps) => {
    setLoading(true);
    sessionStorage.setItem("firstName", data.firstName);
    navigate("/");
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        justifyItems: "center",
      }}
    >
      <Box sx={{ width: "53%", margin: "4% 10% 0% 10%" }}>
        <Typography
          sx={{
            color: "#0C1421",
            fontSize: "20px",
          }}
        >
          Welcome to
        </Typography>
        <Typography
          sx={{
            color: "#0C1421",
            fontSize: "30px",
            fontWeight: 700,
          }}
        >
          Semako Thrifting Union
        </Typography>

        <form onSubmit={handleSubmit(handleSignUp)}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            <Input
              placeholder={"First Name"}
              type={"text"}
              label={"First Name"}
              register={{ ...register("firstName") }}
              border={errors?.firstName?.message ? "#DF1111 solid 1px" : ""}
            />

            <Input
              placeholder={"Last Name"}
              type={"text"}
              label={"Last Name"}
              register={{ ...register("lastName") }}
              border={errors?.lastName?.message ? "#DF1111 solid 1px" : ""}
            />
          </Box>
          <Input
            placeholder={"Email"}
            type={"email"}
            label={"Email"}
            register={{ ...register("email") }}
            border={errors?.email?.message ? "#DF1111 solid 1px" : ""}
          />
          <Input
            placeholder={"Phone number"}
            type={"text"}
            maxLength="11"
            label={"Phone number"}
            register={{ ...register("phoneNumber") }}
            border={errors?.phoneNumber?.message ? "#DF1111 solid 1px" : ""}
            onKeyPress={(event: any) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
          />
          <Input
            placeholder={"Create Password"}
            type={"password"}
            label={"Password"}
            register={{ ...register("password") }}
            border={errors?.password?.message ? "#DF1111 solid 1px" : ""}
          />
          <Box sx={{ marginTop: "30px", marginBottom: "20px" }}>
            <Button type="submit" variant="contained">
              {loading ? <Loading /> : "Create Account"}
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
          Already have an account?{" "}
          <span
            style={{ cursor: "pointer", textDecoration: "underline" }}
            onClick={() => navigate("/")}
          >
            Log in
          </span>
        </Typography>
      </Box>

      <div className="heroSection"></div>
    </Box>
  );
};

export default SignUp;
