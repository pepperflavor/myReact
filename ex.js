const obj1 = { say: "hi" };
const obj2 = { say: "hi" };

if (obj1 === obj2) {
  console.log("같다");
} else {
  console.log("다르다");
}
/*
import React, { useState } from "react";

import "./App.css";
import Button from "./components/UI/Button/Button";
import Demooutput from "./components/Demo/DemoOutput";

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
      <Demooutput show={activeBtn}></Demooutput>
      <Button onClick={toggleBtnHandler}>Show What she Saying</Button>
    </div>
  );
}

export default App;

*/
