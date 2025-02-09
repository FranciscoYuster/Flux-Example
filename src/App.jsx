import { useContext, useState } from 'react'
import './App.css'
import TaskContext from './TaskContext.jsx'
import AddItem from './AddItem.jsx'
import ListItem from './ListItem.jsx'

function App() {
  
  const { tasks } = useContext(TaskContext);

  return (
    <main className='container d-flex flex-column align-items-center justify-content-center py-5'>
      <h2>Todo List</h2>
      <ul className="list-group w-50">
        <AddItem />
        {tasks.map((task, index) => (
          <ListItem key={index} task={task} index={index} />
        ))}
      </ul>
    </main>
  )
}

export default App
