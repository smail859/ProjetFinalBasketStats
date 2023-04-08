import { useForm } from "react-hook-form";
import Form from "../components/componentsForm/Form";
import DashboardLogin from "./dashboardLogin";

function LoginForm() {
  // Définition des labels pour l'adresse email et le mot de passe
  const emailLabel = "Adresse Email";
  const passwordLabel = "Mot de passe";

  // Utilisation du hook useForm pour gérer le formulaire
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isValid, isSubmitSuccessful },
  } = useForm({ mode: "onChange" });

  // Fonction appelée lors de la soumission du formulaire
  const onSubmit = (data) => {
    // Si le formulaire est soumis avec succès et que la case "Se souvenir de moi" est cochée, afficher "Entré"
    if (isSubmitSuccessful && data.rememberMe === true) {
      return <DashboardLogin />;
    } else {
      // Sinon, afficher "Condition d'utilisation non coché"
      console.log("Condition d'utilisation non coché");
    }
  };
  console.log(isValid);

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
        register={register}
        button="Connexion"
        nameLink="Inscrit-toi ici"
        link="./signUpForm"
      />
    </div>
  );
}

export default LoginForm;
