import PropTypes from "prop-types";
// MATERIAL UI
import {
  Card,
  Checkbox,
  Box,
  CardActions,
  CardContent,
  Typography,
  FormControlLabel,
  Link,
  Alert,
  AlertTitle,
} from "@mui/material";
// MATERIAL ICONS
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
// COMPONENTS
import FormField from "../Field/FormField";
import CustomButton from "../buttons/Button";
// STYLE
import "./form.css";

function Form({
  handleSubmit,
  onSubmit,
  title,
  name,
  formType,
  emailLabel,
  passwordLabel,
  isSubmitting,
  isValid,
  isSubmitSuccessful,
  errors,
  hasError,
  register,
  button,
  link,
  nameLink,
}) {
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form_signup">
      <Card className="card_form">
        <CardContent className="card_content">
          <Box className="cardTitle">
            <Typography gutterBottom>{title}</Typography>
            <Typography gutterBottom>{name}</Typography>
          </Box>

          {isSubmitSuccessful && !hasError ? (
            <Alert severity="success">
              <AlertTitle>
                {formType === "3-field"
                  ? "Inscription réussie"
                  : "Connexion réussie"}
              </AlertTitle>
              Vous allez être redirigé vers votre page personnelle
            </Alert>
          ) : null}

          {formType === "3-field" && ( // si le formulaire est de type "3-fields", affiche un champ pour le pseudo
            <Box className="form-field-box ">
              <PersonIcon className="formIcon" />
              <FormField
                type="text"
                label="Pseudo"
                name="pseudo"
                rules={{
                  required: "Vous devez entrer un pseudo",
                  minLength: {
                    value: 6,
                    message: "Le pseudo doit contenir au moins 6 caractere",
                  },
                }}
                register={register} // enregistre le champ avec React Hook Form
                errors={errors} // affiche les erreurs de validation éventuelles
              />
            </Box>
          )}

          {/* Champ "Email" */}
          <Box className="form-field-box ">
            <EmailIcon className="formIcon" />
            <FormField
              type="email"
              label={emailLabel}
              name="email"
              rules={{ required: "Vous devez entrer une adresse email valide" }}
              register={register}
              errors={errors}
            />
          </Box>

          {/* Champ "Mot de passe" */}
          <Box className="form-field-box ">
            <LockIcon className="formIcon" />
            <FormField
              type="password"
              label={passwordLabel}
              name="password"
              rules={{
                required: "Vous devez entrer un mot de passe",
                minLength: {
                  value: 8,
                  message: "le mot de passe doit contenir au moins 8 caractere",
                },
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
                  message:
                    "Le mot de passe doit contenir au moins 8 caractères et une majuscule et un chiffre ",
                },
              }}
              register={register}
              errors={errors}
            />
          </Box>
          <Box className="formCheckbox">
            {formType === "3-field" ? (
              <FormControlLabel
                control={<Checkbox {...register("rememberMe")} />}
                label="J'accpete les condition d'utilisation"
              />
            ) : null}

            <Link href="#" underline="none">
              {"Mot de passe oublié"}
            </Link>
          </Box>
        </CardContent>
        <CardActions className="formSubmit">
          <CustomButton
            disabled={isSubmitting || !isValid}
            type="submit"
            size="small"
            variant="button"
          >
            {button}
          </CustomButton>
        </CardActions>
      </Card>
      <Box className="link-box">
        <Link href={link} underline="none">
          {nameLink}
        </Link>
      </Box>
    </form>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  title: PropTypes.string,
  name: PropTypes.string,
  formType: PropTypes.string,
  emailLabel: PropTypes.string.isRequired,
  passwordLabel: PropTypes.string.isRequired,
  isSubmitting: PropTypes.bool,
  isValid: PropTypes.bool.isRequired,
  isSubmitSuccessful: PropTypes.bool.isRequired,
  errors: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
  button: PropTypes.string.isRequired,
  nameLink: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Form;
