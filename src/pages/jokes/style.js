import styled  from "styled-components"

export const MainContainer = styled.div`
    height: 100vh;
    background: #f4f7f8;
    margin: 0;
    padding-right: 0px;
    padding-left: 0px;
    width: 100%;
    .welcome {
        h1 {
            margin-right: 20px;
            margin-bottom: 5rem;
            box-sizing: border-box;
            border-radius: 8px;
            width: 100%;
            height: 30%;
            color: sienna;
            text-align: center;
            padding: 130px 40px 0px 40px;
        }
    }
    @media only screen and (max-width : 768px) {
        .welcome {
            display: block;
            overflow-y: scroll;
            font-size: .7rem;
            padding: 0px 0px 15px 0px;
            height: 30%;
            margin-bottom: 5rem;
        }
    }
`

export const FormContainer = styled.div`
    form {
        max-width: 300px;
        margin: 10px auto;
        padding: 10px 20px;
        background: #f4f7f8;
        border-radius: 8px;
    }
    input {
        background: rgba(255,255,255,0.1);
        border: none;
        font-size: 16px;
        height: auto;
        margin: 0;
        outline: 0;
        padding: 15px;
        width: 100%;
        background-color: #e8eeef;
        color: #8a97a0;
        box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
        margin-bottom: 30px;
    }
    button {
        padding: 15px 30px 15px 30px;
        color: #FFF;
        background-color: #4bc970;
        font-size: 18px;
        text-align: center;
        font-style: normal;
        border-radius: 5px;
        width: 110%;
        border: 1px solid #3ac162;
        border-width: 1px 1px 3px;
        box-shadow: 0 -1px 0 rgba(255,255,255,0.1) inset;
        margin-bottom: 10px;
    }
    @media only screen and (max-width : 768px) {
        input {
            width: 90%;
        }

        button {
            width: 100%;
        }
    }
`  
