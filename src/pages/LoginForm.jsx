// REACT
import { useState } from "react";
// REACT HOOK FORM
import { useForm } from "react-hook-form";
// COMPONENTS
import Form from "../components/componentsForm/Form";
// AXIOS
import axios from "axios";

function LoginForm() {
  // Définition des labels pour l'adresse email et le mot de passe
  const emailLabel = "Adresse Email";
  const passwordLabel = "Mot de passe";
  const apiURL = process.env.REACT_APP_API_URL;
  const [hasError, setHasError] = useState(false);

  // Utilisation du hook useForm pour gérer le formulaire
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isValid, isSubmitSuccessful },
    setError,
    clearErrors,
  } = useForm({ mode: "onChange" });

  // Fonction appelée lors de la soumission du formulaire
  const onSubmit = (data) => {
    if (isValid && !isSubmitting) {
      axios({
        method: "post",
        url: `${apiURL}user/login`,
        withCredentials: true,
        data: {
          email: data.email,
          password: data.password,
        },
      })
        .then((res) => {
          if (res.data.errors) {
            setError("email", {
              type: "manual",
              message: res.data.errors.email,
            }); // Définition de l'erreur pour le champ email
            setError("password", {
              type: "manual",
              message: res.data.errors.password,
            }); // Définition de l'erreur pour le champ password
            setHasError(true);
          }
        })
        .catch((err) => {
          console.log(err);
        });
      window.location.replace("/dashboardLogin");
      clearErrors(["email", "password"]); // Nettoyer les erreurs précédentes des champs email et password s'il y en a
    }
  };

  // Rendu du formulaire
  return (
    <div className="container">
      <Form
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        title="Basket Stats"
        name="Connexion"
        emailLabel={emailLabel}
        passwordLabel={passwordLabel}
        isSubmitting={isSubmitting}
        isValid={isValid}
        isSubmitSuccessful={isSubmitSuccessful}
        errors={errors}
        hasError={hasError}
        register={register}
        button="Connexion"
        nameLink="Inscrit-toi ici"
        link="/"
      />
    </div>
  );
}

export default LoginForm;
