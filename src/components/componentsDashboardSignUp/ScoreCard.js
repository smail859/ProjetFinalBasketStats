// MATERIAL UI
import {
  Card,
  CardContent,
  CardMedia,
  TextField,
  Typography,
} from "@mui/material";

function ScoreCard({ title, score1, score2, onChange }) {
  return (
    // Carte principale
    <Card className="card">
      {/* Contenu de la carte */}
      <CardContent className="card-content">
        {/* Image de la carte */}
        <CardMedia
          className="card-media"
          component="img"
          image="https://picsum.photos/200/100/"
        />
        {/* Titre de la carte */}
        <Typography className="card_title">{title}</Typography>
        {/* Champ de saisie pour le score 1 */}
        <TextField
          fullWidth
          margin="normal"
          size="small"
          label="Entre ton score sur 50"
          variant="standard"
          value={score1}
          onChange={(event) => onChange(event, "score1")}
        />
        {/* Champ de saisie pour le score 2 */}
        <TextField
          fullWidth
          margin="normal"
          size="small"
          label="Enter ton score sur 50"
          variant="standard"
          value={score2}
          onChange={(event) => onChange(event, "score2")}
        />
      </CardContent>
    </Card>
  );
}

export default ScoreCard;
