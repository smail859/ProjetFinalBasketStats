import { TextField } from "@mui/material";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";

const CustomTextField = styled(TextField)(({ theme }) => ({
  "& label.Mui-focused": {
    color: theme.palette.primary.main,
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: theme.palette.primary.main,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: theme.palette.primary.main,
    },
    "&:hover fieldset": {
      borderColor: theme.palette.primary.light,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.main,
    },
  },
}));

function FormField({ type, label, name, rules, register, errors }) {
  return (
    <>
      <CustomTextField
        fullWidth
        type={type}
        margin="normal"
        id={`input-${name}`}
        label={label}
        variant="outlined"
        {...register(name, rules)}
      />
      {errors[name] && <p>{errors[name].message}</p>}
    </>
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
