import NewPostForm from "../../components/NewPostForm.jsx/NewPostForm";
import { Container, Content, Title, TitleDiv } from "./MainPageStyles";
import useGetFromAPI from "../../actions/useGetFromAPI";
import Post from "../../components/Post/Post";
import { useEffect, useState } from "react";

export default function MainPage() {
    const { data } = useGetFromAPI();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (JSON.stringify(data) !== JSON.stringify([{}])) {
            setPosts(data.results)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    function getPosts() {
        return (
            posts.map(entry => {
                return (
                    <Post
                        key={entry.id}
                    />
                )
            })
        )
    }

    return (
        <Container>
            <Content>
                <TitleDiv>
                    <Title>CodeLeap Network</Title>
                </TitleDiv>

                <NewPostForm />

                {getPosts()}
            </Content>
        </Container>
    )
}