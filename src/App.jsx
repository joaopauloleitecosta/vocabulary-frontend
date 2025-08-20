import React, { useEffect, useState } from "react";
import { getVocabulary } from "./api";
import VocabularyForm from "./components/VocabularyForm";
import VocabularyList from "./components/VocabularyList";

function App() {
  const [vocabulary, setVocabulary] = useState([]);

  const fetchData = async () => {
    const response = await getVocabulary();
    setVocabulary(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>📘 English Vocabulary</h1>
      <VocabularyForm onAdd={fetchData} />
      <VocabularyList vocabulary={vocabulary} refresh={fetchData} />
    </div>
  );
}

export default App;
