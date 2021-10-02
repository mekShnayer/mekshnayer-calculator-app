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
    isStart ? setDisplay(n) : setDisplay(display + n);
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
      <div className='full-expression-display'>{`expression: ${resultArr.join('')}`}</div>
      <div className='buttons'>
        <div className='math-buttons-box'>
          <div onClick={clear} className='math-buttons'>clear</div>
          <div onClick={plus} className='math-buttons'>+</div>
          <div onClick={minus} className='math-buttons'>-</div>
          <div onClick={devide} className='math-buttons'>/</div>
          <div onClick={multiply} className='math-buttons'>*</div>
          <div onClick={equal} className='math-buttons'>=</div>
        </div>

        <div className='numbers-buttons'>
          {numbers.map((number, index) => {
            return <div className='number' key={index} onClick={() => clickNumber(number)}>{number}</div>
          })}
        </div>
      </div>


    </div>
  )
}

export default Calculator;