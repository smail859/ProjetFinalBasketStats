import { Typography, Checkbox } from "@mui/material";
import { useMemo } from "react";
import CustomButton from "./buttons/Button";

function CalculData({ data, onChange, onClick, trainingName }) {
  // Utilisation de useMemo pour calculer le total des points une seule fois
  const totalPoints = useMemo(() => {
    if (data.length > 0) {
      // Réduction de la donnée pour calculer le total pour chaque colonne
      return data.reduce(
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
      // Si la donnée est vide, on retourne un tableau de 0
      return [0, 0, 0, 0, 0];
    }
  }, [data]);

  // Fonction qui affiche le titre de chaque colonne qui a un total inférieur à 175,
  // ainsi qu'une case à cocher associée à ce titre
  const render = (totalPoints) => {
    return totalPoints.map((total, index) =>
      total < 175 ? (
        <Typography variant="h6">
          {trainingName[index].name}{" "}
          <Checkbox name={trainingName[index].name} onChange={onChange} />
        </Typography>
      ) : null
    );
  };

  // Rendu des titres et des cases à cocher, avec un bouton pour ajouter les résultats
  return (
    <>
      {render(totalPoints)}{" "}
      <CustomButton onClick={onClick}>Ajouter</CustomButton>
    </>
  );
}

export default CalculData;
