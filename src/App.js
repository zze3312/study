import logo from "./logo.svg";
import "./App.css";

function App() {
  return <h1>HelloWorld</h1>;
}

export default App;

let test1 = "1";
let test2 = "2";
let value = "^";

function fncTest(val) {
  let number = "3";
  return val + "테스트입니다" + number;
}

console.log(
  'test1의 값은 : "' +
    fncTest(test1) +
    '" / test2의 값은 : ' +
    fncTest("222222"),
);
