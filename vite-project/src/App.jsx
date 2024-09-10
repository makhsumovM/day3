import React, { useEffect, useState } from 'react'
import ThemeTogle from './components/forTheme/themeTogle'
import {useDispatch, useSelector} from "react-redux"
import { ForDelete, GetTodo, SearchTodo } from './api/todoApi'
import Cards from './components/cards/cards'
import { Button, Input } from 'antd'
import { setSearch } from './reducers/todoSlice'
import AddModal from './components/modals/addmodal'
import EditModal from './components/modals/editmodal'

const App = () => {
  let  dispatch = useDispatch()
  const {data,search}= useSelector((state)=>state.todo)
  const [editUser, setEditUser] = useState(null);

  useEffect(()=>{
    dispatch(GetTodo())
  },[dispatch])


  useEffect(()=>{
    if(search){
      dispatch(SearchTodo(search))
    }else{
      dispatch(GetTodo());
    }
  },[search])

  const handleDelete = (id) => {
    dispatch(ForDelete(id))
   
  }

  const handleEdit = (user) => {
    setEditUser(user); // Устанавливаем пользователя для редактирования
  };

  
  return (
    <div className=''>
      <h1 className='flex items-center justify-center text-[32px]'>
       Todo
        <ThemeTogle/>
      </h1>

      <div>
        <div className='flex items-center gap-2 w-[92%] m-auto'>
          <Input  size='large' className='w-[20%]' placeholder='Search' value={search} onChange={(e)=>dispatch(setSearch(e.target.value))}/>
          <AddModal />
        </div>
        <div className='grid grid-cols-3 gap-20 justify-items-center py-[50px]'>
          {data.map((el)=>{
            return <div key={el.id}>
              <Cards ID={el.id} Name={el.Name} avatar={el.Avatar} JobName={el.JobName} onDelete={()=>handleDelete(el.id) }  onEdit={() => handleEdit(el)}/>
            </div>
          })}

        </div>
        {editUser && (
        <EditModal user={editUser} onClose={() => setEditUser(null)} />
      )}
      </div>

    </div>
  )
}

export default App