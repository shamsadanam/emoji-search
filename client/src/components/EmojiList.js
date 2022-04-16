import React from "react";
import Emoji from "./Emoji";

const EmojiList = ({ emojiList }) => {
  var unique = [];
  var distinct = [];
  for (let i = 0; i < emojiList.length; i++) {
    if (!unique[emojiList[i].group]) {
      distinct.push(emojiList[i].group);
      unique[emojiList[i].group] = 1;
    }
  }

  console.log(distinct);

  const renderEmoji = (list) => {
    return list.map(({ label, char, codes }) => {
      return <Emoji key={codes} label={label} char={char} />;
    });
  };
  return (
    <div className="emoji-container">
      {/* <EmojiGroup /> */}
      <div className="emoji-group-container">
        <div className="emoji-group">
          <Emoji char="😀" label="Sort By Smiles and Faces" />
          <Emoji char="😀" />
          <Emoji char="😀" />
          <Emoji char="😀" />
          <Emoji char="😀" />
          <Emoji char="😀" />
          <Emoji char="😀" />
          <Emoji char="😀" />
          <Emoji char="😀" />
          <Emoji char="😀" />
        </div>
      </div>
      {emojiList && renderEmoji(emojiList)}
    </div>
  );
};

export default EmojiList;
