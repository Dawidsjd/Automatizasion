import { styled } from "@mui/material/styles";
import globalTheme from "../../features/GlobalStyles/GlobalTheme";
import Modal from "react-modal";
import DatePicker from "react-datepicker";

export const RemindersContainer = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: globalTheme.palette.secondary.main,
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

export const RemindersContent = styled("div")(({ theme }) => ({
  background: globalTheme.palette.tetriary.main,
  width: "80%",
  height: "80%",
  borderRadius: "20px",
}));

export const StyledHeader = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));

export const StyledTitle = styled("p")(({ theme }) => ({
  fontSize: globalTheme.typography.semibigfontsize.main,
  fontWeight: "bold",
  color: globalTheme.palette.textcolorprimary.main,
  justifyContent: "flex-start",
  marginTop: "20px",
  marginLeft: "20px",
  [theme.breakpoints.down("lg")]: {
    fontSize: globalTheme.typography.mediumfontsize.main,
  },
}));

export const StyledModalBtn = styled("button")(({ theme }) => ({
  justifyContent: "flex-end",
  marginTop: "20px",
  marginRight: "20px",
  fontSize: globalTheme.typography.semimediumfontsize.main,
  background: globalTheme.palette.primary.main,
  color: globalTheme.palette.textcolorprimary.main,
  padding: "0 15px",
  height: "35px",
  borderRadius: "15px",
  alignItems: "center",
  cursor: "pointer",
  "&: hover": {
    background: "#306CA8",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: globalTheme.typography.smallfontsize.main,
  },
}));

export const StyledModal = styled(Modal)(({ theme }) => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backdropFilter: "blur(2px)",
  zIndex: 1000,
}));

export const StyledModalContent = styled("div")(({ theme }) => ({
  position: "relative",
  background: "white",
  width: "20%",
  borderRadius: "20px",
  boxShadow: "0 0 12px 0 rgba(66, 68, 90, 0.3)",
  [theme.breakpoints.down("lg")]: {
    width: "50%",
  },
  [theme.breakpoints.down("md")]: {
    width: "60%",
  },
}));

export const CloseButton = styled("button")(({ theme }) => ({
  position: "absolute",
  top: "-10px",
  right: "-15px",
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

export const Form = styled("form")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
}));

export const FormTitle = styled("p")(({ theme }) => ({
  fontSize: globalTheme.typography.semimediumfontsize.main,
  margin: "0",
  display: "flex",
  alignItems: "center",
}));

export const FormGroup = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "90%",
  marginTop: "10px",
}));

export const StyledInputTitle = styled("input")(({ theme }) => ({
  border: "1px solid #A1A5A9",
  borderRadius: "5px",
  fontSize: globalTheme.typography.smallfontsize.main,
  padding: "5px",
}));

export const StyledSelect = styled("select")(({ theme }) => ({
  border: "1px solid #A1A5A9",
  borderRadius: "5px",
  fontSize: globalTheme.typography.smallfontsize.main,
  padding: "5px",
}));

export const StyledDate = styled("div")(({ theme }) => ({
  display: "flex",
}));

export const StyledTime = styled("div")(({ theme }) => ({
  display: "flex",
}));

export const StyledDatePicker = styled(DatePicker)(({ theme }) => ({
  width: "95%",
  border: "1px solid #A1A5A9",
  borderRadius: "5px",
  fontSize: globalTheme.typography.smallfontsize.main,
  padding: "5px",
}));

export const StyledInputDesc = styled("input")(({ theme }) => ({
  width: "100%",
  border: "1px solid #A1A5A9",
  borderRadius: "5px",
  fontSize: globalTheme.typography.smallfontsize.main,
  padding: "5px",
}));

export const SubmitBtn = styled("button")(({ theme }) => ({
  fontSize: globalTheme.typography.semimediumfontsize.main,
  margin: "20px",
  justifyContent: "flex-end",
  marginTop: "20px",
  marginRight: "20px",
  background: globalTheme.palette.primary.main,
  color: globalTheme.palette.textcolorprimary.main,
  padding: "10px 15px",
  borderRadius: "20px",
  alignItems: "center",
  cursor: "pointer",
  "&: hover": {
    background: "#306CA8",
  },
}));

export const ReminerdsList = styled("div")(({ theme }) => ({
  display: "flex",
  margin: "20px",
  maxHeight: "80%",
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
  },
}));

export const TodayReminders = styled("div")(({ theme }) => ({
  flex: 1,
  overflowY: "auto",
  [theme.breakpoints.down("lg")]: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const UpcomingReminders = styled("div")(({ theme }) => ({
  flex: 2,
  overflowY: "auto",
}));

export const UpcomingList = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "2fr 2fr",
  [theme.breakpoints.down("lg")]: {
    gridTemplateColumns: "1fr",
  },
}));

export const ReminderSectionName = styled("h3")(({ theme }) => ({
  fontSize: globalTheme.typography.mediumfontsize.main,
  color: globalTheme.palette.textcolorprimary.main,
  margin: "10px 5px",
  [theme.breakpoints.down("lg")]: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export const Reminder = styled("div")(({ theme }) => ({
  width: "80%",
  borderRadius: "30px",
  background:
    "linear-gradient(27deg, rgba(42,157,229,1) 0%, rgba(0,51,102,1) 100%)",
  padding: "10px 20px",
  marginBottom: "10px",
  [theme.breakpoints.down("lg")]: {
    margin: "10px auto",
  },
}));

export const DeleteBtn = styled("button")(({ theme }) => ({
  position: "absolute",
  right: "5px",
  top: "25px",
  background: "none",
  cursor: "pointer",
  fontSize: globalTheme.typography.semimediumfontsize.main,
  color: globalTheme.palette.textcolorprimary.main,
  "&: hover": {
    color: "red",
  },
}));

export const ReminderDate = styled("h3")(({ theme }) => ({
  color: globalTheme.palette.textcolorprimary.main,
  fontSize: globalTheme.typography.mediumfontsize.main,
  lineHeight: "5px",
  textTransform: "capitalize",
  [theme.breakpoints.down("lg")]: {
    fontSize: globalTheme.typography.smallfontsize.main,
  },
}));

export const ReminderTitle = styled("h4")(({ theme }) => ({
  lineHeight: "5px",
  fontSize: globalTheme.typography.semimediumfontsize.main,
  color: globalTheme.palette.textcolorprimary.main,
  textTransform: "capitalize",
  [theme.breakpoints.down("lg")]: {
    fontSize: globalTheme.typography.smallfontsize.main,
  },
}));

export const ReminderTime = styled("p")(({ theme }) => ({
  lineHeight: "0",
  color: "#BFC0C2",
}));

export const ReminderDescription = styled("p")(({ theme }) => ({
  lineHeight: "15px",
  fontSize: globalTheme.typography.smallfontsize.main,
  color: "#4AF4FF",
}));

export const ReminderCategory = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

export const CategoryStatus = styled("div")(({ theme }) => ({
  height: "10px",
  width: "10px",
  borderRadius: "20px",
  alignSelf: "center",
}));

export const CategoryName = styled("p")(({ theme }) => ({
  marginLeft: "5px",
  textTransform: "capitalize",
  fontSize: globalTheme.typography.smallfontsize.main,
  color: globalTheme.palette.textcolorprimary.main,
}));
