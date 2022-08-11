import React from "react";
import "antd/dist/antd.css";
import { Tag } from "antd";

export default function Viewdata(props) {
  return (
    <div className="tagsdata">
      <h4>Name Of Book</h4>
      <Tag color="#2db7f5">{props.name}</Tag>
      <h4>Author</h4>
      <Tag color="#2db7f5">{props.authors}</Tag>
      <h4 color="#2db7f5">Country</h4>
      <Tag color="#2db7f5">{props.country}</Tag>
      <h4>ISBN</h4>
      <Tag color="#2db7f5">{props.isbn}</Tag>
      <h4>Media Type</h4>
      <Tag color="#2db7f5">{props.mediaType}</Tag>
      <h4>Publisher</h4>
      <Tag color="#2db7f5">{props.publisher}</Tag>
    </div>
  );
}
