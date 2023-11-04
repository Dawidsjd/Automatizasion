import React, { useState, useEffect } from "react";
import {
  StyledContainer,
  Title,
  StyledLink,
  Icon,
  CheckList,
  CheckStatus,
  ListContent,
  Line,
} from "./styles";
import Notes from "../../../assets/Notes.svg";
import EastIcon from "@mui/icons-material/East";
import { db } from "../../../firebase";
import { onValue, ref } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const ToDo = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        const userId = user.uid;
        getTodoList(userId);
      }
    });

    return () => unsubscribe();
  }, []);

  const getTodoList = (userId) => {
    onValue(ref(db, `todoList/${userId}`), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        setTodoList(data);
      }
    });
  };

  const renderTodoList = () => {
    let renderedList = [];
    for (let i = 0; i < 3; i++) {
      if (i < todoList.length) {
        renderedList.push(
          <div key={i}>
            <CheckList>
              <CheckStatus />
              <ListContent>{todoList[i].todo}</ListContent>
            </CheckList>
            <Line />
          </div>
        );
      } else {
        renderedList.push(
          <div key={i}>
            <CheckList>
              <CheckStatus />
              <ListContent>...</ListContent>
            </CheckList>
            <Line />
          </div>
        );
      }
    }
    return renderedList;
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
        <div>
          <Title>To-do list</Title>
          {renderTodoList()}
          <StyledLink to="/HomeDashboard/ToDoList">
            Check list
            <EastIcon style={{ marginLeft: "5px" }} />
          </StyledLink>
        </div>
        <Icon draggable="false" src={Notes} alt="Notes Icon" />
      </div>
    </StyledContainer>
  );
};

export default ToDo;
