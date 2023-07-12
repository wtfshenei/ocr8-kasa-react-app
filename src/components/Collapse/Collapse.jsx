import React, { useRef, useState, useEffect } from "react";
import arrowDown from "./arrow_down.png";
import arrowUp from "./arrow_up.png";

const Collapse = ({ title, desc }) => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  const handleToggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setContentHeight(open ? contentRef.current.scrollHeight + 10 : 0);
  }, [open]);

  return (
    <li className="toggle">
      <div className="top">
        <h3>{title}</h3>
        <button onClick={handleToggle}>
          <img src={open ? arrowDown : arrowUp} alt="Flèche" />
        </button>
      </div>
      <div
        className={`bottom ${open ? "active" : ""}`}
        style={{ maxHeight: contentHeight }}
        ref={contentRef}
      >
        {Array.isArray(desc) ? (
          desc.map((item, index) => <p key={`item_${index}`}>{item}</p>)
        ) : (
          <p>{desc}</p>
        )}
      </div>
    </li>
  );
};

export default Collapse;
