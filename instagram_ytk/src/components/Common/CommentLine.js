import React, { useState } from "react";
import styled from "styled-components";
import HoverProfile from "../User/HoverProfile";

const CommentBox = styled.div`
  float: left;
`;

const IdSpan = styled.span`
  color: ${({ theme }) => theme.fontColor};
  cursor: pointer;
  margin-right: 15px;
  font-weight: bold;
`;

const CommentDesc = styled.span`
  word-wrap: break-word;
  word-break: break-word;
  overflow-wrap: break-word;
  font-size: var(--font-14);
`;

const Hover = styled.div`
  position: absolute;
  width: fit-content;
  height: fit-content;
`;

const CommentLine = ({ userId, uid, comment }) => {
  const [hoverId, setHoverId] = useState(false);
  const showProfile = () => {
    setHoverId(true);
  };
  const hideProfile = () => {
    setHoverId(false);
  };
  return (
    <CommentBox className="comment-box" onMouseLeave={hideProfile}>
      <IdSpan onMouseEnter={showProfile}>{userId}</IdSpan>
      <CommentDesc>{comment}</CommentDesc>
      {hoverId ? (
        <Hover onMouseEnter={showProfile}>
          <HoverProfile target={"id"} uid={uid} />
        </Hover>
      ) : null}
    </CommentBox>
  );
};

export default CommentLine;
