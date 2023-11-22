import {
  TextField,
  Box,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { FC, useState } from "react";
import "./input.css";

interface Props {
  placeholder: string;
  type: string;
  label: string;
  register?: any;
  borderColor?: string;
  border?: string;
  outline?: string;
  onKeyPress?: any;
  maxLength?: string;
}

const Input: FC<Props> = ({
  placeholder,
  type,
  label,
  register,
  border,
  onKeyPress,
  maxLength,
}) => {
  const [visible, setVisible] = useState<boolean>(false);
  const handleTogglePassword = () => {
    setVisible(!visible);
  };

  return (
    <Box sx={{ marginTop: "20px" }}>
      <Typography
        sx={{
          fontSize: "15px",
        }}
      >
        {label}
      </Typography>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <TextField
          placeholder={placeholder}
          type={visible ? "text" : type}
          size="small"
          maxLength={maxLength}
          {...register}
          onFocus={"none"}
          onKeyPress={onKeyPress}
          sx={{
            width: "100%",
            borderColor: "none",
            border: { border },
            outlineWidth: "none",
            borderRadius: "5px",
          }}
          endAdornment={
            type === "password" && (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleTogglePassword}
                  // onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {visible ? "hide" : "show"}kkkkkkkk
                </IconButton>
              </InputAdornment>
            )
          }
        />
      </Box>
    </Box>
  );
};

export default Input;
