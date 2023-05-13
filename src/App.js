
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
 import About from './components/About';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
 import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showalert=(massage,type)=>{
    setAlert({
      msg:massage,
      type:type
    })

      setTimeout(() => {
        setAlert(null);
      }, 1500);

     
     
  }

  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(63, 71, 79)';
      showalert("Dark Mode Has Been Enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light Mode Has Been Enabled", "success");
    }
  }
  return (
    <>

<BrowserRouter>


   <Navbar mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className="container my-3"> 
   
   <Routes>
        
        <Route path="/" element={<TextArea showalert={showalert} heading="Enter Your Text Here!" mode={mode} />} />
        <Route path="/about" element={<About mode={mode}/>} />
       
      </Routes>
      
   
   </div>
 
   </BrowserRouter>

  
    </>
  );
}

export default App;
