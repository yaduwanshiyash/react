import  { useState } from 'react'

const Render = () => {

    const [tasks,settasks] = useState([
        {title: "gym", completed: false},
        {title: "lunch", completed: true},
        {title: "brack", completed: false}
    ])
    
    let taskrender = tasks.map((task,index) => (
        <h1 key={index} className={task.completed ? 'text-green-500' : 'text-red-500'}>{task.title}</h1>
    ))
  return (
    <div className=' h-screen w-full flex items-center justify-center'>
        <h2 >{taskrender}</h2>
      
      <form onSubmit={settasks}>
        <input type="text" name='title' />
        <input type="text" name='completed' />
        <input type="submit" value="submit" />
      </form>
    </div>
  )
}

export default Render
