import React from "react";

const Emoji = ({ emoji, filterBy, updateEmojiList }) => {
  const copyToClipboard = (e) => {
    console.log(e.target.innerHTML);
    navigator.clipboard.writeText(e.target.innerHTML);
    e.target.nextSibling.nextChild.style.animationPlayState = "play";
    console.log(e.target.nextSibling);
  };

  const renderEmoji = (list) => {
    const filteredList = list.filter(
      ({ label }) => label.toLowerCase().indexOf(filterBy.toLowerCase()) !== -1
    );
    // updateEmojiList(filteredList);
    return filteredList.slice(0, 102).map(({ codes, label, char }) => {
      return (
        <div className="emoji-container-inner" key={codes}>
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
    });
  };
  return <div className="emoji-container">{emoji && renderEmoji(emoji)} </div>;
};

export default Emoji;
