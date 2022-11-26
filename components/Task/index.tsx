import { ChangeEvent, ChangeEventHandler, FC, MouseEventHandler, useReducer } from 'react'
import { BsCheck2Square } from 'react-icons/bs'
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBin6Line } from 'react-icons/ri'

interface ITask {
  name: string;
  onCheckbox: MouseEventHandler,
  onEdit: MouseEventHandler;
  onDelete: MouseEventHandler
}

interface ITaskReducer {
  name: string;
  edit: boolean;
  checkbox: boolean;
  remove: boolean
}

type TTaskActions = 
  | {type: 'DELETE', payload: undefined}
  | {type: 'CHECKBOX', payload: undefined}
  | {type: 'EDIT', payload: undefined}
  | {type: 'NAME', payload: string}


const TASK_REDUCER_STATE: ITaskReducer =  {
  name: '',
  edit: true,
  checkbox: false,
  remove: false,
}

const taskReducer = (state: ITaskReducer, action: TTaskActions) => {
  const { type, payload} = action
  
  switch(type){
    case 'DELETE' : 
      return {
        ...state,
        remove: !state.remove
      }
    case 'EDIT' : 
    return {
      ...state,
      edit: !state.edit
    }
    case 'CHECKBOX' : 
    return {
      ...state,
      checkbox: !state.checkbox
    }
    case 'NAME' : 
    return {
      ...state,
      name: payload
    }
    default:
      throw new Error('')
  }
}

const Task: FC<ITask> = ({name, onCheckbox, onEdit, onDelete}) => {
  const [state, dispatch] = useReducer(taskReducer, TASK_REDUCER_STATE, (initState) => {
    return {
      ...initState,
      name
    }
  })
  
  const onTaskChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'NAME', payload: e.target.value })
  }

  const handleEdit = () => {

  }

  return (
    <div className='border-2 p-4'>
      <div className="flex w-full justify-between">
        <input value={state.name} onChange={onTaskChange} disabled={state.edit} />
        <div className='flex'>
          <BsCheck2Square className='ml-2 mr-2' onClick={onCheckbox} />
          <FiEdit className='ml-2 mr-2 text-yellow-500' onClick={onEdit} />
          <RiDeleteBin6Line className='ml-2 mr-2 text-red-500' onClick={onDelete} />          
        </div>
      </div>
    </div>
  )
}

export default Task