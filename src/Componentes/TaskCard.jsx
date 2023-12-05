import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-xl">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-500 text-sm capitalize">{task.description}</p>
      <div className="py-3 flex justify-center">
      <Button
        variant="outlined"
        onClick={() => deleteTask(task.id)}
        startIcon={<DeleteIcon />}
      >
        Eliminar
      </Button>

      </div>
  
    </div>
  );
}

export default TaskCard;
