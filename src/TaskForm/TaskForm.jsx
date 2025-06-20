import { useState } from 'react';
import TaskItem from '../TaskItem/TaskItem';

export default function TaskForm() {
    //I had my syntax wrong here, I used {} instead of []
    const [taskName, setTaskName] = useState('');
    const [dueDate, setDueDate] = useState('');
    //An array of tasks
    //drill newTask down to <TaskItem />
    const [newTask, setNewTask] = useState([])

    const handleAddTask = () => {
    //?need to avoid submission when value is non-existant
     if (!taskName || !dueDate) return; 

     const userData = {
      taskName,
      dueDate,
    };

    setNewTask(prev => [...prev, userData]);
    console.log({taskName, dueDate})

    //Need to clear inputs 
    setTaskName('');
    setDueDate('');
    }

    return (
     <>
        <form>
            <div>
                <h2>Task Name:</h2>
                <input
                 type="text"
                 value={taskName}
                 onChange={(e) => setTaskName(e.target.value)}
                />
            </div>
            <div>
                <h2>Due Date:</h2>
                 <input
                 type="text"
                 value={dueDate}
                 onChange={(e) => setDueDate(e.target.value)}
                />
            </div>
            <button onClick={handleAddTask}>Add</button>
        </form>

        <TaskItem tasks={newTask}/>
    
    </>
    
    )
}