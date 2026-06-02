import type {Task} from "../../types";

interface TaskCardProps { task: Task }

function TaskCard({ task }: TaskCardProps) {
  const colors = { low:"#22c55e", medium:"#f59e0b", high:"#ef4444" }

  return (
    <div style={{
      background:"white",
      padding:"12px",
      borderRadius:"8px",
      marginBottom:"8px",
      boxShadow:"0 1px 3px rgba(0,0,0,0.12)",
      borderLeft:`3px solid ${colors[task.priority]}`
    }}>
      <span style={{
        fontSize:"10px", fontWeight:700,
        color:colors[task.priority],
        textTransform:"uppercase", letterSpacing:"0.5px"
      }}>
        {task.priority}
      </span>
      <h3 style={{ fontSize:"14px", fontWeight:500, margin:"4px 0", color:"#0f172a" }}>
        {task.title}
      </h3>
      <p style={{ fontSize:"12px", color:"#64748b", margin:0, lineHeight:1.4 }}>
        {task.description}
      </p>
    </div>
  )
}
export default TaskCard