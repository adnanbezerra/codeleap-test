import { useState } from "react";
import { Container, FormButton, FormButtonRow, FormContentInput, FormLabel, FormTitle, FormTitleInput } from "./NewPostFormStyles";
import usePostToAPI from "../../actions/usePostToAPI";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function NewPostForm() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const isEmpty = title === "" || content === "";
    const { error, postToApi} = usePostToAPI();
    const { username } = useSelector(state => state.username);
    const navigate = useNavigate();

    function submitForm(e) {
        e.preventDefault();
        const payload = {
            username,
            title,
            content
        }

        postToApi(payload);
        if(error) alert("There was some problem!");

        setTitle("");
        setContent("");
        navigate("/", { replace: true });
    }

    return (
        <Container onSubmit={submitForm}>
            <FormTitle>What is on your mind?</FormTitle>

            <FormLabel htmlFor="title">Title</FormLabel>
            <FormTitleInput
                type="text"
                id="title"
                placeholder="Hello world"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />

            <FormLabel htmlFor="content">Content</FormLabel>
            <FormContentInput 
                type="text"
                id="content"
                placeholder="Content here"
                value={content}
                onChange={e => setContent(e.target.value)}
            />

            <FormButtonRow>
                <FormButton 
                    onClick={submitForm}
                    disabled={isEmpty}
                    isEmpty={isEmpty}    
                >Create</FormButton>
            </FormButtonRow>
        </Container>
    )
}