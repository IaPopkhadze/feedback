import "./Style/style.css";
import { BsEmojiAngryFill } from "react-icons/bs";
import { ImSad2 } from "react-icons/im";
import { BsFillEmojiNeutralFill } from "react-icons/bs";
import { BsEmojiSmileFill } from "react-icons/bs";
import { ImHappy2 } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Questions from "./Questions";
const Rate = ({ setCurrentIndex, currentIndex }) => {
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const _question = localStorage.getItem("questions");
    if (_question) {
      setQuestions(JSON.parse(_question));
    }
  }, []);

  const handleCurrentIndex = (id) => {
    if (currentIndex < questions.length) {
      setCurrentIndex(currentIndex + 1);
    }
    if (currentIndex === questions.length - 1) {
      navigate("/thankyou");
      setTimeout(() => {
        navigate("/");
        setCurrentIndex(0);
      }, 2000);
    }
  };

  const rateEmojies = [
    {
      id: 1,
      vote: 1,
      emoji: <BsEmojiAngryFill />,
      color: "#f50223",
    },
    {
      id: 2,
      vote: 2,
      emoji: <ImSad2 />,
      color: "#cf7d3e",
    },
    {
      id: 3,
      vote: 3,
      emoji: <BsFillEmojiNeutralFill />,
      color: "#ccc352",
    },
    {
      id: 4,
      vote: 4,
      emoji: <BsEmojiSmileFill />,
      color: "#52cc66",
    },
    {
      id: 5,
      vote: 5,
      emoji: <ImHappy2 />,
      color: "#066616",
    },
  ];

  return (
    <>
      <Questions currentIndex={currentIndex} questions={questions} />
      <div className="rate">
        {rateEmojies.map((element, id) => {
          return (
            <div key={id} className="icon_container">
              <div
                onClick={() => handleCurrentIndex(element.vote)}
                className="icon"
                style={{ cursor: "pointer", color: "#333" }}
              >
                {element.emoji}
              </div>
              <div className="score">{element.vote}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Rate;
