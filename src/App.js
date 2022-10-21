import './App.css';
import reactlogo from './imagenes/react-logo.png';
import Button from './components/Button';
import Pantalla from './components/Show';
import ButtonClear from './components/ButtonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

	const[input, setInput] = useState('');

	const addInput = val => {
    setInput(input + val);
	};
  const calculateResult = () => {
    if(input) {
    setInput(evaluate(input));
    } else {
      alert("Please, Choose the numbers, operator and look the result!")
    }
  };
  return (
    <div className="App">
      <div className="react-logo-contain">
        <img src={reactlogo} className="react-logo" alt="react-logo" />
      </div>
      <div className="contain-calculator">
				<Pantalla input={input}/>
        <div className="row">
          <Button handleclick={addInput}>1</Button>
          <Button handleclick={addInput}>2</Button>
          <Button handleclick={addInput}>3</Button>
					<Button handleclick={addInput}>+</Button>
        </div>
        <div className="row">
					<Button handleclick={addInput}>4</Button>
          <Button handleclick={addInput}>5</Button>
          <Button handleclick={addInput}>6</Button>
					<Button handleclick={addInput}>-</Button>
				</div>
        <div className="row">
					<Button handleclick={addInput}>7</Button>
          <Button handleclick={addInput}>8</Button>
          <Button handleclick={addInput}>9</Button>
					<Button handleclick={addInput}>*</Button>
				</div>
        <div className="row">					
          <Button handleclick={calculateResult}>=</Button>
          <Button handleclick={addInput}>0</Button>
          <Button handleclick={addInput}>.</Button>
					<Button handleclick={addInput}>/</Button>
					</div>
        <div className="row">
					<ButtonClear handleClear={() => setInput('')}>
            Clear
            </ButtonClear>
				</div>
      </div>
    </div>
  );
}

export default App;
