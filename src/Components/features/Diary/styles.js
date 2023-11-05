import ContentBackground from "../../../assets/content.svg";
import { styled } from "@mui/material/styles";
import globalTheme from "../../features/GlobalStyles/GlobalTheme";
import Slider from "react-slick";

export const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: `#677bab url(${ContentBackground}) no-repeat center center fixed`,
}));

export const StyledButton = styled("button")(({ theme }) => ({
  position: "absolute",
  top: "10px",
  left: "10px",
  background: globalTheme.palette.primary.main,
  color: globalTheme.palette.textcolorprimary.main,
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  fontSize: globalTheme.typography.mediumfontsize.main,
  padding: "10px 30px",
  "&: hover": {
    background: "#306CA8",
  },
}));

export const FormContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
}));

export const StyledForm = styled("div")(({ theme }) => ({
  position: "relative",
  background: globalTheme.palette.tiles.light,
  padding: "60px",
  borderRadius: "20px",
  boxShadow: "0px 0px 9px 0px rgba(0, 57, 114, 1)",
}));

export const Info = styled("i")(({ theme }) => ({
  position: "absolute",
  top: "5px",
  right: "5px",
  fontSize: globalTheme.typography.mediumfontsize.main,
  cursor: "pointer",
  color: globalTheme.palette.textcolorprimary.main,
  "&: hover": {
    color: globalTheme.palette.textcolorsecondary.main,
  },
}));

export const FormTitle = styled("h3")(({ theme }) => ({
  textAlign: "center",
  margin: "2px 0",
  color: globalTheme.palette.textcolorprimary.main,
}));

export const StyledInput = styled("input")(({ theme }) => ({
  border: "1px solid #A1A5A9",
  borderRadius: "5px",
  fontSize: globalTheme.typography.smallfontsize.main,
  padding: "5px",
}));

export const SubmitButton = styled("button")(({ theme }) => ({
  display: "block",
  margin: "auto",
  marginTop: "20px",
  background: globalTheme.palette.primary.main,
  color: globalTheme.palette.textcolorprimary.main,
  fontSize: globalTheme.typography.semimediumfontsize.main,
  padding: "10px 15px",
  borderRadius: "20px",
  alignItems: "center",
  cursor: "pointer",
  "&: hover": {
    background: "#306CA8",
  },
}));

export const StyledModal = styled("div")(({ theme }) => ({
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30%",
  background: "#fff",
  padding: "20px",
  borderRadius: "20px",
  [theme.breakpoints.down("lg")]: {
    width: "50%",
  },
  [theme.breakpoints.down("md")]: {
    width: "60%",
  },
}));

export const CloseButton = styled("button")(({ theme }) => ({
  position: "absolute",
  top: "0px",
  right: "-5px",
  background: "none",
  border: "none",
  borderRadius: "100px",
  cursor: "pointer",
  fontSize: globalTheme.typography.semibigfontsize.main,
  color: globalTheme.palette.primary.main,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const ContainerSlider = styled("div")(({ theme }) => ({
  width: "40%",
  height: "100vh",
  [theme.breakpoints.down("lg")]: {
    width: "90%",
    display: "flex",
    justifyContent: "center",
  },
  [theme.breakpoints.down("md")]: {
    width: "60%",
    display: "flex",
    justifyContent: "center",
  },
}));

export const StyledSlider = styled(Slider)(({ theme }) => ({
  padding: "10px",
  marginTop: "10%",
  background: "#fff",
  borderRadius: "10px",
  [theme.breakpoints.down("lg")]: {
    width: "80%",
    minWidth: "600px",
    padding: "0",
    marginTop: "15%",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
    minWidth: "300px",
  },
}));

export const StyledDate = styled("h2")(({ theme }) => ({
  textAlign: "center",
  color: globalTheme.palette.primary.main,
}));

export const LessonPlan = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

export const Table = styled("table")(({ theme }) => ({
  justifyContent: "center",
  marginBottom: "5%",
  borderCollapse: "collapse",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    margin: "5px",
  },
}));

export const TableHeader = styled("th")(({ theme }) => ({
  padding: "10px",
  color: globalTheme.palette.textcolorprimary.main,
  background: globalTheme.palette.primary.main,
  fontSize: globalTheme.typography.semimediumfontsize.main,
  [theme.breakpoints.down("md")]: {
    padding: "4px",
    fontSize: globalTheme.typography.smallfontsize.main,
  },
}));

export const TableRow = styled("tr")(({ theme }) => ({}));

export const TableBody = styled("tbody")(({ theme }) => ({
  fontSize: globalTheme.typography.smallfontsize.main,
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    fontSize: globalTheme.typography.semismallfontsize.main,
  },
}));

export const TableData = styled("td")(({ theme }) => ({
  border: "1px solid black",
  padding: "10px",
  [theme.breakpoints.down("md")]: {
    padding: "4px",
  },
}));
