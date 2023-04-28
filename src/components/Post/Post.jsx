import { Container, PastTime, PostContent, PostTitle, PostTitleContent, Username, UsernameRow } from "./PostStyles";

export default function Post({ username, created_datetime, title, content }) {

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

  return (
    <Container>
      <PostTitleContent>
        <PostTitle>
          {title}
        </PostTitle>

        <div></div>
      </PostTitleContent>

      <PostContent>
        <UsernameRow>
          <Username>@{username}</Username>
          <PastTime>{calcPastTime(created_datetime)}</PastTime>
        </UsernameRow>
        {content}
      </PostContent>
    </Container>
  )
}

Post.propTypes = {
  username: String.required,
  created_datetime: Date.required,
  title: String.required,
  content: String.required,
}
