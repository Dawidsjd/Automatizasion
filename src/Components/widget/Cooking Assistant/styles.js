import { styled } from "@mui/material/styles";
import globalTheme from "../../features/GlobalStyles/GlobalTheme";

export const StyledContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "16px",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(9.3px)",
  background: "rgba(34, 34, 34, 0.14)",
  padding: "40px", // Zwiększamy padding
  maxWidth: "550px", // Zwiększamy maksymalną szerokość
  margin: "20px auto",
  textAlign: "center",
}));

export const ContentContainer = styled("div")({
  textAlign: "left",
  marginRight: "20px",
});

export const Title = styled("div")(({ theme }) => ({
  fontSize: "2em", // Zwiększamy rozmiar tytułu
  fontWeight: "bold",
  color: globalTheme.palette.tiles,
  marginBottom: "10px", // Zwiększamy odstęp
}));

export const Subtitle = styled("div")(({ theme }) => ({
  fontSize: "1.2em", // Zwiększamy rozmiar podtytułu
  color: globalTheme.palette.tiles,
  marginBottom: "20px", // Zwiększamy odstęp
}));

export const Button = styled("button")(({ theme }) => ({
  padding: "12px 24px", // Zwiększamy padding przycisku
  fontSize: "1.2em", // Zwiększamy rozmiar tekstu przycisku
  fontWeight: "bold",
  background: "purple",
  color: "#fff",
  border: "none",
  borderRadius: "10px", // Zwiększamy zaokrąglenie przycisku
  cursor: "pointer",
  display: "flex",
}));

export const Icon = styled("img")(({ theme }) => ({
  width: "150px", // Zwiększamy szerokość obrazka
  height: "150px", // Zwiększamy wysokość obrazka
}));
