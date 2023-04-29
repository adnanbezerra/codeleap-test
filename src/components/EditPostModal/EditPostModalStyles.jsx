import styled from "styled-components"

export const ModalForm = styled.form`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  font-weight: 700;
  font-size: 22px;
  flex-direction: column;
`

export const TitleInput = styled.input`
  border: 1px solid #777777;
  border-radius: 8px;
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  height: 32px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 10px;

  ::placeholder {
    color: #ccc;
  }
`

export const ContentInput = styled.textarea`
  border: 1px solid #777777;
  border-radius: 8px;
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  height: 74px;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;

  ::placeholder {
    color: #ccc;
  }
`

export const InputLabel = styled.label`
  font-size: 16px;
  margin-bottom: 8px;
  margin-top: 24px;
`

export const SaveButton = styled.button`
  margin-right: 16px;
  width: 120px;
  height: 32px;
  border: 0;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.isEmpty ? "#85d196" :"#47B960"};

  color: #fff;
  font-size: 16px;
  font-weight: 700;
`

export const CancelButton = styled.button`
  margin-right: 16px;
  width: 120px;
  height: 32px;
  border: 1px solid #000000;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #000000;
  font-size: 16px;
  font-weight: 700;
`

export const ButtonsRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
`
