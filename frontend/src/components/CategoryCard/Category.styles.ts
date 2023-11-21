import {styled} from "styled-components"

export const CategoryCardWrapper = styled.div`
height: 250px;
background-color: var(--main_color);
width: 450px;
padding: 5px;
border-radius: 4px;
cursor: pointer;
img{
    height: 190px;
    object-fit: cover;
    width: 100%;
    border-radius: 2px ;
}
.nameBox{
    display: flex;
    align-items: center;
    height: 40px;
    p{
        color: black;
        font-size: 14px;
        letter-spacing: 0.9px;
    }
}

`