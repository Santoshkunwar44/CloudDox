import {styled } from "styled-components"

type SidebarWrapperPropsType={
    isDrawer:boolean
}
export const SidebarWrapper = styled.div<SidebarWrapperPropsType>`

flex:2.5;
background-color: var(--dark_color);
height: 100%;
display: flex;
flex-direction: column;
gap: 1rem;
padding: 2rem;
border-right: 1px solid rgb(55, 65, 81);
.logoBox{
    display: flex;
    align-items: center;
    gap: 0.7rem;
    margin-bottom: 1rem;
    img{
        width: 32px;
        height: 32px;
    }
    .appName{
        color: var(--main_color);
        font-size: 24px;
        letter-spacing: 2px;
    }

}

.sidebarItemList{
    position: relative;
    height: 100%;
    .activeSidebarItem{
        background-color:var(--main_color) !important;
        border-radius: 4px;
        p{

            color: black !important; 
        }
        svg{
            fill: black !important;
        }
    }
    .logout{
        width: 100%;
        position: absolute;
        bottom: 1rem;

    }
    .sidebarItem{
        display: flex;
        align-items: center;
        gap: 0.8rem;
        height: 55px;
        padding: 0 10px;
        cursor: pointer;
        transition: all .3s ease;

        &:hover{
        background-color: rgb(31, 41, 55) !important;
        border-radius: 4px;
        }
        svg{
            font-size: 18px;
            fill: var(--gray_color);
        }
        p{
            font-size: 15px;
            letter-spacing: 0.9px;
            color: var(--gray_color);
            font-weight: 400 !important;
        }
    }
}



      @media (max-width: 768px) {

        display: ${props=>props.isDrawer ? "flex":"none"};
      }
    
`