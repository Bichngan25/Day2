import React from 'react';
import { Button, Form, Input } from "../styled-component";
import { styled } from 'styled-components';

const ListItem = styled.li`
  width: 500px;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 16px;
  border-radius: 10px;
  border: 2px solid gray;
  background-color: ${(props) => (props.completed ? "#565656" : "#f5f5f5")};
  .item-content {
    display: none;
    .label {
      text-decoration: ${(props) =>
        props.completed ? "line-through" : "none"};
      color: ${(props) => (props.completed ? "white" : "black")};
    }
    .action {
      display: flex;
      gap: 10px;
    }
    &.active {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .item-edit-form {
    display: none;
    &.active {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
`

const EditButton = styled(Button)`
  background-color: #baa800;
`

const DeleteButton = styled(Button)`
  background-color: #dc3545;
`

const CompleteButton = styled(Button)`
  background-color: ${(props) => (props.completed ? "#66ccff" : "#28a745")};
`

const TodoItem = ({ name }) => {
  const onEditClick = () => {
    console.log("Edit button click");
    const todoItemEditForm = document.querySelector(".item-edit-form");
    const todoItemContent = document.querySelector(".item-content");

    todoItemContent.classList.remove("active");
    todoItemEditForm.classList.add("active");
  };
  const onSaveClick = () => {
    console.log("Edit save button click");
    const todoItemEditForm = document.querySelector(".item-edit-form");
    const todoItemContent = document.querySelector(".item-content");
    console.log("todoItemEditForm", todoItemEditForm);

    todoItemEditForm.classList.remove("active");
    todoItemContent.classList.add("active");
  }

  return (
    <div>
       {/* TODO ITEM */}
       <ListItem className="item">
        {/* TODO ITEM - CONTENT*/}
        <div className="item-content active">
          <span className="label">{name}</span>
          <div className="action">
            <EditButton className="btn btn-edit" onClick={() => onEditClick()}>
              Edit
            </EditButton>
            <DeleteButton
              className="btn btn-delete"
              onClick={() => console.log("Delete button click")}
            >
              Delete
            </DeleteButton>
            <CompleteButton
              className="btn btn-done"
              onClick={() => console.log("Done button click")}
            >
              Done
            </CompleteButton>
          </div>
        </div>

        {/* TODO ITEM - EDIT */}
        <div className="item-edit-form">
          <Form
            className="form"
            onSubmit={() => console.log("Edit form submit")}
          >
            <Input
              className="input"
              type="text"
              onChange={() => console.log("Edit input change")}
            />
            <Button type="button" onClick={() => onSaveClick()} className="btn">
              Save
            </Button>
          </Form>
        </div>
      </ListItem>
    </div>
  )
}

export default TodoItem;
