import React, {useState} from 'react'
//import Button from './components/Button';
import About from './components/About';
import Alert from './components/Alert';
import Nav from './components/Nav';
import Service from './components/Service';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'






function App() {
  const [mode, setMode] = useState('light');
  const [statusofMode, setstatusofMode] = useState('Dark mode off');
  const [stastatusofText, setstatusofText] = useState('text-light');
  const [btntitle, darkModeButtonText]= useState('Dark mode on');
  const [myStyle, darkModeFun ]= useState({backgroundColor:"white", color:"black" });
  const [alertMsg, setalertMsg] = useState(null);
  const [chkmode, chkmodestate] = useState(false);
  const [passclass, myclassname] = useState('')
  const [addrootclass, addrootclassylw] = useState('')
  const [funnameyellow, setyellow] = useState({backgroundColor:"white"});
  const [btnColrs, buttoncolrs] = useState('primary');

  const myfunnameyellow = () => {
    if(funnameyellow.backgroundColor === 'white'){   
      setyellow({backgroundColor:"yellow"});
      chkmodestate(true);
      myclassname('ylwclass');
      addrootclassylw('rgylw');
      document.body.style.backgroundColor = 'yellow';
      darkModeButtonText("Yellow mode on");
      buttoncolrs('c13');
    }
    else{
      setyellow({backgroundColor:"white"});
      chkmodestate(false);
      myclassname('');
      addrootclassylw('');
      document.body.style.backgroundColor = '';
      darkModeButtonText("Yellow mode off");
      buttoncolrs('primary');
    }
  }

  const showalert = (message,type) => {
  setalertMsg({msg : message,type: type})
  setTimeout(() => {setalertMsg(null);}, 1500); 
}
  
  const enableMymode = () => {
     if(mode === 'light'){
      setMode('dark');
      setstatusofMode('Dark mode on');
      setstatusofText('text-light');
      document.body.style.backgroundColor = "black";
      darkModeFun({ backgroundColor:"black", color:"white" });
      darkModeButtonText("Dark mode on");
      showalert('drak mode has been enabled','success');
      buttoncolrs('ccc');
     }
     else {
      setMode('light');
      setstatusofMode('Dark mode off');
      setstatusofText('text-dark');
      document.body.style.backgroundColor = "white";
      darkModeFun({backgroundColor:"white",color:"black"});
      darkModeButtonText("Dark mode off");
      showalert('drak mode has been disabled','success');
      buttoncolrs('primary');
     }
   }

   const clickonDrak = () => {
    if(myStyle.color === "black"){
        darkModeFun({

         backgroundColor:"black",
         color:"white"

        });
     
        darkModeButtonText("Dark mode off");
        showalert('drak mode has been enabled');

    }
    else {
     darkModeFun({

         backgroundColor:"white",
         color:"black"

        });
        darkModeButtonText("Dark mode on");   
        showalert('drak mode has been disabled');
    }
 }

  return (
    <Router>
    <>
    <Nav mode={mode} myfunname={enableMymode} darkmodestatus={statusofMode} textlight={stastatusofText} 
    enableyellow={myfunnameyellow} bkgcolr={funnameyellow} chk={chkmode} addcls={passclass} clsnm={addrootclass}/>
    <Alert alertmsg={alertMsg} />
    <div className={`container ${addrootclass}`}>
    

   <Switch>
  <Route exact path="/Service" >
  <Service title="Enter your text here" sstyle={myStyle} showalert={showalert} clsnm={addrootclass} btnclr={btnColrs}/>
  </Route>

  <Route exact path="/About">
  <About sstyle={myStyle} abtfun={clickonDrak} titlebtn={btntitle} mode={mode}/>

  </Route>

   </Switch>
   
</div>
    </>
    </Router> 
  );
}

export default App;
