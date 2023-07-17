import React, { useState } from "react";
import arrowDown from "./arrow_down.png";
import arrowUp from "./arrow_up.png";

const Collapse = ({ title, desc }) => {
  const [open, setOpen] = useState(false);

  return (
    <li className="toggle">
      <button className="top" onClick={() => setOpen(!open)}>
        <label>{title}</label>
        <div className="img-collapse">
          <img src={open ? arrowDown : arrowUp} alt="Flèche" />
        </div>
      </button>
      {open && (
        <div className="bottom">
          {Array.isArray(desc) ? (
            desc.map((item, index) => <p key={`item_${index}`}>{item}</p>)
          ) : (
            <p>{desc}</p>
          )}
        </div>
      )}
    </li>
  );
};

export default Collapse;
