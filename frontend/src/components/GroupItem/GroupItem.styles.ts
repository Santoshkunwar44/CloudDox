import {styled} from "styled-components"
export const GroupItemWrapper = styled.div`

display: flex;
flex-direction: column;
gap: 1.5rem;
width: 450px;
.groupTitle{

    color: var(--main_color);
    font-weight: 500;
    letter-spacing: 1px;
    font-size: 20px;

}
.groupImage{
    width: 100%;
    height: 250px;
    object-fit: cover;
}
.groupDesc{
    font-size: 14px;
    color: var(--gray_color);
}

@media screen  and (max-width:768px){
    width: 100%;
    .groupDesc{
        text-align: justify;
    }
}

`