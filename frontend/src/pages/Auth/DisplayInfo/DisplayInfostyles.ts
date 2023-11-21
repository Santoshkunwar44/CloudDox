import {styled} from "styled-components"

export const DisplayInfoWrapper = styled.div`

height: 100vh;
background-color: var(--dark_color );
display: flex;
justify-content: center;
padding: 4rem;
align-items: center;

.mainContent{
    width: 55%;
    display: flex;
    flex-direction:  column;
    align-items:  center;
    color: white;

    gap: 1rem;
}

button{
    background-color: var(--main_color);
}

.infoText{
    line-height: 25px;
    color: gray;
    letter-spacing: 0.9px;
    text-align: center;
}
`