import React, { useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { Button } from "./sct.js";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Button>
      <MdKeyboardArrowUp
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none", background: "#00000080",padding: "5px", borderRadius: "10px"}}
      />
    </Button>
  );
};

export default ScrollButton;
