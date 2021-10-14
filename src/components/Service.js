import React, {useState} from 'react'
import Button from './Button';

export default function Service(props) {

    

    const runmyFun = () => {
        let uptext = mytext.toUpperCase();
        updateText(uptext);
        props.showalert('Text converted to uppercase','success');
        
        
    }

    const convertoCap = () => {
        let lowertext = mytext.toLowerCase();
        updateText(lowertext);
        props.showalert('Text converted to lowercase','success');
    }

    const removeSpace = () => {
        let remsptxt = mytext.replace(/\s/g,'')
        updateText(remsptxt);
    }
    const handleClearText = (event) => {
      updateText('');
      props.showalert('Textarea cleared','success');
   
    }
    const handleDarkMode = () => {

        
    
    }

    const handleOnChange = (event) => {
        updateText(event.target.value);
    }

    const [mytext, updateText] = useState('Enter the text');
    let cnt =  mytext.split(" ").length;
    let vbt= mytext.length - cnt;

    return (
    <>
    <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea" className="my-5 form-label" style={props.sstyle}>{props.title}</label>
        <textarea style={props.sstyle} onChange={handleOnChange} className="form-control" value={mytext} id="exampleFormControlTextarea" rows="8"></textarea>
        <button disabled={mytext===''?true:false} type="button" onClick={runmyFun}  className={`mx-2 my-3 btn btn-${props.btnclr}`}>Uppercase</button>
        <button disabled={mytext===''?true:false} type="button" onClick={convertoCap} className={`mx-2 my-3 btn btn-${props.btnclr}`}>Lowercase</button>
        <button type="button" disabled={mytext===''?true:false} onClick={removeSpace} className={`mx-2 my-3 btn btn-${props.btnclr}`}>Remove Space</button>
        <button type="button" disabled={mytext===''?true:false} onClick={handleClearText} className={`mx-2 my-3 btn btn-${props.btnclr}`}>Cleat text</button>
       

      </div>
    <div className="container" style={props.sstyle}>
        <h1>Text Summary</h1>
        <p>Number of characters: {mytext.replace(/\s+/g, '').length} </p>
        
        <p>Number of words: {cnt} </p>
        <h2>Preview</h2>
        <p>{mytext} </p>
    </div>
     
      </>
    )
}
