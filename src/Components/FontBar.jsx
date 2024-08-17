import React, { useEffect, useState } from 'react';

const FontBar = ({ onApplyStyles }) => {
    const [fonts, setFonts] = useState([]);
    const [selectedFont, setSelectedFont] = useState('Roboto');
    const [sizeOfFont, setSizeOfFont] = useState(16);
    const [weightOfFont, setWeightOfFont] = useState(400);
    const [isItalic, setIsItalic] = useState(false);
    const [isBold, setIsBold] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [sampleStyle, setSampleStyle] = useState({});

    const fetchFonts = async () => {
        const id = 'AIzaSyAoWNjLkviODqvSiLxnSzFL-JjdMVv06hw';
        let response = await fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=${id}`);
        let data = await response.json();
        let list = data.items.map(font => font.family);
        return list;
    };

    useEffect(() => {
        const loadFonts = async () => {
            let fontList = await fetchFonts();
            setFonts(fontList);
        };
        loadFonts();
    }, []);

    useEffect(() => {
        const fontName = selectedFont.replace(/ /g, '+');
        const fontLinkId = `font-link-${fontName}`;

        // Check if the link already exists
        if (!document.getElementById(fontLinkId)) {
            const fontLink = document.createElement('link');
            fontLink.id = fontLinkId;
            fontLink.href = `https://fonts.googleapis.com/css2?family=${fontName}&display=swap`;
            fontLink.rel = 'stylesheet';
            document.head.appendChild(fontLink);
        }

        setSampleStyle({
            fontFamily: selectedFont,
            fontSize: `${sizeOfFont}px`,
            fontWeight: isBold ? 'bold' : weightOfFont,
            fontStyle: isItalic ? 'italic' : 'normal',
        });
    }, [selectedFont, sizeOfFont, weightOfFont, isItalic, isBold]);

    const applyStyle = () => {
        onApplyStyles({
            fontFamily: selectedFont,
            fontSize: `${sizeOfFont}px`,
            fontWeight: isBold ? 'bold' : weightOfFont,
            fontStyle: isItalic ? 'italic' : 'normal',
        });
    };

    const filteredFonts = fonts.filter(font => font.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className="fontbar">
            <h1>Fonts</h1>
            <h5>Choose your wish</h5>
            <div>
                <input  type="text"  placeholder="Search fonts..."  value={searchTerm}  onChange={(e) => setSearchTerm(e.target.value)}  className="font-search"/>
                <select id="select-font" value={selectedFont} onChange={(e) => setSelectedFont(e.target.value)} className="font-select">
                    {filteredFonts.map((font, index) => (
                        <option value={font} key={index}>
                            {font}
                        </option>
                    ))}
                </select>
                
                <div>
                    <label htmlFor="weightoffont" className="font-label">Weight</label>
                    <input  type="number"  id="weightoffont"  value={weightOfFont}  onChange={(e) => setWeightOfFont(e.target.value)}  className="font-input" />
                </div>
                
                <div className='check'>
                    <input  type="checkbox"  id="italicfont"  checked={isItalic}  onChange={(e) => setIsItalic(e.target.checked)}  className="font-checkbox" />
                    <label htmlFor="italicfont" className="font-label">Italic</label>
                </div>
                
                <div className='check'>
                    <input  type="checkbox"  id="boldfont"  checked={isBold}  onChange={(e) => setIsBold(e.target.checked)}  className="font-checkbox" />
                    <label htmlFor="boldfont" className="font-label">Bold</label>
                </div>
                
                <input  type="text"  value="AaBbCcXxYyZz"  id="sample-text"  readOnly  style={sampleStyle}  className="sample-text" />
                
                <button onClick={applyStyle} className="apply-button">Apply</button>
            </div>
        </div>
    );
};

export default FontBar;
