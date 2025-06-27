import { useRef, useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todo,settodo] = useState("");
  const [noftodo,setnooftodo]=useState(1);
  const [todotodisplay,settodotodisplay]=useState([]);
  const [x,setx]=useState(1);

   useEffect(function(){
     settodotodisplay(JSON.parse(localStorage.getItem("todo")) || []) 
   },[]);

  function submitme(){  
 settodo("");
 const updatedtodo=[...todotodisplay,todo];
 settodotodisplay(updatedtodo);
 localStorage.setItem("todo",JSON.stringify(updatedtodo));
}

 

function resetme(){
  localStorage.clear();
  settodotodisplay([]);
  setx(1);
  setnooftodo(1);
}
function destroy(k){
const updatedtodo=todotodisplay.filter(function(item,i){return i!==k})
settodotodisplay(updatedtodo);
localStorage.setItem("todo",JSON.stringify(updatedtodo));
}
 

  return (
    <>
     <h3>Todo List</h3>
    <div className='d-flex justify-content-center vh-100'> 
      
    <div>
     
    <input className='input rounded h-10' placeholder="Todo..." type="text" value={todo} onChange={(e)=>settodo(e.target.value)} />
    <button className='btn  btn-primary rounded' onClick={submitme}>Add</button>
    <button className='btn   btn-danger rounded' onClick={resetme}>Reset</button>
   <div className='card text-bg-secondary mb-3'> 
    {todotodisplay?todotodisplay.map((d,k)=><p className='text'>{k+1}.{d}<button className='btn btn-sm btn-danger rounded' onClick={()=>destroy(k)}>delete</button></p>):"NoTodos..."}
     </div>
     </div>
  </div>
    </>
  )
}

export default App
