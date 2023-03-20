import { useForm } from "react-hook-form";
import Form from "../components/componentsForm/Form";
import "../styles/pageForm.css";

function SignUpForm() {
  const emailLabel = "Adresse Email";
  const passwordLabel = "Mot de passe";
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isValid, isSubmitSuccessful },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    if (isSubmitSuccessful && data.rememberMe === true) {
      console.log("Entré");
    } else {
      console.log("Condition d'utilisation non coché");
    }
  };
  console.log(isValid);

  return (
    <div className="container">
      <Form
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        title="Basket Stats"
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
    </div>
  );
}

export default SignUpForm;
