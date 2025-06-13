import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Rating,
  Typography,
} from "@mui/material";

type DashboardProjectCardProps = {
  title: string;
  description: string;
  rating: number;
  avatar: string;
  reviewComment: string;
};

export const DashboardProjectCard = ({
  title,
  description,
  rating,
  avatar,
  reviewComment,
}: DashboardProjectCardProps) => {
  return (
    <Card>
      <CardHeader>
        <Avatar src={avatar} />
        <Rating value={rating} />
      </CardHeader>
      <CardContent>
        <Typography>{title}</Typography>
        <Typography>{description}</Typography>
        <Divider />
        <Typography>{reviewComment}</Typography>
      </CardContent>
    </Card>
  );
};
