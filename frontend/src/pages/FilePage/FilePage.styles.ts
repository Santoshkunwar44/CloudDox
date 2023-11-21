import {styled} from "styled-components"


export const FilePageWrapper = styled.div`
flex: 9.5;
background-color: black;
padding: 1rem 2rem;
display: flex;
flex-direction: column;
gap: 1rem;
height: 100%;
overflow: scroll;

.header_box{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-bottom: 1px solid var(--gray_color);
    align-items: center;
    padding: 20px 0;
    .headerTitle{
        color: var(--main_color);
    }
}
.header_box p{
    font-size: 14px;
    color: var(--gray_color);
    letter-spacing: 0.9px;
}
.innerBox{
    width: 70%;
    margin: auto;
    display: flex;
flex-direction: column;
gap: 3rem;

.fileWrapper{
    display: flex;
    flex-direction: column;
    gap: 2rem;
}
}


`