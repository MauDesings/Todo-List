import React from 'react'

const FormTodo = ({valueTask,setValueTask,handleSubmit,isEditing}) => {

  return (
    <div className='column'>
        <h2 className="subtitle">Add your tasks here</h2>

        <form className='form' onSubmit={handleSubmit}>
            <div className="group">
                <label htmlFor="task-id" className="task">Tasks:</label>
                <input className="inp" 
                    type="text" 
                    id="task-id" 
                    value={valueTask}
                    onChange={(e)=>setValueTask(e.target.value)}
                />
            </div>

            <button 
                type='submit' 
                className={valueTask ? '' : 'active'} 
                disabled={valueTask ? '' : 'disabled'}>{isEditing ? 'OK' : 'ADD'}
            </button>
        </form>
    </div>
  )
}

export default FormTodo
