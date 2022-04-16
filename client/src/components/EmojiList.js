import React from "react";
import Emoji from "./Emoji";

const EmojiList = ({ emojiList }) => {
  const renderEmoji = (list) => {
    return list.map(({ label, char, codes }) => {
      return <Emoji key={codes} label={label} char={char} />;
    });
  };
  return (
    <div className="emoji-container">{emojiList && renderEmoji(emojiList)}</div>
  );
};

export default EmojiList;
