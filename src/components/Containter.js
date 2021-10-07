import styled from "styled-components";



const Container =()=>{

return (
        <MainContainter>
            <ToDoHead>
                    <h1>TODO</h1>
                    <img src="/images/icon-sun.svg"></img>
            </ToDoHead>
        </MainContainter>
)

};

export default Container;
const MainContainter =styled.div`

        background-color:red;
        width:40vw;
        display:flex;
        justify-content:center;
        margin:0 auto;
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