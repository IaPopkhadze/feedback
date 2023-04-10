import Rate from "./components/Rate";
import Questions from "./components/Questions";
import ThankYou from "./components/ThankYou";
import Statistic from "./components/Statistic";
import "./components/Style/style.css";
import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

import "../node_modules/bpg-nino-mtavruli-book/css/bpg-nino-mtavruli-book.min.css";
import AddQuestions from "./components/AddQuestions";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedRoute />}>
          <Route
            path="/rate"
            element={
              <div className="feedback">
                <Rate
                  setCurrentIndex={setCurrentIndex}
                  currentIndex={currentIndex}
                />
              </div>
            }
          />
        </Route>
        <Route path="/Statistic" element={<Statistic />} />
        <Route path="/questions" element={<AddQuestions />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
