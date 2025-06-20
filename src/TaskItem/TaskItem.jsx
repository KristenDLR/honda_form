

//will receive an array
//loop through array to render each item card/box
export default function TaskItem({ tasks }) {

    return (
        <>
        <h1>Tasks</h1>
        <ul>
        {tasks.map((task) => (
          <li key={task.taskName}>
           <h1>
            {task.taskName} 
            </h1> 
            <h2>Due Date: {task.dueDate} </h2>
            {/* <button onClick={() => handleDelete()}>
              Delete
            </button> */}
          </li>
        ))}
      </ul>
      </>
    )
}