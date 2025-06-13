import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Box, Typography, Container, Paper } from "@mui/material";

export default function ConnectPage() {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            Welcome to Contributions DAO
          </Typography>
          <Typography variant="body1" color="text.secondary" align="center">
            Please connect your wallet to continue
          </Typography>
          <ConnectButton />
        </Paper>
      </Box>
    </Container>
  );
}
