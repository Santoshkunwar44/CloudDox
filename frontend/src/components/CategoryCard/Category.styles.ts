import {styled} from "styled-components"

export const CategoryCardWrapper = styled.div`
height: 280px;
width: 450px;

padding: 5px;
border-radius: 4px;
cursor: pointer;
img{
    height: 235px;
    object-fit: cover;
    width: 100%;
    border-radius: 5px ;
}
.nameBox{
    display: flex;
    align-items: center;
    height: 45px;
    p{
        color: var(--main_color);
        font-size: 14px;
        letter-spacing: 0.9px;
    }
}

@media screen  and (max-width:768px){

    height: 300px;
    width: 100%;
    img{
        height: 240px;
    }
    
}


`