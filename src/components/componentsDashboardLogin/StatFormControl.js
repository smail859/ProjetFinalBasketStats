import { useState } from "react";
import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import title from "../../assets/title.json";

function StatFormControl({ onStatChange, onChartIndexChange, data }) {
  const [selectedStatIndex, setSelectedStatIndex] = useState(0);

  const handleStatChange = (event) => {
    const selectedIndex = parseInt(event.target.value);
    setSelectedStatIndex(selectedIndex);
    if (selectedIndex === title.length) {
      const allData = title.map((t, index) => ({
        name: t.name,
        [`data${index}`]: data.map((d) => d[t.key]),
      }));
      onStatChange(allData);
      onChartIndexChange(selectedIndex);
    } else {
      const selectedData = {
        name: title[selectedIndex].name,
        [`data${selectedIndex}`]: data.map((d) => d[title[selectedIndex].key]),
      };
      onStatChange(selectedData);
      onChartIndexChange(selectedIndex);
    }
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <FormControl component="fieldset">
        <RadioGroup
          name="radio-stat"
          value={selectedStatIndex}
          onChange={handleStatChange}
        >
          <FormControlLabel
            value={title.length} // Utiliser title.length pour l'option "Tous les graphiques"
            control={<Radio />}
            label="Tous les graphiques"
          />
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
