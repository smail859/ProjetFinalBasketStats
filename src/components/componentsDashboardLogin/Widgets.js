// REACT
import { useMemo, useState } from "react";
// MATERIAL UI
import { Card, CardContent, Typography, Box } from "@mui/material";
// MATERIAL ICONS
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
// JSON
import titles from "../../assets/title.json";
// STYLE
import "./widgets.css";

function Widgets({ dataPoints }) {
  // Créer une copie de la variable d'état dataPoints
  const [widgetDataPoints, setWidgetDataPoints] = useState(dataPoints);

  // Calculer le nombre total de points pour chaque mois à partir de la copie de dataPoints
  const totalPointsByMonth = useMemo(() => {
    if (widgetDataPoints.length > 0) {
      return widgetDataPoints.reduce(
        (acc, monthData) => {
          return [
            acc[0] + monthData.data0,
            acc[1] + monthData.data1,
            acc[2] + monthData.data2,
            acc[3] + monthData.data3,
            acc[4] + monthData.data4,
          ];
        },
        [0, 0, 0, 0, 0]
      );
    } else {
      return [0, 0, 0, 0, 0];
    }
  }, [widgetDataPoints]);

  // Récupérer l'icône de flèche appropriée en fonction du total de points pour chaque mois
  const getArrowIcon = (index) => {
    const total = totalPointsByMonth[index];
    if (total > 175) {
      return <ArrowUpwardIcon />;
    } else if (total < 175) {
      return <ArrowDownwardIcon />;
    } else {
      return null;
    }
  };

  return (
    <Box className="box_widgets no-sidebar">
      {/* Boucle pour chaque widget */}
      {titles.map((title, index) => (
        <Card key={title.name} className="widgets_container">
          <CardContent className="widgets_content">
            {/* Titre du widget */}
            <Typography className="widgets_title">{title.name}</Typography>
            {/* Sous-titre du widget */}
            <Typography className="widgets_subtitle">Total</Typography>
            {/* Affichage du nombre total de points pour chaque mois */}
            <Typography variant="body2">
              {totalPointsByMonth[index]}/350 points marqués{" "}
              {getArrowIcon(index)}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default Widgets;
