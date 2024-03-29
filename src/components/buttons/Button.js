// MATERIAL UI
import Button from "@mui/material/Button";
// PROPS
import PropTypes from "prop-types";
// STYLE
import { styled } from "@mui/material/styles";
// ANIMATION
import { keyframes } from "@emotion/react";

// Animation keyframes
const buttonAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

// Style
const StyledButton = styled(Button)(({ backgroundColor, textColor }) => ({
  backgroundColor: backgroundColor,
  color: textColor,
  fontSize: "1rem",
  padding: "12px 24px",
  textTransform: "uppercase",
  fontWeight: "bold",
  borderRadius: 30,
  "&:hover": {
    animation: `${buttonAnimation} 0.5s ease-in-out infinite`,
    backgroundColor: "black",
  },
}));

export default function CustomButton({
  backgroundColor,
  textColor,
  size,
  children,
  ...rest
}) {
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      textColor={textColor}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}

CustomButton.propTypes = {
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.node.isRequired,
};

CustomButton.defaultProps = {
  backgroundColor: "#f47b06",
  textColor: "#ffffff",
  size: "1rem",
};
