import { useState } from "react";
// REACT HOOK FORM
import { useForm } from "react-hook-form";
// COMPONENTS
import Form from "../components/componentsForm/Form";
// AXIOS
import axios from "axios";
// NAVIGATION
import { useNavigate } from "react-router-dom";

function SignUpForm() {
  // Définition des libellés pour l'adresse email et le mot de passe
  const emailLabel = "Adresse Email";
  const passwordLabel = "Mot de passe";
  const apiURL = process.env.REACT_APP_API_URL;
  const [hasError, setHasError] = useState(false);

  // Récupération des méthodes et des propriétés liées au formulaire avec la bibliothèque react-hook-form
  const {
    handleSubmit,
    register,
    formState: { errors, isValid, isSubmitting, isSubmitSuccessful },
    setError,
    clearErrors,
  } = useForm({ mode: "onChange" });

  const navigate = useNavigate();

  // Fonction appelée lors de la soumission du formulaire
  const onSubmit = (data) => {
    if (isValid && !isSubmitting) {
      axios({
        method: "post",
        url: `${apiURL}user/register`,
        withCredentials: true,
        data: {
          pseudo: data.pseudo,
          email: data.email,
          password: data.password,
        },
      })
        .then((res) => {
          if (res.data.errors) {
            setError("pseudo", {
              type: "manual",
              message: res.data.errors.pseudo,
            }); // Définition de l'erreur pour le champ email
            setError("email", {
              type: "manual",
              message: res.data.errors.email,
            }); // Définition de l'erreur pour le champ email
            setError("password", {
              type: "manual",
              message: res.data.errors.password,
            }); // Définition de l'erreur pour le champ password
            setHasError(true);
          } else {
            // Naviguer vers la page de connexion si la connexion est réussie
            navigate("/loginForm");
          }
        })
        .catch((err) => {
          console.log(err);
        });
      clearErrors(["email", "password", "pseudo"]); // Nettoyer les erreurs précédentes des champs email et password s'il y en a
    }
  };

  return (
    <Form
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      title="BASKET-STATS"
      name="Inscrit-toi"
      formType="3-field"
      emailLabel={emailLabel}
      passwordLabel={passwordLabel}
      isValid={isValid}
      isSubmitSuccessful={isSubmitSuccessful}
      errors={errors}
      register={register}
      hasError={hasError}
      button="Inscription"
      nameLink="Connecte-toi ici"
      link="./loginForm"
    />
  );
}

export default SignUpForm;
