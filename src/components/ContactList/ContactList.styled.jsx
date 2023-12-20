import styled from 'styled-components';

export const ListOfContact = styled.ul`
display: flex;
flex-direction: column;
alight-item: center;
font-size: 20px;
width: 400px;
padding: 12px;
margin: 0 auto;

`;

export const ContactItem = styled.li`
margin-bottom: 20px;
padding: 8px 12px;
border: 2px solid #92717d;
background-color: #fff;
border-radius: 4px;
list-style: none;
display: flex;
  align-items: center;
  justify-content: space-between;
    button {
        cursor: pointer;
    border: 2px solid black;
    color: #000;
    font-size: 18px;
    background-color: #d3dde3;
        }
    }
`;