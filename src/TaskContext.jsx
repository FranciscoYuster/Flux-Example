import { useReducer, createContext, useContext } from "react";

const TaskContext = createContext(null);

const taskReducer = (state, action) => {
    switch (action.type) {
        case 'add': 
            return [...state, action.payload]; // Se corrige 'playload' a 'payload'
        case 'remove':
            return state.filter((_, i) => i !== action.index); // Se usa filter en vez de splice
        default:
            return state;
    }
};

export function TaskProvider({ children }) {
    const [tasks, dispatch] = useReducer(taskReducer, []);

    return (
        <TaskContext.Provider value={{ tasks, dispatch }}>
            {children}
        </TaskContext.Provider>
    );
}

export const useTasks = () => useContext(TaskContext);
export default TaskContext;
