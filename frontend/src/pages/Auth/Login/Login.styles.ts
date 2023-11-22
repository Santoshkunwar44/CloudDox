import {styled} from "styled-components"

export const LoginWrapper = styled.div`
height: 100vh;
background-color: var(--dark_color);
display: flex;
align-items: center;
justify-content: center;
.loginContent{
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    width: 90%;

    .loginHeader{
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
            font-size: 13px;
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
            input{
                &::placeholder{
                    color: var(--main_color);
                }
            }
            .invalidMessage{
                color: red;
                font-size: 11px;
                letter-spacing: px;
            }
        }
        button{
            background-color: var(--main_color);
            height: 50px;
            cursor: pointer;
            font-size: 18px;
        }
    }
    .goToText{
        color: var(--main_color);
        text-align: center;
        letter-spacing: 1px;
        font-size: 12px;
        letter-spacing:2px;
        cursor: pointer;
    }

}
`