import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: #DDDDDD;

`

export const Content = styled.div`
    display: flex;
    height: 100%;
    width: 50%;
    flex-direction: column;
    background-color: #fff;   
    align-items: center;
    overflow-x: scroll;

    @media(max-width: 1100px) {
        width: 70%;
    }
`

export const TitleDiv = styled.div`
    background-color: #7695EC;
    padding: 27px 37px;
    width: 100%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    justify-content: space-between;
    color: white;
    font-size: 22px;
`

export const Title = styled.h1`

`
