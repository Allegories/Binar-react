
import {useState} from 'react';



const App = ()=> {
  const [count, setCount] = useState(0)
  
  return (
    <div className="App pt-2">
        <p className="text-center" >
          {count}
        </p>
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary px-4 me-4" onClick={()=> setCount(count-1)} >-</button>
          <button className="btn btn-primary px-4" onClick={()=> setCount(count+1)}>+</button>
        </div>

    
    </div>
  );
}

export default App;
