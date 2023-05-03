import axios from "axios";
export interface IUpdateUser {
  id?: string;
  description: string;
  isCompleted: boolean;
}
export const api = axios.create({
  baseURL: "http://localhost:3333/tasks/",
});


export const getAllTasks = async (id?: string) => {
  id = id || "";
  return await api.get(`${id}`);
};

export const createTask = async (updateUser: IUpdateUser) =>{
  return await api.post(``, updateUser);
}

export const deleteTask = async (id: string) => {
  return await api.delete(`${id}`);
};

export const updateTask = async (updateUser: IUpdateUser) => {
  return await api.put(`${updateUser.id}`, updateUser);
};
