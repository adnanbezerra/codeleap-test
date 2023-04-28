import { useState } from "react";
import { Container, SignupButton, SignupButtonRow, SignupFormContainer, SignupFormTitle, SignupInput, SignupLabel } from "./SignupPageStyles";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUsernameRedux } from "../../actions/setUsername";

export default function SignupPage() {
    const [username, setUsername] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function submitForm(e) {
        e.preventDefault();

        dispatch(setUsernameRedux(username));
        localStorage.setItem("username", username);
        navigate("/timeline", {replace: true});
    }

    return (
        <Container>
            <SignupFormContainer onSubmit={submitForm}>
                <SignupFormTitle>Welcome to CodeLeap network!</SignupFormTitle>

                <SignupLabel htmlFor="username">Please enter your username</SignupLabel>
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
