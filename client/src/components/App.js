import React, { useState, useEffect } from "react";
import emojiList from "./assets/emoji.min.json";
import Emoji from "./Emoji";
import { ks } from "./keyboard-shortcuts";
import "./App.scss";

const App = () => {
  const [emoji, setEmoji] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  const getEmoji = async (list) => {
    setEmoji(await list);
  };

  const updateEmojiList = (list) => {
    setEmoji(list);
  };

  useEffect(() => {
    ks();
    getEmoji(emojiList);
  }, []);

  const onChangeHandler = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="container">
      <div>
        <input
          className="input-field"
          type="text"
          onChange={onChangeHandler}
          value={searchInput}
        />
      </div>
      {(emoji && (
        <Emoji
          emoji={emoji}
          filterBy={searchInput}
          updateEmojiList={updateEmojiList}
        />
      )) ||
        console.log("Loading")}
    </div>
  );
};

export default App;

//  {
//     "codes": "1F600",
//     "char": "😀",
//     "label": "grinning face",
//     "category": "Smileys & Emotion (face-smiling)",
//     "group": "Smileys & Emotion",
//     "subgroup": "face-smiling"
//   },
