const SecondMenu = ({setSelectedtemplate}) => {
  
  return (
    <>
        <div className="secondmenu">
          <h1>Templates</h1>
          <h5>Choose your wish</h5>
          <div className="templates">
            <img src="./template6.webp" alt="img not found" onClick={()=> setSelectedtemplate("6")}/>
            <img src="./template7.png" alt="img not found" onClick={()=> setSelectedtemplate("7")}/>
            <img src="./template8.png" alt="img not found" onClick={()=> setSelectedtemplate("9")}/>
            <img src="./template9.avif" alt="img not found" onClick={()=> setSelectedtemplate("8")}/>
       
          </div>
        </div>
    </>
  );
}

export default SecondMenu;
