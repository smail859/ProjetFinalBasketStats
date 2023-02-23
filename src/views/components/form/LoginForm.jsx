import "./form.css";
import { useState } from "react";
import {
  Card,
  Checkbox,
  TextField,
  Box,
  CardActions,
  CardContent,
  Button,
  Typography,
  FormControlLabel,
  Link,
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";

function LoginForm() {
  const [user, setUser] = useState();
  const [newUser, setNewUser] = useState();
  const [input, setInput] = useState();

  return (
    <form className="form">
      <Card
        sx={{
          minWidth: 400,
          display: "flex",
          flexDirection: "column",
          padding: 5,
        }}
      >
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography color="text.primary" gutterBottom>
              Bakset-Stats Logo
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography color="text.secondary" gutterBottom>
              Te revoila, connecte toi
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <PersonIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              fullWidth
              margin="normal"
              id="input-pseudo"
              label="Pseudo ou Email"
              variant="standard"
            />
          </Box>

          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <LockIcon sx={{ color: "action.active", mr: 1, my: 0.8 }} />
            <TextField
              fullWidth
              margin="normal"
              id="input-password"
              label="Mot de passe"
              variant="standard"
            />
          </Box>

          <Box
            sx={{
              m: 4,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <FormControlLabel
              control={<Checkbox />}
              label="Se souvenir de moi?"
            />
            <Link href="#" underline="none">
              {"Mot de passe oublié"}
            </Link>
          </Box>
        </CardContent>

        <CardActions
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button size="big">Connexion</Button>
        </CardActions>
      </Card>
      <Box
        sx={{
          m: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link href="#" underline="none">
          {"Nouveau? Inscrit-toi"}
        </Link>
      </Box>
    </form>
  );
}

export default LoginForm;
