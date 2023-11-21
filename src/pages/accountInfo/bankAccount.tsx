import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Input from "../../components/input";
import Button from "../../components/button";

const SelectBank = [
  {
    bank: "Gt bank",
  },
  {
    bank: "Access bank",
  },
  {
    bank: "Polaris",
  },
  {
    bank: "Gt bank",
  },
];

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

export default function BankAccount({ open, onClose }: Props) {
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
              marginBottom: "35px",
            }}
          >
            Add Bank Account
          </Typography>

          <select style={{ height: "35px", width: "100%" }}>
            {SelectBank.map((bank) => (
              <option key={bank.bank}>{bank.bank}</option>
            ))}
          </select>

          <Input
            placeholder={"Account number"}
            type={"text"}
            label={"Account number"}
            onKeyPress={(event: any) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
          />
          <Input
            placeholder={"Account name"}
            type={"text"}
            label={"Account name"}
          />
          <Box
            sx={{
              marginTop: "20px",
            }}
          >
            <Button type={""} variant={"contained"}>
              {" "}
              Add account
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
