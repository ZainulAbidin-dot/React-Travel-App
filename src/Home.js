import React from "react";
import ListItem from "./ListItem";

const Home = ({ post, setpost }) => {
  console.log(post);
  return <ListItem post={post} />;
};
export default Home;
