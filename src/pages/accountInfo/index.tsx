import { Box, Typography } from "@mui/material";
import Dashboard from "../../components/dashboard";
import { useEffect, useState } from "react";
import Button from "../../components/button";
import AccountTable from "./accountTable";
import AccountModal from "./accountModal";
import BankAccount from "./bankAccount";
const tableHeaderData = ["Date", "Beneficiary", "Bank", "Country", "Amount"];

const AccountInfo = () => {
  const [userName, setUserName] = useState<string | null>("");
  const [show, setShow] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openBankAccount, setOpenBankAccount] = useState(false);
  const handleOpenBankAccount = () => setOpenBankAccount(true);
  const handleCloseBankAccount = () => setOpenBankAccount(false);
  console.log(userName);

  useEffect(() => {
    const fetch = sessionStorage.getItem("firstName");
    setUserName(fetch);
  }, []);

  const handleSubmit = () => {
    setShow((show) => !show);
  };
  return (
    <Dashboard>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginRight: "2%",
          marginLeft: "2%",
          marginTop: "2%",
        }}
      >
        <Typography
          sx={{
            fontSize: "30px",
            fontWeight: 700,
            fontFamily: "sans-serif",
          }}
        >
          Account Info
        </Typography>

        <Typography
          sx={{
            fontWeight: 600,
          }}
        >{`Welcome ${userName}`}</Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          // width: "100%",
          marginRight: "2%",
        }}
      >
        <Box
          sx={{
            border: "1px solid #f7931a",
            padding: "3%",
            width: "25%",
            marginTop: "5%",
            marginLeft: "2%",
            background: "#F7931A1A",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "14px",
              }}
            >
              Account balance
            </Typography>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "30px",
              }}
            >
              {show ? "N300,000" : "********"}
            </Typography>
          </Box>
          <Box
            sx={{
              width: "40%",
            }}
          >
            <Button type={""} variant={"contained"} onClick={handleSubmit}>
              {show ? "hide" : "show"}
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 3,
          }}
        >
          <Button
            type={"submit"}
            variant="outlined"
            background="#313957"
            onClick={handleOpenBankAccount}
          >
            + Add bank account
          </Button>
          <Button
            type={"submit"}
            variant="outlined"
            background="#313957"
            onClick={handleOpen}
          >
            + Fund Account
          </Button>
        </Box>
      </Box>
      <Box>
        <Typography
          sx={{
            marginLeft: "2%",
            marginTop: "2%",
            fontSize: "20px",
            fontWeight: 700,
          }}
        >
          History
        </Typography>
        <AccountTable tableHeaderData={tableHeaderData} />
      </Box>
      <AccountModal open={open} onClose={handleClose} />
      <BankAccount open={openBankAccount} onClose={handleCloseBankAccount} />
    </Dashboard>
  );
};

export default AccountInfo;
