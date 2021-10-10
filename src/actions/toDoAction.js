import { v4 as uuidv4 } from 'uuid';

export const addTask =({task='',createAt=0,isActive=false,isCompleted=false}={})=>({
  
    type:"ADD_TASK",
    task:{
        id:uuidv4(),
        task,
        createAt,
        isActive,
        isCompleted
    }


});


export const RemoveTask = (id=0)=>({
type:"REMOVE_TASK",
id
});