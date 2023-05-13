import React, { useState } from 'react'

export default function TextArea(props) {
   
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    
    const handleuppercase=()=>{
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showalert("Converted Into UpperCase", "success");
    }

    const handlelowercase=()=>{
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showalert("Converted Into LowerCase", "success");
    }

    const handleclearcase=()=>{
        let newtext = "";
        setText(newtext)
        props.showalert("Clear Text", "success");
    } 

    const handlespeech=()=>{
        const Speech= new SpeechSynthesisUtterance();
        const message= document.getElementById("myBox").value;
        Speech.lang='eng';
        Speech.text= message;
        window.speechSynthesis.speak(Speech);
        props.showalert("Converted Into Speech", "success");
}
    const [text, setText] = useState("");
    
   

  return (
    <>
    <div className="container" style={{color:props.mode==='light'?'rgb(63, 71, 79)':'white'}}>
        <h1 style={{marginBottom:'30px'}}>{props.heading} </h1>
             <div className="mb-3">
               <textarea className="form-control" id="myBox" style={{backgroundColor:props.mode==='light'?'white':'rgb(63, 71, 79)', color:props.mode==='light'?'rgb(63, 71, 79)':'white'}} value={text} onChange={handleOnChange} rows="8"></textarea>
             </div>
              <button className="btn btn-primary" disabled={text.length===0} onClick={handleuppercase}>Convert to UpperCase</button>
              <button className="btn btn-primary" disabled={text.length===0} onClick={handlelowercase}>Convert to LowerCase</button>
              <button className="btn btn-primary" disabled={text.length===0} onClick={handleclearcase}>Clear Text</button>
              <button className="btn btn-primary" disabled={text.length===0} onClick={handlespeech}>Speak</button>
    </div>
    <div className="container my-2" style={{color:props.mode==='light'?'rgb(63, 71, 79)':'white'}}>
<h2>Your Text Summary</h2>
<p><b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</b> words and <b>{text.length}</b> characters</p>
<p><b>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} </b>Minutes to Read</p>
<h2>Preview</h2>
<p>{text.length>0?text:"Enter Your Text In The Above Box To Preview It "}</p>
    </div>
    </>
  )
}
