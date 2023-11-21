import {styled} from "styled-components"

export const FileWrapper = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0.5rem 1rem  ;
    justify-content: center;
    border-radius: 4px;
    border: 1px solid var(--main_color);
    .fileTypeBox{
        display: flex;
        gap: 15px;
    }
    .fileName{
        color: var(--main_color);
        letter-spacing: 0.9px;
        font-size: 14px;
    }


`
export const FileTypeWrapper = styled.div`
display: flex;
gap: 5px;
background-color: var(--main_color);
padding: 4px  7px;
border-radius: 4px;
p{
    font-size: 12px;
    letter-spacing: 0.9px;

}

`