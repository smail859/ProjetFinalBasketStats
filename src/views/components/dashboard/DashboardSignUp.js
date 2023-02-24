import { useState } from "react";

import "./dashbordSignUp.css";
import {
  Card,
  TextField,
  Box,
  CardContent,
  Button,
  Typography,
  CardMedia,
  Checkbox,
} from "@mui/material";

function DashboardSignUp() {
  const [state, setState] = useState([
    "Tir2Points",
    "Tir3Points",
    "LayupMG",
    "LayupMD",
    "Lancer Franc",
  ]);
  return (
    <Card
      sx={{
        minWidth: 400,
        display: "flex",
        flexDirection: "column",
        padding: 5,
      }}
    >
      <CardContent>
        <Box>
          <Typography color="text.primary" gutterBottom>
            Entrainements par defaut
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <Button>Envoyées les données</Button>
        </Box>

        <Box sx={{ display: "flex" }}>
          <Card>
            <CardContent>
              <Typography>Titre 1</Typography>
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image="/basket.jpg"
              />
              <TextField></TextField>
              <TextField></TextField>
              <Checkbox />
            </CardContent>
          </Card>
        </Box>
      </CardContent>
    </Card>
  );
}

export default DashboardSignUp;
