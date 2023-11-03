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
}));

export const TodayReminders = styled("div")(({ theme }) => ({
  flex: 1,
  overflowY: "auto",
}));

export const UpcomingReminders = styled("div")(({ theme }) => ({
  flex: 2,
  overflowY: "auto",
}));

export const UpcomingList = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "2fr 2fr",
}));

export const ReminderSectionName = styled("h3")(({ theme }) => ({
  fontSize: globalTheme.typography.mediumfontsize.main,
  color: globalTheme.palette.textcolorprimary.main,
  margin: "10px 5px",
}));

export const Reminder = styled("div")(({ theme }) => ({
  border: "1px solid red",
  width: "90%",
}));

// export const RemindersContainer = styled("div")(({ theme }) => ({}));

// export const RemindersContainer = styled("div")(({ theme }) => ({}));

// export const RemindersContainer = styled("div")(({ theme }) => ({}));

// export const RemindersContainer = styled("div")(({ theme }) => ({}));

// export const RemindersContainer = styled("div")(({ theme }) => ({}));

// export const RemindersContainer = styled("div")(({ theme }) => ({}));

// export const RemindersContainer = styled("div")(({ theme }) => ({}));

// export const RemindersContainer = styled("div")(({ theme }) => ({}));

// export const RemindersContainer = styled("div")(({ theme }) => ({}));
