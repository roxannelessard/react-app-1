import React from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState(
      [
        {
          id: 1,
          text: 'Learn React',
          day: 'Nov 4th at 2:30 pm',
          reminder: true,
        },
        {
          id: 2,
          text: 'Grocery shopping',
          day: 'Nov 5th at 6:30 pm',
          reminder: true,
        },
        {
          id: 3,
          text: 'Meeting with Nat & Raff',
          day: 'Nov 6th at 8:00 am',
          reminder: false,
        },
      ]
    )

    // Delete task (will filter out the tasks that are not the one = to the id of the deleted one)
    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id))
    }

    // Toggle Reminder
    const toggleReminder = (id) => {
      setTasks(
        tasks.map((task) =>
        task.id == id ? { ...task, reminder: !task.reminder } : task))
    }

  return (
    <div className="container">
      <Header/>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : <h3>Add a task</h3>}
    </div>
  );
}

export default App;
