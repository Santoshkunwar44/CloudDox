import styled from "styled-components";

export const UploadFileWrapper = styled.form`

  display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    color: white;

    .imageWrapper{
        width: 50px;
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
    .inputItem{
        display: flex;
        align-items: center;
        gap: 1rem;
        input{
            width: 20px;
            height: 20px;
            background-color: var(--main_color);
        }
        label{
            font-size: 14px;
            color: var(--main_color);
        }
    }
    button{
        background-color: var(--main_color);
    }
    .secondary_button{
        background-color: transparent;
        border: 1px solid var(--main_color );
        color: var(--main_color);
    }
`