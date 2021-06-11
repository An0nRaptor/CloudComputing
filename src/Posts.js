import { Avatar } from "@material-ui/core";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import SharedOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import InputOptions from "./InputOptions";
import React from "react";
import "./Posts.css";
function Posts ({ name, description, message, photoUrl }){
  return (
    <div className="posts">
      <div className="post__header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__button">
        <InputOptions Icon={ThumbUpAltOutlinedIcon} title="like" color="gray" />
        <InputOptions Icon={ChatOutlinedIcon} title="Comment" color="gray" />
        <InputOptions Icon={SharedOutlinedIcon} title="Share" color="gray" />
        <InputOptions Icon={SendOutlinedIcon} title="Send" color="gray" />
      </div>
    </div>
  );
}

export default Posts;
