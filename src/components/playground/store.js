
import moment from "moment";
// const demostate={
//   todo:{
//     id:"adsddadsa",
//     task:"Work On React App",
//     createAt:"12132",
//     isActive:false,
//     isCompleted:false
//   }  
  
// };
// const initialState = {
//     count:0,
// }




store.subscribe(()=>{
    console.log(store.getState())
});

const taskOne = store.dispatch(addTask({task:"Go to GYM",createAt:moment().format(),isActive:true,isCompleted:false}));

const taskTwo = store.dispatch(addTask({task:"Work On React App",createAt:moment().format(),isActive:true,isCompleted:false}));


store.dispatch(RemoveTask(taskOne.task.id));

