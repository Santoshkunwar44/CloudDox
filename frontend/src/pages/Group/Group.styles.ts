import {styled} from "styled-components"
export const GroupWrapper = styled.div`

    padding: 1rem 2rem ;
    background-color: var(--dark_color);
    flex: 9.5;
    height: 100%;
    overflow: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
    .header{

        
        
        margin-top: 5rem;
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items:  center;
        .headerTitle{
            color: var(--main_color);
        }
    }
    .groupDesc{
        color: var(--gray_color);
        letter-spacing: 1px;
        font-size: 13px;
        text-align: center;
    }
    .groupItemContainer{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 4rem;
    }
`