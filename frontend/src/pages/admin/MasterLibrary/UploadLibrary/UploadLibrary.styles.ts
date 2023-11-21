import styled from "styled-components";
export const UploadLibraryWrapper = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    color: white;

    .imageWrapper{
        width: 200px;
        height:200px;
        border-radius: 5px;
        overflow: hidden;
        position: relative;
        svg{
            fill: var(--main_color);
            position: absolute;
            top: 5px;
            right: 5px;
            font-size: 2rem;
        }
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    input{
        font-size: 14px;
        background-color: transparent;
    }
    button{
        background-color: var(--main_color);
    }
`