import { useContext, useEffect, useState } from "react";
import { CountP, CountTaskContainer } from "./styles";
import { GetTasksContext } from "../../contexts/GetTasks.context";
import { ITask } from "../../interfaces/ITask";

export interface TableTaskProps {
  tasks: ITask[];
}
export function CountTask({ tasks }: TableTaskProps) {
  // const { getTasks } = useContext(GetTasksContext);
  const quantityTasks = tasks.length
  const completedTasks = tasks.filter((task) => task.isCompleted).length;
 
  // const response = getTasks();
  // console.log("res", response);

  return (
    <CountTaskContainer>
      <CountP variant="total">
        Tarefas Criadas <span>{quantityTasks}</span>
      </CountP>
      <CountP variant="created">
        Concluídas <span>{completedTasks} de {quantityTasks}</span>
      </CountP>
    </CountTaskContainer>
  );
}
