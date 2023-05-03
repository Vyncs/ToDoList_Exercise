import React, {
  ReactNode,
  createContext,
  memo,
  useCallback,
  useState,
} from "react";
import { ITask } from "../interfaces/ITask";
import { getAllTasks } from "../lib/axios";

export interface IGetTasksContext {
  tasks: {};
  getTasks: () => void;
}

export interface TasksProviderProps {
  children: ReactNode;
}

export const GetTasksContext = createContext<IGetTasksContext>(
  {} as IGetTasksContext
);

export function Provider({ children }: TasksProviderProps): JSX.Element {
  const [tasks, setTasks] = useState<ITask[]>([])
  const getTasks = useCallback(async () => {
    try {
      const response = await getAllTasks();
      console.log(response);
      setTasks(response.data);
    } catch (error) {
      alert(JSON.stringify(error));
    }
  }, []);

  return (
    <GetTasksContext.Provider
      value={{
        tasks,
        getTasks
      }}
    >
      {children}
    </GetTasksContext.Provider>
  );
}

export const GetTasksProvider = memo(Provider);
