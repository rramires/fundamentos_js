import './App.css';
import { useState } from 'react';
//
import Header from './header';




function App() {

  // state
  const [counter, setCounter] = useState(0);

  
  function onButtonClick(){
    // use set for reflecting in components
    setCounter(counter + 1);
  }

  return (
    <div className="App">
        <Header title="Hello React - Render in Component!" counter={counter}/>
        <input type="button" value="Click" onClick={onButtonClick} />
    </div>
  );
}

export default App;
