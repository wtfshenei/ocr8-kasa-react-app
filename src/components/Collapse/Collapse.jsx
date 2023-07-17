import React, { useRef, useState, useEffect } from "react";
import arrowDown from "./arrow_down.png";
import arrowUp from "./arrow_up.png";

const Collapse = ({ title, desc }) => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    setContentHeight(open ? contentRef.current.scrollHeight + 10 : 0);
  }, [open]);

  return (
    <li className="toggle">
      <button className="top" onClick={() => setOpen(!open)}>
        <label>{title}</label>
        <div className="img-collapse">
          <img src={open ? arrowDown : arrowUp} alt="Flèche" />
        </div>
      </button>
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
