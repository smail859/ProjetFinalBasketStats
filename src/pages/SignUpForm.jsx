// REACT HOOK FORM
import { useForm } from "react-hook-form";
// COMPONENTS
import Form from "../components/componentsForm/Form";

function SignUpForm() {
  // Définition des libellés pour l'adresse email et le mot de passe
  const emailLabel = "Adresse Email";
  const passwordLabel = "Mot de passe";

  // Récupération des méthodes et des propriétés liées au formulaire avec la bibliothèque react-hook-form
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isValid, isSubmitSuccessful },
  } = useForm({ mode: "onChange" });

  // Fonction appelée lors de la soumission du formulaire
  const onSubmit = (data) => {
    // Si la soumission est réussie et que la case à cocher rememberMe a été cochée, afficher un message dans la console
    if (isSubmitSuccessful && data.rememberMe === true) {
      console.log("entré");
    } else {
      // Sinon, afficher un message indiquant que la condition d'utilisation n'a pas été cochée
      console.log("Condition d'utilisation non coché");
    }
  };

  console.log(isValid);

  return (
    <Form
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      title="BASKET-STATS"
      name="Inscrit - toi"
      formType="3-fields"
      emailLabel={emailLabel}
      passwordLabel={passwordLabel}
      isSubmitting={isSubmitting}
      isValid={isValid}
      isSubmitSuccessful={isSubmitSuccessful}
      errors={errors}
      register={register}
      button="Inscription"
      nameLink="Connecte-toi ici"
      link="./loginForm"
    />
  );
}

export default SignUpForm;
