import { styled } from "styled-components";

import { ReactComponent as ShopingiSvg } from "../all image/shopping-bag (1).svg";

export const Cart_icon_parent_conatiner = styled.div`
    width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

export const Cart_con = styled(ShopingiSvg)`
    width: 24px;
    height: 24px;
`

export const Cart_icon_count = styled.span`
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 12px;
`