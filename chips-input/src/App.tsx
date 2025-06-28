import React, { useState } from 'react'

const App = () => {
  const [inputText, setinputText] = useState<string>('');
  const [chips, setchips] = useState<string[]>([])

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (!inputText) return;
    if (e.key === 'Enter') {
      setchips(prev => [...prev, inputText]);
      setinputText('');
    }
  }

  function handleDeleteChip(index: number) {
    const copychips = [...chips];
    copychips.splice(index, 1);
    setchips(copychips);
  }

  return (

    <div className="container">
      <div className="title">Chips input</div>

      <div className="chip-input-wrapper">
        <input
          type="text"
          placeholder="Type and press Enter"
          value={inputText}
          onChange={(e) => setinputText(e.target.value)}
          onKeyDown={onKeyDown}
        />
      </div>
      <br />
      {chips.map((chip, index) => (
        <div key={index} className="chip">
          {chip} <span onClick={() => handleDeleteChip(index)}>❌</span>
        </div>
      ))}
    </div>
  )
}

export default App