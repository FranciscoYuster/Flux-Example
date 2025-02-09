import { useContext  } from "react";
import TaskContext  from "./TaskContext.jsx";


export default function ListItem({task, index}) {
    const { dispatch } = useContext(TaskContext);

    return (
        <li className="list-group-item d-flex justify-content-between m-2 border-2">
            {task}
            <button
                onClick={() => dispatch({ type: 'remove', index})}
                role="button" 
                className="badge bg-danger btn btn-flat rounded-pill">
                <i className="fas fa-trash"></i>
            </button>
        </li>
    )
}