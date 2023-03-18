import {
  Card,
  CardContent,
  CardMedia,
  TextField,
  Typography,
} from "@mui/material";

function ScoreCard({ title, score1, score2, onScoreChange }) {
  return (
    <Card sx={{ width: 200, margin: 4 }}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CardMedia component="img" image="https://picsum.photos/200/100/" />
        <Typography>{title}</Typography>
        <TextField
          fullWidth
          margin="normal"
          size="small"
          label="Enter ton score sur 50"
          variant="standard"
          value={score1}
          onChange={(event) => onScoreChange(event, "score1")}
        />

        <TextField
          fullWidth
          margin="normal"
          size="small"
          label="Enter ton score sur 50"
          variant="standard"
          value={score2}
          onChange={(event) => onScoreChange(event, "score2")}
        />
      </CardContent>
    </Card>
  );
}

export default ScoreCard;
