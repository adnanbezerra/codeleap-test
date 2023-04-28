import { useEffect, useState } from "react";
import { Container, SignupButton, SignupButtonRow, SignupFormContainer, SignupFormTitle, SignupInput, SignupLabel } from "./SignupPageStyles";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUsernameRedux } from "../../actions/setUsername";

export default function SignupPage() {
    const [loginUsername, setLoginUsername] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { username } = useSelector(state => state.username);
    const usernameFromLocalStorage = localStorage.getItem("username");

    useEffect(() => {
        if (JSON.stringify(username) !== JSON.stringify({}) || usernameFromLocalStorage) {
            navigate("/timeline", { replace: true });
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function submitForm(e) {
        e.preventDefault();

        dispatch(setUsernameRedux(loginUsername));
        localStorage.setItem("username", loginUsername);
        navigate("/timeline", { replace: true });
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
                    value={loginUsername}
                    onChange={e => setLoginUsername(e.target.value)}
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
