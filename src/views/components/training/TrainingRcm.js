import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  Typography,
} from "@mui/material";

function TrainingRcm({ chartTitles, totals }) {
  if (!totals) {
    return <div>Données non disponibles</div>;
  }

  const renderRcm = (rcmData) => {
    if (rcmData > 175) {
      return (
        <Card>
          <CardContent>
            <Typography>
              {chartTitles} <Checkbox />
            </Typography>
          </CardContent>
        </Card>
      );
    } else {
      return (
        <Card>
          <CardContent>
            <Typography>
              Pas d'entrainements conseillé vous avez un score au dessus de 175.
              Choisissez un entrainement ici : <Button>Entraînement</Button>
            </Typography>
          </CardContent>
        </Card>
      );
    }
  };

  return (
    <Box>
      {totals.map((data, index) => (
        <Box key={index}>
          <Card>
            <CardContent>
              <Typography>Entrainement Conseillé</Typography>
              {renderRcm(data)}
            </CardContent>
          </Card>
        </Box>
      ))}
      <CardActions>
        <Button variant="text">Ajouter</Button>
      </CardActions>
    </Box>
  );
}

export default TrainingRcm;
