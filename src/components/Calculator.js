import React from "react";
import { useState } from "react";
import './Calculator.css';

function Calculator() {
  let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const [display, setDisplay] = useState('');
  const [resultArr, setResultArr] = useState([])
  const [isStart, setIsStart] = useState(true)

  const clickNumber = (n) => {
    resultArr.push(`${n}`)
    console.log(resultArr)
    isStart? setDisplay(n) : setDisplay(display+n);
    setIsStart(false);
  }

  const plus = () => {
    resultArr.push('+')
    setDisplay('')
  }

  const clear = () => {
    setResultArr([])
    console.log(resultArr)
    return setDisplay('')

  }
  const minus = () => {
    resultArr.push(display, '-')
    setDisplay('')
  }
  const multiply = () => {
    resultArr.push(display, '*')
    setDisplay('')
  }
  const devide = () => {
    resultArr.push(display, '/')
    setDisplay('')
  }
  const equal = () => {
    console.log(eval(resultArr.join('')))
    setDisplay(`${eval(resultArr.join(''))}`)
    setResultArr([])
    setIsStart(true)
  }
  return (
    <div className='calculator'>
      <div className='display'>{display}</div>
      <div className='math-buttons'>
        <button onClick={clear}>clear</button>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
        <button onClick={devide}>/</button>
        <button onClick={multiply}>*</button>
        <button onClick={equal}>=</button>
      </div>

      <div className='numbers-buttons'>
        {numbers.map((number, index) => {
          return <div className='number' key={index} onClick={() => clickNumber(number)}>{number}</div>
        })}
      </div>

    </div>
  )
}

export default Calculator;