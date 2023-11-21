import { Box, Button } from "@mui/material";
import { FC } from "react";

interface Props {
  type: string;
  children: React.ReactNode;
  variant?: any | undefined;
  background?: string;
  color?: string;
  onClick?: any;
  disabled?: boolean;
}

const ButtonBase: FC<Props> = ({
  type,
  children,
  variant,
  background,
  color,
  onClick,
  disabled,
}) => {
  return (
    <Box>
      <Button
        type={type}
        variant={variant}
        background={background}
        size="small"
        color={color}
        onClick={onClick}
        disabled={disabled}
        sx={{
          // background: "#162D3A",
          width: "100%",
          // color: "#fff",

          height: "35px",

          "&:hover": {
            color: "#000",
            fontWeight: 700,
            background: "#F3F9FA",
          },
        }}
      >
        {children}
      </Button>
    </Box>
  );
};

export default ButtonBase;
