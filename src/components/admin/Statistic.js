import React, { useEffect } from "react";
import "../Style/style.css";
import { SlArrowDown } from "react-icons/sl";
import { useState } from "react";
const Statistic = () => {
  const [isListOpen, setIsListOpen] = useState(false);
  const [statistic, setStatistic] = useState(null);

  function toggleDropDown() {
    setIsListOpen(!isListOpen);
    console.log(isListOpen);
  }

  useEffect(() => {
    const getFeedback = JSON.parse(localStorage.getItem("feedback"));

    setStatistic(getFeedback);
  }, []);

  // mevizav xo ? dki ki beib <3
  return (
    <div className="statistic">
      <div className="statistic_content">
        <div className="statistic_child_container">
          <p className="text">Feedback-ების რაოდენობა: </p>
          <p className="leftSide">
            {statistic && statistic.map((x) => x.votes.length)[0]}
          </p>
        </div>
        <div className="statistic_child_container">
          <p className="text"> შეფასებული კითხვების სტატისტიკა </p>
          <p className="leftSide" onClick={toggleDropDown}>
            <SlArrowDown />
          </p>
        </div>
        <div className={isListOpen ? "questions open" : "questions"}>
          {statistic &&
            statistic.map((element, i) => {
              return (
                <div key={i} className="each_questions">
                  <p className="question">
                    {i + 1}. {element.question}
                  </p>
                  <p className="score"> 
                    <span style={{ fontWeight: "bold" }}>
                      {(
                        element.votes.reduce((a, b) => a + b, 0) /
                        element.votes.length
                      ).toFixed(1)}
                    </span>{" "}
                    (<span style={{ fontSize: "1rem" }}>საშუალო ქულა</span>)
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Statistic;
