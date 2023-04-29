import { useState } from "react";
import { Container, PastTime, PostContent, PostTitle, PostTitleContent, Username, UsernameRow } from "./PostStyles";
import { BiEdit } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import { useSelector } from "react-redux";
import DeletePostModal from "../DeletePostModal/DeletePostModal";
import EditPostModal from "../EditPostModal/EditPostModal";

export default function Post({ id, postOwnerUsername, created_datetime, title, content }) {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const { username } = useSelector(state => state.username);

  function calcPastTime(time) {
    const timeMark = new Date(time);
    const now = new Date();
    const differenceInMilisseconds = now - timeMark;
    const minutesPast = Math.floor(differenceInMilisseconds / (1000 * 60));

    if (minutesPast < 60) {
      return `${minutesPast} minute(s) ago`;
    } else {
      const horasPassadas = Math.floor(minutesPast / 60);
      const minutosRestantes = minutesPast % 60;
      return `${horasPassadas} hours ${minutosRestantes} min ago`;
    }
  }

  function getEditDeleteIcons() {
    return postOwnerUsername === username ?
      <div style={{ display: 'flex', color: '#fff', fontSize: '28px' }}>
        <MdDeleteForever
          onClick={() => setIsDeleteOpen(true)}
          style={{ marginRight: '16px' }}
        />
        <DeletePostModal
          isOpen={isDeleteOpen}
          setIsOpen={setIsDeleteOpen}
          objectId={id}
        />
        <BiEdit
          onClick={() => setIsEditOpen(true)}
        />
        <EditPostModal
          isOpen={isEditOpen}
          setIsOpen={setIsEditOpen}
          objectId={id}
        />
      </div>
      :
      <div></div>
  }

  return (
    <Container>
      <PostTitleContent>
        <PostTitle>
          {title}
        </PostTitle>

        <div>
          {getEditDeleteIcons()}
        </div>
      </PostTitleContent>

      <PostContent>
        <UsernameRow>
          <Username>@{postOwnerUsername}</Username>
          <PastTime>{calcPastTime(created_datetime)}</PastTime>
        </UsernameRow>
        {content}
      </PostContent>
    </Container>
  )
}

Post.propTypes = {
  id: Number.required,
  postOwnerUsername: String.required,
  created_datetime: Date.required,
  title: String.required,
  content: String.required,
}
