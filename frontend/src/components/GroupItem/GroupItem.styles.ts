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
    text-align: start;
    color: var(--gray_color);
      overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 2; /* number of lines to show */
           line-clamp: 2;
   -webkit-box-orient: vertical;
}
.fileWrapper{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 400px;
    overflow: scroll;
}

@media screen  and (max-width:768px){
    width: 100%;
    .groupDesc{
        text-align: justify;
    }
}

`