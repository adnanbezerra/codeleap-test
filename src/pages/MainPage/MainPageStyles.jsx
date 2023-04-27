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

    @media(max-width: 1100px) {
        width: 70%;
    }
`

export const TitleDiv = styled.div`
    background-color: #7695EC;
    padding-left: 37px;
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
`

export const Title = styled.h1`
    color: white;
    font-size: 22px;
`
