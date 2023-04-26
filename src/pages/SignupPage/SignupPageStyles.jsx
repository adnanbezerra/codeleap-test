import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #DDDDDD;
    width: 100%;
    height: 100%;
`

export const SignupFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #fff;
    width: 500px;
    border: 1px solid #CCCCCC;
    border-radius: 16px;
    padding: 24px;
    box-sizing: border-box;
`

export const SignupFormTitle = styled.p`
    font-size: 22px;
    font-weight: 700;
`

export const SignupLabel = styled.label`
    font-weight: 400;
    font-size: 16px;
    margin-top: 24px;
    margin-bottom: 8px;
`

export const SignupInput = styled.input`
    width: 100%;
    height: 32px;
    border: 1px solid #777777;
    border-radius: 8px;
    padding-left: 10px;
    box-sizing: border-box;

    ::placeholder {
        font-size: 14px;
        color: #CCCCCC;
        font-weight: 400;
        font-family: 'Roboto', sans-serif;
    }
`

export const SignupButton = styled.button`
    background-color: ${props => props.isEmpty ? "#c6c6c6" : "#7695EC"};
    border: 0;
    margin-top: 16px;
    border-radius: 8px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 16px;
    color: white;
    height: 32px;
    width: 111px;
    font-family: 'Roboto', sans-serif;

    :hover {
        cursor: pointer;
    }

    :disabled {
        cursor: default;
    }
`

export const SignupButtonRow = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`
