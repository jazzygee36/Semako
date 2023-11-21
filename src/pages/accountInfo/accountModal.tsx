import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import Button from "../../components/button";
import FundAccount from "./fundAccount";
import { useState } from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "5px",
};

interface Props {
  open: any;
  onClose: () => void;
}

export default function AccountModal({ open, onClose }: Props) {
  const [openFund, setOpenFund] = useState(false);
  const handleOpen = () => setOpenFund(true);
  const handleClose = () => setOpenFund(false);
  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            sx={{
              textAlign: "center",
              fontWeight: 700,
              fontSize: "18px",
              marginBottom: "15px",
            }}
          >
            Fund Account
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <Button
              type={""}
              variant={"outlined"}
              onClick={() => {
                onClose(), handleOpen();
              }}
            >
              Debit/Credit card
            </Button>
            <Button type={""} variant={"outlined"} disabled={true}>
              Bank deposite
            </Button>
            <Button type={""} variant={"outlined"} disabled={true}>
              Deposite using visual account
            </Button>
          </Box>
        </Box>
      </Modal>
      <FundAccount open={openFund} onClose={handleClose} />
    </div>
  );
}
