/*importar hook useState*/
import { useState } from "react";
/*importar componente TodoList*/
import TodoList from "./components/TodoList";
/*definir el componente inicio*/
const Inicio = () => {
    /*crear vector de objetos tareasIniciales*/
    const tareasIniciales=[
        {id:'1',name:'tarea1',completed:false},
        {id:'2',name:'tarea2',completed:false},
        {id:'3',name:'tarea3',completed:false},
        {id:'4',name:'tarea4',completed:false},
    ]

    const [tittle,settittle]=useState("My first React app")
    /*hook useState para declarar un estado dentro de un componente*/
    /*establecer tareasIniciales como el estado inicial de tareas*/
    const [tareas, settareas] = useState(tareasIniciales)

    /*crear metodo para cambiar el estado de las tareas recibe el id de la tarea que se quiere cambiar*/
    const toggleTask=(id)=>{
        console.log('politica onclick')
        settittle('Continuamos en REACT ',id)
    }
    
    /*enviar tareasIniciales al componente TodoList por medio de los props que sirve para transferir data entre componentes*/
    /*tarea={tareas}... donde tarea es el prop y {tareas} es como el parametro a pasar*/
    return (
    <div>
        <h1>{tittle}</h1>        
        <TodoList tarea={tareas} toogleTask={toggleTask} />
        <button onClick={toggleTask} >Prueba</button>  
    </div>);
}
 
export default Inicio;
