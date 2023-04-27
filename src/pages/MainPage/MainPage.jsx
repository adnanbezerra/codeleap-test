import { useEffect, useState } from "react";
import NewPostForm from "../../components/NewPostForm.jsx/NewPostForm";
import { Container, Content, Title, TitleDiv } from "./MainPageStyles";
import useGetFromAPI from "../../actions/useGetFromAPI";

export default function MainPage() {
    return(
        <Container>
            <Content>
                <TitleDiv>
                    <Title>CodeLeap Network</Title>
                </TitleDiv>

                <NewPostForm />
            </Content>
        </Container>
    )
}