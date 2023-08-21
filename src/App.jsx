import './App.css'
import FormTodo from './components/FormTodo'
import TaskList from './components/TaskList'
import useTodo from './hooks/useTodo'


function App() {
    const {
        valueTask,
        setValueTask,
        handleSubmit,
        state,
        handleDelete,
        handleCompleted,
        handleUpdate,
        isEditing,
        checkTasks
    } = useTodo();


  return (
    <main>
        <section className="section">

            <div className="header-content">
                <h1 className="title">To-Do lists</h1>
                <div className="total-data">
                    <p className="total">Total tasks: <span className="total-task">{state.length}</span></p>
                    <p className="total">Completed: <span className="total-completed">{checkTasks.length}</span></p>
                </div>
            </div>

            <div className="body-content">
                <FormTodo
                    valueTask={valueTask}
                    setValueTask={setValueTask}
                    handleSubmit={handleSubmit}
                    isEditing={isEditing} />
                <TaskList 
                    state={state} 
                    handleDelete={handleDelete}
                    handleCompleted={handleCompleted} 
                    handleUpdate={handleUpdate} />
            </div>
            
        </section>
    </main>
  )
}

export default App
