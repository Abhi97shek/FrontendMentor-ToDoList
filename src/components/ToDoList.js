import styled from "styled-components";


import React from 'react'

function ToDoList() {
    return (
        <List>
                <ListItem>
                    {/* <input type="radio" id="html" name="fav_language" value="HTML" /> */}
                    <img src="/images/icon-check.svg" />
                    <p>Jog Around the Park 3x</p>
                    <img src="/images/icon-cross.svg" />  
                </ListItem>
                <ListItem>
                    <input type="radio" id="html" name="fav_language" value="HTML" />
                    <p>Jog Around the Park 3x</p>
                    <img src="/images/icon-cross.svg" />  
                </ListItem>
                <ListItem>
                    <input type="radio" id="html" name="fav_language" value="HTML" />
                    <p>Jog Around the Park 3x</p>
                    <img src="/images/icon-cross.svg" />  
                </ListItem>
                <ListItem>
                    <input type="radio" id="html" name="fav_language" value="HTML" />
                    <p>Jog Around the Park 3x</p>
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
    padding:10px 40px;

    p{
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