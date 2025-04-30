import { Button, Container, Typography } from "@mui/material";

export default function Home() {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Contributions DAO
      </Typography>
      <Button variant="contained">Your Protected Content</Button>
    </Container>
  );
}
