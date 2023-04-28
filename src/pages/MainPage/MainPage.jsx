import NewPostForm from "../../components/NewPostForm/NewPostForm";
import { Container, Content, Title, TitleDiv } from "./MainPageStyles";
import useGetFromAPI from "../../actions/useGetFromAPI";
import Post from "../../components/Post/Post";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
    const { data } = useGetFromAPI();
    const [posts, setPosts] = useState([]);
    const { username } = useSelector(state => state.username);
    const navigate = useNavigate();

    useEffect(() => {
        if(JSON.stringify(username) === JSON.stringify(null)) {
            navigate("/", {replace: true});
        }

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
                        username={entry.username}
                        created_datetime={entry.created_datetime}
                        title={entry.title}
                        content={entry.content}
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