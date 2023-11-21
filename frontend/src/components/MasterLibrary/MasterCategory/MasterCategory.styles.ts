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
    }
}
.categoryContainer{
    display: grid;
    grid-template-columns:  450px 450px;
    gap: 20px;

}
`