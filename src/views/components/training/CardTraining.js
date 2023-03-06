import { Box, Card, CardContent, Typography } from "@mui/material";

function CardTraining({ chartTitles }) {
  const affichageTraining = (index) => {
    switch (index) {
      case 0:
        return (
          <Typography variant="h6" component="h2">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </Typography>
        );
      case 1:
        return (
          <Typography variant="h6" component="h2">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </Typography>
        );
      default:
        return null;
    }
  };

  return (
    <Box>
      <Box
        sx={{
          maxWidth: 500,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "justify",
          marginLeft: 5,
        }}
      >
        {chartTitles.map((title, index) => (
          <Card key={index}>
            <CardContent>
              <Typography variant="h5" color="text.primary">
                Tir 2 points entrainements :
              </Typography>
              {affichageTraining(index)}
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default CardTraining;
