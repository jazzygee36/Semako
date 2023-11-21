import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import Button from "../../components/button";

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

export default function FundAccount({ open, onClose }: Props) {
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
            Choose Account to Fund
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <Button type={""} variant={"outlined"}>
              NGN Naira
            </Button>
            <Button type={""} variant={"outlined"} disabled={true}>
              USD Dolla
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
