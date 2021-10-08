import styled from "styled-components";
import Input from "./Input";
import ToDoList from "./ToDoList";


const Container =()=>{

return (
        <MainContainter>
            <ToDoHead>
                    <h1>TODO</h1>
                    <img src="/images/icon-sun.svg"></img>
            </ToDoHead>
            <Input />
            <ToDoList />
        </MainContainter>
)

};

export default Container;
const MainContainter =styled.div`
        box-sizing:border-box;
       
        width:40%;
        display:flex;
        marign-top:-2rem;
        justify-content:center;
        margin:0 auto;
        flex-direction:column;
        position:absolute;
        top:3rem;
        left:0;
        right:0;
     
        h1{
            color:white;
        }
        
      
      
`;


const ToDoHead = styled.div`

   display:flex;
   justify-content:space-between;
   width:100%;
   align-items:center;
    
   h1
   {
       letter-spacing:5px;
   }

   img{
       width:1.75rem;
       height:1.75rem;
   }

`;