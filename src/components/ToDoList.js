import styled from "styled-components";


import React from 'react'

function ToDoList() {
    return (
        <List>
                <ListItem>
                    <input type="radio" id="task-4" name="task4" value="HTML" />
                  
                    <label for="task-4" >Jog Around the Park 3x</label>
                    <img src="/images/icon-cross.svg" />  
                </ListItem>
                <ListItem>
                    <input type="radio" id="task-1" name="task1" value="Jog Around the Park 3x" />
                    <label for="task-1">Jog Around the Park 3x</label>
                    <img src="/images/icon-cross.svg" />  
                </ListItem>
                <ListItem>
                    <input type="radio" id="task-2" name="task2" value="Jog Around the Park 3x" />
                    <label for="task-2">Jog Around the Park 3x</label>
                    <img src="/images/icon-cross.svg" />  
                </ListItem>
                <ListItem>
                <input type="radio" id="task-3" name="task3" value="Jog Around the Park 3x" />
                    <label for="task-3">Jog Around the Park 3x</label>
                    <img src="/images/icon-cross.svg" />  
                </ListItem>
               
        
        <ListData>
                <p>5 items left</p>
            <span class="task_controls">     
                <p>All</p>
                <p>Active</p>
                <p>Completed</p>
            </span>    

                <p>Clear Completed</p>
        </ListData>

        </List>  
    )
}

export default ToDoList



const List = styled.div`
box-shadow: 2px 24px 24px -4px rgba(0,0,0,0.7);
    margin-top:2rem;
    border-radius:5px;

`;
const ListItem =styled.div`
    
    display:flex;
    align-items:center;
    background-color:#25273c;
    border-bottom:1px solid #383a51;
    color:white;
    font-size:20px;
    font-family: 'Raleway', sans-serif;
    padding:25px 36px;

    input[type="radio"]
    {
        height: 1.25rem;
        width: 1.25rem;
        margin-right: 1rem;
    }
    label{
        flex:1;
        cursor:pointer;
    }
   
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