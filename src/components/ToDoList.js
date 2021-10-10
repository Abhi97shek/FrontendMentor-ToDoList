import styled from "styled-components";
import React from 'react'
import { connect } from "react-redux";
import ListItem from "./ListItem";
function ToDoList(props) {
    return (
          
        <List>
              {props.tasks.map(task=> {
                          return  <ListItem  key={task.id} tasks={task}/>
              
              })}
                 
                {/* <ListItem>
                    <input type="radio" id="task-1" name="task1" value="Jog Around the Park 3x" />
                    <label htmlFor="task-1">Jog Around the Park 3x</label>
                    <img src="/images/icon-cross.svg" />  
                </ListItem>
                <ListItem>
                    <input type="radio" id="task-2" name="task2" value="Jog Around the Park 3x" />
                    <label htmlFor="task-2">Jog Around the Park 3x</label>
                    <img src="/images/icon-cross.svg" />  
                </ListItem>
                <ListItem>
                <input type="radio" id="task-3" name="task3" value="Jog Around the Park 3x" />
                    <label htmlFor="task-3">Jog Around the Park 3x</label>
                    <img src="/images/icon-cross.svg" />  
                </ListItem> */}
               
        
        <ListData>
                <p>{props.tasks.length} items left</p>
            <span className="task_controls">     
                <p>All</p>
                <p>Active</p>
                <p>Completed</p>
            </span>    

                <p>Clear Completed</p>
        </ListData>

        </List>  
    )
}


const mapStateToProps=(state)=>{
    return {
        tasks:state.todoTask
    };
};
export default connect(mapStateToProps)(ToDoList);





const List = styled.div`
box-shadow: 2px 24px 24px -4px rgba(0,0,0,0.7);
    margin-top:2rem;
    border-radius:5px;

`;


const ListData =styled.div`

    display:flex;
    justify-content:space-around;
    flex-wrap:wrap;
    color:white;
    background-color:#25273c;
    .task_controls{
      display:flex;
      justify-content:space-between;
     
      p{
        
        &:not(:last-child)
        {
            margin-right:1rem;
        }
      }
    }
    p{
        cursor:pointer;

        &:hover
        {
            color:#f25042;
        }
    }

`;
