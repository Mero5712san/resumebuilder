import { useState } from 'react';
import { SketchPicker } from 'react-color';

const ColourBar = ({setcolour}) => {
    let [currentthemecolor, setcurrentthemecolor] = useState({ r: 30, g: 28, b: 51, a: 1 });
    let [currentfontcolor, setcurrentfontcolor] = useState({ r: 128, g: 128, b: 131, a: 1 });
    let [currentheadingcolor,setcurrentheadingcolour] = useState({ r: 0, g: 0, b: 0, a: 1 })
    let [currentinfontcolor,setcurrentinfontcolor] = useState({ r: 138, g: 138, b: 141, a: 1 })

    let [active ,setactive ] = useState('theme')

    const rgbaString = (color) => {
        return `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
    };

    const handleColorChange = (color, type) => {
        const updatedColor = rgbaString(color.rgb);
        setcolour(prevState => ({
          ...prevState,
          [type]: updatedColor
        }));
      }

    return (
        <>  
            <div className='colourbar'>
                <h1>Colors</h1>
                <h5>Choose your wish</h5>
                    <div className="menu">
                        <li onClick={()=>{setactive("theme")}} className={active == "theme" ? "active" : ""}>Theme</li>
                        <li onClick={()=>{setactive("font")}} className={active == "font" ? "active" : ""}>Font</li>
                        <li onClick={()=>{setactive("heading")}} className={active == "heading" ? "active" : ""}>Headings</li>
                        <li onClick={()=>{setactive("infont")}} className={active == "infont" ? "active" : ""}>Discription</li>
                    </div>
                <div className='col'> 
                    {active == "theme"?<span>
                        <div className='box'>
                            <SketchPicker color={currentthemecolor}  onChange={(color) => {setcurrentthemecolor(color.rgb),handleColorChange(color,"theme")}}  width='70%'/>
                        </div>
                        <div className="colorview" style={{background: rgbaString(currentthemecolor)}}>
                            <span>{rgbaString(currentthemecolor)}</span>
                        </div>
                    </span> : ""}
                    {active == "font" ? <span>
                        <div className='box'>
                            <SketchPicker color={currentfontcolor}  onChange={(color) => {setcurrentfontcolor(color.rgb),handleColorChange(color,"font")}}  width='70%' />
                        </div>
                        <div className="colorview" style={{background: rgbaString(currentfontcolor)}}>
                            <span>{rgbaString(currentfontcolor)}</span>
                        </div>
                    </span> :""}

                    {active == "heading" ? <span>
                        <div className='box'>
                            <SketchPicker color={currentheadingcolor}  onChange={(color) => {setcurrentheadingcolour(color.rgb),handleColorChange(color,"heading")}}  width='70%' 
                            />
                        </div>
                        <div className="colorview" style={{background: rgbaString(currentheadingcolor)}}>
                            <span>{rgbaString(currentheadingcolor)}</span>
                        </div>
                    </span> : ""}
                    {active == "infont" ?<span>
                        <div className='box'>
                            <SketchPicker color={currentinfontcolor}  onChange={(color) => {setcurrentinfontcolor(color.rgb),handleColorChange(color,"infont")}}  width='70%' 
                            />
                        </div>
                        <div className="colorview" style={{background: rgbaString(currentinfontcolor)}}>
                            <span>{rgbaString(currentinfontcolor)}</span>
                        </div>
                    </span> : ""}

                </div>
            </div>
        </>
    );
}

export default ColourBar;
