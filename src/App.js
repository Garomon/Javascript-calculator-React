import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import React from 'react';


function App() {
  
  const [expression, setExpression] = React.useState("");
  const [answer, setAnswer] = React.useState(0)


  const display = (sym) => {
    setExpression((prev) => prev + sym)
  };

  const calculate = () => {
    setAnswer(eval(expression));
    setExpression((prev) => prev + "=");
  }; 

const allClear = () => {
  setExpression("");
  setAnswer(0);
};
const clear = () => {
  setExpression((prev) => prev.split("").slice(0, prev.length-1).join(""));
  setAnswer(0);
};

  return (
    <div className='text-white pt-5 text-center h2'>
      <div className='container'>
        <p>Javascript Calculator</p>
        <div className="grid">
          <div className="dis" id="display">
            <input type="text" value={expression} placeholder="0" disabled />
            <div className="total">{answer}</div>
          </div>
          <div onClick={allClear} className="padButton AC" id="clear">AC</div>
          <div onClick={clear} className="padButton C">C</div>
          <div onClick={() => display("/")} className="padButton division" id="divide">/</div>
          <div onClick={() => display("*")} className="padButton multiply" id="multiply">X</div>
          <div onClick={() => display("7")} className="padButton seven" id="seven">7</div>
          <div onClick={() => display("8")} className="padButton eight" id="eight">8</div>
          <div onClick={() => display("9")} className="padButton nine" id="nine">9</div>
          <div onClick={() => display("-")} className="padButton minus" id="subtract">-</div>
          <div onClick={() => display("4")} className="padButton four" id="four">4</div>
          <div onClick={() => display("5")} className="padButton five" id="five">5</div>
          <div onClick={() => display("6")} className="padButton six" id="six">6</div>
          <div onClick={() => display("+")} className="padButton plus" id="add">+</div>
          <div onClick={() => display("1")} className="padButton one" id="one">1</div>
          <div onClick={() => display("2")} className="padButton two" id="two">2</div>
          <div onClick={() => display("3")} className="padButton three" id="three">3</div>
          <div onClick={calculate} className="padButton equal" id="equals">=</div>
          <div onClick={() => display("0")} className="padButton zero " id="zero">0</div>
          <div onClick={() => display(".")} className="padButton dot" id="decimal">.</div>
        </div>
      </div>
    </div>
  ); 
}

export default App;
