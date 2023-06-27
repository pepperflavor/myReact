import React from "react";

// props로 받은 값에 따라 조건부로 랜더링 할 컴포넌트
const Demooutput = (props) => {
  console.log("Demooutput 실행");
  return <p>{props.show ? "This is new!" : ""}</p>;
};

export default React.memo(Demooutput);

// f12 에서 확인한대로 실제 변경은 Demooutput에서만 이뤄지지만
// 이에 대한 상태관리를 하는 App 컴포넌트도 다시 실행되고 있음

// state, props, context를 갖고있고 이 값이 변경되는 컴포넌트는
// 재실행, 재평가 된다
// 즉, Demooutput의 상태를 결정하는 값이 props로 App에서 받고있고
// 그 state값이 App.js에도 있으니 App컴포넌트도 계속 같이 재실행 재평가되는것
