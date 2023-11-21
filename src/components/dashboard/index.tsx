import { Box } from "@mui/material";
import Sidebar from "../sidebar";
import { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const Dashboard: FC<Props> = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Box>
        <Sidebar />
      </Box>
      <Box
        sx={{
          width: "100%",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Dashboard;
