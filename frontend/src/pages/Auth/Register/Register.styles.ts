import {styled} from "styled-components"


export const RegisterWrapper = styled.div`

height: 100vh;
background-color: var(--dark_color);
display: flex;
align-items: center;
justify-content: center;
.mainContent{
    max-width: 500px;
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 3rem;

    .contentHeader{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;

        .headerText{
            font-weight: 400;
            font-size: 20px;
            letter-spacing:1px;
            color: var(--main_color);
        }
    }
    .form{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1.4rem;
        .forgotPassword{
            color: var(--main_color);
            cursor: pointer;
            font-size: 15px;
            letter-spacing: 1px;
            text-align: end;
        }
        .formItem{
            display: flex;
            flex-direction: column;
            gap: 8px;
            width: 100%;

            label{
                font-size: 12px;
                letter-spacing: 0.9px;
                color: var(--main_color);
            }
            .invalidMessage{
                color: red;
                letter-spacing: 1px;
                font-size: 12px;
            }
            input{
                &::placeholder{
                    color: var(--main_color);
                }
            }
            
        }
        button{
            background-color: var(--main_color);
            height: 50px;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 18px;
        }
        .loading{
            background-color: transparent;
            border: 1px solid var(--main_color);
        }
        iframe{
            width: 40px;
            height: 40px;
        }
    }
    .goTo{
         color: var(--main_color);
        text-align: center;
        letter-spacing: 1px;
        font-size: 12px;
        letter-spacing:2px;
        cursor: pointer;
    }
}

    


`