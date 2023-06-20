
import List from '@mui/material/List';
import TodoItem from './TodoItem'
import TodoForm from './TodoForm';
import {Box,Typography} from '@mui/material';

import { useState, useEffect} from 'react';

const getInitialData= () => {
    const data= JSON.parse(localStorage.getItem("todos"))  //I keep the data with this...
    if(!data) return [] 
    return data
}

export default function TodoList() {
const [todos, setTodos] = useState(getInitialData)

useEffect(()=> {
    localStorage.setItem("todos", JSON.stringify(todos))
}, [todos])

const removeTodo= (id) => {
  setTodos((prevTodos) => {
     return prevTodos.filter((t)=> t.id !== id)   //delete with filter
    })
}

const toggleTodo= (id) => {
    setTodos((prevTodos)=> {
        return prevTodos.map((todo) => {
           return todo.id===id? {...todo, completed: !todo.completed}: todo
        })
    })
}

const addTodo= (text) => {
    setTodos((prevTodos) => {
        return [...prevTodos, {text:text, id:crypto.randomUUID, completed:false}] //crypto is creating new UUID
    } )
}

    return(
        <Box sx={{
            display: "flex",
            justifyContent: "center", 
            flexDirection: "column" , 
            alignItems: "center",                                       //you put it in the midle with all of that
            m:3
                                             
        }}>
            <Typography variant="h2" component="h1" sx={{ flexGrow: 1 }}>
           Todos
          </Typography>
        
<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}> 
{todos.map(todo => (
   <TodoItem 
   todo={todo} 
   key={todo.id} 
   remove={removeTodo} 
   toggle={() =>toggleTodo(todo.id)
   }/>                                                              //implicit return () insted of {}
))}
    <TodoForm addTodo={addTodo}/>
</List>
</Box>
    )
}


