import React, {useState} from 'react'
import Button from './Button'


export default function About(props) {

    

    

    return (
      <>
      <h1 style={{ color: props.mode=='dark'?'red':'black' }}>About Us</h1>
        <div className="container py-5" style={props.sstyle} >
            <div className="accordion" id="accordionExample" >
  <div className="accordion-item" style={props.sstyle}>
    <h2 className="accordion-header" id="headingOne" style={props.sstyle}>
      <button style={props.sstyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" style={props.sstyle} className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  
  <div className="accordion-item" style={props.sstyle}>
    <h2 className="accordion-header" id="headingThree" style={props.sstyle}>
      <button style={props.sstyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" style={props.sstyle} className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
<div className="container">
<button type="button" onClick={props.abtfun} className="mx-2 my-3 btn btn-primary">{props.titlebtn}</button>
</div>
        </div>
        </>
    )
}
