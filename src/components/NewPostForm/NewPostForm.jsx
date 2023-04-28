import { useState } from "react";
import { Container, FormButton, FormButtonRow, FormContentInput, FormLabel, FormTitle, FormTitleInput } from "./NewPostFormStyles";
import usePostToAPI from "../../actions/usePostToAPI";

export default function NewPostForm() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const isEmpty = title === "" || content === "";

    function submitForm(e) {
        e.preventDefault();
        const payload = {
            username,
            title,
            content
        }

        const { error } = usePostToAPI(payload);

        if(error) alert("There was some problem!");
    }

    return (
        <Container onSubmit={submitForm}>
            <FormTitle>What's on your mind?</FormTitle>

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
                    disabled={isEmpty}
                    isEmpty={isEmpty}    
                >Create</FormButton>
            </FormButtonRow>
        </Container>
    )
}