import FormField from "./FormField";
import PropTypes from "prop-types";
import {
  Card,
  Checkbox,
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
import EmailIcon from "@mui/icons-material/Email";
import "../../styles/form.css";

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
  register,
  button,
  link,
  nameLink,
}) {
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="formSignUp">
      <Card className="cardForm">
        <CardContent className="cardContent">
          <Box className="cardTitle">
            <Typography color="text.primary" gutterBottom>
              {title}
            </Typography>
          </Box>
          <Box className="cardSubTitle">
            <Typography color="text.secondary" gutterBottom>
              {name}
            </Typography>
          </Box>

          {isSubmitSuccessful && (
            <Alert severity="success">
              <AlertTitle>Insciption réussie</AlertTitle>
              Vous allez être redirigé vers votre page personnelle
            </Alert>
          )}
          {formType === "3-fields" && (
            <Box className="form-field-box">
              <PersonIcon className="formIcon" />
              <FormField
                type="text"
                label="Pseudo"
                name="pseudo"
                rules={{ required: true }}
                register={register}
                errors={errors}
                className="formField"
              />
            </Box>
          )}

          <Box className="form-field-box">
            <EmailIcon className="formIcon" />
            <FormField
              type="email"
              label={emailLabel}
              name="email"
              rules={{ required: true }}
              register={register}
              errors={errors}
              className="formField"
            />
          </Box>

          <Box className="form-field-box">
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
                    "Le mot de passe doit contenir au moins 8 caractères et une majuscule ",
                },
              }}
              register={register}
              errors={errors}
              className="formField"
            />
          </Box>

          <Box className="formCheckbox">
            <FormControlLabel
              control={<Checkbox {...register("rememberMe")} />}
              label="J'accpete les condition d'utilisation"
            />
            <Link href="#" underline="none">
              {"Mot de passe oublié"}
            </Link>
          </Box>
        </CardContent>
        <CardActions className="formSubmit">
          <Button
            disabled={isSubmitting || !isValid}
            type="submit"
            size="big"
            className="formSubmitButton"
          >
            {button}
          </Button>
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
  formType: PropTypes.string.isRequired,
  emailLabel: PropTypes.string.isRequired,
  passwordLabel: PropTypes.string.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  isValid: PropTypes.bool.isRequired,
  isSubmitSuccessful: PropTypes.bool.isRequired,
  errors: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
  button: PropTypes.string.isRequired,
  nameLink: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Form;
