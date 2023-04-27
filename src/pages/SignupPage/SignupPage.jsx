import { useState } from "react";
import { Container, SignupButton, SignupButtonRow, SignupFormContainer, SignupFormTitle, SignupInput, SignupLabel } from "./SignupPageStyles";

export default function SignupPage() {
    const [username, setUsername] = useState("");

    function submitForm(e) {
        e.preventDefault();
    }

    return (
        <Container>
            <SignupFormContainer onSubmit={submitForm}>
                <SignupFormTitle>Welcome to CodeLeap network!</SignupFormTitle>

                <SignupLabel for="username">Please enter your username</SignupLabel>
                <SignupInput 
                    type="text" 
                    id="username"
                    placeholder="John Doe" 
                    value={username} 
                    onChange={e => setUsername(e.target.value)} 
                />
                
                <SignupButtonRow>
                    <SignupButton 
                        isEmpty={username.length === 0}
                        disabled={username.length === 0}
                    >
                        ENTER
                    </SignupButton>
                </SignupButtonRow>
            </SignupFormContainer>
        </Container>
    )
}
