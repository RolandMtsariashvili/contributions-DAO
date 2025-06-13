import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import MergeTypeIcon from "@mui/icons-material/MergeType";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import CurrencyBitcoinRoundedIcon from "@mui/icons-material/CurrencyBitcoinRounded";
import SmartScreenRoundedIcon from "@mui/icons-material/SmartScreenRounded";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import ContentPasteOutlinedIcon from "@mui/icons-material/ContentPasteOutlined";
import { DashboardProjectCard } from "@/components/DashboardProjectCard";

const projectCategories: { name: string; icon: React.ReactNode }[] = [
  { name: "Open source", icon: <MergeTypeIcon /> },
  { name: "Blockchain", icon: <CodeRoundedIcon /> },
  { name: "Cryptocurrency", icon: <CurrencyBitcoinRoundedIcon /> },
  { name: "Smart Contract", icon: <ContentPasteOutlinedIcon /> },
  { name: "Decentralized App", icon: <SmartScreenRoundedIcon /> },
  { name: "NFT Projects", icon: <TextSnippetOutlinedIcon /> },
  { name: "Community", icon: <TextSnippetOutlinedIcon /> },
  { name: "Recent Contributions", icon: <TextSnippetOutlinedIcon /> },
];

export default function Home() {
  return (
    <Container maxWidth="xl">
      <Card sx={{ mt: 1, pt: 7, pb: 4, px: 4 }}>
        <CardContent>
          <Typography variant="h4" maxWidth={600}>
            Your gateway to open-source contributions. Join. Contribute. Earn.
          </Typography>
          <Stack sx={{ mt: 4 }} flexDirection="row" gap={2}>
            <TextField label="Enter project name or tag" sx={{ width: 500 }} />
            <Button variant="contained" sx={{ width: 100 }}>
              Search
            </Button>
          </Stack>
        </CardContent>
      </Card>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Explore Projects
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 2,
          }}
        >
          {projectCategories.map((category) => (
            <Card
              key={category.name}
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                p: 2,
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.04)",
                },
              }}
            >
              <Box sx={{ mb: 1 }}>{category.icon}</Box>
              <Typography variant="subtitle1">{category.name}</Typography>
            </Card>
          ))}
        </Box>

        <Box>
          <Typography>Latest Projects</Typography>
          <DashboardProjectCard
            title="Project 1"
            description="Description 1"
            rating={4.5}
            avatar="https://via.placeholder.com/150"
            reviewComment="Review comment 1"
          />
        </Box>
      </Box>
    </Container>
  );
}
