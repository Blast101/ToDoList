import React,{useState} from 'react';
import TSwitch from './toggleSwitch';
import './tswitch.css';

function ToDoList() {
    const [tasks,setTasks] = useState([]);

    const [newTask,setNewTask] = useState("");

    function taskInput(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !==""){
            setTasks(t=>[...t,newTask]);
            setNewTask(" ");
        }
    }

    function removeTask(index){
        const updatedTasks = tasks.filter((_,i)=> i!==index );
        setTasks(updatedTasks);
    }

    function moveUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index-1]] = [updatedTasks[index -1],updatedTasks[index]];
            setTasks(updatedTasks)
        }
    }

    function moveDown(index){
        if(index <= tasks.length){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index+1]] = [updatedTasks[index + 1],updatedTasks[index]];
            setTasks(updatedTasks)
        }
    }

  return (
    <>
    <div className='box'>
        <nav className='navbar'>
            <span className="title">TO-DO-LIST</span>
            <span className='switch'>
                <TSwitch/>
            </span>
        </nav>
        <div className='inputs'>
            <input type="text" className='textBox' placeholder='Add new tasks' value={newTask} onChange={taskInput}/>
            <button onClick={addTask} className='add'>+</button>
        </div>
        <br />
        <hr className='line'/>
        <ul className='taskBox'>{tasks.map((task,index)=><li key={index} className='task'>
            <span className='taskName'>{task}</span>
            <button onClick={()=>removeTask(index)} className='remove'>
            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 448 512"><path d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z"/></svg>
            </button>
            <button onClick={()=>moveUp(index)} className='move'>☝️</button>
            <button onClick={()=>moveDown(index)} className='move'>👇</button>
        </li>)}</ul>
    </div>
    </>
  )
}

export default ToDoList
