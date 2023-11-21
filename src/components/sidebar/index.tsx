import { Box, Typography } from "@mui/material";

const Sidebar = () => {
  const Link = [
    {
      title: "Account Info",
      // icon:
    },
  ];

  return (
    <Box
      sx={{
        background: "rgb(8, 22, 48)",
        width: "200px",
        height: "100vh",

        padding: "30px",
      }}
    >
      <Typography
        sx={{
          color: "#fff",
          fontSize: "30px",
          fontWeight: 700,
          textAlign: "center",
          marginBottom: "40%",
        }}
      >
        Semako
      </Typography>

      {Link.map((link) => (
        <Box
          key={link.title}
          sx={{
            color: "#fff",
            fontSize: "20px",
            marginLeft: "10%",
            marginTop: "10%",
          }}
        >
          {link.title}
        </Box>
      ))}
    </Box>
  );
};

export default Sidebar;
