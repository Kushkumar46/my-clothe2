

import styled from "styled-components"
import { Link } from "react-router-dom"

 export const Navparent = styled.div`
    height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`
export const Crowns=styled.div`
  height: 100%;
   width: 70px;
   padding: 25px;
`

export const Nav_links_container = styled.div`
   width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`


export const Nav_link_shop = styled(Link)`
  padding: 10px 15px;
      cursor: pointer;
      text-decoration:none;
`


export const SignIn = styled(Link)`
    padding: 10px 15px;
      cursor: pointer;
      text-decoration:none;
`
 
     

