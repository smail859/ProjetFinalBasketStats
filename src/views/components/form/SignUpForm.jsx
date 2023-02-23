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
  FormGroup,
  FormControlLabel,
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

function SignUpForm() {
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
              Salut ! Inscrit-toi
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <PersonIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              fullWidth
              margin="normal"
              id="input-pseudo"
              label="Pseudo"
              variant="standard"
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <EmailIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              fullWidth
              margin="normal"
              id="input-email"
              label="Email"
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
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <LockIcon sx={{ color: "action.active", mr: 1, my: 0.8 }} />
            <TextField
              fullWidth
              margin="normal"
              id="input-confirmPassword"
              label="Confirmer le mot de passe"
              variant="standard"
            />
          </Box>
          <Box sx={{ m: 4 }}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="J'accepte les termes d'utilisation"
              />
            </FormGroup>
          </Box>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button size="big">S'inscrire</Button>
        </CardActions>
      </Card>
    </form>
  );
}

export default SignUpForm;
