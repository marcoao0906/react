import TodoItem from './TodoItem'

const TodoList = (props) => {
    
    /*const tareas=props.tareas*/
    /*{tarea} debe llamarse igual que el prop pasado en el otro componente*/
    /*tambien se le pasan tareas={tarea} al componente TodoItem*/
    const {tarea, toggleTask}=props;
    console.log('props',tarea);
    return ( 
        <ul>
            
            {tarea.map((tarea)=>{
               console.log(tarea.name )
               
               return <TodoItem key={tarea.id} tarea={tarea} toggleTask={toggleTask} />  

            })}
            
            
            
        </ul>
    );
}
 
export default TodoList;