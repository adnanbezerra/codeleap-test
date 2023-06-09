import NewPostForm from "../../components/NewPostForm/NewPostForm";
import { Container, Content, Title, TitleDiv } from "./MainPageStyles";
import useGetFromAPI from "../../actions/useGetFromAPI";
import Post from "../../components/Post/Post";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { setUsernameRedux } from "../../actions/setUsername";

export default function MainPage() {
    const { data } = useGetFromAPI();
    const [posts, setPosts] = useState([]);
    const { username } = useSelector(state => state.username);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (JSON.stringify(username) === JSON.stringify({})) {
            navigate("/", { replace: true });
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
                        id={entry.id}
                        postOwnerUsername={entry.username}
                        created_datetime={entry.created_datetime}
                        title={entry.title}
                        content={entry.content}
                    />
                )
            })
        )
    }

    function logout() {
        localStorage.clear();
        dispatch(setUsernameRedux({}));
        navigate("/", { replace: true });
    }

    return (
        <Container>
            <Content>
                <TitleDiv>
                    <Title>CodeLeap Network</Title>
                    <FiLogOut onClick={logout} />
                </TitleDiv>

                <NewPostForm />

                {getPosts()}
            </Content>
        </Container>
    )
}