import styled from 'styled-components';

export const Contacts = styled.ul`

li {
    display: flex;

    :not(:last-child) {
        margin-bottom: 15px;
    }
}

p {
    font-size: 18px;
    font-weight: 500;
}

button {
    margin-left: 10px;

    display: inline-block;
    border: 0;
    padding: 2px 2px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 2px;
    color: #2a2a2a;
    
    font-weight: 700;
    font-size: 12px;
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