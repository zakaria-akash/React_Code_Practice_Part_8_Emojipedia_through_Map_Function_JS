import React from "react";
import EntryCard from "./EntryCard";
import Emojipedia from "../Emojipedia.js";

function readAllEmo(Emojipedia) {
  return (
    <EntryCard
      key={Emojipedia.id}
      emoji={Emojipedia.emoji}
      name={Emojipedia.name}
      meaning={Emojipedia.meaning}
    />
  );
}

function EmoCollection() {
  return <dl className="dictionary">{Emojipedia.map(readAllEmo)}</dl>;
}

export default EmoCollection;
