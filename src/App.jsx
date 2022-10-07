
import {useState} from 'react';



const App = ()=> {
  const [count, setCount] = useState(0)
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {count}
        </p>
        <div>
          <button onClick={()=> setCount(count-1)} >-</button>
          <button onClick={()=> setCount(count+1)}>+</button>
        </div>

      </header>
    </div>
  );
}

export default App;
