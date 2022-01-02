import React, { useState, useEffect } from "react";
import saveTextColor from '../helpers/setColors'
import getCategories from "../helpers/getCategories";
import saveCategorie from '../helpers/setCategories'

const Settings = () => {
    const [textColor, setTextColor] = useState(getComputedStyle(document.documentElement).getPropertyValue('--textColor'))
    const [bgColor, setBgColor] = useState(getComputedStyle(document.documentElement).getPropertyValue('--bgColor'))
    const [addCat, setAddCat] = useState('')
    const [categories, setCategories] = useState([])
    

    useEffect(() => {
        getCategories().then((categories)=>{
            if (!categories.categories) return;
            setCategories(categories.categories)
        })
    }, [])
    
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

    const addCategory = () => {
        const newCatArr = [...categories, addCat];
        setCategories(newCatArr);
        const saveObject = {
            "categories" : newCatArr
        }
        saveCategorie(saveObject);
    }
    return(
        <div>
            Settings
            <div className="colors">
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
            <div className="categories">
                <div>
                    <label htmlFor="addCat">Add Categorie</label>
                    <input name="addCat" id="addCat" type="text" value={addCat} onChange={(e)=>{setAddCat(e.target.value)}}></input>
                    <button onClick={addCategory}>add</button>
                </div>
                <table>
                    <tbody>
                        <tr>
                            {categories.map((category) => {
                                return(
                                    <td key={category}> {category}</td>
                                )
                            })}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Settings;
