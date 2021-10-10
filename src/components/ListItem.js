import styled from "styled-components";



import React from 'react'

function ListItem(props) {
    return (
        <ListItem1>
            {console.log(props.tasks)}
                <input type="radio" id="task-4" name="task4" value="HTML" />
                <label htmlFor="task-4" >{props.tasks.task}</label>
                    
                <img src="/images/icon-cross.svg" />  
        </ListItem1>
    )
}

export default ListItem;


const ListItem1 =styled.div`
    
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
