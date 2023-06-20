import CssBaseline from "@mui/material/CssBaseline"
import TodoList from './Component/TodoList'
import NavBar from './Component/NavBar'
import './App.css';


function App() {
  return (
<div>
  <NavBar/>
    <CssBaseline/>

    <TodoList/>

</div>
 
  );
}

export default App;
