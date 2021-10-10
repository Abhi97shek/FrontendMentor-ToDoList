const ToDoDefaultState= []
const ToDoReducer=(state=ToDoDefaultState,action)=>{
        switch(action.type)
        {
        case "ADD_TASK":
            {
                return [action.task,...state]
             }
        case "REMOVE_TASK":
            {
                return state.filter(task => task.id != action.id);
            }
            default:
                return state;
        }

};


export default ToDoReducer;