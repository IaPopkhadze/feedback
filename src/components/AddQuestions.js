import React, { useEffect, useState } from "react";
import "./Style/style.css";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { AiTwotoneEdit } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
const AddQuestions = () => {
  const [text, setText] = useState("");
  const [texts, setTexts] = useState([]);

  const [editedTextId, setEditedTextId] = useState(null);

  useEffect(() => {
    const _question = localStorage.getItem("questions");
    if (_question) {
      setTexts(JSON.parse(_question));
    }
  },[]);

  const handleAddQuestion = (e) => {
    if (text) {
      setTexts([...texts, { id: texts.length + 1, question: text }]);
      setText("");
      localStorage.setItem(
        "questions",
        JSON.stringify([...texts, { id: texts.length + 1, question: text }])
      );
    }
  };
  const handleDeleteQuestion = (id) => {
    const deleteItem = texts.filter((element) => element.id !== id);
    setTexts(deleteItem);
    localStorage.setItem("questions", JSON.stringify(deleteItem));
  };

  const handleEditQuestion = (e, i) => {
    const _texts = [...texts];
    _texts[i].question = e;
    setTexts(_texts);
    localStorage.setItem("questions", JSON.stringify(_texts));
  };

  return (
    <div className="addQuestions">
      <div className="addQuestions_container">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAddQuestion(text)}
        />
        <button className="submit" onClick={(e) => handleAddQuestion(e)}>
          დამატება
        </button>
      </div>

      <div className="questions_container">
        {texts.map((element, index) => {
          return (
            <div key={index} className="each_question_container">
              <div
                className="each_question"
                style={{ display: "flex", flexDirection: "row" }}
              >
                <span style={{ marginRight: "1rem" }}>{index + 1}.</span>{" "}
                {editedTextId === element.id ? (
                  <textarea
                    type="text"
                    value={element.question}
                    onChange={(e) => handleEditQuestion(e.target.value, index)}
                    className="editing"
                  />
                ) : (
                  <p>{element.question}</p>
                )}
              </div>
              <div
                className="mybtn"
                onClick={() =>
                  setEditedTextId(editedTextId ? null : element.id)
                }
              >
                {editedTextId === element.id ? (
                  <AiOutlineCheck />
                ) : (
                  <AiTwotoneEdit />
                )}
              </div>
              <div
                className="mybtn"
                onClick={() => handleDeleteQuestion(element.id)}
              >
                <RiDeleteBin5Fill />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AddQuestions;
