import React, { useState } from 'react';
import './App.css'
import Draft from './Components/designs/Draft.jsx'
import Menu from './Components/Menu.jsx'
import ColourBar from './Components/ColourBar.jsx'
import UserInfo from './Components/UserInfo.jsx'
import FontBar from './Components/FontBar.jsx'
import SecondMenu from './Components/SecondMenu.jsx'
import PreviewandSave from './Components/PreviewandSave.jsx'
const App = () => {

  let [currenttab, setcurrenttab] = useState("template")
  let [colour,setcolour] = useState({
    theme:"rgba(30, 28, 51, 1)",
    font:'rgba(128, 128, 131, 1)',
    heading:'rgba(255, 255, 255, 1)',
    infont:'rgba(138, 138, 141, 1)'
  });

  let [onApplyStyles, setonApplyStyles] = useState({
    fontFamily: 'Arial',
    fontSize: '',
    fontWeight: '400',
    fontStyle: 'normal',
  });

  // console.log(onApplyStyles)
  return (
    <>
      <div className="page">
      <div className="maintopbar">
        <h2><span>RE</span>SUMEO</h2>
        <h2>Resume Builder</h2>
        <h2>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M399 384.2C376.9 345.8 335.4 320 288 320l-64 0c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"/></svg>
        </h2>
      </div>
      <div className="maincontainer">
        <div className="sidebar">
          <Menu onvaluechange={(data)=>setcurrenttab(data)}/>
        </div>
        <div className="secondbar">
          {currenttab === "template"?<SecondMenu />:''}
          {currenttab === "user"?<UserInfo  />:''}
          {currenttab === "colour"?<ColourBar setcolour = {setcolour} />:''}
          {currenttab === "font"?<FontBar onApplyStyles = {(newstyle)=>{setonApplyStyles(newstyle)}} />:''}
          {currenttab === "save"?<PreviewandSave />:''}
        </div>
        <div className='draft'>
          <h3 className='head'>preview page </h3>
            <Draft colour = {colour} fontstyle ={onApplyStyles} />
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
