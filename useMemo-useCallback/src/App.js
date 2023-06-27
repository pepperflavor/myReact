import React, { useState } from "react";

import "./App.css";
import Button from "./components/UI/Button/Button";

function App() {
  const [activeBtn, setActiveBtn] = useState(false);

  // 버튼을 누를때마다 App컴포넌트 전체가 다시 랜더링됨
  console.log("APP RUNNING");

  const toggleBtnHandler = () => {
    setActiveBtn((preveactiveBtn) => !preveactiveBtn);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {activeBtn && <p>New Greeting!</p>}
      <Button onClick={toggleBtnHandler}>Show What she Saying</Button>
    </div>
  );
}

export default App;
