import {styled} from "styled-components"


export const MasterCategoryWrapper = styled.div`
display: flex;
align-items: center;
flex-direction: column;
margin-top: 5rem;
gap: 5rem;
.headerBox{
    .headerTitle{
        color: var(--main_color);
        font-size: 2.5rem;
        font-weight: bold;
    }
}
.categoryContainer{
    display: flex ;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;

}
`