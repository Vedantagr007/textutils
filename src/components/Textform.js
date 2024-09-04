import React, { useState } from "react"

export default function Textform(props) {
  const [text, setText] = useState('')
  
  const handleUpClick = () => {
    let upText = text.toUpperCase();
    setText(upText);
  }

  const copyText = () => {
    const copy = document.getElementById("myBox");
    copy.select();   
    navigator.clipboard.writeText(copy.value);
    document.getSelection().removeAllRanges();
    alert("Copied to clipboard!", "success");
  }

  const handleLowerClick = () => {
    let lowText = text.toLowerCase();
    setText(lowText);
  }

  const clearText = () => {
    let clear = "";
    setText(clear);
  }

  const capitalized = () => {
    var arr = text.split(" ")
    var c = arr.length
    var temp = ""
    while(c!==0){
        temp = arr[c-1].charAt(0).toUpperCase()+arr[c-1].substring(1).toLowerCase()+" "+temp
        c--;
    }

    setText(temp)
  }


  const handleOnChange = () => {
    // eslint-disable-next-line no-restricted-globals
    setText(event.target.value)
  }
  return (
    <>
    <div className="container my-3">
        <h1>{props.heading}</h1>
        <div className="mb-3 mx-2 my-4">
            <b><label htmlFor="myBox" className="form-label">Textarea</label></b>
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'light' ? 'white' : '#022e5c', color: props.mode === 'light' ? 'black' : 'white'}} id="myBox" rows="5"></textarea>
            <button disabled={text.length === 0} type="button" onClick={handleUpClick} className='btn btn-primary my-2 mx-1'>To Uppercase</button>
            <button disabled={text.length === 0} type="button" onClick={handleLowerClick} className='btn btn-primary my-2 mx-1'>To Lowercase</button>
            <button disabled={text.length === 0} type="button" onClick={capitalized} className='btn btn-primary my-2 mx-1'>Capitalize</button>
            <button disabled={text.length === 0} type="button" onClick={copyText} className='btn btn-primary my-2 mx-1'>Copy Text</button>
            <button disabled={text.length === 0} type="button" id="copyText" onClick={clearText} className='btn btn-primary my-2 mx-1'>Clear All</button>
        </div>
        <div className="container">
          <h2>Your text Summary</h2>
          <p>{text.split(/\s+/).filter((e)=>{ return e.length!==0}).length} words and {text.length} characters</p>
          <small>{text.split(" ").filter((e)=>{ return e.length!==0}).length*0.008} minutes read.</small>
          <h3>Preview</h3>
          <div className="box">
            {text.length>0 ? text:"Enter your text in above textbox to preview it here."}
          </div>
        </div>
      </div>
    </>
  )
}
