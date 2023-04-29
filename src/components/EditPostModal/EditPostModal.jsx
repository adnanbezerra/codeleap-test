import { useState } from "react";
import Modal from "react-modal";
import { ButtonsRow, CancelButton, ContentInput, InputLabel, ModalForm, SaveButton, TitleInput } from "./EditPostModalStyles";
import usePatchToAPI from "../../actions/usePatchToAPI";
import { useNavigate } from "react-router";

export default function EditPostModal({ isOpen, setIsOpen, objectId }) {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const { patchToApi, error } = usePatchToAPI();
  const isEmpty = content === "" || title === "";
  const navigate = useNavigate();

  const modalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "660px",
      borderRadius: "16px",
      transform: 'translate(-50%, -50%)',
    }
  }

  function submitForm(e) {
    e.preventDefault();
    const payload = {
      title,
      content
    }

    patchToApi(objectId, payload);
    if (error) alert("There was some problem!");

    setIsOpen(false);
    navigate("/", { replace: true });
  }

  return (
    <Modal
      isOpen={isOpen}
      style={modalStyles}
    >
      <ModalForm>
        Edit item

        <InputLabel htmlFor="title">Title</InputLabel>
        <TitleInput
          type="text"
          id="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Hello world"
        />

        <InputLabel htmlFor="content">Content</InputLabel>
        <ContentInput
          type="text"
          id="content"
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder="Content here"
        />

        <ButtonsRow>
          <CancelButton
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </CancelButton>

          <SaveButton
            onClick={submitForm}
            isEmpty={isEmpty}
            disabled={isEmpty}
          >
            Save
          </SaveButton>
        </ButtonsRow>
      </ModalForm>
    </Modal>
  )
}

EditPostModal.propTypes = {
  isOpen: Boolean.required,
  objectId: Number.required,
  setIsOpen: Function.required,
}
