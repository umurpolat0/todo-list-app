import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import TodoList from "./TodoList";

export default function App() {
  return(
    <div className='App'>
      <TodoList />
    </div>
  )
}
const app = document.getElementById('root')
const root = createRoot(app);
root.render(<App />)
