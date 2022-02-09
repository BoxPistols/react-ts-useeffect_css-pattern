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

const flexJcStyles = {
  null: 'null',
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
};

const alignItems = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
};

export default ({ name }) => {
  const [color, setColor] = useState(colors.Sea);
  const [text, setText] = useState(texts.s);
  const [open, setOpen] = useState(false);
  const [flexJc, setFlexJc] = useState(flexJcStyles.start);

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    document.querySelector<HTMLInputElement>('.boxes').style.justifyContent =
      flexJc;
  }, [flexJc]);

  useEffect(() => {
    document.body.style.background = color;
  }, [color]);

  useEffect(() => {
    document.querySelector('h2').style.fontSize = text;
  }, [text]);

  return (
    <Fragment>
      <button onClick={handleClick}>boxNumChange</button>

      {/* FlexBox */}
      <select value={flexJc} onChange={(e) => setFlexJc(e.target.value)}>
        {Object.entries(flexJcStyles).map(([name, value]) => (
          <option key={`flexJc--${name}`} value={value}>
            {name}
          </option>
        ))}
      </select>

      {open ? (
        <div className="boxes" style={{ display: 'flex' }}>
          <div className="flexBox">flexBox 1</div>
          <div className="flexBox">flexBox 2</div>
          <div className="flexBox">flexBox 3</div>
        </div>
      ) : (
        <div className="boxes alot" style={{ display: 'flex' }}>
          <div className="flexBox">flexBox 1</div>
          <div className="flexBox">flexBox 2</div>
          <div className="flexBox">flexBox 3</div>
          <div className="flexBox">flexBox 4</div>
          <div className="flexBox">flexBox 5</div>
          <div className="flexBox">flexBox 6</div>
          <div className="flexBox">flexBox 7</div>
        </div>
      )}

      <h1>Hello {name}!</h1>

      <select value={color} onChange={(e) => setColor(e.target.value)}>
        {Object.entries(colors).map(([name, value]) => (
          <option key={`color--${name}`} value={value}>
            {name}
          </option>
        ))}
      </select>

      <select value={text} onChange={(e) => setText(e.target.value)}>
        {Object.entries(texts).map(([name, value]) => (
          <option key={`text--${name}`} value={value}>
            {name}
          </option>
        ))}
      </select>

      <h1>{color}</h1>
      <h2>{text}</h2>
    </Fragment>
  );
};
