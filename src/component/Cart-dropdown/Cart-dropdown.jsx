import { styled } from "styled-components";

export const Cart_dropdown_container=styled.div`
   position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;

    button{   // you applied the specic taregt button inside of parent div isely appliy
      margin-top: auto;  
    }
`

export const Empty_message=styled.span`
  font-size: 18px;
   margin: 50px auto;
`

export const Cart_dropdown_strodata=styled.div`
  height: 240px;
      display: flex;
      flex-direction: column;
      overflow: scroll;
`

  