import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Create from "@mui/icons-material/Create"
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';



export default function TodoForm({addTodo}) {
    const [text, setText]= useState("")
    const handleChange= (ev) => {
        setText(ev.target.value)
    }

    const handleSubmit= (evt) =>{
       evt.preventDefault()
       addTodo(text)
       setText("")
    }

return(
    <div>

    <ListItem >
        <form onSubmit={handleSubmit}>
    <TextField id="outlined-basic" 
    label="To do..."
     variant="outlined" 
     onChange={handleChange}
     value={text}
     InputProps={{
        endAdornment:  <InputAdornment position="end">
        <IconButton aria-label="toggle password visibility" edge="end"  onClick={handleSubmit} >
            <Create/>
        </IconButton>
       </InputAdornment>
     }}
     endAdornment={
        <InputAdornment position="end">
          <IconButton
            aria-label="create todo"
            edge="end"
           >
            <Create/>
          </IconButton>
        </InputAdornment>
      }
     />
     </form>
    </ListItem >
    </div>

)
}
