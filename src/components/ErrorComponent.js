// MATERIAL UI
import Typography from "@mui/material/Typography";
// MATERIAL ICON
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
// STYLE
import { styled } from "@mui/material/styles";
// ANIMATION
import { keyframes } from "@emotion/react";

// Animation keyframes
const shakeAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-8px);
  }
  50% {
    transform: translateX(8px);
  }
  75% {
    transform: translateX(-8px);
  }
  100% {
    transform: translateX(0);
  }
`;

// Styled components
const Container = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  height: "100%",
});

const ErrorIcon = styled(ErrorOutlineIcon)(({ theme }) => ({
  fontSize: 100,
  color: theme.palette.error.main,
  marginBottom: theme.spacing(4),
  animation: `${shakeAnimation} 0.5s ease-in-out`,
}));

const ErrorText = styled(Typography)(({ theme }) => ({
  color: theme.palette.error.main,
  fontWeight: "bold",
  marginBottom: theme.spacing(1),
}));

const ErrorMessage = styled(Typography)(({ theme }) => ({
  color: theme.palette.error.main,
}));

export default function ErrorComponent() {
  return (
    <Container>
      <ErrorIcon />
      <ErrorText variant="h4">Oops, une erreur est survenue </ErrorText>
      <ErrorMessage variant="body1">
        La page que vous cherchez n'existe pas.
      </ErrorMessage>
    </Container>
  );
}
