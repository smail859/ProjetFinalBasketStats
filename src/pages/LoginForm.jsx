import "../styles/form.css";
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
  Alert,
  AlertTitle,
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";

function LoginForm() {
  const EMAIL_LABEL = "Adresse Email";
  const PASSWORD_LABEL = "Mot de passe";
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isValid, isSubmitSuccessful },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log(data);
    if (data.rememberMe) {
      console.log("Se souvenir de moi a été coché");
    } else {
      console.log("Se souvenir de moi n'a pas été coché");
    }
  };

  if (isSubmitSuccessful) {
    // return redirection
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
              Te revoila, connecte toi
            </Typography>
          </Box>

          {isSubmitSuccessful && (
            <Alert severity="success">
              <AlertTitle>Connexion réussie</AlertTitle>
              Vous allez être redirigé vers votre page personnelle
            </Alert>
          )}

          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <PersonIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              fullWidth
              type="email"
              margin="normal"
              id="input-email"
              label={EMAIL_LABEL}
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
              label={PASSWORD_LABEL}
              variant="standard"
              {...register("password", {
                required: "Vous devez entrer un mot de passe",
                minLength: {
                  value: 8,
                  message: "le mot de passe doit contenir au moins 8 caractere",
                },
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
                  message:
                    "Le mot de passe doit contenir au moins 8 caractères et une majuscule ",
                },
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
              control={<Checkbox {...register("rememberMe")} />}
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
        <Link href="/SignUpForm" underline="none">
          {"Nouveau? Inscrit-toi"}
        </Link>
      </Box>
    </form>
  );
}

export default LoginForm;
