import { useEffect, useReducer,useState } from "react";
import todoReducer from "../todo-reducer";


function useTodo() {

    function init() {
        return JSON.parse(localStorage.getItem('to-do')) || [];
    }

    const initialState = [];

    const [state,dispach] = useReducer(todoReducer,initialState,init)
    const [valueTask, setValueTask] = useState('');
    const [isEditing, setIsEditing] = useState(null);


    useEffect(()=>{
        localStorage.setItem('to-do', JSON.stringify(state));
    },[state]);


    // Enivar formulario ----------------
    function handleSubmit(e) {
        e.preventDefault();

        if (isEditing) {
            dispach({
                type:'EDIT_TASK',
                payload: {id: isEditing.id, valueTask: valueTask}
            })
            setIsEditing(null);
            setValueTask('');
            return;
        }

        handleAdd();
    }


    // Agregar Tareas --------------------
    function handleAdd() {
        const newTodo = {
            valueTask,
            id: Date.now(),
            done: false
        }

        dispach({
            type:'ADD_TASK',
            payload: newTodo
        })
        setValueTask('');
    }


    // Eliminar Tareas --------------------
    function handleDelete(id) {
        dispach({
            type:'DELETE_TASK',
            payload: id
        })
        setIsEditing(null);
        setValueTask('');
    }


    // Tareas Completadas -----------------
    function handleCompleted(id) {
        dispach({
            type:'COMPLETED_TASK',
            payload:id
        })
        console.log('cambiar...')
    }


    // Editar Tareas ----------------------
    function handleUpdate(item) {
        setValueTask(item.valueTask);
        setIsEditing(item);
    }


    // Cantidad Tareas completadas
    const checkTasks = state.filter(item => item.done === true);


    return {
        valueTask,
        setValueTask,
        handleSubmit,
        state,
        handleDelete,
        handleCompleted,
        handleUpdate,
        isEditing,
        checkTasks
    }
}

export default useTodo;