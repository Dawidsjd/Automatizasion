import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const Search = () => {
  const [data, setData] = useState(null);
  const [trimVal, setTrimVal] = useState('');
  const [selectedResult, setSelectedResult] = useState(null);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${trimVal}`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [trimVal]);

  const handleInputChange = (e) => {
    setTrimVal(e.target.value);
  };

  const fetchFullPageContent = async (pageId) => {
    try {
      const response = await fetch(`https://en.wikipedia.org/w/api.php?action=query&prop=extracts&pageids=${pageId}&format=json&origin=*`);
      const result = await response.json();
      return result.query.pages[pageId].extract;
    } catch (error) {
      console.error('Error fetching full page content:', error);
      return '';
    }
  };

  const handleResultClick = async (pageId, title) => {
    const content = await fetchFullPageContent(pageId);
    setSelectedResult({ pageId, title, content });
    handleClickOpen();
  };

  return (
    <div>
      <input
        type="text"
        value={trimVal}
        onChange={handleInputChange}
        placeholder="Wyszukaj..."
      />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {data && data.query && data.query.search.map(item => (
          <div key={item.pageid} style={{ width: '300px', margin: '10px' }}>
            <Card sx={{ maxWidth: 345 }} onClick={() => handleResultClick(item.pageid, item.title, item.snippet)}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" style={{ fontSize: '1.2em', lineHeight: '1.4', fontWeight: 'bold', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxHeight: '2.4em' }}>
                    <p dangerouslySetInnerHTML={{ __html: item.snippet }} />
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            {selectedResult && selectedResult.pageId === item.pageid && (
              <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                maxWidth="sm"
              >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                  {selectedResult.title}
                </DialogTitle>
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <DialogContent dividers style={{ overflowY: 'auto', maxHeight: '70vh' }}>
                  <Typography gutterBottom>
                    <p dangerouslySetInnerHTML={{ __html: selectedResult.content }} />
                  </Typography>
                </DialogContent>
                <DialogActions>
                  <Button autoFocus onClick={handleClose}>
                    Close
                  </Button>
                </DialogActions>
              </BootstrapDialog>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
