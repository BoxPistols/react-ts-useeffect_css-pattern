import React from 'react';
const { useEffect, useState, Fragment } = React;

const colors = {
  Sea: '#a2ccb6',
  Sand: '#fceeb5',
  Peach: '#ee786e',
};
const texts = {
  s: '14px',
  m: '18px',
  l: '24px',
};

const Hello = ({ name }) => {
  const [color, setColor] = useState(colors.Sea);
  const [text, setText] = useState(texts.s);

  useEffect(() => {
    document.body.style.background = color;
  }, [color]);

  useEffect(() => {
    document.querySelector('h2').style.fontSize = text;
  }, [text]);

  return (
    <Fragment>
      <h1>Hello {name}!</h1>

      <select value={color} onChange={(e) => setColor(e.target.value)}>
        {Object.entries(colors).map(([design, value]) => (
          <option key={`color--${design}`} value={value}>
            {design}
          </option>
        ))}
      </select>

      <select value={text} onChange={(e) => setText(e.target.value)}>
        {Object.entries(texts).map(([n, value]) => (
          <option key={`text--${n}`} value={value}>
            {n}
          </option>
        ))}
      </select>

      <h1>{color}</h1>
      <h2>{text}</h2>
    </Fragment>
  );
};

export default Hello;
