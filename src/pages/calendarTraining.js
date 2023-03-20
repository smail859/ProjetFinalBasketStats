import { useState } from "react";
import { Box } from "@mui/material";
import TrainingRcm from "../components/componentsCalendarTraining/TrainingRcm";
import Training from "../components/componentsCalendarTraining/Training";
import Calendar from "react-calendar";

function CalendarTraining() {
  const [value, onChange] = useState(new Date());
  return (
    <Box className="box">
      <TrainingRcm />
      <Training />
      <Calendar onChange={onChange} value={value} />
    </Box>
  );
}

export default CalendarTraining;
