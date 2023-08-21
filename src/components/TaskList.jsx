import React from 'react'
import {RiCloseCircleLine,RiEditLine} from 'react-icons/ri';

const TaskList = ({state,handleDelete,handleCompleted,handleUpdate}) => {

  return (
    <div className='column'>
        <h2 className="subtitle">Manage listing</h2>
        <ul className="list-content"> 

            {state.length ? state.map(item => (
                <li className="list-tasks" key={item.id}>
                    <div className="group-controls">
                        <input id={item.id} type="checkbox"  onClick={()=> handleCompleted(item.id)} />
                        <label htmlFor={item.id} className={item.done ? 'to-do completed' : 'to-do'}>{item.valueTask}</label>
                    </div>
    
                    <div className="group-controls">
                        <button className='btn-edit' onClick={()=> handleUpdate(item)}> <RiEditLine /></button>
                        <button className='btn-delete' onClick={()=> handleDelete(item.id)}> <RiCloseCircleLine /></button>
                    </div>
                </li>
            )) : <h5>--NO HOMEWORK--</h5> }
           
        </ul>
    </div>
  )
}

export default TaskList
