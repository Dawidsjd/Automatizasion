import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import style from "./style";
import customIcon from "../../../assets/social.png";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
    backgroundColor: "#8295b3",
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
    backgroundColor: "#8295b3",
  },
}));

const StyledCard = styled(Card)({
  backgroundColor: "#8295b3",
  maxWidth: 345,
  margin: "0 auto",
});

const WikiSearch = () => {
  const [data, setData] = useState(null);
  const [trimVal, setTrimVal] = useState("");
  const [selectedResult, setSelectedResult] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (trimVal.length < 2) {
        setData(null);
        return;
      }

      try {
        const response = await fetch(
          `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${trimVal}&sroffset=${
            (currentPage - 1) * 20
          }`
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [trimVal, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [trimVal]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setTrimVal(value);
    if (value === "") {
      setData(null);
      setCurrentPage(1);
    }
  };

  const handleResultClick = async (pageId, title) => {
    const content = await fetchFullPageContent(pageId);
    setSelectedResult({ pageId, title, content });
    handleClickOpen();
  };

  useEffect(() => {
    document.title = "Wikipedia";
  }, []);

  const fetchFullPageContent = async (pageId) => {
    try {
      const response = await fetch(
        `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&pageids=${pageId}&format=json&origin=*`
      );
      const result = await response.json();
      return result.query.pages[pageId].extract;
    } catch (error) {
      console.error("Error fetching full page content:", error);
      return "";
    }
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  let hasMoreResults = false;
  if (data && data.query && data.query.search.length === 20) {
    hasMoreResults = true;
  }

  const prevButtonStyle = {
    color: "black",
    opacity: currentPage > 1 && trimVal !== "" ? 1 : 0.5,
  };

  const nextButtonStyle = {
    color: "black",
    opacity: hasMoreResults && trimVal !== "" ? 1 : 0.5,
  };

  return (
    <div style={style.WikiSearchContainer}>
      <Link to="/SchoolDashboard">
        <button
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            background: "#003366",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            fontSize: "1.5em",
            padding: "10px 30px",
          }}
        >
          <KeyboardBackspaceIcon />
        </button>
      </Link>
      <img src={customIcon} alt="Custom Icon" style={style.customIcon} />
      <input
        type="text"
        value={trimVal}
        onChange={handleInputChange}
        placeholder="Wyszukaj..."
        style={style.searchBar}
      />
      <div style={style.cardContainer}>
        {data &&
          data.query &&
          data.query.search.map((item) => (
            <div key={item.pageid} style={style.card}>
              <StyledCard
                onClick={() =>
                  handleResultClick(item.pageid, item.title, item.snippet)
                }
              >
                <CardActionArea>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      style={style.cardContent}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      style={{ ...style.cardSnippet, ...style.cardDescription }}
                    >
                      <p dangerouslySetInnerHTML={{ __html: item.snippet }} />
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </StyledCard>
              {selectedResult && selectedResult.pageId === item.pageid && (
                <BootstrapDialog
                  onClose={handleClose}
                  aria-labelledby="customized-dialog-title"
                  open={open}
                  maxWidth="xl"
                >
                  <DialogTitle
                    sx={style.dialogTitle}
                    id="customized-dialog-title"
                  >
                    {selectedResult.title}
                  </DialogTitle>
                  <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={style.dialogCloseButton}
                  >
                    <CloseIcon />
                  </IconButton>
                  <DialogContent dividers style={style.dialogContent}>
                    <Typography gutterBottom>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: selectedResult.content,
                        }}
                      />
                    </Typography>
                  </DialogContent>
                  <DialogActions>
                    <Button
                      autoFocus
                      onClick={handleClose}
                      style={{ color: "#333" }}
                    >
                      Close
                    </Button>
                  </DialogActions>
                </BootstrapDialog>
              )}
            </div>
          ))}
      </div>
      {trimVal.length > 1 && (
        <div style={style.paginationContainer}>
          <Button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            style={prevButtonStyle}
          >
            <NavigateBeforeIcon />
          </Button>
          <p style={style.paginationPageNumber}>Strona {currentPage}</p>
          <Button
            onClick={handleNextPage}
            style={nextButtonStyle}
            disabled={!hasMoreResults}
          >
            <NavigateNextIcon />
          </Button>
        </div>
      )}
    </div>
  );
};

export default WikiSearch;
