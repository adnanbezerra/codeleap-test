import Modal from "react-modal";
import { ButtonsRow, CancelButton, ModalDiv, DeleteButton } from "./DeletePostModalStyles";
import useDeleteToAPI from "../../actions/useDeleteToAPI";
import { useNavigate } from "react-router";

export default function DeletePostModal({ isOpen, setIsOpen, objectId }) {
  const { deleteToApi, error } = useDeleteToAPI();
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

    deleteToApi(objectId);
    setIsOpen(false);
    navigate("/", { replace: true });

    if (error) alert("There was some problem!");
  }

  return (
    <Modal
      isOpen={isOpen}
      style={modalStyles}
    >
      <ModalDiv>
        Are you sure you want to delete this item?

        <ButtonsRow>
          <CancelButton
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </CancelButton>

          <DeleteButton
            onClick={submitForm}
          >
            Delete
          </DeleteButton>
        </ButtonsRow>
      </ModalDiv>
    </Modal>
  )
}

DeletePostModal.propTypes = {
  isOpen: Boolean.required,
  objectId: Number.required,
  setIsOpen: Function.required,
}