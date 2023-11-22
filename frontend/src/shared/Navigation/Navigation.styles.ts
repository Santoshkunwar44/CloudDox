import {styled} from "styled-components"

export const NavigationWrapper = styled.div`

width: 100%;
display: flex;


.appLogo{
    align-items:  center;
    gap: 0.5rem;
    display: none;
    img{
        width: 40px;
        height: 40px;
    }
    .appName{
        color: var(--main_color);
        font-size: 1.5rem;
        font-weight: bold;

    }

    
}
.leftBox{
    display: flex;
    gap: 0.5rem;
    button{
        height: 40px !important;
        cursor: pointer;
        padding: 0 1rem;
    }
    .homeButton{
        background-color: var(--main_color);
        color: white !important;
    }
    .backButton{
        border: 1px solid var(--main_color);
        color: var(--main_color);
        background-color:  transparent;
    }
}
.rightBox{
    input{
        width: 250px;
         /* background-color: rgb(31, 41, 55) !important; */
         background-color: black;
        border: 1px solid var(--main_color);;
        border-radius: 4px;
        color: var(--gray_color);
        letter-spacing: 0.8px;
        font-size: 12px;
        &::placeholder{
            color: var(--gray_color);
            letter-spacing: 0.8px;
            font-size: 12px;
        }
    }
}
@media screen and (max-width:768px) {

    width: 100%;
    justify-content: space-between;
    .appLogo{
        display: flex;
    }
}
`