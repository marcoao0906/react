const TodoItem = (props) => {
    const {tarea, toggleTask} = props;
    
    const {id, name, completed} = tarea;
    console.log(name);
    const handleOnChange=()=>{        
        toggleTask(id);
    };



    return (
        
        <li>
            <input type="checkbox" onChange={handleOnChange} checked={completed}/>
            {tarea.name}</li>
    );
};
 
export default TodoItem;