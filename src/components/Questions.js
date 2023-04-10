import React, { useState, useEffect } from "react";
import "./Style/style.css";
import Rate from "./Rate";

const Questions = ({ currentIndex, questions }) => {
  if (questions) {
    return <div className="questions">{questions[currentIndex]?.question}</div>;
  }
};

export default Questions;
