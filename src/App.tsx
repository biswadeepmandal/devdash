import TaskCard from "./components/board/TaskCard"

function App() {

  return (
    <div>
      <TaskCard task={{
        id:"1",
        title:"Design Login Page",
        description:"Create a responsive login page with email and password fields.",
        priority:"high",
        status:"todo",
        dueDate:null,
        createdAt:new Date().toISOString()
      }} />
    </div>
  )
}

export default App
