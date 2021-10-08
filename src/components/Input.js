import styled from "styled-components";


const Input = ()=>{
    return(
        <Form autocomplete="off">
            <input type="text" id="todo" placeholder="Enter Your Task" />
        </Form>
    )
};


export default Input;


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