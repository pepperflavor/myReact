import React, { useCallback, useState } from "react";

import "./App.css";
import Button from "./components/UI/Button/Button";

import Demooutput from "./components/Demo/DemoOutput";

function App() {
  const [activeBtn, setActiveBtn] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  // 버튼을 누를때마다 App컴포넌트 전체가 다시 랜더링됨
  console.log("APP RUNNING");

  // useCallback 덕분에 toggleBtnHandler가 메모리 안에서 항상 같은 객체임을 보증받음
  // js의 함수는 클로저 이기때문에 의존성에 값을 추가 안해주면 false인 채로 굳어버린다
  const toggleBtnHandler = useCallback(() => {
    if (allowToggle) {
      setActiveBtn((preveactiveBtn) => !preveactiveBtn);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Demooutput show={activeBtn}></Demooutput>
      <Button onClick={toggleBtnHandler}>Show What she Saying</Button>
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
    </div>
  );
}

export default App;
