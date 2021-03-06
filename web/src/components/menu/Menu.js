import { useState } from "react";
// components
import Header from "./Header";
import Search from "./Search";
import Conversations from "./Conversations";

const Menu = () => {
  const [text, setText] = useState("");
  return (
    <>
      <Header />
      <Search text={text} setText={setText} />
      <Conversations text={text} />
    </>
  );
};

export default Menu;
