import { useState } from 'react';
import "./App.css";
import TodoList from './components/TodoList';

// Hãy tách layout thành 3 components: TodoList, TodoForm, TodoItem. Trong đó Todolist là parent Component chứa TodoForm và TodoItem
// Hãy ứng dụng styled components để tạo ra những StyledComponent sau: Container, Title, List, Item, Form, Input, Button, EditButton, DeleteButton, CompleteButton

function App() {
  return (
    <div className='App' style={{width: '100vw'}}>
      <TodoList/>
    </div>
  );
}

export default App;
