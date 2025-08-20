import React, { useState } from "react";
import { addVocabulary } from "../api";

const VocabularyForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    wordOrPhrase: "",
    translation: "",
    example: "",
    referenceLink: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addVocabulary(formData);
    onAdd();
    setFormData({ wordOrPhrase: "", translation: "", example: "", referenceLink: "" });
  };

  return (
    <form className="form-container" onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input type="text" name="wordOrPhrase" placeholder="Word/Phrase"
        value={formData.wordOrPhrase} onChange={handleChange} required />
      <input type="text" name="translation" placeholder="Translation"
        value={formData.translation} onChange={handleChange} required />
      <input type="text" name="example" placeholder="Example"
        value={formData.example} onChange={handleChange} />
      <input type="text" name="referenceLink" placeholder="Reference Link"
        value={formData.referenceLink} onChange={handleChange} />
      <button type="submit">Add</button>
    </form>
  );
};

export default VocabularyForm;
