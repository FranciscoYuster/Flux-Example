import { useContext , useState} from "react";
import TaskContext from "./TaskContext.jsx";

const AddItem = () => {

    const { dispatch } = useContext(TaskContext);
    console.log('dispatch funcionando:', dispatch)
    const[task, setTask] = useState('');
    
    const handleAddTask = () => {
        if(task.trim()) {
            dispatch({ type: 'add', payload: task});
            setTask('');
        }
    }

    const handleEnter = (e) => {
        if (e.key === "Enter") {
            handleAddTask();
        }
    }

    return (
        <div className="mb-3">
            <input
                type="text"
                className="form-control"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                onKeyDown={handleEnter} // detectar enter
                placeholder="Nueva tarea"
            />
            <button className="btn btn-primary mt-2" onClick={handleAddTask}>
                Agregar
            </button>
        </div>
    );
}



export default AddItem