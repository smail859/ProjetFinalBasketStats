import { Card, CardContent, Typography, List } from "@mui/material";

function CalendarInfos() {
  return (
    <Card sx={{ width: 400, margin: 4 }}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography>
          Prochain Entrainement Conseillé : Tir a 2 points
        </Typography>
        <List>
          <Typography>Date d'entrainement : Lundi 10 mars </Typography>
          <Typography>Description</Typography>
        </List>
        <Typography>
          Prochain Entrainement Sélectionné : Tir a 3 points
        </Typography>
        <List>
          <Typography>Date d'entrainement : Lundi 10 mars </Typography>
          <Typography>Description</Typography>
        </List>
      </CardContent>
    </Card>
  );
}

export default CalendarInfos;
