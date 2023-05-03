import { useCallback, useContext, useState } from "react";
import {
  ButtonCreate,
  Input,
  SearchContainer,
} from "./styles";
import { PlusCircle } from "phosphor-react";
import { IUpdateUser, createTask} from "../../lib/axios";
import { LoaderContext } from "../../contexts/Loader.context";
export interface SearchProps {
  onCreate: () => void;
}
export function Search({ onCreate }: SearchProps) {
  const [task, setTask] = useState<string>("");
  const { openLoading, closeLoading } = useContext(LoaderContext);

  const handleChange = (event: any) => {
    setTask(event.target.value);
    console.log(task);
  };

  const handleSubmitPost = useCallback(async (query: IUpdateUser) => {
    try {
      openLoading();
      const response = await createTask(query).finally(()=> closeLoading());
      console.log(response.data);
      setTask("");
      onCreate();
    } catch (error) {
      alert(error);
    }
  }, []);

  return (
    <SearchContainer>
      <Input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={task}
        onChange={(e) => handleChange(e)}
      />
      <ButtonCreate
        onClick={() =>
          handleSubmitPost({ description: task, isCompleted: false })
        }
        type="submit"
      >
        <span>Criar</span>
        <PlusCircle size={32} />
      </ButtonCreate>
    </SearchContainer>
  );
}
