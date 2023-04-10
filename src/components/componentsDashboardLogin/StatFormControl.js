// REACT
import { useState } from "react";
// MATERIAL UI
import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
// JSON
import title from "../../assets/title.json";
// STYLE
import "./statForm.css";

/**
 * Composant permettant de sélectionner le type de statistique à afficher.
 *
 * @param {Object} props - Les propriétés du composant
 * @param {Function} props.onStatChange - La fonction à appeler lorsqu'une statistique est sélectionnée
 * @param {Function} props.onChartIndexChange - La fonction à appeler lorsqu'un indice de graphique est sélectionné
 * @param {Object[]} props.data - Les données à afficher sous forme de graphique
 * @returns {JSX.Element} - Le composant de sélection de statistique
 */
function StatFormControl({ onStatChange, onChartIndexChange, data }) {
  // État local qui stocke l'indice de la statistique sélectionnée
  const [selectedStatIndex, setSelectedStatIndex] = useState(0);

  /**
   * Fonction appelée lorsqu'une statistique est sélectionnée.
   * Appelle la fonction onStatChange avec les données à afficher pour la statistique sélectionnée.
   *
   * @param {Object} event - L'événement de changement de sélection de radio bouton
   */
  const handleStatChange = (event) => {
    const selectedIndex = parseInt(event.target.value);
    setSelectedStatIndex(selectedIndex);

    // Si l'option "Tous les graphiques" est sélectionnée, créer les données de tous les graphiques
    if (selectedIndex === title.length) {
      const allData = title.map((t, index) => ({
        name: t.name,
        [`data${index}`]: data.map((d) => d[t.key]),
      }));
      onStatChange(allData);
      onChartIndexChange(selectedIndex);
    }
    // Sinon, créer les données pour le graphique sélectionné
    else {
      const selectedData = {
        name: title[selectedIndex].name,
        [`data${selectedIndex}`]: data.map((d) => d[title[selectedIndex].key]),
      };
      onStatChange(selectedData);
      onChartIndexChange(selectedIndex);
    }
  };

  return (
    <Box className="stat_container">
      <FormControl component="fieldset">
        <RadioGroup
          name="radio-stat"
          value={selectedStatIndex}
          onChange={handleStatChange}
        >
          {/* Option pour afficher tous les graphiques */}
          <FormControlLabel
            value={title.length}
            control={<Radio />}
            label="Tous les graphiques"
          />

          {/* Options pour afficher les graphiques individuels */}
          {title.map((title, index) => (
            <FormControlLabel
              key={index}
              value={index}
              control={<Radio />}
              label={title.name}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Box>
  );
}

export default StatFormControl;
