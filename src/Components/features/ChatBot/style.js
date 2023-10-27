import globalTheme from "../GlobalStyles/GlobalTheme";

const styles = {
  ChatContainer: {
    position: "fixed",
    bottom: "60px",
    right: "100px",
    background: "#fff",
    width: "350px",
    height: "450px",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    borderRadius: "5px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
  },
  MessagesContainer: {
    overflowY: "auto",
    borderBottom: "1px solid #ccc",
    padding: "10px",
    marginBottom: "10px",
    display: "flex",
    flexDirection: "column",
  },

  container: {
    position: "relative",
  },
  toggleButton: {
    position: "fixed",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    background: globalTheme.palette.primary.dark,
    bottom: "20px",
    right: "20px",
    border: "none",
    cursor: "pointer",
    boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)",
  },
  chatIcon: {
    color: globalTheme.palette.textcolorsecondary.main,
  },
  SendContainer: {
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  MsgSend: {
    border: "none",
    outline: "none",
    flex: "1",
    marginRight: "5px",
    padding: "5px 5px 10px 5px",
    fontSize: "17px",
  },
  MsgSendBtn: {
    border: "none",
    background: "none",
    color: globalTheme.palette.primary.dark,
    cursor: "pointer",
  },
  Banner: {
    background: globalTheme.palette.primary.dark,
    color: globalTheme.palette.textcolorsecondary.main,
    padding: "10px 0 10px 0",
    textAlign: "center",
    borderRadius: "5px 5px 0 0",
    position: "absolute",
    top: "0",
    width: "100%",
  },
};

export default styles;
