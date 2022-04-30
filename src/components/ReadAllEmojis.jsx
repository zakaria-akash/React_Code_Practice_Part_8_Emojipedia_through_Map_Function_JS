import React from "react";
import EntryCard from "./EntryCard";
import EmojiData from "../EmojiData.js";

function InitEntryCard(EmojiData) {
  return (
    <EntryCard
      key={EmojiData.id}
      emoji={EmojiData.emoji}
      name={EmojiData.name}
      meaning={EmojiData.meaning}
    />
  );
}

function ReadAllEmojis() {
  return <dl className="dictionary">{EmojiData.map(InitEntryCard)}</dl>;
}

export default ReadAllEmojis;
