import "./form.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
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
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

const wait = function (duration = 1000) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, duration);
  });
};

function SignUpForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isValid, isSubmitSuccessful },
  } = useForm({ mode: "onChange" });

  const onSubmit = async (data) => {
    await wait(2000);
    console.log(data);
  };
  console.log(isValid);

  const [checked, setChecked] = useState(false);

  // const handleChange = (event) => {
  //   if (checked === true) {

  //   }
  //   setChecked(event.target.checked);
  // };

  if (isSubmitSuccessful) {
    // return redirection + envoie des données a la bdd
  }

  return (
    //1. création du formulaire
    <form onSubmit={handleSubmit(onSubmit)} className="form">
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
              Salut, Inscrit-toi
            </Typography>
          </Box>

          {isSubmitSuccessful && (
            <div className=".alert alert-succes">
              Inscription reussi et envoie des données
            </div> // redirection vers la page perso du compte envoie des données vers la bdd
          )}

          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <PersonIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              fullWidth
              type="text"
              margin="normal"
              id="input-user"
              label="Nom d'utilisateur"
              variant="standard"
              {...register("user", {
                required: true,
                minLength: {
                  value: 3,
                  message:
                    "Le nom d'utilisateur doit faire au moins 3 caractères",
                },
              })}
            />
          </Box>
          {errors.user && <p>{errors.user.message}</p>}

          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <EmailIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              fullWidth
              type="email"
              margin="normal"
              id="input-email"
              label="Adresse Email"
              variant="standard"
              {...register("email", { required: true })}
            />
          </Box>
          {errors.email && <p>{errors.email.message}</p>}

          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <LockIcon sx={{ color: "action.active", mr: 1, my: 0.8 }} />
            <TextField
              fullWidth
              type="password"
              margin="normal"
              id="input-password"
              label="Mot de passe"
              variant="standard"
              {...register("password", {
                required: "Vous devez entrer un mot de passe",
                minLength: {
                  value: 8,
                  message: "le mot de passe doit contenir au moins 8 caractere",
                },
                // pattern: {
                //   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                //   message:
                //     "Le mot de passe doit contenir au moins 1 chiffres et une majuscule ",
                // },
              })}
            />
          </Box>
          {errors.password && <p>{errors.password.message}</p>}

          <Box
            sx={{
              m: 4,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <FormControlLabel
              control={<Checkbox checked={checked} />}
              label="j'accepte les termes d'utilisations."
            />
          </Box>
        </CardContent>

        <CardActions
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button disabled={isSubmitting || !isValid} type="submit" size="big">
            Connexion
          </Button>
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
          {"Déja inscrit? Connecte-toi"}
        </Link>
      </Box>
    </form>
  );
}

export default SignUpForm;
