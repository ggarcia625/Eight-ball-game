import React, { useState } from 'react';

const initialMsg = 'Think of a Question';
const initialColor = 'black';


export default function EightBall({ answers }) {
    const [msg, setMsg] = useState(initialMsg);
    const [color, setColor] = useState(initialColor);
    const [colorCount, setColorCount] = useState({green: 0, red: 0, goldenrod: 0})
    
    
    function updateAnswer() {
      let randomIndex = Math.floor(Math.random() * 20);
      setMsg(answers[randomIndex].msg);
      setColor(answers[randomIndex].color);
      
      let {color} = answers[randomIndex];
      setColorCount({...colorCount, [color]: colorCount[color] + 1});
    }

    const resetState = () => {
      setMsg(initialMsg);
      setColor(initialColor);
      setColorCount({green: 0, red: 0, goldenrod: 0})
    }

    return (
      <>
        <div className='container'>
          <div onClick={updateAnswer} className='answer-circle' style={{backgroundColor: color}}>
            <p className='answer-text'>{msg}</p>
          </div>
          <div>
            <span> Red Count: {colorCount.red} </span>
            <span>Green Count: {colorCount.green} </span>
            <span>goldenrod Count: {colorCount.goldenrod} </span>
            <button className='reset-button' onClick={resetState}>Reset</button>
          </div>
        </div>
      </>
      );
    }

    EightBall.defaultProps = {
      answers: [
      { msg: "It is certain.", color: "green" },
      { msg: "It is decidedly so.", color: "green" },
      { msg: "Without a doubt.", color: "green" },
      { msg: "Yes - definitely.", color: "green" },
      { msg: "You may rely on it.", color: "green" },
      { msg: "As I see it, yes.", color: "green" },
      { msg: "Most likely.", color: "green" },
      { msg: "Outlook good.", color: "green" },
      { msg: "Yes.", color: "green" },
      { msg: "Signs point to yes.", color: "goldenrod" },
      { msg: "Reply hazy, try again.", color: "goldenrod" },
      { msg: "Ask again later.", color: "goldenrod" },
      { msg: "Better not tell you now.", color: "goldenrod" },
      { msg: "Cannot predict now.", color: "goldenrod" },
      { msg: "Concentrate and ask again.", color: "goldenrod" },
      { msg: "Don't count on it.", color: "red" },
      { msg: "My reply is no.", color: "red" },
      { msg: "My sources say no.", color: "red" },
      { msg: "Outlook not so good.", color: "red" },
      { msg: "Very doubtful.", color: "red" },
    ]}