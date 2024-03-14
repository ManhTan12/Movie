import './App.css'
import { fetchDataFromApi } from './utils/api'
import { useEffect } from 'react';
function App() {
  console.log(123);
  useEffect(() =>{
    apiTest();
  },[])

  const apiTest = () =>{
    fetchDataFromApi("/movie/popular").then((res) =>{
      console.log(res);
    });
  };

  return (
    <div className='hello'>
      Hello
    </div>
  )
}

export default App
