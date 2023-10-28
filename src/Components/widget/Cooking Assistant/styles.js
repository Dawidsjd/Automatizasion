import { styled } from "@mui/material/styles";
import globalTheme from "../../features/GlobalStyles/GlobalTheme";

export const StyledContainer = styled("div")(({ theme }) => ({
  border: "1px solid black",
  height: "230px",
  position: "relative",
  width: "100%",
}));
