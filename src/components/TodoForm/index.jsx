import React, { useState } from 'react';
import { styled } from 'styled-components';


export const Form = styled.form`
    display: flex;
    align-items: center;
    gap: 10px;
  `

export const Input = styled.input`
    flex: 1;
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    border: none;
  `
  
  export const Button = styled.button`
    padding: 10px;
    font-size: 16px;
    color: #fff;
    background-color: #007aff;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    &:hover{
        background-color: #baa800;
    }
  `

const TodoForm = (props) => {
    const [input, setInput] = useState("")
    const onSubmit = (event) => {
        event.prevenDefault()
        props.handleSubmit(input)
        setInput("")
    }
  return (
    <Form className="form" onSubmit={onSubmit} >
        <Input
          className="input"
          type="text" value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <Button className="button">Add</Button>
      </Form>
  );
}

export default TodoForm