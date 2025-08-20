import React from "react";
import { deleteVocabulary, updateVocabulary } from "../api";

const VocabularyList = ({ vocabulary, refresh }) => {

  const handleDelete = async (id) => {
    await deleteVocabulary(id);
    refresh();
  };

  return (
    <ul>
      {vocabulary.map((item) => (
        <li key={item.id} style={{marginBottom: "20px"}}>
          <b>{item.wordOrPhrase}</b> - {item.translation} <br />
          <i>{item.example}</i> <br />
          {item.referenceLink && (
            <a href={item.referenceLink} target="_blank" rel="noopener noreferrer">
              Reference
            </a>
          )}
          <br />
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default VocabularyList;
