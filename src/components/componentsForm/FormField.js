import { TextField } from "@mui/material";
import PropTypes from "prop-types";

function FormField({ type, label, name, rules, register, errors }) {
  return (
    <div>
      <TextField
        fullWidth
        type={type}
        margin="normal"
        id={`input-${name}`}
        label={label}
        variant="standard"
        {...register(name, rules)}
      />
      {errors[name] && <p>{errors[name].message}</p>}
    </div>
  );
}

FormField.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rules: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default FormField;
