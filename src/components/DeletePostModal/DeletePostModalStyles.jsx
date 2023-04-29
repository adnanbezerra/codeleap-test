import styled from "styled-components"

export const ModalDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  font-weight: 700;
  font-size: 22px;
`

export const DeleteButton = styled.button`
  margin-right: 16px;
  width: 120px;
  height: 32px;
  border: 0;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FF5151;

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
  margin-top: 40px;
`
