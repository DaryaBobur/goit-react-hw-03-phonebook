import styled from 'styled-components';

export const Label = styled.label`
    font-size: 18px;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    width: 200px;
    margin-bottom: 15px;

input {
    padding-top: 3px;
    padding-bottom: 3px;
    font-size: 14px;
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
`