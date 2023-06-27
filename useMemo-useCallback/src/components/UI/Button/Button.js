import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  console.log("BUTTON RUNNING");
  return (
    <button
      type={props.type || "button"}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default React.memo(Button);

// memo() 로 감쌌는데도 console.log가 계속 나온다...?
// 왜냐면 js 함수처럼 쓰일때 리액트에 의해서 App.js 함수가 계속 새로 호출되기때문이다
// 그러니까 호출해놓은것을 계속 쓰는게 아니라 새로 만들어서 새로 쓰는것
// 그럼 Demooutput 에서는 먹혔는데 왜 버튼에서는 작동하지 않을까?
// props로 넘겨준값 차이때문이다. Demooutput 에는 false라는 원시값을
// Button 에는 함수를 넘겨줬다.

/*
  원시값은 다르지만 === 연산자 비교가 가능하다
  'hi' === 'hi'

  하지만 참조값인 배열, 객체는 불가능하다
  그래서 React.memo 가 값을 비교하는 방식도 이와같기 때문에
  종종 오류가 발생한다고한다
*/
