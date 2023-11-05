import React, { useState, useEffect } from "react";
import {
  StyledContainer,
  Title,
  NotesContent,
  NotesText,
  Button,
} from "./styles";
import { Link } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import { getDatabase, ref, onValue } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Notes = () => {
  const [firstNote, setFirstNote] = useState(null);

  useEffect(() => {
    const user = getAuth().currentUser;
    if (user) {
      const userId = user.uid;
      getFirstNoteFromFirebase(userId);
    }

    const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
      if (!user) {
        setFirstNote(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const getFirstNoteFromFirebase = (userId) => {
    const database = getDatabase();
    onValue(ref(database, `notes/${userId}`), (snapshot) => {
      const data = snapshot.val();
      if (data !== null && data.length > 0) {
        setFirstNote(data[0]);
      }
    });
  };

  return (
    <StyledContainer>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ width: "100%" }}>
          <Title>Notes</Title>
          {firstNote && (
            <NotesContent>
              <NotesText>{firstNote.title}</NotesText>
              <NotesText>{firstNote.note}</NotesText>
            </NotesContent>
          )}
          <Link to="/SchoolDashboard/Notes">
            <Button>
              Edit
              <AiFillEdit style={{ marginLeft: "5px" }} />
            </Button>
          </Link>
        </div>
      </div>
    </StyledContainer>
  );
};

export default Notes;
