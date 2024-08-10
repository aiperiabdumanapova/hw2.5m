import { useState, useEffect } from "react";

function App() {
  const [names, setNames] = useState([]);
  const [inputValue, setInputValue] = useState('');

  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  
  const handleAddName = () => {
    if (inputValue.trim()) {
      const updatedNames = [...names, inputValue];
      setNames(updatedNames);
      setInputValue('');

     
      localStorage.setItem('names', JSON.stringify(updatedNames));
    }
  };

  
  useEffect(() => {
    const storedNames = localStorage.getItem('names');
    if (storedNames) {
      setNames(JSON.parse(storedNames));
    }
  }, []);

  return (
    <div className="App">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleAddName}>Add Name</button>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;


