import { useEffect, useState } from 'react';
import './App.css';
import Task from './Task';
import TaskForm from './TaskForm';

function App() {
  const [task, setTask] = useState([]);
  useEffect(() => {
    if(task.length === 0) return;
    localStorage.setItem('tasks', JSON.stringify(task));
  }, [task]);
  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTask(tasks);
  }, []);
  function addTask(name) {
    setTask(prev => [...prev, { name, done: false }]);
  }
  function delTask(id) {
    setTask(prev => prev.filter((_, index) => index !== id));
  }
  function toggleTask(id, newDone) {
    setTask(prev => {
      const newTask = [...prev];
      newTask[id].done = newDone;
      return newTask;
    });
  }
  const numComplete = task.filter(t => t.done).length;
  const numTotal = task.length;
  function getMess() {
    if(numComplete === 0) return "No tasks completed yet!";
    if(numComplete === numTotal) return "All tasks completed!";
    return "Tasks completed so far!";
  }
  function rename(id, newName) {
    setTask(prev => {
      const newTask = [...prev];
      newTask[id].name = newName;
      return newTask;
    });
  }
  return (
    <main>
      <h1>{numComplete}/{numTotal} Completed...</h1>
      <h2>{getMess()}</h2>
      <TaskForm onAdd={addTask} />
      {task.map((task, number) => (
        <Task {...task} 
          onRename={newName => rename(number, newName)}
          onDel={() => delTask(number)}
          onToggle={done => toggleTask(number, done)}/>
      ))}
    </main>
  );
}

export default App;