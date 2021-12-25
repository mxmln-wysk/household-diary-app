import React, { useState } from "react";
import saveTextColor from '../helpers/setColors'


const Settings = () => {
    const [textColor, setTextColor] = useState(getComputedStyle(document.documentElement).getPropertyValue('--textColor'))
    const [bgColor, setBgColor] = useState(getComputedStyle(document.documentElement).getPropertyValue('--bgColor'))
    const handleTextColor = (color:string) =>{
        document.documentElement.style.setProperty("--textColor", color);
        setTextColor(color);
       
    }
    const handleBgColor = (color:string) =>{
        document.documentElement.style.setProperty("--bgColor", color);
        setBgColor(color)
    }
    const save = () => {
        const Colors = {
            'textColor': textColor,
            'bgColor': bgColor,
        }
        saveTextColor(Colors)
    }

    const setDefault = () =>{
        document.documentElement.style.setProperty("--textColor", '#F77067');
        document.documentElement.style.setProperty("--bgColor", '#2c3746');
        setTextColor( '#F77067');
        setBgColor('#2c3746');
    }

    return(
        <div>
            Settings
            <div>
                <label htmlFor="color">Text Color</label>
                <input id="color" value={textColor} onChange={(e)=>{handleTextColor(e.target.value)}} type={'color'} />
            </div>
            <div>
                <label htmlFor="bg">background Color</label>
                <input id="bg" value={bgColor} onChange={(e)=>{handleBgColor(e.target.value)}} type={'color'} />
            </div>
            <div>
                <button onClick={save}>save</button>
            </div>
            <div>
                <button onClick={setDefault}>return to default</button>
            </div>
        </div>
    )
}

export default Settings;
