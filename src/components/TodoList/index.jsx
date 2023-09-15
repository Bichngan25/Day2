import React, { useState } from 'react';
import TodoForm from "../TodoForm";
import TodoItem from "../TodoItem";
import {styled} from 'styled-components';


const Container = styled.div`
  max-width:600px;
  padding: 20px;
`
const Title = styled.h1`
  text-align:center;
`
const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 50px;
`
export const TodoList = () => {
  const todoListData = [
    {
      id: 1,
      name: "Todo Item 1",
    },
    {
      id: 2,
      name: "Todo Item 2",
    },
    {
      id: 3,
      name: "Todo Item 3",
    },
    {
      id: 4,
      name: "Todo Item 4",
    },
  ];
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodo) => {
    console.log('newTodo', newTodo)
    setTodos([...todos, newTodo])
    // setTodos([...todos,{text: newTodo, completed: false}]);
    // localStorage.setItem("todos", JSON.stringify(todos));
  }
  // console.log('newTodo', newTodo);

  return (
    <Container className='Container'>
      <Title className='title'>Todo List</Title>
      <TodoForm handleSubmit={handleAddTodo} />
      <List className="list">
        {todoListData.map((todo, index) => {
          return <TodoItem key={index} 
          name={todo?.name || ""}
          onEditClick={(editText) => handleAddTodo(index, editText)}
          onDeleteClick={() => handleDeleteTodo(index)} 
          onCompleteClick={() => handleCompleteTodo(index)} />;
        })}
      </List>
    </Container>
  )
        };
export default TodoList;