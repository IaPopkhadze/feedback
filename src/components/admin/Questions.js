import React, { useState, useEffect } from "react";
import "../Style/style.css"
import Rate from "../Rate";

const Questions = ({ currentIndex, questions }) => {
  if (questions) {
    return (
      <div className="questions_width_rate">
        <span>
          {currentIndex + 1}/{questions.length}.
        </span>
        <p>{questions[currentIndex]?.question}</p>
      </div>
    );
  }
};

export default Questions;
