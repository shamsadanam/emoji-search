import React from "react";

const Emoji = ({ label, char }) => {
  const copyToClipboard = (e) => {
    console.log(e.target.innerHTML);
    navigator.clipboard.writeText(e.target.innerHTML);
  };
  return (
    <div className="emoji-container-inner">
      <span
        className="emoji"
        role="img"
        aria-label={label ? label : ""}
        aria-hidden={label ? "false" : "true"}
        onClick={copyToClipboard}
      >
        {char}
      </span>
      <span className="emoji-tooltip">{label}</span>
    </div>
  );
};

export default Emoji;
