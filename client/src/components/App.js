import React, { useState, useEffect } from "react";
// import emojiList from "./assets/emoji.min.json";
import SearchBox from "./SearchBox";
import EmojiList from "./EmojiList";
import axios from "axios";
import { _ks } from "./keyboard-shortcuts";
import "./App.scss";

const App = () => {
  const [emojiList, setEmojiList] = useState(null);
  // const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    _ks();
    (async () => {
      setEmojiList((await axios.get("http://localhost:3001/emoji")).data);
    })();
  }, []);

  const onChangeHandler = async (e) => {
    // setSearchInput(e.target.value);
    const list = (await axios.get("http://localhost:3001/emoji")).data;
    const filteredList = list.filter(
      ({ label }) =>
        label.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
    );
    setEmojiList(filteredList);
  };

  return (
    <div className="container">
      <SearchBox onChangeHandler={onChangeHandler} />
      {(emojiList && <EmojiList emojiList={emojiList} />) || <div>Loading</div>}
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
