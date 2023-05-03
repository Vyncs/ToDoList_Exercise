import { DetailedHTMLProps, useCallback, useContext } from "react";
import {
  CursorPointer,
  DescriptionText,
  FormTable,
  TableContainer,
} from "./styles";
import {
  deleteTask,
  getAllTasks as getAllUsers,
  updateTask,
} from "../../lib/axios";
import { CheckCircle, Circle, Trash } from "phosphor-react";
import { IUpdateUser } from "../../lib/axios";
import { ITask } from "../../interfaces/ITask";
import { LoaderContext } from "../../contexts/Loader.context";
import { AnyTask } from "../AnyTask";
export interface TableTaskProps {
  tasks: ITask[];
  onDelete: () => void;
  onUpdate: () => void;
}

export function TableTask({ tasks, onDelete, onUpdate }: TableTaskProps) {
  const { openLoading, closeLoading } = useContext(LoaderContext);

  const deleteData = useCallback(async (id: any) => {
    try {
      openLoading();
      await deleteTask(id).finally(() => closeLoading());
      onDelete();
    } catch (error) {
      alert(JSON.stringify(error));
    }
  }, []);

  const handleUpdateTask = useCallback(async (userUpdate: IUpdateUser) => {
    try {
      openLoading();
      const response = await updateTask(userUpdate).finally(() =>
        closeLoading()
      );
      onUpdate();
    } catch (error) {
      alert(JSON.stringify(error));
    }
  }, []);

  return (
    <TableContainer>
      <FormTable>
        <tbody>
          {tasks.map((task) => {
            return (
              <tr key={task.id}>
                <td
                  onClick={() =>
                    handleUpdateTask({
                      ...task,
                      isCompleted: !task.isCompleted,
                    })
                  }
                >
                  {task.isCompleted ? (
                    <CursorPointer>
                      <CheckCircle
                        size={22}
                        color="rgb(98, 101, 255)"
                        weight="fill"
                      />
                    </CursorPointer>
                  ) : (
                    <CursorPointer>
                      <Circle
                        size={22}
                        color="rgb(98, 101, 255)"
                        weight="thin"
                      />
                    </CursorPointer>
                  )}
                </td>
                <td>
                  <DescriptionText variant={task.isCompleted}>
                    {task.description}
                  </DescriptionText>
                </td>
                <td>
                  <CursorPointer>
                    <Trash
                      size={22}
                      weight="thin"
                      onClick={() => deleteData(task.id)}
                    />
                  </CursorPointer>
                </td>
              </tr>
            );
          })}
          {tasks.length === 0 && <AnyTask />}
        </tbody>
      </FormTable>
    </TableContainer>
  );
}
