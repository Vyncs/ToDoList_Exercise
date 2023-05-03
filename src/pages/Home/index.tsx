import { useCallback, useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Search } from "../../components/Search";
import { TableTask } from "../../components/TableTasks";
import { getAllTasks } from "../../lib/axios";
import { ITask } from "../../interfaces/ITask";
import { CountTask } from "../../components/CountTasks";
import { LoaderContext } from "../../contexts/Loader.context";

export function Home(){
  const [tasks, setTasks] = useState<ITask[]>([])
  const {openLoading,closeLoading} = useContext(LoaderContext);


  const getTasks = useCallback(async () => {
    try {
      openLoading();
      const response = await getAllTasks();
      console.log(response);
      setTasks(response.data);
    } catch (error) {
      alert(JSON.stringify(error));
    }
    closeLoading();
  }, []);
  
  useEffect(() => {
    getTasks();
  }, []);

  return(
    <div>
      <Header/>
      <Search onCreate={getTasks}/>
      <CountTask tasks={tasks}/>
      <TableTask tasks={tasks} onDelete={getTasks} onUpdate={getTasks}/>
    </div>
   ) 
} 