
import './App.css';
import 'bootstrap'
import {Routes,Route } from 'react-router-dom';
import { createContext, useState ,useEffect} from 'react';
import Apidata from './components/data';
import axios from 'axios';
import Deatails from './components/details';

const userdata=createContext()

function App() {


  const [users, setusers] = useState([]);

  useEffect(() => {

    apidata();
}, [])


const apidata = async () => {
    try {
        const res = await axios.get('http://localhost:5000/data');

        setusers(res.data)
    } catch (error) {
       console.log(error)
    }



}





  return (
    <div className="App">
  <userdata.Provider value={{users}}>
  <Routes>
<Route path='/' element={<Apidata></Apidata>}></Route>
<Route path='/details/:name' element={<Deatails></Deatails>}></Route>


  </Routes>



    
    
</userdata.Provider>   
    
    
    </div>
     





  );
}

export default App;
export {userdata};