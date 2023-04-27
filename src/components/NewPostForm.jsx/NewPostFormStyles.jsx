import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #999999;
    border-radius: 16px;
    width: 90%;
    margin: 24px 0;
    padding: 24px;
    box-sizing: border-box;
`

export const FormTitle = styled.p`
    font-weight: 700;
    font-size: 22px;
`

export const FormLabel = styled.label`
    font-size: 16px;
    color: #000;
    margin-top: 24px;
    margin-bottom: 8px;
`

export const FormButton = styled.button`
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

export const FormButtonRow = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`

export const FormTitleInput = styled.input`
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

export const FormContentInput = styled.textarea`
    width: 100%;
    height: 74px;
    border: 1px solid #777777;
    border-radius: 8px;
    padding-left: 10px;
    padding-top: 10px;
    box-sizing: border-box;

    ::placeholder {
        font-size: 14px;
        color: #CCCCCC;
        font-weight: 400;
        font-family: 'Roboto', sans-serif;
    }
`
