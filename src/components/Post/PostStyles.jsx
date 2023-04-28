import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  border: 1px solid #999999;
  border-radius: 16px;
  margin-bottom: 24px;
`

export const PostTitleContent = styled.div`
  height: 70px;
  background-color: #7695EC;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  box-sizing: border-box;
  border-radius: 16px 16px 0 0;
`

export const PostTitle = styled.p`
  font-weight: 700;
  font-size: 22px;
`

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  box-sizing: border-box;
`

export const Username = styled.p`
  color: #777;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 16px;
`

export const PastTime = styled.p`
  color: #777;
  font-size: 18px;
`

export const UsernameRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`
