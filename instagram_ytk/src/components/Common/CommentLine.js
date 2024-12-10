import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import HoverProfile from "../User/HoverProfile";

const CommentBox = styled.div`
  float: left;
  position: relative;
`;

const IdSpan = styled.span`
  color: ${({ theme }) => theme.fontColor};
  cursor: pointer;
  margin-right: 15px;
  font-weight: bold;
  font-size: var(--font-14);
`;

const CommentDesc = styled.span`
  word-wrap: break-word;
  word-break: break-word;
  overflow-wrap: break-word;
  font-size: var(--font-14);
`;

const Hover = styled.div`
  position: absolute;
  top: -20%;
  ${({ position }) => position}
  width: fit-content;
  height: fit-content;
  z-index: 5;
`;

const Fixed = styled.div`
  width: fit-content;
  height: fit-content;
  position: fixed;
`;

const CommentLine = ({ userId, uid, comment }) => {
  const [hoverId, setHoverId] = useState(false);
  const [position, setPosition] = useState("");
  const hoverProfileRef = useRef(null);

  useEffect(() => {
    if (hoverProfileRef.current) {
      const hoverProfileRect = hoverProfileRef.current.getBoundingClientRect();
      console.log(hoverProfileRect);

      const screenHeight = window.innerHeight;

      if (hoverProfileRect.top + hoverProfileRect.height > screenHeight) {
        setPosition("left: 0");
      } else {
        setPosition("");
      }
    }
  }, [hoverId]);

  const showProfile = () => {
    setHoverId(true);
  };
  const hideProfile = () => {
    setHoverId(false);
  };
  return (
    <CommentBox className="comment-box" onMouseLeave={hideProfile}>
      <IdSpan onMouseEnter={showProfile}>{userId}</IdSpan>
      {hoverId ? (
        <Hover
          ref={hoverProfileRef}
          onMouseEnter={showProfile}
          position={position}
        >
          <Fixed>
            <HoverProfile target={"id"} uid={uid} />
          </Fixed>
        </Hover>
      ) : null}
      <CommentDesc>{comment}</CommentDesc>
    </CommentBox>
  );
};

export default CommentLine;
