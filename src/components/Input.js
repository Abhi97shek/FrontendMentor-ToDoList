import styled from "styled-components";
import { useState } from "react";
import { connect } from "react-redux";
import moment from "moment";
import { addTask } from "../actions/toDoAction";
const Input = (props)=>{
    const [initalTask,setTask] = useState('');

    const TaskHandler =(e)=>{
        setTask(e.target.value);
    };
    // const enterHandler =(e)=>{
     
    //     if(e.key === "Enter")
    //     {
    //         props.dispatch(addTask({task:e.target.value,createAt:moment().format(),isActive:true,isCompleted:false}));
    //     }
    // }
       
    const TaskInputHandler =(e)=>{

        e.preventDefault();

    };

    const eventHandler =(e)=>{

        if(e.key === "Enter")
        {
            props.dispatch(addTask({task:initalTask,createAt:moment().format(),isActive:true,isCompleted:false}));

            setTask('');
        }

    };

    return(
        <Form onSubmit={TaskInputHandler} onKeyDown={eventHandler}>
            <input type="text" id="todo" value={initalTask} placeholder="Enter Your Task" autoFocus onChange={TaskHandler}/>
        </Form>
    )
};



export default connect()(Input);


const Form = styled.form`

    margin-top:1.25rem;
    display:flex;
    input{
        flex:2;
        padding:20px 40px;
        background-color:#25273c;
        color:white;
        border:none; 
        border-radius:4px;
        outline:none;
        &[type='text']
        {
            font-family: 'Raleway', sans-serif;
            font-size:1.5rem;
        }
    }
`;