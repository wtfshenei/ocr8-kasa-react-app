import React, { useRef, useState, useEffect } from "react";

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
    <div className="toggle">
      <div className="top" onClick={handleToggle}>
        <h2>{title}</h2>
        <button>
          <img
            src={
              open ? "./assets/img/arrow_down.png" : "./assets/img/arrow_up.png"
            }
            alt="Flèche"
          />
        </button>
      </div>
      <div
        className={`bottom ${open ? "active" : ""}`}
        style={{ maxHeight: contentHeight }}
        ref={contentRef}
      >
        {desc}
      </div>
    </div>
  );
};

export default Collapse;
