import styled from 'styled-components';

export const Form = styled.form`
width: 250px;
padding: 20px;
border: 2px solid #e7e5e5;
margin-bottom: 30px;

label {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    font-weight: 500;
    font-size: 18px;
}

input {
    padding-top: 2px;
    padding-bottom: 2px;
    font-size: 16px;
    border-color: gray;
    border-style: solid;
    outline: none;
    border-image: none;
    border-width: 1px ;
   border-radius: 2px;
    :focus {
        border-color: #2196f3;
    }
}
button {
    display: inline-block;
    border: 0;
    padding: 5px 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    color: #2a2a2a;
    
    font-weight: 700;
    font-size: 14px;
    line-height: 1.88;
    letter-spacing: 0.06em;
    background-color: #e7e5e5;
    cursor: pointer;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
   
    :hover, :focus {
        background-color: #d5d1d1;
        color: #544d4d;
    }
}
`