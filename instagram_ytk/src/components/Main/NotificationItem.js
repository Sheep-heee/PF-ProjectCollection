import React from "react";
import styled from "styled-components";
import ProfileImg from "../Profile/ProfileImg";
import Button from "../Common/Button";
import { dontReady } from "../../utils/utils";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 5px 10px 5px 5px;
  border-radius: var(--border-radius-8);
  transition: background 0.3s;
  &:hover {
    background: ${({ theme }) => theme.iconBgColor};
    @media screen and (max-width: 630px) {
      background: none;
    }
  }
`;

const UserDetail = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
`;

const UserDesc = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Text = styled.div`
  display: flex;
  line-height: 1.3;
  gap: 4px;
`;

const NotificationItem = ({
  type,
  feedbackUser,
  userNickName,
  url,
  comment,
}) => {
  return (
    <Wrapper onClick={dontReady}>
      <UserDetail>
        <ProfileImg size={50} url={url} hover={"noHover"} />
        <UserDesc>
          <Text>
            {type === "notice"
              ? "현재 알림창은 목업으로만 구현되어 있습니다."
              : `${feedbackUser} 님이
            ${
              type === "like"
                ? "회원님의 게시물을 좋아합니다."
                : type === "follow"
                ? "회원님을 팔로우하기 시작했습니다."
                : `댓글을 남겼습니다. ${userNickName} ${comment}`
            }`}
          </Text>
          {type === "follow" ? (
            <Button
              type={"positive"}
              width={"120px"}
              height={"30px"}
              text={"팔로우"}
            />
          ) : null}
        </UserDesc>
      </UserDetail>
    </Wrapper>
  );
};

export default NotificationItem;
